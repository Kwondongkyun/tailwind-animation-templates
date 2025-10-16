# Tailwind CSS 애니메이션 템플릿

Next.js와 Tailwind CSS v4를 사용한 다양한 애니메이션 효과를 탐색하고 배울 수 있는 인터랙티브 쇼케이스 프로젝트입니다.

![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

## 주요 기능

### 다양한 애니메이션 효과

- **Fade** ✨ - 부드러운 페이드 인/아웃 효과
- **Slide** ➡️ - 슬라이드 애니메이션
- **Scale** 🔍 - 크기 변환 애니메이션
- **Rotate** 🔄 - 회전 애니메이션
- **Bounce** ⚡ - 바운스 효과
- **Spin** 🌀 - 스핀 애니메이션
- **Pulse** 💓 - 펄스 효과
- **Wiggle** 〰️ - 흔들림 효과
- **Flip** 🔃 - 플립 애니메이션
- **Shake** 📳 - 흔들기 효과

### 두 가지 구현 방식

각 애니메이션은 두 가지 방식으로 구현되어 있습니다:

1. **CSS 애니메이션** - Tailwind CSS 클래스를 사용한 순수 CSS 애니메이션
2. **Framer Motion** - JavaScript 기반의 더 복잡하고 인터랙티브한 애니메이션

## 시작하기

### 필수 요구사항

- Node.js 20.x 이상
- npm 또는 yarn, pnpm

### 설치 방법

1. 저장소 클론:

```bash
git clone <repository-url>
cd tailwind-animation-templates
```

2. 의존성을 설치:

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

3. 개발 서버 실행:

```bash
npm run dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과 확인

## 기술 스택

### 핵심 기술

- **[Next.js 15](https://nextjs.org/)** - React 프레임워크 (Turbopack 지원)
- **[React 19](https://react.dev/)** - UI 라이브러리
- **[Tailwind CSS v4](https://tailwindcss.com/)** - 유틸리티 퍼스트 CSS 프레임워크
- **[Framer Motion](https://www.framer.com/motion/)** - React용 프로덕션 애니메이션 라이브러리
- **[TypeScript 5](https://www.typescriptlang.org/)** - 타입 안정성

### 개발 도구

- ESLint - 코드 품질 관리
- PostCSS - CSS 후처리

## 사용 방법

### CSS 애니메이션 사용

원하는 애니메이션의 className을 복사하여 사용합니다:

```tsx
<div className="animate-fade-in">페이드 인 효과가 적용된 컨텐츠</div>
```

### Framer Motion 사용

1. 컴포넌트에서 motion을 import합니다:

```tsx
import { motion } from "framer-motion";
```

2. motion 컴포넌트를 사용합니다:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  애니메이션 컨텐츠
</motion.div>
```

## 프로젝트 구조

```
tailwind-animation-templates/
├── src/
│   └── app/
│       ├── page.tsx           # 메인 페이지 (애니메이션 목록)
│       ├── layout.tsx         # 루트 레이아웃
│       ├── globals.css        # 글로벌 스타일
│       ├── fade/              # Fade 애니메이션 페이지
│       ├── slide/             # Slide 애니메이션 페이지
│       ├── scale/             # Scale 애니메이션 페이지
│       ├── rotate/            # Rotate 애니메이션 페이지
│       ├── bounce/            # Bounce 애니메이션 페이지
│       ├── spin/              # Spin 애니메이션 페이지
│       ├── pulse/             # Pulse 애니메이션 페이지
│       ├── wiggle/            # Wiggle 애니메이션 페이지
│       ├── flip/              # Flip 애니메이션 페이지
│       └── shake/             # Shake 애니메이션 페이지
├── public/                    # 정적 파일
├── package.json
└── README.md
```

## 주요 특징

### 인터랙티브 데모

- 각 애니메이션을 실시간으로 확인하고 테스트할 수 있습니다
- "재생" 버튼을 클릭하여 애니메이션을 즉시 실행할 수 있습니다

### 코드 예제

- 모든 애니메이션에 대한 실제 사용 가능한 코드를 제공합니다
- 복사하여 바로 프로젝트에 적용할 수 있습니다

### 다크 모드 지원

- 시스템 설정에 따라 자동으로 다크 모드를 지원합니다

### 반응형 디자인

- 모든 화면 크기에서 최적화된 경험을 제공합니다

## 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
npm start
```

## 스크립트

- `npm run dev` - Turbopack을 사용한 개발 서버 실행
- `npm run build` - 프로덕션 빌드 생성
- `npm start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행

## 기여하기

기여는 언제나 환영합니다! 새로운 애니메이션을 추가하거나 기존 애니메이션을 개선하고 싶으시다면:

1. 이 저장소를 Fork합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-animation`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing animation'`)
4. 브랜치에 Push합니다 (`git push origin feature/amazing-animation`)
5. Pull Request를 생성합니다

## 라이선스

이 프로젝트는 학습 및 참고 목적으로 만들어졌습니다.

## 참고 자료

- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [Framer Motion 공식 문서](https://www.framer.com/motion/)
- [Next.js 공식 문서](https://nextjs.org/docs)
