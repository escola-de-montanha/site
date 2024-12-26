/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"aem-green": {
					100: '#78A74A',
					500: '#558944',
					900: '#336E3D'
				},
				"aem-brown": '#D36E5A'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
