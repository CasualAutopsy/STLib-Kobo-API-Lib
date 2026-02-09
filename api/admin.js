import { kobomethods } from "./methods.js";

/**
 * List available .kcpps files to load.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
async function koboListOptions(host, apikey= null){
    return kobomethods.get(host, 'api/admin/list_options', apikey);
}

/**
 * KoboldCpp admin API
 */
export const admin = {
    listoptions: koboListOptions
};
