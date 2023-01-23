import { Request, Response } from "express";
import StatusCode from "../enums/statusCodes";
import GamesService from "../services/games";

export default class GamesController {
  private service: GamesService;

  constructor() {
    this.service = new GamesService;
  }

  public async getAllGames(reques: Request, response: Response) {
    const games = this.service.getAllGames();
    response.status(StatusCode.OK).json(games)
  }
}