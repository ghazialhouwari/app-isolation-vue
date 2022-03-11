<template>
	<div id="app" class="bootstrap-iso hello">
		<HelloWorld></HelloWorld>
	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld';
	export default {
		name: 'App',
		components: {
			HelloWorld,
		}
	}
</script>