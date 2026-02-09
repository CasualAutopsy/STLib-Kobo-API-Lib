/**
 * Base function to retrieve information from KoboldCpp API
 * @param {String} host - Kobold base URL
 * @param {String} endpoint - API endpoint path
 * @param {String} apikey - API authorization key
 * @returns {Promise<Object>}
 */
async function koboGet(host, endpoint, apikey = null){
    try {
        return (await fetch(`${host}/${endpoint}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error(`[endpoint: ${endpoint}]KoboAPI: `,e);
    }
}

/**
 * @param {String} host - Kobold base URL
 * @param {String} endpoint - API endpoint path
 * @param {Object} payload
 * @param {String} apikey - API authorization key
 * @returns {Promise<Object>}
 */
async function koboPost(host, endpoint, payload, apikey = null){
    try {
        return (await fetch(`${host}/${endpoint}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey !== null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })).json();
    } catch (e) {
        console.error(`[endpoint: ${endpoint}]KoboAPI: `,e);
    }
}

export const kobomethods = {
    get: koboGet,
    post: koboPost,
};

