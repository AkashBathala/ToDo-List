// function task() {

//     var x = document.getElementById('task').value;
//     if (x.length == 0 || !x) {
//         window.alert("please add sumthing")
//     }
//     else {
//         var li = document.createElement('li');
//         li.className = "list";
//         li.name = "l1";

//         var t = document.createTextNode(x);

//         var butt1 = document.createElement('button');
//         butt1.id = "bu";
//         butt1.innerHTML = "&#10008";
//         butt1.name = "butt1";

//         var butt2 = document.createElement('button');
//         butt2.id = "bu2";
//         butt2.name = "butt2";
//         butt2.innerHTML = "&#10004";

//         var butt3 = document.createElement('button');
//         butt3.id = "bu3";
//         butt3.name = "butt3";
//         butt3.innerHTML = "&#9998";

//         li.appendChild(t);
//         li.appendChild(butt2);
//         li.appendChild(butt1);
//         li.appendChild(butt3);

//         var btlength = document.getElementsByName("butt1");
//         var bt2length = document.getElementsByName('butt2');
//         var bt3length = document.getElementsByName('butt3');
//         document.getElementById("add").append(li);

//         for (i = 0; i < bt2length.length; i++) {

//             let count = 0;
//             bt2length[i].onclick = function () {

//                 if (count == 0) {
//                     this.parentElement.style.color = "chartreuse";
//                     count = 1;
//                 }
//                 else {
//                     this.parentElement.style.color = "black";
//                     count = 0;
//                 }

//             }

//             btlength[i].onclick = function () {

//                 this.parentElement.style.display = 'none';
//                 window.alert("Task Removed Successfully");

//             }

//             bt3length[i].onclick = function () {

//                 var edit = prompt('enter text');
//                 var x = document.createTextNode(edit);

//             }
//         }
// x.value="";
//         console.log(li)

//     }
// }
const list = document.getElementById('list');
const input = document.getElementById('input');
const LINE_THROUGH = "del";
const color = "chartreuse";
let LIST, id;

let data = localStorage.getItem("TODO");

if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}
else {
    LIST = [];
    id = 0;
}

function loadList(array) {
    array.forEach(function (item) {
        addtoDo(item.name, item.id, item.done, item.trash)
    });
}

function addtoDo(toDo, id, done, trash) {

    if (trash) { return; }
    // const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class='item' id="${id}"  style="border-style: solid" >
                    <input id="bu2" onclick="completeToDo(${id})" job="complete"  type="button" value="&#10004">
                    <i name="ele" id="ele${id}"> ${toDo}</i> 
                     <input type="button" id="bu" onclick="removeToDo(${id})" value="&#10008">
                     <input type="button" id="bu" onclick="toDoEdit(${id})" value="&#9998">
                    </li>`

    const position = "beforeend";
    list.insertAdjacentHTML(position, item);

}
document.addEventListener("keyup", function (even) {
    if (event.keyCode == 13) {
        const toDo = input.value;
        if (toDo) {
            addtoDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            localStorage.setItem = ("TODO", JSON.stringify(LIST));// storing data in local storage


            id++;


        }
        input.value = ""//creating the text bar empty again
    }

});
// addtoDo("coffiee", 1,true, false);
let count = 0;
function completeToDo(id) {


    // console.log(
         LIST[id].done = LIST[id].done ? false : true;//);


    if (LIST[id].done == true) {
        document.getElementById(id).style.color = "chartreuse";
    }

    else if (LIST[id].done == false) {
        document.getElementById(id).style.color = "black";

    }

    //how to make it update?

}
function removeToDo(id) {


    // confirm(LIST[id].trash);
    LIST[id].trash = true;// make it true but dont kno what to do next
    // console.log(LIST[id].trash)

    document.getElementById(id).style.display = "none"

    localStorage.setItem = ("TODO", JSON.stringify(LIST));
}
function toDoEdit(id) {
    var edit = prompt('enter text');
   
    document.getElementById(`ele`+id).innerHTML=edit
    
}
