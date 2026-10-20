# Portfolio_tori-story

한국형 AI 동화책 제작 스튜디오 **토리동화**의 UX/UI 포트폴리오 사이트입니다.

- **Live**: https://jeongwoo-pjw.github.io/tori/
- **서비스**: https://jeongwoo-pjw.github.io/tori-story/
- **서비스 저장소**: https://github.com/jeongwoo-pjw/tori-story

> 10팀 팀 프로젝트 · 2026
> Role: UX/UI Design · Planning · Vibe Coding
> Contribution: Planning 50% · Design 100% · Development 50%

---

## 개요

발표용 PPT(14장)로 만든 토리동화 소개 자료를 **한 페이지씩 넘겨 보는 웹 포트폴리오**로 옮기고,
발표 자료의 톤에서 벗어나 **UX/UI Case Study** 형식으로 다시 설계했습니다.

- 각 섹션은 한 화면(100vh) 단위로 넘어가는 슬라이드 구조
- 로지 아이보리 배경과 서비스 기본 테마인 핑크베리 포인트 컬러를 사용한 에디토리얼 레이아웃
- 카드 · 박스 · 그림자를 최소화하고, 얇은 구분선과 여백으로 정보 위계를 구성
- 문제 발견 → 문제 정의 → 핵심가치 → 전략 분석 → 기능 우선순위 → UX/UI 설계·구현 → 운영·확장 검토 흐름으로 구성하고, 상단 6단계 프로세스 인디케이터로 현재 위치를 표시

## 기술 구성

별도 빌드 도구 없이 정적 파일만으로 구성해 GitHub Pages에 바로 배포합니다.

| 구분 | 내용 |
|---|---|
| Markup | HTML (`index.html` 한 파일에 전체 섹션) |
| Style | CSS (`css/style.css`) — CSS 변수 기반 타입 스케일, Grid · Subgrid · Container Query |
| Script | Vanilla JS (`js/main.js`) — IntersectionObserver 기반 진행 표시 · 프로세스 단계 표시 · 등장 효과 · 스크롤 연동 이미지 전환(FLIP) |
| Font | Pretendard, Noto Serif KR, Cormorant Garamond (디자인 시스템 페이지 샘플: Gowun Batang · NanumSquareRound · Gowun Dodum) |
| Deploy | GitHub Pages (`main` 브랜치 / root) |

```
.
├── index.html        # 전체 페이지 (31개 화면, 표지 00 ~ 끝 30)
├── css/style.css     # 디자인 시스템 · 섹션별 스타일 · 반응형
├── js/main.js        # 페이지 번호 자동 정렬 · 내비게이션 · 프로세스 인디케이터 · 등장 효과 · 쇼케이스→상세 전환 · 히어로 아치 배치
├── images/           # 사이트에서 사용하는 이미지 (영문 파일명)
└── .nojekyll         # GitHub Pages에서 파일 그대로 서빙
```

## 페이지 구성

표지를 00번으로 두고, 화면마다 고유 번호를 실제 순서대로 JS가 매깁니다 (하단 카운터와 아이브로우 번호 일치, 중복 없음).
상단 단계는 각 섹션의 `data-step` 값으로 지정합니다 (`1`~`6` 단계, `reflection` 라벨, 값이 없으면 기존 브랜드 각주).

| # | 섹션 | 상단 단계 | 내용 |
|---|---|---|---|
| 00 | Cover | — | 수채화 일러스트 배경 + 아치 프레임, 프로젝트명 · 메시지 · 메타 정보 |
| 01 | Project Overview | — | 서비스 정의, 핵심 경험 Flow, 프로젝트 정보 |
| 02 | Background | 01 Discover | 부모의 목소리 → 바라는 것 / 현실 → Idea |
| 03 | Problem | 01 Discover | 질문 → 3가지 문제 → 서비스 방향 |
| 04 | Persona & Problem Definition | 02 Define | 페르소나 정보 + 핵심 페인포인트 |
| 05 | User Needs & Core Value | 02 Define | 사용자 니즈 3가지 → 서비스 핵심가치 대응 |
| 06 | SWOT & Strategic Insights | 03 Strategize | SWOT 2×2, Key Insight, 우선순위 판단 기준 3가지 |
| 07 | MoSCoW Prioritization | 04 Prioritize | Must · Should · Could · Won't Have 기능 분류 |
| 08 | MVP Scope | 04 Prioritize | 생성 → 독서 → 독후활동 → 책장 저장 핵심 경험 |
| 09 | Solution | 04 Prioritize | 세 가지 문제에 대한 하나의 해답 |
| 10 | Service Concept | 05 Design & Build | INPUT → CREATE → READ → ACTIVITY → RECORD |
| 11 | Core Features | 05 Design & Build | 동화 생성 · 놀이마당 · 부모 대시보드 |
| 12 | Age-based Personalization | 05 Design & Build | 연령별 3단계 생성 규칙, Generation Logic |
| 13 | Generation Output | 05 Design & Build | 연령별 이해력 활동 결과 3단 비교 |
| 14 | Visual Design System | 05 Design & Build | Brand Identity · Typography · UI Components |
| 15 | Reading Experience — Input & Create | 05 Design & Build | 선택형 · 대화형 입력, 생성 중 화면 (쇼케이스) |
| 16 | Create UX Design | 05 Design & Build | 쇼케이스 이미지가 축소·이동하며 3가지 설계 포인트 |
| 17 | Reading UX Design | 05 Design & Build | Story Viewer + 이미지 내 콜아웃, 구현 기능 표기 |
| 18 | Beyond Reading — Activity | 05 Design & Build | 독후활동 4종 탭 · 참여형 활동 · 리워드 게임 (쇼케이스) |
| 19 | Activity UX Design | 05 Design & Build | 서비스 화면 탭과 생성 로직 범주 구분 |
| 20 | Visual System — Record | 05 Design & Build | Parent Dashboard와 정보 위계 (쇼케이스) |
| 21 | Dashboard UX Design | 05 Design & Build | PRIMARY / SECONDARY 영역 하이라이트 |
| 22 | Design Refinement | 05 Design & Build | Constraint → Problem → Decision, 생성 대기 화면 BEFORE / AFTER |
| 23 | Design to Development | 05 Design & Build | 4단계 프로세스, 개인 구현 참여 범위 |
| 24 | Architecture | 05 Design & Build | 팀 기술 구성, 생성 파이프라인 |
| 25 | Operational Considerations ① | 06 Operate & Future | 생성 흐름과 API 비용 발생 지점, 운영 제약 |
| 26 | Operational Considerations ② | 06 Operate & Future | Issue → Discussion → Direction, Free / Premium 기능 구분 |
| 27 | Business Model | 06 Operate & Future | Free / Premium 구독 모델, 기획 · 구현 · 향후 구분 |
| 28 | Roadmap | 06 Operate & Future | 1차 MVP → 단기 고도화 → 글로벌 확장 |
| 29 | Learned | Reflection | 3가지 배움, 직접 경험한 범위, 기여도 |
| 30 | Thank you | — | Role · Contribution · Output, 서비스 링크 |

### 프로세스 인디케이터

- 상단 고정 헤더 자리에 `01 Discover — 02 Define — 03 Strategize — 04 Prioritize — 05 Design & Build — 06 Operate & Future`를 표시합니다.
- 현재 단계는 딥 베리 + 굵게 + 진행 바, 이전 단계는 연한 핑크베리, 이후 단계는 연한 회색입니다.
- 표지 · 개요 · 끝 페이지에서는 기존 브랜드 각주(토리동화 · UX/UI Portfolio)를 보여줍니다.
- 900px 이하에서는 단계 번호와 바만 표시하고 현재 단계명만 함께 보여줍니다.
- User Needs ~ MVP Scope 4개 페이지에는 세부 의사결정 흐름(User Needs → SWOT → MoSCoW → MVP Scope) 칩을 따로 둡니다.
- 단계 구분은 포트폴리오 설명 체계이며, 실제 프로젝트의 모든 활동이 이 순서대로만 진행되었다는 의미는 아닙니다.

### 쇼케이스 → UX 상세 전환

- 쇼케이스 페이지(15 · 18 · 20)는 이미지를 크게 보여주고, 바로 다음 UX 상세 페이지에서 같은 이미지가 축소·이동하며 설계 의도가 나타납니다.
- 상세 페이지의 이미지를 쇼케이스 이미지 위치에서 출발시켜 스크롤 진행도에 맞춰 제자리로 옮기는 FLIP 방식이라, 하나의 이미지가 움직이는 것처럼 보입니다. 원본은 전환 중에만 숨깁니다.
- 설명은 전환 후반부에 순서대로, 콜아웃은 이미지가 자리 잡은 뒤 나타나고, 역방향 스크롤 시 다시 사라집니다.
- 스크롤 스냅이 켜지는 데스크톱(1024px · 700px 이상)에서만 동작하고, 태블릿 · 모바일 · 모션 최소화 설정에서는 완성 상태를 바로 보여줍니다.
- 연결은 HTML 속성으로 지정합니다: 상세 섹션의 `data-pair="쇼케이스 id"`, 양쪽 이미지의 같은 `data-fly` 값.

## 디자인 시스템

**컬러**

| 용도 | 값 |
|---|---|
| 페이지 배경 | `#FBF7F4` (구조형 섹션 `#F9F3EF`) — 로지 아이보리 |
| 본문 | `#1A1B22` / `#1F1E1B` |
| 보조 텍스트 | `#86837B` / `#77736C` |
| 구분선 | `rgba(26,27,34,.14)` / `#E8DFDA` |
| 포인트 (텍스트 · 선 · 활성 상태) | `#A73558` 딥 베리 |
| 포인트 (배경 · 하이라이트) | `#F4A8BC` 핑크베리 (서비스 기본 테마), 연한 배경 `rgba(244,168,188,.16)` |
| 정보 박스 | `#F2EAE6` |

서비스 UI 목업과 Visual Design System의 서비스 토큰(`--tc-*`)은 실제 서비스 값을 그대로 유지합니다.

**타입 스케일** (`:root`의 CSS 변수, 화면 너비·높이에 따라 `clamp()`로 조절)

| 변수 | 용도 | 최대 크기 |
|---|---|---|
| `--t-title` | 섹션 제목 (명조 600) | 44px |
| `--t-statement` | 핵심 문장 (고딕 600) | 29px |
| `--t-h3` | 소제목 (고딕 600) | 23px |
| `--t-lead` | 강조 본문 (고딕 500) | 18px |
| `--t-body` | 본문 | 16px |
| `--t-meta` | 작은 라벨 | 13.5px |

**원칙**

- 데스크톱에서는 섹션이 한 화면 안에서 완결되도록 `slide--fit`(100svh 고정)을 사용하고, 화면 높이가 낮으면 글자 크기 · 간격 · 이미지가 `clamp()`로 함께 줄어듭니다.
- 등장 효과는 투명도와 위치만 바꿔 레이아웃 높이가 변하지 않도록 하고, `prefers-reduced-motion`에서는 모두 꺼집니다.
- 실제 서비스 화면은 목업 없이 원본 비율 그대로 사용합니다.

## 로컬에서 보기

```bash
python -m http.server 5500 --bind 127.0.0.1
# http://localhost:5500
```

수정 후에는 브라우저 캐시 때문에 이전 파일이 보일 수 있으니 **Ctrl+Shift+R**로 강력 새로고침합니다.

## 이미지 추가 방법

- 이미지는 `images/` 폴더에 **영문 · 하이픈 파일명**으로 올립니다. (예: `screen-parent.png`)
  한글 · 공백 파일명은 경로 오류가 나기 쉬워 사용하지 않습니다.
- 화면 캡처는 배경색이 페이지 박스 배경(`#FFFDFB` / `#FDF9F6`)과 맞으면 여백이 자연스럽게 이어집니다.
- 현재 페이지에서 사용하지 않는 이미지: `mode-select.png`, `mode-chat.png`, `screen-create-viewer.png`
- 연령별 결과 비교 이미지: `output-age-2-4.png` · `output-age-5-7.png` · `output-age-8-9.png` (원본 캡처 폭 약 270~340px — 더 큰 캡처로 교체 권장)

---

## 개발일지

### 2026-09-30

**발표 자료 → 웹 페이지 1차 구현**
- Padlet에 올라간 발표 PDF(14장)의 내용을 확인해 슬라이드별 섹션으로 옮김
- 이미지는 빈 자리로 두고, 스크롤 스냅 · 키보드(←→ · PageUp/Down) 이동 · 진행 바를 갖춘 정적 사이트로 구성

**GitHub Pages 404 해결**
- 저장소 이름 변경(`Portfolio_tori-stroy` → `Portfolio_tori-story`) 후 사이트가 404
- 원인 ① 사이트 파일이 커밋되지 않은 상태 → 커밋 · 푸시
- 원인 ② Pages 설정 후에도 빌드가 한 번도 실행되지 않음 → 빈 커밋으로 `pages build and deployment` 트리거
- `.nojekyll` 추가로 Jekyll 처리 없이 파일 그대로 서빙

**포트폴리오 디자인으로 전면 개편**
- 발표 PPT 톤(핑크 · 카드 · 박스)에서 한지 · 먹 · 주홍의 에디토리얼 톤으로 변경
- 고정 헤더(브랜드) · 고정 푸터(현재 섹션 · 페이지 · 진행 바) 도입
- 테스트는 커밋 없이 로컬 서버(`localhost:5500`)에서 확인하고, 수정이 끝난 뒤 한 번에 배포하는 방식으로 진행

**Cover**
- 텍스트 위계: 아이브로우 → 프로젝트명 → 메인 메시지 → 서비스 설명 → 영문 설명, 좌측 하단에 프로젝트 메타
- 수채화 히어로 일러스트를 배경 전체에 깔고, 아치 프레임(스트록 + 그림자, 바깥은 은은하게 어둡게)으로 소녀와 해태를 강조
- 아치 높이는 텍스트 블록 높이와 같게, 우측 여백은 텍스트 좌측 여백과 같게 JS로 계산 (등장 애니메이션 영향을 받지 않도록 `offsetTop` 기준)
- 따뜻한 톤: 배경 세피아 · 앰버 오버레이, 좌측 가독성용 베일

**Overview**
- 서비스 정의 · 핵심 경험 Flow(Personalize → Record) · Project Information Grid · 서비스 링크
- UI 이미지 묶음이 남은 높이에 맞춰 줄어들도록 Container Query 사용

**Background / Problem**
- 02 Background: 부모의 목소리(박스) ↔ 바라는 것 / 현실 → Idea
- 03 Problem: 질문 → What we found 3가지 → 결론 문장과 생성 → 감상 → 활동 → 기록 Flow
- 인용문은 박스 너비 기준(`cqi`) 글자 크기로 어떤 화면에서도 정확히 2줄 유지

**타이포그래피 통일**
- 1~4페이지 기준으로 타입 스케일을 CSS 변수로 정리해 이후 모든 페이지에 적용
- 큰 기울임 숫자 · 명조 소제목을 작은 고딕 번호 · 고딕 소제목으로 통일
- Persona · Solution 정보를 Background와 같은 톤의 박스로 정리

**신규 페이지 ①**
- Service Concept: 5단계 Journey(노드 + 연결선 + 실제 UI 미리보기), Architecture를 Service Concept 뒤로 이동
- Reading Experience — Input & Create: 선택형 · 대화형 입력, 생성 중 화면
- Reading Experience — Read: Story Viewer를 크게, 설계 원칙 · 경험 원칙 · UI 주석 ①~④

### 2026-10-01

**신규 페이지 ②**
- Beyond Reading — Activity: 독후활동 4종 탭 · 참여형 활동 · 리워드 게임
- Visual System — Record: Parent Dashboard 위 01~05 영역 주석, PRIMARY / SECONDARY 정보 위계, 목록 hover 시 해당 카드 영역 강조(`:has()`)
- Learned: 3가지 배움 · 직접 경험한 범위 · 기여도 (시연 페이지 대체)
- Thank you: 도장 아이콘 제거, Role · Contribution · Output과 서비스 링크로 변경

**이미지 박스 정리**
- 좌우 여백을 잘라 확대하는 방식은 화면이 잘려 보여 되돌리고, 박스를 남은 높이만큼 채운 뒤 `object-fit: contain`으로 전체 표시
- 박스 배경을 이미지 여백색과 맞춰 비율 차이로 생기는 여백이 티 나지 않도록 함
- 캡션 줄 수가 달라도 이미지 박스 높이가 같도록 CSS Subgrid 사용
- 3칸 그리드가 넓은 이미지 때문에 늘어나지 않도록 `minmax(0, 1fr)`로 고정

**내비게이션 · 정리**
- 페이지 순서 조정: Architecture(08)를 Service Concept(09) 앞으로, 섹션 번호 자동 재정렬
- 하단 각주를 페이지명으로 변경, hover 시 위로 페이지 메뉴가 펼쳐지도록 추가 (디자인 ①~④는 '디자인' 하나로 묶음)
- 우측 여백에 첫 페이지 이동 플로팅 버튼 추가
- 사이트 전체의 토리 도장 아이콘 제거, 히어로 프로젝트명을 기본 글꼴로 통일

**버그 수정**
- 각주 메뉴 코드 교체 중 진행 표시 변수 선언(`$cur`, `$bar`)이 함께 삭제되어 JS가 초기화 단계에서 멈춤
  → 등장 효과가 걸린 페이지(Overview · Service Concept · Read · Record · Learned 등) 내용이 보이지 않던 문제 → 선언 복원

**배포**
- GitHub에 직접 업로드한 이미지 커밋과 병합 후 중복 이미지 정리, GitHub Pages 배포 확인

### 2026-10-17

**UX/UI 포트폴리오 확장** — 설계 판단과 AI 활용 구현 경험을 설명하는 페이지 추가
- Age-based Personalization: 서비스 코드(`solar.ts` · `activity.ts`)의 `getAgeTier` · 연령별 생성 기준을 확인해 3단계 기준표와 생성 로직으로 정리
- Generation Output: 연령별 이해력 활동 결과를 3단으로 비교, 열 폭을 Age-based 기준표와 맞춤
- Create · Activity · Dashboard UX Design 상세 페이지와 쇼케이스 → 상세 FLIP 전환 구현
- Read 페이지를 Reading UX Design으로 통합하고 콜아웃을 이미지 내 박스 강조 방식으로 변경
- Design to Development: 팀 기술 스택과 개인 구현 참여 범위를 구분해 표기
- Design Refinement: 생성 대기 화면 BEFORE(PDF에서 추출) / AFTER 비교, 실시간 진행률이 아님을 각주로 명시
- Learned · Architecture 문구를 실제 작업 방식(AI 생성 코드 활용)에 맞게 수정

**Visual Design System** — 기존 Naming 페이지 대체
- Brand Identity(네이밍 + 4가지 컬러 테마), Typography, UI Components 3개 영역으로 구성
- 폰트는 서비스 CSS와 라이브 사이트에서 실제 렌더링되는 폰트를 확인해 표기 (Gowun Batang · NanumSquareRound · Gowun Dodum)
- 버튼 · 선택 칩 · 카드는 서비스 동화 만들기 화면의 스타일 값을 그대로 옮김

**페이지 순서 · 번호**
- 전체 순서 재배치, 표지를 00번으로 지정해 하단 카운터와 아이브로우 번호를 일치시킴
- 페이지 번호는 HTML 순서대로 JS가 자동 정렬

**검수**
- Playwright 헤드리스로 1024×768 ~ 1920×1080 해상도에서 각 페이지가 상하단 크롬과 겹치는지 측정하며 조정
- 기존 Read · Record · Learned 페이지의 1280×720 이하 겹침은 원본에도 있던 값 (Read는 통합 과정에서 해결)

**Visual Design System 다듬기**
- 컬러 테마를 서비스 테마 피커(`TopNav.tsx`)의 실제 이름 · 대표색으로 교체: 핑크베리 #F4A8BC · 새벽민트 #BFECE9 · 황금노을 #FFE4A5 · 달빛별 #C9DAFF
- 기본 테마(핑크베리)만 바깥 스트로크로 강조, 칩 안 이름 · HEX는 굵기와 크기를 한 단계 낮춤
- 새싹 아이콘과 네이밍 설명을 나란한 박스로 묶고, 박스 높이를 컬러칩 ~ Theme Application 영역과 같게 맞춤 (Grid 행 공유)
- Typography 항목 사이 구분선 제거, 설명 문구 수정
- Core Features(10)와 Visual Design System(09) 순서 교체

### 2026-10-21

**기획 · 의사결정 페이지 추가** — PM 관점의 판단 근거를 보여주는 페이지 구성
- User Needs & Core Value(신규): Background · Problem · Persona에서 확인한 니즈 3가지를 서비스 핵심가치와 1:1로 연결
- SWOT & Strategic Insights: SWOT 2×2, Key Insight, 우선순위 판단 기준(User Value · Quality & Cost · Feasibility)
- MoSCoW Prioritization: Must · Should · Could · Won't Have 분류, 기본 기록 시각화는 우선순위 조정을 거쳐 Must Have로 포함
- MVP Scope: 생성 → 독서 → 독후활동 → 책장 저장 핵심 경험 (개념적 흐름임을 캡션으로 명시, Roadmap과 역할 구분)
- Operational Considerations(2화면): 생성 API 호출 구조와 비용 발생 지점, 팀 논의, Free / Premium 기능 구분 — 비용 · 매출 수치는 산출하지 않았으므로 넣지 않음
- Design Refinement: Constraint → UX Problem → Design Decision 레일 추가 (Before / After 이미지 크기 유지)
- Business Model: 기획(요금 모델) · 구현(요금제 비교 · 결제 화면 UI, 결제 모듈 미연동) · 향후(TTS 목소리 다양화 · 모션) 구분
  - 구현 여부는 서비스 저장소의 구독 페이지 코드를 확인해 표기
- 이미지 모델 문구 통일: 기획 단계 검토 모델은 DALL·E 3, 정식 배포 전까지 OpenAI GPT Image 1 사용 후 정식 배포 시 DALL·E 3로 전환 예정

**정보 구조 · 내비게이션**
- 상단 브랜드 각주를 6단계 프로세스 인디케이터로 교체 (페이지별 `data-step`, Learned는 REFLECTION 라벨)
- 페이지 순서 재정렬: Persona → User Needs → SWOT → MoSCoW → MVP Scope → Solution, Service Concept → Core Features, Dashboard UX → Design Refinement → Design to Development → Architecture
- 여러 화면이 같은 번호를 공유하던 방식을 없애고 화면마다 고유 번호 부여 (00 ~ 30), 같은 제목이 이어지는 화면은 하단 메뉴에서 하나로 묶음
- 아이브로우 영문 표기 통일 (한글 병기 제거, `MoSCoW`는 대문자 스타일 안에서도 철자 유지)
- Core Features 카드 순서: 생성 → 놀이마당 → 부모 대시보드 / Solution 순서: 한국 문화 → 맞춤 생성 → 놀이마당 + 부모 대시보드

**디자인**
- 포인트 컬러를 주홍(`#C4432B`)에서 핑크베리 기반(딥 베리 `#A73558` · 핑크베리 `#F4A8BC`)으로 전환
- 베이지 배경 · 카드 · 구분선의 노란 기운을 줄여 로지 아이보리 계열로 조정, 히어로 베일도 같은 방향으로 미세 조정
- Age-based Personalization: "연령별 3단계 생성 규칙" 핵심 메시지 강조, 8개 범주는 보조 근거로 축소, Generation Logic을 연한 핑크베리 박스로 강조

**검수**
- 헤드리스 Chrome으로 1280×720 ~ 1920×1080, 태블릿 · 모바일 너비에서 화면 넘침 · 가로 스크롤 · 인디케이터 글자 잘림을 수치로 확인
- 1366×768 이상에서 수정 페이지 모두 한 화면 안에 표시, 1280×720의 일부 겹침(Persona · Dashboard 등)은 기존부터 있던 값
