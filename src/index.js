import {getAlumnos, addAlumno, deleteAlumno, editAlumno} from './api/alumnos';

function init(){
  
    refreshList();
   
  }
  
  
   async function refreshList(){
   clearTable();
   
    let t = document.querySelector('#alumnoRow'),
     td = t.content.querySelectorAll("td"),
     tr = t.content.querySelector("tr");
    let tb = document.querySelector("tbody");
    let clone = "";
    
    const alumnos = await getAlumnos();

    for(let i = 0; i < alumnos.length; i++){
    tr.dataset.id = alumnos[i].id;
    tr.dataset.name = alumnos[i].nombre;
    tr.dataset.major = alumnos[i].carrera;
    tr.dataset.age = alumnos[i].edad;
    td[0].textContent = alumnos[i].id;
    td[1].textContent = alumnos[i].nombre;
    td[2].textContent = alumnos[i].carrera;
    td[3].textContent = alumnos[i].edad;
    
  
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
    modal.querySelector('input[name="id"]').value = id;
    modal.querySelector('input[name="nombre"]').value = name;
    modal.querySelector('input[name="major"]').value = major;
    modal.querySelector('input[name="edad"]').value = age;
    
   
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
  
    
  
  });
  
    let btnCancelAdd = document.querySelector('#btn_cancelAdd');
    btnCancelAdd.addEventListener('click', () => { 
      modalAdd.classList.remove('show');
    })
  
  
  
  
    /* update button 
  
    let modalUpdate = document.querySelector('#modal_containerUpdate');
    let btnUpdate = document.querySelector('.updt');
  
    btnUpdate.addEventListener('click', () => {
      
        modalUpdate.classList.add('show');
    });
  
    */
  
  
    // Modal Buttons //
  
  let btnAddModal = document.querySelector('#btn_add');
  
  btnAddModal.addEventListener('click', async () => {
    
    let id = document.querySelector('#modal_containerAdd input[name="id"]').value;
    let name = document.querySelector('#modal_containerAdd input[name="nombre"]').value;
    let major = document.querySelector('#modal_containerAdd input[name="major"]').value;
    let age = document.querySelector('#modal_containerAdd input[name="edad"]').value;
    const alumno={
        id: id,
        nombre: name,
        carrera: major,
        edad: age
        
    }
    await addAlumno(alumno);
    refreshList();
    modalAdd.classList.remove('show');
  });
   

  let btnEditModal = document.querySelector('#btn_edit');
    btnEditModal.addEventListener('click', async () => {
    let id = document.querySelector('#modal_containerusr input[name="id"]').value;
    let name = document.querySelector('#modal_containerusr input[name="nombre"]').value;
    let major = document.querySelector('#modal_containerusr input[name="major"]').value;
    let age = document.querySelector('#modal_containerusr input[name="edad"]').value;
    const alumno={
        id: id,
        nombre: name,
        carrera: major,
        edad: age
    }
    await editAlumno(alumno);
    refreshList();
    modal.classList.remove('show');
});


let btnDeleteModal = document.querySelector('#btn_rmv');
btnDeleteModal.addEventListener('click', async () => {
    let id = document.querySelector('#modal_containerusr input[name="id"]').value;
    await deleteAlumno(id);
    refreshList();
    modal.classList.remove('show');
});
