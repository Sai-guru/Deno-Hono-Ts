

export const ENV = {
  PORT: Number(Deno.env.get('PORT') ?? 8000),
  JWT_SECRET: Deno.env.get('JWT_SECRET') ?? 'our-secret',
}
