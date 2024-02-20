import { redirect } from '@sveltejs/kit';

export const POST = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = null;

	redirect(303, '/');
};
