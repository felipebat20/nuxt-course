<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b gap-3">
      <h3>
        Location
      </h3>

      <h3
        class="text-blue-400 capitalize"
        @click="updateModal('location')"
      >
        {{ route.params.city }}
      </h3>

      <div
        v-if="modal.location"
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
          <input
            type="text"
            class="border p-1 rounded"
            v-model="city"
          />

          <button
            @click="onChangeLocation"
            type="button"
            class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          >
            Apply
          </button>
        </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>
        Make
      </h3>

      <h3 class="text-blue-400 capitalize">
        Toyota
      </h3>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>
        Price
      </h3>

      <h3 class="text-blue-400 capitalize">
        Any
      </h3>
    </div>
  </div>
</template>

<script setup>
  const city = ref('');

  const modal = ref({
    location: false,
    make: false,
    price: false,
  });

  const route = useRoute();

  const updateModal = (key) => {
    modal.value[key] = ! modal.value[key];
  }

  const onChangeLocation = () => {
    if (! city.value) {
      return;
    }

    updateModal('location');
    navigateTo(`/city/${city.value}/car/${route.params.make}`)
    return city.value = '';
  }

</script>
