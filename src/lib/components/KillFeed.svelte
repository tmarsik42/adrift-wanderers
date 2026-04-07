<script lang="ts">
	import { Skull, Swords } from 'lucide-svelte';

	const templates = [
		() => `Oliver died to fall damage (Again)`,
		() => `Lurzi was slain by a Level 1 Rabbit`,
		() => `Cangi has been eliminated by ambient disappointment`,
		() => `SupremeElder attempted wisdom. Critical failure.`,
		() => `Ji-Niya executed mercy. Mercy not found.`,
		() => `Alscend used Strategy: *Classified*. It hurt everyone.`,
		() => `Server rubber-banded Hikari-Asakura into orbit`,
		() => `Oliver challenged physics. Physics won.`,
		() => `Lurzi issued an ultimatum to the loading screen`,
		() => `Cangi waved politely at the enemy. They left.`,
		() => `SupremeElder blocked with a dialogue option`,
		() => `Ji-Niya was defeated by a tutorial prompt`,
		() => `Alscend min-maxed morale. Morale is now 0`
	] as const;

	function buildFeed(count: number) {
		const items: string[] = [];
		for (let i = 0; i < count; i++) items.push(templates[i % templates.length]());
		return items;
	}

	const base = buildFeed(36);
	const feed = [...base, ...base];
</script>

<aside class="aw-glowOrange rounded-sm border border-[var(--aw-border)] bg-black/25 p-4">
	<div class="flex items-center justify-between gap-4">
		<div>
			<div class="text-[11px] font-black tracking-[0.28em] text-[var(--aw-ink)] uppercase">Kill Feed</div>
		</div>
		<div
			class="flex items-center gap-2 rounded-sm border border-[var(--aw-border)] bg-black/35 px-2.5 py-1.5"
		>
			<Swords class="h-4 w-4 text-[var(--aw-amber)]" />
			<div class="text-[11px] font-semibold tracking-[0.22em] text-[var(--aw-muted)] uppercase">
				Live
			</div>
		</div>
	</div>

	<div
		class="relative mt-4 h-[520px] overflow-hidden rounded-sm border border-[var(--aw-border)] bg-black/30"
	>
		<div class="aw-scanlines pointer-events-none absolute inset-0"></div>
		<div
			class="aw-marqueeY relative px-3 py-3"
			style="--aw-marquee-duration: 24s"
			aria-hidden="true"
		>
			{#each feed as line, i (i)}
				<div class="flex items-start gap-2 py-2 text-xs font-semibold tracking-[0.12em] uppercase">
					<Skull class="mt-0.5 h-4 w-4 shrink-0 text-[var(--aw-muted)]" />
					<span class="text-[var(--aw-ink-90)]">{line}</span>
				</div>
				<div class="h-px bg-[var(--aw-border)]"></div>
			{/each}
		</div>

		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/70 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/75 to-transparent"
		></div>
	</div>
</aside>
