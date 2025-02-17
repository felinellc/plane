const convertToRGB = (variableName) => `rgba(var(${variableName}))`;

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx", "./ui/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            0: "rgb(255, 255, 255)",
            10: convertToRGB("--color-primary-10"),
            20: convertToRGB("--color-primary-20"),
            30: convertToRGB("--color-primary-30"),
            40: convertToRGB("--color-primary-40"),
            50: convertToRGB("--color-primary-50"),
            60: convertToRGB("--color-primary-60"),
            70: convertToRGB("--color-primary-70"),
            80: convertToRGB("--color-primary-80"),
            90: convertToRGB("--color-primary-90"),
            100: convertToRGB("--color-primary-100"),
            200: convertToRGB("--color-primary-200"),
            300: convertToRGB("--color-primary-300"),
            400: convertToRGB("--color-primary-400"),
            500: convertToRGB("--color-primary-500"),
            600: convertToRGB("--color-primary-600"),
            700: convertToRGB("--color-primary-700"),
            800: convertToRGB("--color-primary-800"),
            900: convertToRGB("--color-primary-900"),
            1000: "rgb(0, 0, 0)",
            DEFAULT: convertToRGB("--color-primary-100"),
          },
          background: {
            0: "rgb(255, 255, 255)",
            10: convertToRGB("--color-background-10"),
            20: convertToRGB("--color-background-20"),
            30: convertToRGB("--color-background-30"),
            40: convertToRGB("--color-background-40"),
            50: convertToRGB("--color-background-50"),
            60: convertToRGB("--color-background-60"),
            70: convertToRGB("--color-background-70"),
            80: convertToRGB("--color-background-80"),
            90: convertToRGB("--color-background-90"),
            100: convertToRGB("--color-background-100"),
            200: convertToRGB("--color-background-200"),
            300: convertToRGB("--color-background-300"),
            400: convertToRGB("--color-background-400"),
            500: convertToRGB("--color-background-500"),
            600: convertToRGB("--color-background-600"),
            700: convertToRGB("--color-background-700"),
            800: convertToRGB("--color-background-800"),
            900: convertToRGB("--color-background-900"),
            1000: "rgb(0, 0, 0)",
            DEFAULT: convertToRGB("--color-background-100"),
          },
          text: {
            0: "rgb(255, 255, 255)",
            10: convertToRGB("--color-text-10"),
            20: convertToRGB("--color-text-20"),
            30: convertToRGB("--color-text-30"),
            40: convertToRGB("--color-text-40"),
            50: convertToRGB("--color-text-50"),
            60: convertToRGB("--color-text-60"),
            70: convertToRGB("--color-text-70"),
            80: convertToRGB("--color-text-80"),
            90: convertToRGB("--color-text-90"),
            100: convertToRGB("--color-text-100"),
            200: convertToRGB("--color-text-200"),
            300: convertToRGB("--color-text-300"),
            400: convertToRGB("--color-text-400"),
            500: convertToRGB("--color-text-500"),
            600: convertToRGB("--color-text-600"),
            700: convertToRGB("--color-text-700"),
            800: convertToRGB("--color-text-800"),
            900: convertToRGB("--color-text-900"),
            1000: "rgb(0, 0, 0)",
            DEFAULT: convertToRGB("--color-text-100"),
          },
          border: {
            0: "rgb(255, 255, 255)",
            100: convertToRGB("--color-border-100"),
            200: convertToRGB("--color-border-200"),
            300: convertToRGB("--color-border-300"),
            400: convertToRGB("--color-border-400"),
            1000: "rgb(0, 0, 0)",
            DEFAULT: convertToRGB("--color-border-200"),
          },
          sidebar: {
            background: {
              0: "rgb(255, 255, 255)",
              10: convertToRGB("--color-sidebar-background-10"),
              20: convertToRGB("--color-sidebar-background-20"),
              30: convertToRGB("--color-sidebar-background-30"),
              40: convertToRGB("--color-sidebar-background-40"),
              50: convertToRGB("--color-sidebar-background-50"),
              60: convertToRGB("--color-sidebar-background-60"),
              70: convertToRGB("--color-sidebar-background-70"),
              80: convertToRGB("--color-sidebar-background-80"),
              90: convertToRGB("--color-sidebar-background-90"),
              100: convertToRGB("--color-sidebar-background-100"),
              200: convertToRGB("--color-sidebar-background-200"),
              300: convertToRGB("--color-sidebar-background-300"),
              400: convertToRGB("--color-sidebar-background-400"),
              500: convertToRGB("--color-sidebar-background-500"),
              600: convertToRGB("--color-sidebar-background-600"),
              700: convertToRGB("--color-sidebar-background-700"),
              800: convertToRGB("--color-sidebar-background-800"),
              900: convertToRGB("--color-sidebar-background-900"),
              1000: "rgb(0, 0, 0)",
              DEFAULT: convertToRGB("--color-sidebar-background-100"),
            },
            text: {
              0: "rgb(255, 255, 255)",
              10: convertToRGB("--color-sidebar-text-10"),
              20: convertToRGB("--color-sidebar-text-20"),
              30: convertToRGB("--color-sidebar-text-30"),
              40: convertToRGB("--color-sidebar-text-40"),
              50: convertToRGB("--color-sidebar-text-50"),
              60: convertToRGB("--color-sidebar-text-60"),
              70: convertToRGB("--color-sidebar-text-70"),
              80: convertToRGB("--color-sidebar-text-80"),
              90: convertToRGB("--color-sidebar-text-90"),
              100: convertToRGB("--color-sidebar-text-100"),
              200: convertToRGB("--color-sidebar-text-200"),
              300: convertToRGB("--color-sidebar-text-300"),
              400: convertToRGB("--color-sidebar-text-400"),
              500: convertToRGB("--color-sidebar-text-500"),
              600: convertToRGB("--color-sidebar-text-600"),
              700: convertToRGB("--color-sidebar-text-700"),
              800: convertToRGB("--color-sidebar-text-800"),
              900: convertToRGB("--color-sidebar-text-900"),
              1000: "rgb(0, 0, 0)",
              DEFAULT: convertToRGB("--color-sidebar-text-100"),
            },
            border: {
              0: "rgb(255, 255, 255)",
              100: convertToRGB("--color-sidebar-border-100"),
              200: convertToRGB("--color-sidebar-border-200"),
              300: convertToRGB("--color-sidebar-border-300"),
              400: convertToRGB("--color-sidebar-border-400"),
              1000: "rgb(0, 0, 0)",
              DEFAULT: convertToRGB("--color-sidebar-border-200"),
            },
          },
          backdrop: "#131313",
        },
      },
      keyframes: {
        leftToaster: {
          "0%": { left: "-20rem" },
          "100%": { left: "0" },
        },
        rightToaster: {
          "0%": { right: "-20rem" },
          "100%": { right: "0" },
        },
      },
      typography: ({ theme }) => ({
        brand: {
          css: {
            "--tw-prose-body": convertToRGB("--color-text-100"),
            "--tw-prose-p": convertToRGB("--color-text-100"),
            "--tw-prose-headings": convertToRGB("--color-text-100"),
            "--tw-prose-lead": convertToRGB("--color-text-100"),
            "--tw-prose-links": convertToRGB("--color-primary-100"),
            "--tw-prose-bold": convertToRGB("--color-text-100"),
            "--tw-prose-counters": convertToRGB("--color-text-100"),
            "--tw-prose-bullets": convertToRGB("--color-text-100"),
            "--tw-prose-hr": convertToRGB("--color-text-100"),
            "--tw-prose-quotes": convertToRGB("--color-text-100"),
            "--tw-prose-quote-borders": convertToRGB("--color-border"),
            "--tw-prose-code": convertToRGB("--color-text-100"),
            "--tw-prose-pre-code": convertToRGB("--color-text-100"),
            "--tw-prose-pre-bg": convertToRGB("--color-background-100"),
            "--tw-prose-th-borders": convertToRGB("--color-border"),
            "--tw-prose-td-borders": convertToRGB("--color-border"),
          },
        },
      }),
    },
    fontFamily: {
      custom: ["Inter", "sans-serif"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
};
