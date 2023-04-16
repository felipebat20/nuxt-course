import cars from '@/data/cars.json'

export default defineEventHandler((event) => {
  const { city } = event.context.params;

  let filteredCars = cars;

  filteredCars = filteredCars.filter(car => car.city.toLowerCase() === city.toLowerCase())

  return filteredCars;
});
