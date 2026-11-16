---
title: VM x container
description: A diferença real entre máquina virtual e container, o que cada um isola e quando usar cada um.
sidebar:
  order: 2
---

"Container é uma VM mais leve." A frase é quase certa, e o "quase" é justamente o que importa.

:::note[Em uma frase]
A **VM** simula uma **máquina inteira**, com o próprio kernel. O **container** é um **processo isolado** que divide o kernel com o servidor onde roda.
:::

## Lado a lado

```
        MÁQUINAS VIRTUAIS                       CONTAINERS
 ┌────────┐ ┌────────┐ ┌────────┐     ┌────────┐ ┌────────┐ ┌────────┐
 │  App   │ │  App   │ │  App   │     │  App   │ │  App   │ │  App   │
 │ Kernel │ │ Kernel │ │ Kernel │     └────────┘ └────────┘ └────────┘
 └────────┘ └────────┘ └────────┘     ┌──────────────────────────────┐
 ┌──────────────────────────────┐     │   Kernel do servidor (um só) │
 │          Hipervisor          │     └──────────────────────────────┘
 └──────────────────────────────┘
 ┌──────────────────────────────┐     ┌──────────────────────────────┐
 │           Hardware           │     │           Hardware           │
 └──────────────────────────────┘     └──────────────────────────────┘
```

## Comparação

| Ponto | VM | Container |
|---|---|---|
| Isola | Máquina inteira, kernel incluso | Processos, arquivos e rede |
| Sistema operacional | Qualquer um (Windows, Linux, BSD) | O mesmo kernel do servidor (Linux em Linux) |
| Tempo para subir | Dezenas de segundos | Segundos ou menos |
| Peso | GBs de RAM e disco | MBs |
| Segurança do isolamento | Mais forte | Mais fraca: o kernel é compartilhado |

## No Proxmox: VM e LXC

O Proxmox oferece os dois:

- **VM (KVM):** para Windows, sistemas que precisam de kernel próprio ou isolamento forte.
- **Container LXC:** um Linux "inteiro" mais leve, bom para serviços Linux simples (DNS, proxy, monitoramento).

O **Docker** é outro tipo de container, focado em empacotar **uma aplicação**. É comum rodar Docker dentro de uma VM.

## Quando usar cada um

- **VM:** Windows, sistemas legados, isolamento forte, ambientes de clientes diferentes no mesmo servidor.
- **Container:** muitos serviços Linux leves, aplicações modernas, ambientes que sobem e descem rápido.

:::tip[Resumo]
1. VM tem kernel próprio; container divide o kernel do servidor.
2. Container é mais leve e rápido; VM isola mais e roda qualquer sistema.
3. Na prática, os dois convivem: muitas vezes o container roda dentro de uma VM.
:::
