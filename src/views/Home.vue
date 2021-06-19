<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<div class="counter"> {{ $store.state.counter }} </div>
		<div class="counterSquared"> 
			<span>{{$store.state.counter}} <sup>2</sup> = 
			{{ $store.state.counter * $store.state.counter }} 
			</span>
		</div>

		<div>
			<button @click="$store.dispatch('decreasecounter')">-</button>
			<button @click="$store.dispatch('increasecounter')">+</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
	}
</script>

<style scoped>
	button {
		font-size: 24px;
		margin: 5px;
		padding: 10px 20px;
		width: 100px;
	}

	div.counter {
		font-size: 24px;
	}
</style>