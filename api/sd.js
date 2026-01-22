/**
 * Gets a list of image generation models
 *
 * For koboldcpp, only one model will be returned. If no model is loaded, the list is empty
 * @param {String} host - Kobold base URL
 * @returns {Promise<any>}
 */
export async function koboSDModels(host){
    const url = `${host}/sdapi/v1/sd-models`;
    const header = {
        "accept": "application/json"
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: header
        });

        return await response.json();
    } catch (e) {
        console.error('[Props|Info]KoboAPI: ',e);
    }
}

/**
 * Gets configuration info for image generation, used to get loaded model name in A1111
 * @param {String} host - Kobold base URL
 * @returns {Promise<any>}
 */
export async function koboSDOptions(host){
    const url = `${host}/sdapi/v1/options`;
    const header = {
        "accept": "application/json"
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: header
        });

        return await response.json();
    } catch (e) {
        console.error('[Props|Info]KoboAPI: ',e);
    }
}

/**
 * Gets a list of supported samplers.
 * @param {String} host - Kobold base URL
 * @returns {Promise<any>}
 */
export async function koboSDSamplers(host){
    const url = `${host}/sdapi/v1/samplers`;
    const header = {
        "accept": "application/json"
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: header
        });

        return await response.json();
    } catch (e) {
        console.error('[Props|Info]KoboAPI: ',e);
    }
}
