<script lang="ts">
	import logo from '$lib/assets/logo.png';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();
</script>

<img src="{logo}" alt="Adrift Wanderers logo" class={className} />