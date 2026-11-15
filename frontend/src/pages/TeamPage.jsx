import { useState } from "react";
import "./TeamPage.css";

// 실제 팀원 정보를 받으면 이 부분만 수정
const members = [
  { id: 1, name: "성동", bio: "떠돌고 있어요.", sns: "nuealieun", email: "castleisme@naver.com" },
  { id: 2, name: "채신", bio: "지떠유영 4회부터 함께하게된 유령지망생. 영화제 세계관 기획과 카피라이팅 도전 중 . . . 👻", sns: "no.9l2", email: " iam_x_@naver.com" },
  { id: 3, name: "리진", bio: "소개 준비 중", sns: "", email: "" },
  { id: 4, name: "져니", bio: "소개 준비 중", sns: "", email: "" },
];

export default function TeamPage() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = members.find((member) => member.id === selectedId);

  return (
    <article className="team-page">
      <p className="team-guide">유령을 클릭해보시오.</p>

      <div className="team-space">
        <div className="team-burst">
          <span>
            스윽,,,,
            <br />
            안녕하세유~령(^^)
          </span>
        </div>
        {members.map((member, index) => (
          <button
            key={member.id}
            type="button"
            className={`team-ghost team-ghost-${index + 1}`}
            aria-label={`${member.name} 소개`}
            aria-expanded={selectedId === member.id}
            aria-controls="team-profile"
            onClick={() => setSelectedId(member.id)}
          >
            <svg
              viewBox="61 614 1376 1434"
              aria-hidden="true"
              focusable="false"
            >
              <image href="/images/ghost.png" width="1521" height="2048" />
            </svg>

            <span>{member.name}</span>
          </button>
        ))}
      </div>

      <div id="team-profile" aria-live="polite">
        {selected && (
          <section className="team-profile-card">
            <button
              type="button"
              className="team-profile-close"
              onClick={() => {
                document
                  .querySelector('.team-ghost[aria-expanded="true"]')
                  ?.focus();
                setSelectedId(null);
              }}
              aria-label="소개 닫기"
            >
              닫기 ×
            </button>

            <h3>{selected.name}</h3>
            <p>{selected.bio}</p>

            <div className="team-contact">
              {selected.sns && (
                <a
                  href={selected.sns}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SNS ↗
                </a>
              )}

              {selected.email && (
                <a href={`mailto:${selected.email}`}>{selected.email}</a>
              )}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
