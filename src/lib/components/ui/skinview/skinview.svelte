<script lang="ts">
	import { cn } from '$lib/utils';
	import { NameTagObject, SkinViewer, WalkingAnimation } from 'skinview3d';
	import { onMount } from 'svelte';

	let className: string | undefined = undefined;
	export { className as class };
	export let width = 100;
	export let height = 100;

	let canvasElement: HTMLCanvasElement;
	onMount(() => {
		const skinview = new SkinViewer({
			canvas: canvasElement,
			skin: 'https://crafatar.com/skins/d25d1905-29a1-4bcb-92a3-6b4fd31716ff',
			zoom: 0.8,
			width,
			height
		});
		skinview.camera.position.y = 30;
		skinview.autoRotate = true;
		skinview.animation = new WalkingAnimation();
		skinview.controls.enableZoom = false;
		skinview.controls.enableRotate = false;
		skinview.controls.enablePan = false;
	});
</script>

<canvas class={cn('', className)} bind:this={canvasElement}></canvas>
