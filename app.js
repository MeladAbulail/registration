
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyCHBlSx_irq3t1fwwhz8x_Pt-gYqZ7qEJI",
    authDomain: "register-6bbd1.firebaseapp.com",
    projectId: "register-6bbd1",
    storageBucket: "register-6bbd1.appspot.com",
    messagingSenderId: "235189104869",
    appId: "1:235189104869:web:3234c12dc9165dede2240c",
    measurementId: "G-L8N3PP9MM0"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    signUp.addEventListener('click' , (e) =>{
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var number = document.getElementById('phone').value;

        createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert('user Created')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert('User already exist!!');
            });
            function validateName(name) {
          if (name.trim() === "") {
            document.getElementById("usernameError").textContent =
              "Please enter your username";
            return false;
          } else {
            document.getElementById("usernameError").textContent = "";
            return true;
          }
        }

        function validateEmail(email) {
          if (!/^\S+@\S+.\S+$/.test(email)) {
            document.getElementById("emailError").innerHTML =
              "Please enter a valid email address";
            return false;
          } else {
            document.getElementById("emailError").innerHTML = "";
            return true;
          }
        }

        function validatePassword(password) {
          if (
            !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[\W_]).{8,}/.test(
              password
            )
          ) {
            document.getElementById("passwordError").innerHTML =
              "Password must be at least 8 characters with 1 number, 1 uppercase, and 1 lowercase. sc";
            return false;
          } else {
            document.getElementById("passwordError").innerHTML = "";
            return true;
          }
        }

    
        function validatePhone(phone) {
          if (!/^07\d{8}$/.test(phone)) {
            document.getElementById("phoneError").innerHTML =
              "Phone number must start with 07 and be 10 digits long";
            return false;
          } else {
            document.getElementById("phoneError").innerHTML = "";
            return true;
          }
        }

        // Check all fields and only proceed if they are valid
        if (
          validateName(username) &&
          validateEmail(email) &&
          validatePassword(password) &&  
          validatePhone(number)
        );

    });