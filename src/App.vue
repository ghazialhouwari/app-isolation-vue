<template>
	<div id="app" class="bootstrap-iso hello">
        <CustomStyles>
            @import url("https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css");
            @import url("/static/css/app-{{cssV}}.css");
        </CustomStyles>
		<HelloWorld></HelloWorld>
	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld';
	export default {
		name: 'App',
		data: () => ({
			cssV: process.env.cssV,
		}),
		components: {
			HelloWorld,
		}
	}
</script>