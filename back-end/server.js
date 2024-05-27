import express from "express";
import {ContactRoutes} from "../back-end/contractUS/route.js";

const app = express();

app.use("/api/contact", ContactRoutes)

app.listen(3003,()=>{
    console.log("Server listen at port 3003");
})