import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";

function createRow(name, mail){
    const row = document.createElement("ui5-table-row");
    const nameCell = document.createElement("ui5-table-cell");
    nameCell.appendChild(document.createTextNode(name));
    row.appendChild(nameCell);

    const mailCell = document.createElement("ui5-table-cell");
    mailCell.appendChild(document.createTextNode(mail));
    row.appendChild(mailCell);
    return row;
}

const table = document.querySelector("#table");
table.appendChild(createRow("Leanne Graham", "Sincere@april.biz"));
table.appendChild(createRow("Clementina DuBuque", "Rey.Padberg@karina.biz"));
table.appendChild(createRow("Glenna Reichert", "Chaim_McDermott@dana.io"));



