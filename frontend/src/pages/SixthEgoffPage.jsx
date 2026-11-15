import { Link } from "react-router";

export default function SixthEgoffPage() {
  return (
    <article className="festival-overview">
      <div className="festival-summary">
        <figure className="festival-poster">
          <img
            src="/images/6th-poster.jpg"
            alt="제6회 지구를 떠도는 유령영화제 포스터"
          />

          <Link className="festival-archive-link" to="/archive/films">
            역대 상영작 바로가기 →
          </Link>
        </figure>

        <div className="festival-details">
          <dl className="festival-info">
            <div>
              <dt>명칭</dt>
              <dd>제6회 지구를 떠도는 유령영화제</dd>
            </div>
            <div>
              <dt>기간</dt>
              <dd>2026.11.28 ~ 2026.11.29</dd>
            </div>
            <div>
              <dt>장소</dt>
              <dd>판씨네마 품 POOM</dd>
            </div>
            <div>
              <dt>슬로건</dt>
              <dd>통통통.. 내 신호가 느껴져요?</dd>
            </div>
          </dl>

          <section className="festival-description">
            <h3>영화제 소개</h3>
            <p>{`지난 영화제에서 유령은 수많은 존재들을 만나며, 저마다 다른
                  방식으로 말을 건네는 법을 배웠어요. 그런데 문득, 유령은 신기한
                  사실을 깨달았어요. 모두가 같은 말을 쓰지 않아도, 서로를 알아볼 수 있었다는 것을요.

                  유령도 언제나 떨림으로, 밝기로, 흔들림으로 자신을 전해왔고, 누군가는 그걸 용케 알아채곤 했답니다.

                  “서로 다른 존재, 서로 다른 언어
                  그렇지만 우리는 신호로 서로를 통과한다.
                  통. 한. 다. 고로 소통한다!”

                  이번엔 유령도 그 신호를 따라가 보기로 했어요. 말이
                  통하지 않아도 괜찮아요. 파형으로, 빛의 세기로, 반복되는 진동으로
                  건네지는 것들을 가만히 느껴보고 싶거든요.

                  제6회 지구를떠도는유령영화제는, 저마다 다른 존재들이 "신호"로 서로를 알아보는 이야기를 스크린 위에 담고자 합니다.`}
              </p>
          </section>
        </div>
      </div>
    </article>
  );
}
