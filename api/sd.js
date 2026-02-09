import { kobomethods } from './methods.js';

/**
 * Gets a list of image generation models
 *
 * For koboldcpp, only one model will be returned. If no model is loaded, the list is empty
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
async function koboSDModels(host, apikey = null){
    return kobomethods.get(host,'sdapi/v1/sd-models', apikey);
}

/**
 * Gets configuration info for image generation, used to get loaded model name in A1111
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
async function koboSDOptions(host, apikey = null){
    return kobomethods.get(host, 'sdapi/v1/options', apikey);
}

/**
 * Gets a list of supported samplers.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
async function koboSDSamplers(host, apikey = null){
    return kobomethods.get(host, 'sdapi/v1/samplers', apikey);
}

/**
 * Image Generation API
 */
export const sd = {
    models: koboSDModels,
    options: koboSDOptions,
    samplers: koboSDSamplers
};
