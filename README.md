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
4. O artigo aparece sozinho no menu do pilar.

Para um pilar novo (por exemplo `virtualizacao`), cria a pasta e adiciona uma linha no `sidebar` do `astro.config.mjs`:

```js
{ label: 'Virtualização', items: [{ autogenerate: { directory: 'virtualizacao' } }] },
```

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
