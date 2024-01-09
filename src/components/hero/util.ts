import { STRAPI_URL } from '@constants';

export function getCover(arr,slug){
    const picObj = arr.find(item=>item?.attributes.caption === slug);
    const pic = picObj?.attributes?.url || null;
    return pic ? `${STRAPI_URL}${pic}` : pic;
}

export function btnIconUrl(item){
    const url = item['btnIcon']?.data?.attributes?.url;
    return url ? `${STRAPI_URL}${url}`: '';
}