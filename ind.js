// const express = require("express");
// const app = express();
// const port = 3001;

// // Home page with dancing stickman and username input
// app.get("/", (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <title>show MAgic</title>
//       <style>
//         body {
//           margin: 0;
//           background: #0f0f0f;
//           height: 100vh;
//           overflow: hidden;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-direction: column;
//           color: #0ff;
//           font-family: Arial, sans-serif;
//         }
//         .stickman {
//           position: relative;
//           width: 20px;
//           height: 100px;
//           animation: float 3s ease-in-out infinite;
//         }
//         .head {
//           width: 20px;
//           height: 20px;
//           background: #0ff;
//           border-radius: 50%;
//           position: absolute;
//           top: 0;
//           left: 0;
//         }
//         .body {
//           width: 4px;
//           height: 40px;
//           background: #0ff;
//           position: absolute;
//           top: 20px;
//           left: 8px;
//         }
//         .left-arm, .right-arm {
//           width: 30px;
//           height: 4px;
//           background: #0ff;
//           position: absolute;
//           top: 30px;
//         }
//         .left-arm {
//           left: -26px;
//           transform: rotate(30deg);
//           transform-origin: right center;
//           animation: waveLeft 1s ease-in-out infinite alternate;
//         }
//         .right-arm {
//           left: 10px;
//           transform: rotate(-30deg);
//           transform-origin: left center;
//           animation: waveRight 1s ease-in-out infinite alternate;
//         }
//         .left-leg, .right-leg {
//           width: 4px;
//           height: 30px;
//           background: #0ff;
//           position: absolute;
//           top: 60px;
//         }
//         .left-leg {
//           left: 4px;
//           transform: rotate(20deg);
//           transform-origin: top center;
//           animation: walkLeft 1s ease-in-out infinite alternate;
//         }
//         .right-leg {
//           left: 12px;
//           transform: rotate(-20deg);
//           transform-origin: top center;
//           animation: walkRight 1s ease-in-out infinite alternate;
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//           100% { transform: translateY(0px); }
//         }
//         @keyframes waveLeft {
//           from { transform: rotate(30deg); }
//           to { transform: rotate(50deg); }
//         }
//         @keyframes waveRight {
//           from { transform: rotate(-30deg); }
//           to { transform: rotate(-50deg); }
//         }
//         @keyframes walkLeft {
//           from { transform: rotate(20deg); }
//           to { transform: rotate(40deg); }
//         }
//         @keyframes walkRight {
//           from { transform: rotate(-20deg); }
//           to { transform: rotate(-40deg); }
//         }

//         input {
//           padding: 10px;
//           font-size: 18px;
//           border: 2px solid #0ff;
//           border-radius: 8px;
//           background-color: #000;
//           color: #0ff;
//           outline: none;
//           margin-top: 30px;
//           width: 250px;
//           text-align: center;
//         }
//         button {
//           padding: 12px 24px;
//           font-size: 20px;
//           border: none;
//           border-radius: 8px;
//           background-color: #0ff;
//           color: #000;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//           margin-top: 10px;
//         }
//         button:hover {
//           background-color: #00cccc;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="stickman">
//         <div class="head"></div>
//         <div class="body"></div>
//         <div class="left-arm"></div>
//         <div class="right-arm"></div>
//         <div class="left-leg"></div>
//         <div class="right-leg"></div>
//       </div>
//       <input type="text" id="username" placeholder="Enter your name..." />
//       <button onclick="redirectUser()">See Magic</button>

//       <script>
//         function redirectUser() {
//           const username = document.getElementById('username').value.trim();
//           if (username) {
//             window.location.href = "/redirect/" + encodeURIComponent(username);
//           } else {
//             alert('Please enter a name!');
//           }
//         }
//       </script>
//     </body>
//     </html>
//   `);
// });

// // Redirect page showing animated message
// app.get("/redirect/:username", (req, res) => {
//   const username = req.params.username;
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <title>Magic Result</title>
//       <style>
//         body {
//           background-color: #000;
//           height: 100vh;
//           margin: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           color: #ff4500;
//           font-size: 30px;
//           font-weight: bold;
//           font-family: 'Arial', sans-serif;
//           overflow: hidden;
//         }
//         .text {
//           animation: pop 1s ease-in-out infinite alternate;
//         }
//         @keyframes pop {
//           from { transform: scale(1); }
//           to { transform: scale(1.2); }
//         }
//       </style>
//     </head>
//     <body>
//       <div class="text">${username} tu chutiya ha 😎</div>
//     </body>
//     </html>
//   `);
// });

// // Start the server
// app.get("/vaibhav",(req,res)=>{
//   res.send("vaibhav is a good gurl")
// })

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   const userexists=false;
// for(let i=0;i<ALL_USERS.length;i++){
//   if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
//     userExists=true;
//   }
// }
//   return userExists;

// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000);

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// mongoose.connect(
//   "mongodb+srv://shubhamkc194:shubhamkc2005@cluster0.yrzhttm.mongodb.net/user_app?retryWrites=true&w=majority"
// );

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   password: String,
// });

// const app = express();
// app.use(express.json());

// async function userExists(username, password) {
//   const user = await User.findOne({ username, password });
//   return user !== null;
// }

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!(await userExists(username, password))) {
//     return res.status(403).json({
//       msg: "User doesn't exist in the database",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", async function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
    
//     const users = await User.find({ username: { $ne: username } });

//     res.json({
//       users: users.map(user => ({
//         name: user.name,
//         username: user.username
//       })),
//     });
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const express = require("express");
// const app = express();

// function ticketChecker(req, res, next) {
//   const ticket = req.query.ticket;
//   if (ticket === "free") {
//     next();
//   } else {
//     res.status(403).send("Access denied");
//   }
// }

// app.use(ticketChecker);

// app.get("/ride1", function (req,res) {
//   res.send("You rode the first ride!");
// });

// app.get("/ride2", function (req,res) {
//   res.send("You rode the 2nd ride!");
// }); 

// app.get("/ride3", function (req,res) {
//   res.send("You rode the first ride!");
// });

// app.listen(3000);
const express=require("express");
const app=express();
app.get("/interest",(req,res)=>{
    const princiapl=parseInt(req.query.princiapl).value;
    const rate=parseInt(req.query.rate).value
    const time=parseInt(req.query.time).value
})

app.listen(3000);








































