function task() {

    
    var x = document.getElementById('task').value;
    if (x.length == 0 || !x) {
        window.alert("please add sumthing")
    }
    else {
        var li = document.createElement('li');
        var t = document.createTextNode(x);

        var butt = document.createElement('button');
        butt.innerHTML = "X";
        butt.className = "close"
        butt.id="bu";
        li.className="list";
        li.appendChild(t);
        li.appendChild(butt);
        var btlength = document.getElementsByClassName('close');
        var lilength=document.getElementsByClassName('list');
       
        document.getElementById("add").append(li);
        
        for(i=0;i<lilength.length;i++)
        for (i = 0; i < btlength.length; i++) {

            btlength[i].onmouseover=function()
            {
                console.log()
            }
            btlength[i].onclick = function () {

               
                confirm("asdasdas")
                this.parentElement.style.display = 'none';

            }
            
            
        }
    }
}
