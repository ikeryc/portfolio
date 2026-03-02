import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Iker Yáñez Calderón | Data Scientist & ML Engineer",
  description:
    "Portfolio profesional de Iker Yáñez Calderón - Data Scientist y Machine Learning Engineer. Proyectos de ciencia de datos, machine learning y análisis.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Python",
    "Portfolio",
    "Iker Yáñez",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
