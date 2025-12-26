// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Agentic',
			description: 'Autonomous AI development at scale',
			social: {
				github: 'https://github.com/jbcom',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'with @agentic/control', slug: 'getting-started/control' },
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'Fleet Management', slug: 'api/fleet-management' },
					]
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'GitHub Actions', slug: 'integrations/github-actions' },
						{ label: 'CrewAI', slug: 'integrations/crewai' },
					],
				},
				{
					label: 'Packages',
					items: [
						{ label: 'control', slug: 'packages/control' },
						{ label: 'triage', slug: 'packages/triage' },
						{ label: 'crew', slug: 'packages/crew' },
					],
				},
			],
		}),
	],
});
