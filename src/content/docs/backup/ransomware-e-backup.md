---
title: Ransomware ataca o backup primeiro
description: Como um ataque de ransomware acontece por dentro, por que o backup é o primeiro alvo e o que faz ele sobreviver.
sidebar:
  order: 6
---

O ransomware moderno não criptografa tudo assim que entra. Antes, ele passa dias olhando a rede, e uma das primeiras coisas que procura é o backup.

:::note[Em uma frase]
O atacante **apaga ou criptografa o backup antes** de atacar a produção, para que a única saída seja pagar. Backup que sobrevive é backup que **o administrador comprometido não consegue apagar**.
:::

## Como o ataque costuma acontecer

1. **Entrada:** senha vazada, VPN ou acesso remoto exposto, e-mail com anexo, sistema desatualizado.
2. **Reconhecimento:** o invasor mapeia a rede por dias ou semanas, sem chamar atenção.
3. **Escalada:** consegue uma conta de administrador (do domínio, do hipervisor, do backup).
4. **Ataque ao backup:** apaga jobs, snapshots, cópias e às vezes o próprio servidor de backup.
5. **Criptografia:** só agora criptografa servidores e VMs, quase sempre de madrugada ou em feriado.
6. **Extorsão:** pede resgate, às vezes ameaçando vazar os dados copiados.

## Por que o backup cai junto

- **Mesma senha** ou mesma conta de administrador para tudo.
- **Servidor de backup no domínio** da empresa, alcançável pela mesma rede.
- **Todas as cópias online e apagáveis** pelo painel.
- **Ninguém olhando** para os alertas de exclusão de backup.

## O que faz o backup sobreviver

| Medida | Por quê |
|---|---|
| **Cópia imutável ou offline** | Nem com senha de administrador dá para apagar antes do prazo |
| **Credenciais separadas** | O backup não usa a conta do domínio; senha e 2FA próprios |
| **Servidor de backup isolado** | Fora do domínio, em rede própria, com o mínimo de portas abertas |
| **Cópia fora do local com acesso separado** | Ex.: sincronização do PBS para outro PBS, onde o lado remoto **puxa** a cópia e o local não tem permissão de apagar |
| **Retenção longa** | O invasor pode ter entrado semanas antes; é preciso voltar a um ponto anterior à entrada |
| **Alerta de exclusão e falha** | Backup apagado ou parado é sinal de ataque em andamento |

## Depois do ataque

- **Não restaurar por cima** sem antes entender por onde o invasor entrou. Senão, ele volta.
- **Restaurar em rede isolada** e conferir se o backup é anterior à invasão.
- **Trocar todas as senhas**, a partir de uma máquina limpa.

:::tip[Resumo]
1. O invasor apaga o backup antes de criptografar a produção.
2. Proteção real: cópia imutável ou offline, credenciais separadas e servidor isolado.
3. Retenção longa e alerta de exclusão fazem diferença na hora de recuperar.
:::
