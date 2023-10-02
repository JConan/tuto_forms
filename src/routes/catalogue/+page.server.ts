import type { PageServerLoad } from './catalogue/$types';
import { getArticles } from '$lib/server/articles';

export const load = (async () => {
    return {
        articles: getArticles()
    };
}) satisfies PageServerLoad;