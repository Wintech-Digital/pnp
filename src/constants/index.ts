export const BASE_URL = '/';
export const SLOTS_URL = '/slots';
export const TERMS_URL = '/terms';
export const STRAPI_URL = 'https://strapi.wtech.co';

export enum PageId {
    HOME = 'home',
    APP = 'app',
    AVIATOR='aviator', 
    BET ='bet', 
    BONUS = 'bonus', 
    TERMS = 'terms', 
    SLOTS = 'slots',
    RESPONSIBLE_GAMBLING = 'responsible-gambling', 
    SUPPORT = 'support', 
    PAYMENTS = 'payments',
    CONTACTS = 'contacts',

    SUN_OF_EGYPT = 'sun-of-egypt',
    HIT_2021 =  '2021-hit',
    JOKER_WIN ='joker-win',
    FRUITY_REELS = 'fruity-reels',
    BOOK_OF_CHAMPION = 'book-of-champion',

    HELL_HOT = 'hell-hot',
    DEMI_GOD_2 = 'demi-gods-2',
    GATES_OF_OLYMPUS = 'gates-of-olympus',
    LEPRECHAUN_RICHES = 'leprechaun-riches',
    MAJESTIC_KING = 'majestic-king',
    WOLF_STRIKE = 'wolf-strike',
    HOT_FRUITS = 'hot-fruits',
    COINS_9 = '9-coins',
};
export type TPageIdValue =`${PageId}`;

export enum PageName {
    HOME = 'Home',
    APP = 'Aplicativo',
    AVIATOR='Aviator', 
    BET ='Apostas', 
    BONUS = 'Bônus', 
    TERMS ='Termos e Condições', 
    SLOTS = 'Slots',
    RESPONSIBLE_GAMBLING = 'Jogo responsável', 
    SUPPORT = 'Ajuda', 
    PAYMENTS = 'Pagamentos',
    CONTACTS = 'Contacts',

    SUN_OF_EGYPT = 'Sun of Egypt',
    HIT_2021 =  '2021 Hit',
    JOKER_WIN ='Joker win',
    FRUITY_REELS = 'Fruity reels',
    BOOK_OF_CHAMPION = 'Book of champion',

    HELL_HOT = 'Hell Hot',
    DEMI_GOD_2 = 'Demi Gods II',
    GATES_OF_OLYMPUS = 'Gates of Olympus',
    LEPRECHAUN_RICHES = 'Leprechaun Riches',
    MAJESTIC_KING = 'Majestic King',
    WOLF_STRIKE = 'Wolf Strike',
    HOT_FRUITS ='Hot Fruits',
    COINS_9 ='9 Coins',
};

export const pagePreferencies = {
    [PageId.HOME]: {
        id: PageId.HOME,
        name: PageName.HOME,
        url: `${BASE_URL}`
    },
    [PageId.APP]: {
        id: PageId.APP,
        name: PageName.APP,
        url: `${BASE_URL}${PageId.APP}`
    },
    [PageId.AVIATOR]: {
        id: PageId.AVIATOR,
        name: PageName.AVIATOR,
        url: `${BASE_URL}${PageId.AVIATOR}`
    }, 
    [PageId.BET]: {
        id: PageId.BET,
        name: PageName.BET,
        url: `${BASE_URL}${PageId.BET}`
    },
    [PageId.BONUS]: {
        id: PageId.BONUS,
        name: PageName.BONUS,
        url: `${BASE_URL}${PageId.BONUS}`
    }, 
    [PageId.TERMS]: {
        id: PageId.TERMS,
        name: PageName.TERMS,
        url: `${TERMS_URL}`
    }, 
    [PageId.RESPONSIBLE_GAMBLING]: {
        id: PageId.RESPONSIBLE_GAMBLING,
        name: PageName.RESPONSIBLE_GAMBLING,
        url: `${TERMS_URL}#termmos`
    }, 
    [PageId.SUPPORT]: {
        id: PageId.SUPPORT,
        name: PageName.SUPPORT,
        url: `${TERMS_URL}#centralDeAjuda`
    },
    
    [PageId.PAYMENTS] : {
        id: PageId.PAYMENTS,
        name: PageName.PAYMENTS,
        url: `${TERMS_URL}#termmos`
    },
    [PageId.CONTACTS] : {
        id: PageId.CONTACTS,
        name: PageName.CONTACTS,
        url: `${TERMS_URL}#contacts`
    },
    [PageId.SLOTS]: {
        id: PageId.SLOTS,
        name: PageName.SLOTS,
        url: SLOTS_URL
    },

    [PageId.SUN_OF_EGYPT] : {
        id: PageId.SUN_OF_EGYPT,
        name: PageName.SUN_OF_EGYPT,
        url: `${SLOTS_URL}/${PageId.SUN_OF_EGYPT}`
    },
    [PageId.HIT_2021] : {
        id: PageId.HIT_2021,
        name: PageName.HIT_2021,
        url: `${SLOTS_URL}/${PageId.HIT_2021}`
    },
    [PageId.JOKER_WIN] : {
        id: PageId.JOKER_WIN,
        name: PageName.JOKER_WIN,
        url: `${SLOTS_URL}/${PageId.JOKER_WIN}`
    },
    [PageId.FRUITY_REELS] : {
        id: PageId.FRUITY_REELS,
        name: PageName.FRUITY_REELS,
        url: `${SLOTS_URL}/${PageId.FRUITY_REELS}`
    },
    [PageId.BOOK_OF_CHAMPION] : {
        id: PageId.BOOK_OF_CHAMPION,
        name: PageName.BOOK_OF_CHAMPION,
        url: `${SLOTS_URL}/${PageId.BOOK_OF_CHAMPION}`
    },

    [PageId.HELL_HOT] : {
        id: PageId.HELL_HOT,
        name: PageName.HELL_HOT,
        url: `${SLOTS_URL}/${PageId.HELL_HOT}`
    },
    [PageId.DEMI_GOD_2] : {
        id: PageId.DEMI_GOD_2,
        name: PageName.DEMI_GOD_2,
        url: `${SLOTS_URL}/${PageId.DEMI_GOD_2}`
    },
    [PageId.GATES_OF_OLYMPUS] : {
        id: PageId.GATES_OF_OLYMPUS,
        name: PageName.GATES_OF_OLYMPUS,
        url: `${SLOTS_URL}/${PageId.GATES_OF_OLYMPUS}`
    },
    [PageId.LEPRECHAUN_RICHES] : {
        id: PageId.LEPRECHAUN_RICHES,
        name: PageName.LEPRECHAUN_RICHES,
        url: `${SLOTS_URL}/${PageId.LEPRECHAUN_RICHES}`
    },
    [PageId.MAJESTIC_KING] : {
        id: PageId.MAJESTIC_KING,
        name: PageName.MAJESTIC_KING,
        url: `${SLOTS_URL}/${PageId.MAJESTIC_KING}`
    },
    [PageId.WOLF_STRIKE] : {
        id: PageId.WOLF_STRIKE,
        name: PageName.WOLF_STRIKE,
        url: `${SLOTS_URL}/${PageId.WOLF_STRIKE}`
    },
    [PageId.HOT_FRUITS] : {
        id: PageId.HOT_FRUITS,
        name: PageName.HOT_FRUITS,
        url: `${SLOTS_URL}/${PageId.HOT_FRUITS}`

    },
    [PageId.COINS_9] : {
        id: PageId.COINS_9,
        name: PageName.COINS_9,
        url: `${SLOTS_URL}/${PageId.COINS_9}`
    },
};

export const navigationMainList = [
    PageId.BET,
    PageId.AVIATOR,
    PageId.SLOTS,
    PageId.APP,
    PageId.BONUS,
];

export const navigationSlotsList = [
    PageId.HELL_HOT,
    PageId.DEMI_GOD_2,
    PageId.GATES_OF_OLYMPUS,
    PageId.LEPRECHAUN_RICHES,
    PageId.MAJESTIC_KING,
    PageId.WOLF_STRIKE,
    PageId.HOT_FRUITS,
    PageId.COINS_9,
];
export const navigationSecondarySlotsList = [
    PageId.SUN_OF_EGYPT,
    PageId.HIT_2021,
    PageId.JOKER_WIN,
    PageId.FRUITY_REELS,
    PageId.BOOK_OF_CHAMPION,
];
export const navigationWithNestedList = { 
    [PageId.SLOTS]: navigationSlotsList,
    /**
     * ToDo: Change to navigationSecondarySlotsList:
     */
    ['thisIsFutureSlotsDropDownList']: navigationSecondarySlotsList,
};

export const navigationFooterList = [
    // PageId.PAYMENTS,
    // PageId.RESPONSIBLE_GAMBLING,
    PageId.SUPPORT,
    PageId.TERMS,
    PageId.CONTACTS,
];
