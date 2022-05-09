var t = document.querySelector('#alumnoRow'),
  td = t.content.querySelectorAll("td");
  let tb = document.querySelector("tbody");
  let clone = "";
  
  for(let i = 0; i < 100; i++){
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";
  td[2].textContent = "Stuff";
  td[3].textContent = "Stuff";
  

  clone = document.importNode(t.content, true);
  tb.appendChild(clone);

}

  
  
  
  


