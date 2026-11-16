---
title: Cluster, quorum e HA
description: Como um cluster de virtualização decide quem manda, o que é quorum e por que dois nós sem desempate é cilada.
sidebar:
  order: 3
---

Um cluster existe para que um servidor morto não derrube as VMs. Mas para isso funcionar, os servidores precisam concordar sobre quem está vivo. É aí que entra o quorum.

:::note[Em uma frase]
**Cluster** é um grupo de servidores trabalhando juntos. **Quorum** é a **maioria** que precisa estar de acordo para o cluster tomar decisões. **HA** é religar as VMs de um servidor morto em outro, sozinho.
:::

## Por que precisa de maioria

Imagina dois servidores que perdem a comunicação entre si. Cada um pensa: "o outro morreu, vou assumir as VMs dele". Os dois ligam **as mesmas VMs** gravando no **mesmo disco** ao mesmo tempo. O dado corrompe.

Isso se chama ***split-brain***. O quorum evita: **só o lado que tem a maioria dos votos pode agir**. O lado em minoria para.

## A conta dos votos

| Nós no cluster | Maioria necessária | Pode perder |
|---|---|---|
| 2 | 2 | **Nenhum** |
| 3 | 2 | 1 |
| 4 | 3 | 1 |
| 5 | 3 | 2 |

Repara: **4 nós aguentam a mesma falha que 3**. Por isso clusters costumam ter número **ímpar** de votos.

## A cilada dos dois nós

Com dois nós, a maioria é **2 de 2**. Se um cai, o outro fica com 1 voto, que não é maioria, e **para de agir**. O HA não funciona justo quando seria necessário.

A solução é um **terceiro voto de desempate**. No Proxmox, isso é o **QDevice**: um serviço leve, rodando numa máquina fora do cluster (pode ser algo pequeno), que só vota.

## Como o HA age

1. Um nó para de responder.
2. O cluster (com quorum) confirma que ele está fora.
3. O nó com problema é isolado (*fencing*), para garantir que ele não continue gravando.
4. As VMs dele **reiniciam** em outro nó.

Repara: no HA as VMs **reiniciam**. Há uma parada de alguns minutos. Não é migração ao vivo.

## O que o HA precisa

- **Storage compartilhado ou replicado** (Ceph, NFS, iSCSI, ou replicação ZFS), para que outro nó enxergue o disco da VM.
- **Folga de recurso**: os nós restantes precisam ter CPU e RAM para receber as VMs.
- **Rede do cluster estável e, de preferência, separada**.

:::tip[Resumo]
1. O quorum exige maioria, para evitar que dois nós assumam a mesma VM.
2. Dois nós sem QDevice não aguentam perder nenhum.
3. HA **reinicia** a VM em outro nó; precisa de storage compartilhado e folga de recurso.
:::
