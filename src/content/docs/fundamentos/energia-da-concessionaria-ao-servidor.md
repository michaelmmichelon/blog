---
title: 'Energia: da concessionária até o servidor'
description: O caminho que a energia percorre num datacenter, do poste até a fonte do servidor, e onde cada peça entra quando algo falha.
sidebar:
  order: 2
---

Servidor não liga direto na tomada da parede. Entre o poste e a fonte do servidor existe uma corrente de equipamentos, e **cada elo existe para cobrir a falha do anterior**.

:::note[Em uma frase]
A energia vem da concessionária, passa por **transformador e quadros**, é limpa e sustentada pelo **nobreak (UPS)**, tem o **gerador** como reserva de longo prazo e chega ao servidor pela **PDU** do rack.
:::

## O caminho completo

```
 Concessionária ──► Transformador ──► Quadro geral ──► Chave de transferência (ATS)
                                                             ▲          │
                                               Gerador ──────┘          ▼
                                                                   Nobreak (UPS)
                                                                        │
                                                                        ▼
                                                               Quadro de distribuição
                                                                        │
                                                                        ▼
                                                                PDU do rack ──► Fonte A / Fonte B do servidor
```

## O papel de cada peça

| Peça | O que faz | Quando entra em ação |
|---|---|---|
| **Concessionária** | Fornece a energia principal | Sempre, até cair |
| **Transformador** | Baixa a tensão de média para baixa | Sempre |
| **ATS** (chave de transferência automática) | Troca da rede para o gerador sozinha | Quando a concessionária cai |
| **Gerador** | Produz energia a diesel por horas ou dias | Segundos depois da queda, quando estabiliza |
| **Nobreak (UPS)** | Segura a carga com baterias e entrega energia limpa | **Na hora** da queda, até o gerador assumir |
| **PDU** | Distribui a energia dentro do rack (régua inteligente) | Sempre |
| **Fonte redundante** | Duas fontes no servidor, uma em cada circuito | Quando um circuito cai |

## O ponto que confunde: nobreak x gerador

- O **gerador demora** alguns segundos para partir e estabilizar. Servidor não aguenta nem meio segundo sem energia.
- O **nobreak segura** esse buraco com bateria, mas por **minutos**, não horas.

Juntos, o nobreak cobre o "agora" e o gerador cobre o "depois". Um sem o outro não fecha a conta.

## Nobreak online x line-interactive

- **Online (dupla conversão):** a carga **sempre** roda pela bateria e pelo inversor. Não há tempo de transferência e a energia sai limpa. É o padrão em datacenter.
- **Line-interactive:** a carga roda pela rede e só passa para a bateria quando falta energia. Existe um tempo de transferência curto. Serve para escritório, não para sala de servidores séria.

## Dois caminhos: A e B

Datacenters sérios entregam **dois circuitos independentes** em cada rack, o caminho **A** e o caminho **B**. Um servidor com **duas fontes**, cada uma num caminho, continua ligado se um caminho inteiro cair ou entrar em manutenção.

Servidor com fonte única não aproveita isso: ele depende de um caminho só, mesmo dentro de um prédio redundante.

## Erros comuns

- **Ligar as duas fontes do servidor na mesma PDU.** A redundância vira enfeite.
- **Não testar o gerador com carga.** Gerador que só liga em vazio pode não aguentar a carga real.
- **Bateria de nobreak vencida.** A autonomia cai com o tempo, e só se descobre na queda.
- **Somar a carga de A e B na mesma conta.** Se o A cair, o B precisa aguentar **tudo** sozinho. Cada lado deve ficar abaixo de 50% da capacidade.

:::tip[Resumo]
1. O nobreak cobre os primeiros minutos; o gerador cobre as horas seguintes.
2. Em datacenter, o nobreak é **online**.
3. Caminhos A e B só protegem servidor com **duas fontes, em PDUs diferentes**.
:::
