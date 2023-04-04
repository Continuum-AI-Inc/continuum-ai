import { postgresOpen } from "@continuum-ai/database";
import type { LinkApp } from "./types";

export async function getLinkApp(publicKey: string): Promise<LinkApp | null> {
  // Open a new database connection.
  const sql = postgresOpen();
  const result =
    await sql`SELECT * FROM link_apps WHERE public_key = ${publicKey}`;
  sql.end();

  if (result.length > 0) {
    return result[0] as LinkApp;
  }

  return null;
}
