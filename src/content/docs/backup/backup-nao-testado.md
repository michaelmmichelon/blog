---
title: Backup não testado não existe
description: Por que um backup com status "OK" pode não restaurar, o que testar e como transformar o teste em rotina.
sidebar:
  order: 5
---

O painel mostra tudo verde: "backup concluído com sucesso". Mas o verde diz que a cópia **terminou**, não que ela **funciona**.

:::note[Em uma frase]
O backup só prova que existe quando é **restaurado e o sistema volta a funcionar**. Até lá, é só uma esperança.
:::

## O que pode dar errado num backup "OK"

- **Faltou coisa:** o backup copiou a VM, mas o banco de dados estava em outro disco que ficou de fora.
- **Dado inconsistente:** a cópia foi feita com o banco no meio de uma gravação, e ele não sobe.
- **Corrompido no armazenamento:** a cópia estragou depois de gravada e ninguém verificou.
- **Ninguém sabe restaurar:** a senha da criptografia, o procedimento e as dependências estavam só na cabeça de quem saiu da empresa.
- **Restaura, mas não liga:** driver, licença, IP ou dependência de outro servidor.

## Os três níveis de teste

| Nível | O que prova | Frequência sugerida |
|---|---|---|
| **Verificação** | Os blocos da cópia estão íntegros (no PBS, o *verify*) | Automática, sempre |
| **Restore de arquivo** | Dá para recuperar um arquivo específico | Mensal |
| **Restore completo** | A VM sobe, o sistema loga e o serviço responde | Mensal ou trimestral, por sistema importante |

Só o terceiro nível mede de verdade o **RTO** (veja [RPO e RTO](../rpo-e-rto/)).

## Como transformar em rotina

O teste completo pode ser automatizado:

1. **Restaura** a VM do último backup num ambiente isolado (sem rede de produção).
2. **Liga** e espera o sistema subir.
3. **Confere** se o serviço responde (login, página, porta).
4. **Registra** o resultado com data, tempo gasto e evidência (um print da tela, por exemplo).
5. **Apaga** a VM de teste.

Com isso, cada mês gera um **relatório de restore** com prova de que o backup funciona e quanto tempo leva para voltar.

## Erros comuns

- **Confiar só no e-mail "backup OK".**
- **Testar só o restore de arquivo** e nunca o da máquina inteira.
- **Testar na rede de produção:** a VM restaurada sobe com o mesmo IP e nome da original e causa conflito.

:::tip[Resumo]
1. "Backup OK" diz que a cópia terminou, não que funciona.
2. Teste em três níveis: verificação, arquivo e restore completo.
3. Automatize o restore completo e guarde a evidência: é ele que mede o RTO.
:::
