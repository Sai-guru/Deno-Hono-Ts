import {
  SignJWT,
  jwtVerify,
  importPKCS8,
  importSPKI,
  type JWTPayload,
} from "jose";
import { ENV } from "../config/env.ts";

export class JWT {
  // Symmetric (HS256, default)
  static async sign(payload: object, expiresIn: string = "1h") {
    return await new SignJWT(payload as any)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(expiresIn)
      .sign(new TextEncoder().encode(ENV.JWT_SECRET));
  }

  static async verify(token: string): Promise<JWTPayload> {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(ENV.JWT_SECRET)
    );
    return payload;
  }

  // Asymmetric (RS256)
  static async signRS(payload: object, expiresIn: string = "1h") {
    if (!ENV.PRIVATE_KEY) throw new Error("Private key not loaded");
    const privateKey = await importPKCS8(ENV.PRIVATE_KEY, "RS256");
    return await new SignJWT(payload as any)
      .setProtectedHeader({ alg: "RS256" })
      .setExpirationTime(expiresIn)
      .sign(privateKey);
  }

  static async verifyRS(token: string): Promise<JWTPayload> {
    if (!ENV.PUBLIC_KEY) throw new Error("Public key not loaded");
    const publicKey = await importSPKI(ENV.PUBLIC_KEY, "RS256");
    const { payload } = await jwtVerify(token, publicKey);
    return payload;
  }
}
