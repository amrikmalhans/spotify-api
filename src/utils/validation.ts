import Joi from "joi";

export const spotifyAuthValidationSchema = Joi.object({
  code: Joi.string().required(),
});
