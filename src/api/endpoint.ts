import { PageId } from "@constants";

enum ComponentQuery {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    SLOTS_LIST = 'populate[slotsList][populate]=*'
}

export enum PageEndPoint {
    HOME = `page-${PageId.HOME}?${ComponentQuery.HERO}`,
}
