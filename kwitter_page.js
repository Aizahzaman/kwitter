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

var room_name=localStorage.getItem("room_name");
var user_name=localStorage.getItem("username");

document.getElementById("welcome_room").innerHTML="Welcome to "+room_name;
    function send(){
          message=document.getElementById("text").value;
          firebase.database().ref(room_name).push({
                like:0,
                message:message,
                name:user_name
          });
          document.getElementById("text").value=" ";
    }

    function logout(){
          window.location="index.html";
          localStorage.removeItem("username");
          localStorage.removeItem("room_name");
    }




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
      
         message=message_data['message'];
         like=message_data['like'];
         name=message_data['name'];
         console.log(message);  

         line1="<h3>"+name+"<img class='user_tick' src='tick.png'></h3>";
         line2="<h4 class='message_h4'>"+message+"</h4>";
         line3="<button class='btn btn-info' id="+firebase_message_id+" onclick='like(this.id)' value="+like+"><span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button>";
         
         
         document.getElementById("output").innerHTML=line1+line2+line3;       
     
      } });  }); }
getData();


function like(message_id){
button_id=message_id;
number_oflikes=document.getElementById(button_id).value;
update_likes=Number(number_oflikes)+1;

firebase.database().ref(room_name).child(message_id).update({ 
      like:update_likes
});
}