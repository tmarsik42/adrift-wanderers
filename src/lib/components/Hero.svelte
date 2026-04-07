<script lang="ts">
	import LogoMark from './LogoMark.svelte';
	import { Crosshair, ShieldAlert } from 'lucide-svelte';

	type Props = {
		title?: string;
		subtitle?: string;
	};

	let { title = 'ADRIFT WANDERERS', subtitle = 'RANK 1 PVP/PVE/Mahjong/Maidiao/Landlords FOCUSED PROFFESIONAL CASUAL GUILD DOMINATING THE JIANGHU' }: Props =
		$props();
</script>

<section class="aw-gridGlow relative overflow-hidden border border-[var(--aw-border)] bg-black/25">
	<div
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,179,0,0.12),transparent_50%),radial-gradient(circle_at_82%_18%,rgba(63,191,178,0.08),transparent_46%)]"
	></div>
	<div class="aw-scanlines pointer-events-none absolute inset-0"></div>

	<div
		class="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-[1fr_auto] md:items-center md:py-18"
	>
		<div>
			<div
				class="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-[var(--aw-muted)]"
			>
				<div
					class="inline-flex items-center gap-2 rounded-sm border border-[var(--aw-border)] bg-black/25 px-3 py-2"
				>
					<Crosshair class="h-4 w-4 text-[var(--aw-amber)]" />
					<span>STATUS: FULLY DISFUNCTIONAL</span>
				</div>
				<div
					class="hidden items-center gap-2 rounded-sm border border-[var(--aw-border)] bg-black/25 px-3 py-2 md:inline-flex"
				>
					<ShieldAlert class="h-4 w-4 text-[var(--aw-teal)]" />
					<span>ETHICS: N/A</span>
				</div>
			</div>

			<h1
				class="mt-6 text-5xl leading-[0.92] font-black tracking-[-0.03em] text-balance text-[var(--aw-ink)] uppercase sm:text-6xl md:text-7xl"
			>
				<span class="drop-shadow-[0_0_26px_rgba(255,179,0,0.14)]">{title}</span>
			</h1>
			<p
				class="mt-5 max-w-2xl text-sm font-semibold tracking-[0.22em] text-pretty text-[var(--aw-amber)] uppercase"
			>
				{subtitle}
			</p>

			<div
				class="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[var(--aw-muted)] uppercase"
			>
				<div class="aw-glowBlue rounded-sm border border-[var(--aw-border)] bg-black/35 px-3 py-2">
					NO BUDGET
				</div>
				<div class="aw-glowOrange rounded-sm border border-[var(--aw-border)] bg-black/35 px-3 py-2">
					NO SKILL
				</div>
				<div class="rounded-sm border border-[var(--aw-border)] bg-black/35 px-3 py-2">
					MAXIMUM SILLY
				</div>
			</div>
		</div>

		<div class="justify-self-center md:justify-self-end">
			<div class="aw-glowOrange rounded-sm border border-[var(--aw-border)] bg-black/25 p-4">
				<LogoMark class="h-28 w-auto" />
			</div>
		</div>
	</div>
</section>
