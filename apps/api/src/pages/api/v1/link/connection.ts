import {
  AuthorizeBearer,
  getLinkApp,
  isContentTypeJson,
  error,
  success,
} from "@continuum-ai/utilities";
import { postgresOpen } from "@continuum-ai/database";
import type { APIRoute } from "astro";

export const del: APIRoute = async function ({ params, request }) {
  // Check the user utilizing the authorization header from the request.
  const user = await AuthorizeBearer(request.headers);

  if (!user) {
    return error(["Fatal error in authorization."]);
  }

  // Get the request body as json, validate the content type aswell
  const body = await isContentTypeJson(request);

  if (!body) {
    return error(["Invalid content-type, expecting application/json"]);
  }

  if (!body.public_key) {
    return error(["Expecting to see 'public_key' as parameter."]);
  }

  const app = await getLinkApp(body.public_key);

  if (!app) {
    return error(["Invalid public_key, app does not exist."]);
  }

  // Open a new postgres connection
  const sql = postgresOpen();

  const executed =
    await sql`DELETE FROM link_connections WHERE app_id = ${app.id} AND user_id = ${user.id}`;
  sql.end();

  if (!executed) {
    return error(["Failed executing query, something went wrong."]);
  }

  return success({});
};

export const post: APIRoute = async function ({ params, request }) {
  // Update the connection to allow for spoofing values.
  // Check the user utilizing the authorization header from the request.
  const user = await AuthorizeBearer(request.headers);

  if (!user) {
    return error(["Fatal error in authorization."]);
  }

  // Get the request body as json, validate the content type aswell
  const body = await isContentTypeJson(request);

  if (!body) {
    return error(["Invalid content-type, expecting application/json"]);
  }

  // At least one of username, name or email must be given
  if (!body.username && !body.name && !body.email) {
    return error(["Missing required field 'name', 'email' or 'username'"]);
  }

  if (!body.app_id) {
    return error(["Missing required field 'app_id'"]);
  }
  // Open a new postgres connection
  const sql = postgresOpen();

  const executed =
    await sql`UPDATE link_connections SET custom_email = ${body.email}, custom_username = ${body.username}, custom_name = ${body.name} WHERE app_id = ${body.app_id} AND user_id = ${body.user_id}`;
  sql.end();

  if (!executed) {
    return error([
      "Something went wrong, either this link doesn't belong to the given user or something else interrupted the request.",
    ]);
  }

  return success({});
};
