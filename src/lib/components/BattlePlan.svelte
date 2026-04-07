<script lang="ts">
	import battlePlan from '$lib/assets/image.png';
</script>

<section class="mx-auto max-w-6xl px-6 py-10">
	<div class="flex items-end justify-between gap-6">
		<div>
			<h2 class="text-sm font-black tracking-[0.28em] text-[var(--aw-ink)] uppercase">
				GvG Battle Plan
			</h2>
			<p class="mt-2 text-xs font-semibold tracking-[0.22em] text-[var(--aw-muted)] uppercase">
				Guild War highly classified strategy
			</p>
		</div>
		<div
			class="hidden rounded-sm border border-[var(--aw-border)] bg-black/25 px-3 py-2 text-[11px] font-semibold tracking-[0.2em] text-[var(--aw-amber)] uppercase md:block"
		>
			We ARE pros you know
		</div>
	</div>

	<figure
		class="aw-glowOrange aw-grain relative mt-6 overflow-hidden rounded-sm border border-[var(--aw-border)] bg-black/25"
	>
		<div class="aw-scanlines pointer-events-none absolute inset-0"></div>
		<img
			src={battlePlan}
			alt="GvG (guild vs guild) battle plan / strategy map"
			class="relative block h-auto w-full"
			loading="lazy"
			decoding="async"
		/>
	</figure>
</section>
