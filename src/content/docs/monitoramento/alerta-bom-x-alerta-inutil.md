---
title: Alerta bom x alerta inútil
description: O que é fadiga de alerta, como ela faz a equipe ignorar o problema real e as regras para montar alarmes que funcionam.
sidebar:
  order: 2
---

Um sistema de monitoramento que manda 300 alertas por dia não é seguro. É barulhento. E no meio do barulho, o alerta que importa passa despercebido.

:::note[Em uma frase]
Um **alerta bom** avisa sobre algo **real**, que **precisa de ação** e chega para **quem pode agir**. Todo o resto é ruído, e ruído ensina a equipe a ignorar alerta.
:::

## Fadiga de alerta

Quando quase todo alerta é falso ou irrelevante, as pessoas aprendem a **silenciar, filtrar ou ignorar**. Um dia, o alerta ignorado é o do disco cheio do banco de dados, ou o do backup que parou há uma semana.

## O teste de um alerta

Antes de criar um alerta, ele precisa passar nestas perguntas:

1. **Alguém precisa fazer algo quando ele dispara?** Se não, é gráfico, não alerta.
2. **É urgente?** Se pode esperar até amanhã, vai para relatório, não para o celular de madrugada.
3. **Quem vai receber sabe o que fazer?** Alerta bom vem com o link do procedimento.
4. **Ele dispara pelo motivo certo?** Avisar o **sintoma** (o serviço não responde) costuma ser melhor que avisar cada causa possível.

## Exemplos

| Alerta inútil | Alerta bom |
|---|---|
| CPU acima de 80% por 1 minuto | CPU acima de 90% por 15 minutos **e** serviço lento |
| Disco com 85% (num disco de 10 TB que cresce 1% ao ano) | Disco **vai encher em menos de 7 dias** no ritmo atual |
| Ping falhou uma vez | Host sem responder por 3 verificações seguidas |
| 50 alertas porque um switch caiu | 1 alerta: "switch caiu"; os hosts atrás dele ficam dependentes |
| "Backup concluído" todo dia por e-mail | Alerta **só quando o backup falha ou não roda** |

## Boas práticas

- **Níveis de gravidade claros:** informação, aviso, alto, desastre. Só o grave acorda alguém.
- **Tempo de confirmação:** esperar o problema persistir antes de alertar.
- **Dependências:** se o roteador caiu, não alertar cada servidor atrás dele.
- **Previsão em vez de limite fixo:** "vai acabar em X dias" vale mais que "passou de 85%".
- **Alertar ausência:** o backup que **não rodou** é tão grave quanto o que falhou.
- **Revisar todo mês:** alerta que disparou e ninguém agiu é candidato a ajuste ou remoção.

:::tip[Resumo]
1. Alerta sem ação necessária é ruído, e ruído faz a equipe ignorar o real.
2. Alerte o sintoma, espere confirmar e use dependências.
3. Revise os alertas todo mês: os que ninguém usa saem.
:::
