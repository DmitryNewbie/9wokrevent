"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/
document.querySelector('#from').addEventListener('keyup', myText);
function myText() {
    let text = document.querySelector('#from').value;
    document.querySelector('span').innerHTML = text;
}

/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate__animated и animate__fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/
const messageBtnELm = document.querySelector(".messageBtn");
messageBtnELm.addEventListener("click", () => {
    messageBtnELm.classList.add("animate__animated", "animate__fadeInLeftBig" );
    messageBtnELm.style.visibility = "visible";
})
/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

 

const inputElm = document.querySelector('input.form-control');
const buttonElm = document.querySelector('form.button');

 buttonElm.addEventListener('click', function () {
    if(inputElm.value === ''){
        inputElm.style.border = "5px solid red";
    } else{
        inputElm.style.border = "none"
    }
 })