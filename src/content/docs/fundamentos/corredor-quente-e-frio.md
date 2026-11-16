---
title: Corredor quente e corredor frio
description: Por que os racks ficam frente com frente, como o ar circula num datacenter e os erros que esquentam o servidor.
sidebar:
  order: 2
---

Num datacenter, quem manda é o **ar**. Servidor não queima por falta de ar-condicionado, e sim porque o ar frio não chega onde precisa.

## Em uma frase

Os racks são alinhados **frente com frente** e **costas com costas**, criando um corredor só de ar frio, de onde os servidores puxam o ar, e outro só de ar quente, para onde eles sopram.

## Como o ar circula

```
   [ar-condicionado]
          │ ar frio (piso elevado ou duto)
          ▼
 ┌──────┐  CORREDOR   ┌──────┐
 │ rack │◄── FRIO ──►│ rack │
 │frente│             │frente│
 └──────┘             └──────┘
    │ ar quente sai por trás │
    ▼                        ▼
 CORREDOR QUENTE      CORREDOR QUENTE
          │
          ▼ volta para o ar-condicionado
```

1. O ar-condicionado joga ar frio no **corredor frio**.
2. Os servidores puxam esse ar pela **frente**.
3. O ar sai quente pela **traseira**, no **corredor quente**.
4. O ar quente volta para o ar-condicionado, sem se misturar com o frio.

## Por que separar

Se o ar quente se mistura com o frio, o servidor recebe ar morno. Para compensar, o ar-condicionado precisa trabalhar mais, e a conta de energia sobe. É por isso que esse arranjo aparece em todo datacenter sério.

A ASHRAE (referência mundial em climatização) recomenda que o ar **na entrada** do servidor fique, em geral, entre **18 °C e 27 °C**. O que vale é a temperatura na frente do servidor, não a da sala.

## Contenção: o passo seguinte

Para separar de vez, fecha-se um dos corredores com portas e teto:

- **Contenção de corredor frio:** o frio fica preso na frente dos racks.
- **Contenção de corredor quente:** o quente fica preso atrás e é levado direto para o retorno.

## Erros comuns que esquentam o rack

- **Espaço vazio no rack sem tampa cega (blanking panel).** O ar quente volta pela frente por esse buraco.
- **Servidor montado ao contrário,** soprando no corredor frio.
- **Cabos amontoados atrás,** bloqueando a saída do ar quente.
- **Placa perfurada do piso no lugar errado,** jogando ar frio no corredor quente.
- **Medir só a temperatura da sala** e não a entrada dos servidores.

## Resumo

1. Os racks ficam frente com frente: um corredor frio, um quente.
2. O ar quente não pode voltar para a frente do servidor.
3. Tampa cega e organização de cabos são refrigeração, não estética.
