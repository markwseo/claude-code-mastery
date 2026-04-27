# 개발자 웹 포트폴리오 이력서 🚀

개인 포트폴리오를 공유하는 현대적이고 반응형 웹사이트입니다.
개발 경력, 기술 스택, 프로젝트 경험을 효과적으로 전시할 수 있습니다.

---

## ✨ 특징

- ✅ **완전 반응형 디자인** - 모바일, 태블릿, 데스크톱 최적화
- ✅ **Tailwind CSS** - 현대적이고 깔끔한 UI
- ✅ **부드러운 애니메이션** - 스크롤 페이드인, 호버 효과
- ✅ **인터랙티브 기능** - 모달, 탭, 스무스 스크롤
- ✅ **Vanilla JavaScript** - 프레임워크 불필요, 빠른 로딩
- ✅ **SEO 최적화** - 메타 태그, 시맨틱 HTML

---

## 📁 폴더 구조

```
web-resume/
├── index.html              # 메인 페이지
├── styles/
│   └── main.css            # 커스텀 스타일
├── js/
│   └── main.js             # JavaScript 기능
├── assets/
│   ├── images/             # 이미지 파일
│   ├── icons/              # SVG 아이콘
│   └── cv.pdf              # 이력서 PDF (선택)
├── CLAUDE.md               # Claude Code 가이드
├── ROADMAP.md              # 개발 로드맵
└── README.md               # 이 파일
```

---

## 🚀 빠른 시작

### 사전 요구사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge 최신 버전)
- 텍스트 에디터 또는 IDE

### 로컬 개발 서버 실행

#### Python 사용 (권장)
```bash
cd web-resume
python -m http.server 8000
```

#### Node.js 사용
```bash
cd web-resume
npx http-server
```

#### 브라우저에서 열기
```
http://localhost:8000
```

---

## 📝 사용자 정보 수정

포트폴리오의 내용을 자신의 정보로 수정하세요.

### index.html에서 수정할 항목

1. **이름 및 직책**
   - 네비게이션 바 로고 (HGD → 본인 이니셜)
   - 히어로 섹션 제목

2. **소개**
   - 프로필 이미지 추가 (선택)
   - 자기소개 텍스트 수정

3. **경력**
   - 회사명, 직급, 기간 수정
   - 주요 책임사항 및 성과 변경

4. **기술 스택**
   - 보유 기술 추가/삭제
   - 숙련도 백분율 조정 (0-100)

5. **프로젝트**
   - 프로젝트명 및 설명 수정
   - GitHub 링크, 배포 링크 추가
   - 프로젝트 이모지 변경

6. **교육 및 자격증**
   - 학력 정보 추가
   - 자격증 정보 추가

7. **연락처**
   - 이메일 주소 변경
   - 소셜 미디어 링크 추가 (GitHub, LinkedIn, Twitter 등)

### js/main.js에서 수정할 항목

이메일 링크 수정:
```javascript
window.location.href = 'mailto:your-email@example.com';
```

---

## 🎨 커스터마이징

### 색상 변경
주요 색상은 Tailwind CSS의 인디고(Indigo) 색상입니다.
다른 색상으로 변경하려면 index.html에서 다음을 바꾸세요:

- `bg-indigo-600` → `bg-blue-600`, `bg-purple-600` 등
- `text-indigo-600` → 원하는 색상으로 변경
- `border-indigo-600` → 원하는 색상으로 변경

### 폰트 변경
`<head>` 태그에 Google Fonts를 추가하거나,
Tailwind 설정에서 폰트를 변경할 수 있습니다.

### 섹션 추가
HTML 구조를 참고하여 새로운 `<section>` 요소를 추가하고,
필요한 스타일을 `styles/main.css`에 작성하면 됩니다.

---

## 📱 반응형 테스트

개발자 도구(DevTools)를 사용하여 반응형 디자인을 테스트하세요:

1. 브라우저에서 F12 또는 우클릭 → 검사(Inspect) 선택
2. 반응형 디자인 모드 켜기 (Ctrl + Shift + M)
3. 다양한 화면 크기에서 테스트:
   - 모바일: 375px
   - 태블릿: 768px
   - 데스크톱: 1280px 이상

---

## 🚀 배포

### GitHub Pages (추천)
1. GitHub에 저장소 생성
2. 파일 업로드
3. Settings → Pages → Branch를 main으로 선택
4. `https://yourusername.github.io/repo-name`에서 확인

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. https://netlify.com 접속
2. 저장소 연결
3. 자동 배포

---

## ✅ 체크리스트

개발 완료 전 다음 사항을 확인하세요:

- [ ] 모든 콘텐츠가 정확하게 입력되었는가
- [ ] 프로필 이미지 또는 아바타가 추가되었는가
- [ ] 모바일에서 모든 기능이 정상 작동하는가
- [ ] 링크가 모두 정상 작동하는가
- [ ] CV/이력서 PDF가 다운로드되는가
- [ ] 성능: Lighthouse 점수 85점 이상
- [ ] 접근성: 키보드 네비게이션 테스트 완료
- [ ] 크로스 브라우저 테스트 완료

---

## 🔧 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 모던 스타일링
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **JavaScript (ES6+)** - DOM 조작, 애니메이션

---

## 📚 참고 자료

- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ROADMAP.md](./ROADMAP.md) - 개발 로드맵

---

## 📜 라이선스

이 프로젝트는 자유롭게 사용할 수 있습니다.

---

## 💬 문의 및 피드백

개선 사항이나 질문이 있으시면, GitHub Issues에 등록해주세요.

---

**Happy Coding! 🎉**
