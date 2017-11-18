export class User {
    id: number;
    password: string;

  constructor (
    public firstName: string,
    public username: string,
    public lastName: string
  ) {  }
}
