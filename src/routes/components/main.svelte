<script>
	import Nav from './nav.svelte';
</script>

<div class="flex flex-col min-h-screen items-center justify-between relative">
	<Nav />
	<video
		src="/assets/bg.mp4"
		class="absolute w-full h-full top-0 left-0 object-cover -z-20"
		autoplay
		loop
		muted
	/>
	<div class="flex flex-col items-center text-center p-10 md:px-20">
		<h1>WELCOME TO</h1>
		<h1 class="text-5xl md:text-9xl font-bold">PEPEREUM</h1>
		<div class="flex flex-row items-center gap-5">
			<a href="" class="btn">
				<h1>Buy $PEPE</h1>
			</a>
			<a href="" class="btn btn-outline">
				<h1>Chart $PEPE</h1>
			</a>
		</div>
		<div class="flex flex-row items-center gap-5 mt-5">
			<a href="https://t.me/pepereumnetwork" target="_blank">
				<i class="fa-brands fa-telegram text-xl" />
			</a>
			<a href="https://twitter.com/pepereumnetwork" target="_blank">
				<i class="fa-brands fa-twitter text-xl" />
			</a>
			<a href="https://medium.com/@pepereumnetwork" target="_blank">
				<i class="fa-brands fa-medium text-xl" />
			</a>
		</div>
	</div>
	<div class="flex justify-center">
		<img src="/assets/logo.png" class="w-1/4" alt="" />
	</div>
</div>
