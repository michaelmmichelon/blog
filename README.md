# Datacenter na Prática

Blog de conteúdo explicativo sobre datacenter, virtualização, backup e monitoramento.

Publicado em: https://michaelmmichelon.github.io/blog/

## Escrever um artigo novo

1. Cria um arquivo `.md` na pasta do pilar, por exemplo `src/content/docs/backup/regra-3-2-1.md`.
2. No topo, coloca:

   ```md
   ---
   title: Regra 3-2-1
   description: Uma frase resumindo o artigo (aparece no Google e nas redes).
   sidebar:
     order: 3
   ---
   ```

3. Escreve no formato: **Em uma frase → como funciona → analogia → erros comuns → resumo**.
   Os dois destaques usam caixas prontas:

   ```md
   :::note[Em uma frase]
   A ideia central em uma ou duas linhas.
   :::

   :::tip[Resumo]
   1. Primeiro ponto.
   2. Segundo ponto.
   3. Terceiro ponto.
   :::
   ```

4. O artigo aparece sozinho no menu do pilar. Para ele aparecer também na página inicial, adiciona o link no card do pilar em `src/content/docs/index.mdx` e atualiza o número de artigos.

Pilares atuais (pastas em `src/content/docs/`): `fundamentos`, `servidores`, `virtualizacao`, `rede`, `backup`, `monitoramento`.

Para um pilar novo, cria a pasta e adiciona uma linha no `sidebar` do `astro.config.mjs`:

```js
pilar('Segurança', 'seguranca'),
```

## Cores e layout

Tudo fica em `src/styles/tema.css`: vermelho `#e3170a`, preto e branco, nos modos claro e escuro.

## Ver no computador

```bash
npm.cmd run dev
```

Abre http://localhost:4321/blog/

## Publicar

Cada `git push` na branch `main` publica sozinho pelo GitHub Actions (`.github/workflows/deploy.yml`).

```bash
git add .
git commit -m "Novo artigo"
git push
```
