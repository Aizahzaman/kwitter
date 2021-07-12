
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDU2fnzi843fvGrxcHFCxnNaz83EtcGOic",
      authDomain: "kwitter-64780.firebaseapp.com",
      databaseURL: "https://kwitter-64780-default-rtdb.firebaseio.com",
      projectId: "kwitter-64780",
      storageBucket: "kwitter-64780.appspot.com",
      messagingSenderId: "746156383719",
      appId: "1:746156383719:web:035fb84484dd093dd67142"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
    welcome_name=localStorage.getItem("username");
    document.getElementById("welcome").innerHTML="Welcome "+welcome_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}





function logout(){
      window.location="index.html";
      localStorage.removeItem("username");
}