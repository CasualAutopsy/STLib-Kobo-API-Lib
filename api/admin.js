/**
 * List available .kcpps files to load.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
async function koboListOptions(host, apikey= null){
    try {
        return (await fetch(`${host}/api/admin/list_options`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error('[List .kcpps|Admin]KoboAPI: ',e);
    }
}

/**
 * KoboldCpp admin API
 */
export const admin = {
    listoptions: koboListOptions
};
