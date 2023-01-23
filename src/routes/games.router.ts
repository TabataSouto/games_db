import { Router } from "express";
import GamesController from "../controllers/games.controller";

const router: Router = Router();
const controller = new GamesController();

router.get('/games', controller.getAllGames);

export default router;
