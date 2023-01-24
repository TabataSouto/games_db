import Games from "../database/models/Games";

export default class GamesService {
  private games: typeof Games;

  constructor() {
    this.games = Games;
  }

  public getAllGames = async (): Promise<Games[]> => {
    const games = await this.games.findAll();
    const resolvePromise: Games[] = await Promise.all(games);
    return resolvePromise.sort((a, b) => a.year - b.year);
  }
}
