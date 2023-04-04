import {
  AuthorizeBasic,
  error,
  success,
  isContentTypeJson,
} from "@continuum-ai/utilities";
import { postgresOpen } from "@continuum-ai/database";
import type { APIRoute } from "astro";
import * as crypto from "crypto";

export const put: APIRoute = async function ({ params, request }) {
  // Check the user utilizing the authorization header from the request.
  const user = await AuthorizeBasic(request.headers);

  if (!user) {
    return error(["Fatal error in authorization."]);
  }
  // Get the request body as json, validate the content type aswell
  const body = await isContentTypeJson(request);

  if (!body) {
    return error(["Invalid content-type, expecting application/json"]);
  }

  // Check if all required fields are given.
  const name = body.name;
  const edit_url = body.edit_url;
  const success_url = body.success_url;
  const revoke_url = body.revoke_url;
  const domain = body.domain;
  const failure_email = body.failure_email;
  // Create a random token that is going to be used as the applications public_key
  // We need 64 characters, 3/4 is needed for the base64 conversion
  const public_key = crypto.randomBytes((64 * 3) / 4).toString("base64url");

  if (!name || !success_url || !revoke_url || !domain || !edit_url) {
    return error(["Missing required parameter."]);
  }

  // Open a new postgres connection
  const sql = postgresOpen();

  const executed =
    await sql`INSERT INTO link_apps (name, success_url, revoke_url, domain, public_key, creator, request_failure_email, edit_url) VALUES (${name},
		${success_url},
		${revoke_url},
		${domain},
		${public_key},
		${user.id},
		${failure_email},
		${edit_url})`;
  sql.end();

  if (executed.length == 0) {
    return error(["Something went wrong!"]);
  }

  return success({
    public_key,
  });
};
