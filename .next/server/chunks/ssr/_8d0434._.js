module.exports = {

"[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */ __turbopack_esm__({
    "BlockReason": (()=>BlockReason),
    "ChatSession": (()=>ChatSession),
    "DynamicRetrievalMode": (()=>DynamicRetrievalMode),
    "ExecutableCodeLanguage": (()=>ExecutableCodeLanguage),
    "FinishReason": (()=>FinishReason),
    "FunctionCallingMode": (()=>FunctionCallingMode),
    "GenerativeModel": (()=>GenerativeModel),
    "GoogleGenerativeAI": (()=>GoogleGenerativeAI),
    "GoogleGenerativeAIError": (()=>GoogleGenerativeAIError),
    "GoogleGenerativeAIFetchError": (()=>GoogleGenerativeAIFetchError),
    "GoogleGenerativeAIRequestInputError": (()=>GoogleGenerativeAIRequestInputError),
    "GoogleGenerativeAIResponseError": (()=>GoogleGenerativeAIResponseError),
    "HarmBlockThreshold": (()=>HarmBlockThreshold),
    "HarmCategory": (()=>HarmCategory),
    "HarmProbability": (()=>HarmProbability),
    "Outcome": (()=>Outcome),
    "POSSIBLE_ROLES": (()=>POSSIBLE_ROLES),
    "SchemaType": (()=>SchemaType),
    "TaskType": (()=>TaskType)
});
var SchemaType;
(function(SchemaType) {
    /** String type. */ SchemaType["STRING"] = "string";
    /** Number type. */ SchemaType["NUMBER"] = "number";
    /** Integer type. */ SchemaType["INTEGER"] = "integer";
    /** Boolean type. */ SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */ SchemaType["ARRAY"] = "array";
    /** Object type. */ SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @public
 */ var ExecutableCodeLanguage;
(function(ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */ var Outcome;
(function(Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */ Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */ Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */ Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */ Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Possible roles.
 * @public
 */ const POSSIBLE_ROLES = [
    "user",
    "model",
    "function",
    "system"
];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */ var HarmCategory;
(function(HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */ var HarmBlockThreshold;
(function(HarmBlockThreshold) {
    // Threshold is unspecified.
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    // Content with NEGLIGIBLE will be allowed.
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    // Content with NEGLIGIBLE and LOW will be allowed.
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    // All content will be allowed.
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */ var HarmProbability;
(function(HarmProbability) {
    // Probability is unspecified.
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    // Content has a negligible chance of being unsafe.
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    // Content has a low chance of being unsafe.
    HarmProbability["LOW"] = "LOW";
    // Content has a medium chance of being unsafe.
    HarmProbability["MEDIUM"] = "MEDIUM";
    // Content has a high chance of being unsafe.
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */ var BlockReason;
(function(BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */ var FinishReason;
(function(FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */ var TaskType;
(function(TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */ var FunctionCallingMode;
(function(FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */ var DynamicRetrievalMode;
(function(DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Basic error type for this SDK.
 * @public
 */ class GoogleGenerativeAIError extends Error {
    constructor(message){
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */ class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response){
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */ class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails){
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */ class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */ const PACKAGE_VERSION = "0.21.0";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function(Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions){
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) {
            url += "?alt=sse";
        }
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */ function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
        clientHeaders.push(requestOptions.apiClient);
    }
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function getHeaders(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) {
            try {
                customHeaders = new Headers(customHeaders);
            } catch (e) {
                throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
            }
        }
        for (const [headerName, headerValue] of customHeaders.entries()){
            if (headerName === "x-goog-api-key") {
                throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
            } else if (headerName === "x-goog-api-client") {
                throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
            }
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), {
            method: "POST",
            headers: await getHeaders(url),
            body
        })
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, // Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest(url, fetchOptions, fetchFn);
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    } catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) {
        await handleResponseNotOk(response, url);
    }
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (!(e instanceof GoogleGenerativeAIFetchError || e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    } catch (e) {
    // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */ function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
            setTimeout(()=>controller.abort(), requestOptions.timeout);
        }
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) {
            requestOptions.signal.addEventListener("abort", ()=>{
                controller.abort();
            });
        }
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */ function addHelpers(response) {
    response.text = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning text from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getText(response);
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return "";
    };
    /**
     * TODO: remove at next major version
     */ response.functionCall = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            console.warn(`response.functionCall() is deprecated. ` + `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    response.functionCalls = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getFunctionCalls(response);
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */ function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
            if (part.text) {
                textStrings.push(part.text);
            }
            if (part.executableCode) {
                textStrings.push("\n```" + part.executableCode.language + "\n" + part.executableCode.code + "\n```\n");
            }
            if (part.codeExecutionResult) {
                textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
            }
        }
    }
    if (textStrings.length > 0) {
        return textStrings.join("");
    } else {
        return "";
    }
}
/**
 * Returns functionCall of first candidate.
 */ function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
            if (part.functionCall) {
                functionCalls.push(part.functionCall);
            }
        }
    }
    if (functionCalls.length > 0) {
        return functionCalls;
    } else {
        return undefined;
    }
}
const badFinishReasons = [
    FinishReason.RECITATION,
    FinishReason.SAFETY,
    FinishReason.LANGUAGE
];
function hadBadFinishReason(candidate) {
    return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
            message += ` due to ${response.promptFeedback.blockReason}`;
        }
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
            message += `: ${response.promptFeedback.blockReasonMessage}`;
        }
    } else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) {
                message += `: ${firstCandidate.finishMessage}`;
            }
        }
    }
    return message;
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */ function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", {
        fatal: true
    }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2)
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            return addHelpers(aggregateResponses(allResponses));
        }
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while(true){
            const { value, done } = yield __await(reader.read());
            if (done) {
                break;
            }
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */ function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start (controller) {
            let currentText = "";
            return pump();
            "TURBOPACK unreachable";
            function pump() {
                return reader.read().then(({ value, done })=>{
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while(match){
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        } catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                });
            }
        }
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */ function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback
    };
    for (const response of responses){
        if (response.candidates) {
            for (const candidate of response.candidates){
                const i = candidate.index;
                if (!aggregatedResponse.candidates) {
                    aggregatedResponse.candidates = [];
                }
                if (!aggregatedResponse.candidates[i]) {
                    aggregatedResponse.candidates[i] = {
                        index: candidate.index
                    };
                }
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[i].citationMetadata = candidate.citationMetadata;
                aggregatedResponse.candidates[i].groundingMetadata = candidate.groundingMetadata;
                aggregatedResponse.candidates[i].finishReason = candidate.finishReason;
                aggregatedResponse.candidates[i].finishMessage = candidate.finishMessage;
                aggregatedResponse.candidates[i].safetyRatings = candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */ if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[i].content) {
                        aggregatedResponse.candidates[i].content = {
                            role: candidate.content.role || "user",
                            parts: []
                        };
                    }
                    const newPart = {};
                    for (const part of candidate.content.parts){
                        if (part.text) {
                            newPart.text = part.text;
                        }
                        if (part.functionCall) {
                            newPart.functionCall = part.functionCall;
                        }
                        if (part.executableCode) {
                            newPart.executableCode = part.executableCode;
                        }
                        if (part.codeExecutionResult) {
                            newPart.codeExecutionResult = part.codeExecutionResult;
                        }
                        if (Object.keys(newPart).length === 0) {
                            newPart.text = "";
                        }
                        aggregatedResponse.candidates[i].content.parts.push(newPart);
                    }
                }
            }
        }
        if (response.usageMetadata) {
            aggregatedResponse.usageMetadata = response.usageMetadata;
        }
    }
    return aggregatedResponse;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse
    };
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) {
        return undefined;
    } else if (typeof input === "string") {
        return {
            role: "system",
            parts: [
                {
                    text: input
                }
            ]
        };
    } else if (input.text) {
        return {
            role: "system",
            parts: [
                input
            ]
        };
    } else if (input.parts) {
        if (!input.role) {
            return {
                role: "system",
                parts: input.parts
            };
        } else {
            return input;
        }
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") {
        newParts = [
            {
                text: request
            }
        ];
    } else {
        for (const partOrString of request){
            if (typeof partOrString === "string") {
                newParts.push({
                    text: partOrString
                });
            } else {
                newParts.push(partOrString);
            }
        }
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */ function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = {
        role: "user",
        parts: []
    };
    const functionContent = {
        role: "function",
        parts: []
    };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts){
        if ("functionResponse" in part) {
            functionContent.parts.push(part);
            hasFunctionContent = true;
        } else {
            userContent.parts.push(part);
            hasUserContent = true;
        }
    }
    if (hasUserContent && hasFunctionContent) {
        throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    }
    if (!hasUserContent && !hasFunctionContent) {
        throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
    }
    if (hasUserContent) {
        return userContent;
    }
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
        generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
        tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
        toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
        contents: []
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) {
            throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        }
        formattedGenerateContentRequest.contents = params.contents;
    } else if (containsGenerateContentRequest) {
        formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    } else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [
            content
        ];
    }
    return {
        generateContentRequest: formattedGenerateContentRequest
    };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) {
        formattedRequest = params;
    } else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = {
            contents: [
                content
            ]
        };
    }
    if (params.systemInstruction) {
        formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    }
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return {
            content
        };
    }
    return params;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult"
];
const VALID_PARTS_PER_ROLE = {
    user: [
        "text",
        "inlineData"
    ],
    function: [
        "functionResponse"
    ],
    model: [
        "text",
        "functionCall",
        "executableCode",
        "codeExecutionResult"
    ],
    // System instructions shouldn't be in history anyway.
    system: [
        "text"
    ]
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history){
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") {
            throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
        }
        if (!POSSIBLE_ROLES.includes(role)) {
            throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        }
        if (!Array.isArray(parts)) {
            throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
        }
        if (parts.length === 0) {
            throw new GoogleGenerativeAIError("Each Content should have at least one part");
        }
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0
        };
        for (const part of parts){
            for (const key of VALID_PART_FIELDS){
                if (key in part) {
                    countFields[key] += 1;
                }
            }
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS){
            if (!validParts.includes(key) && countFields[key] > 0) {
                throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
            }
        }
        prevContent = true;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do not log a message for this error.
 */ const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */ class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}){
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */ async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions)).then((result)=>{
            var _a;
            if (result.response.candidates && result.response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({
                    parts: [],
                    // Response seems to come back without a role set.
                    role: "model"
                }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) {
                    console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
            finalResult = result;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>streamPromise)// This must be handled to avoid unhandled rejection, but jump
        // to the final catch block with a label to not log this error.
        .catch((_ignored)=>{
            throw new Error(SILENT_ERROR);
        }).then((streamResult)=>streamResult.response).then((response)=>{
            if (response.candidates && response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) {
                    responseContent.role = "model";
                }
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) {
                    console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
        }).catch((e)=>{
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) {
                // Users do not have access to _sendPromise to catch errors
                // downstream from streamPromise, so they should not throw.
                console.error(e);
            }
        });
        return streamPromise;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request)=>{
        return Object.assign(Object.assign({}, request), {
            model
        });
    });
    const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({
        requests: requestsWithModel
    }), requestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Class for generative model APIs.
 * @public
 */ class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}){
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) {
            // Models may be named "models/model-name" or "tunedModels/model-name"
            this.model = modelParams.model;
        } else {
            // If path is not included, assume it's a non-tuned model.
            this.model = `models/${modelParams.model}`;
        }
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */ startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Top-level class for this SDK
 * @public
 */ class GoogleGenerativeAI {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */ getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) {
            throw new GoogleGenerativeAIError(`Must provide a model name. ` + `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        }
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */ getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
        }
        if (!cachedContent.model) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
        }
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */ const disallowedDuplicates = [
            "model",
            "systemInstruction"
        ];
        for (const key of disallowedDuplicates){
            if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) && cachedContent[key] && (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
                if (key === "model") {
                    const modelParamsComp = modelParams.model.startsWith("models/") ? modelParams.model.replace("models/", "") : modelParams.model;
                    const cachedContentComp = cachedContent.model.startsWith("models/") ? cachedContent.model.replace("models/", "") : cachedContent.model;
                    if (modelParamsComp === cachedContentComp) {
                        continue;
                    }
                }
                throw new GoogleGenerativeAIRequestInputError(`Different value for "${key}" specified in modelParams` + ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
            }
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), {
            model: cachedContent.model,
            tools: cachedContent.tools,
            toolConfig: cachedContent.toolConfig,
            systemInstruction: cachedContent.systemInstruction,
            cachedContent
        });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@t3-oss/env-core/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createEnv": (()=>createEnv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
function createEnv(opts) {
    const runtimeEnv = opts.runtimeEnvStrict ?? opts.runtimeEnv ?? process.env;
    const emptyStringAsUndefined = opts.emptyStringAsUndefined ?? false;
    if (emptyStringAsUndefined) {
        for (const [key, value] of Object.entries(runtimeEnv)){
            if (value === "") {
                delete runtimeEnv[key];
            }
        }
    }
    const skip = !!opts.skipValidation;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    if (skip) return runtimeEnv;
    const _client = typeof opts.client === "object" ? opts.client : {};
    const _server = typeof opts.server === "object" ? opts.server : {};
    const _shared = typeof opts.shared === "object" ? opts.shared : {};
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"])(_client);
    const server = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"])(_server);
    const shared = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"])(_shared);
    const isServer = opts.isServer ?? ("undefined" === "undefined" || "Deno" in window);
    const allClient = client.merge(shared);
    const allServer = server.merge(shared).merge(client);
    const parsed = isServer ? allServer.safeParse(runtimeEnv) // on server we can validate all env vars
     : allClient.safeParse(runtimeEnv); // on client we can only validate the ones that are exposed
    const onValidationError = opts.onValidationError ?? ((error)=>{
        console.error("❌ Invalid environment variables:", error.flatten().fieldErrors);
        throw new Error("Invalid environment variables");
    });
    const onInvalidAccess = opts.onInvalidAccess ?? ((_variable)=>{
        throw new Error("❌ Attempted to access a server-side environment variable on the client");
    });
    if (parsed.success === false) {
        return onValidationError(parsed.error);
    }
    const isServerAccess = (prop)=>{
        if (!opts.clientPrefix) return true;
        return !prop.startsWith(opts.clientPrefix) && !(prop in shared.shape);
    };
    const isValidServerAccess = (prop)=>{
        return isServer || !isServerAccess(prop);
    };
    const ignoreProp = (prop)=>{
        return prop === "__esModule" || prop === "$$typeof";
    };
    const extendedObj = (opts.extends ?? []).reduce((acc, curr)=>{
        return Object.assign(acc, curr);
    }, {});
    const fullObj = Object.assign(parsed.data, extendedObj);
    const env = new Proxy(fullObj, {
        get (target, prop) {
            if (typeof prop !== "string") return undefined;
            if (ignoreProp(prop)) return undefined;
            if (!isValidServerAccess(prop)) return onInvalidAccess(prop);
            return Reflect.get(target, prop);
        }
    });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return env;
}
;
}}),
"[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createEnv": (()=>createEnv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@t3-oss/env-core/dist/index.js [app-rsc] (ecmascript)");
;
const CLIENT_PREFIX = "NEXT_PUBLIC_";
function createEnv(opts) {
    const client = typeof opts.client === "object" ? opts.client : {};
    const server = typeof opts.server === "object" ? opts.server : {};
    const shared = opts.shared;
    const runtimeEnv = opts.runtimeEnv ? opts.runtimeEnv : {
        ...process.env,
        ...opts.experimental__runtimeEnv
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnv"])({
        ...opts,
        shared,
        client,
        server,
        clientPrefix: CLIENT_PREFIX,
        runtimeEnv
    });
}
;
}}),
"[project]/node_modules/@ai-sdk/provider/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/errors/ai-sdk-error.ts
__turbopack_esm__({
    "AISDKError": (()=>AISDKError),
    "APICallError": (()=>APICallError),
    "EmptyResponseBodyError": (()=>EmptyResponseBodyError),
    "InvalidPromptError": (()=>InvalidPromptError),
    "InvalidResponseDataError": (()=>InvalidResponseDataError),
    "JSONParseError": (()=>JSONParseError),
    "LoadAPIKeyError": (()=>LoadAPIKeyError),
    "LoadSettingError": (()=>LoadSettingError),
    "NoContentGeneratedError": (()=>NoContentGeneratedError),
    "NoSuchModelError": (()=>NoSuchModelError),
    "TooManyEmbeddingValuesForCallError": (()=>TooManyEmbeddingValuesForCallError),
    "TypeValidationError": (()=>TypeValidationError),
    "UnsupportedFunctionalityError": (()=>UnsupportedFunctionalityError),
    "getErrorMessage": (()=>getErrorMessage),
    "isJSONArray": (()=>isJSONArray),
    "isJSONObject": (()=>isJSONObject),
    "isJSONValue": (()=>isJSONValue)
});
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _AISDKError = class _AISDKError extends Error {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name13, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name13;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker14) {
        const markerSymbol = Symbol.for(marker14);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
    /**
   * Returns a JSON representation of the error.
   * @returns {Object} An object containing the error's name, message, and cause.
   *
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message
        };
    }
};
_a = symbol;
var AISDKError = _AISDKError;
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var APICallError = class extends AISDKError {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
    /**
   * @deprecated Use isInstance instead.
   */ static isAPICallError(error) {
        return error instanceof Error && error.name === name && typeof error.url === "string" && typeof error.requestBodyValues === "object" && (error.statusCode == null || typeof error.statusCode === "number") && (error.responseHeaders == null || typeof error.responseHeaders === "object") && (error.responseBody == null || typeof error.responseBody === "string") && (error.cause == null || typeof error.cause === "object") && typeof error.isRetryable === "boolean" && (error.data == null || typeof error.data === "object");
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            url: this.url,
            requestBodyValues: this.requestBodyValues,
            statusCode: this.statusCode,
            responseHeaders: this.responseHeaders,
            responseBody: this.responseBody,
            cause: this.cause,
            isRetryable: this.isRetryable,
            data: this.data
        };
    }
};
_a2 = symbol2;
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var EmptyResponseBodyError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
    /**
   * @deprecated use `isInstance` instead
   */ static isEmptyResponseBodyError(error) {
        return error instanceof Error && error.name === name2;
    }
};
_a3 = symbol3;
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/errors/invalid-prompt-error.ts
var name3 = "AI_InvalidPromptError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidPromptError = class extends AISDKError {
    constructor({ prompt: prompt2, message, cause }){
        super({
            name: name3,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a4] = true;
        this.prompt = prompt2;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
    /**
   * @deprecated use `isInstance` instead
   */ static isInvalidPromptError(error) {
        return error instanceof Error && error.name === name3 && prompt != null;
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            prompt: this.prompt
        };
    }
};
_a4 = symbol4;
// src/errors/invalid-response-data-error.ts
var name4 = "AI_InvalidResponseDataError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var InvalidResponseDataError = class extends AISDKError {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name4,
            message
        });
        this[_a5] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
    /**
   * @deprecated use `isInstance` instead
   */ static isInvalidResponseDataError(error) {
        return error instanceof Error && error.name === name4 && error.data != null;
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            data: this.data
        };
    }
};
_a5 = symbol5;
// src/errors/json-parse-error.ts
var name5 = "AI_JSONParseError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var JSONParseError = class extends AISDKError {
    constructor({ text, cause }){
        super({
            name: name5,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a6] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
    /**
   * @deprecated use `isInstance` instead
   */ static isJSONParseError(error) {
        return error instanceof Error && error.name === name5 && "text" in error && typeof error.text === "string";
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            cause: this.cause,
            stack: this.stack,
            valueText: this.text
        };
    }
};
_a6 = symbol6;
// src/errors/load-api-key-error.ts
var name6 = "AI_LoadAPIKeyError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var LoadAPIKeyError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name6,
            message
        });
        this[_a7] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
    /**
   * @deprecated Use isInstance instead.
   */ static isLoadAPIKeyError(error) {
        return error instanceof Error && error.name === name6;
    }
};
_a7 = symbol7;
// src/errors/load-setting-error.ts
var name7 = "AI_LoadSettingError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var LoadSettingError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
    /**
   * @deprecated Use isInstance instead.
   */ static isLoadSettingError(error) {
        return error instanceof Error && error.name === name7;
    }
};
_a8 = symbol8;
// src/errors/no-content-generated-error.ts
var name8 = "AI_NoContentGeneratedError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var NoContentGeneratedError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
    /**
   * @deprecated Use isInstance instead.
   */ static isNoContentGeneratedError(error) {
        return error instanceof Error && error.name === name8;
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            cause: this.cause,
            message: this.message,
            stack: this.stack
        };
    }
};
_a9 = symbol9;
// src/errors/no-such-model-error.ts
var name9 = "AI_NoSuchModelError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var NoSuchModelError = class extends AISDKError {
    constructor({ errorName = name9, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a10] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
    /**
   * @deprecated use `isInstance` instead
   */ static isNoSuchModelError(error) {
        return error instanceof Error && error.name === name9 && typeof error.modelId === "string" && typeof error.modelType === "string";
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            modelId: this.modelId,
            modelType: this.modelType
        };
    }
};
_a10 = symbol10;
// src/errors/too-many-embedding-values-for-call-error.ts
var name10 = "AI_TooManyEmbeddingValuesForCallError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var TooManyEmbeddingValuesForCallError = class extends AISDKError {
    constructor(options){
        super({
            name: name10,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a11] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
    /**
   * @deprecated use `isInstance` instead
   */ static isTooManyEmbeddingValuesForCallError(error) {
        return error instanceof Error && error.name === name10 && "provider" in error && typeof error.provider === "string" && "modelId" in error && typeof error.modelId === "string" && "maxEmbeddingsPerCall" in error && typeof error.maxEmbeddingsPerCall === "number" && "values" in error && Array.isArray(error.values);
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            provider: this.provider,
            modelId: this.modelId,
            maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
            values: this.values
        };
    }
};
_a11 = symbol11;
// src/errors/type-validation-error.ts
var name11 = "AI_TypeValidationError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var _TypeValidationError = class _TypeValidationError extends AISDKError {
    constructor({ value, cause }){
        super({
            name: name11,
            message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a12] = true;
        this.value = value;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause }) {
        return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({
            value,
            cause
        });
    }
    /**
   * @deprecated use `isInstance` instead
   */ static isTypeValidationError(error) {
        return error instanceof Error && error.name === name11;
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            cause: this.cause,
            stack: this.stack,
            value: this.value
        };
    }
};
_a12 = symbol12;
var TypeValidationError = _TypeValidationError;
// src/errors/unsupported-functionality-error.ts
var name12 = "AI_UnsupportedFunctionalityError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var UnsupportedFunctionalityError = class extends AISDKError {
    constructor({ functionality }){
        super({
            name: name12,
            message: `'${functionality}' functionality not supported.`
        });
        this[_a13] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
    /**
   * @deprecated Use isInstance instead.
   */ static isUnsupportedFunctionalityError(error) {
        return error instanceof Error && error.name === name12 && typeof error.functionality === "string";
    }
    /**
   * @deprecated Do not use this method. It will be removed in the next major version.
   */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            functionality: this.functionality
        };
    }
};
_a13 = symbol13;
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@ai-sdk/provider-utils/node_modules/nanoid/non-secure/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "customAlphabet": (()=>customAlphabet),
    "nanoid": (()=>nanoid)
});
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = '';
        let i = size;
        while(i--){
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = '';
    let i = size;
    while(i--){
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
;
}}),
"[project]/node_modules/secure-json-parse/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const hasBuffer = typeof Buffer !== 'undefined';
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse(text, reviver, options) {
    // Normalize arguments
    if (options == null) {
        if (reviver !== null && typeof reviver === 'object') {
            options = reviver;
            reviver = undefined;
        }
    }
    if (hasBuffer && Buffer.isBuffer(text)) {
        text = text.toString();
    }
    // BOM checker
    if (text && text.charCodeAt(0) === 0xFEFF) {
        text = text.slice(1);
    }
    // Parse normally, allowing exceptions
    const obj = JSON.parse(text, reviver);
    // Ignore null and non-objects
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const protoAction = options && options.protoAction || 'error';
    const constructorAction = options && options.constructorAction || 'error';
    // options: 'error' (default) / 'remove' / 'ignore'
    if (protoAction === 'ignore' && constructorAction === 'ignore') {
        return obj;
    }
    if (protoAction !== 'ignore' && constructorAction !== 'ignore') {
        if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
            return obj;
        }
    } else if (protoAction !== 'ignore' && constructorAction === 'ignore') {
        if (suspectProtoRx.test(text) === false) {
            return obj;
        }
    } else {
        if (suspectConstructorRx.test(text) === false) {
            return obj;
        }
    }
    // Scan result for proto keys
    return filter(obj, {
        protoAction,
        constructorAction,
        safe: options && options.safe
    });
}
function filter(obj, { protoAction = 'error', constructorAction = 'error', safe } = {}) {
    let next = [
        obj
    ];
    while(next.length){
        const nodes = next;
        next = [];
        for (const node of nodes){
            if (protoAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, '__proto__')) {
                if (safe === true) {
                    return null;
                } else if (protoAction === 'error') {
                    throw new SyntaxError('Object contains forbidden prototype property');
                }
                delete node.__proto__ // eslint-disable-line no-proto
                ;
            }
            if (constructorAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, 'constructor') && Object.prototype.hasOwnProperty.call(node.constructor, 'prototype')) {
                if (safe === true) {
                    return null;
                } else if (constructorAction === 'error') {
                    throw new SyntaxError('Object contains forbidden prototype property');
                }
                delete node.constructor;
            }
            for(const key in node){
                const value = node[key];
                if (value && typeof value === 'object') {
                    next.push(value);
                }
            }
        }
    }
    return obj;
}
function parse(text, reviver, options) {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return _parse(text, reviver, options);
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
function safeParse(text, reviver) {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
        return _parse(text, reviver, {
            safe: true
        });
    } catch (_e) {
        return null;
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
module.exports = parse;
module.exports.default = parse;
module.exports.parse = parse;
module.exports.safeParse = safeParse;
module.exports.scan = filter;
}}),
"[project]/node_modules/eventsource-parser/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createParser": (()=>createParser)
});
function createParser(onParse) {
    let isFirstChunk;
    let buffer;
    let startingPosition;
    let startingFieldLength;
    let eventId;
    let eventName;
    let data;
    reset();
    return {
        feed,
        reset
    };
    "TURBOPACK unreachable";
    function reset() {
        isFirstChunk = true;
        buffer = "";
        startingPosition = 0;
        startingFieldLength = -1;
        eventId = void 0;
        eventName = void 0;
        data = "";
    }
    function feed(chunk) {
        buffer = buffer ? buffer + chunk : chunk;
        if (isFirstChunk && hasBom(buffer)) {
            buffer = buffer.slice(BOM.length);
        }
        isFirstChunk = false;
        const length = buffer.length;
        let position = 0;
        let discardTrailingNewline = false;
        while(position < length){
            if (discardTrailingNewline) {
                if (buffer[position] === "\n") {
                    ++position;
                }
                discardTrailingNewline = false;
            }
            let lineLength = -1;
            let fieldLength = startingFieldLength;
            let character;
            for(let index = startingPosition; lineLength < 0 && index < length; ++index){
                character = buffer[index];
                if (character === ":" && fieldLength < 0) {
                    fieldLength = index - position;
                } else if (character === "\r") {
                    discardTrailingNewline = true;
                    lineLength = index - position;
                } else if (character === "\n") {
                    lineLength = index - position;
                }
            }
            if (lineLength < 0) {
                startingPosition = length - position;
                startingFieldLength = fieldLength;
                break;
            } else {
                startingPosition = 0;
                startingFieldLength = -1;
            }
            parseEventStreamLine(buffer, position, fieldLength, lineLength);
            position += lineLength + 1;
        }
        if (position === length) {
            buffer = "";
        } else if (position > 0) {
            buffer = buffer.slice(position);
        }
    }
    function parseEventStreamLine(lineBuffer, index, fieldLength, lineLength) {
        if (lineLength === 0) {
            if (data.length > 0) {
                onParse({
                    type: "event",
                    id: eventId,
                    event: eventName || void 0,
                    data: data.slice(0, -1)
                });
                data = "";
                eventId = void 0;
            }
            eventName = void 0;
            return;
        }
        const noValue = fieldLength < 0;
        const field = lineBuffer.slice(index, index + (noValue ? lineLength : fieldLength));
        let step = 0;
        if (noValue) {
            step = lineLength;
        } else if (lineBuffer[index + fieldLength + 1] === " ") {
            step = fieldLength + 2;
        } else {
            step = fieldLength + 1;
        }
        const position = index + step;
        const valueLength = lineLength - step;
        const value = lineBuffer.slice(position, position + valueLength).toString();
        if (field === "data") {
            data += value ? "".concat(value, "\n") : "\n";
        } else if (field === "event") {
            eventName = value;
        } else if (field === "id" && !value.includes("\0")) {
            eventId = value;
        } else if (field === "retry") {
            const retry = parseInt(value, 10);
            if (!Number.isNaN(retry)) {
                onParse({
                    type: "reconnect-interval",
                    value: retry
                });
            }
        }
    }
}
const BOM = [
    239,
    187,
    191
];
function hasBom(buffer) {
    return BOM.every((charCode, index)=>buffer.charCodeAt(index) === charCode);
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/eventsource-parser/dist/stream.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "EventSourceParserStream": (()=>EventSourceParserStream)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/eventsource-parser/dist/index.js [app-rsc] (ecmascript)");
;
class EventSourceParserStream extends TransformStream {
    constructor(){
        let parser;
        super({
            start (controller) {
                parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createParser"])((event)=>{
                    if (event.type === "event") {
                        controller.enqueue(event);
                    }
                });
            },
            transform (chunk) {
                parser.feed(chunk);
            }
        });
    }
}
;
 //# sourceMappingURL=stream.js.map
}}),
"[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/combine-headers.ts
__turbopack_esm__({
    "asValidator": (()=>asValidator),
    "combineHeaders": (()=>combineHeaders),
    "convertAsyncGeneratorToReadableStream": (()=>convertAsyncGeneratorToReadableStream),
    "convertBase64ToUint8Array": (()=>convertBase64ToUint8Array),
    "convertUint8ArrayToBase64": (()=>convertUint8ArrayToBase64),
    "createEventSourceResponseHandler": (()=>createEventSourceResponseHandler),
    "createIdGenerator": (()=>createIdGenerator),
    "createJsonErrorResponseHandler": (()=>createJsonErrorResponseHandler),
    "createJsonResponseHandler": (()=>createJsonResponseHandler),
    "createJsonStreamResponseHandler": (()=>createJsonStreamResponseHandler),
    "extractResponseHeaders": (()=>extractResponseHeaders),
    "generateId": (()=>generateId),
    "getErrorMessage": (()=>getErrorMessage),
    "isAbortError": (()=>isAbortError),
    "isParsableJson": (()=>isParsableJson),
    "isParseableJson": (()=>isParseableJson),
    "isValidator": (()=>isValidator),
    "loadApiKey": (()=>loadApiKey),
    "loadOptionalSetting": (()=>loadOptionalSetting),
    "loadSetting": (()=>loadSetting),
    "parseJSON": (()=>parseJSON),
    "postJsonToApi": (()=>postJsonToApi),
    "postToApi": (()=>postToApi),
    "safeParseJSON": (()=>safeParseJSON),
    "safeValidateTypes": (()=>safeValidateTypes),
    "validateTypes": (()=>validateTypes),
    "validator": (()=>validator),
    "validatorSymbol": (()=>validatorSymbol),
    "withoutTrailingSlash": (()=>withoutTrailingSlash),
    "zodValidator": (()=>zodValidator)
});
// src/generate-id.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$node_modules$2f$nanoid$2f$non$2d$secure$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/provider-utils/node_modules/nanoid/non-secure/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/secure-json-parse/index.js [app-rsc] (ecmascript)");
// src/load-api-key.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/provider/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/eventsource-parser/dist/stream.js [app-rsc] (ecmascript)");
function combineHeaders(...headers) {
    return headers.reduce((combinedHeaders, currentHeaders)=>({
            ...combinedHeaders,
            ...currentHeaders != null ? currentHeaders : {}
        }), {});
}
// src/convert-async-generator-to-readable-stream.ts
function convertAsyncGeneratorToReadableStream(stream) {
    return new ReadableStream({
        /**
     * Called when the consumer wants to pull more data from the stream.
     *
     * @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
     * @returns {Promise<void>}
     */ async pull (controller) {
            try {
                const { value, done } = await stream.next();
                if (done) {
                    controller.close();
                } else {
                    controller.enqueue(value);
                }
            } catch (error) {
                controller.error(error);
            }
        },
        /**
     * Called when the consumer cancels the stream.
     */ cancel () {}
    });
}
// src/extract-response-headers.ts
function extractResponseHeaders(response) {
    const headers = {};
    response.headers.forEach((value, key)=>{
        headers[key] = value;
    });
    return headers;
}
;
var createIdGenerator = ({ prefix = "", size: defaultSize = 7, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" } = {})=>{
    const generator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$node_modules$2f$nanoid$2f$non$2d$secure$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customAlphabet"])(alphabet, defaultSize);
    return (size)=>`${prefix}${generator(size)}`;
};
var generateId = createIdGenerator();
// src/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/is-abort-error.ts
function isAbortError(error) {
    return error instanceof Error && (error.name === "AbortError" || error.name === "TimeoutError");
}
;
function loadApiKey({ apiKey, environmentVariableName, apiKeyParameterName = "apiKey", description }) {
    if (typeof apiKey === "string") {
        return apiKey;
    }
    if (apiKey != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string.`
        });
    }
    if (typeof process === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables is not supported in this environment.`
        });
    }
    apiKey = process.env[environmentVariableName];
    if (apiKey == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof apiKey !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return apiKey;
}
;
function loadSetting({ settingValue, environmentVariableName, settingName, description }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string.`
        });
    }
    if (typeof process === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter. Environment variables is not supported in this environment.`
        });
    }
    settingValue = process.env[environmentVariableName];
    if (settingValue == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof settingValue !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return settingValue;
}
// src/load-optional-setting.ts
function loadOptionalSetting({ settingValue, environmentVariableName }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null || typeof process === "undefined") {
        return void 0;
    }
    settingValue = process.env[environmentVariableName];
    if (settingValue == null || typeof settingValue !== "string") {
        return void 0;
    }
    return settingValue;
}
;
;
;
// src/validator.ts
var validatorSymbol = Symbol.for("vercel.ai.validator");
function validator(validate) {
    return {
        [validatorSymbol]: true,
        validate
    };
}
function isValidator(value) {
    return typeof value === "object" && value !== null && validatorSymbol in value && value[validatorSymbol] === true && "validate" in value;
}
function asValidator(value) {
    return isValidator(value) ? value : zodValidator(value);
}
function zodValidator(zodSchema) {
    return validator((value)=>{
        const result = zodSchema.safeParse(value);
        return result.success ? {
            success: true,
            value: result.data
        } : {
            success: false,
            error: result.error
        };
    });
}
// src/validate-types.ts
function validateTypes({ value, schema: inputSchema }) {
    const result = safeValidateTypes({
        value,
        schema: inputSchema
    });
    if (!result.success) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
            value,
            cause: result.error
        });
    }
    return result.value;
}
function safeValidateTypes({ value, schema }) {
    const validator2 = asValidator(schema);
    try {
        if (validator2.validate == null) {
            return {
                success: true,
                value
            };
        }
        const result = validator2.validate(value);
        if (result.success) {
            return result;
        }
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: result.error
            })
        };
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: error
            })
        };
    }
}
// src/parse-json.ts
function parseJSON({ text, schema }) {
    try {
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].parse(text);
        if (schema == null) {
            return value;
        }
        return validateTypes({
            value,
            schema
        });
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JSONParseError"].isJSONParseError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypeValidationError"].isTypeValidationError(error)) {
            throw error;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JSONParseError"]({
            text,
            cause: error
        });
    }
}
function safeParseJSON({ text, schema }) {
    try {
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].parse(text);
        if (schema == null) {
            return {
                success: true,
                value
            };
        }
        return safeValidateTypes({
            value,
            schema
        });
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JSONParseError"].isJSONParseError(error) ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JSONParseError"]({
                text,
                cause: error
            })
        };
    }
}
function isParsableJson(input) {
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].parse(input);
        return true;
    } catch (e) {
        return false;
    }
}
var isParseableJson = isParsableJson;
;
// src/remove-undefined-entries.ts
function removeUndefinedEntries(record) {
    return Object.fromEntries(Object.entries(record).filter(([_key, value])=>value != null));
}
// src/post-to-api.ts
var getOriginalFetch = ()=>globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch })=>postToApi({
        url,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: {
            content: JSON.stringify(body),
            values: body
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch
    });
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch() })=>{
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: removeUndefinedEntries(headers),
            body: body.content,
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: body.values
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"].isAPICallError(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: body.values
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: body.values
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"].isAPICallError(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: body.values
            });
        }
    } catch (error) {
        if (isAbortError(error)) {
            throw error;
        }
        if (error instanceof TypeError && error.message === "fetch failed") {
            const cause = error.cause;
            if (cause != null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: `Cannot connect to API: ${cause.message}`,
                    cause,
                    url,
                    requestBodyValues: body.values,
                    isRetryable: true
                });
            }
        }
        throw error;
    }
};
;
;
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable })=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const responseHeaders = extractResponseHeaders(response);
        if (responseBody.trim() === "") {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
        try {
            const parsedError = parseJSON({
                text: responseBody,
                schema: errorSchema
            });
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: errorToMessage(parsedError),
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    data: parsedError,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
                })
            };
        } catch (parseError) {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
    };
var createEventSourceResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        return {
            responseHeaders,
            value: response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EventSourceParserStream"]()).pipeThrough(new TransformStream({
                transform ({ data }, controller) {
                    if (data === "[DONE]") {
                        return;
                    }
                    controller.enqueue(safeParseJSON({
                        text: data,
                        schema: chunkSchema
                    }));
                }
            }))
        };
    };
var createJsonStreamResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        let buffer = "";
        return {
            responseHeaders,
            value: response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({
                transform (chunkText, controller) {
                    if (chunkText.endsWith("\n")) {
                        controller.enqueue(safeParseJSON({
                            text: buffer + chunkText,
                            schema: chunkSchema
                        }));
                        buffer = "";
                    } else {
                        buffer += chunkText;
                    }
                }
            }))
        };
    };
var createJsonResponseHandler = (responseSchema)=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const parsedResult = safeParseJSON({
            text: responseBody,
            schema: responseSchema
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!parsedResult.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Invalid JSON response",
                cause: parsedResult.error,
                statusCode: response.status,
                responseHeaders,
                responseBody,
                url,
                requestBodyValues
            });
        }
        return {
            responseHeaders,
            value: parsedResult.value
        };
    };
// src/uint8-utils.ts
var { btoa, atob } = globalThis;
function convertBase64ToUint8Array(base64String) {
    const base64Url = base64String.replace(/-/g, "+").replace(/_/g, "/");
    const latin1string = atob(base64Url);
    return Uint8Array.from(latin1string, (byte)=>byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
    let latin1string = "";
    for(let i = 0; i < array.length; i++){
        latin1string += String.fromCodePoint(array[i]);
    }
    return btoa(latin1string);
}
// src/without-trailing-slash.ts
function withoutTrailingSlash(url) {
    return url == null ? void 0 : url.replace(/\/$/, "");
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@ai-sdk/google/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/google-facade.ts
__turbopack_esm__({
    "Google": (()=>Google),
    "createGoogleGenerativeAI": (()=>createGoogleGenerativeAI),
    "google": (()=>google)
});
// src/convert-to-google-generative-ai-messages.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/provider/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
;
;
// src/convert-json-schema-to-openapi-schema.ts
function convertJSONSchemaToOpenAPISchema(jsonSchema) {
    if (typeof jsonSchema === "boolean") {
        return {
            type: "boolean",
            properties: {}
        };
    }
    const { type, description, required, properties, items, allOf, anyOf, oneOf, format, const: constValue, minLength } = jsonSchema;
    const result = {};
    if (description) result.description = description;
    if (required) result.required = required;
    if (format) result.format = format;
    if (constValue !== void 0) {
        result.enum = [
            constValue
        ];
    }
    if (type) {
        if (Array.isArray(type)) {
            if (type.includes("null")) {
                result.type = type.filter((t)=>t !== "null")[0];
                result.nullable = true;
            } else {
                result.type = type;
            }
        } else if (type === "null") {
            result.type = "null";
        } else {
            result.type = type;
        }
    }
    if (properties) {
        result.properties = Object.entries(properties).reduce((acc, [key, value])=>{
            acc[key] = convertJSONSchemaToOpenAPISchema(value);
            return acc;
        }, {});
    }
    if (items) {
        result.items = Array.isArray(items) ? items.map(convertJSONSchemaToOpenAPISchema) : convertJSONSchemaToOpenAPISchema(items);
    }
    if (allOf) {
        result.allOf = allOf.map(convertJSONSchemaToOpenAPISchema);
    }
    if (anyOf) {
        result.anyOf = anyOf.map(convertJSONSchemaToOpenAPISchema);
    }
    if (oneOf) {
        result.oneOf = oneOf.map(convertJSONSchemaToOpenAPISchema);
    }
    if (minLength !== void 0) result.minLength = minLength;
    return result;
}
;
;
function convertToGoogleGenerativeAIMessages(prompt) {
    var _a;
    const systemInstructionParts = [];
    const contents = [];
    let systemMessagesAllowed = true;
    for (const { role, content } of prompt){
        switch(role){
            case "system":
                {
                    if (!systemMessagesAllowed) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                            functionality: "system messages are only supported at the beginning of the conversation"
                        });
                    }
                    systemInstructionParts.push({
                        text: content
                    });
                    break;
                }
            case "user":
                {
                    systemMessagesAllowed = false;
                    const parts = [];
                    for (const part of content){
                        switch(part.type){
                            case "text":
                                {
                                    parts.push({
                                        text: part.text
                                    });
                                    break;
                                }
                            case "image":
                                {
                                    if (part.image instanceof URL) {
                                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                            functionality: "Image URLs in user messages"
                                        });
                                    }
                                    parts.push({
                                        inlineData: {
                                            mimeType: (_a = part.mimeType) != null ? _a : "image/jpeg",
                                            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertUint8ArrayToBase64"])(part.image)
                                        }
                                    });
                                    break;
                                }
                            case "file":
                                {
                                    if (part.data instanceof URL) {
                                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                            functionality: "File URLs in user messages"
                                        });
                                    }
                                    parts.push({
                                        inlineData: {
                                            mimeType: part.mimeType,
                                            data: part.data
                                        }
                                    });
                                    break;
                                }
                        }
                    }
                    contents.push({
                        role: "user",
                        parts
                    });
                    break;
                }
            case "assistant":
                {
                    systemMessagesAllowed = false;
                    contents.push({
                        role: "model",
                        parts: content.map((part)=>{
                            switch(part.type){
                                case "text":
                                    {
                                        return part.text.length === 0 ? void 0 : {
                                            text: part.text
                                        };
                                    }
                                case "tool-call":
                                    {
                                        return {
                                            functionCall: {
                                                name: part.toolName,
                                                args: part.args
                                            }
                                        };
                                    }
                            }
                        }).filter((part)=>part !== void 0)
                    });
                    break;
                }
            case "tool":
                {
                    systemMessagesAllowed = false;
                    contents.push({
                        role: "user",
                        parts: content.map((part)=>({
                                functionResponse: {
                                    name: part.toolName,
                                    response: part.result
                                }
                            }))
                    });
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = role;
                    throw new Error(`Unsupported role: ${_exhaustiveCheck}`);
                }
        }
    }
    return {
        systemInstruction: systemInstructionParts.length > 0 ? {
            parts: systemInstructionParts
        } : void 0,
        contents
    };
}
// src/get-model-path.ts
function getModelPath(modelId) {
    return modelId.includes("/") ? modelId : `models/${modelId}`;
}
;
;
var googleErrorDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullable(),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    })
});
var googleFailedResponseHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJsonErrorResponseHandler"])({
    errorSchema: googleErrorDataSchema,
    errorToMessage: (data)=>data.error.message
});
// src/map-google-generative-ai-finish-reason.ts
function mapGoogleGenerativeAIFinishReason({ finishReason, hasToolCalls }) {
    switch(finishReason){
        case "STOP":
            return hasToolCalls ? "tool-calls" : "stop";
        case "MAX_TOKENS":
            return "length";
        case "RECITATION":
        case "SAFETY":
            return "content-filter";
        case "FINISH_REASON_UNSPECIFIED":
        case "OTHER":
            return "other";
        default:
            return "unknown";
    }
}
// src/google-generative-ai-language-model.ts
var GoogleGenerativeAILanguageModel = class {
    constructor(modelId, settings, config){
        this.specificationVersion = "v1";
        this.defaultObjectGenerationMode = "json";
        this.supportsImageUrls = false;
        this.modelId = modelId;
        this.settings = settings;
        this.config = config;
    }
    get supportsObjectGeneration() {
        return this.settings.structuredOutputs !== false;
    }
    get provider() {
        return this.config.provider;
    }
    async getArgs({ mode, prompt, maxTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences, responseFormat, seed }) {
        var _a;
        const type = mode.type;
        const warnings = [];
        if (seed != null) {
            warnings.push({
                type: "unsupported-setting",
                setting: "seed"
            });
        }
        const generationConfig = {
            // standardized settings:
            maxOutputTokens: maxTokens,
            temperature,
            topK: topK != null ? topK : this.settings.topK,
            topP,
            frequencyPenalty,
            presencePenalty,
            stopSequences,
            // response format:
            responseMimeType: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? "application/json" : void 0,
            responseSchema: (responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && // Google GenAI does not support all OpenAPI Schema features,
            // so this is needed as an escape hatch:
            this.supportsObjectGeneration ? convertJSONSchemaToOpenAPISchema(responseFormat.schema) : void 0
        };
        const { contents, systemInstruction } = convertToGoogleGenerativeAIMessages(prompt);
        switch(type){
            case "regular":
                {
                    return {
                        args: {
                            generationConfig,
                            contents,
                            systemInstruction,
                            safetySettings: this.settings.safetySettings,
                            ...prepareToolsAndToolConfig(mode),
                            cachedContent: this.settings.cachedContent
                        },
                        warnings
                    };
                }
            case "object-json":
                {
                    return {
                        args: {
                            generationConfig: {
                                ...generationConfig,
                                responseMimeType: "application/json",
                                responseSchema: mode.schema != null && // Google GenAI does not support all OpenAPI Schema features,
                                // so this is needed as an escape hatch:
                                this.supportsObjectGeneration ? convertJSONSchemaToOpenAPISchema(mode.schema) : void 0
                            },
                            contents,
                            systemInstruction,
                            safetySettings: this.settings.safetySettings,
                            cachedContent: this.settings.cachedContent
                        },
                        warnings
                    };
                }
            case "object-tool":
                {
                    return {
                        args: {
                            generationConfig,
                            contents,
                            tools: {
                                functionDeclarations: [
                                    {
                                        name: mode.tool.name,
                                        description: (_a = mode.tool.description) != null ? _a : "",
                                        parameters: convertJSONSchemaToOpenAPISchema(mode.tool.parameters)
                                    }
                                ]
                            },
                            toolConfig: {
                                functionCallingConfig: {
                                    mode: "ANY"
                                }
                            },
                            safetySettings: this.settings.safetySettings,
                            cachedContent: this.settings.cachedContent
                        },
                        warnings
                    };
                }
            default:
                {
                    const _exhaustiveCheck = type;
                    throw new Error(`Unsupported type: ${_exhaustiveCheck}`);
                }
        }
    }
    async doGenerate(options) {
        var _a, _b;
        const { args, warnings } = await this.getArgs(options);
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postJsonToApi"])({
            url: `${this.config.baseURL}/${getModelPath(this.modelId)}:generateContent`,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineHeaders"])(this.config.headers(), options.headers),
            body: args,
            failedResponseHandler: googleFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJsonResponseHandler"])(responseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const { contents: rawPrompt, ...rawSettings } = args;
        const candidate = response.candidates[0];
        const toolCalls = getToolCallsFromParts({
            parts: candidate.content.parts,
            generateId: this.config.generateId
        });
        const usageMetadata = response.usageMetadata;
        return {
            text: getTextFromParts(candidate.content.parts),
            toolCalls,
            finishReason: mapGoogleGenerativeAIFinishReason({
                finishReason: candidate.finishReason,
                hasToolCalls: toolCalls != null && toolCalls.length > 0
            }),
            usage: {
                promptTokens: (_a = usageMetadata == null ? void 0 : usageMetadata.promptTokenCount) != null ? _a : NaN,
                completionTokens: (_b = usageMetadata == null ? void 0 : usageMetadata.candidatesTokenCount) != null ? _b : NaN
            },
            rawCall: {
                rawPrompt,
                rawSettings
            },
            rawResponse: {
                headers: responseHeaders
            },
            warnings
        };
    }
    async doStream(options) {
        const { args, warnings } = await this.getArgs(options);
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postJsonToApi"])({
            url: `${this.config.baseURL}/${getModelPath(this.modelId)}:streamGenerateContent?alt=sse`,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineHeaders"])(this.config.headers(), options.headers),
            body: args,
            failedResponseHandler: googleFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEventSourceResponseHandler"])(chunkSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const { contents: rawPrompt, ...rawSettings } = args;
        let finishReason = "unknown";
        let usage = {
            promptTokens: Number.NaN,
            completionTokens: Number.NaN
        };
        const generateId3 = this.config.generateId;
        let hasToolCalls = false;
        return {
            stream: response.pipeThrough(new TransformStream({
                transform (chunk, controller) {
                    var _a, _b;
                    if (!chunk.success) {
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    const value = chunk.value;
                    const candidate = value.candidates[0];
                    if ((candidate == null ? void 0 : candidate.finishReason) != null) {
                        finishReason = mapGoogleGenerativeAIFinishReason({
                            finishReason: candidate.finishReason,
                            hasToolCalls
                        });
                    }
                    const usageMetadata = value.usageMetadata;
                    if (usageMetadata != null) {
                        usage = {
                            promptTokens: (_a = usageMetadata.promptTokenCount) != null ? _a : NaN,
                            completionTokens: (_b = usageMetadata.candidatesTokenCount) != null ? _b : NaN
                        };
                    }
                    const content = candidate.content;
                    if (content == null) {
                        return;
                    }
                    const deltaText = getTextFromParts(content.parts);
                    if (deltaText != null) {
                        controller.enqueue({
                            type: "text-delta",
                            textDelta: deltaText
                        });
                    }
                    const toolCallDeltas = getToolCallsFromParts({
                        parts: content.parts,
                        generateId: generateId3
                    });
                    if (toolCallDeltas != null) {
                        for (const toolCall of toolCallDeltas){
                            controller.enqueue({
                                type: "tool-call-delta",
                                toolCallType: "function",
                                toolCallId: toolCall.toolCallId,
                                toolName: toolCall.toolName,
                                argsTextDelta: toolCall.args
                            });
                            controller.enqueue({
                                type: "tool-call",
                                toolCallType: "function",
                                toolCallId: toolCall.toolCallId,
                                toolName: toolCall.toolName,
                                args: toolCall.args
                            });
                            hasToolCalls = true;
                        }
                    }
                },
                flush (controller) {
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        usage
                    });
                }
            })),
            rawCall: {
                rawPrompt,
                rawSettings
            },
            rawResponse: {
                headers: responseHeaders
            },
            warnings
        };
    }
};
function getToolCallsFromParts({ parts, generateId: generateId3 }) {
    const functionCallParts = parts.filter((part)=>"functionCall" in part);
    return functionCallParts.length === 0 ? void 0 : functionCallParts.map((part)=>({
            toolCallType: "function",
            toolCallId: generateId3(),
            toolName: part.functionCall.name,
            args: JSON.stringify(part.functionCall.args)
        }));
}
function getTextFromParts(parts) {
    const textParts = parts.filter((part)=>"text" in part);
    return textParts.length === 0 ? void 0 : textParts.map((part)=>part.text).join("");
}
var contentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    parts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
            text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
            functionCall: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
                args: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].unknown()
            })
        })
    ]))
});
var responseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    candidates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        content: contentSchema,
        finishReason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
    })),
    usageMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        promptTokenCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number(),
        candidatesTokenCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullish(),
        totalTokenCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number()
    }).optional()
});
var chunkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    candidates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        content: contentSchema.optional(),
        finishReason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
    })),
    usageMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        promptTokenCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number(),
        candidatesTokenCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().nullish(),
        totalTokenCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number()
    }).optional()
});
function prepareToolsAndToolConfig(mode) {
    var _a;
    const tools = ((_a = mode.tools) == null ? void 0 : _a.length) ? mode.tools : void 0;
    if (tools == null) {
        return {
            tools: void 0,
            toolConfig: void 0
        };
    }
    const mappedTools = {
        functionDeclarations: tools.map((tool)=>{
            var _a2;
            return {
                name: tool.name,
                description: (_a2 = tool.description) != null ? _a2 : "",
                parameters: convertJSONSchemaToOpenAPISchema(tool.parameters)
            };
        })
    };
    const toolChoice = mode.toolChoice;
    if (toolChoice == null) {
        return {
            tools: mappedTools,
            toolConfig: void 0
        };
    }
    const type = toolChoice.type;
    switch(type){
        case "auto":
            return {
                tools: mappedTools,
                toolConfig: {
                    functionCallingConfig: {
                        mode: "AUTO"
                    }
                }
            };
        case "none":
            return {
                tools: mappedTools,
                toolConfig: {
                    functionCallingConfig: {
                        mode: "NONE"
                    }
                }
            };
        case "required":
            return {
                tools: mappedTools,
                toolConfig: {
                    functionCallingConfig: {
                        mode: "ANY"
                    }
                }
            };
        case "tool":
            return {
                tools: mappedTools,
                toolConfig: {
                    functionCallingConfig: {
                        mode: "ANY",
                        allowedFunctionNames: [
                            toolChoice.toolName
                        ]
                    }
                }
            };
        default:
            {
                const _exhaustiveCheck = type;
                throw new Error(`Unsupported tool choice type: ${_exhaustiveCheck}`);
            }
    }
}
// src/google-facade.ts
var Google = class {
    /**
   * Creates a new Google provider instance.
   */ constructor(options = {}){
        var _a, _b, _c;
        this.baseURL = (_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withoutTrailingSlash"])((_a = options.baseURL) != null ? _a : options.baseUrl)) != null ? _b : "https://generativelanguage.googleapis.com/v1beta";
        this.apiKey = options.apiKey;
        this.headers = options.headers;
        this.generateId = (_c = options.generateId) != null ? _c : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateId"];
    }
    get baseConfig() {
        return {
            baseURL: this.baseURL,
            headers: ()=>({
                    "x-goog-api-key": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadApiKey"])({
                        apiKey: this.apiKey,
                        environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
                        description: "Google Generative AI"
                    }),
                    ...this.headers
                })
        };
    }
    /**
   * @deprecated Use `chat()` instead.
   */ generativeAI(modelId, settings = {}) {
        return this.chat(modelId, settings);
    }
    chat(modelId, settings = {}) {
        return new GoogleGenerativeAILanguageModel(modelId, settings, {
            provider: "google.generative-ai",
            ...this.baseConfig,
            generateId: this.generateId
        });
    }
};
;
;
;
;
var GoogleGenerativeAIEmbeddingModel = class {
    constructor(modelId, settings, config){
        this.specificationVersion = "v1";
        this.modelId = modelId;
        this.settings = settings;
        this.config = config;
    }
    get provider() {
        return this.config.provider;
    }
    get maxEmbeddingsPerCall() {
        return 2048;
    }
    get supportsParallelCalls() {
        return true;
    }
    async doEmbed({ values, headers, abortSignal }) {
        if (values.length > this.maxEmbeddingsPerCall) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TooManyEmbeddingValuesForCallError"]({
                provider: this.provider,
                modelId: this.modelId,
                maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
                values
            });
        }
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postJsonToApi"])({
            url: `${this.config.baseURL}/models/${this.modelId}:batchEmbedContents`,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineHeaders"])(this.config.headers(), headers),
            body: {
                requests: values.map((value)=>({
                        model: `models/${this.modelId}`,
                        content: {
                            role: "user",
                            parts: [
                                {
                                    text: value
                                }
                            ]
                        },
                        outputDimensionality: this.settings.outputDimensionality
                    }))
            },
            failedResponseHandler: googleFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJsonResponseHandler"])(googleGenerativeAITextEmbeddingResponseSchema),
            abortSignal,
            fetch: this.config.fetch
        });
        return {
            embeddings: response.embeddings.map((item)=>item.values),
            usage: void 0,
            rawResponse: {
                headers: responseHeaders
            }
        };
    }
};
var googleGenerativeAITextEmbeddingResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    embeddings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        values: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number())
    }))
});
// src/google-provider.ts
function createGoogleGenerativeAI(options = {}) {
    var _a, _b;
    const baseURL = (_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withoutTrailingSlash"])((_a = options.baseURL) != null ? _a : options.baseUrl)) != null ? _b : "https://generativelanguage.googleapis.com/v1beta";
    const getHeaders = ()=>({
            "x-goog-api-key": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadApiKey"])({
                apiKey: options.apiKey,
                environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
                description: "Google Generative AI"
            }),
            ...options.headers
        });
    const createChatModel = (modelId, settings = {})=>{
        var _a2;
        return new GoogleGenerativeAILanguageModel(modelId, settings, {
            provider: "google.generative-ai",
            baseURL,
            headers: getHeaders,
            generateId: (_a2 = options.generateId) != null ? _a2 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateId"],
            fetch: options.fetch
        });
    };
    const createEmbeddingModel = (modelId, settings = {})=>new GoogleGenerativeAIEmbeddingModel(modelId, settings, {
            provider: "google.generative-ai",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        });
    const provider = function(modelId, settings) {
        if (new.target) {
            throw new Error("The Google Generative AI model function cannot be called with the new keyword.");
        }
        return createChatModel(modelId, settings);
    };
    provider.languageModel = createChatModel;
    provider.chat = createChatModel;
    provider.generativeAI = createChatModel;
    provider.embedding = createEmbeddingModel;
    provider.textEmbedding = createEmbeddingModel;
    provider.textEmbeddingModel = createEmbeddingModel;
    return provider;
}
var google = createGoogleGenerativeAI();
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/jsondiffpatch/lib/processor.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
class Processor {
    constructor(options){
        this.selfOptions = options || {};
        this.pipes = {};
    }
    options(options) {
        if (options) {
            this.selfOptions = options;
        }
        return this.selfOptions;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pipe(name, pipeArg) {
        let pipe = pipeArg;
        if (typeof name === 'string') {
            if (typeof pipe === 'undefined') {
                return this.pipes[name];
            } else {
                this.pipes[name] = pipe;
            }
        }
        if (name && name.name) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            pipe = name;
            if (pipe.processor === this) {
                return pipe;
            }
            this.pipes[pipe.name] = pipe;
        }
        pipe.processor = this;
        return pipe;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process(input, pipe) {
        let context = input;
        context.options = this.options();
        let nextPipe = pipe || input.pipe || 'default';
        let lastPipe;
        while(nextPipe){
            if (typeof context.nextAfterChildren !== 'undefined') {
                // children processed and coming back to parent
                context.next = context.nextAfterChildren;
                context.nextAfterChildren = null;
            }
            if (typeof nextPipe === 'string') {
                nextPipe = this.pipe(nextPipe);
            }
            nextPipe.process(context);
            lastPipe = nextPipe;
            nextPipe = null;
            if (context) {
                if (context.next) {
                    context = context.next;
                    nextPipe = context.pipe || lastPipe;
                }
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return context.hasResult ? context.result : undefined;
    }
}
const __TURBOPACK__default__export__ = Processor;
}}),
"[project]/node_modules/jsondiffpatch/lib/pipe.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// eslint-disable-next-line @typescript-eslint/no-explicit-any
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
class Pipe {
    constructor(name){
        this.name = name;
        this.filters = [];
    }
    process(input) {
        if (!this.processor) {
            throw new Error('add this pipe to a processor before using it');
        }
        const debug = this.debug;
        const length = this.filters.length;
        const context = input;
        for(let index = 0; index < length; index++){
            const filter = this.filters[index];
            if (debug) {
                this.log(`filter: ${filter.filterName}`);
            }
            filter(context);
            if (typeof context === 'object' && context.exiting) {
                context.exiting = false;
                break;
            }
        }
        if (!context.next && this.resultCheck) {
            this.resultCheck(context);
        }
    }
    log(msg) {
        console.log(`[jsondiffpatch] ${this.name} pipe, ${msg}`);
    }
    append(...args) {
        this.filters.push(...args);
        return this;
    }
    prepend(...args) {
        this.filters.unshift(...args);
        return this;
    }
    indexOf(filterName) {
        if (!filterName) {
            throw new Error('a filter name is required');
        }
        for(let index = 0; index < this.filters.length; index++){
            const filter = this.filters[index];
            if (filter.filterName === filterName) {
                return index;
            }
        }
        throw new Error(`filter not found: ${filterName}`);
    }
    list() {
        return this.filters.map((f)=>f.filterName);
    }
    after(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index + 1, 0, ...params);
        return this;
    }
    before(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 0, ...params);
        return this;
    }
    replace(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 1, ...params);
        return this;
    }
    remove(filterName) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 1);
        return this;
    }
    clear() {
        this.filters.length = 0;
        return this;
    }
    shouldHaveResult(should) {
        if (should === false) {
            this.resultCheck = null;
            return;
        }
        if (this.resultCheck) {
            return;
        }
        this.resultCheck = (context)=>{
            if (!context.hasResult) {
                console.log(context);
                const error = new Error(`${this.name} failed`);
                error.noResult = true;
                throw error;
            }
        };
        return this;
    }
}
const __TURBOPACK__default__export__ = Pipe;
}}),
"[project]/node_modules/jsondiffpatch/lib/clone.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>clone)
});
function cloneRegExp(re) {
    const regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString());
    return new RegExp(regexMatch[1], regexMatch[2]);
}
function clone(arg) {
    if (typeof arg !== 'object') {
        return arg;
    }
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg)) {
        return arg.map(clone);
    }
    if (arg instanceof Date) {
        return new Date(arg.getTime());
    }
    if (arg instanceof RegExp) {
        return cloneRegExp(arg);
    }
    const cloned = {};
    for(const name in arg){
        if (Object.prototype.hasOwnProperty.call(arg, name)) {
            cloned[name] = clone(arg[name]);
        }
    }
    return cloned;
}
}}),
"[project]/node_modules/jsondiffpatch/lib/contexts/context.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Context)
});
class Context {
    setResult(result) {
        this.result = result;
        this.hasResult = true;
        return this;
    }
    exit() {
        this.exiting = true;
        return this;
    }
    push(child, name) {
        child.parent = this;
        if (typeof name !== 'undefined') {
            child.childName = name;
        }
        child.root = this.root || this;
        child.options = child.options || this.options;
        if (!this.children) {
            this.children = [
                child
            ];
            this.nextAfterChildren = this.next || null;
            this.next = child;
        } else {
            this.children[this.children.length - 1].next = child;
            this.children.push(child);
        }
        child.next = this;
        return this;
    }
}
}}),
"[project]/node_modules/jsondiffpatch/lib/contexts/diff.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/clone.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/context.js [app-rsc] (ecmascript)");
;
;
class DiffContext extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] {
    constructor(left, right){
        super();
        this.left = left;
        this.right = right;
        this.pipe = 'diff';
    }
    setResult(result) {
        if (this.options.cloneDiffValues && typeof result === 'object') {
            const clone = typeof this.options.cloneDiffValues === 'function' ? this.options.cloneDiffValues : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
            if (typeof result[0] === 'object') {
                result[0] = clone(result[0]);
            }
            if (typeof result[1] === 'object') {
                result[1] = clone(result[1]);
            }
        }
        return super.setResult(result);
    }
}
const __TURBOPACK__default__export__ = DiffContext;
}}),
"[project]/node_modules/jsondiffpatch/lib/contexts/patch.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/context.js [app-rsc] (ecmascript)");
;
class PatchContext extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] {
    constructor(left, delta){
        super();
        this.left = left;
        this.delta = delta;
        this.pipe = 'patch';
    }
}
const __TURBOPACK__default__export__ = PatchContext;
}}),
"[project]/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/context.js [app-rsc] (ecmascript)");
;
class ReverseContext extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] {
    constructor(delta){
        super();
        this.delta = delta;
        this.pipe = 'reverse';
    }
}
const __TURBOPACK__default__export__ = ReverseContext;
}}),
"[project]/node_modules/jsondiffpatch/lib/filters/nested.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "collectChildrenDiffFilter": (()=>collectChildrenDiffFilter),
    "collectChildrenPatchFilter": (()=>collectChildrenPatchFilter),
    "collectChildrenReverseFilter": (()=>collectChildrenReverseFilter),
    "objectsDiffFilter": (()=>objectsDiffFilter),
    "patchFilter": (()=>patchFilter),
    "reverseFilter": (()=>reverseFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/diff.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/patch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-rsc] (ecmascript)");
;
;
;
const collectChildrenDiffFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const length = context.children.length;
    let child;
    let result = context.result;
    for(let index = 0; index < length; index++){
        child = context.children[index];
        if (typeof child.result === 'undefined') {
            continue;
        }
        result = result || {};
        result[child.childName] = child.result;
    }
    if (result && context.leftIsArray) {
        result._t = 'a';
    }
    context.setResult(result).exit();
};
collectChildrenDiffFilter.filterName = 'collectChildren';
const objectsDiffFilter = (context)=>{
    if (context.leftIsArray || context.leftType !== 'object') {
        return;
    }
    const left = context.left;
    const right = context.right;
    let name;
    let child;
    const propertyFilter = context.options.propertyFilter;
    for(name in left){
        if (!Object.prototype.hasOwnProperty.call(left, name)) {
            continue;
        }
        if (propertyFilter && !propertyFilter(name, context)) {
            continue;
        }
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](left[name], right[name]);
        context.push(child, name);
    }
    for(name in right){
        if (!Object.prototype.hasOwnProperty.call(right, name)) {
            continue;
        }
        if (propertyFilter && !propertyFilter(name, context)) {
            continue;
        }
        if (typeof left[name] === 'undefined') {
            child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](undefined, right[name]);
            context.push(child, name);
        }
    }
    if (!context.children || context.children.length === 0) {
        context.setResult(undefined).exit();
        return;
    }
    context.exit();
};
objectsDiffFilter.filterName = 'objects';
const patchFilter = function nestedPatchFilter(context) {
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
        return;
    }
    const objectDelta = nestedDelta;
    let name;
    let child;
    for(name in objectDelta){
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](context.left[name], objectDelta[name]);
        context.push(child, name);
    }
    context.exit();
};
patchFilter.filterName = 'objects';
const collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
        return;
    }
    const object = context.left;
    const length = context.children.length;
    let child;
    for(let index = 0; index < length; index++){
        child = context.children[index];
        const property = child.childName;
        if (Object.prototype.hasOwnProperty.call(context.left, property) && child.result === undefined) {
            delete object[property];
        } else if (object[property] !== child.result) {
            object[property] = child.result;
        }
    }
    context.setResult(object).exit();
};
collectChildrenPatchFilter.filterName = 'collectChildren';
const reverseFilter = function nestedReverseFilter(context) {
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
        return;
    }
    const objectDelta = context.delta;
    let name;
    let child;
    for(name in objectDelta){
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](objectDelta[name]);
        context.push(child, name);
    }
    context.exit();
};
reverseFilter.filterName = 'objects';
const collectChildrenReverseFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
        return;
    }
    const length = context.children.length;
    let child;
    const delta = {};
    for(let index = 0; index < length; index++){
        child = context.children[index];
        const property = child.childName;
        if (delta[property] !== child.result) {
            delta[property] = child.result;
        }
    }
    context.setResult(delta).exit();
};
collectChildrenReverseFilter.filterName = 'collectChildren';
}}),
"[project]/node_modules/jsondiffpatch/lib/filters/trivial.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "diffFilter": (()=>diffFilter),
    "patchFilter": (()=>patchFilter),
    "reverseFilter": (()=>reverseFilter)
});
const diffFilter = function trivialMatchesDiffFilter(context) {
    if (context.left === context.right) {
        context.setResult(undefined).exit();
        return;
    }
    if (typeof context.left === 'undefined') {
        if (typeof context.right === 'function') {
            throw new Error('functions are not supported');
        }
        context.setResult([
            context.right
        ]).exit();
        return;
    }
    if (typeof context.right === 'undefined') {
        context.setResult([
            context.left,
            0,
            0
        ]).exit();
        return;
    }
    if (typeof context.left === 'function' || typeof context.right === 'function') {
        throw new Error('functions are not supported');
    }
    context.leftType = context.left === null ? 'null' : typeof context.left;
    context.rightType = context.right === null ? 'null' : typeof context.right;
    if (context.leftType !== context.rightType) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.leftType === 'boolean' || context.leftType === 'number') {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.leftType === 'object') {
        context.leftIsArray = Array.isArray(context.left);
    }
    if (context.rightType === 'object') {
        context.rightIsArray = Array.isArray(context.right);
    }
    if (context.leftIsArray !== context.rightIsArray) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.left instanceof RegExp) {
        if (context.right instanceof RegExp) {
            context.setResult([
                context.left.toString(),
                context.right.toString()
            ]).exit();
        } else {
            context.setResult([
                context.left,
                context.right
            ]).exit();
        }
    }
};
diffFilter.filterName = 'trivial';
const patchFilter = function trivialMatchesPatchFilter(context) {
    if (typeof context.delta === 'undefined') {
        context.setResult(context.left).exit();
        return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
        context.setResult(nonNestedDelta[0]).exit();
        return;
    }
    if (nonNestedDelta.length === 2) {
        if (context.left instanceof RegExp) {
            const regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(nonNestedDelta[1]);
            if (regexArgs) {
                context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
                return;
            }
        }
        context.setResult(nonNestedDelta[1]).exit();
        return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
        context.setResult(undefined).exit();
    }
};
patchFilter.filterName = 'trivial';
const reverseFilter = function trivialReferseFilter(context) {
    if (typeof context.delta === 'undefined') {
        context.setResult(context.delta).exit();
        return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
        context.setResult([
            nonNestedDelta[0],
            0,
            0
        ]).exit();
        return;
    }
    if (nonNestedDelta.length === 2) {
        context.setResult([
            nonNestedDelta[1],
            nonNestedDelta[0]
        ]).exit();
        return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
        context.setResult([
            nonNestedDelta[0]
        ]).exit();
    }
};
reverseFilter.filterName = 'trivial';
}}),
"[project]/node_modules/jsondiffpatch/lib/filters/dates.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "diffFilter": (()=>diffFilter)
});
const diffFilter = function datesDiffFilter(context) {
    if (context.left instanceof Date) {
        if (context.right instanceof Date) {
            if (context.left.getTime() !== context.right.getTime()) {
                context.setResult([
                    context.left,
                    context.right
                ]);
            } else {
                context.setResult(undefined);
            }
        } else {
            context.setResult([
                context.left,
                context.right
            ]);
        }
        context.exit();
    } else if (context.right instanceof Date) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
    }
};
diffFilter.filterName = 'dates';
}}),
"[project]/node_modules/jsondiffpatch/lib/filters/texts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "diffFilter": (()=>diffFilter),
    "patchFilter": (()=>patchFilter),
    "reverseFilter": (()=>reverseFilter)
});
const TEXT_DIFF = 2;
const DEFAULT_MIN_LENGTH = 60;
let cachedDiffPatch = null;
function getDiffMatchPatch(options, required) {
    var _a;
    if (!cachedDiffPatch) {
        let instance;
        if ((_a = options === null || options === void 0 ? void 0 : options.textDiff) === null || _a === void 0 ? void 0 : _a.diffMatchPatch) {
            instance = new options.textDiff.diffMatchPatch();
        } else {
            if (!required) {
                return null;
            }
            const error = new Error('The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point.');
            // eslint-disable-next-line camelcase
            error.diff_match_patch_not_found = true;
            throw error;
        }
        cachedDiffPatch = {
            diff: function(txt1, txt2) {
                return instance.patch_toText(instance.patch_make(txt1, txt2));
            },
            patch: function(txt1, patch) {
                const results = instance.patch_apply(instance.patch_fromText(patch), txt1);
                for(let i = 0; i < results[1].length; i++){
                    if (!results[1][i]) {
                        const error = new Error('text patch failed');
                        error.textPatchFailed = true;
                    }
                }
                return results[0];
            }
        };
    }
    return cachedDiffPatch;
}
const diffFilter = function textsDiffFilter(context) {
    if (context.leftType !== 'string') {
        return;
    }
    const left = context.left;
    const right = context.right;
    const minLength = context.options && context.options.textDiff && context.options.textDiff.minLength || DEFAULT_MIN_LENGTH;
    if (left.length < minLength || right.length < minLength) {
        context.setResult([
            left,
            right
        ]).exit();
        return;
    }
    // large text, try to use a text-diff algorithm
    const diffMatchPatch = getDiffMatchPatch(context.options);
    if (!diffMatchPatch) {
        // diff-match-patch library not available,
        // fallback to regular string replace
        context.setResult([
            left,
            right
        ]).exit();
        return;
    }
    const diff = diffMatchPatch.diff;
    context.setResult([
        diff(left, right),
        0,
        TEXT_DIFF
    ]).exit();
};
diffFilter.filterName = 'texts';
const patchFilter = function textsPatchFilter(context) {
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
        return;
    }
    const textDiffDelta = nonNestedDelta;
    // text-diff, use a text-patch algorithm
    const patch = getDiffMatchPatch(context.options, true).patch;
    context.setResult(patch(context.left, textDiffDelta[0])).exit();
};
patchFilter.filterName = 'texts';
const textDeltaReverse = function(delta) {
    let i;
    let l;
    let line;
    let lineTmp;
    let header = null;
    const headerRegex = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
    let lineHeader;
    const lines = delta.split('\n');
    for(i = 0, l = lines.length; i < l; i++){
        line = lines[i];
        const lineStart = line.slice(0, 1);
        if (lineStart === '@') {
            header = headerRegex.exec(line);
            lineHeader = i;
            // fix header
            lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
        } else if (lineStart === '+') {
            lines[i] = '-' + lines[i].slice(1);
            if (lines[i - 1].slice(0, 1) === '+') {
                // swap lines to keep default order (-+)
                lineTmp = lines[i];
                lines[i] = lines[i - 1];
                lines[i - 1] = lineTmp;
            }
        } else if (lineStart === '-') {
            lines[i] = '+' + lines[i].slice(1);
        }
    }
    return lines.join('\n');
};
const reverseFilter = function textsReverseFilter(context) {
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
        return;
    }
    const textDiffDelta = nonNestedDelta;
    // text-diff, use a text-diff algorithm
    context.setResult([
        textDeltaReverse(textDiffDelta[0]),
        0,
        TEXT_DIFF
    ]).exit();
};
reverseFilter.filterName = 'texts';
}}),
"[project]/node_modules/jsondiffpatch/lib/filters/lcs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/*

LCS implementation that supports arrays or strings

reference: http://en.wikipedia.org/wiki/Longest_common_subsequence_problem

*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const defaultMatch = function(array1, array2, index1, index2) {
    return array1[index1] === array2[index2];
};
const lengthMatrix = function(array1, array2, match, context) {
    const len1 = array1.length;
    const len2 = array2.length;
    let x, y;
    // initialize empty matrix of len1+1 x len2+1
    const matrix = new Array(len1 + 1);
    for(x = 0; x < len1 + 1; x++){
        matrix[x] = new Array(len2 + 1);
        for(y = 0; y < len2 + 1; y++){
            matrix[x][y] = 0;
        }
    }
    matrix.match = match;
    // save sequence lengths for each coordinate
    for(x = 1; x < len1 + 1; x++){
        for(y = 1; y < len2 + 1; y++){
            if (match(array1, array2, x - 1, y - 1, context)) {
                matrix[x][y] = matrix[x - 1][y - 1] + 1;
            } else {
                matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
            }
        }
    }
    return matrix;
};
const backtrack = function(matrix, array1, array2, context) {
    let index1 = array1.length;
    let index2 = array2.length;
    const subsequence = {
        sequence: [],
        indices1: [],
        indices2: []
    };
    while(index1 !== 0 && index2 !== 0){
        const sameLetter = matrix.match(array1, array2, index1 - 1, index2 - 1, context);
        if (sameLetter) {
            subsequence.sequence.unshift(array1[index1 - 1]);
            subsequence.indices1.unshift(index1 - 1);
            subsequence.indices2.unshift(index2 - 1);
            --index1;
            --index2;
        } else {
            const valueAtMatrixAbove = matrix[index1][index2 - 1];
            const valueAtMatrixLeft = matrix[index1 - 1][index2];
            if (valueAtMatrixAbove > valueAtMatrixLeft) {
                --index2;
            } else {
                --index1;
            }
        }
    }
    return subsequence;
};
const get = function(array1, array2, match, context) {
    const innerContext = context || {};
    const matrix = lengthMatrix(array1, array2, match || defaultMatch, innerContext);
    return backtrack(matrix, array1, array2, innerContext);
};
const __TURBOPACK__default__export__ = {
    get
};
}}),
"[project]/node_modules/jsondiffpatch/lib/filters/arrays.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "collectChildrenPatchFilter": (()=>collectChildrenPatchFilter),
    "collectChildrenReverseFilter": (()=>collectChildrenReverseFilter),
    "diffFilter": (()=>diffFilter),
    "patchFilter": (()=>patchFilter),
    "reverseFilter": (()=>reverseFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/diff.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$lcs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/filters/lcs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/patch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-rsc] (ecmascript)");
;
;
;
;
const ARRAY_MOVE = 3;
function arraysHaveMatchByRef(array1, array2, len1, len2) {
    for(let index1 = 0; index1 < len1; index1++){
        const val1 = array1[index1];
        for(let index2 = 0; index2 < len2; index2++){
            const val2 = array2[index2];
            if (index1 !== index2 && val1 === val2) {
                return true;
            }
        }
    }
}
function matchItems(array1, array2, index1, index2, context) {
    const value1 = array1[index1];
    const value2 = array2[index2];
    if (value1 === value2) {
        return true;
    }
    if (typeof value1 !== 'object' || typeof value2 !== 'object') {
        return false;
    }
    const objectHash = context.objectHash;
    if (!objectHash) {
        // no way to match objects was provided, try match by position
        return context.matchByPosition && index1 === index2;
    }
    context.hashCache1 = context.hashCache1 || [];
    let hash1 = context.hashCache1[index1];
    if (typeof hash1 === 'undefined') {
        context.hashCache1[index1] = hash1 = objectHash(value1, index1);
    }
    if (typeof hash1 === 'undefined') {
        return false;
    }
    context.hashCache2 = context.hashCache2 || [];
    let hash2 = context.hashCache2[index2];
    if (typeof hash2 === 'undefined') {
        context.hashCache2[index2] = hash2 = objectHash(value2, index2);
    }
    if (typeof hash2 === 'undefined') {
        return false;
    }
    return hash1 === hash2;
}
const diffFilter = function arraysDiffFilter(context) {
    if (!context.leftIsArray) {
        return;
    }
    const matchContext = {
        objectHash: context.options && context.options.objectHash,
        matchByPosition: context.options && context.options.matchByPosition
    };
    let commonHead = 0;
    let commonTail = 0;
    let index;
    let index1;
    let index2;
    const array1 = context.left;
    const array2 = context.right;
    const len1 = array1.length;
    const len2 = array2.length;
    let child;
    if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== 'boolean') {
        matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
    }
    // separate common head
    while(commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)){
        index = commonHead;
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](array1[index], array2[index]);
        context.push(child, index);
        commonHead++;
    }
    // separate common tail
    while(commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)){
        index1 = len1 - 1 - commonTail;
        index2 = len2 - 1 - commonTail;
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
        context.push(child, index2);
        commonTail++;
    }
    let result;
    if (commonHead + commonTail === len1) {
        if (len1 === len2) {
            // arrays are identical
            context.setResult(undefined).exit();
            return;
        }
        // trivial case, a block (1 or more consecutive items) was added
        result = result || {
            _t: 'a'
        };
        for(index = commonHead; index < len2 - commonTail; index++){
            result[index] = [
                array2[index]
            ];
        }
        context.setResult(result).exit();
        return;
    }
    if (commonHead + commonTail === len2) {
        // trivial case, a block (1 or more consecutive items) was removed
        result = result || {
            _t: 'a'
        };
        for(index = commonHead; index < len1 - commonTail; index++){
            result[`_${index}`] = [
                array1[index],
                0,
                0
            ];
        }
        context.setResult(result).exit();
        return;
    }
    // reset hash cache
    delete matchContext.hashCache1;
    delete matchContext.hashCache2;
    // diff is not trivial, find the LCS (Longest Common Subsequence)
    const trimmed1 = array1.slice(commonHead, len1 - commonTail);
    const trimmed2 = array2.slice(commonHead, len2 - commonTail);
    const seq = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$lcs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(trimmed1, trimmed2, matchItems, matchContext);
    const removedItems = [];
    result = result || {
        _t: 'a'
    };
    for(index = commonHead; index < len1 - commonTail; index++){
        if (seq.indices1.indexOf(index - commonHead) < 0) {
            // removed
            result[`_${index}`] = [
                array1[index],
                0,
                0
            ];
            removedItems.push(index);
        }
    }
    let detectMove = true;
    if (context.options && context.options.arrays && context.options.arrays.detectMove === false) {
        detectMove = false;
    }
    let includeValueOnMove = false;
    if (context.options && context.options.arrays && context.options.arrays.includeValueOnMove) {
        includeValueOnMove = true;
    }
    const removedItemsLength = removedItems.length;
    for(index = commonHead; index < len2 - commonTail; index++){
        const indexOnArray2 = seq.indices2.indexOf(index - commonHead);
        if (indexOnArray2 < 0) {
            // added, try to match with a removed item and register as position move
            let isMove = false;
            if (detectMove && removedItemsLength > 0) {
                for(let removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++){
                    index1 = removedItems[removeItemIndex1];
                    if (matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
                        // store position move as: [originalValue, newPosition, ARRAY_MOVE]
                        result[`_${index1}`].splice(1, 2, index, ARRAY_MOVE);
                        if (!includeValueOnMove) {
                            // don't include moved value on diff, to save bytes
                            result[`_${index1}`][0] = '';
                        }
                        index2 = index;
                        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
                        context.push(child, index2);
                        removedItems.splice(removeItemIndex1, 1);
                        isMove = true;
                        break;
                    }
                }
            }
            if (!isMove) {
                // added
                result[index] = [
                    array2[index]
                ];
            }
        } else {
            // match, do inner diff
            index1 = seq.indices1[indexOnArray2] + commonHead;
            index2 = seq.indices2[indexOnArray2] + commonHead;
            child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
            context.push(child, index2);
        }
    }
    context.setResult(result).exit();
};
diffFilter.filterName = 'arrays';
const compare = {
    numerically (a, b) {
        return a - b;
    },
    numericallyBy (name) {
        return (a, b)=>a[name] - b[name];
    }
};
const patchFilter = function nestedPatchFilter(context) {
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== 'a') {
        return;
    }
    let index;
    let index1;
    const delta = nestedDelta;
    const array = context.left;
    // first, separate removals, insertions and modifications
    let toRemove = [];
    let toInsert = [];
    const toModify = [];
    for(index in delta){
        if (index !== '_t') {
            if (index[0] === '_') {
                const removedOrMovedIndex = index;
                // removed item from original array
                if (delta[removedOrMovedIndex][2] === 0 || delta[removedOrMovedIndex][2] === ARRAY_MOVE) {
                    toRemove.push(parseInt(index.slice(1), 10));
                } else {
                    throw new Error('only removal or move can be applied at original array indices,' + ` invalid diff type: ${delta[removedOrMovedIndex][2]}`);
                }
            } else {
                const numberIndex = index;
                if (delta[numberIndex].length === 1) {
                    // added item at new array
                    toInsert.push({
                        index: parseInt(numberIndex, 10),
                        value: delta[numberIndex][0]
                    });
                } else {
                    // modified item at new array
                    toModify.push({
                        index: parseInt(numberIndex, 10),
                        delta: delta[numberIndex]
                    });
                }
            }
        }
    }
    // remove items, in reverse order to avoid sawing our own floor
    toRemove = toRemove.sort(compare.numerically);
    for(index = toRemove.length - 1; index >= 0; index--){
        index1 = toRemove[index];
        const indexDiff = delta[`_${index1}`];
        const removedValue = array.splice(index1, 1)[0];
        if (indexDiff[2] === ARRAY_MOVE) {
            // reinsert later
            toInsert.push({
                index: indexDiff[1],
                value: removedValue
            });
        }
    }
    // insert items, in reverse order to avoid moving our own floor
    toInsert = toInsert.sort(compare.numericallyBy('index'));
    const toInsertLength = toInsert.length;
    for(index = 0; index < toInsertLength; index++){
        const insertion = toInsert[index];
        array.splice(insertion.index, 0, insertion.value);
    }
    // apply modifications
    const toModifyLength = toModify.length;
    let child;
    if (toModifyLength > 0) {
        for(index = 0; index < toModifyLength; index++){
            const modification = toModify[index];
            child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](array[modification.index], modification.delta);
            context.push(child, modification.index);
        }
    }
    if (!context.children) {
        context.setResult(array).exit();
        return;
    }
    context.exit();
};
patchFilter.filterName = 'arrays';
const collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== 'a') {
        return;
    }
    const array = context.left;
    const length = context.children.length;
    let child;
    for(let index = 0; index < length; index++){
        child = context.children[index];
        const arrayIndex = child.childName;
        array[arrayIndex] = child.result;
    }
    context.setResult(array).exit();
};
collectChildrenPatchFilter.filterName = 'arraysCollectChildren';
const reverseFilter = function arraysReverseFilter(context) {
    if (!context.nested) {
        const nonNestedDelta = context.delta;
        if (nonNestedDelta[2] === ARRAY_MOVE) {
            const arrayMoveDelta = nonNestedDelta;
            context.newName = `_${arrayMoveDelta[1]}`;
            context.setResult([
                arrayMoveDelta[0],
                parseInt(context.childName.substring(1), 10),
                ARRAY_MOVE
            ]).exit();
        }
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== 'a') {
        return;
    }
    const arrayDelta = nestedDelta;
    let name;
    let child;
    for(name in arrayDelta){
        if (name === '_t') {
            continue;
        }
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](arrayDelta[name]);
        context.push(child, name);
    }
    context.exit();
};
reverseFilter.filterName = 'arrays';
const reverseArrayDeltaIndex = (delta, index, itemDelta)=>{
    if (typeof index === 'string' && index[0] === '_') {
        return parseInt(index.substring(1), 10);
    } else if (Array.isArray(itemDelta) && itemDelta[2] === 0) {
        return `_${index}`;
    }
    let reverseIndex = +index;
    for(const deltaIndex in delta){
        const deltaItem = delta[deltaIndex];
        if (Array.isArray(deltaItem)) {
            if (deltaItem[2] === ARRAY_MOVE) {
                const moveFromIndex = parseInt(deltaIndex.substring(1), 10);
                const moveToIndex = deltaItem[1];
                if (moveToIndex === +index) {
                    return moveFromIndex;
                }
                if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
                    reverseIndex++;
                } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
                    reverseIndex--;
                }
            } else if (deltaItem[2] === 0) {
                const deleteIndex = parseInt(deltaIndex.substring(1), 10);
                if (deleteIndex <= reverseIndex) {
                    reverseIndex++;
                }
            } else if (deltaItem.length === 1 && parseInt(deltaIndex, 10) <= reverseIndex) {
                reverseIndex--;
            }
        }
    }
    return reverseIndex;
};
const collectChildrenReverseFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== 'a') {
        return;
    }
    const arrayDelta = deltaWithChildren;
    const length = context.children.length;
    let child;
    const delta = {
        _t: 'a'
    };
    for(let index = 0; index < length; index++){
        child = context.children[index];
        let name = child.newName;
        if (typeof name === 'undefined') {
            name = reverseArrayDeltaIndex(arrayDelta, child.childName, child.result);
        }
        if (delta[name] !== child.result) {
            // There's no way to type this well.
            delta[name] = child.result;
        }
    }
    context.setResult(delta).exit();
};
collectChildrenReverseFilter.filterName = 'arraysCollectChildren';
}}),
"[project]/node_modules/jsondiffpatch/lib/diffpatcher.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$processor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/processor.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/pipe.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/filters/nested.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/filters/trivial.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$dates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/filters/dates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/filters/texts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/filters/arrays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/diff.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/patch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/clone.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
class DiffPatcher {
    constructor(options){
        this.processor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$processor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](options);
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]('diff').append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.collectChildrenDiffFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.diffFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$dates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.diffFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.diffFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.objectsDiffFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.diffFilter).shouldHaveResult());
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]('patch').append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.collectChildrenPatchFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.collectChildrenPatchFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.patchFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.patchFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.patchFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.patchFilter).shouldHaveResult());
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]('reverse').append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.collectChildrenReverseFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.collectChildrenReverseFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.reverseFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.reverseFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.reverseFilter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.reverseFilter).shouldHaveResult());
    }
    options(options) {
        return this.processor.options(options);
    }
    diff(left, right) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](left, right));
    }
    patch(left, delta) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](left, delta));
    }
    reverse(delta) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](delta));
    }
    unpatch(right, delta) {
        return this.patch(right, this.reverse(delta));
    }
    clone(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
    }
}
const __TURBOPACK__default__export__ = DiffPatcher;
}}),
"[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "clone": (()=>clone),
    "create": (()=>create),
    "diff": (()=>diff),
    "patch": (()=>patch),
    "reverse": (()=>reverse),
    "unpatch": (()=>unpatch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/diffpatcher.js [app-rsc] (ecmascript)");
;
;
;
function create(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](options);
}
let defaultInstance;
function diff(left, right) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.diff(left, right);
}
function patch(left, delta) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.patch(left, delta);
}
function unpatch(right, delta) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.unpatch(right, delta);
}
function reverse(delta) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.reverse(delta);
}
function clone(value) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.clone(value);
}
}}),
"[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/jsondiffpatch/lib/date-reviver.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// use as 2nd parameter for JSON.parse to revive Date instances
__turbopack_esm__({
    "default": (()=>dateReviver)
});
function dateReviver(key, value) {
    let parts;
    if (typeof value === 'string') {
        parts = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(value);
        if (parts) {
            return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4], +parts[5], +parts[6], +(parts[7] || 0)));
        }
    }
    return value;
}
}}),
"[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DiffPatcher": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "clone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clone"]),
    "create": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"]),
    "dateReviver": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$date$2d$reviver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "diff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["diff"]),
    "patch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["patch"]),
    "reverse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reverse"]),
    "unpatch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unpatch"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/diffpatcher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$date$2d$reviver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/date-reviver.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DiffPatcher": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DiffPatcher"]),
    "clone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["clone"]),
    "create": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["create"]),
    "dateReviver": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dateReviver"]),
    "diff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["diff"]),
    "patch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["patch"]),
    "reverse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["reverse"]),
    "unpatch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["unpatch"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/jsondiffpatch/lib/index.js [app-rsc] (ecmascript) <exports>");
}}),
"[project]/node_modules/@ai-sdk/ui-utils/dist/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/index.ts
__turbopack_esm__({
    "asSchema": (()=>asSchema),
    "callChatApi": (()=>callChatApi),
    "callCompletionApi": (()=>callCompletionApi),
    "createChunkDecoder": (()=>createChunkDecoder),
    "formatStreamPart": (()=>formatStreamPart),
    "getTextFromDataUrl": (()=>getTextFromDataUrl),
    "isDeepEqualData": (()=>isDeepEqualData),
    "jsonSchema": (()=>jsonSchema),
    "parsePartialJson": (()=>parsePartialJson),
    "parseStreamPart": (()=>parseStreamPart),
    "processChatStream": (()=>processChatStream),
    "processDataProtocolResponse": (()=>processDataProtocolResponse),
    "readDataStream": (()=>readDataStream),
    "zodSchema": (()=>zodSchema)
});
// src/parse-partial-json.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/secure-json-parse/index.js [app-rsc] (ecmascript)");
// src/process-data-protocol-response.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@ai-sdk/ui-utils/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
// src/fix-json.ts
function fixJson(input) {
    const stack = [
        "ROOT"
    ];
    let lastValidIndex = -1;
    let literalStart = null;
    function processValueStart(char, i, swapState) {
        {
            switch(char){
                case '"':
                    {
                        lastValidIndex = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_STRING");
                        break;
                    }
                case "f":
                case "t":
                case "n":
                    {
                        lastValidIndex = i;
                        literalStart = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_LITERAL");
                        break;
                    }
                case "-":
                    {
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_NUMBER");
                        break;
                    }
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    {
                        lastValidIndex = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_NUMBER");
                        break;
                    }
                case "{":
                    {
                        lastValidIndex = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_OBJECT_START");
                        break;
                    }
                case "[":
                    {
                        lastValidIndex = i;
                        stack.pop();
                        stack.push(swapState);
                        stack.push("INSIDE_ARRAY_START");
                        break;
                    }
            }
        }
    }
    function processAfterObjectValue(char, i) {
        switch(char){
            case ",":
                {
                    stack.pop();
                    stack.push("INSIDE_OBJECT_AFTER_COMMA");
                    break;
                }
            case "}":
                {
                    lastValidIndex = i;
                    stack.pop();
                    break;
                }
        }
    }
    function processAfterArrayValue(char, i) {
        switch(char){
            case ",":
                {
                    stack.pop();
                    stack.push("INSIDE_ARRAY_AFTER_COMMA");
                    break;
                }
            case "]":
                {
                    lastValidIndex = i;
                    stack.pop();
                    break;
                }
        }
    }
    for(let i = 0; i < input.length; i++){
        const char = input[i];
        const currentState = stack[stack.length - 1];
        switch(currentState){
            case "ROOT":
                processValueStart(char, i, "FINISH");
                break;
            case "INSIDE_OBJECT_START":
                {
                    switch(char){
                        case '"':
                            {
                                stack.pop();
                                stack.push("INSIDE_OBJECT_KEY");
                                break;
                            }
                        case "}":
                            {
                                lastValidIndex = i;
                                stack.pop();
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_OBJECT_AFTER_COMMA":
                {
                    switch(char){
                        case '"':
                            {
                                stack.pop();
                                stack.push("INSIDE_OBJECT_KEY");
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_OBJECT_KEY":
                {
                    switch(char){
                        case '"':
                            {
                                stack.pop();
                                stack.push("INSIDE_OBJECT_AFTER_KEY");
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_OBJECT_AFTER_KEY":
                {
                    switch(char){
                        case ":":
                            {
                                stack.pop();
                                stack.push("INSIDE_OBJECT_BEFORE_VALUE");
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_OBJECT_BEFORE_VALUE":
                {
                    processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
                    break;
                }
            case "INSIDE_OBJECT_AFTER_VALUE":
                {
                    processAfterObjectValue(char, i);
                    break;
                }
            case "INSIDE_STRING":
                {
                    switch(char){
                        case '"':
                            {
                                stack.pop();
                                lastValidIndex = i;
                                break;
                            }
                        case "\\":
                            {
                                stack.push("INSIDE_STRING_ESCAPE");
                                break;
                            }
                        default:
                            {
                                lastValidIndex = i;
                            }
                    }
                    break;
                }
            case "INSIDE_ARRAY_START":
                {
                    switch(char){
                        case "]":
                            {
                                lastValidIndex = i;
                                stack.pop();
                                break;
                            }
                        default:
                            {
                                lastValidIndex = i;
                                processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_ARRAY_AFTER_VALUE":
                {
                    switch(char){
                        case ",":
                            {
                                stack.pop();
                                stack.push("INSIDE_ARRAY_AFTER_COMMA");
                                break;
                            }
                        case "]":
                            {
                                lastValidIndex = i;
                                stack.pop();
                                break;
                            }
                        default:
                            {
                                lastValidIndex = i;
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_ARRAY_AFTER_COMMA":
                {
                    processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
                    break;
                }
            case "INSIDE_STRING_ESCAPE":
                {
                    stack.pop();
                    lastValidIndex = i;
                    break;
                }
            case "INSIDE_NUMBER":
                {
                    switch(char){
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            {
                                lastValidIndex = i;
                                break;
                            }
                        case "e":
                        case "E":
                        case "-":
                        case ".":
                            {
                                break;
                            }
                        case ",":
                            {
                                stack.pop();
                                if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
                                    processAfterArrayValue(char, i);
                                }
                                if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
                                    processAfterObjectValue(char, i);
                                }
                                break;
                            }
                        case "}":
                            {
                                stack.pop();
                                if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
                                    processAfterObjectValue(char, i);
                                }
                                break;
                            }
                        case "]":
                            {
                                stack.pop();
                                if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
                                    processAfterArrayValue(char, i);
                                }
                                break;
                            }
                        default:
                            {
                                stack.pop();
                                break;
                            }
                    }
                    break;
                }
            case "INSIDE_LITERAL":
                {
                    const partialLiteral = input.substring(literalStart, i + 1);
                    if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
                        stack.pop();
                        if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
                            processAfterObjectValue(char, i);
                        } else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
                            processAfterArrayValue(char, i);
                        }
                    } else {
                        lastValidIndex = i;
                    }
                    break;
                }
        }
    }
    let result = input.slice(0, lastValidIndex + 1);
    for(let i = stack.length - 1; i >= 0; i--){
        const state = stack[i];
        switch(state){
            case "INSIDE_STRING":
                {
                    result += '"';
                    break;
                }
            case "INSIDE_OBJECT_KEY":
            case "INSIDE_OBJECT_AFTER_KEY":
            case "INSIDE_OBJECT_AFTER_COMMA":
            case "INSIDE_OBJECT_START":
            case "INSIDE_OBJECT_BEFORE_VALUE":
            case "INSIDE_OBJECT_AFTER_VALUE":
                {
                    result += "}";
                    break;
                }
            case "INSIDE_ARRAY_START":
            case "INSIDE_ARRAY_AFTER_COMMA":
            case "INSIDE_ARRAY_AFTER_VALUE":
                {
                    result += "]";
                    break;
                }
            case "INSIDE_LITERAL":
                {
                    const partialLiteral = input.substring(literalStart, input.length);
                    if ("true".startsWith(partialLiteral)) {
                        result += "true".slice(partialLiteral.length);
                    } else if ("false".startsWith(partialLiteral)) {
                        result += "false".slice(partialLiteral.length);
                    } else if ("null".startsWith(partialLiteral)) {
                        result += "null".slice(partialLiteral.length);
                    }
                }
        }
    }
    return result;
}
// src/parse-partial-json.ts
function parsePartialJson(jsonText) {
    if (jsonText === void 0) {
        return {
            value: void 0,
            state: "undefined-input"
        };
    }
    try {
        return {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].parse(jsonText),
            state: "successful-parse"
        };
    } catch (ignored) {
        try {
            return {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$secure$2d$json$2d$parse$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].parse(fixJson(jsonText)),
                state: "repaired-parse"
            };
        } catch (ignored2) {}
    }
    return {
        value: void 0,
        state: "failed-parse"
    };
}
// src/stream-parts.ts
var textStreamPart = {
    code: "0",
    name: "text",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"text" parts expect a string value.');
        }
        return {
            type: "text",
            value
        };
    }
};
var functionCallStreamPart = {
    code: "1",
    name: "function_call",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("function_call" in value) || typeof value.function_call !== "object" || value.function_call == null || !("name" in value.function_call) || !("arguments" in value.function_call) || typeof value.function_call.name !== "string" || typeof value.function_call.arguments !== "string") {
            throw new Error('"function_call" parts expect an object with a "function_call" property.');
        }
        return {
            type: "function_call",
            value
        };
    }
};
var dataStreamPart = {
    code: "2",
    name: "data",
    parse: (value)=>{
        if (!Array.isArray(value)) {
            throw new Error('"data" parts expect an array value.');
        }
        return {
            type: "data",
            value
        };
    }
};
var errorStreamPart = {
    code: "3",
    name: "error",
    parse: (value)=>{
        if (typeof value !== "string") {
            throw new Error('"error" parts expect a string value.');
        }
        return {
            type: "error",
            value
        };
    }
};
var assistantMessageStreamPart = {
    code: "4",
    name: "assistant_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("id" in value) || !("role" in value) || !("content" in value) || typeof value.id !== "string" || typeof value.role !== "string" || value.role !== "assistant" || !Array.isArray(value.content) || !value.content.every((item)=>item != null && typeof item === "object" && "type" in item && item.type === "text" && "text" in item && item.text != null && typeof item.text === "object" && "value" in item.text && typeof item.text.value === "string")) {
            throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
        }
        return {
            type: "assistant_message",
            value
        };
    }
};
var assistantControlDataStreamPart = {
    code: "5",
    name: "assistant_control_data",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("threadId" in value) || !("messageId" in value) || typeof value.threadId !== "string" || typeof value.messageId !== "string") {
            throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
        }
        return {
            type: "assistant_control_data",
            value: {
                threadId: value.threadId,
                messageId: value.messageId
            }
        };
    }
};
var dataMessageStreamPart = {
    code: "6",
    name: "data_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("role" in value) || !("data" in value) || typeof value.role !== "string" || value.role !== "data") {
            throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
        }
        return {
            type: "data_message",
            value
        };
    }
};
var toolCallsStreamPart = {
    code: "7",
    name: "tool_calls",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("tool_calls" in value) || typeof value.tool_calls !== "object" || value.tool_calls == null || !Array.isArray(value.tool_calls) || value.tool_calls.some((tc)=>tc == null || typeof tc !== "object" || !("id" in tc) || typeof tc.id !== "string" || !("type" in tc) || typeof tc.type !== "string" || !("function" in tc) || tc.function == null || typeof tc.function !== "object" || !("arguments" in tc.function) || typeof tc.function.name !== "string" || typeof tc.function.arguments !== "string")) {
            throw new Error('"tool_calls" parts expect an object with a ToolCallPayload.');
        }
        return {
            type: "tool_calls",
            value
        };
    }
};
var messageAnnotationsStreamPart = {
    code: "8",
    name: "message_annotations",
    parse: (value)=>{
        if (!Array.isArray(value)) {
            throw new Error('"message_annotations" parts expect an array value.');
        }
        return {
            type: "message_annotations",
            value
        };
    }
};
var toolCallStreamPart = {
    code: "9",
    name: "tool_call",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("toolName" in value) || typeof value.toolName !== "string" || !("args" in value) || typeof value.args !== "object") {
            throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
        }
        return {
            type: "tool_call",
            value
        };
    }
};
var toolResultStreamPart = {
    code: "a",
    name: "tool_result",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("result" in value)) {
            throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
        }
        return {
            type: "tool_result",
            value
        };
    }
};
var toolCallStreamingStartStreamPart = {
    code: "b",
    name: "tool_call_streaming_start",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("toolName" in value) || typeof value.toolName !== "string") {
            throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
        }
        return {
            type: "tool_call_streaming_start",
            value
        };
    }
};
var toolCallDeltaStreamPart = {
    code: "c",
    name: "tool_call_delta",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("toolCallId" in value) || typeof value.toolCallId !== "string" || !("argsTextDelta" in value) || typeof value.argsTextDelta !== "string") {
            throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
        }
        return {
            type: "tool_call_delta",
            value
        };
    }
};
var finishMessageStreamPart = {
    code: "d",
    name: "finish_message",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("finishReason" in value) || typeof value.finishReason !== "string") {
            throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
        }
        const result = {
            finishReason: value.finishReason
        };
        if ("usage" in value && value.usage != null && typeof value.usage === "object" && "promptTokens" in value.usage && "completionTokens" in value.usage) {
            result.usage = {
                promptTokens: typeof value.usage.promptTokens === "number" ? value.usage.promptTokens : Number.NaN,
                completionTokens: typeof value.usage.completionTokens === "number" ? value.usage.completionTokens : Number.NaN
            };
        }
        return {
            type: "finish_message",
            value: result
        };
    }
};
var finishStepStreamPart = {
    code: "e",
    name: "finish_step",
    parse: (value)=>{
        if (value == null || typeof value !== "object" || !("finishReason" in value) || typeof value.finishReason !== "string") {
            throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
        }
        const result = {
            finishReason: value.finishReason,
            isContinued: false
        };
        if ("usage" in value && value.usage != null && typeof value.usage === "object" && "promptTokens" in value.usage && "completionTokens" in value.usage) {
            result.usage = {
                promptTokens: typeof value.usage.promptTokens === "number" ? value.usage.promptTokens : Number.NaN,
                completionTokens: typeof value.usage.completionTokens === "number" ? value.usage.completionTokens : Number.NaN
            };
        }
        if ("isContinued" in value && typeof value.isContinued === "boolean") {
            result.isContinued = value.isContinued;
        }
        return {
            type: "finish_step",
            value: result
        };
    }
};
var streamParts = [
    textStreamPart,
    functionCallStreamPart,
    dataStreamPart,
    errorStreamPart,
    assistantMessageStreamPart,
    assistantControlDataStreamPart,
    dataMessageStreamPart,
    toolCallsStreamPart,
    messageAnnotationsStreamPart,
    toolCallStreamPart,
    toolResultStreamPart,
    toolCallStreamingStartStreamPart,
    toolCallDeltaStreamPart,
    finishMessageStreamPart,
    finishStepStreamPart
];
var streamPartsByCode = {
    [textStreamPart.code]: textStreamPart,
    [functionCallStreamPart.code]: functionCallStreamPart,
    [dataStreamPart.code]: dataStreamPart,
    [errorStreamPart.code]: errorStreamPart,
    [assistantMessageStreamPart.code]: assistantMessageStreamPart,
    [assistantControlDataStreamPart.code]: assistantControlDataStreamPart,
    [dataMessageStreamPart.code]: dataMessageStreamPart,
    [toolCallsStreamPart.code]: toolCallsStreamPart,
    [messageAnnotationsStreamPart.code]: messageAnnotationsStreamPart,
    [toolCallStreamPart.code]: toolCallStreamPart,
    [toolResultStreamPart.code]: toolResultStreamPart,
    [toolCallStreamingStartStreamPart.code]: toolCallStreamingStartStreamPart,
    [toolCallDeltaStreamPart.code]: toolCallDeltaStreamPart,
    [finishMessageStreamPart.code]: finishMessageStreamPart,
    [finishStepStreamPart.code]: finishStepStreamPart
};
var StreamStringPrefixes = {
    [textStreamPart.name]: textStreamPart.code,
    [functionCallStreamPart.name]: functionCallStreamPart.code,
    [dataStreamPart.name]: dataStreamPart.code,
    [errorStreamPart.name]: errorStreamPart.code,
    [assistantMessageStreamPart.name]: assistantMessageStreamPart.code,
    [assistantControlDataStreamPart.name]: assistantControlDataStreamPart.code,
    [dataMessageStreamPart.name]: dataMessageStreamPart.code,
    [toolCallsStreamPart.name]: toolCallsStreamPart.code,
    [messageAnnotationsStreamPart.name]: messageAnnotationsStreamPart.code,
    [toolCallStreamPart.name]: toolCallStreamPart.code,
    [toolResultStreamPart.name]: toolResultStreamPart.code,
    [toolCallStreamingStartStreamPart.name]: toolCallStreamingStartStreamPart.code,
    [toolCallDeltaStreamPart.name]: toolCallDeltaStreamPart.code,
    [finishMessageStreamPart.name]: finishMessageStreamPart.code,
    [finishStepStreamPart.name]: finishStepStreamPart.code
};
var validCodes = streamParts.map((part)=>part.code);
var parseStreamPart = (line)=>{
    const firstSeparatorIndex = line.indexOf(":");
    if (firstSeparatorIndex === -1) {
        throw new Error("Failed to parse stream string. No separator found.");
    }
    const prefix = line.slice(0, firstSeparatorIndex);
    if (!validCodes.includes(prefix)) {
        throw new Error(`Failed to parse stream string. Invalid code ${prefix}.`);
    }
    const code = prefix;
    const textValue = line.slice(firstSeparatorIndex + 1);
    const jsonValue = JSON.parse(textValue);
    return streamPartsByCode[code].parse(jsonValue);
};
function formatStreamPart(type, value) {
    const streamPart = streamParts.find((part)=>part.name === type);
    if (!streamPart) {
        throw new Error(`Invalid stream part type: ${type}`);
    }
    return `${streamPart.code}:${JSON.stringify(value)}
`;
}
// src/read-data-stream.ts
var NEWLINE = "\n".charCodeAt(0);
function concatChunks(chunks, totalLength) {
    const concatenatedChunks = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks){
        concatenatedChunks.set(chunk, offset);
        offset += chunk.length;
    }
    chunks.length = 0;
    return concatenatedChunks;
}
async function* readDataStream(reader, { isAborted } = {}) {
    const decoder = new TextDecoder();
    const chunks = [];
    let totalLength = 0;
    while(true){
        const { value } = await reader.read();
        if (value) {
            chunks.push(value);
            totalLength += value.length;
            if (value[value.length - 1] !== NEWLINE) {
                continue;
            }
        }
        if (chunks.length === 0) {
            break;
        }
        const concatenatedChunks = concatChunks(chunks, totalLength);
        totalLength = 0;
        const streamParts2 = decoder.decode(concatenatedChunks, {
            stream: true
        }).split("\n").filter((line)=>line !== "").map(parseStreamPart);
        for (const streamPart of streamParts2){
            yield streamPart;
        }
        if (isAborted == null ? void 0 : isAborted()) {
            reader.cancel();
            break;
        }
    }
}
// src/process-data-protocol-response.ts
function assignAnnotationsToMessage(message, annotations) {
    if (!message || !annotations || !annotations.length) return message;
    return {
        ...message,
        annotations: [
            ...annotations
        ]
    };
}
async function processDataProtocolResponse({ reader, abortControllerRef, update, onToolCall, onFinish, generateId: generateId2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateId"], getCurrentDate = ()=>/* @__PURE__ */ new Date() }) {
    var _a;
    const createdAt = getCurrentDate();
    let prefixMap = {};
    let nextPrefixMap = void 0;
    const previousMessages = [];
    const data = [];
    let message_annotations = void 0;
    const partialToolCalls = {};
    let usage = {
        completionTokens: NaN,
        promptTokens: NaN,
        totalTokens: NaN
    };
    let finishReason = "unknown";
    for await (const { type, value } of readDataStream(reader, {
        isAborted: ()=>(abortControllerRef == null ? void 0 : abortControllerRef.current) === null
    })){
        if (type === "error") {
            throw new Error(value);
        }
        if (type === "finish_step") {
            if (!value.isContinued) {
                nextPrefixMap = {};
            }
            continue;
        }
        if (type === "finish_message") {
            finishReason = value.finishReason;
            if (value.usage != null) {
                const { completionTokens, promptTokens } = value.usage;
                usage = {
                    completionTokens,
                    promptTokens,
                    totalTokens: completionTokens + promptTokens
                };
            }
            continue;
        }
        if (nextPrefixMap) {
            if (prefixMap.text) {
                previousMessages.push(prefixMap.text);
            }
            if (prefixMap.function_call) {
                previousMessages.push(prefixMap.function_call);
            }
            if (prefixMap.tool_calls) {
                previousMessages.push(prefixMap.tool_calls);
            }
            prefixMap = nextPrefixMap;
            nextPrefixMap = void 0;
        }
        if (type === "text") {
            if (prefixMap["text"]) {
                prefixMap["text"] = {
                    ...prefixMap["text"],
                    content: (prefixMap["text"].content || "") + value
                };
            } else {
                prefixMap["text"] = {
                    id: generateId2(),
                    role: "assistant",
                    content: value,
                    createdAt
                };
            }
        }
        if (type === "tool_call_streaming_start") {
            if (prefixMap.text == null) {
                prefixMap.text = {
                    id: generateId2(),
                    role: "assistant",
                    content: "",
                    createdAt
                };
            }
            if (prefixMap.text.toolInvocations == null) {
                prefixMap.text.toolInvocations = [];
            }
            partialToolCalls[value.toolCallId] = {
                text: "",
                toolName: value.toolName,
                prefixMapIndex: prefixMap.text.toolInvocations.length
            };
            prefixMap.text.toolInvocations.push({
                state: "partial-call",
                toolCallId: value.toolCallId,
                toolName: value.toolName,
                args: void 0
            });
        } else if (type === "tool_call_delta") {
            const partialToolCall = partialToolCalls[value.toolCallId];
            partialToolCall.text += value.argsTextDelta;
            const { value: partialArgs } = parsePartialJson(partialToolCall.text);
            prefixMap.text.toolInvocations[partialToolCall.prefixMapIndex] = {
                state: "partial-call",
                toolCallId: value.toolCallId,
                toolName: partialToolCall.toolName,
                args: partialArgs
            };
            prefixMap.text.internalUpdateId = generateId2();
        } else if (type === "tool_call") {
            if (partialToolCalls[value.toolCallId] != null) {
                prefixMap.text.toolInvocations[partialToolCalls[value.toolCallId].prefixMapIndex] = {
                    state: "call",
                    ...value
                };
            } else {
                if (prefixMap.text == null) {
                    prefixMap.text = {
                        id: generateId2(),
                        role: "assistant",
                        content: "",
                        createdAt
                    };
                }
                if (prefixMap.text.toolInvocations == null) {
                    prefixMap.text.toolInvocations = [];
                }
                prefixMap.text.toolInvocations.push({
                    state: "call",
                    ...value
                });
            }
            prefixMap.text.internalUpdateId = generateId2();
            if (onToolCall) {
                const result = await onToolCall({
                    toolCall: value
                });
                if (result != null) {
                    prefixMap.text.toolInvocations[prefixMap.text.toolInvocations.length - 1] = {
                        state: "result",
                        ...value,
                        result
                    };
                }
            }
        } else if (type === "tool_result") {
            const toolInvocations = (_a = prefixMap.text) == null ? void 0 : _a.toolInvocations;
            if (toolInvocations == null) {
                throw new Error("tool_result must be preceded by a tool_call");
            }
            const toolInvocationIndex = toolInvocations.findIndex((invocation)=>invocation.toolCallId === value.toolCallId);
            if (toolInvocationIndex === -1) {
                throw new Error("tool_result must be preceded by a tool_call with the same toolCallId");
            }
            toolInvocations[toolInvocationIndex] = {
                ...toolInvocations[toolInvocationIndex],
                state: "result",
                ...value
            };
        }
        let functionCallMessage = null;
        if (type === "function_call") {
            prefixMap["function_call"] = {
                id: generateId2(),
                role: "assistant",
                content: "",
                function_call: value.function_call,
                name: value.function_call.name,
                createdAt
            };
            functionCallMessage = prefixMap["function_call"];
        }
        let toolCallMessage = null;
        if (type === "tool_calls") {
            prefixMap["tool_calls"] = {
                id: generateId2(),
                role: "assistant",
                content: "",
                tool_calls: value.tool_calls,
                createdAt
            };
            toolCallMessage = prefixMap["tool_calls"];
        }
        if (type === "data") {
            data.push(...value);
        }
        let responseMessage = prefixMap["text"];
        if (type === "message_annotations") {
            if (!message_annotations) {
                message_annotations = [
                    ...value
                ];
            } else {
                message_annotations.push(...value);
            }
            functionCallMessage = assignAnnotationsToMessage(prefixMap["function_call"], message_annotations);
            toolCallMessage = assignAnnotationsToMessage(prefixMap["tool_calls"], message_annotations);
            responseMessage = assignAnnotationsToMessage(prefixMap["text"], message_annotations);
        }
        if (message_annotations == null ? void 0 : message_annotations.length) {
            if (prefixMap.text) {
                prefixMap.text.annotations = [
                    ...message_annotations
                ];
            }
            if (prefixMap.function_call) {
                prefixMap.function_call.annotations = [
                    ...message_annotations
                ];
            }
            if (prefixMap.tool_calls) {
                prefixMap.tool_calls.annotations = [
                    ...message_annotations
                ];
            }
        }
        const merged = [
            functionCallMessage,
            toolCallMessage,
            responseMessage
        ].filter(Boolean).map((message)=>({
                ...assignAnnotationsToMessage(message, message_annotations)
            }));
        update([
            ...previousMessages,
            ...merged
        ], [
            ...data
        ]);
    }
    onFinish == null ? void 0 : onFinish({
        message: prefixMap.text,
        finishReason,
        usage
    });
    return {
        messages: [
            prefixMap.text,
            prefixMap.function_call,
            prefixMap.tool_calls
        ].filter(Boolean),
        data
    };
}
// src/call-chat-api.ts
var getOriginalFetch = ()=>fetch;
async function callChatApi({ api, body, streamProtocol = "data", credentials, headers, abortController, restoreMessagesOnFailure, onResponse, onUpdate, onFinish, onToolCall, generateId: generateId2, fetch: fetch2 = getOriginalFetch() }) {
    var _a, _b;
    const response = await fetch2(api, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        signal: (_a = abortController == null ? void 0 : abortController()) == null ? void 0 : _a.signal,
        credentials
    }).catch((err)=>{
        restoreMessagesOnFailure();
        throw err;
    });
    if (onResponse) {
        try {
            await onResponse(response);
        } catch (err) {
            throw err;
        }
    }
    if (!response.ok) {
        restoreMessagesOnFailure();
        throw new Error((_b = await response.text()) != null ? _b : "Failed to fetch the chat response.");
    }
    if (!response.body) {
        throw new Error("The response body is empty.");
    }
    const reader = response.body.getReader();
    switch(streamProtocol){
        case "text":
            {
                const decoder = createChunkDecoder();
                const resultMessage = {
                    id: generateId2(),
                    createdAt: /* @__PURE__ */ new Date(),
                    role: "assistant",
                    content: ""
                };
                while(true){
                    const { done, value } = await reader.read();
                    if (done) {
                        break;
                    }
                    resultMessage.content += decoder(value);
                    onUpdate([
                        {
                            ...resultMessage
                        }
                    ], []);
                    if ((abortController == null ? void 0 : abortController()) === null) {
                        reader.cancel();
                        break;
                    }
                }
                onFinish == null ? void 0 : onFinish(resultMessage, {
                    usage: {
                        completionTokens: NaN,
                        promptTokens: NaN,
                        totalTokens: NaN
                    },
                    finishReason: "unknown"
                });
                return {
                    messages: [
                        resultMessage
                    ],
                    data: []
                };
            }
        case "data":
            {
                return await processDataProtocolResponse({
                    reader,
                    abortControllerRef: abortController != null ? {
                        current: abortController()
                    } : void 0,
                    update: onUpdate,
                    onToolCall,
                    onFinish ({ message, finishReason, usage }) {
                        if (onFinish && message != null) {
                            onFinish(message, {
                                usage,
                                finishReason
                            });
                        }
                    },
                    generateId: generateId2
                });
            }
        default:
            {
                const exhaustiveCheck = streamProtocol;
                throw new Error(`Unknown stream protocol: ${exhaustiveCheck}`);
            }
    }
}
// src/call-completion-api.ts
var getOriginalFetch2 = ()=>fetch;
async function callCompletionApi({ api, prompt, credentials, headers, body, streamProtocol = "data", setCompletion, setLoading, setError, setAbortController, onResponse, onFinish, onError, onData, fetch: fetch2 = getOriginalFetch2() }) {
    try {
        setLoading(true);
        setError(void 0);
        const abortController = new AbortController();
        setAbortController(abortController);
        setCompletion("");
        const res = await fetch2(api, {
            method: "POST",
            body: JSON.stringify({
                prompt,
                ...body
            }),
            credentials,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            signal: abortController.signal
        }).catch((err)=>{
            throw err;
        });
        if (onResponse) {
            try {
                await onResponse(res);
            } catch (err) {
                throw err;
            }
        }
        if (!res.ok) {
            throw new Error(await res.text() || "Failed to fetch the chat response.");
        }
        if (!res.body) {
            throw new Error("The response body is empty.");
        }
        let result = "";
        const reader = res.body.getReader();
        switch(streamProtocol){
            case "text":
                {
                    const decoder = createChunkDecoder();
                    while(true){
                        const { done, value } = await reader.read();
                        if (done) {
                            break;
                        }
                        result += decoder(value);
                        setCompletion(result);
                        if (abortController === null) {
                            reader.cancel();
                            break;
                        }
                    }
                    break;
                }
            case "data":
                {
                    for await (const { type, value } of readDataStream(reader, {
                        isAborted: ()=>abortController === null
                    })){
                        switch(type){
                            case "text":
                                {
                                    result += value;
                                    setCompletion(result);
                                    break;
                                }
                            case "data":
                                {
                                    onData == null ? void 0 : onData(value);
                                    break;
                                }
                        }
                    }
                    break;
                }
            default:
                {
                    const exhaustiveCheck = streamProtocol;
                    throw new Error(`Unknown stream protocol: ${exhaustiveCheck}`);
                }
        }
        if (onFinish) {
            onFinish(prompt, result);
        }
        setAbortController(null);
        return result;
    } catch (err) {
        if (err.name === "AbortError") {
            setAbortController(null);
            return null;
        }
        if (err instanceof Error) {
            if (onError) {
                onError(err);
            }
        }
        setError(err);
    } finally{
        setLoading(false);
    }
}
// src/create-chunk-decoder.ts
function createChunkDecoder(complex) {
    const decoder = new TextDecoder();
    if (!complex) {
        return function(chunk) {
            if (!chunk) return "";
            return decoder.decode(chunk, {
                stream: true
            });
        };
    }
    return function(chunk) {
        const decoded = decoder.decode(chunk, {
            stream: true
        }).split("\n").filter((line)=>line !== "");
        return decoded.map(parseStreamPart).filter(Boolean);
    };
}
// src/data-url.ts
function getTextFromDataUrl(dataUrl) {
    const [header, base64Content] = dataUrl.split(",");
    const mimeType = header.split(";")[0].split(":")[1];
    if (mimeType == null || base64Content == null) {
        throw new Error("Invalid data URL format");
    }
    try {
        return window.atob(base64Content);
    } catch (error) {
        throw new Error(`Error decoding data URL`);
    }
}
// src/is-deep-equal-data.ts
function isDeepEqualData(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 == null || obj2 == null) return false;
    if (typeof obj1 !== "object" && typeof obj2 !== "object") return obj1 === obj2;
    if (obj1.constructor !== obj2.constructor) return false;
    if (obj1 instanceof Date && obj2 instanceof Date) {
        return obj1.getTime() === obj2.getTime();
    }
    if (Array.isArray(obj1)) {
        if (obj1.length !== obj2.length) return false;
        for(let i = 0; i < obj1.length; i++){
            if (!isDeepEqualData(obj1[i], obj2[i])) return false;
        }
        return true;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1){
        if (!keys2.includes(key)) return false;
        if (!isDeepEqualData(obj1[key], obj2[key])) return false;
    }
    return true;
}
// src/process-chat-stream.ts
async function processChatStream({ getStreamedResponse, experimental_onFunctionCall, experimental_onToolCall, updateChatRequest, getCurrentMessages }) {
    while(true){
        const messagesAndDataOrJustMessage = await getStreamedResponse();
        if ("messages" in messagesAndDataOrJustMessage) {
            let hasFollowingResponse = false;
            for (const message of messagesAndDataOrJustMessage.messages){
                if ((message.function_call === void 0 || typeof message.function_call === "string") && (message.tool_calls === void 0 || typeof message.tool_calls === "string")) {
                    continue;
                }
                hasFollowingResponse = true;
                if (experimental_onFunctionCall) {
                    const functionCall = message.function_call;
                    if (typeof functionCall !== "object") {
                        console.warn("experimental_onFunctionCall should not be defined when using tools");
                        continue;
                    }
                    const functionCallResponse = await experimental_onFunctionCall(getCurrentMessages(), functionCall);
                    if (functionCallResponse === void 0) {
                        hasFollowingResponse = false;
                        break;
                    }
                    updateChatRequest(functionCallResponse);
                }
                if (experimental_onToolCall) {
                    const toolCalls = message.tool_calls;
                    if (!Array.isArray(toolCalls) || toolCalls.some((toolCall)=>typeof toolCall !== "object")) {
                        console.warn("experimental_onToolCall should not be defined when using tools");
                        continue;
                    }
                    const toolCallResponse = await experimental_onToolCall(getCurrentMessages(), toolCalls);
                    if (toolCallResponse === void 0) {
                        hasFollowingResponse = false;
                        break;
                    }
                    updateChatRequest(toolCallResponse);
                }
            }
            if (!hasFollowingResponse) {
                break;
            }
        } else {
            let fixFunctionCallArguments2 = function(response) {
                for (const message of response.messages){
                    if (message.tool_calls !== void 0) {
                        for (const toolCall of message.tool_calls){
                            if (typeof toolCall === "object") {
                                if (toolCall.function.arguments && typeof toolCall.function.arguments !== "string") {
                                    toolCall.function.arguments = JSON.stringify(toolCall.function.arguments);
                                }
                            }
                        }
                    }
                    if (message.function_call !== void 0) {
                        if (typeof message.function_call === "object") {
                            if (message.function_call.arguments && typeof message.function_call.arguments !== "string") {
                                message.function_call.arguments = JSON.stringify(message.function_call.arguments);
                            }
                        }
                    }
                }
            };
            var fixFunctionCallArguments = fixFunctionCallArguments2;
            const streamedResponseMessage = messagesAndDataOrJustMessage;
            if ((streamedResponseMessage.function_call === void 0 || typeof streamedResponseMessage.function_call === "string") && (streamedResponseMessage.tool_calls === void 0 || typeof streamedResponseMessage.tool_calls === "string")) {
                break;
            }
            if (experimental_onFunctionCall) {
                const functionCall = streamedResponseMessage.function_call;
                if (!(typeof functionCall === "object")) {
                    console.warn("experimental_onFunctionCall should not be defined when using tools");
                    continue;
                }
                const functionCallResponse = await experimental_onFunctionCall(getCurrentMessages(), functionCall);
                if (functionCallResponse === void 0) break;
                fixFunctionCallArguments2(functionCallResponse);
                updateChatRequest(functionCallResponse);
            }
            if (experimental_onToolCall) {
                const toolCalls = streamedResponseMessage.tool_calls;
                if (!(typeof toolCalls === "object")) {
                    console.warn("experimental_onToolCall should not be defined when using functions");
                    continue;
                }
                const toolCallResponse = await experimental_onToolCall(getCurrentMessages(), toolCalls);
                if (toolCallResponse === void 0) break;
                fixFunctionCallArguments2(toolCallResponse);
                updateChatRequest(toolCallResponse);
            }
        }
    }
}
;
;
var schemaSymbol = Symbol.for("vercel.ai.schema");
function jsonSchema(jsonSchema2, { validate } = {}) {
    return {
        [schemaSymbol]: true,
        _type: void 0,
        // should never be used directly
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validatorSymbol"]]: true,
        jsonSchema: jsonSchema2,
        validate
    };
}
function isSchema(value) {
    return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
    return isSchema(schema) ? schema : zodSchema(schema);
}
function zodSchema(zodSchema2) {
    return jsonSchema(// we assume that zodToJsonSchema will return a valid JSONSchema7:
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$ui$2d$utils$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(zodSchema2), {
        validate: (value)=>{
            const result = zodSchema2.safeParse(value);
            return result.success ? {
                success: true,
                value: result.data
            } : {
                success: false,
                error: result.error
            };
        }
    });
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b":"invalidateCacheAction"} */ __turbopack_esm__({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b", null);
}}),
"[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
}}),
"[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "60bef7060baf47025657460ea0f838dc815bfb4662": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generate"]),
    "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "60bef7060baf47025657460ea0f838dc815bfb4662": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["60bef7060baf47025657460ea0f838dc815bfb4662"]),
    "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$protected$292f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(protected)/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(protected)/dashboard/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_8d0434._.js.map