function sortTable(n){
    var table;
    table = document.getElementById("table");
    var row, x, y, i;
    var count = 0;
    var switching = true;
    var direct = "ascending";

    while(switching){
        switching = false;
        var row = table.row;

        for(i = 1; i < (row.lenght - 1); i++){
            var change = false;
            x = row[i].getElementByTagName("TD")[n];
            y = row[i + 1].getElementByTagName("TD")[n];
            
            if(direct == "ascending"){
                if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                    change = true;
                    break;
                }
            }else if(direct == "descending"){
                if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                    change = true;
                    break;
                }
            }
        }if(change){
            row[i].parentNode.insertBefore(row[i + 1], row[i]);
            switching = true;
            count++;
        }else{
            if(count == 0 && direct == "ascending"){
                direct = "descending";
                switching = true;
            }
        }
    }
}

function addRow(){
    var marka = document.getElementById('marka').value;
    var model = document.getElementById('model').value;
    var silnik = document.getElementById('silnik').value;
    var paliwo = document.getElementById('paliwo').value;
    var moc = document.getElementById('moc').value;
    var przyspieszenie = document.getElementById('przyspieszenie').value;
    
    var table = document.getElementByTagName('table')[0];
    var newRow = table.insertRow(table.row.lenght);
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);

    cel1.innerHTML = marka;
    cel2.innerHTML = model;
    cel3.innerHTML = silnik;
    cel4.innerHTML = paliwo;
    cel5.innerHTML = moc;
    cel6.innerHTML = przyspieszenie;

}