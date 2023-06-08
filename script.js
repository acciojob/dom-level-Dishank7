//your JS code here. If required.
let list = document.getElementsByTagName("li");
for(let i = 0; i < list.length; i++){
    if(list[i].id === "level"){
        alert("The level of the element is:"+list[i].innerText);
    }
}