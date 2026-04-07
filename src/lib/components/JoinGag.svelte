<script lang="ts">
	import { ShieldAlert, Radar } from 'lucide-svelte';

	type Phase = 'idle' | 'analyzing' | 'denied';

	let phase = $state<Phase>('idle');
	let startedAtMs = $state<number | null>(null);
	let requestId = $state(0);

	// RAF-driven clock so $derived can update smoothly during analyzing.
	let nowMs = $state<number>(0);
	let rafId: number | null = null;

	$effect(() => {
		if (phase !== 'analyzing') {
			if (rafId != null) cancelAnimationFrame(rafId);
			rafId = null;
			return;
		}

		const tick = () => {
			nowMs = performance.now();
			rafId = requestAnimationFrame(tick);
		};

		tick();

		return () => {
			if (rafId != null) cancelAnimationFrame(rafId);
			rafId = null;
		};
	});

	const progress01 = $derived.by(() => {
		if (phase !== 'analyzing' || startedAtMs == null) return 0;
		const elapsed = nowMs - startedAtMs;
		return Math.min(1, Math.max(0, elapsed / 5000));
	});

	const progressPct = $derived.by(() => Math.round(progress01 * 100));

	async function onJoin() {
		const myId = ++requestId;
		phase = 'analyzing';
		startedAtMs = performance.now();
		nowMs = startedAtMs;

		await new Promise<void>((resolve) => setTimeout(resolve, 5000));

		if (requestId !== myId) return;
		phase = 'denied';
	}
</script>

<section class="mx-auto max-w-6xl px-6 pt-10 pb-16">
	<div class="aw-glowOrange rounded-sm border border-[var(--aw-border)] bg-black/25 p-6">
		<div class="flex flex-col justify-between gap-6 md:flex-row md:items-center">
			<div>
				<h2 class="text-sm font-black tracking-[0.28em] text-[var(--aw-ink)] uppercase">
					Recruitment Portal
				</h2>
				<p class="mt-2 text-xs font-semibold tracking-[0.22em] text-[var(--aw-muted)] uppercase">
					Your skill will be automatically assessed by our advanced <s>AI</s> member.
				</p>
			</div>

			<button
				type="button"
				class={[
					'inline-flex items-center justify-center gap-2 rounded-sm border px-5 py-3 text-xs font-black tracking-[0.26em] uppercase transition',
					'border-[var(--aw-amber-45)] bg-[var(--aw-amber-10)] text-[var(--aw-amber)]',
					'hover:bg-[var(--aw-amber-15)] hover:shadow-[0_0_40px_rgba(255,179,0,0.12)]',
					'disabled:cursor-not-allowed disabled:opacity-60'
				].join(' ')}
				onclick={onJoin}
				disabled={phase === 'analyzing'}
			>
				<Radar class="h-4 w-4" />
				{phase === 'analyzing' ? 'Analyzing…' : 'Join Now'}
			</button>
		</div>

		{#if phase === 'analyzing'}
			<div class="aw-scanlines mt-6 rounded-sm border border-[var(--aw-border)] bg-black/35 p-4">
				<div class="flex items-center justify-between gap-4">
					<div class="text-[11px] font-semibold tracking-[0.24em] text-[var(--aw-ink-85)] uppercase">
						Analyzing Player Skill…
					</div>
					<div class="text-[11px] font-black tracking-[0.24em] text-[var(--aw-amber)] uppercase">
						{progressPct}%
					</div>
				</div>
				<div class="mt-3 h-3 overflow-hidden rounded-sm border border-[var(--aw-border)] bg-black/45">
					<div
						class="h-full bg-gradient-to-r from-[var(--aw-amber-35)] via-[var(--aw-amber)] to-[var(--aw-amber-55)]"
						style={`width: ${progressPct}%`}
					></div>
				</div>
			</div>
		{/if}

		{#if phase === 'denied'}
			<div class="aw-scanlines mt-6 rounded-sm border border-red-500/40 bg-red-950/20 p-4">
				<div class="flex items-start gap-3">
					<div class="rounded-sm border border-red-500/35 bg-red-500/10 p-2 text-red-200">
						<ShieldAlert class="h-5 w-5" />
					</div>
					<div>
						<div class="text-[11px] font-black tracking-[0.28em] text-red-200 uppercase">
							APPLICATION DENIED
						</div>
						<div class="mt-2 text-sm font-semibold tracking-[0.12em] text-red-100/90 uppercase">
							Your KD (0.2) is above our average (0.1).
						</div>
						<div class="mt-2 text-[11px] font-semibold tracking-[0.2em] text-red-200/80 uppercase">
							Recommendation: Try to not be such a tryhard, this is a casual guild.
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
