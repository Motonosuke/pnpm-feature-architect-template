export class ApiError<Data = undefined> extends Error {
  status: number | undefined;
  url: string | undefined;
  data: Data;
  constructor(
    status: number | undefined,
    message: string | undefined,
    url: string | undefined,
    data: Data,
  ) {
    super(message);
    this.status = status;
    this.url = url;
    this.data = data;
  }
}
