<template>
	<div class="font-serif w-[1000px] text-2xl rounded-full flex bg-white justify-between overflow-hidden drop-shadow-2xl mx-auto">
		<input
			v-model="city"
			type="text"
			class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
			:class="{'border-red-500 border': cityError }"
			:placeholder="search_placeholder"
			@keydown.exact.enter="handleSearch"
		/>

		<button
			type="button"
			class="bg-sky-500 px-10 text-white"
			@click="handleSearch"
		>
			{{ $t('cars.home.search.action') }}
		</button>
	</div>
</template>

<script setup>
	const city = ref('');
	const cityError = ref(false);
	const { t }  = useI18n();

	let search_placeholder = computed(() => t('cars.home.search.action'))

	const handleSearch = () => {
		if (! city.value) {
			return cityError.value = true;
		}

		// return navigateTo(`/city/${city.value}/car`);

		console.log(t('cars.home.search.action'));

		search_placeholder = t('cars.home.search.action');

		city.value = '';
	};
</script>
