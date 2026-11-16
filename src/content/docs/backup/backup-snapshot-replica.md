---
title: 'Backup x snapshot x réplica'
description: Três formas de "ter uma cópia" que protegem contra coisas diferentes, e por que uma não substitui a outra.
sidebar:
  order: 4
---

"Tem snapshot, então tem backup." "Tem réplica, então está protegido." As três palavras parecem a mesma coisa e protegem contra problemas bem diferentes.

:::note[Em uma frase]
O **snapshot** é uma foto rápida no **mesmo** storage. A **réplica** é uma cópia quase em tempo real em **outro** lugar. O **backup** é uma cópia **independente, com histórico**, guardada separada.
:::

## Comparação

| Ponto | Snapshot | Réplica | Backup |
|---|---|---|---|
| Onde fica | No mesmo storage do original | Em outro servidor/storage | Em outro sistema, separado |
| Velocidade para criar | Segundos | Contínua ou a cada poucos minutos | Minutos a horas |
| Histórico | Curto (poucos pontos) | Geralmente o último estado | Longo (dias, meses, anos) |
| Se o storage morre | **Perde junto** | Sobrevive | Sobrevive |
| Se apagam ou criptografam o dado | Ajuda se for recente | **Replica o estrago** | Recupera a versão anterior |
| Uso principal | Voltar atrás antes de uma mudança | Voltar a funcionar rápido (RTO baixo) | Recuperar dado de qualquer ponto |

## Quando usar cada um

- **Snapshot:** antes de atualizar um sistema ou aplicar uma mudança arriscada. Se der errado, volta em segundos. **Apaga depois**: snapshot velho acumulando deixa o disco lento e cheio.
- **Réplica:** para ligar a VM em outro servidor rápido, se o principal morrer (ex.: replicação ZFS no Proxmox).
- **Backup:** para tudo o resto: exclusão, corrupção, ransomware, auditoria, "preciso do arquivo de mês passado".

## O perigo da réplica

A réplica copia **tudo**, inclusive o problema. Se um ransomware criptografa a VM, a réplica recebe os arquivos criptografados em minutos. Ela protege contra **hardware morto**, não contra **dado estragado**.

## A combinação ideal

Os três juntos se completam:

1. **Snapshot** para mudanças do dia a dia.
2. **Réplica** para voltar rápido se um servidor cair.
3. **Backup** com histórico e cópia fora do local para todo o resto.

:::tip[Resumo]
1. Snapshot fica no mesmo storage: não sobrevive se ele morrer.
2. Réplica copia o erro junto: protege o hardware, não o dado.
3. Só o backup tem histórico e independência. Os três se completam.
:::
