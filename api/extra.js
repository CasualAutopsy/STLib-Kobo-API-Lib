import { kobomethods } from './methods.js';

/**
 * Retrieve the KoboldCpp backend version and active modules
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<Object>}
 */
async function koboVersionInfo(host, apikey = null){
    return kobomethods.get(host, 'api/extra/version', apikey);
}

/**
 * Retrieve the KoboldCpp recent performance information
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<Object>}
 */
async function koboPerfInfo(host, apikey = null){
    return kobomethods.get(host, 'api/extra/perf', apikey);
}

/**
 * Counts the number of tokens in a string, and returns their token IDs
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {String} prompt - Prompt to tokenize
 * @returns {Promise<Object>}
 */
async function koboTokenize(host, apikey = null, prompt){
    return kobomethods.post(host, 'api/extra/tokenize', {"prompt": prompt}, apikey);
}

/**
 * Converts an array of token IDs into a string.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {Array<number>|String} ids - IDs to convert
 * @returns {Promise<Object>}
 */
async function koboDetokenize(host, apikey = null, ids){
    return kobomethods.post(host, 'api/extra/detokenize', {"ids": typeof ids == "string" ? JSON.parse(ids) : ids}, apikey);
}

/**
 * Creates (an) embedding vector/s representing the input text
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {String|Array<string>} docs - String or array of strings to encode
 * @param {Boolean} [truncate=true]
 * @returns {Promise<obj>}
 */
async function koboEmbedding(host, apikey = null, docs, truncate = true) {
    try {
        docs = JSON.parse(docs);

        if (!docs.every(item => typeof item === 'string')) {
            throw new TypeError('');
        }
    } catch {
        if (typeof docs !== 'string') {
            throw new TypeError('Error: Input must be a string or a list of strings');
        }
    }

    try {
        return (await fetch(`${host}/api/extra/embeddings`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "kcpp",
                "input": docs,
                "truncate": truncate
            })
        })).json();
    } catch (e) {
        console.error('[Embeddings|Extra]KoboAPI: ',e);
    }
}

/**
 * Converts a provided JSON schema into GBNF grammar
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {Object|String} schema - JSON Schema
 * @returns {Promise<Object>}
 */
async function koboJSONtoGrammar(host, apikey = null, schema){
    return kobomethods.post(host, 'api/extra/json_to_grammar', {"schema": typeof schema === 'string' ? JSON.parse(schema) : schema}, apikey);
}

/**
 * Extended API unique to KoboldCpp
 */
export const extra = {
    version: koboVersionInfo,
    perf: koboPerfInfo,
    tokenize: koboTokenize,
    detokenize: koboDetokenize,
    embedding: koboEmbedding,
    jsontobnf: koboJSONtoGrammar
};
