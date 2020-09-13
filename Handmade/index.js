let form = document.querySelector('form'); //найти элемент
console.log(form);
form.onsubmit = function (evt) {
    evt.preventDefault();
    let elem = form.elements.email;
    console.log(elem.value);
};

//на следующее занятие - изучить отправку на сервер*****
//дз - накручивать стили css в текущий файл (флексбоксы)