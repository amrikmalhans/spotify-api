import { Request, Response } from "express";
import { fetchUser } from "../services/fetchUser";
import { getUserValidationSchema } from "../utils/validation";

export const getUser = async (req: Request, res: Response) => {
  const validate = getUserValidationSchema.validate(req.query);

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }

  const { userID } = validate.value;

  const data = await fetchUser(userID);

  if (data.isErr()) {
    res.status(404).send("INTERNAL ERROR");
    return;
  }

  res.status(200).send(data.value);
};
