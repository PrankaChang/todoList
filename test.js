// 刪除待辦功能 & check
list.addEventListener("click",function(e){
    // console.log(e.target.getAttribute("class"));
    let num;
 
 if(e.target.getAttribute("class")==="check") {
     num=e.target.getAttribute("data-num");
     if(data[num].done){
         data[num].done=false;
     }else{
         data[num].done=true;
     }
     
 }else if(e.target.getAttribute("class")==="delete"){
     num = e.target.getAttribute("data-num");
     //console.log(num);
     data.splice(num,1);
     alert("刪除成功！");
     
 }else{
     return;
 }
 renderData();
   
 });
 
 
 // inist

 function renderData(){
   
    let str = '';
    data.forEach(function (item,index) {
  //<i class="fas fa-check"></i>
  //<i class="fas fa-times"></i>
  //<i class="fas fa-square"></i>
       let btnCheck = '';
       let p='';
       let btnClose='';
  
        if(item.done){
          btnCheck+=`<button type ="button" class="check" data-num="${index}"><i class="fas fa-check"></button>`;
          
        }else{
          btnCheck+=`<button type ="button" class="check" data-num="${index}"><i class="fas fa-square"></button>`;
        }
  
        p+=`<p> ${item.content} </p>`;
        btnClose+=`<button type ="button" class="delete" data-num="${index}"><i class="fas fa-times"></i></button>`;
        console.log(btnCheck);
       // str+=`<li> ${btnCheck} ${p} ${btnClose} </li>`;
        console.log(str);
        //console.log(dataDone);
     
      //console.log(item.content);
  })
    list.innerHTML = str;
  }