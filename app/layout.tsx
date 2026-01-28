import "./globals.css";
import Header from "@/components/layout/Header";
import Container from "@/components/common/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}