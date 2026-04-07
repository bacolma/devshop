
export interface LoginResponse {
  success: boolean;
  message: string;
  token: string; // ✅ IMPORTANTE
  user: {
    id: number;
    username: string;
    status: string;
    role: string;
  };
}


export interface LoginCredentials {
  username: string;
  password: string;
}