<script lang="ts">
	import type { Member } from '$lib/members';
	import { Crown, BadgeCheck } from 'lucide-svelte';

	type Props = {
		members: Member[];
	};

	let { members }: Props = $props();

	function getRainbowColor(index: number, totalLength: number) {
		if (totalLength <= 1) {
			return 'color: hsl(0, 80%, 60%)';
		}
		
		const hue = (index / (totalLength - 1)) * 280;

		return `color: hsl(${hue}, 80%, 60%)`;
	}
</script>

<style>
    .lurzi-bg {
        position: absolute;
        inset: 0;
        background-image: url('../assets/blossom-pic.webp');
        background-size: cover;
        background-position: center;
        opacity: 0.3;
        filter: brightness(0.2);
        pointer-events: none;
    }
</style>

<section class="mx-auto max-w-6xl px-6 py-10">
	<div class="flex items-end justify-between gap-6">
		<div>
			<h2 class="text-sm font-black tracking-[0.28em] text-[var(--aw-ink)] uppercase">Roster</h2>
			<p class="mt-2 text-xs font-semibold tracking-[0.22em] text-[var(--aw-muted)] uppercase">
				Professionals at looking professional
			</p>
		</div>
	</div>

	<div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each members as m (m.name)}
			<article
				class={[
					'relative overflow-hidden rounded-sm border bg-black/25 p-4',
					'border-[var(--aw-border)]',
					m.isPro ? 'aw-glowOrange ring-1 ring-[var(--aw-amber-35)]' : 'aw-glowBlue'
				].join(' ')}
			>
				{#if m.name === 'Lurzi'}
					<div class="lurzi-bg"></div>
				{/if}

				<div class="aw-scanlines pointer-events-none absolute inset-0"></div>

				<div class="relative flex items-start justify-between gap-3">
					<div>
						<h3 class="text-lg font-black tracking-[0.08em] text-[var(--aw-ink)] uppercase">
							{m.name}
						</h3>
						<div class="mt-1 flex flex-wrap items-center gap-2">
							<span
								class="inline-flex items-center gap-2 rounded-sm border border-[var(--aw-border)] bg-black/35 px-2.5 py-1 text-[11px] font-semibold tracking-[0.22em] text-[var(--aw-ink-90)] uppercase"
							>
								<Crown class="h-4 w-4 text-[var(--aw-teal)]" />
								{m.role}
							</span>
							{#if m.isPro}
								<span
									class="inline-flex items-center gap-2 rounded-sm border border-[var(--aw-amber-35)] bg-[var(--aw-amber-10)] px-2.5 py-1 text-[11px] font-black tracking-[0.22em] text-[var(--aw-amber)] uppercase"
								>
									<BadgeCheck class="h-4 w-4" />
									PRO
								</span>
							{/if}
						</div>
					</div>
					{#if m.isPro}
						<div
							class="rounded-sm border border-[var(--aw-amber-30)] bg-black/35 px-3 py-2 text-[11px] font-black tracking-[0.22em] text-[var(--aw-amber)] uppercase"
						>
							Approved
						</div>
					{/if}
				</div>

				<div class="relative mt-5 rounded-sm border border-[var(--aw-border)] bg-black/35 px-3 py-3">
					<div class="text-[11px] font-semibold tracking-[0.24em] text-[var(--aw-muted)] uppercase">
						Trait
					</div>
					<div class="mt-2 text-sm font-semibold tracking-[0.12em] text-[var(--aw-ink-90)] uppercase">
						{#if m.name === "Lurzi"}
							{#each m.trait as char, i}
								<span style={getRainbowColor(i, m.trait.length)}>
									{char === ' ' ? '\u00A0' : char}
								</span>
							{/each}
						{:else}
							{m.trait}
						{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
