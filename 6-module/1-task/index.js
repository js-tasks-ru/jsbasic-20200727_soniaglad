/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: '',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 * 
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable(rows);
    this.removeRow();
  }

  createTable(rows) {

    // table
    let table = document.createElement('table');
    // document.body.appendChild(table);

    // table head
    let tableHead = document.createElement('thead');
    table.appendChild(tableHead);

    let tableHeadRow = document.createElement('tr');
    tableHead.appendChild(tableHeadRow);

    let tableHeadData = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];

    for (let data of tableHeadData) {
      let headCell = document.createElement('th');
      tableHeadRow.appendChild(headCell);
      headCell.innerHTML = data;
    }

    // table body  
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (let i = 0; i < rows.length; i++) {
      let row = document.createElement('tr');
      tableBody.appendChild(row);
      row.classList.add('row');

      // table cells -> не нравится < 5
      for (let j = 0; j < tableHeadData.length; j++) {
        let bodyCell = document.createElement('td');
        row.appendChild(bodyCell);

      }

      // заполняем из свойств объектов
      let name = tableBody.rows[i].cells[0];
      name.innerHTML = rows[i].name;

      let age = tableBody.rows[i].cells[1];
      age.innerHTML = rows[i].age;

      let salary = tableBody.rows[i].cells[2];
      salary.innerHTML = rows[i].salary;

      let city = tableBody.rows[i].cells[3];
      city.innerHTML = rows[i].city;

      let button = tableBody.rows[i].cells[4];
      button.innerHTML = '<button class="remove-button">x</button>';
    }

    return table;
  }

  removeRow() {
    // контейнер для обработчика (делегирование)
    let container = this.elem.querySelector('tbody');

    // вешаем обработчик на контейнер
    container.addEventListener('click', (event) => {
      if (event.target.className != 'remove-button') return;
      let row = event.target.closest('.row');
      row.remove();
    });
  }
}
