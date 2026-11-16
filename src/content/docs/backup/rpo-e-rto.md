---
title: 'RPO e RTO: quanto tu aceita perder'
description: As duas siglas que definem quanto dado e quanto tempo uma empresa pode perder num desastre, e como elas guiam o backup.
sidebar:
  order: 2
---

Antes de escolher ferramenta de backup, tem duas perguntas que alguém precisa responder. Quase ninguém responde.

:::note[Em uma frase]
- **RPO** (*Recovery Point Objective*): **quanto dado** dá para perder. É olhar para trás.
- **RTO** (*Recovery Time Objective*): **quanto tempo** dá para ficar parado. É olhar para frente.
:::

## Na linha do tempo

```
  último backup            DESASTRE              sistema de volta
       │◄──── RPO ────►│◄────── RTO ──────►│
       │  dado perdido │   tempo parado    │
───────●───────────────✖───────────────────●──────►
```

- Se o backup roda **uma vez por dia**, o RPO é de até **24 horas**: tudo o que foi feito desde o último backup se perde.
- Se o restore leva **6 horas**, o RTO é de pelo menos **6 horas**, fora o tempo de alguém perceber e começar.

## Exemplo real

Um ERP com backup toda noite, às 23h. O servidor morre às 17h.

- **RPO real:** 18 horas de pedidos, notas e lançamentos perdidos.
- **RTO real:** o tempo de achar alguém, conseguir hardware, restaurar e validar. Pode passar de um dia.

Se a diretoria esperava "no máximo 1 hora de dado perdido", o problema não é o backup ter falhado: **ele nunca foi projetado para isso**.

## Como cada sigla muda a solução

| Quer reduzir... | O que se faz |
|---|---|
| **RPO** (perder menos dado) | Backup mais frequente, snapshots, replicação, log de transações do banco |
| **RTO** (voltar mais rápido) | Restore testado e documentado, hardware reserva, réplica pronta para ligar, HA |

RPO e RTO perto de zero custam caro. O certo é definir **por sistema**: o ERP pode precisar de 15 minutos, enquanto o servidor de arquivos antigos aguenta um dia.

## Erros comuns

- **Ninguém definiu.** O RPO e o RTO são decididos na hora do desastre, do pior jeito.
- **Medir o RTO só pelo tempo de restore.** Esquecer o tempo de perceber o problema, decidir e validar.
- **Nunca testar.** Sem um restore cronometrado, o RTO é chute.

:::tip[Resumo]
1. **RPO** = quanto dado tu perde. **RTO** = quanto tempo tu fica parado.
2. A frequência do backup define o RPO. O restore testado define o RTO.
3. Define os dois **por sistema**, por escrito, antes do problema.
:::
