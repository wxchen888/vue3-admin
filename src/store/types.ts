import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

export interface IRootAndLogin {
  login: ILoginState
}

export type IStore = IRootState & IRootAndLogin
