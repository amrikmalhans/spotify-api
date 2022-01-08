import { Request, Response } from "express";
import { saveUser } from "../services/saveUser";
import { saveUserValidationSchema } from "../utils/validation";

export const postUser = async (req: Request, res: Response) => {
  const validate = saveUserValidationSchema.validate(req.body);

  if (validate.error) {
    res.status(400).send(validate.error.details[0].message);
    return;
  }

  const user = await saveUser(validate.value);

  if (user.isErr()) {
    res.status(404).send("INTERNAL ERROR");
    return;
  }

  res.status(200).send(user.value);
};
