const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') //if the input box is empty
    { 
        alert("You must write something!");
    } else 
    {
        let li = document.createElement("li"); //creating html el called li 
        li.innerHTML = inputBox.value; //the text in the i/p field ll b added here
        listContainer.appendChild(li); // should be displayed under listcontainer
        
        let span = document.createElement("span");
        span.innerHTML = "\u2713"; // line through
                // Add event listener to toggle checked class
        span.addEventListener("click", function()
         {
            li.classList.toggle("checked");
            saveData();
          });
        
        li.appendChild(span); // Append span to li
    }
    inputBox.value = ""; 
    saveData();  // save the data
}

// check / uncheck / delete function
listContainer.addEventListener("click", function(e)
 {
    if (e.target.tagName === "LI") // if i click on tag li it ll check
     {                             // if alrdy checked then it ll uncheck
        e.target.classList.toggle("checked");
        saveData(); 
     } 
    else if (e.target.tagName === "SPAN") // if i click on tag span it ll check
     { 
        e.target.parentElement.remove(); // Remove parent element (li)
        saveData(); 
     }
}, false);

function saveData()
 {
    localStorage.setItem("data", listContainer.innerHTML); 
    //whtvr we ll put in list cont i.e li it ll b stored on browser by the name of data
}

function showApps() //to display the list saved 
{
    listContainer.innerHTML = localStorage.getItem("data"); 
}

showApps();
