import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kiến Văn Books",
    template: "%s | Kiến Văn Books",
  },
  description:
    "Kiến Văn Books giúp bạn chọn sách đúng theo nhu cầu: quản trị, kinh doanh, đầu tư và làm cha mẹ. Sách, bundle và hướng dẫn đọc thực tế.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logo/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.svg",
    apple: "/images/logo/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
