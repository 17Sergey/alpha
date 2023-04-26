$(function () {
    let
        container = $('.footer__info'), // ссылка на контейнер
        content = "" // html внутри контейнера
        tasksFile = "https://raw.githubusercontent.com/17Sergey/alpha/main/xml/contacts.xml"; // файл с задачами

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

            // добавляем в текст страницы содержимое базового шаблона
            container.html(content);
        },

        // ошибку выводим в консоль
        error: (error) => console.log(error)
    }

    // здесь непосредственно выполняем запрос
    $.ajax(RequestObject);

});