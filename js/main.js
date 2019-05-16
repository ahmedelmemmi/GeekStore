{/* <script>
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyB9L8L9MdiEpkvTGyyb_eT9yXXUT2GGmp8",
    authDomain: "geekstore-df575.firebaseapp.com",
    databaseURL: "https://geekstore-df575.firebaseio.com",
    projectId: "geekstore-df575",
    storageBucket: "geekstore-df575.appspot.com",
    messagingSenderId: "376307937552",
    appId: "1:376307937552:web:2ba5fa9e10b05851"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
 */}



var config = {
    apiKey: "AIzaSyB9L8L9MdiEpkvTGyyb_eT9yXXUT2GGmp8",
    authDomain: "geekstore-df575.firebaseapp.com",
    databaseURL: "https://geekstore-df575.firebaseio.com",
    projectId: "geekstore-df575",
    storageBucket: "geekstore-df575.appspot.com",
    messagingSenderId: "376307937552",
    appId: "1:376307937552:web:2ba5fa9e10b05851"
};
firebase.initializeApp(config);
var messagesRef = firebase.database().ref("geek");
//   var ref = database.ref("test");






 document.getElementById("contactform").addEventListener("submit",submitForm);
 function submitForm(e){
 e.preventDefault();

 var name = getInputVal('name');
 var email= getInputVal('emaill');
 var num= getInputVal('num');
 var msg= getInputVal('msg');
 saveMessage(name,email,num,msg);
 document.querySelector('.alert').style.display ='block';
 setTimeout(function(){
 document.querySelector('.alert').style.display = 'none';
 },3000);
 }

 function getInputVal(id){
 return document.getElementById(id).value;
 }

 function saveMessage(name,email,num,msg){
 var newMessagesRef = messagesRef.push();
 messagesRef.set({
 name:name,
 emaill:emaill,
 num:num,
 msg:msg
 });
 }