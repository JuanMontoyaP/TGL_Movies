const Joi = require("joi");

const id = Joi.string().regex(/^\d+$/);

const productDetailSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  productDetailSchema,
};
