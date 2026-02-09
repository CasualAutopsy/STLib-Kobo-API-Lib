import { kobomethods } from './methods.js';


/**
 * Returns the Jinja template stored in the GGUF model, if found
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
async function koboPropsInfo(host, apikey = null){
    return kobomethods.get(host, 'props', apikey);
}

/**
 * Retrieve the common API identity provider
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
async function koboServiceInfo(host, apikey = null){
    return kobomethods.get(host, '.well-known/serviceinfo', apikey);
}

/**
 * Common identity API for LLM services
 */
export const info = {
    props: koboPropsInfo,
    service: koboServiceInfo
};
