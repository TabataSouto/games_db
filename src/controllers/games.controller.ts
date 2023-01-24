import { Request, Response } from "express";
import StatusCode from "../enums/statusCodes";
import GamesService from "../services/games.service";

export default class GamesController {
  private service: GamesService;

  constructor() {
    this.service = new GamesService();
  }

  public getAllGames = async (_request: Request, response: Response) => {
    const games = await this.service.getAllGames();
    response.status(200).json(games)
  }
}