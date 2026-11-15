import './HomePage.css'

export default function HomePage() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-scene">
        <h1
          id="home-title"
          className="home-title"
          aria-label="지구를 떠도는 유령영화제"
        >
          <svg viewBox="0 0 2048 1655" aria-hidden="true">
            <defs>
              <path
                id="home-title-curve"
                d="M 360 700 A 677 680 0 0 1 1688 700"
              />
            </defs>

            <text>
              <textPath
                href="#home-title-curve"
                startOffset="50%"
                textAnchor="middle"
              >
                지 구 를 떠 도 는 유 령 영 화 제
              </textPath>
            </text>
          </svg>
        </h1>

        <img
          className="home-earth"
          src="/images/earth.png"
          alt="초록색 궤도가 둘러싼 파란 지구"
          width="2048"
          height="1655"
        />

        <div className="home-ghost" aria-hidden="true">
          <img src="/images/ghost-2.png" alt="" />
        </div>
      </div>
    </section>
  )
}