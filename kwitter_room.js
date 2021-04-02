var firebaseConfig = {
  apiKey: "AIzaSyB6SuOpjUM9wcmcePBb_iKiqqfc0Zb7fyo",
  authDomain: "kiwtter-29bfb.firebaseapp.com",
  databaseURL: "https://kiwtter-29bfb-default-rtdb.firebaseio.com",
  projectId: "kiwtter-29bfb",
  storageBucket: "kiwtter-29bfb.appspot.com",
  messagingSenderId: "659424207679",
  appId: "1:659424207679:web:9a1006f3e092555127698a"
};
    
    firebase.initializeApp(firebaseConfig);

function addRoom() {
  addroom = document.getElementById("room_name").value
  firebase.database().ref("/").child(addroom).update({
    purpose: "adding roomname"
  })
}

