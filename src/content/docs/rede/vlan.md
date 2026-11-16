---
title: VLAN explicada
description: Como uma VLAN separa redes no mesmo switch, o que é porta access e trunk e como isso aparece na virtualização.
sidebar:
  order: 1
---

Num datacenter, a rede dos servidores, a rede de backup, a rede de gerência e a rede dos clientes passam pelos mesmos switches. O que mantém tudo separado é a VLAN.

:::note[Em uma frase]
A **VLAN** divide um switch físico em **várias redes lógicas isoladas**. Equipamentos em VLANs diferentes não se enxergam, mesmo estando no mesmo switch.
:::

## A analogia

O switch é um **prédio comercial**. Cada VLAN é um **andar** com acesso por crachá: quem está no 3º andar não entra no 5º. Para passar de um andar para outro, é preciso passar pela **recepção** (o roteador ou o firewall), que decide quem pode.

## Access x trunk

- **Porta access:** pertence a **uma** VLAN. O equipamento ligado nela nem sabe que VLAN existe. Ex.: um PC, uma impressora.
- **Porta trunk:** carrega **várias** VLANs ao mesmo tempo, cada pacote marcado com a etiqueta (*tag*) da sua VLAN (padrão **802.1Q**). Ex.: a ligação entre switches, ou entre o switch e um servidor de virtualização.

```
              [ Switch ]
   porta 1 (access VLAN 10) ── PC do financeiro
   porta 2 (access VLAN 20) ── câmera
   porta 24 (trunk 10,20,30) ── servidor Proxmox
                                  ├─ VM A → VLAN 10
                                  ├─ VM B → VLAN 20
                                  └─ VM C → VLAN 30
```

## Na virtualização

O servidor de virtualização recebe um **trunk** e entrega cada VM na VLAN certa. No Proxmox, isso é a **bridge com "VLAN aware"** ligada: na VM, basta informar o número da VLAN (o *tag*) na placa de rede.

## Por que usar

- **Segurança:** a câmera não enxerga o servidor de banco de dados.
- **Organização:** cada função na sua rede (servidores, backup, gerência, clientes).
- **Menos barulho:** o tráfego de broadcast fica restrito à VLAN.

## Erros comuns

- **Achar que VLAN é firewall.** Ela separa, mas quem controla o que passa entre VLANs é o roteador ou firewall. Sem regras, ele pode liberar tudo.
- **VLAN nativa mal configurada no trunk**, fazendo tráfego sem tag cair na rede errada.
- **Esquecer de liberar a VLAN no trunk** e a VM ficar sem rede.

:::tip[Resumo]
1. VLAN separa redes dentro do mesmo switch.
2. Access = uma VLAN; trunk = várias, com tag 802.1Q.
3. Para falar entre VLANs, passa pelo roteador/firewall, e é lá que ficam as regras.
:::
