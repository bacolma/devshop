
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


export interface RegisterRequest {
  nombre: string;
  email: string;
  password: string;
}


export interface RegisterResponse {
  success: boolean;
  message?: string;

  user?: {
    id: number;
    nombre: string;
    email?: string;
    role: string;
  };
}


