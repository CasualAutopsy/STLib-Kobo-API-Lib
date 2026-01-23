/**
 * Returns the Jinja template stored in the GGUF model, if found
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
async function koboPropsInfo(host, apikey = null){
    try {
        return (await fetch(`${host}/props`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error('[Props|Info]KoboAPI: ',e);
    }
}

/**
 * Retrieve the common API identity provider
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
async function koboServiceInfo(host, apikey = null){
    try {
        return (await fetch(`${host}/.well-known/serviceinfo`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error('[Service|Info]KoboAPI: ',e);
    }
}

/**
 * Common identity API for LLM services
 */
export const info = {
    props: koboPropsInfo,
    service: koboServiceInfo
};
