import { Request, Response } from "express";

class ContatoController{

  public async contato(req:Request, res:Response) {
   
    res.render("curiosidade");

  }

}

export const contatoController = new ContatoController();