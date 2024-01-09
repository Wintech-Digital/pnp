import { PageId } from "@constants";

const queries = (obj): string => {
    return Object.values(obj).map((item,index) =>`${(index!==0)?'&':''}${item}`).join('');
}

enum LayoutQueries {
    FAQ = 'populate[faqBlock][populate]=*',
}
enum HomeQueries {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    OFFERS = 'populate[offerSlider][populate][offer][populate]=*',
    SLOTS = 'populate[slotsList][populate][slots][populate]=*',
    ANALISES = 'populate[analisesArticle][populate][table][populate]=*',
    SLIDER2 = 'populate[slider2][populate]=*',
    BONUSES = 'populate[bonuses][populate]=*',
    PROMOTIONS = 'populate[promotions][populate][slider3][populate]=*',
    GUIDE = 'populate[guide][populate][guideslider][populate]=*',
    PAYMENT = 'populate[payment][populate][providersslider][populate]=*',
    AVAILABLE_GAMES = 'populate[availablegames][populate][availablegameslist][populate]=*',
    APP_ADVANTAGES = 'populate[appadvantages][populate][appAdvantagesSlider][populate]=*',
    BANNER = 'populate[banner][populate]=*',
    STRATEGIES = 'populate[strategies][populate][strategiesSlider][populate]=*',
    SUPPORT = 'populate[support][populate]=*',
    INFO_SECTION = 'populate[infoSection][populate]=*',
}

export const endpoints = {
    layout: `layout?${queries(LayoutQueries)}`,
    home: `page-${PageId.HOME}?${queries(HomeQueries)}`,
}

// export enum PageEndPoint {
//     HOME = `page-${PageId.HOME}?${HomeQueries.HERO}&${HomeQueries.OFFERS}&${HomeQueries.SLOTS}&${HomeQueries.ANALISES}&${HomeQueries.SLIDER2}&${HomeQueries.BONUSES}&${HomeQueries.PROMOTIONS}`,
// }