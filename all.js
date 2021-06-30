const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');
const menu=document.querySelector('.menu');
const deleteAll=document.querySelector('.deleteAll');
let data = [];

//[待完成,已完成],全部[true,true],待完成[true,false],已完成[false,true]
let showListItems=[true,true];
let nowStatus='all';


//data初始資料
data=[
    {
        "content" :"把冰箱發霉的檸檬拿去丟",
         "done" :false
    },
    {
        "content" :"打電話叫媽媽匯款給我",
         "done" :true
    },
    {
        "content" :"整理電腦資料夾",
         "done" :false
    },
    {
        "content" :"繳電費水費瓦斯費",
         "done" :true
    },
    {
        "content" :"刪訊息",
        "done" : false
    },
    {
        "content" :"約vicky禮拜三泡溫泉",
        "done" : false
    },
    {
        "content" :"約ada禮拜四吃晚餐",
        "done" : false
    }
];

renderData();

function renderData(){
   
  let str = '';
  let num=0;
  data.forEach(function (item,index) {
     let btnCheck = '';
     let p='';
     let btnClose='';

      if(item.done && showListItems[1]){
         
        btnCheck+=`<button type="button" class="check text-mainColor">
        <i class="fas fa-check " data-num="${index}" data-txt="check" ></i></button>`;
        p+=`<p class="text-thirdColor line-throw"> ${item.content} </p>`;
        btnClose+=`<button type="button" class="delete">
      <i class="fas fa-times fa-2x" data-num="${index}" data-txt="delete"></i>
    </button>`;

      }else if(item.done==false && showListItems[0]){

        btnCheck+=`<button type="button" class="check" >
        <i class="far fa-square fa-2x" data-num="${index}" data-txt="check"></i></button>`;
        p+=`<p> ${item.content} </p>`;
        btnClose+=`<button type="button" class="delete">
      <i class="fas fa-times fa-2x" data-num="${index}" data-txt="delete"></i>
    </button>`;

        num+=1;
      }

     
      str+=`<li>${btnCheck} ${p} ${btnClose} </li>`;
   
    //console.log(item.content);
})
  list.innerHTML = str;
  document.getElementById('undownNum').textContent=`${num} 個待完成項目`;
}



// 新增待辦功能
save.addEventListener('click',function(e){
  if (txt.value=="") {
    alert("請輸入內容");
    return;
  }
  let obj = {};
  obj.content = txt.value;
  obj.done=false;
  data.push(obj);
  renderData();
});


// 刪除待辦功能 & check
list.addEventListener("click",function(e){
    //console.log(e.target.getAttribute("data-txt"));
    let num=e.target.getAttribute("data-num");
    let clickObj=e.target.getAttribute("data-txt");
    console.log(clickObj);
    if(clickObj==="check"){
       console.log(data[num].done);
       if(data[num].done){
        data[num].done=false;
       }else{
        data[num].done=true;
       }
    }else if(clickObj==="delete"){
        data.splice(num,1);
        //alert("刪除成功！");
    }else{
        return;
    }
    renderData();
});

//篩選
menu.addEventListener("click",function(e){
    
    document.getElementById(nowStatus).classList.remove("active");
    //console.log(document.getElementById(nowStatus));
    nowStatus=e.target.getAttribute("id");
    //console.log(e.target.getAttribute("id"));
    if(nowStatus==="all"){
        showListItems=[true,true];
        document.getElementById(nowStatus).classList.add("active");
    }else if(nowStatus==="unDone"){
        showListItems=[true,false];
        document.getElementById(nowStatus).classList.add("active");
    }else if(nowStatus==="done"){
        showListItems=[false,true];
        document.getElementById(nowStatus).classList.add("active");
    }
    renderData();
});

//deleteAll
deleteAll.addEventListener("click",function(e){
    let num=data.length;
    let newData=[];
   // console.log(num);

    for(let i=0;i<num;i++){
        //console.log(data[i].done);
        if(data[i].done==false){
            newData.push(data[i]);
        }  
    }
    data=newData;
    renderData();
});