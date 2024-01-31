function sendMail(){
    var params={
        name: "Franci",
        email: "francirizai2002@gmail.com",
        message: "Hibro"
    }
}

const serviceID= "service_vvyoy2c";
const teamplateID= "template_ll5tjfe";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        
    }
)