import Joi from "joi";

export const spotifyAuthValidationSchema = Joi.object({
  code: Joi.string().required(),
});

export const spotifyAcessTokenCookiesValidationSchema = Joi.object({
  token_data: Joi.object({
    access_token: Joi.string().required(),
    expires_in: Joi.number().required(),
    refresh_token: Joi.string().required(),
    scope: Joi.string().required(),
    token_type: Joi.string().required(),
  }).required(),
}).unknown(true);

export const spotifyAuthTokenValidationSchema = Joi.object({
  refresh_token: Joi.string().required(),
}).unknown(true);
