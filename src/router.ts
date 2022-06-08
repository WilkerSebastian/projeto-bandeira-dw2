import { Router } from "express";
import { curiosidadeController } from "./app/controller/CuriosidadeController";
import { historiaController } from "./app/controller/HistoriaController";
import { homeController } from "./app/controller/HomeController";


const router: Router = Router()

router.get("/", homeController.home);

router.get("/historia", historiaController.historia);

router.get("/curiosidade" , curiosidadeController.curiosidade)

export { router };