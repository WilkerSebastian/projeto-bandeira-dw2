import { Request, Response } from "express";

class HistoriaController{

  public historia(req:Request, res:Response) {
   
    res.render("historia");

  }

}

export const historiaController = new HistoriaController();