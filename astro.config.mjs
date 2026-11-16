// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Publicado em https://michaelmmichelon.github.io/blog/
export default defineConfig({
	site: 'https://michaelmmichelon.github.io',
	base: '/blog',
	integrations: [
		starlight({
			title: 'Datacenter na Prática',
			description:
				'Conteúdo explicativo sobre datacenter, virtualização, backup e monitoramento, em português e direto ao ponto.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Português', lang: 'pt-BR' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/michaelmmichelon/blog' },
			],
			customCss: ['./src/styles/tema.css'],
			lastUpdated: true,
			sidebar: [
				{ label: 'Comece aqui', items: [{ label: 'Sobre o blog', slug: 'sobre' }] },
				{ label: 'Como um datacenter funciona', items: [{ autogenerate: { directory: 'fundamentos' } }] },
				{ label: 'Backup e desastre', items: [{ autogenerate: { directory: 'backup' } }] },
				{ label: 'Próximos temas', items: [{ label: 'O que vem por aí', slug: 'proximos-temas' }] },
			],
		}),
	],
});
