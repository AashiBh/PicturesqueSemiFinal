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
   usersName=localStorage.getItem("Woah");
console.log(usersName);
document.getElementById("UsaName").innerHTML="Welcome "+usersName;
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot){
       document.getElementById("FireBase_output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names =" + Room_names);
row="<div class='room_name' id=" +Room_names +" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("FireBase_output").innerHTML+=row;
      //End code
      });});}
      getData();
function Roman(){
var Adds=document.getElementById("AddsRoom").value;
firebase.database().ref("/").child(Adds).update(
      {
purpose:"Add room name"
      }
);
localStorage.setItem("AddRoom" , Adds);
window.location="picturesque_page.html";
}
function LogLogout(){
      localStorage.removeItem("Woah");
      localStorage.removeItem("AddRoom");
      window.location="index.html";
}
function redirect(room_name){
      localStorage.setItem("room_name" , room_name);
window.location="picturesque_page.html";
}