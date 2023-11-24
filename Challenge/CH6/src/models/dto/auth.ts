interface AuthRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

export { AuthRequest, AuthResponse };
