---
title: 'Tier I a IV: o que muda de verdade'
description: O que significa cada Tier de datacenter, quanto tempo parado cada um aceita e o que o Tier não garante.
sidebar:
  order: 1
---

Todo datacenter se vende como "Tier III". Mas o que isso garante, e o que **não** garante?

## Em uma frase

O Tier diz **o quanto a infraestrutura física aguenta falha e manutenção sem derrubar o que está rodando**. Ele não fala do teu servidor, da tua rede ou do teu backup.

A classificação mais conhecida é a do **Uptime Institute** (Tier I a IV). Também existe a norma **ANSI/TIA-942**, que usa "Rated 1 a 4" com uma lógica parecida.

## Os quatro níveis

| Tier | Ideia central | Disponibilidade de referência | Parada por ano (aprox.) |
|---|---|---|---|
| **I** | Básico: um caminho de energia e refrigeração, sem redundância | 99,671% | ~28,8 h |
| **II** | Componentes redundantes (N+1), mas ainda **um caminho** só | 99,741% | ~22 h |
| **III** | Manutenível sem parar: **dois caminhos**, dá para desligar qualquer peça para manutenção | 99,982% | ~1,6 h |
| **IV** | Tolerante a falha: uma falha qualquer não derruba nada | 99,995% | ~26 min |

As porcentagens são referências históricas usadas no mercado. A certificação do Uptime avalia o **projeto e a construção**, não promete um número de uptime.

## A analogia

Pensa numa estrada até a tua casa:

- **Tier I:** uma estrada só. Se ela fecha para obra, tu fica em casa.
- **Tier II:** uma estrada só, mas com estepe no carro. Ajuda se um pneu fura, não se a estrada fecha.
- **Tier III:** duas estradas. Dá para fechar uma para obra e usar a outra.
- **Tier IV:** duas estradas funcionando ao mesmo tempo. Se uma desmorona do nada, ninguém percebe.

## A diferença que mais importa: III x IV

- **Tier III** é sobre **manutenção planejada**. Dá para trocar um nobreak sem desligar nada. Mas uma falha **inesperada**, no momento errado, ainda pode derrubar.
- **Tier IV** é sobre **falha inesperada**. Os dois caminhos estão ativos o tempo todo e isolados um do outro.

A maior parte do mercado de colocation fica no Tier III, porque o salto para o IV custa muito.

## O que o Tier não resolve

Esse é o erro mais comum:

- Servidor com **uma fonte só** num datacenter Tier III não aproveita os dois caminhos de energia. Se o circuito dele cair, ele cai junto.
- O Tier não cobre o **teu** switch, o **teu** storage, o **teu** cluster e o **teu** backup.
- Erro humano continua sendo a principal causa de parada.

## Resumo

1. O Tier mede a infraestrutura **física** do prédio: energia e refrigeração.
2. O III permite **manutenção sem parada**. O IV aguenta **falha sem parada**.
3. Um Tier alto não salva uma arquitetura sem redundância do teu lado.
