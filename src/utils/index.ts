import { STRAPI_URL } from "@constants";

export function getFields(data){
    if(data !== undefined){
        const imgUrl = data?.url;
        const withPath = (imgUrl&& !imgUrl.includes('http'))
            ? `${STRAPI_URL}${imgUrl}` 
            : data.url;
        return ({
            url: withPath,
            alternativeText: data.alternativeText || '',
            w: data.width,
            h: data.height,
            format: data.ext,
        })
    }
    return null;
}

type Tkey = 'mobile' | 'desktop' | 'mobile-hd' | 'desktop-hd' | 'card' | null;

export function parseImageData(data, key: Tkey = null, isHD = false) {
    if (!data) return null;

    let adjustedKey = key as Tkey | string; // Temporarily bypassing strict type checking
    
    if (key && isHD && !key.includes('-hd')) {
        adjustedKey = `${key}-hd`; // TypeScript will allow this now
    }

    if (adjustedKey) {
        const imageByKey = data.find(item => item.attributes.caption === adjustedKey);
        return imageByKey ? getFields(imageByKey.attributes) : null;
    }

    return data.map(item => getFields(item.attributes));
}

export function getSeo(data) {
    if(!data){
        return {
            alt: '',
            title: ''        
        }
    };
    return data;
}


