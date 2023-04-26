$(function () {
    alert(1)
    let
        app = $('#app'), // ссылка на контейнер приложения
        tasksTable = document.querySelector('#tasksTable'), // ссылка на базовый шаблон списка задач
        tasksFile = "contacts.xml"; // файл с задачами


    // GET запрос на получение данных из xml файла
    const RequestObject = {

        url: tasksFile,
        method: 'GET',
        dataType: 'xml',
        async: true,
        success: (resp) => {

            // при успешном выполнении запроса
            let tableRow = '';

            // найти все задачи и пройтись по ним
            // сформировав заполненный данными html шаблон
            $(resp).find('task').each((index, item) => {

                // получаем ссылку на задачу
                const _item = $(item);

                // и вытаскиваем из нее данные
                const
                    id = _item.attr('id'),
                    name = _item.find('name').text().trim(),
                    desc = _item.find('description').text().trim()

                console.log(id, name, desc)

                // формируем шаблон
                tableRow += `
                    <tr>
                        <th scope="row">${id}</th>
                        <td class="tr-edit">${name}</td>
                        <td class="tr-edit">${desc}</td>
                    </tr>
                `
            });

            // добавляем в текст страницы содержимое базового шаблона
            app.html(tasksTable.content);
            let tasks = $('#tasks');

            tasks.find('tbody').html(tableRow)
        },

        // ошибку выводим в консоль
        error: (error) => console.log(error)
    }

    // здесь непосредственно выполняем запрос
    $.ajax(RequestObject);

});