import {
    koboMaxPrompt,
    koboMaxGen,
    koboGeneration,
    koboUnitedVersion,
    koboCurrentModel
} from './api/united.js';
import {
    koboVersionInfo, koboPerfInfo,
    koboTokenize, koboDetokenize,
    koboEmbedding, koboJSONtoGrammar
} from './api/extra.js';
import {koboPropsInfo, koboServiceInfo} from './api/info.js';
import {koboSDModels, koboSDOptions, koboSDSamplers} from './api/sd.js';
import {} from './api/openai.js';
import {koboListOptions} from './api/admin.js';

/**
 * KoboldAI United compatible API core endpoints
 */
const united = {
    maxprompt: koboMaxPrompt,
    maxgen: koboMaxGen,
    generate: koboGeneration,
    version: koboUnitedVersion,
    model: koboCurrentModel
};

/**
 * Extended API unique to KoboldCpp
 */
const extra = {
    version: koboVersionInfo,
    perf: koboPerfInfo,
    tokenize: koboTokenize,
    detokenize: koboDetokenize,
    embedding: koboEmbedding,
    jsontobnf: koboJSONtoGrammar
};

/**
 * Common identity API for LLM services
 */
const info = {
    props: koboPropsInfo,
    service: koboServiceInfo
};

/**
 * Image Generation API
 */
const sd = {
    models: koboSDModels,
    options: koboSDOptions,
    samplers: koboSDSamplers
};

/**
 * (WIP)OpenAI compatible textgen API
 */
const openai = {};

/**
 * KoboldCpp admin API
 */
const admin = {
    listoptions: koboListOptions
};


export const kobo = {
    united: united,
    extra: extra,
    info: info,
    sd: sd,
    openai: openai,
    admin: admin
};
