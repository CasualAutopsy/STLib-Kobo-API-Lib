/**
 * Retrieve the KoboldCpp backend version and active modules
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
export async function koboVersionInfo(host, apikey= null){
    try {
        const response = await fetch(`${host}/api/extra/version`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== null ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[Version Info|Extra]KoboAPI: ',e);
    }
}

/**
 * Retrieve the KoboldCpp recent performance information
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @returns {Promise<any>}
 */
export async function koboPerfInfo(host, apikey= null){
    try {
        const response = await fetch(`${host}/api/extra/perf`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apikey !== null ? apikey : "None"}`,
                "accept": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        console.error('[Performance Info|Extra]KoboAPI: ',e);
    }
}

/**
 * Counts the number of tokens in a string, and returns their token IDs
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {String} prompt - Prompt to tokenize
 * @returns {Promise<any>}
 */
export async function koboTokenize(host, apikey= null, prompt){
    const payload = {
        "prompt": prompt
    };

    try {
        const response = await fetch(`${host}/api/extra/perf`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey !== null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    } catch (e) {
        console.error('[Tokenize|Extra]KoboAPI:',e);
    }
}

/**
 * Converts an array of token IDs into a string.
 * @param {String} host - Kobold base URL
 * @param {String} apikey - API authorization key
 * @param {Array<number>} ids - IDs to convert
 * @returns {Promise<any>}
 */
export async function koboDetokenize(host, apikey = null, ids){
    const payload = {
        "ids": ids
    };

    try {
        const response = await fetch(`${host}/api/extra/perf`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey !== null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
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
export async function koboEmbedding(host, apikey = null, docs, truncate = true) {
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

    const payload = {
        "model": "kcpp",
        "input": docs,
        "truncate": truncate
    };

    try {
        const response = await fetch(`${host}/api/extra/embeddings`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey !== null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
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
export async function koboJSONtoGrammar(host, apikey = null, schema){
    if (typeof schema === 'string') {
        schema = JSON.parse(schema);
    }

    const payload = {
        "schema": schema
    };

    try {
        const response = await fetch(`${host}/api/extra/json_to_grammar`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apikey !== null ? apikey : "None"}`,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    } catch (e) {
        console.error('[JSONtoBNF|Extra]KoboAPI: ',e);
    }
}



