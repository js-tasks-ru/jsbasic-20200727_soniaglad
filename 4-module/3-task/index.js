/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {

    let statusCells = table.rows[i].cells[3];
    let isAvailable = statusCells.dataset.available;

    if (isAvailable === undefined) {
      table.rows[i].setAttribute('hidden', 'true');
    }

    let availabilityClass = 'available';

    if (isAvailable === 'false') {
      availabilityClass = 'unavailable';
    }
    table.rows[i].classList.add(availabilityClass);

    let genderCells = table.rows[i].cells[2];

    let genderClass = 'male';

    if (genderCells.innerHTML === 'f') {
      genderClass = 'female';
    }
    table.rows[i].classList.add(genderClass);

    let ageCells = table.rows[i].cells[1];

    if (ageCells.innerHTML < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }

  }
}
