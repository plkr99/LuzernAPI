import { Fredericka_the_Great } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const frederickaTheGreat = Fredericka_the_Great({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Luzern",
  description: "Besucherzahlen-Web-App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          frederickaTheGreat.className,
          "bg-[#FFF7E3] h-svh overflow-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
