---
title: ZFS x RAID de controladora
description: A diferença entre RAID por hardware e ZFS, por que o ZFS quer ver os discos direto e quando usar cada um.
sidebar:
  order: 2
---

Na hora de montar um servidor Proxmox, aparece a dúvida: usar a controladora RAID do servidor ou deixar o ZFS cuidar dos discos?

:::note[Em uma frase]
Na **controladora RAID**, uma placa esconde os discos e entrega um volume pronto. No **ZFS**, o sistema operacional enxerga cada disco e cuida da redundância, da integridade e dos snapshots ele mesmo.
:::

## Como cada um funciona

- **RAID de controladora (hardware):** a placa monta o RAID e o sistema vê um "disco" só. Geralmente tem cache com bateria (BBU) ou flash, o que acelera a escrita.
- **ZFS (software):** um sistema de arquivos e gerenciador de volumes ao mesmo tempo. Ele monta os espelhos ou o RAIDZ, verifica cada bloco com *checksum* e corrige erros sozinho quando tem redundância.

## Comparação

| Ponto | Controladora RAID | ZFS |
|---|---|---|
| Detecta dado corrompido silenciosamente | Não, em geral | **Sim** (checksum em todo bloco) |
| Corrige sozinho | Não | Sim, usando a cópia boa |
| Snapshots e replicação | Não | **Sim**, nativos |
| Compressão | Não | Sim |
| Depende da placa | Sim: placa morta pode exigir placa igual | Não: o pool roda em qualquer máquina com ZFS |
| Consumo de memória | Baixo | Usa RAM como cache (ARC) |
| Cache de escrita protegido | Sim, com BBU | Depende de configuração (SLOG) |

## A regra de ouro

**ZFS não deve rodar em cima de RAID de controladora.** Ele precisa ver os discos diretos para detectar e corrigir erros. Se a placa esconde os discos, o ZFS perde a capacidade de autocorreção.

Por isso, para usar ZFS, a controladora deve estar em **modo HBA / IT mode** (passa os discos direto), não em modo RAID.

## Quando usar cada um

- **ZFS:** servidores Proxmox e storage em geral, quando se quer snapshots, replicação, integridade e independência de hardware. Hoje é a escolha mais comum em Proxmox.
- **Controladora RAID:** quando o hardware já veio pronto para isso, a RAM é curta, ou o suporte do fabricante exige.

## Erros comuns

- **ZFS em cima de volume RAID da controladora.** Perde a autocorreção.
- **Pouca RAM com ZFS.** Ele funciona, mas perde desempenho.
- **Não rodar o *scrub*.** A verificação periódica é o que encontra erro silencioso antes que ele se espalhe.

:::tip[Resumo]
1. A controladora esconde os discos; o ZFS quer ver cada um.
2. O ZFS detecta e corrige dado corrompido, e ainda traz snapshots e replicação.
3. ZFS sempre com a controladora em modo HBA, nunca em cima de RAID.
:::
