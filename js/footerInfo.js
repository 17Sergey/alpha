$(function () {
    let
        content = $('.footer__info'), // ссылка на контейнер
        tasksFile = "https://raw.githubusercontent.com/17Sergey/alpha/main/xml/contacts.xml"; // файл с задачами

    // GET запрос на получение данных из xml файла
    const RequestObject = {

        url: tasksFile,
        method: 'GET',
        dataType: 'xml',
        async: true,
        success: (resp) => {
            console.log("resp: ", resp)
            // найти все и пройтись
            // сформировав заполненный данными html шаблон
            $(resp).find('task').each((index, item) => {

                // получаем ссылку на задачу
                const _item = $(item);

                // и вытаскиваем из нее данные
                const
                    id = _item.attr('id'),
                    name = _item.find('name').text().trim(),
                    desc = _item.find('description').text().trim()

                console.log(id)
                console.log(name);
                console.log(desc);

                // формируем шаблон
                content += `
                    <tr>
                        <th scope="row">${id}</th>
                        <td class="tr-edit">${name}</td>
                        <td class="tr-edit">${desc}</td>
                    </tr>
                `
            });

            // добавляем в текст страницы содержимое базового шаблона
            content.html(tasksTable.content);
            let tasks = $('#tasks');

            tasks.find('tbody').html(tableRow)
        },

        // ошибку выводим в консоль
        error: (error) => console.log(error)
    }

    // здесь непосредственно выполняем запрос
    $.ajax(RequestObject);

});