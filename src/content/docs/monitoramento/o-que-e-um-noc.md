---
title: O que é um NOC
description: O que faz um centro de operações de rede, o que aparece na tela e como ele se diferencia de um SOC.
sidebar:
  order: 1
---

Aquela sala com telões cheios de gráficos não é cenário de filme. É o NOC, e o trabalho dele é descobrir o problema **antes do cliente ligar**.

:::note[Em uma frase]
O **NOC** (*Network Operations Center*) é a equipe e a estrutura que **monitora a infraestrutura 24 horas**, detecta falhas, age no primeiro atendimento e aciona quem precisa resolver.
:::

## O que o NOC faz

- **Monitora** servidores, rede, links, storage, backup e serviços.
- **Detecta** e **classifica** alertas: é real? é grave? quem é afetado?
- **Age no primeiro nível:** reinicia serviço, abre chamado com operadora, segue o procedimento (*runbook*).
- **Escala** para o especialista quando passa do que o procedimento cobre.
- **Comunica:** avisa clientes e equipes sobre incidentes e manutenções.
- **Registra:** cada evento vira histórico para entender o que se repete.

## O que aparece numa tela de NOC

Uma boa tela responde em segundos: **"está tudo bem? se não, o que e onde?"**

- **Problemas ativos**, ordenados por gravidade.
- **Status dos serviços críticos** (verde, amarelo, vermelho).
- **Links de internet:** disponibilidade e uso.
- **Backup:** o que falhou nas últimas 24 horas.
- **Capacidade:** disco, CPU e memória perto do limite.

O que não deve estar lá: gráfico bonito que ninguém sabe ler, alerta que fica vermelho o tempo todo e informação que não leva a nenhuma ação.

## NOC x SOC

| | NOC | SOC |
|---|---|---|
| Foco | **Disponibilidade e desempenho** | **Segurança** |
| Pergunta | "Está funcionando?" | "Alguém está atacando?" |
| Ferramentas típicas | Zabbix, Prometheus, Grafana | SIEM, EDR, análise de logs |

Os dois conversam: um servidor lento pode ser ataque, e um ataque pode derrubar um serviço.

## Ferramentas comuns

- **Zabbix:** monitoramento completo, com descoberta automática e templates prontos.
- **Prometheus + Grafana:** métricas e painéis, muito usados em ambientes modernos.
- **Sistema de chamados e plantão:** para registrar e acionar a pessoa certa.

:::tip[Resumo]
1. O NOC monitora 24 horas, detecta, age no primeiro nível e escala.
2. Uma boa tela de NOC mostra só o que leva a uma ação.
3. NOC cuida de disponibilidade; SOC cuida de segurança.
:::
