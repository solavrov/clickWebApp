/* global firebase */

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA_m6YOCEJ772WcpZ3Ch4lsCYKhTALEtVc",
  authDomain: "click-48d48.firebaseapp.com",
  databaseURL: "https://click-48d48.firebaseio.com",
  projectId: "click-48d48",
  storageBucket: "",
  messagingSenderId: "634889820160",
  appId: "1:634889820160:web:ad1a574c977e43f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get database reference
var database = firebase.database();

var dbCounterValue = database.ref('data/counter');

var counter = document.getElementById("counter");
var button = document.getElementById("button");

dbCounterValue.on('value', function(snapshot) {
    counter.innerText = snapshot.val();
});

button.addEventListener("click", function(){
    dbCounterValue.set(parseInt(counter.innerText) + 1);
});


