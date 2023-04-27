$(function () {
    let
        // ссылка на контейнер
        container = $('.footer__info'),
        // html внутри контейнера
        content = "",
        // файл с информацией
        tasksFile = "https://raw.githubusercontent.com/17Sergey/alpha/main/xml/contacts.xml";


    // GET запрос на получение данных из xml файла
    const RequestObject = {

        url: tasksFile,
        method: 'GET',
        dataType: 'xml',
        async: true,
        success: (resp) => {
            // найти все и пройтись
            // сформировав заполненный данными html шаблон

            $(resp).find("contacts").children().each((index, item) => {
                content += `<p>${item.textContent}</p>`;
            })

            // добавляем в контейнер содержимое шаблона
            container.html(content);
        },

        // ошибку выводим в консоль
        error: (error) => console.log(error)
    }

    // здесь непосредственно выполняем запрос
    $.ajax(RequestObject);
});

    // const xhttp = new XMLHttpRequest();

    // xhttp.onload = function () {
    //     const xmlDoc = xhttp.responseXML;
    //     console.log(xmlDoc);
    //     const root = xmlDoc;
    // }
    // xhttp.open("GET", "./xml/contacts.xml");
    // xhttp.send();