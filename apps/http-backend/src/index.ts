import express from "express";
import zod from "zod"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {User,SigninSchema,CreateRoomSchema} from "@repo/common/types"


const app = express();


app.use(express.json());


app.post("/signup", (req:any, res:any) => {
    const response = User.safeParse(req.body);

    if (response.success) {
        return res.status(200).json({
            msg: "User signed in successfully",
        });
    } else {
        return res.status(400).json({
            msg: "There was an issue with signing in",
     });
    }
});


app.post("/signin",(req,res)=>{
    const {username,password} = req.body;
    const response = SigninSchema.safeParse(req.body);
    const userId=1;

    if(response.success){
         const token = jwt.sign({userId},JWT_SECRET);
         res.json({
            token
         })
    }
    
});


app.post("/room",middleware,(req,res)=>{
    
    res.json({
        roomId:"123" 
    })
})


app.listen(3001);