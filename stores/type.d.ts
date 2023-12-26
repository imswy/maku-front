export interface IUser {
    name: string
    age: number
  }
  
  interface IState {
    token: string
    userData: IUser | null
  }