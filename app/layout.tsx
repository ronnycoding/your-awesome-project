import type { Metadata } from "next";
import "./globals.css";
import { TodoProvider } from "@/lib/todoContext";

export const metadata: Metadata = {
  title: "Todo App - Manage Your Tasks",
  description: "A modern, responsive todo application built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}
