// deno-lint-ignore-file require-await
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../../types/auth";

async function login(data: LoginRequest): Promise<AuthResponse> {
  // deno-lint-ignore no-process-global
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

async function register(data: RegisterRequest): Promise<AuthResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

async function logout(): Promise<void> {
  // Clear any client-side tokens if needed
  // The httpOnly cookie will be cleared by the server
}

export const authAPI = {
  login,
  register,
  logout,
};
