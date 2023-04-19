import Joi from 'joi'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const schema = Joi.object({
  city: Joi.string().min(2).required(),
  description: Joi.string().min(20).required(),
  features: Joi.array().items(Joi.string()).required(),
  image: Joi.string().required(),
  listerId: Joi.string().required(),
  make: Joi.string().required(),
  miles: Joi.number().required().min(0),
  model: Joi.string().required(),
  name: Joi.string().required(),
  numberOfSeats: Joi.number().max(1000).min(1).required(),
  price: Joi.number().min(0).required(),
  year: Joi.number().min(1886).max(new Date().getFullYear() + 1 ),
})

export default defineEventHandler( async (event) => {
  const body = await readBody(event)

  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    })
  }

  const {
    city,
    description,
    features,
    image,
    listerId,
    make,
    miles,
    model,
    name,
    numberOfSeats,
    price,
    year,
  } = body;

  const car =  await prisma.car.create({
    data: {
      city,
      description,
      features,
      image,
      listerId,
      make,
      miles,
      model,
      name,
      numberOfSeats,
      price,
      year,
    }
  });

  return { value, error };
});
