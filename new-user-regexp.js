// class User {
//     constructor(email, password) {
//       this.email = email;
//       this.password = password;
//     }
  
//     static matchNewPerson(name, email, password) {
//       const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
//       const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
//       if (!emailRegex.test(email)) {
//         return `${email} is not a valid email address.`;
//       }
  
//       if (!passwordRegex.test(password)) {
//         return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
//       }
  
//       return new User(email, password);
//     }
//   }
  



// newUser = User.matchNewPerson('deep', 'deep.singh@example.com', 'pword1');


// if (newUser instanceof User) {
//   console.log(`User with email ${newUser.email} created successfully.`);
// } else {
//   console.error(newUser);
// }



class user{
  constructor(email,password){
    this.email=email;
    this.password=password;
  }

  vaildateemail(){
    const emailRegex = /@.com/;
    if (!this.email.match(emailRegex)) {
     console.log(`${this.email} is not a valid email address.`);
    }
    else{
        console.log(this.email)
          }


  }
  vaildateepassword(){
  const  passwordRegex = /1deep@56774/;
    if (!this.email.match(passwordRegex)) {
     console.log(`${this.password} is not a valid email address.`);
    }
    else{
        console.log(this.password)
          }


  }
}

deep=new user("deep@.com","1deep@56774")

deep.vaildateemail()
deep.vaildateepassword()







 
// const email = "user@example.com";
// const password = "MyPa55w0rd";

//       const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// if (emailRegex.test(email)) {
//   console.log("Email is valid");
// } else {
//   console.log("Email is invalid");
// }

// if (passwordRegex.test(password)) {
//   console.log("Password is valid");
// } else {
//   console.log("Password is invalid");
// }