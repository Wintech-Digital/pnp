/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const { nextui } = require("@nextui-org/react");
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
],
	theme: {
		extend: {
			screens: {
				'pnplg': '1111px', 
				'xsm': '430px',
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			 },
			colors: {
				'pnp': {
					DEFAULT: '#FFFFFF',
					'black': '#000000',
					'logo': '#E23A1C',
					'red': '#FF3B1C',
					'green': '#06BA9F',
					'dark-red': '#E52D10',
					'dark-green': '#00A189',
					'grey20': '#D2D2D2',
					'grey30': '#B3B3B3',
					'grey40': '#A5A5A5',
					'grey80': '#333333',
					'card-bg': '#202726',
					'card-border': '#535958',
					'tst': 'rgba(255 255 255 0.5)',
				}
			},
			transitionproperty: {
				'max-height': 'max-height',
				'rotate': 'rotate',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},			
		},
	},
	plugins: [
		nextui(),
		plugin(function ({ addBase, addComponents, theme }) {
			addComponents({
				'.bred': {
					border: '1px solid red',
				},
				'.bblue': {
					border: '1px solid blue',
				},
			    '.text-14-24-600': {
					fontSize: '14px',
					lineHeight: '22px',
					fontWeight: '600'
			    },
			    '.text-16-24-400': {
					fontSize: '16px',
					lineHeight: '24px',
					fontWeight: '400'
			    },
				'.text-16-24-600': {
					fontSize: '16px',
					lineHeight: '24px',
					fontWeight: '600',
			    },
				'.text-16-24-700': {
					fontSize: '16px',
					lineHeight: '24px',
					fontWeight: '700',
			    },
			    '.text-18-28-400': {
					fontSize: '18px',
					lineHeight: '28px',
					fontWeight: '400',
			    },
			    '.text-18-28-600': {
					fontSize: '18px',
					lineHeight: '28px',
					fontWeight: '600',
			    },
			    '.text-24-24-700': {
					fontSize: '24px',
					lineHeight: '24px',
					fontWeight: '700'
			    },
			    '.text-24-26-700': {
					fontSize: '24px',
					lineHeight: '26px',
					fontWeight: '700'
			    },
				'.text-24-30-700': {
					fontSize: '24px',
					lineHeight: '30px',
					fontWeight: '700',
			    },
			    '.text-24-36-600': {
					fontSize: '24px',
					lineHeight: '36px',
					fontWeight: '600',
			    },
			    '.text-24-36-700': {
					fontSize: '24px',
					lineHeight: '36px',
					fontWeight: '700',
			    },
			    '.text-28-36-600': {
					fontSize: '28px',
					lineHeight: '36px',
					fontWeight: '600',
			    },
			    '.text-28-34-700': {
					fontSize: '28px',
					lineHeight: '34px',
					fontWeight: '700'
			    },
			    '.text-34-37-700': {
					fontSize: '34px',
					lineHeight: '37px',
					fontWeight: '700',
			    },
			    '.text-40-44-700': {
					fontSize: '40px',
					lineHeight: '44px',
					fontWeight: '700'
			    },
			    '.text-40-48-700': {
					fontSize: '40px',
					lineHeight: '48px',
					fontWeight: '700'
			    },
				'.text-50-56-700': {
					fontSize: '50px',
					lineHeight: '56px',
					fontWeight: '700',
					letterSpacing: '-1%'
			    },
			    '.card-shadow': {
					boxShadow: '0px 12px 34px 0px rgba(13, 10, 44, 0.08), 0px 34px 26px 0px rgba(13, 10, 44, 0.05)',
			    },
			    '.card': {
					backgroundColor: '',
			    },
			    '.card-base': {
					borderColor: `${theme('colors.pnp.card-border')}`,
					backgroundColor: theme('colors.pnp.card-bg'),
			    },
			    '.flex-center-row':{
					display: 'flex',
					flexDirection: 'flex-row',
					alignItems: 'center',
			    },
				'.box-shadow-test': {
					boxShadow: '0px 12px 34px 0px rgba(13, 10, 44, 0.08), 0px 34px 26px 0px rgba(13, 10, 44, 1)',
				},
				'.box-shadow-1': {
					boxShadow: '0px 12px 34px 0px rgba(13, 10, 44, 0.08), 0px 34px 26px 0px rgba(13, 10, 44, 0.05)',
				},
				'.gradient-red': {
					background: 'radial-gradient(110% 50% at 50% 100%, rgba(255, 59, 28, 0.40) 0%, rgba(28, 28, 29, 0.00) 100%), rgba(255, 255, 255, 0.03)',
					backdropFilter: 'blur(50px)',
			    },
				'.gradient-red-rl': {
					background: 'radial-gradient(50% 70% at 100% 50%, rgba(255, 59, 28, 0.40) 0%, rgba(28, 28, 29, 0.00) 100%), rgba(255, 255, 255, 0.03)',
					backdropFilter: 'blur(50px)',
			    },
				'.gradient-green-small': {
					background: 'linear-gradient(136deg, rgba(6, 186, 159, 0.40) -1.54%, rgba(6, 186, 159, 0.00) 67.84%), rgba(255, 255, 255, 0.05)',
					backdropFilter: 'blur(5px)'
				},
				'.gradient-green': {
					background: 'linear-gradient(119deg, rgba(6, 186, 159, 0.40) -22.65%, rgba(6, 186, 159, 0.00) 62.48%), rgba(255, 255, 255, 0.03)',
					backdropFilter: 'blur(10px)',
				},
			    '.gradient-green-coner-1': {
					background: 'radial-gradient(166.47% 156.43% at 9.35% 99.93%, rgba(255, 255, 255, 0.00) 31.61%, rgba(6, 186, 159, 0.20) 100%), rgba(255, 255, 255, 0.03)',
				},
			   '.gradient-green-coner-2': {
					border: '1px solid rgba(255, 255, 255, 0.00)',
					background: 'radial-gradient(124.7% 126.46% at -26.59% 92.87%, rgba(6, 186, 159, 0.20) 0%, rgba(28, 28, 29, 0.00) 100%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.03)',
				},
				'.gradient-green-coner-3': {
					border: '1px solid rgba(255, 255, 255, 0.00)',
					background: 'radial-gradient(166.47% 156.43% at 9.35% 99.93%, rgba(255, 255, 255, 0.00) 31.61%, rgba(6, 186, 159, 0.20) 100%), rgba(255, 255, 255, 0.03)',
				},
				'.gradient-green-coner-4': {
					border: '1px solid rgba(255, 255, 255, 0.00)',
					background: 'radial-gradient(118.45% 144.98% at 8.58% 93.84%, rgba(255, 255, 255, 0.00) 0%, rgba(6, 186, 159, 0.20) 100%), rgba(255, 255, 255, 0.03)',
					backdropFilter: 'blur(1px)',
				},
				'.gr-red-green-coner': {
					background: 'rgb(6,186,159)',
					background: 'linear-gradient(18deg, rgba(6,186,159,0.2511379551820728) 0%, rgba(6,186,159,0) 41%, rgba(255,59,28,0) 63%, rgba(255,59,28,0.2007177871148459) 100%)',
				},
				'.gr-red-green-coner-1': {
					background: 'rgb(6,186,159)',
					background: 'linear-gradient(18deg, rgba(6,186,159,0.7511379551820728) 0%, rgba(6,186,159,0) 41%, rgba(255,59,28,0) 63%, rgba(255,59,28,0.8007177871148459) 100%)',
					backdropFilter: 'blur(1px)',
				},
				'.gr-rad-red-bt': {
					background: 'radial-gradient(119.61% 79.66% at 50% 113.54%, rgba(255, 59, 28, 0.60) 0%, rgba(28, 28, 29, 0.00) 100%), rgba(255, 255, 255, 0.03)'
				},
				'.gr-rad-green-bt': {
					background: 'radial-gradient(119.61% 79.66% at 50% 113.54%, rgba(15, 185, 160, 0.60) 0%, rgba(28, 28, 29, 0.00) 100%), rgba(255, 255, 255, 0.03)'
				}
			})
		}),
	],
}
