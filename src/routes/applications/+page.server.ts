import prisma from '$lib/prisma';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const whitelistRequests = await prisma.whitelistRequest.findMany();
	return {};
};
