'use strict';

let toggle = document.querySelector('.nav__toggleBtn');
// class(.) 혹은 id(#)선택자로 불러온 element(node) 반환
// document.querySelectorAll() -> 지정한 id 또는 class를 가진 element(node)들의 배열을 반환
let menu = document.querySelector('.menu__list');
let icon = document.querySelector('.icon__list');

console.log(toggle);
toggle.addEventListener('click', () => {
  // 화살표 함수를 콜백으로 사용할 때에는 function 키워드를 쓰지 않는다.
  // function() {}, () => {}
  // toggle element에 click 이벤트 발생 시 콜백 실행
  menu.classList.toggle('active');
  // element.classList.toggle() -> 지정한 클래스가 없으면 추가(true 반환), 있으면 삭제(false) 반환
  icon.classList.toggle('active');
});
