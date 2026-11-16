---
title: 'Rede de gerência: IPMI, iDRAC e iLO'
description: O que é a placa de gerenciamento remoto do servidor, o que ela permite fazer e por que ela nunca pode ficar exposta.
sidebar:
  order: 2
---

Todo servidor de verdade tem um "computador dentro do computador", que funciona até com o servidor desligado. É ele que evita uma ida ao datacenter de madrugada.

:::note[Em uma frase]
A **placa de gerência** (IPMI, ou iDRAC na Dell, iLO na HPE, XClarity na Lenovo) dá **controle total do servidor pela rede**, como se tu estivesse na frente dele, com tela, teclado e botão de ligar.
:::

## O que dá para fazer

- **Console remoto:** ver a tela do servidor desde o boot, inclusive a BIOS.
- **Ligar, desligar e reiniciar**, mesmo com o sistema travado.
- **Montar uma ISO remota** e instalar um sistema sem pendrive.
- **Ver a saúde do hardware:** temperatura, fontes, ventoinhas, discos, memória.
- **Ler os logs de hardware** para entender por que o servidor reiniciou.
- **Mandar alerta** (e-mail, SNMP) quando uma fonte ou disco falha.

## Por que uma rede separada

A placa de gerência tem uma porta de rede própria. Ela deve ficar numa **rede (ou VLAN) só de gerência**:

- **Funciona quando a rede principal cai.** É justamente nessa hora que ela é necessária.
- **Isola o acesso mais poderoso do servidor.** Quem entra na gerência controla tudo, inclusive o boot.

## Por que ela nunca pode ficar exposta

Quem acessa a gerência pode **ligar o servidor com uma ISO própria**, ler discos e desligar tudo. Essas placas já tiveram muitas falhas de segurança, e milhares delas aparecem expostas na internet.

Regras básicas:

- **Nunca** publicar a gerência na internet. Acesso só por **VPN** ou por máquina de salto (*jump host*).
- **Trocar a senha padrão** de fábrica no primeiro dia.
- **Atualizar o firmware** da placa.
- **Desativar o que não usa** (protocolos antigos, IPMI sem criptografia).

## Erros comuns

- Gerência na mesma rede dos usuários.
- Senha padrão de fábrica.
- Placa nunca configurada, descoberta só na hora da emergência.

:::tip[Resumo]
1. A gerência dá controle total do servidor, mesmo desligado.
2. Fica numa rede separada, que funciona quando a principal cai.
3. Nunca exposta na internet: só VPN, senha forte e firmware atualizado.
:::
