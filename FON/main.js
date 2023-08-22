let body = document.querySelector('body')
let input = document.querySelector('.input')
let btn = document.querySelector('.btn')


btn.addEventListener(`click`, () => {
   body.style.backgroundColor = input.value
})