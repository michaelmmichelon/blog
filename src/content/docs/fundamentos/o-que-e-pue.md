---
title: O que é PUE
description: A métrica de eficiência energética dos datacenters, como calcular e o que ela não mostra.
sidebar:
  order: 5
---

Todo datacenter novo anuncia um PUE baixo. É a métrica mais usada para dizer "somos eficientes", e entender ela ajuda a ler esses anúncios com olho crítico.

:::note[Em uma frase]
**PUE** (*Power Usage Effectiveness*) mostra **quanto de energia o prédio inteiro gasta para cada 1 unidade que chega nos equipamentos de TI**.
:::

## A conta

```
PUE = energia total do datacenter ÷ energia dos equipamentos de TI
```

- **PUE 2,0:** para cada 1 kW nos servidores, gasta-se mais 1 kW com refrigeração, perdas, iluminação etc.
- **PUE 1,5:** sobra 0,5 kW de "overhead" para cada 1 kW de TI.
- **PUE 1,0:** o ideal teórico; toda energia vai para a TI. Não existe na prática.

## Para onde vai o que não é TI

- **Refrigeração:** quase sempre a maior fatia.
- **Perdas elétricas:** transformadores, nobreaks, cabos.
- **Iluminação, segurança, escritórios do prédio.**

Por isso o PUE melhora com contenção de corredor, temperatura de operação mais alta (dentro da faixa recomendada), *free cooling* com ar externo e nobreaks mais eficientes.

## Valores de referência

| PUE | Leitura |
|---|---|
| Acima de 2,0 | Ineficiente; comum em salas de servidores improvisadas |
| 1,5 a 2,0 | Típico de datacenters mais antigos |
| 1,2 a 1,5 | Bom; datacenters modernos |
| Abaixo de 1,2 | Excelente; grandes operadores e clima favorável |

São faixas aproximadas. O clima pesa muito: um datacenter em região quente gasta mais com refrigeração do que um em região fria.

## O que o PUE não mostra

- **Se os servidores estão ociosos.** Um datacenter cheio de máquinas ligadas sem uso pode ter PUE ótimo e desperdiçar energia.
- **A origem da energia.** PUE baixo não significa energia renovável.
- **Consumo de água.** Alguns sistemas de refrigeração trocam energia por água. Para isso existe o WUE.
- **Comparação justa entre lugares.** O momento da medição, o clima e o que entra na conta mudam o número.

:::tip[Resumo]
1. PUE = energia total ÷ energia de TI. Quanto mais perto de 1, melhor.
2. A refrigeração é o que mais pesa no número.
3. PUE baixo não garante servidor bem usado nem energia limpa.
:::
