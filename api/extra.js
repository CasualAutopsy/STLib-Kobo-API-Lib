/**
 * Retrieve the KoboldCpp backend version and active modules
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
async function koboVersionInfo(host, apikey = null){
    try {
        return (await fetch(`${host}/api/extra/version`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error('[Version Info|Extra]KoboAPI: ',e);
    }
}

/**
 * Retrieve the KoboldCpp recent performance information
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<obj>}
 */
async function koboPerfInfo(host, apikey = null){
    try {
        return (await fetch(`${host}/api/extra/perf`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json"
            }
        })).json();
    } catch (e) {
        console.error('[Performance Info|Extra]KoboAPI: ',e);
    }
}

/**
 * Counts the number of tokens in a string, and returns their token IDs
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {String} prompt - Prompt to tokenize
 * @returns {Promise<obj>}
 */
async function koboTokenize(host, apikey= null, prompt){
    try {
        return (await fetch(`${host}/api/extra/perf`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey !== null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "prompt": prompt
            })
        })).json();
    } catch (e) {
        console.error('[Tokenize|Extra]KoboAPI:',e);
    }
}

/**
 * Converts an array of token IDs into a string.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {Array<number>|String} ids - IDs to convert
 * @returns {Promise<obj>}
 */
async function koboDetokenize(host, apikey = null, ids){
    try {
        return (await fetch(`${host}/api/extra/perf`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "ids": typeof ids == "string" ? JSON.parse(ids) : ids
            })
        })).json();
    } catch (e) {
        console.error('[Detokenize|Extra]KoboAPI:',e);
    }
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
 * @returns {Promise<obj>}
 */
async function koboJSONtoGrammar(host, apikey = null, schema){
    try {
        return (await fetch(`${host}/api/extra/json_to_grammar`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey != null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "schema": typeof schema === 'string' ? JSON.parse(schema) : schema
            })
        })).json();
    } catch (e) {
        console.error('[JSONtoBNF|Extra]KoboAPI: ',e);
    }
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
