import Games from "../database/models/Games";

export default class GamesService {
  private games: typeof Games;

  constructor() {
    this.games = Games;
  }

  public async getAllGames(): Promise<Games[]> {
    return this.games.findAll();
  }
}
