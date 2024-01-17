import { PageId } from "@constants";

export const queries = (obj): string => {
    return Object.values(obj).map((item,index) =>`${(index!==0)?'&':''}${item}`).join('');
}

enum LayoutQueries {
    FAQ = 'populate[faqBlock][populate]=*',
}
enum HomeQueries {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    OFFERS = 'populate[offerSlider][populate][slides][populate]=*',
    SLOTS = 'populate[slotsList][populate][slots][populate]=*',
    ANALISES = 'populate[analisesArticle][populate][table][populate]=*',
    SLIDER2 = 'populate[slider2][populate]=*',
    BONUSES = 'populate[bonusSlider][populate][bonusItem][populate]=*',
    BONUSES_DESCRIPTION = 'populate[bonusDescription][populate]=*',
    PROMOTIONS = 'populate[promotions][populate][slider3][populate]=*',
    GUIDE = 'populate[guide][populate][guideslider][populate]=*',
    PAYMENT = 'populate[payment][populate][providersslider][populate]=*',
    AVAILABLE_GAMES = 'populate[availablegames][populate][availablegameslist][populate]=*',
    APP_ADVANTAGES = 'populate[appadvantages][populate][appAdvantagesSlider][populate]=*',
    BANNER = 'populate[banner][populate]=*',
    STRATEGIES = 'populate[strategies][populate][strategiesSlider][populate]=*',
    SUPPORT = 'populate[support][populate]=*',
    INFO_SECTION = 'populate[infoSection][populate]=*',
    FAQ = 'populate[faqBlock][populate]=*',
    SEO = 'populate[seo][populate]=*',
}
enum BetQueries {
    BANNER = 'populate[banner][populate]=*',
    OVERVIEW_SPORT = 'populate[listsBlock][populate]=*',
    SLIDER = 'populate[slider][populate][sliderItems][populate]=*&populate[slider][populate][commonBtn][populate]=*',
    ARTICLE = 'populate[betArticle][populate]=*',
    SEO = 'populate[seo][populate]=*',
}
enum AviatorQueries {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    ARTICLE_1 = 'populate[aviatorArticle1][populate]=*',
    ARTICLE_2 = 'populate[aviatorArticle2][populate]=*',
    ARTICLE_3 = 'populate[aviatorArticle3][populate]=*',
    SLIDER = 'populate[aviatorSlider][populate][sliderItems][populate]=*',
    BANNER = 'populate[aviatorBanner][populate]=*',
    FAQ = 'populate[faqBlock][populate]=*',
    SEO = 'populate[seo][populate]=*',
}
enum AppQueries {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    SLIDER_1 = 'populate[appSlider][populate][appSliderItem][populate]=*',
    SLIDER_2 = 'populate[appSlider2][populate][appSliderItem][populate]=*',
    ARTICLE_1 = 'populate[appArticle][populate]=*',
    BENEFITS = 'populate[appBenefits][populate][availablegameslist][populate]=*',
    CARDS = 'populate[card][populate]=*',
    SEO = 'populate[seo][populate]=*',
}
enum TermsQueries {
    BANNER = 'populate[banner][populate]=*',
    ARTICLES = 'populate[termsArticles][populate]=*',
    ARTICLE_WITH_COLS = 'populate[termsColArtical][populate]=*',
    CONTACTS = 'populate[contacts][populate]=*',
    SLIDER = 'populate[termsSlider][populate][appSliderItem][populate]=*',
    SEO = 'populate[seo][populate]=*',
}
export enum SlotQueries {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    OFFERS = 'populate[slotsSlider][populate][slides][populate]=*',
    ARTICLE_MAIN = 'populate[articleMain][populate]=*',
    ARTICLE_BLACK_RIDER = 'populate[blackRiderArticle][populate][slider][populate]=*',
    ARTICLE_LIST = 'populate[articleList][populate]=*',
    BANNER = 'populate[banner][populate]=*',
    BONUS_SLIDER = 'populate[bonusSlider][populate][bonusItem][populate][imageCover][populate]=*&populate[bonusSlider][populate][bonusItem][populate][buttons][populate]=*',
    BONUSES_ARTICLES = 'populate[bonusList][populate]=*',
    FAQ = 'populate[faqBlock][populate]=*',
    SEO = 'populate[seo][populate]=*',
}
export enum BonusQueries {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    BONUSES_ARTICLES = 'populate[bonusList][populate]=*',
    FAQ = 'populate[faqBlock][populate]=*',
    SEO = 'populate[seo][populate]=*',
}
export enum BonusCardsQueries {
    BONUSE_CARDS = 'populate[coverImage][populate]=*&populate[btnList][populate]=*',
}
export enum SlotsPageQueries {
    HERO = 'populate[hero][populate][btn][populate]=*&populate[hero][populate][coverImage][populate]=*',
    SLOTS_DESCRIPTION = 'populate[slotsDescription][populate]=*',
    BONUSES_ARTICLES = 'populate[bonusList][populate]=*',
    FAQ = 'populate[faqBlock][populate]=*',
    SEO = 'populate[seo][populate]=*',
}
export enum SlotSlideQueries {
    SLIDE = 'populate[slotInSlide][populate]=*',
}

export const endpoints = {
    layout: `layout?${queries(LayoutQueries)}`,
    home: `page-${PageId.HOME}?${queries(HomeQueries)}`,
    bet: `page-${PageId.BET}?${queries(BetQueries)}`,
    aviator: `page-${PageId.AVIATOR}?${queries(AviatorQueries)}`,
    app: `page-${PageId.APP}?${queries(AppQueries)}`,
    terms: `page-${PageId.TERMS}?${queries(TermsQueries)}`,
    bonus: `page-${PageId.BONUS}?${queries(BonusQueries)}`,
    slots:'page-slots',
    slot: 'page-slots?filters[slug][$eq]=',
    slotsSlide:`page-slots?${queries(SlotSlideQueries)}`,

    bonusCards: `bonus-cards?${queries(BonusCardsQueries)}`,
    slotsCommonPage: `slots-common-page?${queries(SlotsPageQueries)}`,

}
export function getSlotsBySlug(slug){
    // console.log(`${endpoints.slot}${slug}&${queries(SlotQueries)}`)
    return `${endpoints.slot}${slug}&${queries(SlotQueries)}`;
}
