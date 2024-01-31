
import { pagePreferencies, PageId } from "@constants";


export const parsePathname = (pathname: string): PageId[] => {
    return pathname.split('/').filter(item => item !== '') as PageId[];
}

export const buildList = (ids: PageId[]) => {
    return ids.map((item, index, arr) => {
        // Check if the item exists in pagePreferencies
        if (!pagePreferencies.hasOwnProperty(item)) {
            return null; // Return null for now if not found. We'll filter these out.
        }

        const { id, name, url } = pagePreferencies[`${item}`];
        const getUrl = arr.length !== index + 1 ? url : null;

        return ({ id, name, url: getUrl });
    }).filter(item => item !== null); // Filter out null entries (segments not found in pagePreferencies)
};