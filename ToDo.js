const list = document.getElementById('list');
const input = document.getElementById('input');
const LINE_THROUGH = "del";
const color = "chartreuse";
let LIST, id;
let defcolor = "blue";
let Data = localStorage.getItem("ToDo");

if (Data) {
    LIST = JSON.parse(Data);
    id = LIST.length;
    loadList(LIST);


}
else {
    LIST = [];
    id = 0;
}

function loadList(array) {
    array.forEach(function (item) {
        addtoDo(item.name, item.id, item.done, item.trash);
        if (item.done == true && document.getElementById(`id${item.id}`) ) {
            document.getElementById(`id${item.id}`).style.color = "chartreuse";
        }
        if (item.trash == true) {

        }


    });

}

function addtoDo(toDo, id, done, trash) {

    if (trash) { return; }

    const LINE = done ? LINE_THROUGH : "";

    const item = ` <li class='item' id="id${id}"  style=" margin-left: auto; margin-right: auto;  border-style: 
     solid; border-radius: 8px;" >
                    <input id="bu2" onclick="completeToDo(${id})" job="complete"  type="button" value="&#10004">
                    <i name="ele" style="color=${defcolor}" id="ele${id}"> ${toDo}</i> 
                     <input type="button" id="bu" onclick="removeToDo(${id})" value="&#10008">
                     <input type="button" id="bu3" onclick="toDoEdit(${id})" value="&#9998">
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

            localStorage.setItem("ToDo", JSON.stringify(LIST));// storing Data in local storage


            id++;


        }
        input.value = ""//creating the text bar empty again
    }

});

let count = 0;
function completeToDo(id) {



    LIST[id].done = LIST[id].done ? false : true;


    if (LIST[id].done == true) {


        document.getElementById(`id${id}`).style.color = "chartreuse";
        localStorage.setItem("ToDo", JSON.stringify(LIST));
    }

    else if (LIST[id].done == false) {
        document.getElementById(`id${id}`).style.color = "black";
        localStorage.setItem("ToDo", JSON.stringify(LIST));

    }



}
function removeToDo(id) {



    LIST[id].trash = true; // make it true to hide the element 
    document.getElementById(`id${id}`).style=
    `
    
    margin-left: auto; margin-right: auto;  border-style:  solid; border-radius: 8px;
    opacity:0;
       
    transition:  2s;
    
    `
    
    // document.getElementById(`id${id}`).style="displaynone";

    if (LIST[id].trash == true) {
        localStorage.setItem("ToDo", JSON.stringify(LIST));
    }

}
function toDoEdit(id) {
    var edit = prompt('enter text');
    if (edit != null) {
        LIST[id].name = edit;
        document.getElementById(`ele${id}`).innerHTML = edit
        localStorage.setItem("ToDo", JSON.stringify(LIST));

    }
}



