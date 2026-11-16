---
title: 'Regra 3-2-1 (e a 3-2-1-1-0)'
description: A regra mais conhecida de backup, o que cada número significa e a versão atualizada para a era do ransomware.
sidebar:
  order: 3
---

Se só uma regra de backup pudesse ser lembrada, seria essa. Ela é simples de decorar e cobre a maioria dos desastres.

:::note[Em uma frase]
**3** cópias do dado, em **2** tipos de armazenamento diferentes, com **1** cópia fora do local.
:::

## Cada número

| Número | Significa | Protege contra |
|---|---|---|
| **3 cópias** | O dado original + 2 backups | Um backup corrompido ou com falha |
| **2 mídias** | Em dois tipos de armazenamento diferentes (ex.: storage local e outro servidor, fita ou nuvem) | Um defeito ou bug que atinge um tipo de mídia |
| **1 fora do local** | Uma cópia em outro prédio, cidade ou nuvem | Incêndio, enchente, roubo, desastre no local |

## Exemplo prático

- **Cópia 1:** os dados da VM, no servidor Proxmox.
- **Cópia 2:** backup no **PBS local**, no mesmo datacenter.
- **Cópia 3:** **sincronização do PBS** para um segundo PBS em outro local ou em nuvem.

## A versão atualizada: 3-2-1-1-0

O ransomware mudou o jogo: ele procura e apaga backups antes de criptografar. Por isso surgiu a versão estendida:

| Número extra | Significa |
|---|---|
| **1** cópia **offline ou imutável** | Uma cópia que o atacante não consegue apagar nem alterar: desconectada, com bloqueio de exclusão ou em mídia somente-gravação |
| **0** erros | Backups **verificados** e restores **testados**, sem erro |

## Erros comuns

- **"Fora do local" na sala ao lado.** Se o prédio pegar fogo, as duas cópias vão juntas.
- **Todas as cópias acessíveis com a mesma senha.** Se um invasor pega a senha do administrador, apaga as três.
- **Contar o RAID ou o snapshot como cópia.** Eles estão no mesmo equipamento do original.
- **Nunca testar o restore.** O "0" da regra nova existe por causa disso.

:::tip[Resumo]
1. 3 cópias, 2 mídias, 1 fora do local.
2. Hoje, some 1 cópia offline ou imutável e 0 erros de restore.
3. RAID e snapshot não contam como cópia.
:::
