---
title: 'Redundância N, N+1 e 2N'
description: O que significam N, N+1, 2N e 2(N+1) em datacenter, com exemplos de nobreak e ar-condicionado.
sidebar:
  order: 3
---

Toda proposta de datacenter fala em "N+1" ou "2N". São só três ideias, e entender cada uma evita pagar caro por proteção que não existe.

:::note[Em uma frase]
**N** é a quantidade **mínima** de equipamentos para aguentar a carga. Todo o resto (+1, 2N) é o quanto sobra quando algo quebra.
:::

## Os níveis

Exemplo: a sala precisa de **3 ar-condicionados** para manter a temperatura. Então **N = 3**.

| Nível | Quantos equipamentos | Aguenta |
|---|---|---|
| **N** | 3 | Nada. Se um parar, a sala esquenta |
| **N+1** | 4 | A falha (ou manutenção) de **um** equipamento |
| **N+2** | 5 | A falha de **dois** equipamentos |
| **2N** | 6, em **dois sistemas independentes** de 3 | A perda de um **sistema inteiro** |
| **2(N+1)** | 8, em dois sistemas de 4 | A perda de um sistema inteiro **e** de mais um equipamento no outro |

## A diferença que importa: N+1 x 2N

- **N+1** tem uma peça a mais, mas **um sistema só**. Se o quadro elétrico ou a tubulação que alimenta todos os equipamentos falhar, tudo cai junto.
- **2N** tem **dois sistemas completos e separados**, cada um sozinho capaz de aguentar tudo. Não existe ponto único que derrube os dois.

A analogia: N+1 é ter um estepe. 2N é ter **dois carros**.

## Onde isso aparece

- **Energia:** nobreaks, geradores, caminhos A e B.
- **Refrigeração:** unidades de ar-condicionado, chillers, bombas.
- **No teu lado:** fontes do servidor, switches, links de internet, nós do cluster.

O raciocínio é o mesmo para o teu cluster Proxmox: se tu precisa de 3 nós para rodar tudo, um cluster com 3 nós é **N**, e não aguenta perder nenhum.

## Erros comuns

- **Contar equipamento redundante que depende do mesmo ponto.** Dois nobreaks no mesmo quadro não são 2N.
- **Usar a folga do +1 como capacidade.** A carga cresce, o "+1" vira parte do N e a redundância some sem ninguém perceber.
- **Achar que N+1 cobre manutenção e falha ao mesmo tempo.** Com um equipamento em manutenção, o N+1 vira N.

:::tip[Resumo]
1. **N** é o mínimo; sem folga nenhuma.
2. **N+1** aguenta a perda de uma peça; **2N** aguenta a perda de um sistema inteiro.
3. Se a carga cresce, revisa a conta: a folga some sem avisar.
:::
