import { Router } from "express";
import { historiaController } from "./app/controller/HistoriaController";
import { homeController } from "./app/controller/HomeController";


const router: Router = Router()

router.get("/", homeController.home);
router.get("/historia", historiaController.historia);

export { router };