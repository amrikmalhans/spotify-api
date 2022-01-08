import { Sequelize } from "sequelize";
import { ok, err, Result } from "neverthrow";

class DatabaseClient {
  public con: Sequelize;
  public connected: boolean;

  constructor() {
    this.connected = false;
    this.con = new Sequelize("spotafan", "postgres", "postgres", {
      host: "localhost",
      dialect: "postgres",
    });
  }

  async connect() {
    try {
      await this.con.authenticate();
      this.connected = true;
    } catch (error) {
      this.connected = false;
    }
  }

  async query<T>(
    query: string,
    replacements: { [key: string]: any }
  ): Promise<Result<[T[], unknown], Error>> {
    try {
      if (!this.connected) {
        await this.connect();
      }

      const queryRes = await this.con.query(query, {
        replacements,
        logging: false,
      });
      return ok([queryRes[0] as T[], queryRes[1]]);
    } catch (error: any) {
      return err(new Error(error));
    }
  }
}

export const databaseClient = new DatabaseClient();

databaseClient.connect();
