import {app} from "./app";
import connectDB from "./utise/db"
require("dotenv").config();



//create server
app.listen(process.env.PORT, () =>{
  console.log(`Server is running with port ${process.env.PORT}`);
  connectDB();
});