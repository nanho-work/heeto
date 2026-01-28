import Container from "@/components/common/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}