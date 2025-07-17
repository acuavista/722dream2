import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// BeachLovers Tropical Color System
				'tropical-blue': {
					DEFAULT: 'hsl(var(--tropical-blue))',
					light: 'hsl(var(--tropical-blue-light))',
					dark: 'hsl(var(--tropical-blue-dark))',
				},
				'warm-gold': 'hsl(var(--warm-gold))',
				'warm-sand': 'hsl(var(--warm-sand))',
				'warm-accent': 'hsl(var(--warm-accent))',
				'deep-ocean': {
					DEFAULT: 'hsl(var(--deep-ocean))',
					light: 'hsl(var(--deep-ocean-light))',
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				'gradient-tropical': 'var(--gradient-tropical)',
				'gradient-sunset': 'var(--gradient-sunset)',
				'gradient-ocean': 'var(--gradient-ocean)',
				'gradient-glass': 'var(--gradient-glass)',
			},
			boxShadow: {
				'neumorphic': 'var(--shadow-neumorphic)',
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
				'luxury': 'var(--shadow-luxury)',
			},
			transitionTimingFunction: {
				'luxury': 'cubic-bezier(0.23, 1, 0.32, 1)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
