import { Inter } from "next/font/google";
import "./globals.css";

// Using Google Fonts for Montserrat
const montserrat = Inter({
  subsets: ['latin'], 
  weight: ['100', '300', '400', '500', '700', '900'], // Add the weights you need
  variable: '--font-montserrat', // Custom property for the font
});

export const metadata = {
  title: "Sheril Dhiman",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
