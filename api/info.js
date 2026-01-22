/**
 * Returns the Jinja template stored in the GGUF model, if found
 * @param {String} host - Kobold base URL
 * @returns {Promise<obj>}
 */
export async function koboPropsInfo(host){
    try {
        const response = await fetch(`${host}/props`, {
            method: "GET",
            headers: {
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
 * @returns {Promise<any>}
 */
export async function koboServiceInfo(host){
    const url = `${host}/.well-known/serviceinfo`;
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
        console.error('[Service|Info]KoboAPI: ',e);
    }
}
