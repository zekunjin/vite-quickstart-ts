export interface IUser {
  id: string | number
  username: string
}

export default class User implements IUser {
  public id: string | number
  public username: string

  constructor(user: IUser) {
    this.id = user.id
    this.username = user.username
  }
}
