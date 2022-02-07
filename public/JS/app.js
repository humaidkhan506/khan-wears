const firebaseConfig = {
    apiKey: "AIzaSyBmJd5zQQ6hybNJ07s1u2vxvSueWIjFjf8",
    authDomain: "khan-wears.firebaseapp.com",
    projectId: "khan-wears",
    storageBucket: "khan-wears.appspot.com",
    messagingSenderId: "129563890255",
    appId: "1:129563890255:web:479ef79ccf2645aaeed03a",
    measurementId: "G-JBK0WGXTQ9"
  };
  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref("contactForm");
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    var username = getElementVal("username");
    var email = getElementVal("email");
    var mobile = getElementVal("mobile");
    var comment = getElementVal("comment");
  }
  const saveMessages = (username, email, mobile, comment) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        username: username,
        email: email,
        mobile: mobile,
        comment: comment,
      });

  };
  