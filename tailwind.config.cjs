module.exports = {
    content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#2048ff",
            secondary: "#99BCFF",
            accent: "#ffd700",
            neutral: "#0e0e0e",
            "base-100": "#ffffff",
            info: "#E3D7FC",
            success: "#6ee7b7",
            warning: "#f8c059",
            error: "#FF9089",
          },
        },
      ],
    },
    plugins: [require('daisyui')],
  };
  