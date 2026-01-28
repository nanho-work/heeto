export default function HomePage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>히또 (HITTO)</h1>
      <p>텐동 전문점</p>

      <ul style={{ marginTop: 20 }}>
        <li><a href="/menu">메뉴 보기</a></li>
        <li><a href="/location">오시는길</a></li>
      </ul>
    </main>
  );
}