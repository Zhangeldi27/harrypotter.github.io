 var selectedRow = null

/*Function SUBMIT*/
function onFormSubmit() {
        var formOfData = readTheData();
        if (selectedRow == null)
            enterNewData(formOfData);
        else
            rewrite(formOfData);
        resetForm();
    
}
/*Function Read Data*/
function readTheData() {
    var formOfData = {};
    formOfData["Header"] = document.getElementById("Header").value;
    formOfData["note"] = document.getElementById("note").value;
    return formOfData;
}
/*Enter the new Data*/
function enterNewData(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    first = newRow.insertCell(0);
    first.innerHTML = data.Header;
    second = newRow.insertCell(1);
    second.innerHTML = data.note;
    third = newRow.insertCell(2);
    third.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
/*When you click to SUBMIT, text in Forms will be reset*/
function resetForm() {
    document.getElementById("Header").value = "";
    document.getElementById("note").value = "";
    selectedRow = null;
}
/* Function of button "EDIT" */
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Header").value = selectedRow.cells[0].innerHTML;
    document.getElementById("note").value = selectedRow.cells[1].innerHTML;
}
/*You can EDIT without this function, but you can't REWRITE*/
function rewrite(formOfData) {
    selectedRow.cells[0].innerHTML = formOfData.Header;
    selectedRow.cells[1].innerHTML = formOfData.note;
}
/*Function of button "DELETE" */
function onDelete(td) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    
}