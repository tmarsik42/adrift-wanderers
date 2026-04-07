<script lang="ts">
	import { Percent, Skull, Flame, Ruler } from 'lucide-svelte';

	const stats = [
		{
			label: 'Win Rate',
			value: '100%',
			sub: '6 Matches',
			Icon: Percent
		},
		{
			label: 'Enemies Killed',
			value: '0',
			sub: '',
			Icon: Skull
		},
		{
			label: 'Tantrums per HR',
			value: '99999',
			sub: '',
			Icon: Flame
		},
		{
			label: 'Avg Height',
			value: 'SHORT',
			sub: 'Smaller hitbox',
			Icon: Ruler
		}
	] as const;
</script>

<section class="mx-auto max-w-6xl px-6 py-10">
	<div class="flex items-end justify-between gap-6">
		<div>
			<h2 class="text-sm font-black tracking-[0.28em] text-[var(--aw-ink)] uppercase">
				Legit Statistics
			</h2>
		</div>
	</div>

	<div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as s (s.label)}
			<div
				class="aw-glowBlue relative overflow-hidden rounded-sm border border-[var(--aw-border)] bg-black/25 p-4"
			>
				<div class="aw-scanlines pointer-events-none absolute inset-0"></div>

				<div class="relative flex items-start justify-between gap-4">
					<div>
						<div class="text-[11px] font-semibold tracking-[0.24em] text-[var(--aw-muted)] uppercase">
							{s.label}
						</div>
						<div class="mt-3 text-3xl font-black tracking-[-0.02em] text-[var(--aw-ink)] uppercase">
							{s.value}
						</div>
						{#if s.sub}
							<div class="w-full mt-1 text-xs font-semibold tracking-[0.18em] text-[var(--aw-amber)] uppercase">
								{s.sub}
							</div>
						{/if}
					</div>

					<div class="aw-glowOrange rounded-sm border border-[var(--aw-border)] bg-black/35 p-2">
						<s.Icon class="h-5 w-5 text-[var(--aw-amber)]" />
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
