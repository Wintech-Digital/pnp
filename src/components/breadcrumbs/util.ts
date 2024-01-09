import { pagePreferencies, PageId } from "@constants";

export const parsePathname = (pathname: string): PageId[] => {
    const isPathname = pathname.length;

    if(!isPathname){
        return [];
    }

    return pathname.split('/').filter(item=>item!=='') as PageId[];
}

export const buildList = (ids: PageId[]) => (ids.map((item, index, arr) => {
    if(!pagePreferencies.hasOwnProperty(item)) return;

    const {id, name, url} = pagePreferencies[`${item}`];
    const getUrl = arr.length !== index+1 ? url : null;

    return ({ 
        id, 
        name,
        url: getUrl,
    });
}));