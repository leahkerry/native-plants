function SendMail() {
  console.log('button pressed');
  var params = {
    from_name: document.getElementById("name").value,
    
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value
  }
  console.log(params.from_name);
  console.log(params.email_id);
  console.log(params.message);

   emailjs.send("service_yfnlrhr", "template_z4wwlfl", params).then(function (res) {
     console.log('sent!');
     alert("Success! " + res.status);
  })
}