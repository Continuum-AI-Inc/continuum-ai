import type { APIRoute } from "astro";
import { error, success, sha256 } from "@continuum-ai/utilities";
import { postgresOpen } from "@continuum-ai/database";

export const post: APIRoute = async ({ params, request }) => {
  if (request.headers.get("content-type") !== "application/json") {
    return error(
      [
        "Houston! We can't hear you! The content you're sending does not have the right frequency...",
      ],
      400
    );
  }

  // Get the parameters needed to login.
  // username/email, password
  const body = await request.json();
  // Open a new postgres connection
  const sql = postgresOpen();

  if (!body.password || (!body.email && !body.username)) {
    return error(
      [
        "Houston! We're missing something up here! Where are our username, email and password?",
      ],
      400
    );
  }
  // Open a new database connection
  // Check if the username is already taken.
  const checkUser =
    await sql`SELECT name, email, password, username, token, public_id, profile_picture, verified, gender, biography FROM users WHERE username = ${body.username} OR email = ${body.email}`;
  sql.end();
  if (checkUser.length == 0) {
    return error([
      "Houston! We've got a problem! The username/email or password are wrong!",
    ]);
  }

  const user = checkUser[0];

  if (sha256(body.password) !== user.password) {
    return error([
      "Houston! We've got a problem! The username/email or password are wrong!",
    ]);
  }

  return success(user);
};
