let defaultCity = '三亚'
// localStorage使用时在外层包裹try...catch...
// 避免用户浏览器设置禁用localStorage或隐身模式出错
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
