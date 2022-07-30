const Joi = require("joi");

const id = Joi.string().regex(/^\d+$/);
const query = Joi.string().pattern(/^[\w\d\s]+$/);
const page = Joi.number().positive();

const movieDetailSchema = Joi.object({
  id: id.required(),
});

const searchMovieSchema = Joi.object({
  query: query.required(),
  page: page.optional(),
});

module.exports = {
  movieDetailSchema,
  searchMovieSchema,
};
