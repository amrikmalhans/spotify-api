import { databaseClient } from "../database/client";
import { ok, err } from "neverthrow";

export const fetchUser = async (userID: string) => {
  const query = `SELECT * FROM users WHERE id = :userID`;
  const replacements = {
    userID,
  };
  const result = await databaseClient.query(query, replacements);

  if (result.isErr()) {
    return err(result.error);
  }

  return ok(result.value[0][0]);
};
