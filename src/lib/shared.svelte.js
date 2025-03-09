export const counter = $state({
    count : 0
})

// svelte 의 rune 은 컴포넌트 외부에서도 사용 가능함
// 리액트의 useState 는 컴포넌트 내부에서만 선언 가능했음
// Context API, Redux, Zusatnd 등 과 같은 전역상태관리 라이브러리가 필요했음