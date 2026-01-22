/**
 * Retrieve the current max context length setting value that public backends see
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
export async function koboMaxPrompt(host, apikey= undefined){
    try {
        const response = await fetch(`${host}/api/v1/config/max_context_length`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== undefined ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[Max Prompt|United]KoboAPI: ',e);
    }
}

/**
 * Retrieve the current max length (amount to generate) setting value
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
export async function koboMaxGen(host, apikey= undefined){
    try {
        const response = await fetch(`${host}/api/v1/config/max_length`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== undefined ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[Max Gen|United]KoboAPI: ',e);
    }
}

/**
 * Generates text given a prompt and generation settings
 *
 * Unspecified values are set to defaults
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {String} prompt - Input prompt
 * @param {Object} samplers - Sampler parameters payload
 * @param {String} genkey - KoboldCpp generation ID key
 * @param {Boolean} quiet - Quiet gen (hide generation parameters from terminal output)
 * @returns {Promise<obj>}
 */
export async function koboGeneration(
    host, apikey = undefined,
    prompt = "", samplers = undefined,
    genkey = undefined, quiet = undefined
){
    const payload = {
        "prompt": prompt,
        "genkey": genkey !== undefined ? genkey : "",
        "quiet": quiet !== undefined ? quiet : false
    };

    if (typeof samplers == "object") {
        Object.assign(payload, samplers);
    }

    try {
        const response = await fetch(`${host}/api/v1/generate`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey !== undefined ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    } catch (e) {
        console.error('[Generation|United]KoboAPI: ',e);
    }
}

/**
 * Returns the matching KoboldAI (United) version of the API that you are currently using
 *
 * This is not the same as the KoboldCpp API version - this is used to feature match against KoboldAI United
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
export async function koboUnitedVersion(host, apikey= undefined){
    try {
        const response = await fetch(`${host}/api/v1/info/version`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== undefined ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[Version|United]KoboAPI: ',e);
    }
}

/**
 * Gets the current model display name.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
export async function koboCurrentModel(host, apikey = undefined){
    try {
        const response = await fetch(`${host}/api/v1/model`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== undefined ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[Model|United]KoboAPI: ',e);
    }
}
