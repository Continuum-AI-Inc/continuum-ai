import type { APIRoute } from "astro";
import { error, success, sha256, generateToken } from "@continuum-ai/utilities";
import { postgresOpen } from "@continuum-ai/database";
import { validate } from "email-validator";

export const post: APIRoute = async ({ params, request }) => {
  // Check if the content type is correct
  if (request.headers.get("content-type") !== "application/json") {
    return error(
      [
        "Houston! We can't hear you! The content you're sending does not have the right frequency...",
      ],
      400
    );
  }

  // Get the parameters needed to register.
  // name, username, password, email
  const body = await request.json();
  // Open a new postgres connection
  const sql = postgresOpen();

  if (!body.name || !body.username || !body.password || !body.email) {
    return error(
      [
        "Houston! We're missing something up here! Where are our username, email, password and name?",
      ],
      400
    );
  }

  // Check if the password meets minimum requirements
  if (body.password.length < 8) {
    return error([
      "That ain't a secure password! You gotta fill those 8 characters somehow!",
    ]);
  }
  // Check if the email is an actual email
  if (!validate(body.email)) {
    return error([
      "You gotta give us something to work with here! That's not even a real email!",
    ]);
  }

  // Check if the username is already taken.
  const checkUser = await sql`
		SELECT * FROM users WHERE username = ${body.username} OR email = ${body.email}
	`;

  if (checkUser.length > 0) {
    sql.end();
    return error([
      "Houston! We've got a problem! The username or email are already taken!",
    ]);
  }

  // Create a unique, random token
  const token = generateToken(32);
  // And a random public id
  const public_id = generateToken(32);
  // Hash the password
  const hashedPassword = sha256(body.password);

  await sql`
		INSERT INTO users (username, name, email, password, token, public_id) VALUES (${body.username}, ${body.name}, ${body.email}, ${hashedPassword}, ${token}, ${public_id})
	`;
  sql.end();

  return success({
    token,
    public_id,
  });
};
