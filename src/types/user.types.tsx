export interface User {
  id: number
  username: string
  status : string
  name: string
}

export interface UserForms {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name : string;
  status: string;
  emailverified : string;
  lastlogin : string;
}