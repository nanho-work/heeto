export default function MenuPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>히또 메뉴</h1>
      <p>텐동 메뉴 페이지</p>

      <ul style={{ marginTop: 20 }}>
        <li>기본 텐동</li>
        <li>에비 텐동</li>
        <li>스페셜 텐동</li>
      </ul>

      <p style={{ marginTop: 20 }}>
        <a href="/">← 홈으로</a>
      </p>
    </main>
  );
}