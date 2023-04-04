import type { ContinuumUser } from "../User";
import type { LinkApp, LinkConnection } from "./types";
import { postgresOpen } from "@continuum-ai/database";

export async function getLinkConnection(user: ContinuumUser, app: LinkApp) {
  const sql = postgresOpen();
  const result =
    await sql`SELECT * FROM link_connections WHERE app_id = ${app.id} AND user_id = ${user.id}`;
  sql.end();

  if (result.length == 1) {
    return result[0];
  }

  return null;
}

export async function addLinkConnection(
  user: ContinuumUser,
  app: LinkApp
): Promise<boolean> {
  const sql = postgresOpen();
  try {
    const result =
      await sql`INSERT INTO link_connections (app_id, user_id) VALUES (${app.id}, ${user.id})`;
    sql.end();
    return true;
  } catch (e) {
    return false;
  }
}

export async function getAllLinkConnections(
  user: ContinuumUser
): Promise<(LinkConnection & LinkApp)[] | null> {
  const sql = postgresOpen();
  const result = await sql`
    SELECT * FROM link_connections LEFT JOIN link_apps ON id = app_id WHERE user_id = ${user.id}`;
  sql.end();

  if (result.length == 0) {
    return null;
  }

  return result as unknown as (LinkConnection & LinkApp)[];
}
