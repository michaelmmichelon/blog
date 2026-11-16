---
title: 'Níveis de RAID explicados: 0, 1, 5, 6 e 10'
description: Como cada nível de RAID funciona, quanto espaço sobra, quantos discos podem falhar e quando usar cada um.
sidebar:
  order: 1
---

RAID não é backup (tem [artigo só sobre isso](../../backup/raid-nao-e-backup/)). Mas escolher o RAID certo decide se o servidor aguenta um disco morto e quão rápido ele roda.

:::note[Em uma frase]
O RAID combina discos para ganhar **desempenho**, **tolerância a falha** ou os dois. Cada nível troca **espaço útil** por **segurança**.
:::

## Comparação rápida

Exemplo com discos de **4 TB**:

| Nível | Mínimo de discos | Espaço útil (4 discos) | Discos que podem falhar | Uso típico |
|---|---|---|---|---|
| **RAID 0** | 2 | 16 TB | **Nenhum** | Dado temporário, onde velocidade importa e perda não |
| **RAID 1** | 2 | 4 TB (com 2 discos) | 1 | Disco do sistema operacional |
| **RAID 5** | 3 | 12 TB | 1 | Arquivos, leitura pesada, discos pequenos |
| **RAID 6** | 4 | 8 TB | 2 | Storage com discos grandes |
| **RAID 10** | 4 | 8 TB | 1 por espelho (até 2 com sorte) | VMs e bancos de dados |

## Como cada um funciona

- **RAID 0 (striping):** divide o dado entre os discos. Muito rápido, mas **um disco morto perde tudo**. Não é redundância.
- **RAID 1 (espelho):** grava o mesmo dado em dois discos. Simples e seguro, mas metade do espaço vai embora.
- **RAID 5 (paridade simples):** espalha o dado e uma informação de paridade entre os discos. Se um morre, a paridade reconstrói.
- **RAID 6 (paridade dupla):** igual ao 5, com duas paridades. Aguenta dois discos mortos.
- **RAID 10 (espelho + striping):** pares espelhados, e o dado dividido entre os pares. Rápido para escrita e com reconstrução rápida.

## O perigo do RAID 5 com disco grande

Quando um disco morre, o RAID precisa **ler todos os outros discos inteiros** para reconstruir (*rebuild*). Com discos de vários terabytes:

- o rebuild pode levar **horas ou dias**;
- os discos restantes trabalham no limite, e geralmente são do mesmo lote e da mesma idade;
- se **mais um** falhar durante o rebuild, o RAID 5 perde tudo.

Por isso, com discos grandes, o mercado prefere **RAID 6** ou **RAID 10**.

## Qual escolher

- **VMs e banco de dados:** RAID 10. Escrita aleatória rápida e rebuild rápido.
- **Arquivos e backup, com discos grandes:** RAID 6.
- **Sistema operacional:** RAID 1.
- **RAID 0:** só se perder o dado não fizer diferença nenhuma.

:::tip[Resumo]
1. Mais segurança custa espaço: RAID 1 e 10 entregam metade; RAID 6 perde dois discos.
2. RAID 5 com disco grande é arriscado por causa do rebuild longo.
3. Para VM, RAID 10. Para volume grande, RAID 6. E backup sempre, separado.
:::
