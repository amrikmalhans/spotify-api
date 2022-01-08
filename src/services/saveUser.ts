import { err, ok } from "neverthrow";
import { databaseClient } from "../database/client";

export const saveUser = async (user: User) => {
  const checkUserQuery = `SELECT id FROM users WHERE id = :userID`;
  const checkUserReplacements = {
    userID: user.id,
  };
  const checkUserResult = await databaseClient.query(
    checkUserQuery,
    checkUserReplacements
  );

  if (checkUserResult.isErr()) {
    return err(checkUserResult.error);
  }

  if (checkUserResult.value.length > 0) {
    return err(new Error("User already exists"));
  }

  const saveUserQuery = `INSERT INTO users (id, name, spotifyurl, followers, imageurl, uri) VALUES (:id, :name, :spotifyurl, :followers, :imageurl, :uri)`;
  const saveUserReplacements = {
    id: user.id,
    name: user.name,
    spotifyurl: user.spotifyURL,
    followers: user.followers,
    imageurl: user.imageURL,
    uri: user.uri,
  };
  const saveUserResult = await databaseClient.query(
    saveUserQuery,
    saveUserReplacements
  );

  if (saveUserResult.isErr()) {
    return err(saveUserResult.error);
  }
  return ok(saveUserResult.value);
};

interface User {
  id: string;
  name: string;
  spotifyURL: string;
  followers: number;
  imageURL: string;
  uri: string;
}
