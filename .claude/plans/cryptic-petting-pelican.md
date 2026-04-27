# 다크모드 모던 디자인 리디자인 플랜

## Context
현재 포트폴리오는 화이트 배경/인디고 악센트의 라이트 테마입니다. 참고 이미지(Jensen Omega 스타일)를 기반으로 다크모드, 세련된 글래스모피즘 카드, 바이올렛 그라디언트 악센트, 히어로 2단 레이아웃(텍스트+프로필 사진), 기술 스트립 등을 적용합니다.

---

## 디자인 토큰 (색상 시스템)

| 토큰 | 값 | 용도 |
|---|---|---|
| `--bg-primary` | `#0a0a0f` | 기본 배경 (홈, 경력, 프로젝트) |
| `--bg-secondary` | `#111118` | 보조 배경 (소개, 기술, 교육, 소셜) |
| `--bg-surface` | `#1a1a2e` | 카드/패널 배경 |
| `--bg-elevated` | `#1f2040` | 스킬바 트랙, 강조 배경 |
| `--accent` | `#7c3aed` | 악센트 솔리드 (버튼, 타임라인 점) |
| `--accent-light` | `#a78bfa` | 악센트 밝은색 (링크, 텍스트 강조) |
| `--accent-glow` | `rgba(124,58,237,0.35)` | 글로우 효과 |
| `--text-primary` | `#f8f8ff` | 기본 텍스트 |
| `--text-secondary` | `#94a3b8` | 보조 텍스트 |
| `--text-muted` | `#64748b` | 희미한 텍스트 |
| `--border` | `rgba(255,255,255,0.08)` | 기본 테두리 |
| `--border-accent` | `rgba(124,58,237,0.4)` | 악센트 테두리 |

---

## 수정 대상 파일

1. **`styles/main.css`** — 완전 재작성 (CSS 변수 + 다크 테마)
2. **`index.html`** — 섹션별 클래스 교체 + 히어로 2단 레이아웃 변경 + 새 요소 추가
3. **`js/main.js`** — 활성 nav 클래스명 교체 (2줄)

---

## 1단계: styles/main.css 완전 재작성

기존 156줄 전체를 아래 내용으로 교체:

```css
/* ===== 디자인 토큰 ===== */
:root {
  --bg-primary:    #0a0a0f;
  --bg-secondary:  #111118;
  --bg-surface:    #1a1a2e;
  --bg-elevated:   #1f2040;
  --accent:        #7c3aed;
  --accent-light:  #a78bfa;
  --accent-glow:   rgba(124, 58, 237, 0.35);
  --text-primary:  #f8f8ff;
  --text-secondary:#94a3b8;
  --text-muted:    #64748b;
  --border:        rgba(255, 255, 255, 0.08);
  --border-accent: rgba(124, 58, 237, 0.4);
}

/* ===== 전역 ===== */
html { scroll-behavior: smooth; }
body { background: var(--bg-primary); color: var(--text-primary); }

/* 커스텀 스크롤바 */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-secondary); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }

/* ===== 섹션 패딩 ===== */
.section-padding { padding: 5rem 0; }

/* ===== 페이드인 애니메이션 ===== */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== 그라디언트 텍스트 ===== */
.gradient-text {
  background: linear-gradient(135deg, var(--accent-light), #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== 섹션 제목 언더라인 ===== */
.section-heading {
  position: relative;
  padding-bottom: 1rem;
}
.section-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  border-radius: 2px;
}

/* ===== 글래스모피즘 카드 ===== */
.glass-card {
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
.glass-card:hover {
  border-color: var(--border-accent);
  box-shadow: 0 8px 32px var(--accent-glow);
}

/* ===== 악센트 카드 (교육/자격증) ===== */
.accent-card {
  border-left: 4px solid var(--accent);
  background: var(--bg-surface);
  border-radius: 0 8px 8px 0;
  transition: box-shadow 0.3s ease;
}
.accent-card:hover {
  box-shadow: 0 4px 20px var(--accent-glow);
}

/* ===== 버튼 ===== */
.btn-accent {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  border: none;
}
.btn-accent:hover {
  box-shadow: 0 0 24px var(--accent-glow);
  transform: translateY(-2px);
}
.btn-outline {
  display: inline-block;
  border: 2px solid var(--accent-light);
  color: var(--accent-light);
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  background: transparent;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.btn-outline:hover {
  background: rgba(124, 58, 237, 0.15);
  box-shadow: 0 0 16px var(--accent-glow);
}

/* ===== 히어로 배경 ===== */
.hero-bg {
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}
.hero-bg::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.hero-bg::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: -80px;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

/* ===== 기술 스트립 ===== */
.tech-strip {
  background: var(--bg-surface);
  border-top: 1px solid var(--border);
  padding: 1rem 0;
  margin-top: 3rem;
}
.tech-strip span {
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0 1.5rem;
}

/* ===== 프로필 이미지 ===== */
.profile-frame {
  border-radius: 50%;
  border: 3px solid var(--border-accent);
  box-shadow: 0 0 32px var(--accent-glow);
  overflow: hidden;
  width: 260px;
  height: 260px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px var(--accent-glow); }
  50%       { box-shadow: 0 0 50px var(--accent-glow), 0 0 90px rgba(124, 58, 237, 0.15); }
}
.pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }

/* ===== 통계 배지 ===== */
.stat-badge {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-light);
  line-height: 1;
}

/* ===== 기술 태그 ===== */
.tech-badge {
  display: inline-block;
  background: var(--bg-elevated);
  color: var(--accent-light);
  border: 1px solid var(--border-accent);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  margin: 0.2rem;
}

/* ===== 경력 타임라인 ===== */
.timeline-item {
  position: relative;
  padding-left: 2rem;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: -2rem;
  width: 2px;
  background: var(--border);
}
.timeline-item:last-child::before { display: none; }
.timeline-item::after {
  content: '';
  position: absolute;
  left: -5px;
  top: 6px;
  width: 12px;
  height: 12px;
  background: var(--accent);
  border-radius: 50%;
  border: 2px solid var(--bg-primary);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

/* ===== 스킬 프로그레스 바 ===== */
.skill-bar {
  height: 8px;
  background: var(--bg-elevated);
  border-radius: 4px;
  overflow: hidden;
}
.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  border-radius: 4px;
  width: 0%;
  transition: width 1s ease;
}

/* ===== 프로젝트 카드 ===== */
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px var(--accent-glow);
}

/* ===== 모달 ===== */
.modal-overlay {
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
}
.modal-box {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  animation: modalIn 0.3s ease;
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}

/* ===== 네비게이션 ===== */
#navbar {
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
#navbar.scrolled {
  background: rgba(10, 10, 15, 0.92);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

/* ===== 연락처 소셜 링크 ===== */
.social-link {
  transition: transform 0.2s ease, color 0.2s ease;
}
.social-link:hover {
  transform: translateY(-3px);
  color: var(--accent-light);
}

/* ===== 모바일 메뉴 ===== */
@media (max-width: 767px) {
  #mobile-menu { display: none; }
  #mobile-menu.open {
    display: flex;
    flex-direction: column;
    background: var(--bg-surface);
    border-top: 1px solid var(--border);
    padding: 1rem 0;
  }
}
```

---

## 2단계: index.html 섹션별 수정

### `<body>` 태그 (line 16)
```
BEFORE: class="bg-white text-gray-900"
AFTER:  class="text-gray-100"
```

### 네비게이션 (lines 19–56)

**nav 태그** (line 19):
```
BEFORE: class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
AFTER:  class="fixed top-0 left-0 right-0 z-50 border-b" style="background: rgba(10,10,15,0.85); border-color: rgba(255,255,255,0.08); backdrop-filter: blur(12px);"
```

**로고** (line 24):
```
BEFORE: class="text-2xl font-bold text-indigo-600"
AFTER:  class="text-2xl font-bold gradient-text"
```

**데스크톱 메뉴 링크 7개** (lines 29–35):
```
BEFORE: class="text-gray-700 hover:text-indigo-600 transition"
AFTER:  class="text-gray-400 hover:text-violet-400 transition"
```

**모바일 메뉴 버튼** (line 39):
```
BEFORE: class="md:hidden text-gray-700"
AFTER:  class="md:hidden text-gray-300"
```

**모바일 메뉴 링크 7개** (lines 49–55):
```
BEFORE: class="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
AFTER:  class="block px-4 py-2 text-gray-300 hover:bg-[#1f2040] transition"
```

---

### 히어로 섹션 — 2단 레이아웃으로 변경 (lines 59–77)

현재 `text-center` 1단 레이아웃을 좌(텍스트)+우(이미지) 2단으로 변경:

```html
<!-- ========== 히어로 섹션 ========== -->
<section id="home" class="hero-bg text-white px-4 sm:px-6 lg:px-8 mt-16" style="padding-top: 6rem; padding-bottom: 0;">
  <div class="max-w-4xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between gap-12 pb-16">
      <!-- 좌측: 텍스트 -->
      <div class="fade-in-up flex-1">
        <p class="text-lg mb-3" style="color: var(--text-muted);">안녕하세요, 저는</p>
        <h1 class="text-5xl sm:text-6xl font-bold mb-4 gradient-text leading-tight">홍길동입니다</h1>
        <h2 class="text-2xl sm:text-3xl font-semibold mb-6" style="color: var(--text-secondary);">
          풀스택 웹 개발자
        </h2>
        <p class="text-base mb-8 max-w-md leading-relaxed" style="color: var(--text-muted);">
          사용자 중심의 웹 애플리케이션을 만드는 것을 좋아합니다.<br>
          현대적인 기술과 창의적인 문제 해결을 통해 의미 있는 프로젝트를 완성합니다.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#contact" class="btn-accent text-center">연락하기</a>
          <button id="cv-download" class="btn-outline">CV 다운로드</button>
        </div>
      </div>
      <!-- 우측: 프로필 사진 -->
      <div class="fade-in-up flex-shrink-0">
        <img
          src="https://picsum.photos/seed/portfolio-hero/400/400"
          alt="홍길동 프로필"
          class="profile-frame pulse-glow"
        />
      </div>
    </div>
    <!-- 기술 스트립 -->
    <div class="tech-strip -mx-4 sm:-mx-6 lg:-mx-8">
      <div class="max-w-4xl mx-auto flex justify-center flex-wrap px-4">
        <span>HTML5</span><span>CSS3</span><span>JavaScript</span>
        <span>React</span><span>Node.js</span><span>TypeScript</span><span>Git</span>
      </div>
    </div>
  </div>
</section>
```

---

### 소개 섹션 (lines 79–117)

**section 태그**:
```
AFTER: style="background: var(--bg-secondary);"
```

**H2** → `class="text-4xl font-bold mb-16 text-center section-heading"`

**프로필 이미지** (line 87–91):
```html
<img
  src="https://picsum.photos/seed/portfolio/600/600"
  alt="프로필 이미지"
  class="profile-frame"
/>
```
(이미 About에 이미지가 있으므로 pulse-glow 없이, 또는 다른 이미지 seed 사용)

**H3** (line 96): `class="text-3xl font-bold mb-6 text-gray-100"`

**본문 p 태그 2개** (lines 97, 105): `style="color: var(--text-secondary);"` 추가

소개 텍스트와 `tech-badge` 행 사이에 **통계 추가**:
```html
<!-- 통계 배지 -->
<div class="flex gap-8 mb-8">
  <div class="text-center">
    <p class="stat-badge">120+</p>
    <p class="text-sm mt-1" style="color:var(--text-muted);">완료 프로젝트</p>
  </div>
  <div class="text-center">
    <p class="stat-badge">95%</p>
    <p class="text-sm mt-1" style="color:var(--text-muted);">고객 만족도</p>
  </div>
  <div class="text-center">
    <p class="stat-badge">5+</p>
    <p class="text-sm mt-1" style="color:var(--text-muted);">년 경력</p>
  </div>
</div>
```

---

### 경력 섹션 (lines 119–151)

**section** → `style="background: var(--bg-primary);"`

**H2** → `section-heading` 클래스 추가

**타임라인 카드 2개**:
```
BEFORE: class="fade-in-up timeline-item bg-white p-6 rounded-lg shadow-sm"
AFTER:  class="fade-in-up timeline-item glass-card p-6"
```

**직책 H3 2개**:
```
BEFORE: class="text-2xl font-bold text-indigo-600 mb-2"
AFTER:  class="text-2xl font-bold mb-2 gradient-text"
```

**회사/날짜 p 2개**: `style="color: var(--text-muted);"` 추가, `text-gray-600` 제거

**ul 태그 2개**: `text-gray-700` → `style="color: var(--text-secondary);"`

---

### 기술 섹션 (lines 153–262)

**section** → `style="background: var(--bg-secondary);"`

**H2** → `section-heading` 추가

**H3 3개**:
```
BEFORE: class="text-2xl font-bold mb-6 text-indigo-600"
AFTER:  class="text-2xl font-bold mb-6 gradient-text"
```

**퍼센트 span 9개**: `class="text-gray-500"` → `style="color: var(--text-muted);"`

스킬바는 CSS 변경으로 자동 적용됨

---

### 프로젝트 섹션 (lines 264–325)

**section** → `style="background: var(--bg-primary);"`

**H2** → `section-heading` 추가

**프로젝트 카드 3개**:
```
BEFORE: class="fade-in-up project-card bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer"
AFTER:  class="fade-in-up project-card glass-card overflow-hidden cursor-pointer"
```

**카드 헤더 그라디언트 (색상 변경)**:
- 카드1: `style="background: linear-gradient(135deg, #1e1b4b, #7c3aed); height:10rem; ..."`
- 카드2: `style="background: linear-gradient(135deg, #1e1b4b, #4338ca); height:10rem; ..."`
- 카드3: `style="background: linear-gradient(135deg, #4a044e, #7c3aed); height:10rem; ..."`

**카드 제목 H3**: `text-gray-900` → `text-gray-100`

**카드 본문 p**: `text-gray-600` → `style="color: var(--text-secondary);"`

**기술 태그 span 모두**: indigo/purple/pink 배경 → `style="background: var(--bg-elevated); color: var(--accent-light); border: 1px solid var(--border-accent);"` + `class="text-xs px-2 py-1 rounded"`

---

### 모달 3개 (lines 327–425)

**modal-box**:
```
BEFORE: class="modal-box bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto relative z-10"
AFTER:  class="modal-box max-w-2xl w-full max-h-[80vh] overflow-y-auto relative z-10"
```
(CSS에서 `.modal-box`에 배경/라운드 적용됨)

**닫기 버튼**: `text-gray-500 hover:text-gray-700` → `style="color: var(--text-muted);" class="close-modal ... hover:text-violet-400 transition"`

**모달 H3**: `gradient-text` 클래스 추가

**모달 본문 p, ul**: `text-gray-700` → `style="color: var(--text-secondary);"`

**모달 링크**: `text-indigo-600 hover:underline` → `style="color: var(--accent-light);" class="hover:underline"`

---

### 교육 섹션 (lines 427–465)

**section** → `style="background: var(--bg-secondary);"`

**H2** → `section-heading` 추가

**H3 2개** (학력, 자격증): `text-indigo-600` → `gradient-text`

**border-l-4 카드 모두**:
```
BEFORE: class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-600"
AFTER:  class="accent-card p-6"
```

**날짜/기관 텍스트**: `text-gray-600` → `style="color: var(--text-secondary);"`, `text-gray-500` → `style="color: var(--text-muted);"`

---

### 소셜 섹션 (lines 467–566)

**section** → `style="background: var(--bg-primary);"`

**H2** → `section-heading` 추가

**소개 p**: `text-gray-600` → `style="color: var(--text-secondary);"`

**플랫폼 이름 p 8개**: `text-gray-900` → `text-gray-100`

**플랫폼 설명 p 8개**: `text-gray-600` → `style="color: var(--text-muted);"`

**이메일 아이콘 버튼**: `bg-indigo-600` → `style="background: var(--accent);"` 유지 (이미 어두움)

---

### 연락처 섹션 (lines 568–604)

**section**:
```
BEFORE: class="... bg-gradient-to-br from-indigo-600 to-indigo-800 text-white"
AFTER:  class="section-padding px-4 sm:px-6 lg:px-8 text-white" style="background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);"
```

**H2** → `section-heading` 추가

**서브타이틀 p**: `text-indigo-100` → `style="color: var(--text-secondary);"`

**이메일 레이블**: `text-indigo-200` → `style="color: var(--text-muted);"`

**이메일 링크**: `hover:text-indigo-200` → `class="... gradient-text hover:opacity-80 transition"`

**소셜 링크 hover**: `hover:text-indigo-200` → CSS `.social-link:hover`로 처리됨

**CV 다운로드 버튼**:
```
BEFORE: class="bg-white text-indigo-600 ..."
AFTER:  class="btn-accent"
```

---

### 푸터 (lines 606–617)

**footer 태그**:
```
BEFORE: class="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8"
AFTER:  class="py-8 px-4 sm:px-6 lg:px-8" style="background: var(--bg-surface); color: var(--text-muted); border-top: 1px solid var(--border);"
```

**기술명 span**: `text-indigo-400` → `style="color: var(--accent-light);"`

---

## 3단계: js/main.js 수정

**Lines 46–49** — 활성 nav 클래스명 교체:
```js
// BEFORE:
navLinks.forEach(link => link.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600'));
if (link.getAttribute('href') === '#' + activeId) {
  link.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
}

// AFTER:
navLinks.forEach(link => link.classList.remove('text-violet-400', 'border-b-2', 'border-violet-400'));
if (link.getAttribute('href') === '#' + activeId) {
  link.classList.add('text-violet-400', 'border-b-2', 'border-violet-400');
}
```

---

## 실행 순서

1. `styles/main.css` 완전 재작성
2. `index.html` → `<body>` 태그
3. `index.html` → 네비게이션
4. `index.html` → 히어로 섹션 (구조 변경 포함)
5. `index.html` → 소개 ~ 푸터 (top-down 순)
6. `js/main.js` → 46–49라인

## 검증 방법

```bash
python -m http.server 8000
# http://localhost:8000 에서 확인
```

- [ ] 전체 배경이 다크로 변경
- [ ] 네비게이션 글래스 효과 확인
- [ ] 히어로 2단 레이아웃 (텍스트 + 프로필 사진)
- [ ] 기술 스트립 표시
- [ ] 통계 배지 (소개 섹션)
- [ ] 글래스 카드 (경력, 프로젝트)
- [ ] 그라디언트 텍스트 (제목들)
- [ ] 스킬바 다크 테마
- [ ] 프로젝트 모달 다크 배경
- [ ] 모바일 반응형 (네비, 히어로 레이아웃)
- [ ] 활성 nav 하이라이트 (보라색)
