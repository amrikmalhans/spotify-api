import Joi from "joi";

export const spotifyAuthValidationSchema = Joi.object({
  code: Joi.string().required(),
});

export const spotifyAcessTokenCookiesValidationSchema = Joi.object({
  access_token: Joi.string().required(),
}).unknown(true);
