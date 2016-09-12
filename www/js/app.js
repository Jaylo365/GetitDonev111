/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

function getArray()
{
    var taskList = [];
    var task = localStorage.getItem("TaskList");
    if(task !== null)
        {
            taskList = JSON.parse(task);
        }
    return taskList;
}

function add()
{
    var valueOfTask = document.getElementById("taskValue").value;
    var array = getArray();
    array.push(valueOfTask);
    localStorage.setItem("TaskList", JSON.stringify(array));
    //Display the Array on page
    display();
    
    
    return false;
}

document.getElementById("add").addEventListener("click", add);

//display function

function display()
{
    
    var array = getArray();
    var html = "<ol>";
    for(var i = 0; i < array.length; i++)
    {
        html += "<li>"+array[i]+"<button class='remove' id='"+i+"'>x</button></li>";
    }
    html += "</ol>";
    
    document.getElementById("ListOfTasks").innerHTML=html;
    var buttons = document.getElementsByClassName("remove");
    
    for (i = 0; i < buttons.length; i++)
        {
            buttons[i].addEventListener("click", remove);
        }
}

function remove()
    {
        var id = this.getAttribute("id");
        var array = getArray();
        array.splice(id, 1);
        localStorage.setItem("TaskList", JSON.stringify(array));
        display();
        return false;
    }



//Display the list on screen
display();

























