// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	interface Locals {
		pb: import('pocketbase').default;
		user: import('pocketbase').AuthModel;
	}
	interface PageData {
		user: import('pocketbase').AuthModel;
	}
	// interface Error {}
	// interface Platform {}
}
