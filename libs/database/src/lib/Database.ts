import postgres from "postgres";
import * as dotenv from "dotenv";

dotenv.config();

const ENV_PASSWORD = process.env.DATABASE_PASSWORD as string;

export function postgresOpen(
  url: string = "127.0.0.1",
  username: string = "main",
  password: string = ENV_PASSWORD,
  database: string = "main"
) {
  const sql = postgres({
    db: database,
    host: url,
    password: password,
    user: username,
    port: 5432,
  });

  return sql;
}
