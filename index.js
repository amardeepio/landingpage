function sendEmail() {
    var params = {

      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,

    };
  
 
 
 


  const serviceID = "service_4zd4f72";
  const  templateID = "template_0vnbntn";

  emailjs.send(serviceID,templateID,params).then((res) =>
    
    {
          
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          console.log(res);
          alert("Your message sent successfully");

    })
    .catch((err) => console.log(err));
    

  }