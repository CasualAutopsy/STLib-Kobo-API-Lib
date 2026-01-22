/**
 * Returns the Jinja template stored in the GGUF model, if found
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
export async function koboPropsInfo(host, apikey = undefined){
    try {
        const response = await fetch(`${host}/props`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== undefined ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[Props|Info]KoboAPI: ',e);
    }
}

/**
 * Retrieve the common API identity provider
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
export async function koboServiceInfo(host, apikey = undefined){
    try {
        const response = await fetch(`${host}/.well-known/serviceinfo`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== undefined ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[Service|Info]KoboAPI: ',e);
    }
}
