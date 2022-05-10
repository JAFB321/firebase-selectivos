function init(){
  
  refreshList();
  
}


 function refreshList(){
 clearTable();
 
  let t = document.querySelector('#alumnoRow'),
  td = t.content.querySelectorAll("td");
  let tb = document.querySelector("tbody");
  let clone = "";
  
  for(let i = 0; i < 100; i++){
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";
  td[2].textContent = "coro";
  td[3].textContent = "22";
  

  clone = document.importNode(t.content, true);
  tb.appendChild(clone);
  
}
selectedRow();
}


function selectedRow(){

  let index,
  table = document.querySelector('.table');


for(let i = 0; i < table.rows.length; i++){
  table.rows[i].onclick = function(){
    if(typeof index !== 'undefined'){
      table.rows[index].classList.remove('selected');
    }
    
    index = this.rowIndex;
    this.classList.toggle("selected");
    console.log(table.rows[index].cells);
  }

}
}


function clearTable(){
let tableHeaderRowCount = 1;
let table = document.querySelector('.table');
let rowCount = table.rows.length;
for (let i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}
}






init();

 
// buttons //

// add button //
  let modalAdd = document.querySelector('#modal_containerAdd');
  let  btnAdd = document.querySelector('.add');

  btnAdd.addEventListener('click', () => {
  
  modalAdd.classList.add('show');
});


// remove button //
let modalRemove = document.querySelector('#modal_containerRemove');
  let btnRemove = document.querySelector('.rmv');

  btnRemove.addEventListener('click', () => {
  
    modalRemove.classList.add('show');
  });

  // update button //

  let modalUpdate = document.querySelector('#modal_containerUpdate');
  let btnUpdate = document.querySelector('.updt');

  btnUpdate.addEventListener('click', () => {
    
      modalUpdate.classList.add('show');
  });

  // show button //
  let modalShow = document.querySelector('#modal_containerShow');
  let btnShow = document.querySelector('.shw');

  btnShow.addEventListener('click', () => {
      
        modalShow.classList.add('show');
    });
