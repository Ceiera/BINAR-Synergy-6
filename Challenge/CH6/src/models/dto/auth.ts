interface AuthRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  token: String;
}

export { AuthRequest, AuthResponse };
