
import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { ENV } from "../config/env.ts"

export class JWT {
  static async sign(payload: object, expiresIn: string = "1h") {
    return await new SignJWT(payload as any)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(expiresIn)
      .sign(new TextEncoder().encode(ENV.JWT_SECRET))
  }

  static async verify(token: string): Promise<JWTPayload> {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(ENV.JWT_SECRET))
    return payload
  }
}
