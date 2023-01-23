import Games from "../database/models/Games";

export default class GamesService {
  private games: typeof Games;

  constructor() {
    this.games = Games;
  }

  public async getAllGames(): Promise<Games[]> {
    const games = this.games.findAll() as any;
    const resolvePromise: Games[] = await Promise.all(games);
    return resolvePromise.sort((a, b) => a.year - b.year);
  }
}
