import { postgresOpen } from "@continuum-ai/database";
import { sha256 } from "../Hashing";
import type { ContinuumUser } from "../User";

async function AuthorizeBearer(
  headers: Headers
): Promise<ContinuumUser | null> {
  // Get the authorization header
  const authorizationHeader = headers.get("authorization");

  if (!authorizationHeader || authorizationHeader.indexOf("Bearer") == -1) {
    // No authorization header was found, return null.
    return null;
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    // Token missing
    return null;
  }

  const sql = postgresOpen();
  // Verify the user actually exists.
  const res = await sql`SELECT * FROM users WHERE token = ${token}`;

  sql.end();
  // Check if the user could be found.
  if (res.length == 0) {
    return null;
  }

  const user = res[0];

  // Finally return the user if everything went smoothly.
  return user as ContinuumUser;
}

export { AuthorizeBearer };
