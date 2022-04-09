// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC6LsqS7F2Nwj6mBH0_a4yTgbYcif29kRM",
    authDomain: "social-website-e4c07.firebaseapp.com",
    databaseURL: "https://social-website-e4c07-default-rtdb.firebaseio.com",
    projectId: "social-website-e4c07",
    storageBucket: "social-website-e4c07.appspot.com",
    messagingSenderId: "625323657687",
    appId: "1:625323657687:web:1c11d5d11057e090d2e392"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("welcome_username").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room"
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
}


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("ROOM NAMES" + Room_names);
                row = "<div class ='room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
                console.log("row"+row);
                document.getElementById("output").innerHTML += row;

                //End code
          });
    });
}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    window.location = "index.html";
}