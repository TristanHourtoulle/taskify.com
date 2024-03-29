import cn from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskify",
  description: "Your all in one project management tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "h-full background-primary")}>
        {/* Première lueur en bas à droite */}
        <div className="glow-container bottom-right">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="glow-svg"
          >
            <path
              fill="#00FF75"
              d="M46.4,-79.9C60.8,-72.2,73.4,-60.9,79.9,-47C86.5,-33.1,87,-16.5,86.7,-0.2C86.3,16.1,85,32.2,78.6,46.4C72.2,60.5,60.6,72.7,46.6,79.3C32.7,85.9,16.3,87,0,86.9C-16.3,86.9,-32.6,85.8,-46.4,79.1C-60.1,72.4,-71.4,60,-78.5,45.9C-85.6,31.8,-88.6,15.9,-88.5,0C-88.5,-15.8,-85.3,-31.6,-78.1,-45.6C-70.9,-59.6,-59.7,-71.8,-46,-79.9C-32.3,-88,-16.2,-92,0,-92C16.1,-91.9,32.1,-87.7,46.4,-79.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Deuxième lueur au milieu à gauche */}
        <div className="glow-container middle-left">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="glow-svg"
          >
            <path
              fill="#00FFD1"
              d="M46.4,-79.9C60.8,-72.2,73.4,-60.9,79.9,-47C86.5,-33.1,87,-16.5,86.7,-0.2C86.3,16.1,85,32.2,78.6,46.4C72.2,60.5,60.6,72.7,46.6,79.3C32.7,85.9,16.3,87,0,86.9C-16.3,86.9,-32.6,85.8,-46.4,79.1C-60.1,72.4,-71.4,60,-78.5,45.9C-85.6,31.8,-88.6,15.9,-88.5,0C-88.5,-15.8,-85.3,-31.6,-78.1,-45.6C-70.9,-59.6,-59.7,-71.8,-46,-79.9C-32.3,-88,-16.2,-92,0,-92C16.1,-91.9,32.1,-87.7,46.4,-79.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Contenu avec style CSS pour le positionner correctement */}
        <div className="content">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
