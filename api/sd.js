/**
 * Gets a list of image generation models
 *
 * For koboldcpp, only one model will be returned. If no model is loaded, the list is empty
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
async function koboSDModels(host, apikey = null){
    try {
        return  (await fetch(`${host}/sdapi/v1/sd-models`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error('[Models|SD]KoboAPI: ',e);
    }
}

/**
 * Gets configuration info for image generation, used to get loaded model name in A1111
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
async function koboSDOptions(host, apikey = null){
    try {
        return  (await fetch(`${host}/sdapi/v1/options`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error('[Options|SD]KoboAPI: ',e);
    }
}

/**
 * Gets a list of supported samplers.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
async function koboSDSamplers(host, apikey = null){
    try {
        return (await fetch(`${host}/sdapi/v1/samplers`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error('[Samplers|SD]KoboAPI: ',e);
    }
}

/**
 * Image Generation API
 */
export const sd = {
    models: koboSDModels,
    options: koboSDOptions,
    samplers: koboSDSamplers
};
