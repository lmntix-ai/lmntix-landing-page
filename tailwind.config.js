module.exports = {
	content: ["./**/*.html", "./js/**/*.js"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"lmntix-primary": "#1A3A5E",
				"lmntix-accent-teal": "#00A19D",
				"lmntix-accent-coral": "#FF6B35",
				"lmntix-accent-coral-muted": "#E05A2D",
				"lmntix-helper": "#44546A",
				// "lmntix-light-bg": "#F7FCFC",
				"lmntix-white": "#FFFFFF",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				"inter-tight": ["Inter Tight", "sans-serif"],
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1.5" }],
				sm: ["0.875rem", { lineHeight: "1.5715" }],
				base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
				lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
				xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
				"2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.017em" }],
				"3xl": [
					"1.875rem",
					{ lineHeight: "1.3333", letterSpacing: "-0.017em" },
				],
				"4xl": ["2.25rem", { lineHeight: "1.2777", letterSpacing: "-0.017em" }],
				"5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.017em" }],
				"6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.017em" }],
				"7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.017em" }],
			},
			keyframes: {
				swing: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-100px)" },
				},
			},
			backgroundImage: {
				"hero-image": "url('../assets/images/hero.jpg')",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
