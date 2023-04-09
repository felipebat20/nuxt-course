<template>
  <div>
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

<script setup>
  const route = useRoute();
  const { toTitleCase } = useUtilities();

  useHead({
    title: toTitleCase(route.params.name),
  });

  const { cars } = useCars();

  const car = computed(() => cars.find(car => car.id === parseInt(route.params.id)));

  if (! car.value) {
    throw createError({
      statusCode: 404,
      message: `Car with ID ${route.params.id} does not exist.`,
    })
  }

  definePageMeta({ layout: 'custom' });
</script>
