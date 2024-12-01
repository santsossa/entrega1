import { Router } from "express";
import mocks from "./mocks.router.js";

export default class MainRouter{
    constructor(){
        this.router= Router();
        this.init();
    }

    init(){
        this.router.use("/mocks", mocks);
    }

    getRouter(){
        return this.router;
    }
}
