---
title: O que é um hipervisor
description: O software que transforma um servidor físico em vários servidores virtuais, os tipos 1 e 2 e por que tudo roda em VM hoje.
sidebar:
  order: 1
---

Quase nenhum serviço roda direto num servidor físico hoje. Entre o hardware e o sistema existe uma camada que quase ninguém vê: o hipervisor.

:::note[Em uma frase]
O **hipervisor** divide um servidor físico em vários **servidores virtuais (VMs)**, cada um achando que tem processador, memória, disco e rede só para ele.
:::

## A analogia

O servidor físico é um **prédio**. O hipervisor é a **administração do condomínio**: divide o prédio em apartamentos (VMs), garante que um morador não entre no apartamento do outro e distribui água e luz (CPU, RAM, disco, rede) entre todos.

## Tipo 1 x tipo 2

| Tipo | Onde roda | Exemplos | Uso |
|---|---|---|---|
| **Tipo 1 (bare metal)** | Direto no hardware | Proxmox VE (KVM), VMware ESXi, Hyper-V, XCP-ng | Servidores e datacenter |
| **Tipo 2 (hospedado)** | Em cima de um sistema comum | VirtualBox, VMware Workstation | Teste e estudo no PC |

Em datacenter, é sempre tipo 1: menos camadas, mais desempenho, mais estabilidade.

## Por que tudo virou VM

- **Aproveitamento:** um servidor físico que ficava 10% ocupado passa a rodar dez sistemas.
- **Isolamento:** um sistema travado não derruba os outros.
- **Snapshot e backup da máquina inteira** com um clique.
- **Mover VM entre servidores** sem desligar (*live migration*).
- **Independência de hardware:** a VM não sabe nem se importa com a marca do servidor.
- **Subir um servidor novo em minutos**, a partir de um modelo.

## O que o hipervisor não resolve

- **Se o servidor físico morre, todas as VMs nele caem.** Para isso existe [cluster e HA](../cluster-quorum-e-ha/).
- **Superlotação.** Colocar mais VMs do que o hardware aguenta deixa todas lentas.
- **Backup.** Snapshot não é backup (veja [backup x snapshot x réplica](../../backup/backup-snapshot-replica/)).

:::tip[Resumo]
1. O hipervisor divide um servidor físico em várias VMs isoladas.
2. Datacenter usa tipo 1: Proxmox, ESXi, Hyper-V.
3. Um servidor físico vira um ponto único de falha para todas as VMs dele. Por isso existe o cluster.
:::
