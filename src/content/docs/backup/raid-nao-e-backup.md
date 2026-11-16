---
title: RAID não é backup
description: Por que RAID protege contra disco quebrado e não contra perda de dados, e o que realmente protege.
sidebar:
  order: 1
---

"Tá tranquilo, o servidor tem RAID." Essa frase já custou muito dado.

## Em uma frase

O **RAID** protege contra **disco que quebra**. O **backup** protege contra **dado que se perde**. São problemas diferentes.

## O que o RAID faz

O RAID junta vários discos para que, se um (ou dois, dependendo do nível) falhar, o servidor continue funcionando sem perder nada. É **disponibilidade**: o sistema não para porque um disco morreu.

## O detalhe que muda tudo

O RAID copia **tudo** para os outros discos, **na hora**. Inclusive:

- o arquivo que alguém **apagou sem querer**;
- a planilha que foi **sobrescrita**;
- os arquivos **criptografados por ransomware**;
- o banco de dados **corrompido** por um bug.

Para o RAID, isso é só mais uma escrita. Ele replica o erro com a mesma perfeição com que replicaria um dado bom.

## Onde o RAID não ajuda

| Situação | RAID salva? | Backup salva? |
|---|---|---|
| Um disco queimou | ✅ | ✅ (mais lento) |
| Alguém apagou uma pasta | ❌ | ✅ |
| Ransomware criptografou tudo | ❌ | ✅ (se o backup estiver protegido) |
| Controladora RAID morreu e corrompeu o volume | ❌ | ✅ |
| Incêndio, enchente, roubo do servidor | ❌ | ✅ (se estiver em outro lugar) |
| Precisa do arquivo como estava há 15 dias | ❌ | ✅ |

## A analogia

O RAID é o **estepe** do carro: tu segue viagem se um pneu fura. O backup é o **seguro**: serve quando o carro inteiro some.

Ninguém deixa de fazer seguro porque tem estepe.

## Então o que fazer

- Usa **RAID para disponibilidade**: o servidor não para por causa de um disco.
- Usa **backup para recuperação**: cópias em **momentos diferentes**, guardadas **fora** do servidor.
- Segue a **regra 3-2-1**: 3 cópias, em 2 tipos de mídia, 1 fora do local.
- **Testa o restore.** Backup que nunca foi restaurado é só uma esperança.

## Resumo

1. O RAID protege contra falha de **hardware**, não contra perda de **dado**.
2. Ele replica erro, exclusão e ransomware na hora.
3. Backup tem **histórico** e fica **fora** do servidor. É isso que salva.
