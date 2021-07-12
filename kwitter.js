function next(){
    ls= document.getElementById("Input").value;
    localStorage.setItem("username", ls);
    window.location="kwitter_room.html";
}