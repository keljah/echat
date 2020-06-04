
var firebaseConfig = {
    apiKey: "AIzaSyDTKRl8ARajsdHbXqVhiWaTYDWRVx_RNvU",
    authDomain: "hardwarestore-53b32.firebaseapp.com",
    databaseURL: "https://hardwarestore-53b32.firebaseio.com",
    projectId: "hardwarestore-53b32",
    storageBucket: "hardwarestore-53b32.appspot.com",
    messagingSenderId: "617312678488",
    appId: "1:617312678488:web:70c0e473d319d50ed5502d",
    measurementId: "G-X98F5MRSKW"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  
firebase.auth.Auth.Persistence.LOCAL;

function login(){

	var email = document.getElementById("namefield").value;
	var password = document.getElementById("passwordfield").value;

	var result = firebase.auth().signInWithEmailAndPassword(email, password);
	window.alert("sign in successfull");
	result.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
  window.alert("Error....."+errorMessage);
});




}

function singup(){

	var email = document.getElementById("usermail").value;
	var password = document.getElementById("userpassword").value;
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
   window.alert("Error.....");
});
   // window.alert("Error.....");

}