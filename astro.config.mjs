// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const pilar = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

// Publicado em https://michaelmmichelon.github.io/blog/
export default defineConfig({
	site: 'https://michaelmmichelon.github.io',
	base: '/blog',
	integrations: [
		starlight({
			title: 'Datacenter na Prática',
			description:
				'Conteúdo explicativo sobre datacenter, virtualização, backup e monitoramento, em português e direto ao ponto.',
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.svg',
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
				pilar('Como um datacenter funciona', 'fundamentos'),
				pilar('Servidores e armazenamento', 'servidores'),
				pilar('Virtualização', 'virtualizacao'),
				pilar('Rede no datacenter', 'rede'),
				pilar('Backup e desastre', 'backup'),
				pilar('Monitoramento e NOC', 'monitoramento'),
				{ label: 'Próximos temas', items: [{ label: 'O que vem por aí', slug: 'proximos-temas' }] },
			],
		}),
	],
});
