function highlight(table) {

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];

    if (row.cells[3].dataset.available === "true") {
      row.classList.add("available");
    } else if (row.cells[3].dataset.available === "false"){
      row.classList.add("unavailable");
    }

    if (!row.cells[3].dataset.available) {
      row.setAttribute("hidden", true);
    }

    if (row.cells[2].textContent === "m") {
      row.classList.add("male");
    } else if (row.cells[2].textContent === "f"){
      row.classList.add("female");
    }

    if (parseInt(row.cells[1].textContent) < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}