import joi from 'joi';

const signUpSchema = joi.object({
  name: joi.string().required(),
  password: joi.string().required(),
  lng: joi.number().min(34.23).max(34.56).required(),
  lat: joi.number().min(31.25).max(31.6).required(),
  img: joi.string(),
  isSeller: joi.boolean().required(),
});

export default signUpSchema;
