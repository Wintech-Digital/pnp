import { STRAPI_URL } from '@constants';
import { PageEndPoint } from './endpoint';

interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
  }
  
  /**
   * Fetches data from the Strapi API
   * @param endpoint - The endpoint to fetch from
   * @param query - The query parameters to add to the url
   * @param wrappedByKey - The key to unwrap the response from
   * @param wrappedByList - If the response is a list, unwrap it
   * @returns
   */
async function fetchApi<T>({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList,
  }: Props): Promise<T> {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }
  
    const url = new URL(`${STRAPI_URL}/api/${endpoint}`);
  
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    let data = null;
    try {
      const res = await fetch(url.toString());
      data = await res.json();
      if(!data && data['data']['error']){
        console.log('Fetch Data Error::', data['data']['error'])
      }
    } catch (error){
      console.log('Catched Fetch Error::', error);
    }
    
    if (data && wrappedByKey) {
      data = data[wrappedByKey];
    }
  
    if (data &&  wrappedByList) {
      data = data[0];
    }
  
    return data as T;
  }

  export {fetchApi, PageEndPoint}