import { serializeNonPOJOs } from '$lib/utils';
import { env } from '$env/dynamic/private';
import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
	console.log('Running server hook...');
	console.log('PocketBase URL:', env.POCKETBASE_URL);
	event.locals.pb = new PocketBase(env.POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = null;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
