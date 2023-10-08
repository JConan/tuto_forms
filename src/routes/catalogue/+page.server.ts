import type { PageServerLoad } from './$types';
import { getArticles } from '$lib/server/articles';

export const load = (async () => {
    return {
        articles: getArticles()
    };
}) satisfies PageServerLoad;