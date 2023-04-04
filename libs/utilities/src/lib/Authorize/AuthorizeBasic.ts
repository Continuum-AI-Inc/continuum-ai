import { postgresOpen } from "@continuum-ai/database";
import { sha256 } from "../Hashing";
import type { ContinuumUser } from "../User";

async function AuthorizeBasic(headers: Headers): Promise<ContinuumUser | null> {
  // Support both lower- and uppercase headers
  const authorizationHeader = headers.get("authorization");

  if (!authorizationHeader || authorizationHeader.indexOf("Basic") == -1) {
    // No authorization header was found, return null.
    return null;
  }

  // Split the authorization header at the space character.
  const base64 = authorizationHeader.split(" ")[1];
  // Decode the base64
  try {
    // This operation may fail if the string was improperly decoded.
    const decoded = Buffer.from(base64, "base64").toString();
    // Split at the colon to get username and password.
    const [username, givenPassword] = decoded.split(":");

    if (!username || !givenPassword) {
      // Username or password missing.
      return null;
    }

    const sql = postgresOpen();

    // Verify the user actually exists.
    const res = await sql`SELECT * FROM users WHERE username = ${username}`;
    sql.end();

    // Check if the user could be found.
    if (res.length == 0) {
      return null;
    }

    const user = res[0];

    // Compare the given password with the one stored in our database.
    if (sha256(givenPassword) !== user.password) {
      return null;
    }

    // Finally return the user if everything went smoothly.
    return user as ContinuumUser;
  } catch (e) {
    return null;
  }
}

export { AuthorizeBasic };
