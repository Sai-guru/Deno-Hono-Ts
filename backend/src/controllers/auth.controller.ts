import { Hono } from "hono";
import { register, login } from "../services/auth.service.ts";
import { setCookie } from "hono/cookie";

export const authController = new Hono();

// @register
export const registerController = async (data) => {
  try {
    console.log("Register request received");
    const { email, password } = await data.req.json();
    console.log("Email:", email);

    const newUser = await register(email, password);
    console.log("Registration successful");
    return data.json({ message: "User registered", user: newUser }, 201);
  } catch (error) {
    console.error("Registration controller error:", error);
    return data.json({ message: "Registration failed" }, 500);
  }
};

// @login
export const loginController = async (data) => {
  try {
    const { email, password } = await data.req.json();

    const result = await login(email, password);

    // Set cookie (auto-managed by browser)
    setCookie(data, "authToken", result.token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7200, // 2 hours
      path: "/",
    });

    return data.json({ message: "User logged in", email }, 200);
  } catch (_error) {
    return data.json({ message: "Invalid credentials" }, 401);
  }
};
