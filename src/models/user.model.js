const { Schema, model, models } = require("mongoose");
const emailRegex = new RegExp("[a-zA-Z0-9]{5,}@[a-z]{3,5}.com?");
const passwordRegex = new RegExp("^(?!.*(.)\1{3})((?=.*[\d])(?=.*[A-Za-z])|(?=.*[^\w\d\s])(?=.*[A-Za-z])).{8,20}$");
const nameRegex = new RegExp("[a-zA-Z]");
const phoneRegex = new RegExp("^[+]*[(]{0,1}[1-9]{1,4}[)]{0,1}[-\s\./0-9]*$");


const userSchema = new Schema(
    {
      rol: {
          type: String,
          required: true,
          enum: {
              values: ["admin", "superadmin", "user"],
              message: "The role is unavaliable"
          } 
      },
      email: {
          type: String,
          required: true,
          match: [emailRegex, "Invalid email"],
          validate: [{
              validator(value){
                  return models.User.findOne({email:value})
                  .then((user)=>{
                      !user;
                  })
                  .catch(()=>{
                    false;
                  })
              },
              message: "This email already exists"
            }]
      },
      password: {
          type: String,
          required: true,
          match: [passwordRegex, "Invalid password"]
      },
      name: {
          type: String,
          required: true,
          match: [nameRegex, "Invalid name"],
          maxlength: [10, "Name must have less than 10 characters"]
      },
      phone: {
          type: String,
          required: false,
          match: [phoneRegex, "Phone must be 12 characters long"]
      }
    },
    {
      timestamps: true,
    }
  );
  
  
  const User = model("User", userSchema);
  
  module.exports = User;