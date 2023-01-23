export default class HttpException extends Error {
  status: number;

  constructor(status: number, message: string) {
    /* atributo herdado de Error */
    super(message);
    this.status = status;
  }
}