function generatePassword(){
   console.log("Generating Password...")
   let combo = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?!_-.@";
   let password = "";

   for (var i = 0; i<=10; i++){
      let generate = combo[Math.floor(Math.random()*68)];
      password += generate;
   }
document.getElementById("password").innerHTML = "Your new password is: " + password;
}