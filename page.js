var firebaseConfig = {
    apiKey: "AIzaSyAw0WX3bQQortEFwDkfeThPu-C_xpYj3x0",
    authDomain: "picturesque1-66417.firebaseapp.com",
    databaseURL: "https://picturesque1-66417-default-rtdb.firebaseio.com",
    projectId: "picturesque1-66417",
    storageBucket: "picturesque1-66417.appspot.com",
    messagingSenderId: "669271078946",
    appId: "1:669271078946:web:287d1b461ae706f7ed727b",
    measurementId: "G-3MRXCNWXFB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var userName=localStorage.getItem("Woah")
function LogLogout(){
    localStorage.removeItem("Woah");
    localStorage.removeItem("AddRoom");
    window.location="index.html";
}
room_name=localStorage.getItem("AddRoom");
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'> "+ message + "</h4>";
like_button = "<button class='btn btn-warning' id="+ firebase_message_id +" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();
function Sam(){
 mssgs=document.getElementById("sendso").value;
firebase.database().ref(room_name).push({
 name:userName , 
 message: mssgs ,
 like:0
});
document.getElementById("sendso").value=" ";
}
function updateLike(message_id){
 console.log("Morgerath");
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedLokiLikes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
 like:updatedLokiLikes
});
}