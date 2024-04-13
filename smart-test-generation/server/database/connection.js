import { GenezioDeploy } from "@genezio/types";
import pg from 'pg'
const { Pool } = pg

@GenezioDeploy()
export class PostgresService {
  pool = new Pool({
    // connectionString: process.env["SMART_TEST_GENERATION_DATABASE_URL"],
    connectionString: "postgresql://admin:v0N7OqKhnbEI@ep-restless-hat-a2thyq5k.eu-central-1.aws.neon.tech/smart-test-generation?sslmode=require",
    ssl: true,
  });

//   async insertUser(name: string): Promise<string> {
//     await this.pool.query(
//       "CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY,name VARCHAR(255))"
//     );

//     await this.pool.query("INSERT INTO users (name) VALUES ($1)", [name]);
//     const result = await this.pool.query("select * from users");

//     return JSON.stringify(result.rows);
//   }

    async insertTest(url: string): Promise<string> {
        await this.pool.query("INSERT INTO smart_test (url) VALUES ($1)", [url]);
        const result = await this.pool.query("select * from smart_test");

        return JSON.stringify(result.rows);
    }

}