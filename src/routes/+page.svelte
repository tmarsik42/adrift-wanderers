<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import StatsGrid from '$lib/components/StatsGrid.svelte';
	import Roster from '$lib/components/Roster.svelte';
	import KillFeed from '$lib/components/KillFeed.svelte';
	import JoinGag from '$lib/components/JoinGag.svelte';
	import BattlePlan from '$lib/components/BattlePlan.svelte';
	import { members } from '$lib/members';
</script>

<main class="min-h-screen">
	<div
		class="pointer-events-none fixed inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(231,227,216,0.35)_1px,transparent_0)] [background-size:26px_26px] opacity-[0.05]"
	></div>
	<div class="pointer-events-none fixed inset-0 aw-grain opacity-60"></div>

	<Hero />

	<div
		class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pt-10 pb-10 lg:grid-cols-[1fr_360px] lg:items-start"
	>
		<div class="min-w-0">
			<StatsGrid />

			<BattlePlan />

			<Roster {members} />

			<JoinGag />
		</div>

		<div class="hidden lg:block">
			<div class="sticky top-6">
				<KillFeed />
			</div>
		</div>
	</div>
</main>
