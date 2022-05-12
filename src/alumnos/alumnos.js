function init(){
  
  refreshList();
 
  
}


 function refreshList(){
 clearTable();
 
  let t = document.querySelector('#alumnoRow'),
  td = t.content.querySelectorAll("td");
  tr = t.content.querySelector("tr");
  let tb = document.querySelector("tbody");
  let clone = "";
  
  for(let i = 0; i < 100; i++){
  tr.dataset.id = "1235646565";
  tr.dataset.name = "Stuff";
  tr.dataset.major = "ISW";
  tr.dataset.age = "22";
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";
  td[2].textContent = "ISW";
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
    showModal(this.dataset.id, this.dataset.name, this.dataset.major, this.dataset.age);

    
  }

}

}

function showModal(id, name, major, age){
  let modal = document.querySelector('#modal_containerusr');
  modal.classList.add('show');
  modal.querySelector('#nombre').value = name;
  modal.querySelector('#major').value = major;
  modal.querySelector('#edad').value = age;
  
 
}

//close modal
let modal = document.querySelector('#modal_containerusr');
let btnCancelUsr = document.querySelector('#btn_cancelUsr');
btnCancelUsr.addEventListener('click', () => {
modal.classList.remove('show');
let table = document.querySelector('.table tr.selected');
table.classList.remove('selected');
});


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

  let btnCancelAdd = document.querySelector('#btn_cancelAdd');
  btnCancelAdd.addEventListener('click', () => { 
    modalAdd.classList.remove('show');
  })

});






  /* update button 

  let modalUpdate = document.querySelector('#modal_containerUpdate');
  let btnUpdate = document.querySelector('.updt');

  btnUpdate.addEventListener('click', () => {
    
      modalUpdate.classList.add('show');
  });

  */


  // Modal Buttons //


 