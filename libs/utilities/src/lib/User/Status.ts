import type { AstroCookies } from "astro";
import { postgresOpen } from "@continuum-ai/database";
import type { ContinuumUser } from "./types";

export async function getUser(
  cookies: AstroCookies
): Promise<ContinuumUser | null> {
  // Check if the request carries a valid token.
  if (cookies.has("_C_TOKEN_")) {
    // Look up the token in our database
    const token = cookies.get("_C_TOKEN_").value as string;
    if (!token) {
      return null;
    }
    const sql = postgresOpen();
    const res = await sql`SELECT * FROM users WHERE token = ${token}`;
    sql.end();

    if (res.length > 0) {
      return res[0] as unknown as ContinuumUser;
    }
  }

  return null;
}

export async function isLoggedIn(
  cookies: AstroCookies
): Promise<ContinuumUser | false> {
  const user = await getUser(cookies);
  return user || false;
}
