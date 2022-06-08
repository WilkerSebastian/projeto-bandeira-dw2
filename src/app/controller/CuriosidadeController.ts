import { Request, Response } from "express";

class CuriosidadeController{

  public async curiosidade(req:Request, res:Response) {
   
    res.render("curiosidade");

  }

}

export const curiosidadeController = new CuriosidadeController();