import { Inter, Mada } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const mada = Mada({
  subsets: ["latin"],
  variable: "--font-mada",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
const anjelScript = localFont({
  src: [
    {
      path: "./Anjel_Script.ttf",
      weight: "400",
    },
  ],
  variable: "--font-anjelScript",
});
const felixTitlin = localFont({
  src: [
    {
      path: "./felixtitlin.ttf",
      weight: "400",
    },
  ],
  variable: "--font-felixTitlin",
});

// provide you all fonts, make sure to add variable properly and add that on tailwindcss.config. to use on  tailwindcss.config.js: inter: 'var(--font-inter)', (line no: 12)
const fontList = [inter, mada, anjelScript, felixTitlin];

export const fontVariables = fontList.map((font) => font.variable).join(" ");
