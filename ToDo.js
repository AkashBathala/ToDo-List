function task() {


    var x = document.getElementById('task').value;
    if (x.length == 0 || !x) {
        window.alert("please add sumthing")
    }
    else {
        var li = document.createElement('li');
        var t = document.createTextNode(x);

        var butt1 = document.createElement('button');

        butt1.className = "glyphicon glyphicon-remove"
        butt1.id = "bu";

        var butt2 = document.createElement('button');
        butt2.className = "glyphicon glyphicon-ok";
        butt2.id = "bu2";


        li.className = "list";
        li.appendChild(t);
        li.appendChild(butt2);
        li.appendChild(butt1);

        var btlength = document.getElementsByClassName('glyphicon glyphicon-remove');
        var bt2length = document.getElementsByClassName('glyphicon glyphicon-ok');

        document.getElementById("add").append(li);


        for (i = 0; i < bt2length.length; i++) 
        {
            bt2length[i].onclick = function () {
                
                this.parentElement.style.color="chartreuse";
            }
            
            

        }





        for (i = 0; i < btlength.length; i++) {


            btlength[i].onclick = function () {

                this.parentElement.style.display = 'none';
                confirm("Task Removed Successfully");

            }


        }

    }
}
