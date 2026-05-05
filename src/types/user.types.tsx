export interface User {
  id: number
  username: string
  status : string
  name: string
}

export interface UserForms {
  id: number;
  username: string;
  status: string;
  name : string;
  email: string;
  password: string;
  confirmPassword: string;
  emailverified : string;
  lastlogin : string;
}