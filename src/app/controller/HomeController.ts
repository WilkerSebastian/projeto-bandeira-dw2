import { Request, Response } from "express";

class HomeController{

  public async home(req:Request, res:Response) {
   
    res.render("home");

  }

}

export const homeController = new HomeController();