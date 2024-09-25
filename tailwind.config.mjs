/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				Poppins:['Poppins','sans-serif']
			},
			backgroundImage:{
				'homepage':"url('/public/homepage.jpg')"
			}
		},
	},
	plugins: [],
}
