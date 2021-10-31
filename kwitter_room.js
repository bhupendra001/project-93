
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAKvLwGeRafbuB5fpqJIvD6a3Q5LQNcjz0",
      authDomain: "kwitter-525a7.firebaseapp.com",
      databaseURL: "https://kwitter-525a7-default-rtdb.firebaseio.com",
      projectId: "kwitter-525a7",
      storageBucket: "kwitter-525a7.appspot.com",
      messagingSenderId: "996295826738",
      appId: "1:996295826738:web:08db10a2664e2646974b2b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
