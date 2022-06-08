import { Request, Response } from "express";

class HistoriaController{

  public async historia(req:Request, res:Response) {
   
    res.render("historia");

  }

}

export const historiaController = new HistoriaController();