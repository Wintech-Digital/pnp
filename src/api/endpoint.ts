import { PageId } from "@constants";

enum ComponentQuery {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    OFFERS = 'populate[offerSlider][populate][offer][populate]=*',
}

export enum PageEndPoint {
    HOME = `page-${PageId.HOME}?${ComponentQuery.HERO}&${ComponentQuery.OFFERS}`,
}
