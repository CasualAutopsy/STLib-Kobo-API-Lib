/**
 * List available .kcpps files to load.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
export async function koboListOptions(host, apikey= undefined){
    try {
        const response = await fetch(`${host}/api/admin/list_options`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== undefined ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[List .kcpps|Admin]KoboAPI: ',e);
    }
}
