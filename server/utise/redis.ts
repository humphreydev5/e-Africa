import { Redis } from "ioredis";
require('dotenv').config();

const redisClient = () =>{
  if(process.env.REDIS_URL){
    console.log(`Redis Connected`);
    redis
  }
}