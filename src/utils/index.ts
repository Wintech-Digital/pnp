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
type Tkey = 'mobile' | 'desktop' | 'card' | null;
export function parseImageData(data, key:Tkey = null){
    if(!data) return null;

    if(key){
        const imageByKey = data.find(item => {
            return item.attributes.caption === key;
        });

        return (
            imageByKey ? getFields(imageByKey.attributes) : null
        );
    }

    return (
        data.map(item => getFields(item.attributes))
    );
}

// data = [
//     {
//       id: 100,
//       attributes: {
//         url: '/uploads/banner_3_m_2fa33ee233.png',
//         alternativeText: 'termos alt',
//         caption: 'mobile' | 'desktop',
//         width: 382,
//         height: 280,
//         ext: '.png',
//
//         previewUrl: null,
//         provider: 'local',
//
//         hash: 'banner_3_m_2fa33ee233',
//         formats: [Object],
//         mime: 'image/png',
//         size: 2.05,
//         provider_metadata: null,
//         name: 'banner-3-m.png',
//         createdAt: '2024-01-11T22:25:49.395Z',
//         updatedAt: '2024-01-11T22:26:55.673Z'
//       }
//     },
// ]
