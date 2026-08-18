import {
  require_auth_errors,
  require_token_error,
  require_token_util
} from "./chunk-WYIMKSRR.mjs";
import {
  EventSourceParserStream,
  SpanStatusCode,
  ZodFirstPartyTypeKind,
  context,
  external_exports,
  init_esm as init_esm2,
  trace
} from "./chunk-NF3ZSPTK.mjs";
import {
  __commonJS,
  __export,
  __name,
  __toESM,
  init_esm
} from "./chunk-FUV6SSYK.mjs";

// node_modules/@vercel/oidc/dist/get-context.js
var require_get_context = __commonJS({
  "node_modules/@vercel/oidc/dist/get-context.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name21 in all)
        __defProp2(target, name21, { get: all[name21], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var get_context_exports = {};
    __export3(get_context_exports, {
      SYMBOL_FOR_REQ_CONTEXT: /* @__PURE__ */ __name(() => SYMBOL_FOR_REQ_CONTEXT, "SYMBOL_FOR_REQ_CONTEXT"),
      getContext: /* @__PURE__ */ __name(() => getContext3, "getContext")
    });
    module.exports = __toCommonJS(get_context_exports);
    var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
    function getContext3() {
      const fromSymbol = globalThis;
      return fromSymbol[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
    }
    __name(getContext3, "getContext");
  }
});

// node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js
var require_get_vercel_oidc_token = __commonJS({
  "node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name21 in all)
        __defProp2(target, name21, { get: all[name21], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var get_vercel_oidc_token_exports = {};
    __export3(get_vercel_oidc_token_exports, {
      getVercelOidcToken: /* @__PURE__ */ __name(() => getVercelOidcToken3, "getVercelOidcToken"),
      getVercelOidcTokenSync: /* @__PURE__ */ __name(() => getVercelOidcTokenSync2, "getVercelOidcTokenSync")
    });
    module.exports = __toCommonJS(get_vercel_oidc_token_exports);
    var import_get_context = require_get_context();
    var import_token_error = require_token_error();
    async function getVercelOidcToken3(options) {
      let token = "";
      let err;
      try {
        token = getVercelOidcTokenSync2();
      } catch (error40) {
        err = error40;
      }
      try {
        const [{ getTokenPayload, isExpired }, { refreshToken }] = await Promise.all([
          await import("./token-util-IUBHSHTL.mjs"),
          await import("./token-4I67MSTY.mjs")
        ]);
        if (!token || isExpired(getTokenPayload(token), options?.expirationBufferMs)) {
          await refreshToken(options);
          token = getVercelOidcTokenSync2();
        }
      } catch (error40) {
        let message = err instanceof Error ? err.message : "";
        if (error40 instanceof Error) {
          message = `${message}
${error40.message}`;
        }
        if (message) {
          throw new import_token_error.VercelOidcTokenError(message);
        }
        throw error40;
      }
      return token;
    }
    __name(getVercelOidcToken3, "getVercelOidcToken");
    function getVercelOidcTokenSync2() {
      const token = (0, import_get_context.getContext)().headers?.["x-vercel-oidc-token"] ?? process.env.VERCEL_OIDC_TOKEN;
      if (!token) {
        throw new Error(
          `The 'x-vercel-oidc-token' header is missing from the request. Do you have the OIDC option enabled in the Vercel project settings?`
        );
      }
      return token;
    }
    __name(getVercelOidcTokenSync2, "getVercelOidcTokenSync");
  }
});

// node_modules/@vercel/oidc/dist/index.js
var require_dist = __commonJS({
  "node_modules/@vercel/oidc/dist/index.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export3 = /* @__PURE__ */ __name((target, all) => {
      for (var name21 in all)
        __defProp2(target, name21, { get: all[name21], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export3(src_exports, {
      AccessTokenMissingError: /* @__PURE__ */ __name(() => import_auth_errors.AccessTokenMissingError, "AccessTokenMissingError"),
      RefreshAccessTokenFailedError: /* @__PURE__ */ __name(() => import_auth_errors.RefreshAccessTokenFailedError, "RefreshAccessTokenFailedError"),
      getContext: /* @__PURE__ */ __name(() => import_get_context.getContext, "getContext"),
      getVercelOidcToken: /* @__PURE__ */ __name(() => import_get_vercel_oidc_token.getVercelOidcToken, "getVercelOidcToken"),
      getVercelOidcTokenSync: /* @__PURE__ */ __name(() => import_get_vercel_oidc_token.getVercelOidcTokenSync, "getVercelOidcTokenSync"),
      getVercelToken: /* @__PURE__ */ __name(() => import_token_util.getVercelToken, "getVercelToken")
    });
    module.exports = __toCommonJS(src_exports);
    var import_get_vercel_oidc_token = require_get_vercel_oidc_token();
    var import_get_context = require_get_context();
    var import_auth_errors = require_auth_errors();
    var import_token_util = require_token_util();
  }
});

// node_modules/@ai-sdk/provider-utils/dist/index.mjs
init_esm();

// node_modules/@ai-sdk/provider/dist/index.mjs
init_esm();
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _b;
var AISDKError = class _AISDKError extends (_b = Error, _a = symbol, _b) {
  static {
    __name(this, "_AISDKError");
  }
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: name143,
    message,
    cause
  }) {
    super(message);
    this[_a] = true;
    this.name = name143;
    this.cause = cause;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(error40) {
    return _AISDKError.hasMarker(error40, marker);
  }
  static hasMarker(error40, marker153) {
    const markerSymbol = Symbol.for(marker153);
    return error40 != null && typeof error40 === "object" && markerSymbol in error40 && typeof error40[markerSymbol] === "boolean" && error40[markerSymbol] === true;
  }
};
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var _b2;
var APICallError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
  static {
    __name(this, "APICallError");
  }
  constructor({
    message,
    url: url2,
    requestBodyValues,
    statusCode,
    responseHeaders,
    responseBody,
    cause,
    isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500),
    // server error
    data
  }) {
    super({ name, message, cause });
    this[_a2] = true;
    this.url = url2;
    this.requestBodyValues = requestBodyValues;
    this.statusCode = statusCode;
    this.responseHeaders = responseHeaders;
    this.responseBody = responseBody;
    this.isRetryable = isRetryable;
    this.data = data;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker2);
  }
};
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var _b3;
var EmptyResponseBodyError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
  static {
    __name(this, "EmptyResponseBodyError");
  }
  // used in isInstance
  constructor({ message = "Empty response body" } = {}) {
    super({ name: name2, message });
    this[_a3] = true;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker3);
  }
};
function getErrorMessage(error40) {
  if (error40 == null) {
    return "unknown error";
  }
  if (typeof error40 === "string") {
    return error40;
  }
  if (error40 instanceof Error) {
    return error40.message;
  }
  return JSON.stringify(error40);
}
__name(getErrorMessage, "getErrorMessage");
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var _b4;
var InvalidArgumentError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
  static {
    __name(this, "InvalidArgumentError");
  }
  constructor({
    message,
    cause,
    argument
  }) {
    super({ name: name3, message, cause });
    this[_a4] = true;
    this.argument = argument;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker4);
  }
};
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var _b5;
var InvalidPromptError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
  static {
    __name(this, "InvalidPromptError");
  }
  constructor({
    prompt,
    message,
    cause
  }) {
    super({ name: name4, message: `Invalid prompt: ${message}`, cause });
    this[_a5] = true;
    this.prompt = prompt;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker5);
  }
};
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var _b6;
var InvalidResponseDataError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
  static {
    __name(this, "InvalidResponseDataError");
  }
  constructor({
    data,
    message = `Invalid response data: ${JSON.stringify(data)}.`
  }) {
    super({ name: name5, message });
    this[_a6] = true;
    this.data = data;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker6);
  }
};
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var _b7;
var JSONParseError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
  static {
    __name(this, "JSONParseError");
  }
  constructor({ text: text2, cause }) {
    super({
      name: name6,
      message: `JSON parsing failed: Text: ${text2}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a7] = true;
    this.text = text2;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker7);
  }
};
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var _b8;
var LoadAPIKeyError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
  static {
    __name(this, "LoadAPIKeyError");
  }
  // used in isInstance
  constructor({ message }) {
    super({ name: name7, message });
    this[_a8] = true;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker8);
  }
};
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var _b9;
var LoadSettingError = class extends (_b9 = AISDKError, _a9 = symbol9, _b9) {
  static {
    __name(this, "LoadSettingError");
  }
  // used in isInstance
  constructor({ message }) {
    super({ name: name8, message });
    this[_a9] = true;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker9);
  }
};
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var _b10;
var NoContentGeneratedError = class extends (_b10 = AISDKError, _a10 = symbol10, _b10) {
  static {
    __name(this, "NoContentGeneratedError");
  }
  // used in isInstance
  constructor({
    message = "No content generated."
  } = {}) {
    super({ name: name9, message });
    this[_a10] = true;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker10);
  }
};
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var _b11;
var NoSuchModelError = class extends (_b11 = AISDKError, _a11 = symbol11, _b11) {
  static {
    __name(this, "NoSuchModelError");
  }
  constructor({
    errorName = name10,
    modelId,
    modelType,
    message = `No such ${modelType}: ${modelId}`
  }) {
    super({ name: errorName, message });
    this[_a11] = true;
    this.modelId = modelId;
    this.modelType = modelType;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker11);
  }
};
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var _b12;
var TooManyEmbeddingValuesForCallError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
  static {
    __name(this, "TooManyEmbeddingValuesForCallError");
  }
  constructor(options) {
    super({
      name: name11,
      message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
    });
    this[_a12] = true;
    this.provider = options.provider;
    this.modelId = options.modelId;
    this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
    this.values = options.values;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker12);
  }
};
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _b13;
var TypeValidationError = class _TypeValidationError extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
  static {
    __name(this, "_TypeValidationError");
  }
  constructor({
    value,
    cause,
    context: context2
  }) {
    let contextPrefix = "Type validation failed";
    if (context2 == null ? void 0 : context2.field) {
      contextPrefix += ` for ${context2.field}`;
    }
    if ((context2 == null ? void 0 : context2.entityName) || (context2 == null ? void 0 : context2.entityId)) {
      contextPrefix += " (";
      const parts = [];
      if (context2.entityName) {
        parts.push(context2.entityName);
      }
      if (context2.entityId) {
        parts.push(`id: "${context2.entityId}"`);
      }
      contextPrefix += parts.join(", ");
      contextPrefix += ")";
    }
    super({
      name: name12,
      message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a13] = true;
    this.value = value;
    this.context = context2;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker13);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value and context, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @param {TypeValidationContext} params.context - Optional context about what is being validated.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value,
    cause,
    context: context2
  }) {
    var _a153, _b152, _c;
    if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a153 = cause.context) == null ? void 0 : _a153.field) === (context2 == null ? void 0 : context2.field) && ((_b152 = cause.context) == null ? void 0 : _b152.entityName) === (context2 == null ? void 0 : context2.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context2 == null ? void 0 : context2.entityId)) {
      return cause;
    }
    return new _TypeValidationError({ value, cause, context: context2 });
  }
};
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var _b14;
var UnsupportedFunctionalityError = class extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
  static {
    __name(this, "UnsupportedFunctionalityError");
  }
  constructor({
    functionality,
    message = `'${functionality}' functionality not supported.`
  }) {
    super({ name: name13, message });
    this[_a14] = true;
    this.functionality = functionality;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker14);
  }
};

// node_modules/zod/v4/classic/index.js
init_esm();

// node_modules/zod/v4/classic/external.js
var external_exports2 = {};
__export(external_exports2, {
  $brand: () => $brand,
  $input: () => $input,
  $output: () => $output,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBase64: () => ZodBase64,
  ZodBase64URL: () => ZodBase64URL,
  ZodBigInt: () => ZodBigInt,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBoolean: () => ZodBoolean,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCUID: () => ZodCUID,
  ZodCUID2: () => ZodCUID2,
  ZodCatch: () => ZodCatch,
  ZodCustom: () => ZodCustom,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodE164: () => ZodE164,
  ZodEmail: () => ZodEmail,
  ZodEmoji: () => ZodEmoji,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFile: () => ZodFile,
  ZodGUID: () => ZodGUID,
  ZodIPv4: () => ZodIPv4,
  ZodIPv6: () => ZodIPv6,
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodJWT: () => ZodJWT,
  ZodKSUID: () => ZodKSUID,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNanoID: () => ZodNanoID,
  ZodNever: () => ZodNever,
  ZodNonOptional: () => ZodNonOptional,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodPipe: () => ZodPipe,
  ZodPrefault: () => ZodPrefault,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRealError: () => ZodRealError,
  ZodRecord: () => ZodRecord,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodStringFormat: () => ZodStringFormat,
  ZodSuccess: () => ZodSuccess,
  ZodSymbol: () => ZodSymbol,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodTransform: () => ZodTransform,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodULID: () => ZodULID,
  ZodURL: () => ZodURL,
  ZodUUID: () => ZodUUID,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  ZodXID: () => ZodXID,
  _ZodString: () => _ZodString,
  _default: () => _default2,
  any: () => any,
  array: () => array,
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => _catch2,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  clone: () => clone,
  coerce: () => coerce_exports,
  config: () => config,
  core: () => core_exports2,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date3,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
  endsWith: () => _endsWith,
  enum: () => _enum2,
  file: () => file,
  flattenError: () => flattenError,
  float32: () => float32,
  float64: () => float64,
  formatError: () => formatError,
  function: () => _function,
  getErrorMap: () => getErrorMap,
  globalRegistry: () => globalRegistry,
  gt: () => _gt,
  gte: () => _gte,
  guid: () => guid2,
  includes: () => _includes,
  instanceof: () => _instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  iso: () => iso_exports,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => lazy,
  length: () => _length,
  literal: () => literal,
  locales: () => locales_exports,
  looseObject: () => looseObject,
  lowercase: () => _lowercase,
  lt: () => _lt,
  lte: () => _lte,
  map: () => map,
  maxLength: () => _maxLength,
  maxSize: () => _maxSize,
  mime: () => _mime,
  minLength: () => _minLength,
  minSize: () => _minSize,
  multipleOf: () => _multipleOf,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  negative: () => _negative,
  never: () => never,
  nonnegative: () => _nonnegative,
  nonoptional: () => nonoptional,
  nonpositive: () => _nonpositive,
  normalize: () => _normalize,
  null: () => _null3,
  nullable: () => nullable,
  nullish: () => nullish2,
  number: () => number2,
  object: () => object,
  optional: () => optional,
  overwrite: () => _overwrite,
  parse: () => parse2,
  parseAsync: () => parseAsync2,
  partialRecord: () => partialRecord,
  pipe: () => pipe,
  positive: () => _positive,
  prefault: () => prefault,
  preprocess: () => preprocess,
  prettifyError: () => prettifyError,
  promise: () => promise,
  property: () => _property,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  regex: () => _regex,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeParse: () => safeParse2,
  safeParseAsync: () => safeParseAsync2,
  set: () => set,
  setErrorMap: () => setErrorMap,
  size: () => _size,
  startsWith: () => _startsWith,
  strictObject: () => strictObject,
  string: () => string2,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol15,
  templateLiteral: () => templateLiteral,
  toJSONSchema: () => toJSONSchema,
  toLowerCase: () => _toLowerCase,
  toUpperCase: () => _toUpperCase,
  transform: () => transform,
  treeifyError: () => treeifyError,
  trim: () => _trim,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid2,
  undefined: () => _undefined3,
  union: () => union,
  unknown: () => unknown,
  uppercase: () => _uppercase,
  url: () => url,
  uuid: () => uuid2,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  void: () => _void2,
  xid: () => xid2
});
init_esm();

// node_modules/zod/v4/core/index.js
var core_exports2 = {};
__export(core_exports2, {
  $ZodAny: () => $ZodAny,
  $ZodArray: () => $ZodArray,
  $ZodAsyncError: () => $ZodAsyncError,
  $ZodBase64: () => $ZodBase64,
  $ZodBase64URL: () => $ZodBase64URL,
  $ZodBigInt: () => $ZodBigInt,
  $ZodBigIntFormat: () => $ZodBigIntFormat,
  $ZodBoolean: () => $ZodBoolean,
  $ZodCIDRv4: () => $ZodCIDRv4,
  $ZodCIDRv6: () => $ZodCIDRv6,
  $ZodCUID: () => $ZodCUID,
  $ZodCUID2: () => $ZodCUID2,
  $ZodCatch: () => $ZodCatch,
  $ZodCheck: () => $ZodCheck,
  $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
  $ZodCheckEndsWith: () => $ZodCheckEndsWith,
  $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
  $ZodCheckIncludes: () => $ZodCheckIncludes,
  $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
  $ZodCheckLessThan: () => $ZodCheckLessThan,
  $ZodCheckLowerCase: () => $ZodCheckLowerCase,
  $ZodCheckMaxLength: () => $ZodCheckMaxLength,
  $ZodCheckMaxSize: () => $ZodCheckMaxSize,
  $ZodCheckMimeType: () => $ZodCheckMimeType,
  $ZodCheckMinLength: () => $ZodCheckMinLength,
  $ZodCheckMinSize: () => $ZodCheckMinSize,
  $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
  $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
  $ZodCheckOverwrite: () => $ZodCheckOverwrite,
  $ZodCheckProperty: () => $ZodCheckProperty,
  $ZodCheckRegex: () => $ZodCheckRegex,
  $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
  $ZodCheckStartsWith: () => $ZodCheckStartsWith,
  $ZodCheckStringFormat: () => $ZodCheckStringFormat,
  $ZodCheckUpperCase: () => $ZodCheckUpperCase,
  $ZodCustom: () => $ZodCustom,
  $ZodCustomStringFormat: () => $ZodCustomStringFormat,
  $ZodDate: () => $ZodDate,
  $ZodDefault: () => $ZodDefault,
  $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
  $ZodE164: () => $ZodE164,
  $ZodEmail: () => $ZodEmail,
  $ZodEmoji: () => $ZodEmoji,
  $ZodEnum: () => $ZodEnum,
  $ZodError: () => $ZodError,
  $ZodFile: () => $ZodFile,
  $ZodFunction: () => $ZodFunction,
  $ZodGUID: () => $ZodGUID,
  $ZodIPv4: () => $ZodIPv4,
  $ZodIPv6: () => $ZodIPv6,
  $ZodISODate: () => $ZodISODate,
  $ZodISODateTime: () => $ZodISODateTime,
  $ZodISODuration: () => $ZodISODuration,
  $ZodISOTime: () => $ZodISOTime,
  $ZodIntersection: () => $ZodIntersection,
  $ZodJWT: () => $ZodJWT,
  $ZodKSUID: () => $ZodKSUID,
  $ZodLazy: () => $ZodLazy,
  $ZodLiteral: () => $ZodLiteral,
  $ZodMap: () => $ZodMap,
  $ZodNaN: () => $ZodNaN,
  $ZodNanoID: () => $ZodNanoID,
  $ZodNever: () => $ZodNever,
  $ZodNonOptional: () => $ZodNonOptional,
  $ZodNull: () => $ZodNull,
  $ZodNullable: () => $ZodNullable,
  $ZodNumber: () => $ZodNumber,
  $ZodNumberFormat: () => $ZodNumberFormat,
  $ZodObject: () => $ZodObject,
  $ZodOptional: () => $ZodOptional,
  $ZodPipe: () => $ZodPipe,
  $ZodPrefault: () => $ZodPrefault,
  $ZodPromise: () => $ZodPromise,
  $ZodReadonly: () => $ZodReadonly,
  $ZodRealError: () => $ZodRealError,
  $ZodRecord: () => $ZodRecord,
  $ZodRegistry: () => $ZodRegistry,
  $ZodSet: () => $ZodSet,
  $ZodString: () => $ZodString,
  $ZodStringFormat: () => $ZodStringFormat,
  $ZodSuccess: () => $ZodSuccess,
  $ZodSymbol: () => $ZodSymbol,
  $ZodTemplateLiteral: () => $ZodTemplateLiteral,
  $ZodTransform: () => $ZodTransform,
  $ZodTuple: () => $ZodTuple,
  $ZodType: () => $ZodType,
  $ZodULID: () => $ZodULID,
  $ZodURL: () => $ZodURL,
  $ZodUUID: () => $ZodUUID,
  $ZodUndefined: () => $ZodUndefined,
  $ZodUnion: () => $ZodUnion,
  $ZodUnknown: () => $ZodUnknown,
  $ZodVoid: () => $ZodVoid,
  $ZodXID: () => $ZodXID,
  $brand: () => $brand,
  $constructor: () => $constructor,
  $input: () => $input,
  $output: () => $output,
  Doc: () => Doc,
  JSONSchema: () => json_schema_exports,
  JSONSchemaGenerator: () => JSONSchemaGenerator,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  _any: () => _any,
  _array: () => _array,
  _base64: () => _base64,
  _base64url: () => _base64url,
  _bigint: () => _bigint,
  _boolean: () => _boolean,
  _catch: () => _catch,
  _cidrv4: () => _cidrv4,
  _cidrv6: () => _cidrv6,
  _coercedBigint: () => _coercedBigint,
  _coercedBoolean: () => _coercedBoolean,
  _coercedDate: () => _coercedDate,
  _coercedNumber: () => _coercedNumber,
  _coercedString: () => _coercedString,
  _cuid: () => _cuid,
  _cuid2: () => _cuid2,
  _custom: () => _custom,
  _date: () => _date,
  _default: () => _default,
  _discriminatedUnion: () => _discriminatedUnion,
  _e164: () => _e164,
  _email: () => _email,
  _emoji: () => _emoji2,
  _endsWith: () => _endsWith,
  _enum: () => _enum,
  _file: () => _file,
  _float32: () => _float32,
  _float64: () => _float64,
  _gt: () => _gt,
  _gte: () => _gte,
  _guid: () => _guid,
  _includes: () => _includes,
  _int: () => _int,
  _int32: () => _int32,
  _int64: () => _int64,
  _intersection: () => _intersection,
  _ipv4: () => _ipv4,
  _ipv6: () => _ipv6,
  _isoDate: () => _isoDate,
  _isoDateTime: () => _isoDateTime,
  _isoDuration: () => _isoDuration,
  _isoTime: () => _isoTime,
  _jwt: () => _jwt,
  _ksuid: () => _ksuid,
  _lazy: () => _lazy,
  _length: () => _length,
  _literal: () => _literal,
  _lowercase: () => _lowercase,
  _lt: () => _lt,
  _lte: () => _lte,
  _map: () => _map,
  _max: () => _lte,
  _maxLength: () => _maxLength,
  _maxSize: () => _maxSize,
  _mime: () => _mime,
  _min: () => _gte,
  _minLength: () => _minLength,
  _minSize: () => _minSize,
  _multipleOf: () => _multipleOf,
  _nan: () => _nan,
  _nanoid: () => _nanoid,
  _nativeEnum: () => _nativeEnum,
  _negative: () => _negative,
  _never: () => _never,
  _nonnegative: () => _nonnegative,
  _nonoptional: () => _nonoptional,
  _nonpositive: () => _nonpositive,
  _normalize: () => _normalize,
  _null: () => _null2,
  _nullable: () => _nullable,
  _number: () => _number,
  _optional: () => _optional,
  _overwrite: () => _overwrite,
  _parse: () => _parse,
  _parseAsync: () => _parseAsync,
  _pipe: () => _pipe,
  _positive: () => _positive,
  _promise: () => _promise,
  _property: () => _property,
  _readonly: () => _readonly,
  _record: () => _record,
  _refine: () => _refine,
  _regex: () => _regex,
  _safeParse: () => _safeParse,
  _safeParseAsync: () => _safeParseAsync,
  _set: () => _set,
  _size: () => _size,
  _startsWith: () => _startsWith,
  _string: () => _string,
  _stringFormat: () => _stringFormat,
  _stringbool: () => _stringbool,
  _success: () => _success,
  _symbol: () => _symbol,
  _templateLiteral: () => _templateLiteral,
  _toLowerCase: () => _toLowerCase,
  _toUpperCase: () => _toUpperCase,
  _transform: () => _transform,
  _trim: () => _trim,
  _tuple: () => _tuple,
  _uint32: () => _uint32,
  _uint64: () => _uint64,
  _ulid: () => _ulid,
  _undefined: () => _undefined2,
  _union: () => _union,
  _unknown: () => _unknown,
  _uppercase: () => _uppercase,
  _url: () => _url,
  _uuid: () => _uuid,
  _uuidv4: () => _uuidv4,
  _uuidv6: () => _uuidv6,
  _uuidv7: () => _uuidv7,
  _void: () => _void,
  _xid: () => _xid,
  clone: () => clone,
  config: () => config,
  flattenError: () => flattenError,
  formatError: () => formatError,
  function: () => _function,
  globalConfig: () => globalConfig,
  globalRegistry: () => globalRegistry,
  isValidBase64: () => isValidBase64,
  isValidBase64URL: () => isValidBase64URL,
  isValidJWT: () => isValidJWT,
  locales: () => locales_exports,
  parse: () => parse,
  parseAsync: () => parseAsync,
  prettifyError: () => prettifyError,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  toDotPath: () => toDotPath,
  toJSONSchema: () => toJSONSchema,
  treeifyError: () => treeifyError,
  util: () => util_exports,
  version: () => version
});
init_esm();

// node_modules/zod/v4/core/core.js
init_esm();
var NEVER = Object.freeze({
  status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor(name21, initializer3, params) {
  function init(inst, def) {
    var _a21;
    Object.defineProperty(inst, "_zod", {
      value: inst._zod ?? {},
      enumerable: false
    });
    (_a21 = inst._zod).traits ?? (_a21.traits = /* @__PURE__ */ new Set());
    inst._zod.traits.add(name21);
    initializer3(inst, def);
    for (const k in _.prototype) {
      if (!(k in inst))
        Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
    }
    inst._zod.constr = _;
    inst._zod.def = def;
  }
  __name(init, "init");
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
    static {
      __name(this, "Definition");
    }
  }
  Object.defineProperty(Definition, "name", { value: name21 });
  function _(def) {
    var _a21;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a21 = inst._zod).deferred ?? (_a21.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  __name(_, "_");
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: /* @__PURE__ */ __name((inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name21);
    }, "value")
  });
  Object.defineProperty(_, "name", { value: name21 });
  return _;
}
__name($constructor, "$constructor");
var $brand = Symbol("zod_brand");
var $ZodAsyncError = class extends Error {
  static {
    __name(this, "$ZodAsyncError");
  }
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
};
var globalConfig = {};
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
__name(config, "config");

// node_modules/zod/v4/core/parse.js
init_esm();

// node_modules/zod/v4/core/errors.js
init_esm();

// node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  merge: () => merge,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  required: () => required,
  stringifyPrimitive: () => stringifyPrimitive,
  unwrapMessage: () => unwrapMessage
});
init_esm();
function assertEqual(val) {
  return val;
}
__name(assertEqual, "assertEqual");
function assertNotEqual(val) {
  return val;
}
__name(assertNotEqual, "assertNotEqual");
function assertIs(_arg) {
}
__name(assertIs, "assertIs");
function assertNever(_x) {
  throw new Error();
}
__name(assertNever, "assertNever");
function assert(_) {
}
__name(assert, "assert");
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
__name(getEnumValues, "getEnumValues");
function joinValues(array3, separator = "|") {
  return array3.map((val) => stringifyPrimitive(val)).join(separator);
}
__name(joinValues, "joinValues");
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
__name(jsonStringifyReplacer, "jsonStringifyReplacer");
function cached(getter) {
  const set2 = false;
  return {
    get value() {
      if (!set2) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
__name(cached, "cached");
function nullish(input) {
  return input === null || input === void 0;
}
__name(nullish, "nullish");
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
__name(cleanRegex, "cleanRegex");
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
__name(floatSafeRemainder, "floatSafeRemainder");
function defineLazy(object3, key, getter) {
  const set2 = false;
  Object.defineProperty(object3, key, {
    get() {
      if (!set2) {
        const value = getter();
        object3[key] = value;
        return value;
      }
      throw new Error("cached value already set");
    },
    set(v) {
      Object.defineProperty(object3, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
__name(defineLazy, "defineLazy");
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
__name(assignProp, "assignProp");
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
__name(getElementAtPath, "getElementAtPath");
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
__name(promiseAllObject, "promiseAllObject");
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
__name(randomString, "randomString");
function esc(str) {
  return JSON.stringify(str);
}
__name(esc, "esc");
var captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
__name(isObject, "isObject");
var allowsEval = cached(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
__name(isPlainObject, "isPlainObject");
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
__name(numKeys, "numKeys");
var getParsedType = /* @__PURE__ */ __name((data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, "getParsedType");
var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
__name(escapeRegex, "escapeRegex");
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
__name(clone, "clone");
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: /* @__PURE__ */ __name(() => params, "error") };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: /* @__PURE__ */ __name(() => params.error, "error") };
  return params;
}
__name(normalizeParams, "normalizeParams");
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
__name(createTransparentProxy, "createTransparentProxy");
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
__name(stringifyPrimitive, "stringifyPrimitive");
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
__name(optionalKeys, "optionalKeys");
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const newShape = {};
  const currDef = schema._zod.def;
  for (const key in mask) {
    if (!(key in currDef.shape)) {
      throw new Error(`Unrecognized key: "${key}"`);
    }
    if (!mask[key])
      continue;
    newShape[key] = currDef.shape[key];
  }
  return clone(schema, {
    ...schema._zod.def,
    shape: newShape,
    checks: []
  });
}
__name(pick, "pick");
function omit(schema, mask) {
  const newShape = { ...schema._zod.def.shape };
  const currDef = schema._zod.def;
  for (const key in mask) {
    if (!(key in currDef.shape)) {
      throw new Error(`Unrecognized key: "${key}"`);
    }
    if (!mask[key])
      continue;
    delete newShape[key];
  }
  return clone(schema, {
    ...schema._zod.def,
    shape: newShape,
    checks: []
  });
}
__name(omit, "omit");
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const def = {
    ...schema._zod.def,
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    checks: []
    // delete existing checks
  };
  return clone(schema, def);
}
__name(extend, "extend");
function merge(a, b) {
  return clone(a, {
    ...a._zod.def,
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    catchall: b._zod.def.catchall,
    checks: []
    // delete existing checks
  });
}
__name(merge, "merge");
function partial(Class2, schema, mask) {
  const oldShape = schema._zod.def.shape;
  const shape = { ...oldShape };
  if (mask) {
    for (const key in mask) {
      if (!(key in oldShape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!mask[key])
        continue;
      shape[key] = Class2 ? new Class2({
        type: "optional",
        innerType: oldShape[key]
      }) : oldShape[key];
    }
  } else {
    for (const key in oldShape) {
      shape[key] = Class2 ? new Class2({
        type: "optional",
        innerType: oldShape[key]
      }) : oldShape[key];
    }
  }
  return clone(schema, {
    ...schema._zod.def,
    shape,
    checks: []
  });
}
__name(partial, "partial");
function required(Class2, schema, mask) {
  const oldShape = schema._zod.def.shape;
  const shape = { ...oldShape };
  if (mask) {
    for (const key in mask) {
      if (!(key in shape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!mask[key])
        continue;
      shape[key] = new Class2({
        type: "nonoptional",
        innerType: oldShape[key]
      });
    }
  } else {
    for (const key in oldShape) {
      shape[key] = new Class2({
        type: "nonoptional",
        innerType: oldShape[key]
      });
    }
  }
  return clone(schema, {
    ...schema._zod.def,
    shape,
    // optional: [],
    checks: []
  });
}
__name(required, "required");
function aborted(x, startIndex = 0) {
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true)
      return true;
  }
  return false;
}
__name(aborted, "aborted");
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a21;
    (_a21 = iss).path ?? (_a21.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
__name(prefixIssues, "prefixIssues");
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
__name(unwrapMessage, "unwrapMessage");
function finalizeIssue(iss, ctx, config2) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
__name(finalizeIssue, "finalizeIssue");
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
__name(getSizableOrigin, "getSizableOrigin");
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
__name(getLengthableOrigin, "getLengthableOrigin");
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
__name(issue, "issue");
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
__name(cleanEnum, "cleanEnum");
var Class = class {
  static {
    __name(this, "Class");
  }
  constructor(..._args) {
  }
};

// node_modules/zod/v4/core/errors.js
var initializer = /* @__PURE__ */ __name((inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  Object.defineProperty(inst, "message", {
    get() {
      return JSON.stringify(def, jsonStringifyReplacer, 2);
    },
    enumerable: true
    // configurable: false,
  });
  Object.defineProperty(inst, "toString", {
    value: /* @__PURE__ */ __name(() => inst.message, "value"),
    enumerable: false
  });
}, "initializer");
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error40, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error40.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
__name(flattenError, "flattenError");
function formatError(error40, _mapper) {
  const mapper = _mapper || function(issue2) {
    return issue2.message;
  };
  const fieldErrors = { _errors: [] };
  const processError = /* @__PURE__ */ __name((error41) => {
    for (const issue2 of error41.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues });
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues });
      } else if (issue2.path.length === 0) {
        fieldErrors._errors.push(mapper(issue2));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue2.path.length) {
          const el = issue2.path[i];
          const terminal = i === issue2.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue2));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  }, "processError");
  processError(error40);
  return fieldErrors;
}
__name(formatError, "formatError");
function treeifyError(error40, _mapper) {
  const mapper = _mapper || function(issue2) {
    return issue2.message;
  };
  const result = { errors: [] };
  const processError = /* @__PURE__ */ __name((error41, path = []) => {
    var _a21, _b17;
    for (const issue2 of error41.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, issue2.path));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, issue2.path);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, issue2.path);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result;
        let i = 0;
        while (i < fullpath.length) {
          const el = fullpath[i];
          const terminal = i === fullpath.length - 1;
          if (typeof el === "string") {
            curr.properties ?? (curr.properties = {});
            (_a21 = curr.properties)[el] ?? (_a21[el] = { errors: [] });
            curr = curr.properties[el];
          } else {
            curr.items ?? (curr.items = []);
            (_b17 = curr.items)[el] ?? (_b17[el] = { errors: [] });
            curr = curr.items[el];
          }
          if (terminal) {
            curr.errors.push(mapper(issue2));
          }
          i++;
        }
      }
    }
  }, "processError");
  processError(error40);
  return result;
}
__name(treeifyError, "treeifyError");
function toDotPath(path) {
  const segs = [];
  for (const seg of path) {
    if (typeof seg === "number")
      segs.push(`[${seg}]`);
    else if (typeof seg === "symbol")
      segs.push(`[${JSON.stringify(String(seg))}]`);
    else if (/[^\w$]/.test(seg))
      segs.push(`[${JSON.stringify(seg)}]`);
    else {
      if (segs.length)
        segs.push(".");
      segs.push(seg);
    }
  }
  return segs.join("");
}
__name(toDotPath, "toDotPath");
function prettifyError(error40) {
  const lines = [];
  const issues = [...error40.issues].sort((a, b) => a.path.length - b.path.length);
  for (const issue2 of issues) {
    lines.push(`✖ ${issue2.message}`);
    if (issue2.path?.length)
      lines.push(`  → at ${toDotPath(issue2.path)}`);
  }
  return lines.join("\n");
}
__name(prettifyError, "prettifyError");

// node_modules/zod/v4/core/parse.js
var _parse = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value;
}, "_parse");
var parse = /* @__PURE__ */ _parse($ZodRealError);
var _parseAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value;
}, "_parseAsync");
var parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
var _safeParse = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
}, "_safeParse");
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
}, "_safeParseAsync");
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);

// node_modules/zod/v4/core/schemas.js
init_esm();

// node_modules/zod/v4/core/checks.js
init_esm();

// node_modules/zod/v4/core/regexes.js
var regexes_exports = {};
__export(regexes_exports, {
  _emoji: () => _emoji,
  base64: () => base64,
  base64url: () => base64url,
  bigint: () => bigint,
  boolean: () => boolean,
  browserEmail: () => browserEmail,
  cidrv4: () => cidrv4,
  cidrv6: () => cidrv6,
  cuid: () => cuid,
  cuid2: () => cuid2,
  date: () => date,
  datetime: () => datetime,
  domain: () => domain,
  duration: () => duration,
  e164: () => e164,
  email: () => email,
  emoji: () => emoji,
  extendedDuration: () => extendedDuration,
  guid: () => guid,
  hostname: () => hostname,
  html5Email: () => html5Email,
  integer: () => integer,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  ksuid: () => ksuid,
  lowercase: () => lowercase,
  nanoid: () => nanoid,
  null: () => _null,
  number: () => number,
  rfc5322Email: () => rfc5322Email,
  string: () => string,
  time: () => time,
  ulid: () => ulid,
  undefined: () => _undefined,
  unicodeEmail: () => unicodeEmail,
  uppercase: () => uppercase,
  uuid: () => uuid,
  uuid4: () => uuid4,
  uuid6: () => uuid6,
  uuid7: () => uuid7,
  xid: () => xid
});
init_esm();
var cuid = /^[cC][^\s-]{8,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = /* @__PURE__ */ __name((version2) => {
  if (!version2)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
}, "uuid");
var uuid4 = /* @__PURE__ */ uuid(4);
var uuid6 = /* @__PURE__ */ uuid(6);
var uuid7 = /* @__PURE__ */ uuid(7);
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
__name(emoji, "emoji");
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var hostname = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
var e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
__name(timeSource, "timeSource");
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
__name(time, "time");
function datetime(args) {
  const time3 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-]\\d{2}:\\d{2})`);
  const timeRegex = `${time3}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
__name(datetime, "datetime");
var string = /* @__PURE__ */ __name((params) => {
  const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex}$`);
}, "string");
var bigint = /^\d+n?$/;
var integer = /^\d+$/;
var number = /^-?\d+(?:\.\d+)?/i;
var boolean = /true|false/i;
var _null = /null/i;
var _undefined = /undefined/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;

// node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a21;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a21 = inst._zod).onattach ?? (_a21.onattach = []);
});
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a21;
    (_a21 = inst2._zod.bag).multipleOf ?? (_a21.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inst
      });
    }
  };
});
var $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (input < minimum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_big",
        maximum,
        inst
      });
    }
  };
});
var $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
  var _a21;
  $ZodCheck.init(inst, def);
  (_a21 = inst._zod.def).when ?? (_a21.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size <= def.maximum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_big",
      maximum: def.maximum,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
  var _a21;
  $ZodCheck.init(inst, def);
  (_a21 = inst._zod.def).when ?? (_a21.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size >= def.minimum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_small",
      minimum: def.minimum,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
  var _a21;
  $ZodCheck.init(inst, def);
  (_a21 = inst._zod.def).when ?? (_a21.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.size;
    bag.maximum = def.size;
    bag.size = def.size;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size === def.size)
      return;
    const tooBig = size > def.size;
    payload.issues.push({
      origin: getSizableOrigin(input),
      ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a21;
  $ZodCheck.init(inst, def);
  (_a21 = inst._zod.def).when ?? (_a21.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a21;
  $ZodCheck.init(inst, def);
  (_a21 = inst._zod.def).when ?? (_a21.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a21;
  $ZodCheck.init(inst, def);
  (_a21 = inst._zod.def).when ?? (_a21.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a21, _b17;
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a21 = inst._zod).check ?? (_a21.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b17 = inst._zod).check ?? (_b17.check = () => {
    });
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
__name(handleCheckPropertyResult, "handleCheckPropertyResult");
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    const result = def.schema._zod.run({
      value: payload.value[def.property],
      issues: []
    }, {});
    if (result instanceof Promise) {
      return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
    }
    handleCheckPropertyResult(result, payload, def.property);
    return;
  };
});
var $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
  $ZodCheck.init(inst, def);
  const mimeSet = new Set(def.mime);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.mime = def.mime;
  });
  inst._zod.check = (payload) => {
    if (mimeSet.has(payload.value.type))
      return;
    payload.issues.push({
      code: "invalid_value",
      values: def.mime,
      input: payload.value.type,
      inst
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/zod/v4/core/doc.js
init_esm();
var Doc = class {
  static {
    __name(this, "Doc");
  }
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [``];
    const lines = [...content.map((x) => `  ${x}`)];
    return new F(...args, lines.join("\n"));
  }
};

// node_modules/zod/v4/core/versions.js
init_esm();
var version = {
  major: 4,
  minor: 0,
  patch: 0
};

// node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a21;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a21 = inst._zod).deferred ?? (_a21.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = /* @__PURE__ */ __name((payload, checks2, ctx) => {
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    }, "runChecks");
    inst._zod.run = (payload, ctx) => {
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  inst["~standard"] = {
    validate: /* @__PURE__ */ __name((value) => {
      try {
        const r = safeParse(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch (_) {
        return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    }, "validate"),
    vendor: "zod",
    version: 1
  };
});
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const orig = payload.value;
      const url2 = new URL(orig);
      const href = url2.href;
      if (def.hostname) {
        def.hostname.lastIndex = 0;
        if (!def.hostname.test(url2.hostname)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: hostname.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.protocol) {
        def.protocol.lastIndex = 0;
        if (!def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: def.protocol.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (!orig.endsWith("/") && href.endsWith("/")) {
        payload.value = href.slice(0, -1);
      } else {
        payload.value = href;
      }
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  def.pattern ?? (def.pattern = nanoid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = `ipv4`;
  });
});
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = `ipv6`;
  });
  inst._zod.check = (payload) => {
    try {
      new URL(`http://[${payload.value}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    const [address, prefix] = payload.value.split("/");
    try {
      if (!prefix)
        throw new Error();
      const prefixNum = Number(prefix);
      if (`${prefixNum}` !== prefix)
        throw new Error();
      if (prefixNum < 0 || prefixNum > 128)
        throw new Error();
      new URL(`http://[${address}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
__name(isValidBase64, "isValidBase64");
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64);
  $ZodStringFormat.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.contentEncoding = "base64";
  });
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base643 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base643.padEnd(Math.ceil(base643.length / 4) * 4, "=");
  return isValidBase64(padded);
}
__name(isValidBase64URL, "isValidBase64URL");
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url);
  $ZodStringFormat.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.contentEncoding = "base64url";
  });
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
__name(isValidJWT, "isValidJWT");
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (def.fn(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = bigint;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = BigInt(payload.value);
      } catch (_) {
      }
    if (typeof payload.value === "bigint")
      return payload;
    payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodCheckBigIntFormat.init(inst, def);
  $ZodBigInt.init(inst, def);
});
var $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "symbol")
      return payload;
    payload.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _undefined;
  inst._zod.values = /* @__PURE__ */ new Set([void 0]);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _null;
  inst._zod.values = /* @__PURE__ */ new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "void",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce) {
      try {
        payload.value = new Date(payload.value);
      } catch (_err) {
      }
    }
    const input = payload.value;
    const isDate = input instanceof Date;
    const isValidDate = isDate && !Number.isNaN(input.getTime());
    if (isValidDate)
      return payload;
    payload.issues.push({
      expected: "date",
      code: "invalid_type",
      input,
      ...isDate ? { received: "Invalid Date" } : {},
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
__name(handleArrayResult, "handleArrayResult");
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handleObjectResult(result, final, key) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(key, result.issues));
  }
  final.value[key] = result.value;
}
__name(handleObjectResult, "handleObjectResult");
function handleOptionalObjectResult(result, final, key, input) {
  if (result.issues.length) {
    if (input[key] === void 0) {
      if (key in input) {
        final.value[key] = void 0;
      } else {
        final.value[key] = result.value;
      }
    } else {
      final.issues.push(...prefixIssues(key, result.issues));
    }
  } else if (result.value === void 0) {
    if (key in input)
      final.value[key] = void 0;
  } else {
    final.value[key] = result.value;
  }
}
__name(handleOptionalObjectResult, "handleOptionalObjectResult");
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const _normalized = cached(() => {
    const keys = Object.keys(def.shape);
    for (const k of keys) {
      if (!(def.shape[k] instanceof $ZodType)) {
        throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
      }
    }
    const okeys = optionalKeys(def.shape);
    return {
      shape: def.shape,
      keys,
      keySet: new Set(keys),
      numKeys: keys.length,
      optionalKeys: new Set(okeys)
    };
  });
  defineLazy(inst._zod, "propValues", () => {
    const shape = def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
        for (const v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  const generateFastpass = /* @__PURE__ */ __name((shape) => {
    const doc = new Doc(["shape", "payload", "ctx"]);
    const normalized = _normalized.value;
    const parseStr = /* @__PURE__ */ __name((key) => {
      const k = esc(key);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    }, "parseStr");
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.keys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(`const newResult = {}`);
    for (const key of normalized.keys) {
      if (normalized.optionalKeys.has(key)) {
        const id = ids[key];
        doc.write(`const ${id} = ${parseStr(key)};`);
        const k = esc(key);
        doc.write(`
        if (${id}.issues.length) {
          if (input[${k}] === undefined) {
            if (${k} in input) {
              newResult[${k}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${id}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${k}, ...iss.path] : [${k}],
              }))
            );
          }
        } else if (${id}.value === undefined) {
          if (${k} in input) newResult[${k}] = undefined;
        } else {
          newResult[${k}] = ${id}.value;
        }
        `);
      } else {
        const id = ids[key];
        doc.write(`const ${id} = ${parseStr(key)};`);
        doc.write(`
          if (${id}.issues.length) payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${esc(key)}, ...iss.path] : [${esc(key)}]
          })));`);
        doc.write(`newResult[${esc(key)}] = ${id}.value`);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    const fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  }, "generateFastpass");
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
    } else {
      payload.value = {};
      const shape = value.shape;
      for (const key of value.keys) {
        const el = shape[key];
        const r = el._zod.run({ value: input[key], issues: [] }, ctx);
        const isOptional = el._zod.optin === "optional" && el._zod.optout === "optional";
        if (r instanceof Promise) {
          proms.push(r.then((r2) => isOptional ? handleOptionalObjectResult(r2, payload, key, input) : handleObjectResult(r2, payload, key)));
        } else if (isOptional) {
          handleOptionalObjectResult(r, payload, key, input);
        } else {
          handleObjectResult(r, payload, key);
        }
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    const unrecognized = [];
    const keySet = value.keySet;
    const _catchall = catchall._zod;
    const t = _catchall.def.type;
    for (const key of Object.keys(input)) {
      if (keySet.has(key))
        continue;
      if (t === "never") {
        unrecognized.push(key);
        continue;
      }
      const r = _catchall.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handleObjectResult(r2, payload, key)));
      } else {
        handleObjectResult(r, payload, key);
      }
    }
    if (unrecognized.length) {
      payload.issues.push({
        code: "unrecognized_keys",
        keys: unrecognized,
        input,
        inst
      });
    }
    if (!proms.length)
      return payload;
    return Promise.all(proms).then(() => {
      return payload;
    });
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
__name(handleUnionResults, "handleUnionResults");
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      const patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  const _super = inst._zod.parse;
  defineLazy(inst._zod, "propValues", () => {
    const propValues = {};
    for (const option of def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
      for (const [k, v] of Object.entries(pv)) {
        if (!propValues[k])
          propValues[k] = /* @__PURE__ */ new Set();
        for (const val of v) {
          propValues[k].add(val);
        }
      }
    }
    return propValues;
  });
  const disc = cached(() => {
    const opts = def.options;
    const map2 = /* @__PURE__ */ new Map();
    for (const o of opts) {
      const values = o._zod.propValues[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
      for (const v of values) {
        if (map2.has(v)) {
          throw new Error(`Duplicate discriminator value "${String(v)}"`);
        }
        map2.set(v, o);
      }
    }
    return map2;
  });
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const opt = disc.value.get(input?.[def.discriminator]);
    if (opt) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback) {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
__name(mergeValues, "mergeValues");
function handleIntersectionResults(result, left, right) {
  if (left.issues.length) {
    result.issues.push(...left.issues);
  }
  if (right.issues.length) {
    result.issues.push(...right.issues);
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
__name(handleIntersectionResults, "handleIntersectionResults");
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
  $ZodType.init(inst, def);
  const items = def.items;
  const optStart = items.length - [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        input,
        inst,
        expected: "tuple",
        code: "invalid_type"
      });
      return payload;
    }
    payload.value = [];
    const proms = [];
    if (!def.rest) {
      const tooBig = input.length > items.length;
      const tooSmall = input.length < optStart - 1;
      if (tooBig || tooSmall) {
        payload.issues.push({
          input,
          inst,
          origin: "array",
          ...tooBig ? { code: "too_big", maximum: items.length } : { code: "too_small", minimum: items.length }
        });
        return payload;
      }
    }
    let i = -1;
    for (const item of items) {
      i++;
      if (i >= input.length) {
        if (i >= optStart)
          continue;
      }
      const result = item._zod.run({
        value: input[i],
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
      } else {
        handleTupleResult(result, payload, i);
      }
    }
    if (def.rest) {
      const rest = input.slice(items.length);
      for (const el of rest) {
        i++;
        const result = def.rest._zod.run({
          value: el,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
        } else {
          handleTupleResult(result, payload, i);
        }
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
__name(handleTupleResult, "handleTupleResult");
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    if (def.keyType._zod.values) {
      const values = def.keyType._zod.values;
      payload.value = {};
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[key] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[key] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!values.has(key)) {
          unrecognized = unrecognized ?? [];
          unrecognized.push(key);
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized
        });
      }
    } else {
      payload.value = {};
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        if (keyResult.issues.length) {
          payload.issues.push({
            origin: "record",
            code: "invalid_key",
            issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
            input: key,
            path: [key],
            inst
          });
          payload.value[keyResult.value] = keyResult.value;
          continue;
        }
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues(key, result2.issues));
            }
            payload.value[keyResult.value] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues(key, result.issues));
          }
          payload.value[keyResult.value] = result.value;
        }
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Map)) {
      payload.issues.push({
        expected: "map",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    payload.value = /* @__PURE__ */ new Map();
    for (const [key, value] of input) {
      const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
      const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
      if (keyResult instanceof Promise || valueResult instanceof Promise) {
        proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
          handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
        }));
      } else {
        handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, keyResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_key",
        input,
        inst,
        issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  if (valueResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, valueResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  final.value.set(keyResult.value, valueResult.value);
}
__name(handleMapResult, "handleMapResult");
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Set)) {
      payload.issues.push({
        input,
        inst,
        expected: "set",
        code: "invalid_type"
      });
      return payload;
    }
    const proms = [];
    payload.value = /* @__PURE__ */ new Set();
    for (const item of input) {
      const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleSetResult(result2, payload)));
      } else
        handleSetResult(result, payload);
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleSetResult(result, final) {
  if (result.issues.length) {
    final.issues.push(...result.issues);
  }
  final.value.add(result.value);
}
__name(handleSetResult, "handleSetResult");
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  inst._zod.values = new Set(values);
  inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (inst._zod.values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.values = new Set(def.values);
  inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? o.toString() : String(o)).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (inst._zod.values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input instanceof File)
      return payload;
    payload.issues.push({
      expected: "file",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const _out = def.transform(payload.value, payload);
    if (_ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError();
    }
    payload.value = _out;
    return payload;
  };
});
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  });
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
__name(handleDefaultResult, "handleDefaultResult");
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
__name(handleNonOptionalResult, "handleNonOptionalResult");
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.issues.length === 0;
        return payload;
      });
    }
    payload.value = result.issues.length === 0;
    return payload;
  };
});
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.value;
        if (result2.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        },
        input: payload.value
      });
      payload.issues = [];
    }
    return payload;
  };
});
var $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "nan",
        code: "invalid_type"
      });
      return payload;
    }
    return payload;
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  inst._zod.parse = (payload, ctx) => {
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def, ctx));
    }
    return handlePipeResult(left, def, ctx);
  };
});
function handlePipeResult(left, def, ctx) {
  if (aborted(left)) {
    return left;
  }
  return def.out._zod.run({ value: left.value, issues: left.issues }, ctx);
}
__name(handlePipeResult, "handlePipeResult");
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
__name(handleReadonlyResult, "handleReadonlyResult");
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const regexParts = [];
  for (const part of def.parts) {
    if (part instanceof $ZodType) {
      if (!part._zod.pattern) {
        throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
      }
      const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
      if (!source)
        throw new Error(`Invalid template literal part: ${part._zod.traits}`);
      const start = source.startsWith("^") ? 1 : 0;
      const end = source.endsWith("$") ? source.length - 1 : source.length;
      regexParts.push(source.slice(start, end));
    } else if (part === null || primitiveTypes.has(typeof part)) {
      regexParts.push(escapeRegex(`${part}`));
    } else {
      throw new Error(`Invalid template literal part: ${part}`);
    }
  }
  inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "string") {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "template_literal",
        code: "invalid_type"
      });
      return payload;
    }
    inst._zod.pattern.lastIndex = 0;
    if (!inst._zod.pattern.test(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        code: "invalid_format",
        format: "template_literal",
        pattern: inst._zod.pattern.source
      });
      return payload;
    }
    return payload;
  };
});
var $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
  };
});
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "innerType", () => def.getter());
  defineLazy(inst._zod, "pattern", () => inst._zod.innerType._zod.pattern);
  defineLazy(inst._zod, "propValues", () => inst._zod.innerType._zod.propValues);
  defineLazy(inst._zod, "optin", () => inst._zod.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => inst._zod.innerType._zod.optout);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
__name(handleRefineResult, "handleRefineResult");

// node_modules/zod/v4/locales/index.js
var locales_exports = {};
__export(locales_exports, {
  ar: () => ar_default,
  az: () => az_default,
  be: () => be_default,
  ca: () => ca_default,
  cs: () => cs_default,
  de: () => de_default,
  en: () => en_default,
  eo: () => eo_default,
  es: () => es_default,
  fa: () => fa_default,
  fi: () => fi_default,
  fr: () => fr_default,
  frCA: () => fr_CA_default,
  he: () => he_default,
  hu: () => hu_default,
  id: () => id_default,
  it: () => it_default,
  ja: () => ja_default,
  kh: () => kh_default,
  ko: () => ko_default,
  mk: () => mk_default,
  ms: () => ms_default,
  nl: () => nl_default,
  no: () => no_default,
  ota: () => ota_default,
  pl: () => pl_default,
  ps: () => ps_default,
  pt: () => pt_default,
  ru: () => ru_default,
  sl: () => sl_default,
  sv: () => sv_default,
  ta: () => ta_default,
  th: () => th_default,
  tr: () => tr_default,
  ua: () => ua_default,
  ur: () => ur_default,
  vi: () => vi_default,
  zhCN: () => zh_CN_default,
  zhTW: () => zh_TW_default
});
init_esm();

// node_modules/zod/v4/locales/ar.js
init_esm();
var error = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `مدخلات غير مقبولة: يفترض إدخال ${issue2.expected}، ولكن تم إدخال ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `مدخلات غير مقبولة: يفترض إدخال ${stringifyPrimitive(issue2.values[0])}`;
        return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return ` أكبر من اللازم: يفترض أن تكون ${issue2.origin ?? "القيمة"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "عنصر"}`;
        return `أكبر من اللازم: يفترض أن تكون ${issue2.origin ?? "القيمة"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `أصغر من اللازم: يفترض لـ ${issue2.origin} أن يكون ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `أصغر من اللازم: يفترض لـ ${issue2.origin} أن يكون ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `نَص غير مقبول: يجب أن يبدأ بـ "${issue2.prefix}"`;
        if (_issue.format === "ends_with")
          return `نَص غير مقبول: يجب أن ينتهي بـ "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `نَص غير مقبول: يجب أن يتضمَّن "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `نَص غير مقبول: يجب أن يطابق النمط ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue2.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${issue2.divisor}`;
      case "unrecognized_keys":
        return `معرف${issue2.keys.length > 1 ? "ات" : ""} غريب${issue2.keys.length > 1 ? "ة" : ""}: ${joinValues(issue2.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${issue2.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${issue2.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
}, "error");
function ar_default() {
  return {
    localeError: error()
  };
}
__name(ar_default, "default");

// node_modules/zod/v4/locales/az.js
init_esm();
var error2 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Yanlış dəyər: gözlənilən ${issue2.expected}, daxil olan ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Yanlış dəyər: gözlənilən ${stringifyPrimitive(issue2.values[0])}`;
        return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çox böyük: gözlənilən ${issue2.origin ?? "dəyər"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        return `Çox böyük: gözlənilən ${issue2.origin ?? "dəyər"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çox kiçik: gözlənilən ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `Çox kiçik: gözlənilən ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Yanlış mətn: "${_issue.prefix}" ilə başlamalıdır`;
        if (_issue.format === "ends_with")
          return `Yanlış mətn: "${_issue.suffix}" ilə bitməlidir`;
        if (_issue.format === "includes")
          return `Yanlış mətn: "${_issue.includes}" daxil olmalıdır`;
        if (_issue.format === "regex")
          return `Yanlış mətn: ${_issue.pattern} şablonuna uyğun olmalıdır`;
        return `Yanlış ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${issue2.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${issue2.origin} daxilində yanlış dəyər`;
      default:
        return `Yanlış dəyər`;
    }
  };
}, "error");
function az_default() {
  return {
    localeError: error2()
  };
}
__name(az_default, "default");

// node_modules/zod/v4/locales/be.js
init_esm();
function getBelarusianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
__name(getBelarusianPlural, "getBelarusianPlural");
var error3 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "лік";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "масіў";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Няправільны ўвод: чакаўся ${issue2.expected}, атрымана ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Няправільны ўвод: чакалася ${stringifyPrimitive(issue2.values[0])}`;
        return `Няправільны варыянт: чакаўся адзін з ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Занадта вялікі: чакалася, што ${issue2.origin ?? "значэнне"} павінна ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `Занадта вялікі: чакалася, што ${issue2.origin ?? "значэнне"} павінна быць ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Занадта малы: чакалася, што ${issue2.origin} павінна ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `Занадта малы: чакалася, што ${issue2.origin} павінна быць ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Няправільны радок: павінен пачынацца з "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Няправільны радок: павінен заканчвацца на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Няправільны радок: павінен змяшчаць "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Няправільны радок: павінен адпавядаць шаблону ${_issue.pattern}`;
        return `Няправільны ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${issue2.keys.length > 1 ? "ключы" : "ключ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${issue2.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${issue2.origin}`;
      default:
        return `Няправільны ўвод`;
    }
  };
}, "error");
function be_default() {
  return {
    localeError: error3()
  };
}
__name(be_default, "default");

// node_modules/zod/v4/locales/ca.js
init_esm();
var error4 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Tipus invàlid: s'esperava ${issue2.expected}, s'ha rebut ${parsedType4(issue2.input)}`;
      // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Valor invàlid: s'esperava ${stringifyPrimitive(issue2.values[0])}`;
        return `Opció invàlida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "com a màxim" : "menys de";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingués ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "com a mínim" : "més de";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Massa petit: s'esperava que ${issue2.origin} contingués ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Format invàlid: ha de començar amb "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Format invàlid: ha d'acabar amb "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Format invàlid: ha d'incloure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Format invàlid: ha de coincidir amb el patró ${_issue.pattern}`;
        return `Format invàlid per a ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${issue2.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element invàlid a ${issue2.origin}`;
      default:
        return `Entrada invàlida`;
    }
  };
}, "error");
function ca_default() {
  return {
    localeError: error4()
  };
}
__name(ca_default, "default");

// node_modules/zod/v4/locales/cs.js
init_esm();
var error5 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "číslo";
      }
      case "string": {
        return "řetězec";
      }
      case "boolean": {
        return "boolean";
      }
      case "bigint": {
        return "bigint";
      }
      case "function": {
        return "funkce";
      }
      case "symbol": {
        return "symbol";
      }
      case "undefined": {
        return "undefined";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "pole";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Neplatný vstup: očekáváno ${issue2.expected}, obdrženo ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neplatný vstup: očekáváno ${stringifyPrimitive(issue2.values[0])}`;
        return `Neplatná možnost: očekávána jedna z hodnot ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je příliš velká: ${issue2.origin ?? "hodnota"} musí mít ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvků"}`;
        }
        return `Hodnota je příliš velká: ${issue2.origin ?? "hodnota"} musí být ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je příliš malá: ${issue2.origin ?? "hodnota"} musí mít ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvků"}`;
        }
        return `Hodnota je příliš malá: ${issue2.origin ?? "hodnota"} musí být ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Neplatný řetězec: musí začínat na "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Neplatný řetězec: musí končit na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neplatný řetězec: musí obsahovat "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neplatný řetězec: musí odpovídat vzoru ${_issue.pattern}`;
        return `Neplatný formát ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${issue2.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${issue2.origin}`;
      default:
        return `Neplatný vstup`;
    }
  };
}, "error");
function cs_default() {
  return {
    localeError: error5()
  };
}
__name(cs_default, "default");

// node_modules/zod/v4/locales/de.js
init_esm();
var error6 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "Zahl";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "Array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Ungültige Eingabe: erwartet ${issue2.expected}, erhalten ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ungültige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ungültige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Zu groß: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
        return `Zu groß: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat`;
        }
        return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ungültiger String: muss mit "${_issue.prefix}" beginnen`;
        if (_issue.format === "ends_with")
          return `Ungültiger String: muss mit "${_issue.suffix}" enden`;
        if (_issue.format === "includes")
          return `Ungültiger String: muss "${_issue.includes}" enthalten`;
        if (_issue.format === "regex")
          return `Ungültiger String: muss dem Muster ${_issue.pattern} entsprechen`;
        return `Ungültig: ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${issue2.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${issue2.origin}`;
      default:
        return `Ungültige Eingabe`;
    }
  };
}, "error");
function de_default() {
  return {
    localeError: error6()
  };
}
__name(de_default, "default");

// node_modules/zod/v4/locales/en.js
init_esm();
var parsedType = /* @__PURE__ */ __name((data) => {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "NaN" : "number";
    }
    case "object": {
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
        return data.constructor.name;
      }
    }
  }
  return t;
}, "parsedType");
var error7 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const Nouns = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Invalid input: expected ${issue2.expected}, received ${parsedType(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
}, "error");
function en_default() {
  return {
    localeError: error7()
  };
}
__name(en_default, "default");

// node_modules/zod/v4/locales/eo.js
init_esm();
var parsedType2 = /* @__PURE__ */ __name((data) => {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "NaN" : "nombro";
    }
    case "object": {
      if (Array.isArray(data)) {
        return "tabelo";
      }
      if (data === null) {
        return "senvalora";
      }
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
        return data.constructor.name;
      }
    }
  }
  return t;
}, "parsedType");
var error8 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const Nouns = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Nevalida enigo: atendiĝis ${issue2.expected}, riceviĝis ${parsedType2(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nevalida enigo: atendiĝis ${stringifyPrimitive(issue2.values[0])}`;
        return `Nevalida opcio: atendiĝis unu el ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Tro granda: atendiĝis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
        return `Tro granda: atendiĝis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Tro malgranda: atendiĝis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Tro malgranda: atendiĝis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nevalida karaktraro: devas komenciĝi per "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nevalida karaktraro: devas finiĝi per "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
        return `Nevalida ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${issue2.keys.length > 1 ? "j" : ""} ŝlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${issue2.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${issue2.origin}`;
      default:
        return `Nevalida enigo`;
    }
  };
}, "error");
function eo_default() {
  return {
    localeError: error8()
  };
}
__name(eo_default, "default");

// node_modules/zod/v4/locales/es.js
init_esm();
var error9 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "número";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "arreglo";
        }
        if (data === null) {
          return "nulo";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Entrada inválida: se esperaba ${issue2.expected}, recibido ${parsedType4(issue2.input)}`;
      // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inválida: se esperaba ${stringifyPrimitive(issue2.values[0])}`;
        return `Opción inválida: se esperaba una de ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Demasiado grande: se esperaba que ${issue2.origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Demasiado grande: se esperaba que ${issue2.origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Demasiado pequeño: se esperaba que ${issue2.origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Demasiado pequeño: se esperaba que ${issue2.origin} fuera ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cadena inválida: debe incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
        return `Inválido ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${issue2.origin}`;
      default:
        return `Entrada inválida`;
    }
  };
}, "error");
function es_default() {
  return {
    localeError: error9()
  };
}
__name(es_default, "default");

// node_modules/zod/v4/locales/fa.js
init_esm();
var error10 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "عدد";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "آرایه";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `ورودی نامعتبر: می‌بایست ${issue2.expected} می‌بود، ${parsedType4(issue2.input)} دریافت شد`;
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `ورودی نامعتبر: می‌بایست ${stringifyPrimitive(issue2.values[0])} می‌بود`;
        }
        return `گزینه نامعتبر: می‌بایست یکی از ${joinValues(issue2.values, "|")} می‌بود`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `خیلی بزرگ: ${issue2.origin ?? "مقدار"} باید ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عنصر"} باشد`;
        }
        return `خیلی بزرگ: ${issue2.origin ?? "مقدار"} باید ${adj}${issue2.maximum.toString()} باشد`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `خیلی کوچک: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} ${sizing.unit} باشد`;
        }
        return `خیلی کوچک: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `رشته نامعتبر: باید با "${_issue.prefix}" شروع شود`;
        }
        if (_issue.format === "ends_with") {
          return `رشته نامعتبر: باید با "${_issue.suffix}" تمام شود`;
        }
        if (_issue.format === "includes") {
          return `رشته نامعتبر: باید شامل "${_issue.includes}" باشد`;
        }
        if (_issue.format === "regex") {
          return `رشته نامعتبر: باید با الگوی ${_issue.pattern} مطابقت داشته باشد`;
        }
        return `${Nouns[_issue.format] ?? issue2.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${issue2.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${issue2.keys.length > 1 ? "های" : ""} ناشناس: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${issue2.origin}`;
      case "invalid_union":
        return `ورودی نامعتبر`;
      case "invalid_element":
        return `مقدار نامعتبر در ${issue2.origin}`;
      default:
        return `ورودی نامعتبر`;
    }
  };
}, "error");
function fa_default() {
  return {
    localeError: error10()
  };
}
__name(fa_default, "default");

// node_modules/zod/v4/locales/fi.js
init_esm();
var error11 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${issue2.expected}, oli ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Virheellinen syöte: täytyy olla ${stringifyPrimitive(issue2.values[0])}`;
        return `Virheellinen valinta: täytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian suuri: ${sizing.subject} täytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian suuri: arvon täytyy olla ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian pieni: ${sizing.subject} täytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian pieni: arvon täytyy olla ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Virheellinen syöte: täytyy alkaa "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Virheellinen syöte: täytyy loppua "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Virheellinen syöte: täytyy sisältää "${_issue.includes}"`;
        if (_issue.format === "regex") {
          return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_issue.pattern}`;
        }
        return `Virheellinen ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${issue2.divisor} monikerta`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return `Virheellinen syöte`;
    }
  };
}, "error");
function fi_default() {
  return {
    localeError: error11()
  };
}
__name(fi_default, "default");

// node_modules/zod/v4/locales/fr.js
init_esm();
var error12 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "nombre";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "tableau";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Entrée invalide : ${issue2.expected} attendu, ${parsedType4(issue2.input)} reçu`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrée invalide : ${stringifyPrimitive(issue2.values[0])} attendu`;
        return `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : ${issue2.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "élément(s)"}`;
        return `Trop grand : ${issue2.origin ?? "valeur"} doit être ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : ${issue2.origin} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : ${issue2.origin} doit être ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chaîne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chaîne invalide : doit correspondre au modèle ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clé${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
}, "error");
function fr_default() {
  return {
    localeError: error12()
  };
}
__name(fr_default, "default");

// node_modules/zod/v4/locales/fr-CA.js
init_esm();
var error13 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Entrée invalide : attendu ${issue2.expected}, reçu ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrée invalide : attendu ${stringifyPrimitive(issue2.values[0])}`;
        return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "≤" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "≥" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chaîne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chaîne invalide : doit correspondre au motif ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clé${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
}, "error");
function fr_CA_default() {
  return {
    localeError: error13()
  };
}
__name(fr_CA_default, "default");

// node_modules/zod/v4/locales/he.js
init_esm();
var error14 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "אותיות", verb: "לכלול" },
    file: { unit: "בייטים", verb: "לכלול" },
    array: { unit: "פריטים", verb: "לכלול" },
    set: { unit: "פריטים", verb: "לכלול" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "קלט",
    email: "כתובת אימייל",
    url: "כתובת רשת",
    emoji: "אימוג'י",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "תאריך וזמן ISO",
    date: "תאריך ISO",
    time: "זמן ISO",
    duration: "משך זמן ISO",
    ipv4: "כתובת IPv4",
    ipv6: "כתובת IPv6",
    cidrv4: "טווח IPv4",
    cidrv6: "טווח IPv6",
    base64: "מחרוזת בבסיס 64",
    base64url: "מחרוזת בבסיס 64 לכתובות רשת",
    json_string: "מחרוזת JSON",
    e164: "מספר E.164",
    jwt: "JWT",
    template_literal: "קלט"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `קלט לא תקין: צריך ${issue2.expected}, התקבל ${parsedType4(issue2.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `קלט לא תקין: צריך ${stringifyPrimitive(issue2.values[0])}`;
        return `קלט לא תקין: צריך אחת מהאפשרויות  ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `גדול מדי: ${issue2.origin ?? "value"} צריך להיות ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `גדול מדי: ${issue2.origin ?? "value"} צריך להיות ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `קטן מדי: ${issue2.origin} צריך להיות ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `קטן מדי: ${issue2.origin} צריך להיות ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `מחרוזת לא תקינה: חייבת להתחיל ב"${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `מחרוזת לא תקינה: חייבת להסתיים ב "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `מחרוזת לא תקינה: חייבת לכלול "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue2.format} לא תקין`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${issue2.divisor}`;
      case "unrecognized_keys":
        return `מפתח${issue2.keys.length > 1 ? "ות" : ""} לא מזוה${issue2.keys.length > 1 ? "ים" : "ה"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `מפתח לא תקין ב${issue2.origin}`;
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${issue2.origin}`;
      default:
        return `קלט לא תקין`;
    }
  };
}, "error");
function he_default() {
  return {
    localeError: error14()
  };
}
__name(he_default, "default");

// node_modules/zod/v4/locales/hu.js
init_esm();
var error15 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "szám";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "tömb";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Érvénytelen bemenet: a várt érték ${issue2.expected}, a kapott érték ${parsedType4(issue2.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Érvénytelen bemenet: a várt érték ${stringifyPrimitive(issue2.values[0])}`;
        return `Érvénytelen opció: valamelyik érték várt ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Túl nagy: ${issue2.origin ?? "érték"} mérete túl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}`;
        return `Túl nagy: a bemeneti érték ${issue2.origin ?? "érték"} túl nagy: ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Túl kicsi: a bemeneti érték ${issue2.origin} mérete túl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Túl kicsi: a bemeneti érték ${issue2.origin} túl kicsi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Érvénytelen string: "${_issue.prefix}" értékkel kell kezdődnie`;
        if (_issue.format === "ends_with")
          return `Érvénytelen string: "${_issue.suffix}" értékkel kell végződnie`;
        if (_issue.format === "includes")
          return `Érvénytelen string: "${_issue.includes}" értéket kell tartalmaznia`;
        if (_issue.format === "regex")
          return `Érvénytelen string: ${_issue.pattern} mintának kell megfelelnie`;
        return `Érvénytelen ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${issue2.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${issue2.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${issue2.origin}`;
      default:
        return `Érvénytelen bemenet`;
    }
  };
}, "error");
function hu_default() {
  return {
    localeError: error15()
  };
}
__name(hu_default, "default");

// node_modules/zod/v4/locales/id.js
init_esm();
var error16 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${issue2.expected}, diterima ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak valid: harus menyertakan "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue2.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${issue2.origin}`;
      default:
        return `Input tidak valid`;
    }
  };
}, "error");
function id_default() {
  return {
    localeError: error16()
  };
}
__name(id_default, "default");

// node_modules/zod/v4/locales/it.js
init_esm();
var error17 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "numero";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "vettore";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Input non valido: atteso ${issue2.expected}, ricevuto ${parsedType4(issue2.input)}`;
      // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}`;
        return `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}`;
        return `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Stringa non valida: deve includere "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
        return `Invalid ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${issue2.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${issue2.origin}`;
      default:
        return `Input non valido`;
    }
  };
}, "error");
function it_default() {
  return {
    localeError: error17()
  };
}
__name(it_default, "default");

// node_modules/zod/v4/locales/ja.js
init_esm();
var error18 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "数値";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "配列";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `無効な入力: ${issue2.expected}が期待されましたが、${parsedType4(issue2.input)}が入力されました`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `無効な入力: ${stringifyPrimitive(issue2.values[0])}が期待されました`;
        return `無効な選択: ${joinValues(issue2.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const adj = issue2.inclusive ? "以下である" : "より小さい";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `大きすぎる値: ${issue2.origin ?? "値"}は${issue2.maximum.toString()}${sizing.unit ?? "要素"}${adj}必要があります`;
        return `大きすぎる値: ${issue2.origin ?? "値"}は${issue2.maximum.toString()}${adj}必要があります`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "以上である" : "より大きい";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `小さすぎる値: ${issue2.origin}は${issue2.minimum.toString()}${sizing.unit}${adj}必要があります`;
        return `小さすぎる値: ${issue2.origin}は${issue2.minimum.toString()}${adj}必要があります`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `無効な文字列: "${_issue.prefix}"で始まる必要があります`;
        if (_issue.format === "ends_with")
          return `無効な文字列: "${_issue.suffix}"で終わる必要があります`;
        if (_issue.format === "includes")
          return `無効な文字列: "${_issue.includes}"を含む必要があります`;
        if (_issue.format === "regex")
          return `無効な文字列: パターン${_issue.pattern}に一致する必要があります`;
        return `無効な${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${issue2.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${issue2.keys.length > 1 ? "群" : ""}: ${joinValues(issue2.keys, "、")}`;
      case "invalid_key":
        return `${issue2.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${issue2.origin}内の無効な値`;
      default:
        return `無効な入力`;
    }
  };
}, "error");
function ja_default() {
  return {
    localeError: error18()
  };
}
__name(ja_default, "default");

// node_modules/zod/v4/locales/kh.js
init_esm();
var error19 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "អារេ (Array)";
        }
        if (data === null) {
          return "គ្មានតម្លៃ (null)";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${issue2.expected} ប៉ុន្តែទទួលបាន ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${stringifyPrimitive(issue2.values[0])}`;
        return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `ធំពេក៖ ត្រូវការ ${issue2.origin ?? "តម្លៃ"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "ធាតុ"}`;
        return `ធំពេក៖ ត្រូវការ ${issue2.origin ?? "តម្លៃ"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `តូចពេក៖ ត្រូវការ ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `តូចពេក៖ ត្រូវការ ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_issue.pattern}`;
        return `មិនត្រឹមត្រូវ៖ ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${issue2.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${issue2.origin}`;
      case "invalid_union":
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${issue2.origin}`;
      default:
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
    }
  };
}, "error");
function kh_default() {
  return {
    localeError: error19()
  };
}
__name(kh_default, "default");

// node_modules/zod/v4/locales/ko.js
init_esm();
var error20 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `잘못된 입력: 예상 타입은 ${issue2.expected}, 받은 타입은 ${parsedType4(issue2.input)}입니다`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `잘못된 입력: 값은 ${stringifyPrimitive(issue2.values[0])} 이어야 합니다`;
        return `잘못된 옵션: ${joinValues(issue2.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const adj = issue2.inclusive ? "이하" : "미만";
        const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "요소";
        if (sizing)
          return `${issue2.origin ?? "값"}이 너무 큽니다: ${issue2.maximum.toString()}${unit} ${adj}${suffix}`;
        return `${issue2.origin ?? "값"}이 너무 큽니다: ${issue2.maximum.toString()} ${adj}${suffix}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "이상" : "초과";
        const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "요소";
        if (sizing) {
          return `${issue2.origin ?? "값"}이 너무 작습니다: ${issue2.minimum.toString()}${unit} ${adj}${suffix}`;
        }
        return `${issue2.origin ?? "값"}이 너무 작습니다: ${issue2.minimum.toString()} ${adj}${suffix}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `잘못된 문자열: "${_issue.prefix}"(으)로 시작해야 합니다`;
        }
        if (_issue.format === "ends_with")
          return `잘못된 문자열: "${_issue.suffix}"(으)로 끝나야 합니다`;
        if (_issue.format === "includes")
          return `잘못된 문자열: "${_issue.includes}"을(를) 포함해야 합니다`;
        if (_issue.format === "regex")
          return `잘못된 문자열: 정규식 ${_issue.pattern} 패턴과 일치해야 합니다`;
        return `잘못된 ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${issue2.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${issue2.origin}`;
      case "invalid_union":
        return `잘못된 입력`;
      case "invalid_element":
        return `잘못된 값: ${issue2.origin}`;
      default:
        return `잘못된 입력`;
    }
  };
}, "error");
function ko_default() {
  return {
    localeError: error20()
  };
}
__name(ko_default, "default");

// node_modules/zod/v4/locales/mk.js
init_esm();
var error21 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "број";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "низа";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Грешен внес: се очекува ${issue2.expected}, примено ${parsedType4(issue2.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Грешана опција: се очекува една ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Премногу голем: се очекува ${issue2.origin ?? "вредноста"} да има ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "елементи"}`;
        return `Премногу голем: се очекува ${issue2.origin ?? "вредноста"} да биде ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Премногу мал: се очекува ${issue2.origin} да има ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Премногу мал: се очекува ${issue2.origin} да биде ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Неважечка низа: мора да започнува со "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Неважечка низа: мора да завршува со "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неважечка низа: мора да вклучува "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неважечка низа: мора да одгоара на патернот ${_issue.pattern}`;
        return `Invalid ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${issue2.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${issue2.origin}`;
      default:
        return `Грешен внес`;
    }
  };
}, "error");
function mk_default() {
  return {
    localeError: error21()
  };
}
__name(mk_default, "default");

// node_modules/zod/v4/locales/ms.js
init_esm();
var error22 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "nombor";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${issue2.expected}, diterima ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue2.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${issue2.origin}`;
      default:
        return `Input tidak sah`;
    }
  };
}, "error");
function ms_default() {
  return {
    localeError: error22()
  };
}
__name(ms_default, "default");

// node_modules/zod/v4/locales/nl.js
init_esm();
var error23 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "getal";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${issue2.expected}, ontving ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}`;
        return `Ongeldige optie: verwacht één van ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Te lang: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} bevat`;
        return `Te lang: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Te kort: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} bevat`;
        }
        return `Te kort: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
        }
        if (_issue.format === "ends_with")
          return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
        if (_issue.format === "includes")
          return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
        if (_issue.format === "regex")
          return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
        return `Ongeldig: ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${issue2.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${issue2.origin}`;
      default:
        return `Ongeldige invoer`;
    }
  };
}, "error");
function nl_default() {
  return {
    localeError: error23()
  };
}
__name(nl_default, "default");

// node_modules/zod/v4/locales/no.js
init_esm();
var error24 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "tall";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "liste";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${issue2.expected}, fikk ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `For stor(t): forventet ${issue2.origin ?? "value"} til å ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor(t): forventet ${issue2.origin ?? "value"} til å ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `For lite(n): forventet ${issue2.origin} til å ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lite(n): forventet ${issue2.origin} til å ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: må starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: må ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: må inneholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: må matche mønsteret ${_issue.pattern}`;
        return `Ugyldig ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${issue2.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
}, "error");
function no_default() {
  return {
    localeError: error24()
  };
}
__name(no_default, "default");

// node_modules/zod/v4/locales/ota.js
init_esm();
var error25 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "numara";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "saf";
        }
        if (data === null) {
          return "gayb";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Fâsit giren: umulan ${issue2.expected}, alınan ${parsedType4(issue2.input)}`;
      // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Fâsit giren: umulan ${stringifyPrimitive(issue2.values[0])}`;
        return `Fâsit tercih: mûteberler ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Fazla büyük: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmalıydı.`;
        return `Fazla büyük: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Fazla küçük: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmalıydı.`;
        }
        return `Fazla küçük: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Fâsit metin: "${_issue.prefix}" ile başlamalı.`;
        if (_issue.format === "ends_with")
          return `Fâsit metin: "${_issue.suffix}" ile bitmeli.`;
        if (_issue.format === "includes")
          return `Fâsit metin: "${_issue.includes}" ihtivâ etmeli.`;
        if (_issue.format === "regex")
          return `Fâsit metin: ${_issue.pattern} nakşına uymalı.`;
        return `Fâsit ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${issue2.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${issue2.origin} için tanınmayan kıymet var.`;
      default:
        return `Kıymet tanınamadı.`;
    }
  };
}, "error");
function ota_default() {
  return {
    localeError: error25()
  };
}
__name(ota_default, "default");

// node_modules/zod/v4/locales/ps.js
init_esm();
var error26 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "عدد";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "ارې";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `ناسم ورودي: باید ${issue2.expected} وای, مګر ${parsedType4(issue2.input)} ترلاسه شو`;
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `ناسم ورودي: باید ${stringifyPrimitive(issue2.values[0])} وای`;
        }
        return `ناسم انتخاب: باید یو له ${joinValues(issue2.values, "|")} څخه وای`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `ډیر لوی: ${issue2.origin ?? "ارزښت"} باید ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عنصرونه"} ولري`;
        }
        return `ډیر لوی: ${issue2.origin ?? "ارزښت"} باید ${adj}${issue2.maximum.toString()} وي`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `ډیر کوچنی: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} ${sizing.unit} ولري`;
        }
        return `ډیر کوچنی: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `ناسم متن: باید د "${_issue.prefix}" سره پیل شي`;
        }
        if (_issue.format === "ends_with") {
          return `ناسم متن: باید د "${_issue.suffix}" سره پای ته ورسيږي`;
        }
        if (_issue.format === "includes") {
          return `ناسم متن: باید "${_issue.includes}" ولري`;
        }
        if (_issue.format === "regex") {
          return `ناسم متن: باید د ${_issue.pattern} سره مطابقت ولري`;
        }
        return `${Nouns[_issue.format] ?? issue2.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${issue2.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${issue2.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${issue2.origin} کې`;
      case "invalid_union":
        return `ناسمه ورودي`;
      case "invalid_element":
        return `ناسم عنصر په ${issue2.origin} کې`;
      default:
        return `ناسمه ورودي`;
    }
  };
}, "error");
function ps_default() {
  return {
    localeError: error26()
  };
}
__name(ps_default, "default");

// node_modules/zod/v4/locales/pl.js
init_esm();
var error27 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "liczba";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "tablica";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Nieprawidłowe dane wejściowe: oczekiwano ${issue2.expected}, otrzymano ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nieprawidłowe dane wejściowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}`;
        return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za duża wartość: oczekiwano, że ${issue2.origin ?? "wartość"} będzie mieć ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementów"}`;
        }
        return `Zbyt duż(y/a/e): oczekiwano, że ${issue2.origin ?? "wartość"} będzie wynosić ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za mała wartość: oczekiwano, że ${issue2.origin ?? "wartość"} będzie mieć ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "elementów"}`;
        }
        return `Zbyt mał(y/a/e): oczekiwano, że ${issue2.origin ?? "wartość"} będzie wynosić ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nieprawidłowy ciąg znaków: musi kończyć się na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nieprawidłowy ciąg znaków: musi zawierać "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_issue.pattern}`;
        return `Nieprawidłow(y/a/e) ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${issue2.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${issue2.origin}`;
      default:
        return `Nieprawidłowe dane wejściowe`;
    }
  };
}, "error");
function pl_default() {
  return {
    localeError: error27()
  };
}
__name(pl_default, "default");

// node_modules/zod/v4/locales/pt.js
init_esm();
var error28 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "número";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "nulo";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Tipo inválido: esperado ${issue2.expected}, recebido ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inválida: esperado ${stringifyPrimitive(issue2.values[0])}`;
        return `Opção inválida: esperada uma das ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Texto inválido: deve começar com "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Texto inválido: deve terminar com "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Texto inválido: deve incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Texto inválido: deve corresponder ao padrão ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue2.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${issue2.origin}`;
      default:
        return `Campo inválido`;
    }
  };
}, "error");
function pt_default() {
  return {
    localeError: error28()
  };
}
__name(pt_default, "default");

// node_modules/zod/v4/locales/ru.js
init_esm();
function getRussianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
__name(getRussianPlural, "getRussianPlural");
var error29 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "число";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "массив";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Неверный ввод: ожидалось ${issue2.expected}, получено ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Неверный ввод: ожидалось ${stringifyPrimitive(issue2.values[0])}`;
        return `Неверный вариант: ожидалось одно из ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Слишком большое значение: ожидалось, что ${issue2.origin ?? "значение"} будет иметь ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `Слишком большое значение: ожидалось, что ${issue2.origin ?? "значение"} будет ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${issue2.origin} будет иметь ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${issue2.origin} будет ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Неверная строка: должна начинаться с "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Неверная строка: должна заканчиваться на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неверная строка: должна содержать "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неверная строка: должна соответствовать шаблону ${_issue.pattern}`;
        return `Неверный ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${issue2.keys.length > 1 ? "ые" : "ый"} ключ${issue2.keys.length > 1 ? "и" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${issue2.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${issue2.origin}`;
      default:
        return `Неверные входные данные`;
    }
  };
}, "error");
function ru_default() {
  return {
    localeError: error29()
  };
}
__name(ru_default, "default");

// node_modules/zod/v4/locales/sl.js
init_esm();
var error30 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "število";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "tabela";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Neveljaven vnos: pričakovano ${issue2.expected}, prejeto ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neveljaven vnos: pričakovano ${stringifyPrimitive(issue2.values[0])}`;
        return `Neveljavna možnost: pričakovano eno izmed ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Preveliko: pričakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}`;
        return `Preveliko: pričakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Premajhno: pričakovano, da bo ${issue2.origin} imelo ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Premajhno: pričakovano, da bo ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Neveljaven niz: mora se začeti z "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Neveljaven niz: mora se končati z "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
        return `Neveljaven ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${issue2.keys.length > 1 ? "i ključi" : " ključ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${issue2.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${issue2.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
}, "error");
function sl_default() {
  return {
    localeError: error30()
  };
}
__name(sl_default, "default");

// node_modules/zod/v4/locales/sv.js
init_esm();
var error31 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "antal";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "lista";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Ogiltig inmatning: förväntat ${issue2.expected}, fick ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ogiltig inmatning: förväntat ${stringifyPrimitive(issue2.values[0])}`;
        return `Ogiltigt val: förväntade en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `För stor(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        }
        return `För stor(t): förväntat ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `För lite(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `För lite(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ogiltig sträng: måste börja med "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Ogiltig sträng: måste sluta med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ogiltig sträng: måste innehålla "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ogiltig sträng: måste matcha mönstret "${_issue.pattern}"`;
        return `Ogiltig(t) ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${issue2.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${issue2.origin ?? "värdet"}`;
      default:
        return `Ogiltig input`;
    }
  };
}, "error");
function sv_default() {
  return {
    localeError: error31()
  };
}
__name(sv_default, "default");

// node_modules/zod/v4/locales/ta.js
init_esm();
var error32 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "எண் அல்லாதது" : "எண்";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "அணி";
        }
        if (data === null) {
          return "வெறுமை";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${issue2.expected}, பெறப்பட்டது ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${stringifyPrimitive(issue2.values[0])}`;
        return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${joinValues(issue2.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue2.origin ?? "மதிப்பு"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
        }
        return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue2.origin ?? "மதிப்பு"} ${adj}${issue2.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ஆக இருக்க வேண்டும்`;
        }
        return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue2.origin} ${adj}${issue2.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `தவறான சரம்: "${_issue.prefix}" இல் தொடங்க வேண்டும்`;
        if (_issue.format === "ends_with")
          return `தவறான சரம்: "${_issue.suffix}" இல் முடிவடைய வேண்டும்`;
        if (_issue.format === "includes")
          return `தவறான சரம்: "${_issue.includes}" ஐ உள்ளடக்க வேண்டும்`;
        if (_issue.format === "regex")
          return `தவறான சரம்: ${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
        return `தவறான ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${issue2.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${issue2.keys.length > 1 ? "கள்" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${issue2.origin} இல் தவறான மதிப்பு`;
      default:
        return `தவறான உள்ளீடு`;
    }
  };
}, "error");
function ta_default() {
  return {
    localeError: error32()
  };
}
__name(ta_default, "default");

// node_modules/zod/v4/locales/th.js
init_esm();
var error33 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "อาร์เรย์ (Array)";
        }
        if (data === null) {
          return "ไม่มีค่า (null)";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${issue2.expected} แต่ได้รับ ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `ค่าไม่ถูกต้อง: ควรเป็น ${stringifyPrimitive(issue2.values[0])}`;
        return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "ไม่เกิน" : "น้อยกว่า";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `เกินกำหนด: ${issue2.origin ?? "ค่า"} ควรมี${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "รายการ"}`;
        return `เกินกำหนด: ${issue2.origin ?? "ค่า"} ควรมี${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "อย่างน้อย" : "มากกว่า";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `น้อยกว่ากำหนด: ${issue2.origin} ควรมี${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `น้อยกว่ากำหนด: ${issue2.origin} ควรมี${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_issue.includes}" อยู่ในข้อความ`;
        if (_issue.format === "regex")
          return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_issue.pattern}`;
        return `รูปแบบไม่ถูกต้อง: ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${issue2.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${issue2.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${issue2.origin}`;
      default:
        return `ข้อมูลไม่ถูกต้อง`;
    }
  };
}, "error");
function th_default() {
  return {
    localeError: error33()
  };
}
__name(th_default, "default");

// node_modules/zod/v4/locales/tr.js
init_esm();
var parsedType3 = /* @__PURE__ */ __name((data) => {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "NaN" : "number";
    }
    case "object": {
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
        return data.constructor.name;
      }
    }
  }
  return t;
}, "parsedType");
var error34 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const Nouns = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Geçersiz değer: beklenen ${issue2.expected}, alınan ${parsedType3(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Geçersiz değer: beklenen ${stringifyPrimitive(issue2.values[0])}`;
        return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çok büyük: beklenen ${issue2.origin ?? "değer"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "öğe"}`;
        return `Çok büyük: beklenen ${issue2.origin ?? "değer"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çok küçük: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `Çok küçük: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Geçersiz metin: "${_issue.prefix}" ile başlamalı`;
        if (_issue.format === "ends_with")
          return `Geçersiz metin: "${_issue.suffix}" ile bitmeli`;
        if (_issue.format === "includes")
          return `Geçersiz metin: "${_issue.includes}" içermeli`;
        if (_issue.format === "regex")
          return `Geçersiz metin: ${_issue.pattern} desenine uymalı`;
        return `Geçersiz ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${issue2.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${issue2.origin} içinde geçersiz değer`;
      default:
        return `Geçersiz değer`;
    }
  };
}, "error");
function tr_default() {
  return {
    localeError: error34()
  };
}
__name(tr_default, "default");

// node_modules/zod/v4/locales/ua.js
init_esm();
var error35 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "число";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "масив";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Неправильні вхідні дані: очікується ${issue2.expected}, отримано ${parsedType4(issue2.input)}`;
      // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Неправильні вхідні дані: очікується ${stringifyPrimitive(issue2.values[0])}`;
        return `Неправильна опція: очікується одне з ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Занадто велике: очікується, що ${issue2.origin ?? "значення"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "елементів"}`;
        return `Занадто велике: очікується, що ${issue2.origin ?? "значення"} буде ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Занадто мале: очікується, що ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Занадто мале: очікується, що ${issue2.origin} буде ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Неправильний рядок: повинен починатися з "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Неправильний рядок: повинен закінчуватися на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неправильний рядок: повинен містити "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неправильний рядок: повинен відповідати шаблону ${_issue.pattern}`;
        return `Неправильний ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${issue2.keys.length > 1 ? "і" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${issue2.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${issue2.origin}`;
      default:
        return `Неправильні вхідні дані`;
    }
  };
}, "error");
function ua_default() {
  return {
    localeError: error35()
  };
}
__name(ua_default, "default");

// node_modules/zod/v4/locales/ur.js
init_esm();
var error36 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "نمبر";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "آرے";
        }
        if (data === null) {
          return "نل";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `غلط ان پٹ: ${issue2.expected} متوقع تھا، ${parsedType4(issue2.input)} موصول ہوا`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `غلط ان پٹ: ${stringifyPrimitive(issue2.values[0])} متوقع تھا`;
        return `غلط آپشن: ${joinValues(issue2.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `بہت بڑا: ${issue2.origin ?? "ویلیو"} کے ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عناصر"} ہونے متوقع تھے`;
        return `بہت بڑا: ${issue2.origin ?? "ویلیو"} کا ${adj}${issue2.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `بہت چھوٹا: ${issue2.origin} کے ${adj}${issue2.minimum.toString()} ${sizing.unit} ہونے متوقع تھے`;
        }
        return `بہت چھوٹا: ${issue2.origin} کا ${adj}${issue2.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `غلط سٹرنگ: "${_issue.prefix}" سے شروع ہونا چاہیے`;
        }
        if (_issue.format === "ends_with")
          return `غلط سٹرنگ: "${_issue.suffix}" پر ختم ہونا چاہیے`;
        if (_issue.format === "includes")
          return `غلط سٹرنگ: "${_issue.includes}" شامل ہونا چاہیے`;
        if (_issue.format === "regex")
          return `غلط سٹرنگ: پیٹرن ${_issue.pattern} سے میچ ہونا چاہیے`;
        return `غلط ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${issue2.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${issue2.keys.length > 1 ? "ز" : ""}: ${joinValues(issue2.keys, "، ")}`;
      case "invalid_key":
        return `${issue2.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${issue2.origin} میں غلط ویلیو`;
      default:
        return `غلط ان پٹ`;
    }
  };
}, "error");
function ur_default() {
  return {
    localeError: error36()
  };
}
__name(ur_default, "default");

// node_modules/zod/v4/locales/vi.js
init_esm();
var error37 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "số";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "mảng";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `Đầu vào không hợp lệ: mong đợi ${issue2.expected}, nhận được ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Đầu vào không hợp lệ: mong đợi ${stringifyPrimitive(issue2.values[0])}`;
        return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Quá lớn: mong đợi ${issue2.origin ?? "giá trị"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "phần tử"}`;
        return `Quá lớn: mong đợi ${issue2.origin ?? "giá trị"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Quá nhỏ: mong đợi ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Quá nhỏ: mong đợi ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chuỗi không hợp lệ: phải bắt đầu bằng "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chuỗi không hợp lệ: phải kết thúc bằng "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chuỗi không hợp lệ: phải bao gồm "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chuỗi không hợp lệ: phải khớp với mẫu ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue2.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${issue2.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${issue2.origin}`;
      default:
        return `Đầu vào không hợp lệ`;
    }
  };
}, "error");
function vi_default() {
  return {
    localeError: error37()
  };
}
__name(vi_default, "default");

// node_modules/zod/v4/locales/zh-CN.js
init_esm();
var error38 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "非数字(NaN)" : "数字";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "数组";
        }
        if (data === null) {
          return "空值(null)";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `无效输入：期望 ${issue2.expected}，实际接收 ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `无效输入：期望 ${stringifyPrimitive(issue2.values[0])}`;
        return `无效选项：期望以下之一 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `数值过大：期望 ${issue2.origin ?? "值"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "个元素"}`;
        return `数值过大：期望 ${issue2.origin ?? "值"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `数值过小：期望 ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `数值过小：期望 ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `无效字符串：必须以 "${_issue.prefix}" 开头`;
        if (_issue.format === "ends_with")
          return `无效字符串：必须以 "${_issue.suffix}" 结尾`;
        if (_issue.format === "includes")
          return `无效字符串：必须包含 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `无效字符串：必须满足正则表达式 ${_issue.pattern}`;
        return `无效${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${issue2.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${issue2.origin} 中包含无效值(value)`;
      default:
        return `无效输入`;
    }
  };
}, "error");
function zh_CN_default() {
  return {
    localeError: error38()
  };
}
__name(zh_CN_default, "default");

// node_modules/zod/v4/locales/zh-TW.js
init_esm();
var error39 = /* @__PURE__ */ __name(() => {
  const Sizable = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  __name(getSizing, "getSizing");
  const parsedType4 = /* @__PURE__ */ __name((data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  }, "parsedType");
  const Nouns = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type":
        return `無效的輸入值：預期為 ${issue2.expected}，但收到 ${parsedType4(issue2.input)}`;
      case "invalid_value":
        if (issue2.values.length === 1)
          return `無效的輸入值：預期為 ${stringifyPrimitive(issue2.values[0])}`;
        return `無效的選項：預期為以下其中之一 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `數值過大：預期 ${issue2.origin ?? "值"} 應為 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "個元素"}`;
        return `數值過大：預期 ${issue2.origin ?? "值"} 應為 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `數值過小：預期 ${issue2.origin} 應為 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `數值過小：預期 ${issue2.origin} 應為 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `無效的字串：必須以 "${_issue.prefix}" 開頭`;
        }
        if (_issue.format === "ends_with")
          return `無效的字串：必須以 "${_issue.suffix}" 結尾`;
        if (_issue.format === "includes")
          return `無效的字串：必須包含 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `無效的字串：必須符合格式 ${_issue.pattern}`;
        return `無效的 ${Nouns[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${issue2.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${issue2.keys.length > 1 ? "們" : ""}：${joinValues(issue2.keys, "、")}`;
      case "invalid_key":
        return `${issue2.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${issue2.origin} 中有無效的值`;
      default:
        return `無效的輸入值`;
    }
  };
}, "error");
function zh_TW_default() {
  return {
    localeError: error39()
  };
}
__name(zh_TW_default, "default");

// node_modules/zod/v4/core/registries.js
init_esm();
var $output = Symbol("ZodOutput");
var $input = Symbol("ZodInput");
var $ZodRegistry = class {
  static {
    __name(this, "$ZodRegistry");
  }
  constructor() {
    this._map = /* @__PURE__ */ new Map();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      if (this._idmap.has(meta.id)) {
        throw new Error(`ID ${meta.id} already exists in the registry`);
      }
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new Map();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      return { ...pm, ...this._map.get(schema) };
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
__name(registry, "registry");
var globalRegistry = /* @__PURE__ */ registry();

// node_modules/zod/v4/core/function.js
init_esm();

// node_modules/zod/v4/core/api.js
init_esm();
function _string(Class2, params) {
  return new Class2({
    type: "string",
    ...normalizeParams(params)
  });
}
__name(_string, "_string");
function _coercedString(Class2, params) {
  return new Class2({
    type: "string",
    coerce: true,
    ...normalizeParams(params)
  });
}
__name(_coercedString, "_coercedString");
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_email, "_email");
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_guid, "_guid");
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_uuid, "_uuid");
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
__name(_uuidv4, "_uuidv4");
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
__name(_uuidv6, "_uuidv6");
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
__name(_uuidv7, "_uuidv7");
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_url, "_url");
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_emoji2, "_emoji");
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_nanoid, "_nanoid");
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_cuid, "_cuid");
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_cuid2, "_cuid2");
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_ulid, "_ulid");
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_xid, "_xid");
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_ksuid, "_ksuid");
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_ipv4, "_ipv4");
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_ipv6, "_ipv6");
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_cidrv4, "_cidrv4");
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_cidrv6, "_cidrv6");
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_base64, "_base64");
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_base64url, "_base64url");
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_e164, "_e164");
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_jwt, "_jwt");
var TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
__name(_isoDateTime, "_isoDateTime");
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
__name(_isoDate, "_isoDate");
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
__name(_isoTime, "_isoTime");
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
__name(_isoDuration, "_isoDuration");
function _number(Class2, params) {
  return new Class2({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
__name(_number, "_number");
function _coercedNumber(Class2, params) {
  return new Class2({
    type: "number",
    coerce: true,
    checks: [],
    ...normalizeParams(params)
  });
}
__name(_coercedNumber, "_coercedNumber");
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
__name(_int, "_int");
function _float32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...normalizeParams(params)
  });
}
__name(_float32, "_float32");
function _float64(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...normalizeParams(params)
  });
}
__name(_float64, "_float64");
function _int32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...normalizeParams(params)
  });
}
__name(_int32, "_int32");
function _uint32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...normalizeParams(params)
  });
}
__name(_uint32, "_uint32");
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
__name(_boolean, "_boolean");
function _coercedBoolean(Class2, params) {
  return new Class2({
    type: "boolean",
    coerce: true,
    ...normalizeParams(params)
  });
}
__name(_coercedBoolean, "_coercedBoolean");
function _bigint(Class2, params) {
  return new Class2({
    type: "bigint",
    ...normalizeParams(params)
  });
}
__name(_bigint, "_bigint");
function _coercedBigint(Class2, params) {
  return new Class2({
    type: "bigint",
    coerce: true,
    ...normalizeParams(params)
  });
}
__name(_coercedBigint, "_coercedBigint");
function _int64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...normalizeParams(params)
  });
}
__name(_int64, "_int64");
function _uint64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...normalizeParams(params)
  });
}
__name(_uint64, "_uint64");
function _symbol(Class2, params) {
  return new Class2({
    type: "symbol",
    ...normalizeParams(params)
  });
}
__name(_symbol, "_symbol");
function _undefined2(Class2, params) {
  return new Class2({
    type: "undefined",
    ...normalizeParams(params)
  });
}
__name(_undefined2, "_undefined");
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
__name(_null2, "_null");
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
__name(_any, "_any");
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
__name(_unknown, "_unknown");
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
__name(_never, "_never");
function _void(Class2, params) {
  return new Class2({
    type: "void",
    ...normalizeParams(params)
  });
}
__name(_void, "_void");
function _date(Class2, params) {
  return new Class2({
    type: "date",
    ...normalizeParams(params)
  });
}
__name(_date, "_date");
function _coercedDate(Class2, params) {
  return new Class2({
    type: "date",
    coerce: true,
    ...normalizeParams(params)
  });
}
__name(_coercedDate, "_coercedDate");
function _nan(Class2, params) {
  return new Class2({
    type: "nan",
    ...normalizeParams(params)
  });
}
__name(_nan, "_nan");
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
__name(_lt, "_lt");
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
__name(_lte, "_lte");
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
__name(_gt, "_gt");
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
__name(_gte, "_gte");
function _positive(params) {
  return _gt(0, params);
}
__name(_positive, "_positive");
function _negative(params) {
  return _lt(0, params);
}
__name(_negative, "_negative");
function _nonpositive(params) {
  return _lte(0, params);
}
__name(_nonpositive, "_nonpositive");
function _nonnegative(params) {
  return _gte(0, params);
}
__name(_nonnegative, "_nonnegative");
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
__name(_multipleOf, "_multipleOf");
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize({
    check: "max_size",
    ...normalizeParams(params),
    maximum
  });
}
__name(_maxSize, "_maxSize");
function _minSize(minimum, params) {
  return new $ZodCheckMinSize({
    check: "min_size",
    ...normalizeParams(params),
    minimum
  });
}
__name(_minSize, "_minSize");
function _size(size, params) {
  return new $ZodCheckSizeEquals({
    check: "size_equals",
    ...normalizeParams(params),
    size
  });
}
__name(_size, "_size");
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
__name(_maxLength, "_maxLength");
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
__name(_minLength, "_minLength");
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
__name(_length, "_length");
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
__name(_regex, "_regex");
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
__name(_lowercase, "_lowercase");
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
__name(_uppercase, "_uppercase");
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
__name(_includes, "_includes");
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
__name(_startsWith, "_startsWith");
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
__name(_endsWith, "_endsWith");
function _property(property, schema, params) {
  return new $ZodCheckProperty({
    check: "property",
    property,
    schema,
    ...normalizeParams(params)
  });
}
__name(_property, "_property");
function _mime(types, params) {
  return new $ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...normalizeParams(params)
  });
}
__name(_mime, "_mime");
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
__name(_overwrite, "_overwrite");
function _normalize(form) {
  return _overwrite((input) => input.normalize(form));
}
__name(_normalize, "_normalize");
function _trim() {
  return _overwrite((input) => input.trim());
}
__name(_trim, "_trim");
function _toLowerCase() {
  return _overwrite((input) => input.toLowerCase());
}
__name(_toLowerCase, "_toLowerCase");
function _toUpperCase() {
  return _overwrite((input) => input.toUpperCase());
}
__name(_toUpperCase, "_toUpperCase");
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
__name(_array, "_array");
function _union(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
__name(_union, "_union");
function _discriminatedUnion(Class2, discriminator, options, params) {
  return new Class2({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
__name(_discriminatedUnion, "_discriminatedUnion");
function _intersection(Class2, left, right) {
  return new Class2({
    type: "intersection",
    left,
    right
  });
}
__name(_intersection, "_intersection");
function _tuple(Class2, items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new Class2({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
__name(_tuple, "_tuple");
function _record(Class2, keyType, valueType, params) {
  return new Class2({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
__name(_record, "_record");
function _map(Class2, keyType, valueType, params) {
  return new Class2({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
__name(_map, "_map");
function _set(Class2, valueType, params) {
  return new Class2({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
__name(_set, "_set");
function _enum(Class2, values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
__name(_enum, "_enum");
function _nativeEnum(Class2, entries, params) {
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
__name(_nativeEnum, "_nativeEnum");
function _literal(Class2, value, params) {
  return new Class2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
__name(_literal, "_literal");
function _file(Class2, params) {
  return new Class2({
    type: "file",
    ...normalizeParams(params)
  });
}
__name(_file, "_file");
function _transform(Class2, fn) {
  return new Class2({
    type: "transform",
    transform: fn
  });
}
__name(_transform, "_transform");
function _optional(Class2, innerType) {
  return new Class2({
    type: "optional",
    innerType
  });
}
__name(_optional, "_optional");
function _nullable(Class2, innerType) {
  return new Class2({
    type: "nullable",
    innerType
  });
}
__name(_nullable, "_nullable");
function _default(Class2, innerType, defaultValue) {
  return new Class2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    }
  });
}
__name(_default, "_default");
function _nonoptional(Class2, innerType, params) {
  return new Class2({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
__name(_nonoptional, "_nonoptional");
function _success(Class2, innerType) {
  return new Class2({
    type: "success",
    innerType
  });
}
__name(_success, "_success");
function _catch(Class2, innerType, catchValue) {
  return new Class2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
__name(_catch, "_catch");
function _pipe(Class2, in_, out) {
  return new Class2({
    type: "pipe",
    in: in_,
    out
  });
}
__name(_pipe, "_pipe");
function _readonly(Class2, innerType) {
  return new Class2({
    type: "readonly",
    innerType
  });
}
__name(_readonly, "_readonly");
function _templateLiteral(Class2, parts, params) {
  return new Class2({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
__name(_templateLiteral, "_templateLiteral");
function _lazy(Class2, getter) {
  return new Class2({
    type: "lazy",
    getter
  });
}
__name(_lazy, "_lazy");
function _promise(Class2, innerType) {
  return new Class2({
    type: "promise",
    innerType
  });
}
__name(_promise, "_promise");
function _custom(Class2, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
  return schema;
}
__name(_custom, "_custom");
function _refine(Class2, fn, _params) {
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
__name(_refine, "_refine");
function _stringbool(Classes, _params) {
  const params = normalizeParams(_params);
  let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (params.case !== "sensitive") {
    truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
    falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
  }
  const truthySet = new Set(truthyArray);
  const falsySet = new Set(falsyArray);
  const _Pipe = Classes.Pipe ?? $ZodPipe;
  const _Boolean = Classes.Boolean ?? $ZodBoolean;
  const _String = Classes.String ?? $ZodString;
  const _Transform = Classes.Transform ?? $ZodTransform;
  const tx = new _Transform({
    type: "transform",
    transform: /* @__PURE__ */ __name((input, payload) => {
      let data = input;
      if (params.case !== "sensitive")
        data = data.toLowerCase();
      if (truthySet.has(data)) {
        return true;
      } else if (falsySet.has(data)) {
        return false;
      } else {
        payload.issues.push({
          code: "invalid_value",
          expected: "stringbool",
          values: [...truthySet, ...falsySet],
          input: payload.value,
          inst: tx
        });
        return {};
      }
    }, "transform"),
    error: params.error
  });
  const innerPipe = new _Pipe({
    type: "pipe",
    in: new _String({ type: "string", error: params.error }),
    out: tx,
    error: params.error
  });
  const outerPipe = new _Pipe({
    type: "pipe",
    in: innerPipe,
    out: new _Boolean({
      type: "boolean",
      error: params.error
    }),
    error: params.error
  });
  return outerPipe;
}
__name(_stringbool, "_stringbool");
function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
  const params = normalizeParams(_params);
  const def = {
    ...normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params
  };
  if (fnOrRegex instanceof RegExp) {
    def.pattern = fnOrRegex;
  }
  const inst = new Class2(def);
  return inst;
}
__name(_stringFormat, "_stringFormat");

// node_modules/zod/v4/core/function.js
var $ZodFunction = class {
  static {
    __name(this, "$ZodFunction");
  }
  constructor(def) {
    this._def = def;
    this.def = def;
  }
  implement(func) {
    if (typeof func !== "function") {
      throw new Error("implement() must be called with a function");
    }
    const impl = /* @__PURE__ */ __name((...args) => {
      const parsedArgs = this._def.input ? parse(this._def.input, args, void 0, { callee: impl }) : args;
      if (!Array.isArray(parsedArgs)) {
        throw new Error("Invalid arguments schema: not an array or tuple schema.");
      }
      const output = func(...parsedArgs);
      return this._def.output ? parse(this._def.output, output, void 0, { callee: impl }) : output;
    }, "impl");
    return impl;
  }
  implementAsync(func) {
    if (typeof func !== "function") {
      throw new Error("implement() must be called with a function");
    }
    const impl = /* @__PURE__ */ __name(async (...args) => {
      const parsedArgs = this._def.input ? await parseAsync(this._def.input, args, void 0, { callee: impl }) : args;
      if (!Array.isArray(parsedArgs)) {
        throw new Error("Invalid arguments schema: not an array or tuple schema.");
      }
      const output = await func(...parsedArgs);
      return this._def.output ? parseAsync(this._def.output, output, void 0, { callee: impl }) : output;
    }, "impl");
    return impl;
  }
  input(...args) {
    const F = this.constructor;
    if (Array.isArray(args[0])) {
      return new F({
        type: "function",
        input: new $ZodTuple({
          type: "tuple",
          items: args[0],
          rest: args[1]
        }),
        output: this._def.output
      });
    }
    return new F({
      type: "function",
      input: args[0],
      output: this._def.output
    });
  }
  output(output) {
    const F = this.constructor;
    return new F({
      type: "function",
      input: this._def.input,
      output
    });
  }
};
function _function(params) {
  return new $ZodFunction({
    type: "function",
    input: Array.isArray(params?.input) ? _tuple($ZodTuple, params?.input) : params?.input ?? _array($ZodArray, _unknown($ZodUnknown)),
    output: params?.output ?? _unknown($ZodUnknown)
  });
}
__name(_function, "_function");

// node_modules/zod/v4/core/to-json-schema.js
init_esm();
var JSONSchemaGenerator = class {
  static {
    __name(this, "JSONSchemaGenerator");
  }
  constructor(params) {
    this.counter = 0;
    this.metadataRegistry = params?.metadata ?? globalRegistry;
    this.target = params?.target ?? "draft-2020-12";
    this.unrepresentable = params?.unrepresentable ?? "throw";
    this.override = params?.override ?? (() => {
    });
    this.io = params?.io ?? "output";
    this.seen = /* @__PURE__ */ new Map();
  }
  process(schema, _params = { path: [], schemaPath: [] }) {
    var _a21;
    const def = schema._zod.def;
    const formatMap = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    };
    const seen = this.seen.get(schema);
    if (seen) {
      seen.count++;
      const isCycle = _params.schemaPath.includes(schema);
      if (isCycle) {
        seen.cycle = _params.path;
      }
      return seen.schema;
    }
    const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
    this.seen.set(schema, result);
    const overrideSchema = schema._zod.toJSONSchema?.();
    if (overrideSchema) {
      result.schema = overrideSchema;
    } else {
      const params = {
        ..._params,
        schemaPath: [..._params.schemaPath, schema],
        path: _params.path
      };
      const parent = schema._zod.parent;
      if (parent) {
        result.ref = parent;
        this.process(parent, params);
        this.seen.get(parent).isParent = true;
      } else {
        const _json = result.schema;
        switch (def.type) {
          case "string": {
            const json3 = _json;
            json3.type = "string";
            const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
            if (typeof minimum === "number")
              json3.minLength = minimum;
            if (typeof maximum === "number")
              json3.maxLength = maximum;
            if (format) {
              json3.format = formatMap[format] ?? format;
              if (json3.format === "")
                delete json3.format;
            }
            if (contentEncoding)
              json3.contentEncoding = contentEncoding;
            if (patterns && patterns.size > 0) {
              const regexes = [...patterns];
              if (regexes.length === 1)
                json3.pattern = regexes[0].source;
              else if (regexes.length > 1) {
                result.schema.allOf = [
                  ...regexes.map((regex) => ({
                    ...this.target === "draft-7" ? { type: "string" } : {},
                    pattern: regex.source
                  }))
                ];
              }
            }
            break;
          }
          case "number": {
            const json3 = _json;
            const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
            if (typeof format === "string" && format.includes("int"))
              json3.type = "integer";
            else
              json3.type = "number";
            if (typeof exclusiveMinimum === "number")
              json3.exclusiveMinimum = exclusiveMinimum;
            if (typeof minimum === "number") {
              json3.minimum = minimum;
              if (typeof exclusiveMinimum === "number") {
                if (exclusiveMinimum >= minimum)
                  delete json3.minimum;
                else
                  delete json3.exclusiveMinimum;
              }
            }
            if (typeof exclusiveMaximum === "number")
              json3.exclusiveMaximum = exclusiveMaximum;
            if (typeof maximum === "number") {
              json3.maximum = maximum;
              if (typeof exclusiveMaximum === "number") {
                if (exclusiveMaximum <= maximum)
                  delete json3.maximum;
                else
                  delete json3.exclusiveMaximum;
              }
            }
            if (typeof multipleOf === "number")
              json3.multipleOf = multipleOf;
            break;
          }
          case "boolean": {
            const json3 = _json;
            json3.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw") {
              throw new Error("BigInt cannot be represented in JSON Schema");
            }
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw") {
              throw new Error("Symbols cannot be represented in JSON Schema");
            }
            break;
          }
          case "null": {
            _json.type = "null";
            break;
          }
          case "any": {
            break;
          }
          case "unknown": {
            break;
          }
          case "undefined": {
            if (this.unrepresentable === "throw") {
              throw new Error("Undefined cannot be represented in JSON Schema");
            }
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw") {
              throw new Error("Void cannot be represented in JSON Schema");
            }
            break;
          }
          case "never": {
            _json.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw") {
              throw new Error("Date cannot be represented in JSON Schema");
            }
            break;
          }
          case "array": {
            const json3 = _json;
            const { minimum, maximum } = schema._zod.bag;
            if (typeof minimum === "number")
              json3.minItems = minimum;
            if (typeof maximum === "number")
              json3.maxItems = maximum;
            json3.type = "array";
            json3.items = this.process(def.element, { ...params, path: [...params.path, "items"] });
            break;
          }
          case "object": {
            const json3 = _json;
            json3.type = "object";
            json3.properties = {};
            const shape = def.shape;
            for (const key in shape) {
              json3.properties[key] = this.process(shape[key], {
                ...params,
                path: [...params.path, "properties", key]
              });
            }
            const allKeys = new Set(Object.keys(shape));
            const requiredKeys = new Set([...allKeys].filter((key) => {
              const v = def.shape[key]._zod;
              if (this.io === "input") {
                return v.optin === void 0;
              } else {
                return v.optout === void 0;
              }
            }));
            if (requiredKeys.size > 0) {
              json3.required = Array.from(requiredKeys);
            }
            if (def.catchall?._zod.def.type === "never") {
              json3.additionalProperties = false;
            } else if (!def.catchall) {
              if (this.io === "output")
                json3.additionalProperties = false;
            } else if (def.catchall) {
              json3.additionalProperties = this.process(def.catchall, {
                ...params,
                path: [...params.path, "additionalProperties"]
              });
            }
            break;
          }
          case "union": {
            const json3 = _json;
            json3.anyOf = def.options.map((x, i) => this.process(x, {
              ...params,
              path: [...params.path, "anyOf", i]
            }));
            break;
          }
          case "intersection": {
            const json3 = _json;
            const a = this.process(def.left, {
              ...params,
              path: [...params.path, "allOf", 0]
            });
            const b = this.process(def.right, {
              ...params,
              path: [...params.path, "allOf", 1]
            });
            const isSimpleIntersection = /* @__PURE__ */ __name((val) => "allOf" in val && Object.keys(val).length === 1, "isSimpleIntersection");
            const allOf = [
              ...isSimpleIntersection(a) ? a.allOf : [a],
              ...isSimpleIntersection(b) ? b.allOf : [b]
            ];
            json3.allOf = allOf;
            break;
          }
          case "tuple": {
            const json3 = _json;
            json3.type = "array";
            const prefixItems = def.items.map((x, i) => this.process(x, { ...params, path: [...params.path, "prefixItems", i] }));
            if (this.target === "draft-2020-12") {
              json3.prefixItems = prefixItems;
            } else {
              json3.items = prefixItems;
            }
            if (def.rest) {
              const rest = this.process(def.rest, {
                ...params,
                path: [...params.path, "items"]
              });
              if (this.target === "draft-2020-12") {
                json3.items = rest;
              } else {
                json3.additionalItems = rest;
              }
            }
            if (def.rest) {
              json3.items = this.process(def.rest, {
                ...params,
                path: [...params.path, "items"]
              });
            }
            const { minimum, maximum } = schema._zod.bag;
            if (typeof minimum === "number")
              json3.minItems = minimum;
            if (typeof maximum === "number")
              json3.maxItems = maximum;
            break;
          }
          case "record": {
            const json3 = _json;
            json3.type = "object";
            json3.propertyNames = this.process(def.keyType, { ...params, path: [...params.path, "propertyNames"] });
            json3.additionalProperties = this.process(def.valueType, {
              ...params,
              path: [...params.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw") {
              throw new Error("Map cannot be represented in JSON Schema");
            }
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw") {
              throw new Error("Set cannot be represented in JSON Schema");
            }
            break;
          }
          case "enum": {
            const json3 = _json;
            const values = getEnumValues(def.entries);
            if (values.every((v) => typeof v === "number"))
              json3.type = "number";
            if (values.every((v) => typeof v === "string"))
              json3.type = "string";
            json3.enum = values;
            break;
          }
          case "literal": {
            const json3 = _json;
            const vals = [];
            for (const val of def.values) {
              if (val === void 0) {
                if (this.unrepresentable === "throw") {
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                } else {
                }
              } else if (typeof val === "bigint") {
                if (this.unrepresentable === "throw") {
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                } else {
                  vals.push(Number(val));
                }
              } else {
                vals.push(val);
              }
            }
            if (vals.length === 0) {
            } else if (vals.length === 1) {
              const val = vals[0];
              json3.type = val === null ? "null" : typeof val;
              json3.const = val;
            } else {
              if (vals.every((v) => typeof v === "number"))
                json3.type = "number";
              if (vals.every((v) => typeof v === "string"))
                json3.type = "string";
              if (vals.every((v) => typeof v === "boolean"))
                json3.type = "string";
              if (vals.every((v) => v === null))
                json3.type = "null";
              json3.enum = vals;
            }
            break;
          }
          case "file": {
            const json3 = _json;
            const file2 = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            };
            const { minimum, maximum, mime } = schema._zod.bag;
            if (minimum !== void 0)
              file2.minLength = minimum;
            if (maximum !== void 0)
              file2.maxLength = maximum;
            if (mime) {
              if (mime.length === 1) {
                file2.contentMediaType = mime[0];
                Object.assign(json3, file2);
              } else {
                json3.anyOf = mime.map((m) => {
                  const mFile = { ...file2, contentMediaType: m };
                  return mFile;
                });
              }
            } else {
              Object.assign(json3, file2);
            }
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw") {
              throw new Error("Transforms cannot be represented in JSON Schema");
            }
            break;
          }
          case "nullable": {
            const inner = this.process(def.innerType, params);
            _json.anyOf = [inner, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(def.innerType, params);
            result.ref = def.innerType;
            break;
          }
          case "success": {
            const json3 = _json;
            json3.type = "boolean";
            break;
          }
          case "default": {
            this.process(def.innerType, params);
            result.ref = def.innerType;
            _json.default = JSON.parse(JSON.stringify(def.defaultValue));
            break;
          }
          case "prefault": {
            this.process(def.innerType, params);
            result.ref = def.innerType;
            if (this.io === "input")
              _json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
            break;
          }
          case "catch": {
            this.process(def.innerType, params);
            result.ref = def.innerType;
            let catchValue;
            try {
              catchValue = def.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            _json.default = catchValue;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw") {
              throw new Error("NaN cannot be represented in JSON Schema");
            }
            break;
          }
          case "template_literal": {
            const json3 = _json;
            const pattern = schema._zod.pattern;
            if (!pattern)
              throw new Error("Pattern not found in template literal");
            json3.type = "string";
            json3.pattern = pattern.source;
            break;
          }
          case "pipe": {
            const innerType = this.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
            this.process(innerType, params);
            result.ref = innerType;
            break;
          }
          case "readonly": {
            this.process(def.innerType, params);
            result.ref = def.innerType;
            _json.readOnly = true;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(def.innerType, params);
            result.ref = def.innerType;
            break;
          }
          case "optional": {
            this.process(def.innerType, params);
            result.ref = def.innerType;
            break;
          }
          case "lazy": {
            const innerType = schema._zod.innerType;
            this.process(innerType, params);
            result.ref = innerType;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw") {
              throw new Error("Custom types cannot be represented in JSON Schema");
            }
            break;
          }
          default: {
            def;
          }
        }
      }
    }
    const meta = this.metadataRegistry.get(schema);
    if (meta)
      Object.assign(result.schema, meta);
    if (this.io === "input" && isTransforming(schema)) {
      delete result.schema.examples;
      delete result.schema.default;
    }
    if (this.io === "input" && result.schema._prefault)
      (_a21 = result.schema).default ?? (_a21.default = result.schema._prefault);
    delete result.schema._prefault;
    const _result = this.seen.get(schema);
    return _result.schema;
  }
  emit(schema, _params) {
    const params = {
      cycles: _params?.cycles ?? "ref",
      reused: _params?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: _params?.external ?? void 0
    };
    const root = this.seen.get(schema);
    if (!root)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const makeURI = /* @__PURE__ */ __name((entry) => {
      const defsSegment = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (params.external) {
        const externalId = params.external.registry.get(entry[0])?.id;
        const uriGenerator = params.external.uri ?? ((id2) => id2);
        if (externalId) {
          return { ref: uriGenerator(externalId) };
        }
        const id = entry[1].defId ?? entry[1].schema.id ?? `schema${this.counter++}`;
        entry[1].defId = id;
        return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
      }
      if (entry[1] === root) {
        return { ref: "#" };
      }
      const uriPrefix = `#`;
      const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
      const defId = entry[1].schema.id ?? `__schema${this.counter++}`;
      return { defId, ref: defUriPrefix + defId };
    }, "makeURI");
    const extractToDef = /* @__PURE__ */ __name((entry) => {
      if (entry[1].schema.$ref) {
        return;
      }
      const seen = entry[1];
      const { ref, defId } = makeURI(entry);
      seen.def = { ...seen.schema };
      if (defId)
        seen.defId = defId;
      const schema2 = seen.schema;
      for (const key in schema2) {
        delete schema2[key];
      }
      schema2.$ref = ref;
    }, "extractToDef");
    if (params.cycles === "throw") {
      for (const entry of this.seen.entries()) {
        const seen = entry[1];
        if (seen.cycle) {
          throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
      }
    }
    for (const entry of this.seen.entries()) {
      const seen = entry[1];
      if (schema === entry[0]) {
        extractToDef(entry);
        continue;
      }
      if (params.external) {
        const ext = params.external.registry.get(entry[0])?.id;
        if (schema !== entry[0] && ext) {
          extractToDef(entry);
          continue;
        }
      }
      const id = this.metadataRegistry.get(entry[0])?.id;
      if (id) {
        extractToDef(entry);
        continue;
      }
      if (seen.cycle) {
        extractToDef(entry);
        continue;
      }
      if (seen.count > 1) {
        if (params.reused === "ref") {
          extractToDef(entry);
          continue;
        }
      }
    }
    const flattenRef = /* @__PURE__ */ __name((zodSchema2, params2) => {
      const seen = this.seen.get(zodSchema2);
      const schema2 = seen.def ?? seen.schema;
      const _cached = { ...schema2 };
      if (seen.ref === null) {
        return;
      }
      const ref = seen.ref;
      seen.ref = null;
      if (ref) {
        flattenRef(ref, params2);
        const refSchema = this.seen.get(ref).schema;
        if (refSchema.$ref && params2.target === "draft-7") {
          schema2.allOf = schema2.allOf ?? [];
          schema2.allOf.push(refSchema);
        } else {
          Object.assign(schema2, refSchema);
          Object.assign(schema2, _cached);
        }
      }
      if (!seen.isParent)
        this.override({
          zodSchema: zodSchema2,
          jsonSchema: schema2,
          path: seen.path ?? []
        });
    }, "flattenRef");
    for (const entry of [...this.seen.entries()].reverse()) {
      flattenRef(entry[0], { target: this.target });
    }
    const result = {};
    if (this.target === "draft-2020-12") {
      result.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if (this.target === "draft-7") {
      result.$schema = "http://json-schema.org/draft-07/schema#";
    } else {
      console.warn(`Invalid target: ${this.target}`);
    }
    if (params.external?.uri) {
      const id = params.external.registry.get(schema)?.id;
      if (!id)
        throw new Error("Schema is missing an `id` property");
      result.$id = params.external.uri(id);
    }
    Object.assign(result, root.def);
    const defs = params.external?.defs ?? {};
    for (const entry of this.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        defs[seen.defId] = seen.def;
      }
    }
    if (params.external) {
    } else {
      if (Object.keys(defs).length > 0) {
        if (this.target === "draft-2020-12") {
          result.$defs = defs;
        } else {
          result.definitions = defs;
        }
      }
    }
    try {
      return JSON.parse(JSON.stringify(result));
    } catch (_err) {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function toJSONSchema(input, _params) {
  if (input instanceof $ZodRegistry) {
    const gen2 = new JSONSchemaGenerator(_params);
    const defs = {};
    for (const entry of input._idmap.entries()) {
      const [_, schema] = entry;
      gen2.process(schema);
    }
    const schemas = {};
    const external = {
      registry: input,
      uri: _params?.uri,
      defs
    };
    for (const entry of input._idmap.entries()) {
      const [key, schema] = entry;
      schemas[key] = gen2.emit(schema, {
        ..._params,
        external
      });
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = gen2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const gen = new JSONSchemaGenerator(_params);
  gen.process(input);
  return gen.emit(input, _params);
}
__name(toJSONSchema, "toJSONSchema");
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const schema = _schema;
  const def = schema._zod.def;
  switch (def.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return false;
    case "array": {
      return isTransforming(def.element, ctx);
    }
    case "object": {
      for (const key in def.shape) {
        if (isTransforming(def.shape[key], ctx))
          return true;
      }
      return false;
    }
    case "union": {
      for (const option of def.options) {
        if (isTransforming(option, ctx))
          return true;
      }
      return false;
    }
    case "intersection": {
      return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
    }
    case "tuple": {
      for (const item of def.items) {
        if (isTransforming(item, ctx))
          return true;
      }
      if (def.rest && isTransforming(def.rest, ctx))
        return true;
      return false;
    }
    case "record": {
      return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
    }
    case "map": {
      return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
    }
    case "set": {
      return isTransforming(def.valueType, ctx);
    }
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return isTransforming(def.innerType, ctx);
    case "lazy":
      return isTransforming(def.getter(), ctx);
    case "default": {
      return isTransforming(def.innerType, ctx);
    }
    case "prefault": {
      return isTransforming(def.innerType, ctx);
    }
    case "custom": {
      return false;
    }
    case "transform": {
      return true;
    }
    case "pipe": {
      return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
    }
    case "success": {
      return false;
    }
    case "catch": {
      return false;
    }
    default:
      def;
  }
  throw new Error(`Unknown schema type: ${def.type}`);
}
__name(isTransforming, "isTransforming");

// node_modules/zod/v4/core/json-schema.js
var json_schema_exports = {};
init_esm();

// node_modules/zod/v4/classic/schemas.js
init_esm();

// node_modules/zod/v4/classic/checks.js
init_esm();

// node_modules/zod/v4/classic/iso.js
var iso_exports = {};
__export(iso_exports, {
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  date: () => date2,
  datetime: () => datetime2,
  duration: () => duration2,
  time: () => time2
});
init_esm();
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
__name(datetime2, "datetime");
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function date2(params) {
  return _isoDate(ZodISODate, params);
}
__name(date2, "date");
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
__name(time2, "time");
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}
__name(duration2, "duration");

// node_modules/zod/v4/classic/parse.js
init_esm();

// node_modules/zod/v4/classic/errors.js
init_esm();
var initializer2 = /* @__PURE__ */ __name((inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: /* @__PURE__ */ __name((mapper) => formatError(inst, mapper), "value")
      // enumerable: false,
    },
    flatten: {
      value: /* @__PURE__ */ __name((mapper) => flattenError(inst, mapper), "value")
      // enumerable: false,
    },
    addIssue: {
      value: /* @__PURE__ */ __name((issue2) => inst.issues.push(issue2), "value")
      // enumerable: false,
    },
    addIssues: {
      value: /* @__PURE__ */ __name((issues2) => inst.issues.push(...issues2), "value")
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, "initializer");
var ZodError = $constructor("ZodError", initializer2);
var ZodRealError = $constructor("ZodError", initializer2, {
  Parent: Error
});

// node_modules/zod/v4/classic/parse.js
var parse2 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);

// node_modules/zod/v4/classic/schemas.js
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  $ZodType.init(inst, def);
  inst.def = def;
  Object.defineProperty(inst, "_def", { value: def });
  inst.check = (...checks) => {
    return inst.clone(
      {
        ...def,
        checks: [
          ...def.checks ?? [],
          ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
        ]
      }
      // { parent: true }
    );
  };
  inst.clone = (def2, params) => clone(inst, def2, params);
  inst.brand = () => inst;
  inst.register = (reg, meta) => {
    reg.add(inst, meta);
    return inst;
  };
  inst.parse = (data, params) => parse2(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse2(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
  inst.spa = inst.safeParseAsync;
  inst.refine = (check2, params) => inst.check(refine(check2, params));
  inst.superRefine = (refinement) => inst.check(superRefine(refinement));
  inst.overwrite = (fn) => inst.check(_overwrite(fn));
  inst.optional = () => optional(inst);
  inst.nullable = () => nullable(inst);
  inst.nullish = () => optional(nullable(inst));
  inst.nonoptional = (params) => nonoptional(inst, params);
  inst.array = () => array(inst);
  inst.or = (arg) => union([inst, arg]);
  inst.and = (arg) => intersection(inst, arg);
  inst.transform = (tx) => pipe(inst, transform(tx));
  inst.default = (def2) => _default2(inst, def2);
  inst.prefault = (def2) => prefault(inst, def2);
  inst.catch = (params) => _catch2(inst, params);
  inst.pipe = (target) => pipe(inst, target);
  inst.readonly = () => readonly(inst);
  inst.describe = (description) => {
    const cl = inst.clone();
    globalRegistry.add(cl, { description });
    return cl;
  };
  Object.defineProperty(inst, "description", {
    get() {
      return globalRegistry.get(inst)?.description;
    },
    configurable: true
  });
  inst.meta = (...args) => {
    if (args.length === 0) {
      return globalRegistry.get(inst);
    }
    const cl = inst.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  };
  inst.isOptional = () => inst.safeParse(void 0).success;
  inst.isNullable = () => inst.safeParse(null).success;
  return inst;
});
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodType.init(inst, def);
  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;
  inst.regex = (...args) => inst.check(_regex(...args));
  inst.includes = (...args) => inst.check(_includes(...args));
  inst.startsWith = (...args) => inst.check(_startsWith(...args));
  inst.endsWith = (...args) => inst.check(_endsWith(...args));
  inst.min = (...args) => inst.check(_minLength(...args));
  inst.max = (...args) => inst.check(_maxLength(...args));
  inst.length = (...args) => inst.check(_length(...args));
  inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
  inst.lowercase = (params) => inst.check(_lowercase(params));
  inst.uppercase = (params) => inst.check(_uppercase(params));
  inst.trim = () => inst.check(_trim());
  inst.normalize = (...args) => inst.check(_normalize(...args));
  inst.toLowerCase = () => inst.check(_toLowerCase());
  inst.toUpperCase = () => inst.check(_toUpperCase());
});
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
  inst.email = (params) => inst.check(_email(ZodEmail, params));
  inst.url = (params) => inst.check(_url(ZodURL, params));
  inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
  inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
  inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
  inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
  inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
  inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
  inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
  inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
  inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
  inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
  inst.xid = (params) => inst.check(_xid(ZodXID, params));
  inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
  inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
  inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
  inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
  inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
  inst.e164 = (params) => inst.check(_e164(ZodE164, params));
  inst.datetime = (params) => inst.check(datetime2(params));
  inst.date = (params) => inst.check(date2(params));
  inst.time = (params) => inst.check(time2(params));
  inst.duration = (params) => inst.check(duration2(params));
});
function string2(params) {
  return _string(ZodString, params);
}
__name(string2, "string");
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function email2(params) {
  return _email(ZodEmail, params);
}
__name(email2, "email");
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function guid2(params) {
  return _guid(ZodGUID, params);
}
__name(guid2, "guid");
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function uuid2(params) {
  return _uuid(ZodUUID, params);
}
__name(uuid2, "uuid");
function uuidv4(params) {
  return _uuidv4(ZodUUID, params);
}
__name(uuidv4, "uuidv4");
function uuidv6(params) {
  return _uuidv6(ZodUUID, params);
}
__name(uuidv6, "uuidv6");
function uuidv7(params) {
  return _uuidv7(ZodUUID, params);
}
__name(uuidv7, "uuidv7");
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function url(params) {
  return _url(ZodURL, params);
}
__name(url, "url");
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function emoji2(params) {
  return _emoji2(ZodEmoji, params);
}
__name(emoji2, "emoji");
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function nanoid2(params) {
  return _nanoid(ZodNanoID, params);
}
__name(nanoid2, "nanoid");
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid3(params) {
  return _cuid(ZodCUID, params);
}
__name(cuid3, "cuid");
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid22(params) {
  return _cuid2(ZodCUID2, params);
}
__name(cuid22, "cuid2");
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ulid2(params) {
  return _ulid(ZodULID, params);
}
__name(ulid2, "ulid");
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function xid2(params) {
  return _xid(ZodXID, params);
}
__name(xid2, "xid");
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ksuid2(params) {
  return _ksuid(ZodKSUID, params);
}
__name(ksuid2, "ksuid");
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv42(params) {
  return _ipv4(ZodIPv4, params);
}
__name(ipv42, "ipv4");
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv62(params) {
  return _ipv6(ZodIPv6, params);
}
__name(ipv62, "ipv6");
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv42(params) {
  return _cidrv4(ZodCIDRv4, params);
}
__name(cidrv42, "cidrv4");
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv62(params) {
  return _cidrv6(ZodCIDRv6, params);
}
__name(cidrv62, "cidrv6");
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base642(params) {
  return _base64(ZodBase64, params);
}
__name(base642, "base64");
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base64url2(params) {
  return _base64url(ZodBase64URL, params);
}
__name(base64url2, "base64url");
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function e1642(params) {
  return _e164(ZodE164, params);
}
__name(e1642, "e164");
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function jwt(params) {
  return _jwt(ZodJWT, params);
}
__name(jwt, "jwt");
var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
  $ZodCustomStringFormat.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
  return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
__name(stringFormat, "stringFormat");
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.int = (params) => inst.check(int(params));
  inst.safe = (params) => inst.check(int(params));
  inst.positive = (params) => inst.check(_gt(0, params));
  inst.nonnegative = (params) => inst.check(_gte(0, params));
  inst.negative = (params) => inst.check(_lt(0, params));
  inst.nonpositive = (params) => inst.check(_lte(0, params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  inst.step = (value, params) => inst.check(_multipleOf(value, params));
  inst.finite = () => inst;
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
});
function number2(params) {
  return _number(ZodNumber, params);
}
__name(number2, "number");
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
__name(int, "int");
function float32(params) {
  return _float32(ZodNumberFormat, params);
}
__name(float32, "float32");
function float64(params) {
  return _float64(ZodNumberFormat, params);
}
__name(float64, "float64");
function int32(params) {
  return _int32(ZodNumberFormat, params);
}
__name(int32, "int32");
function uint32(params) {
  return _uint32(ZodNumberFormat, params);
}
__name(uint32, "uint32");
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
__name(boolean2, "boolean");
var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
  $ZodBigInt.init(inst, def);
  ZodType.init(inst, def);
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.positive = (params) => inst.check(_gt(BigInt(0), params));
  inst.negative = (params) => inst.check(_lt(BigInt(0), params));
  inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
  inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  const bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null;
  inst.maxValue = bag.maximum ?? null;
  inst.format = bag.format ?? null;
});
function bigint2(params) {
  return _bigint(ZodBigInt, params);
}
__name(bigint2, "bigint");
var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
  $ZodBigIntFormat.init(inst, def);
  ZodBigInt.init(inst, def);
});
function int64(params) {
  return _int64(ZodBigIntFormat, params);
}
__name(int64, "int64");
function uint64(params) {
  return _uint64(ZodBigIntFormat, params);
}
__name(uint64, "uint64");
var ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
  $ZodSymbol.init(inst, def);
  ZodType.init(inst, def);
});
function symbol15(params) {
  return _symbol(ZodSymbol, params);
}
__name(symbol15, "symbol");
var ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
  $ZodUndefined.init(inst, def);
  ZodType.init(inst, def);
});
function _undefined3(params) {
  return _undefined2(ZodUndefined, params);
}
__name(_undefined3, "_undefined");
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def);
  ZodType.init(inst, def);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
__name(_null3, "_null");
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
  $ZodAny.init(inst, def);
  ZodType.init(inst, def);
});
function any() {
  return _any(ZodAny);
}
__name(any, "any");
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
});
function unknown() {
  return _unknown(ZodUnknown);
}
__name(unknown, "unknown");
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
});
function never(params) {
  return _never(ZodNever, params);
}
__name(never, "never");
var ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
  $ZodVoid.init(inst, def);
  ZodType.init(inst, def);
});
function _void2(params) {
  return _void(ZodVoid, params);
}
__name(_void2, "_void");
var ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
  $ZodDate.init(inst, def);
  ZodType.init(inst, def);
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  const c = inst._zod.bag;
  inst.minDate = c.minimum ? new Date(c.minimum) : null;
  inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date3(params) {
  return _date(ZodDate, params);
}
__name(date3, "date");
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst.element = def.element;
  inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
  inst.nonempty = (params) => inst.check(_minLength(1, params));
  inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
  inst.length = (len, params) => inst.check(_length(len, params));
  inst.unwrap = () => inst.element;
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
__name(array, "array");
function keyof(schema) {
  const shape = schema._zod.def.shape;
  return literal(Object.keys(shape));
}
__name(keyof, "keyof");
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  $ZodObject.init(inst, def);
  ZodType.init(inst, def);
  util_exports.defineLazy(inst, "shape", () => def.shape);
  inst.keyof = () => _enum2(Object.keys(inst._zod.def.shape));
  inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
  inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
  inst.strip = () => inst.clone({ ...inst._zod.def, catchall: void 0 });
  inst.extend = (incoming) => {
    return util_exports.extend(inst, incoming);
  };
  inst.merge = (other) => util_exports.merge(inst, other);
  inst.pick = (mask) => util_exports.pick(inst, mask);
  inst.omit = (mask) => util_exports.omit(inst, mask);
  inst.partial = (...args) => util_exports.partial(ZodOptional, inst, args[0]);
  inst.required = (...args) => util_exports.required(ZodNonOptional, inst, args[0]);
});
function object(shape, params) {
  const def = {
    type: "object",
    get shape() {
      util_exports.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    ...util_exports.normalizeParams(params)
  };
  return new ZodObject(def);
}
__name(object, "object");
function strictObject(shape, params) {
  return new ZodObject({
    type: "object",
    get shape() {
      util_exports.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    catchall: never(),
    ...util_exports.normalizeParams(params)
  });
}
__name(strictObject, "strictObject");
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    get shape() {
      util_exports.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    catchall: unknown(),
    ...util_exports.normalizeParams(params)
  });
}
__name(looseObject, "looseObject");
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...util_exports.normalizeParams(params)
  });
}
__name(union, "union");
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...util_exports.normalizeParams(params)
  });
}
__name(discriminatedUnion, "discriminatedUnion");
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
__name(intersection, "intersection");
var ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
  $ZodTuple.init(inst, def);
  ZodType.init(inst, def);
  inst.rest = (rest) => inst.clone({
    ...inst._zod.def,
    rest
  });
});
function tuple(items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple({
    type: "tuple",
    items,
    rest,
    ...util_exports.normalizeParams(params)
  });
}
__name(tuple, "tuple");
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  $ZodRecord.init(inst, def);
  ZodType.init(inst, def);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
__name(record, "record");
function partialRecord(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType: union([keyType, never()]),
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
__name(partialRecord, "partialRecord");
var ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
  $ZodMap.init(inst, def);
  ZodType.init(inst, def);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function map(keyType, valueType, params) {
  return new ZodMap({
    type: "map",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
__name(map, "map");
var ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
  $ZodSet.init(inst, def);
  ZodType.init(inst, def);
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function set(valueType, params) {
  return new ZodSet({
    type: "set",
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
__name(set, "set");
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum2(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
__name(_enum2, "_enum");
function nativeEnum(entries, params) {
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
__name(nativeEnum, "nativeEnum");
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util_exports.normalizeParams(params)
  });
}
__name(literal, "literal");
var ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
  $ZodFile.init(inst, def);
  ZodType.init(inst, def);
  inst.min = (size, params) => inst.check(_minSize(size, params));
  inst.max = (size, params) => inst.check(_maxSize(size, params));
  inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
  return _file(ZodFile, params);
}
__name(file, "file");
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(util_exports.issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = inst);
        _issue.continue ?? (_issue.continue = true);
        payload.issues.push(util_exports.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
__name(transform, "transform");
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
__name(optional, "optional");
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
__name(nullable, "nullable");
function nullish2(innerType) {
  return optional(nullable(innerType));
}
__name(nullish2, "nullish");
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default2(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    }
  });
}
__name(_default2, "_default");
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    }
  });
}
__name(prefault, "prefault");
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...util_exports.normalizeParams(params)
  });
}
__name(nonoptional, "nonoptional");
var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
  $ZodSuccess.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
  return new ZodSuccess({
    type: "success",
    innerType
  });
}
__name(success, "success");
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch2(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
__name(_catch2, "_catch");
var ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
  $ZodNaN.init(inst, def);
  ZodType.init(inst, def);
});
function nan(params) {
  return _nan(ZodNaN, params);
}
__name(nan, "nan");
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
__name(pipe, "pipe");
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
__name(readonly, "readonly");
var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
  $ZodTemplateLiteral.init(inst, def);
  ZodType.init(inst, def);
});
function templateLiteral(parts, params) {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...util_exports.normalizeParams(params)
  });
}
__name(templateLiteral, "templateLiteral");
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
  $ZodLazy.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
__name(lazy, "lazy");
var ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
  $ZodPromise.init(inst, def);
  ZodType.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
  return new ZodPromise({
    type: "promise",
    innerType
  });
}
__name(promise, "promise");
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
});
function check(fn) {
  const ch = new $ZodCheck({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  ch._zod.check = fn;
  return ch;
}
__name(check, "check");
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => true), _params);
}
__name(custom, "custom");
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
__name(refine, "refine");
function superRefine(fn) {
  const ch = check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(util_exports.issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(util_exports.issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}
__name(superRefine, "superRefine");
function _instanceof(cls, params = {
  error: `Input not instance of ${cls.name}`
}) {
  const inst = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: /* @__PURE__ */ __name((data) => data instanceof cls, "fn"),
    abort: true,
    ...util_exports.normalizeParams(params)
  });
  inst._zod.bag.Class = cls;
  return inst;
}
__name(_instanceof, "_instanceof");
var stringbool = /* @__PURE__ */ __name((...args) => _stringbool({
  Pipe: ZodPipe,
  Boolean: ZodBoolean,
  String: ZodString,
  Transform: ZodTransform
}, ...args), "stringbool");
function json(params) {
  const jsonSchema2 = lazy(() => {
    return union([string2(params), number2(), boolean2(), _null3(), array(jsonSchema2), record(string2(), jsonSchema2)]);
  });
  return jsonSchema2;
}
__name(json, "json");
function preprocess(fn, schema) {
  return pipe(transform(fn), schema);
}
__name(preprocess, "preprocess");

// node_modules/zod/v4/classic/compat.js
init_esm();
var ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function setErrorMap(map2) {
  config({
    customError: map2
  });
}
__name(setErrorMap, "setErrorMap");
function getErrorMap() {
  return config().customError;
}
__name(getErrorMap, "getErrorMap");

// node_modules/zod/v4/classic/coerce.js
var coerce_exports = {};
__export(coerce_exports, {
  bigint: () => bigint3,
  boolean: () => boolean3,
  date: () => date4,
  number: () => number3,
  string: () => string3
});
init_esm();
function string3(params) {
  return _coercedString(ZodString, params);
}
__name(string3, "string");
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
__name(number3, "number");
function boolean3(params) {
  return _coercedBoolean(ZodBoolean, params);
}
__name(boolean3, "boolean");
function bigint3(params) {
  return _coercedBigint(ZodBigInt, params);
}
__name(bigint3, "bigint");
function date4(params) {
  return _coercedDate(ZodDate, params);
}
__name(date4, "date");

// node_modules/zod/v4/classic/external.js
config(en_default());

// node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders(...headers) {
  return headers.reduce(
    (combinedHeaders, currentHeaders) => ({
      ...combinedHeaders,
      ...currentHeaders != null ? currentHeaders : {}
    }),
    {}
  );
}
__name(combineHeaders, "combineHeaders");
async function delay(delayInMs, options) {
  if (delayInMs == null) {
    return Promise.resolve();
  }
  const signal = options == null ? void 0 : options.abortSignal;
  return new Promise((resolve2, reject) => {
    if (signal == null ? void 0 : signal.aborted) {
      reject(createAbortError());
      return;
    }
    const timeoutId = setTimeout(() => {
      cleanup();
      resolve2();
    }, delayInMs);
    const cleanup = /* @__PURE__ */ __name(() => {
      clearTimeout(timeoutId);
      signal == null ? void 0 : signal.removeEventListener("abort", onAbort);
    }, "cleanup");
    const onAbort = /* @__PURE__ */ __name(() => {
      cleanup();
      reject(createAbortError());
    }, "onAbort");
    signal == null ? void 0 : signal.addEventListener("abort", onAbort);
  });
}
__name(delay, "delay");
function createAbortError() {
  return new DOMException("Delay was aborted", "AbortError");
}
__name(createAbortError, "createAbortError");
function extractResponseHeaders(response) {
  return Object.fromEntries([...response.headers]);
}
__name(extractResponseHeaders, "extractResponseHeaders");
var { btoa, atob: atob2 } = globalThis;
function convertBase64ToUint8Array(base64String) {
  const base64Url = base64String.replace(/-/g, "+").replace(/_/g, "/");
  const latin1string = atob2(base64Url);
  return Uint8Array.from(latin1string, (byte) => byte.codePointAt(0));
}
__name(convertBase64ToUint8Array, "convertBase64ToUint8Array");
function convertUint8ArrayToBase64(array3) {
  let latin1string = "";
  for (let i = 0; i < array3.length; i++) {
    latin1string += String.fromCodePoint(array3[i]);
  }
  return btoa(latin1string);
}
__name(convertUint8ArrayToBase64, "convertUint8ArrayToBase64");
function convertToBase64(value) {
  return value instanceof Uint8Array ? convertUint8ArrayToBase64(value) : value;
}
__name(convertToBase64, "convertToBase64");
var name14 = "AI_DownloadError";
var marker15 = `vercel.ai.error.${name14}`;
var symbol16 = Symbol.for(marker15);
var _a15;
var _b15;
var DownloadError = class extends (_b15 = AISDKError, _a15 = symbol16, _b15) {
  static {
    __name(this, "DownloadError");
  }
  constructor({
    url: url2,
    statusCode,
    statusText,
    cause,
    message = cause == null ? `Failed to download ${url2}: ${statusCode} ${statusText}` : `Failed to download ${url2}: ${cause}`
  }) {
    super({ name: name14, message, cause });
    this[_a15] = true;
    this.url = url2;
    this.statusCode = statusCode;
    this.statusText = statusText;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker15);
  }
};
var DEFAULT_MAX_DOWNLOAD_SIZE = 2 * 1024 * 1024 * 1024;
async function readResponseWithSizeLimit({
  response,
  url: url2,
  maxBytes = DEFAULT_MAX_DOWNLOAD_SIZE
}) {
  const contentLength = response.headers.get("content-length");
  if (contentLength != null) {
    const length = parseInt(contentLength, 10);
    if (!isNaN(length) && length > maxBytes) {
      throw new DownloadError({
        url: url2,
        message: `Download of ${url2} exceeded maximum size of ${maxBytes} bytes (Content-Length: ${length}).`
      });
    }
  }
  const body = response.body;
  if (body == null) {
    return new Uint8Array(0);
  }
  const reader = body.getReader();
  const chunks = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      totalBytes += value.length;
      if (totalBytes > maxBytes) {
        throw new DownloadError({
          url: url2,
          message: `Download of ${url2} exceeded maximum size of ${maxBytes} bytes.`
        });
      }
      chunks.push(value);
    }
  } finally {
    try {
      await reader.cancel();
    } finally {
      reader.releaseLock();
    }
  }
  const result = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}
__name(readResponseWithSizeLimit, "readResponseWithSizeLimit");
function validateDownloadUrl(url2) {
  let parsed;
  try {
    parsed = new URL(url2);
  } catch (e) {
    throw new DownloadError({
      url: url2,
      message: `Invalid URL: ${url2}`
    });
  }
  if (parsed.protocol === "data:") {
    return;
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new DownloadError({
      url: url2,
      message: `URL scheme must be http, https, or data, got ${parsed.protocol}`
    });
  }
  const hostname2 = parsed.hostname;
  if (!hostname2) {
    throw new DownloadError({
      url: url2,
      message: `URL must have a hostname`
    });
  }
  if (hostname2 === "localhost" || hostname2.endsWith(".local") || hostname2.endsWith(".localhost")) {
    throw new DownloadError({
      url: url2,
      message: `URL with hostname ${hostname2} is not allowed`
    });
  }
  if (hostname2.startsWith("[") && hostname2.endsWith("]")) {
    const ipv63 = hostname2.slice(1, -1);
    if (isPrivateIPv6(ipv63)) {
      throw new DownloadError({
        url: url2,
        message: `URL with IPv6 address ${hostname2} is not allowed`
      });
    }
    return;
  }
  if (isIPv4(hostname2)) {
    if (isPrivateIPv4(hostname2)) {
      throw new DownloadError({
        url: url2,
        message: `URL with IP address ${hostname2} is not allowed`
      });
    }
    return;
  }
}
__name(validateDownloadUrl, "validateDownloadUrl");
function isIPv4(hostname2) {
  const parts = hostname2.split(".");
  if (parts.length !== 4) return false;
  return parts.every((part) => {
    const num = Number(part);
    return Number.isInteger(num) && num >= 0 && num <= 255 && String(num) === part;
  });
}
__name(isIPv4, "isIPv4");
function isPrivateIPv4(ip) {
  const parts = ip.split(".").map(Number);
  const [a, b] = parts;
  if (a === 0) return true;
  if (a === 10) return true;
  if (a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  return false;
}
__name(isPrivateIPv4, "isPrivateIPv4");
function isPrivateIPv6(ip) {
  const normalized = ip.toLowerCase();
  if (normalized === "::1") return true;
  if (normalized === "::") return true;
  if (normalized.startsWith("::ffff:")) {
    const mappedPart = normalized.slice(7);
    if (isIPv4(mappedPart)) {
      return isPrivateIPv4(mappedPart);
    }
    const hexParts = mappedPart.split(":");
    if (hexParts.length === 2) {
      const high = parseInt(hexParts[0], 16);
      const low = parseInt(hexParts[1], 16);
      if (!isNaN(high) && !isNaN(low)) {
        const a = high >> 8 & 255;
        const b = high & 255;
        const c = low >> 8 & 255;
        const d = low & 255;
        return isPrivateIPv4(`${a}.${b}.${c}.${d}`);
      }
    }
  }
  if (normalized.startsWith("fc") || normalized.startsWith("fd")) return true;
  if (normalized.startsWith("fe80")) return true;
  return false;
}
__name(isPrivateIPv6, "isPrivateIPv6");
var createIdGenerator = /* @__PURE__ */ __name(({
  prefix,
  size = 16,
  alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator = "-"
} = {}) => {
  const generator = /* @__PURE__ */ __name(() => {
    const alphabetLength = alphabet.length;
    const chars = new Array(size);
    for (let i = 0; i < size; i++) {
      chars[i] = alphabet[Math.random() * alphabetLength | 0];
    }
    return chars.join("");
  }, "generator");
  if (prefix == null) {
    return generator;
  }
  if (alphabet.includes(separator)) {
    throw new InvalidArgumentError({
      argument: "separator",
      message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
    });
  }
  return () => `${prefix}${separator}${generator()}`;
}, "createIdGenerator");
var generateId = createIdGenerator();
function getErrorMessage2(error40) {
  if (error40 == null) {
    return "unknown error";
  }
  if (typeof error40 === "string") {
    return error40;
  }
  if (error40 instanceof Error) {
    return error40.message;
  }
  return JSON.stringify(error40);
}
__name(getErrorMessage2, "getErrorMessage");
function isAbortError(error40) {
  return (error40 instanceof Error || error40 instanceof DOMException) && (error40.name === "AbortError" || error40.name === "ResponseAborted" || // Next.js
  error40.name === "TimeoutError");
}
__name(isAbortError, "isAbortError");
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
var BUN_ERROR_CODES = [
  "ConnectionRefused",
  "ConnectionClosed",
  "FailedToOpenSocket",
  "ECONNRESET",
  "ECONNREFUSED",
  "ETIMEDOUT",
  "EPIPE"
];
function isBunNetworkError(error40) {
  if (!(error40 instanceof Error)) {
    return false;
  }
  const code = error40.code;
  if (typeof code === "string" && BUN_ERROR_CODES.includes(code)) {
    return true;
  }
  return false;
}
__name(isBunNetworkError, "isBunNetworkError");
function handleFetchError({
  error: error40,
  url: url2,
  requestBodyValues
}) {
  if (isAbortError(error40)) {
    return error40;
  }
  if (error40 instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error40.message.toLowerCase())) {
    const cause = error40.cause;
    if (cause != null) {
      return new APICallError({
        message: `Cannot connect to API: ${cause.message}`,
        cause,
        url: url2,
        requestBodyValues,
        isRetryable: true
        // retry when network error
      });
    }
  }
  if (isBunNetworkError(error40)) {
    return new APICallError({
      message: `Cannot connect to API: ${error40.message}`,
      cause: error40,
      url: url2,
      requestBodyValues,
      isRetryable: true
    });
  }
  return error40;
}
__name(handleFetchError, "handleFetchError");
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
  var _a24, _b23, _c;
  if (globalThisAny.window) {
    return `runtime/browser`;
  }
  if ((_a24 = globalThisAny.navigator) == null ? void 0 : _a24.userAgent) {
    return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
  }
  if ((_c = (_b23 = globalThisAny.process) == null ? void 0 : _b23.versions) == null ? void 0 : _c.node) {
    return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
  }
  if (globalThisAny.EdgeRuntime) {
    return `runtime/vercel-edge`;
  }
  return "runtime/unknown";
}
__name(getRuntimeEnvironmentUserAgent, "getRuntimeEnvironmentUserAgent");
function normalizeHeaders(headers) {
  if (headers == null) {
    return {};
  }
  const normalized = {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => {
      normalized[key.toLowerCase()] = value;
    });
  } else {
    if (!Array.isArray(headers)) {
      headers = Object.entries(headers);
    }
    for (const [key, value] of headers) {
      if (value != null) {
        normalized[key.toLowerCase()] = value;
      }
    }
  }
  return normalized;
}
__name(normalizeHeaders, "normalizeHeaders");
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
  const normalizedHeaders = new Headers(normalizeHeaders(headers));
  const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
  normalizedHeaders.set(
    "user-agent",
    [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" ")
  );
  return Object.fromEntries(normalizedHeaders.entries());
}
__name(withUserAgentSuffix, "withUserAgentSuffix");
var VERSION = true ? "4.0.25" : "0.0.0-test";
var getOriginalFetch = /* @__PURE__ */ __name(() => globalThis.fetch, "getOriginalFetch");
var getFromApi = /* @__PURE__ */ __name(async ({
  url: url2,
  headers = {},
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch()
}) => {
  try {
    const response = await fetch2(url2, {
      method: "GET",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/provider-utils/${VERSION}`,
        getRuntimeEnvironmentUserAgent()
      ),
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url: url2,
          requestBodyValues: {}
        });
      } catch (error40) {
        if (isAbortError(error40) || APICallError.isInstance(error40)) {
          throw error40;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error40,
          statusCode: response.status,
          url: url2,
          responseHeaders,
          requestBodyValues: {}
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url: url2,
        requestBodyValues: {}
      });
    } catch (error40) {
      if (error40 instanceof Error) {
        if (isAbortError(error40) || APICallError.isInstance(error40)) {
          throw error40;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error40,
        statusCode: response.status,
        url: url2,
        responseHeaders,
        requestBodyValues: {}
      });
    }
  } catch (error40) {
    throw handleFetchError({ error: error40, url: url2, requestBodyValues: {} });
  }
}, "getFromApi");
function isUrlSupported({
  mediaType,
  url: url2,
  supportedUrls
}) {
  url2 = url2.toLowerCase();
  mediaType = mediaType.toLowerCase();
  return Object.entries(supportedUrls).map(([key, value]) => {
    const mediaType2 = key.toLowerCase();
    return mediaType2 === "*" || mediaType2 === "*/*" ? { mediaTypePrefix: "", regexes: value } : { mediaTypePrefix: mediaType2.replace(/\*/, ""), regexes: value };
  }).filter(({ mediaTypePrefix }) => mediaType.startsWith(mediaTypePrefix)).flatMap(({ regexes }) => regexes).some((pattern) => pattern.test(url2));
}
__name(isUrlSupported, "isUrlSupported");
function loadApiKey({
  apiKey,
  environmentVariableName,
  apiKeyParameterName = "apiKey",
  description
}) {
  if (typeof apiKey === "string") {
    return apiKey;
  }
  if (apiKey != null) {
    throw new LoadAPIKeyError({
      message: `${description} API key must be a string.`
    });
  }
  if (typeof process === "undefined") {
    throw new LoadAPIKeyError({
      message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables are not supported in this environment.`
    });
  }
  apiKey = process.env[environmentVariableName];
  if (apiKey == null) {
    throw new LoadAPIKeyError({
      message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
    });
  }
  if (typeof apiKey !== "string") {
    throw new LoadAPIKeyError({
      message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
    });
  }
  return apiKey;
}
__name(loadApiKey, "loadApiKey");
function loadOptionalSetting({
  settingValue,
  environmentVariableName
}) {
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
__name(loadOptionalSetting, "loadOptionalSetting");
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse2(text2) {
  const obj = JSON.parse(text2);
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (suspectProtoRx.test(text2) === false && suspectConstructorRx.test(text2) === false) {
    return obj;
  }
  return filter(obj);
}
__name(_parse2, "_parse");
function filter(obj) {
  let next = [obj];
  while (next.length) {
    const nodes = next;
    next = [];
    for (const node of nodes) {
      if (Object.prototype.hasOwnProperty.call(node, "__proto__")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      if (Object.prototype.hasOwnProperty.call(node, "constructor") && node.constructor !== null && typeof node.constructor === "object" && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      for (const key in node) {
        const value = node[key];
        if (value && typeof value === "object") {
          next.push(value);
        }
      }
    }
  }
  return obj;
}
__name(filter, "filter");
function secureJsonParse(text2) {
  const { stackTraceLimit } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch (e) {
    return _parse2(text2);
  }
  try {
    return _parse2(text2);
  } finally {
    Error.stackTraceLimit = stackTraceLimit;
  }
}
__name(secureJsonParse, "secureJsonParse");
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
  if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
    jsonSchema2.additionalProperties = false;
    const { properties } = jsonSchema2;
    if (properties != null) {
      for (const key of Object.keys(properties)) {
        properties[key] = visit(properties[key]);
      }
    }
  }
  if (jsonSchema2.items != null) {
    jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
  }
  if (jsonSchema2.anyOf != null) {
    jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
  }
  if (jsonSchema2.allOf != null) {
    jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
  }
  if (jsonSchema2.oneOf != null) {
    jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
  }
  const { definitions } = jsonSchema2;
  if (definitions != null) {
    for (const key of Object.keys(definitions)) {
      definitions[key] = visit(definitions[key]);
    }
  }
  return jsonSchema2;
}
__name(addAdditionalPropertiesToJsonSchema, "addAdditionalPropertiesToJsonSchema");
function visit(def) {
  if (typeof def === "boolean") return def;
  return addAdditionalPropertiesToJsonSchema(def);
}
__name(visit, "visit");
var ignoreOverride = /* @__PURE__ */ Symbol(
  "Let zodToJsonSchema decide on which parser to use"
);
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
};
var getDefaultOptions = /* @__PURE__ */ __name((options) => typeof options === "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
}, "getDefaultOptions");
function parseAnyDef() {
  return {};
}
__name(parseAnyDef, "parseAnyDef");
function parseArrayDef(def, refs) {
  var _a24, _b23, _c;
  const res = {
    type: "array"
  };
  if (((_a24 = def.type) == null ? void 0 : _a24._def) && ((_c = (_b23 = def.type) == null ? void 0 : _b23._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    res.minItems = def.minLength.value;
  }
  if (def.maxLength) {
    res.maxItems = def.maxLength.value;
  }
  if (def.exactLength) {
    res.minItems = def.exactLength.value;
    res.maxItems = def.exactLength.value;
  }
  return res;
}
__name(parseArrayDef, "parseArrayDef");
function parseBigintDef(def) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks) return res;
  for (const check2 of def.checks) {
    switch (check2.kind) {
      case "min":
        if (check2.inclusive) {
          res.minimum = check2.value;
        } else {
          res.exclusiveMinimum = check2.value;
        }
        break;
      case "max":
        if (check2.inclusive) {
          res.maximum = check2.value;
        } else {
          res.exclusiveMaximum = check2.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check2.value;
        break;
    }
  }
  return res;
}
__name(parseBigintDef, "parseBigintDef");
function parseBooleanDef() {
  return { type: "boolean" };
}
__name(parseBooleanDef, "parseBooleanDef");
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}
__name(parseBrandedDef, "parseBrandedDef");
var parseCatchDef = /* @__PURE__ */ __name((def, refs) => {
  return parseDef(def.innerType._def, refs);
}, "parseCatchDef");
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def);
  }
}
__name(parseDateDef, "parseDateDef");
var integerDateParser = /* @__PURE__ */ __name((def) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  for (const check2 of def.checks) {
    switch (check2.kind) {
      case "min":
        res.minimum = check2.value;
        break;
      case "max":
        res.maximum = check2.value;
        break;
    }
  }
  return res;
}, "integerDateParser");
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}
__name(parseDefaultDef, "parseDefaultDef");
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
__name(parseEffectsDef, "parseEffectsDef");
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}
__name(parseEnumDef, "parseEnumDef");
var isJsonSchema7AllOfType = /* @__PURE__ */ __name((type) => {
  if ("type" in type && type.type === "string") return false;
  return "allOf" in type;
}, "isJsonSchema7AllOfType");
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x) => !!x);
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
    } else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === false) {
        const { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
__name(parseIntersectionDef, "parseIntersectionDef");
function parseLiteralDef(def) {
  const parsedType4 = typeof def.value;
  if (parsedType4 !== "bigint" && parsedType4 !== "number" && parsedType4 !== "boolean" && parsedType4 !== "string") {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  return {
    type: parsedType4 === "bigint" ? "integer" : parsedType4,
    const: def.value
  };
}
__name(parseLiteralDef, "parseLiteralDef");
var emojiRegex = void 0;
var zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: /* @__PURE__ */ __name(() => {
    if (emojiRegex === void 0) {
      emojiRegex = RegExp(
        "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
        "u"
      );
    }
    return emojiRegex;
  }, "emoji"),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check2 of def.checks) {
      switch (check2.kind) {
        case "min":
          res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check2.value) : check2.value;
          break;
        case "max":
          res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check2.value) : check2.value;
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check2.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check2.message, refs);
              break;
            case "pattern:zod":
              addPattern(res, zodPatterns.email, check2.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check2.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check2.message, refs);
          break;
        case "regex":
          addPattern(res, check2.regex, check2.message, refs);
          break;
        case "cuid":
          addPattern(res, zodPatterns.cuid, check2.message, refs);
          break;
        case "cuid2":
          addPattern(res, zodPatterns.cuid2, check2.message, refs);
          break;
        case "startsWith":
          addPattern(
            res,
            RegExp(`^${escapeLiteralCheckValue(check2.value, refs)}`),
            check2.message,
            refs
          );
          break;
        case "endsWith":
          addPattern(
            res,
            RegExp(`${escapeLiteralCheckValue(check2.value, refs)}$`),
            check2.message,
            refs
          );
          break;
        case "datetime":
          addFormat(res, "date-time", check2.message, refs);
          break;
        case "date":
          addFormat(res, "date", check2.message, refs);
          break;
        case "time":
          addFormat(res, "time", check2.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check2.message, refs);
          break;
        case "length":
          res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check2.value) : check2.value;
          res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check2.value) : check2.value;
          break;
        case "includes": {
          addPattern(
            res,
            RegExp(escapeLiteralCheckValue(check2.value, refs)),
            check2.message,
            refs
          );
          break;
        }
        case "ip": {
          if (check2.version !== "v6") {
            addFormat(res, "ipv4", check2.message, refs);
          }
          if (check2.version !== "v4") {
            addFormat(res, "ipv6", check2.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern(res, zodPatterns.base64url, check2.message, refs);
          break;
        case "jwt":
          addPattern(res, zodPatterns.jwt, check2.message, refs);
          break;
        case "cidr": {
          if (check2.version !== "v6") {
            addPattern(res, zodPatterns.ipv4Cidr, check2.message, refs);
          }
          if (check2.version !== "v4") {
            addPattern(res, zodPatterns.ipv6Cidr, check2.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern(res, zodPatterns.emoji(), check2.message, refs);
          break;
        case "ulid": {
          addPattern(res, zodPatterns.ulid, check2.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check2.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              res.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              addPattern(res, zodPatterns.base64, check2.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern(res, zodPatterns.nanoid, check2.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          /* @__PURE__ */ ((_) => {
          })(check2);
      }
    }
  }
  return res;
}
__name(parseStringDef, "parseStringDef");
function escapeLiteralCheckValue(literal2, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal2) : literal2;
}
__name(escapeLiteralCheckValue, "escapeLiteralCheckValue");
var ALPHA_NUMERIC = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i = 0; i < source.length; i++) {
    if (!ALPHA_NUMERIC.has(source[i])) {
      result += "\\";
    }
    result += source[i];
  }
  return result;
}
__name(escapeNonAlphaNumeric, "escapeNonAlphaNumeric");
function addFormat(schema, value, message, refs) {
  var _a24;
  if (schema.format || ((_a24 = schema.anyOf) == null ? void 0 : _a24.some((x) => x.format))) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format
      });
      delete schema.format;
    }
    schema.anyOf.push({
      format: value,
      ...message && refs.errorMessages && { errorMessage: { format: message } }
    });
  } else {
    schema.format = value;
  }
}
__name(addFormat, "addFormat");
function addPattern(schema, regex, message, refs) {
  var _a24;
  if (schema.pattern || ((_a24 = schema.allOf) == null ? void 0 : _a24.some((x) => x.pattern))) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern
      });
      delete schema.pattern;
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...message && refs.errorMessages && { errorMessage: { pattern: message } }
    });
  } else {
    schema.pattern = stringifyRegExpWithFlags(regex, refs);
  }
}
__name(addPattern, "addPattern");
function stringifyRegExpWithFlags(regex, refs) {
  var _a24;
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    // Case-insensitive
    m: regex.flags.includes("m"),
    // `^` and `$` matches adjacent to newline characters
    s: regex.flags.includes("s")
    // `.` matches newlines
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i = 0; i < source.length; i++) {
    if (isEscaped) {
      pattern += source[i];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i];
            pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i + 1] === "-" && ((_a24 = source[i + 2]) == null ? void 0 : _a24.match(/[a-z]/))) {
            pattern += source[i];
            inCharRange = true;
          } else {
            pattern += `${source[i]}${source[i].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i].match(/[a-z]/)) {
        pattern += `[${source[i]}${source[i].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i] === ".") {
      pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
      continue;
    }
    pattern += source[i];
    if (source[i] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch (e) {
    console.warn(
      `Could not convert regex pattern at ${refs.currentPath.join(
        "/"
      )} to a flag-independent form! Falling back to the flag-ignorant source`
    );
    return regex.source;
  }
  return pattern;
}
__name(stringifyRegExpWithFlags, "stringifyRegExpWithFlags");
function parseRecordDef(def, refs) {
  var _a24, _b23, _c, _d, _e, _f;
  const schema = {
    type: "object",
    additionalProperties: (_a24 = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    })) != null ? _a24 : refs.allowedAdditionalProperties
  };
  if (((_b23 = def.keyType) == null ? void 0 : _b23._def.typeName) === ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
    const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
    const { type, ...keyType } = parseBrandedDef(
      def.keyType._def,
      refs
    );
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}
__name(parseRecordDef, "parseRecordDef");
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef();
  const values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}
__name(parseMapDef, "parseMapDef");
function parseNativeEnumDef(def) {
  const object3 = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object3[object3[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object3[key]);
  const parsedTypes = Array.from(
    new Set(actualValues.map((values) => typeof values))
  );
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}
__name(parseNativeEnumDef, "parseNativeEnumDef");
function parseNeverDef() {
  return { not: parseAnyDef() };
}
__name(parseNeverDef, "parseNeverDef");
function parseNullDef() {
  return {
    type: "null"
  };
}
__name(parseNullDef, "parseNullDef");
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every(
    (x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length)
  )) {
    const types = options.reduce((types2, x) => {
      const type = primitiveMappings[x._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
    const types = options.reduce(
      (acc, x) => {
        const type = typeof x._def.value;
        switch (type) {
          case "string":
          case "number":
          case "boolean":
            return [...acc, type];
          case "bigint":
            return [...acc, "integer"];
          case "object":
            if (x._def.value === null) return [...acc, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return acc;
        }
      },
      []
    );
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce(
          (acc, x) => {
            return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
          },
          []
        )
      };
    }
  } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce(
        (acc, x) => [
          ...acc,
          ...x._def.values.filter((x2) => !acc.includes(x2))
        ],
        []
      )
    };
  }
  return asAnyOf(def, refs);
}
__name(parseUnionDef, "parseUnionDef");
var asAnyOf = /* @__PURE__ */ __name((def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map(
    (x, i) => parseDef(x._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", `${i}`]
    })
  ).filter(
    (x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0)
  );
  return anyOf.length ? { anyOf } : void 0;
}, "asAnyOf");
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
    def.innerType._def.typeName
  ) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
    return {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}
__name(parseNullableDef, "parseNullableDef");
function parseNumberDef(def) {
  const res = {
    type: "number"
  };
  if (!def.checks) return res;
  for (const check2 of def.checks) {
    switch (check2.kind) {
      case "int":
        res.type = "integer";
        break;
      case "min":
        if (check2.inclusive) {
          res.minimum = check2.value;
        } else {
          res.exclusiveMinimum = check2.value;
        }
        break;
      case "max":
        if (check2.inclusive) {
          res.maximum = check2.value;
        } else {
          res.exclusiveMaximum = check2.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check2.value;
        break;
    }
  }
  return res;
}
__name(parseNumberDef, "parseNumberDef");
function parseObjectDef(def, refs) {
  const result = {
    type: "object",
    properties: {}
  };
  const required2 = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0) {
      continue;
    }
    const propOptional = safeIsOptional(propDef);
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === void 0) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required2.push(propName);
    }
  }
  if (required2.length) {
    result.required = required2;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== void 0) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
__name(parseObjectDef, "parseObjectDef");
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
__name(decideAdditionalProperties, "decideAdditionalProperties");
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch (e) {
    return true;
  }
}
__name(safeIsOptional, "safeIsOptional");
var parseOptionalDef = /* @__PURE__ */ __name((def, refs) => {
  var _a24;
  if (refs.currentPath.toString() === ((_a24 = refs.propertyPath) == null ? void 0 : _a24.toString())) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
}, "parseOptionalDef");
var parsePipelineDef = /* @__PURE__ */ __name((def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const a = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
  });
  return {
    allOf: [a, b].filter((x) => x !== void 0)
  };
}, "parsePipelineDef");
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}
__name(parsePromiseDef, "parsePromiseDef");
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    schema.minItems = def.minSize.value;
  }
  if (def.maxSize) {
    schema.maxItems = def.maxSize.value;
  }
  return schema;
}
__name(parseSetDef, "parseSetDef");
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items.map(
        (x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })
      ).reduce(
        (acc, x) => x === void 0 ? acc : [...acc, x],
        []
      ),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items.map(
        (x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })
      ).reduce(
        (acc, x) => x === void 0 ? acc : [...acc, x],
        []
      )
    };
  }
}
__name(parseTupleDef, "parseTupleDef");
function parseUndefinedDef() {
  return {
    not: parseAnyDef()
  };
}
__name(parseUndefinedDef, "parseUndefinedDef");
function parseUnknownDef() {
  return parseAnyDef();
}
__name(parseUnknownDef, "parseUnknownDef");
var parseReadonlyDef = /* @__PURE__ */ __name((def, refs) => {
  return parseDef(def.innerType._def, refs);
}, "parseReadonlyDef");
var selectParser = /* @__PURE__ */ __name((def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef();
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef();
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef();
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef();
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef();
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return void 0;
    default:
      return /* @__PURE__ */ ((_) => void 0)(typeName);
  }
}, "selectParser");
var getRelativePath = /* @__PURE__ */ __name((pathA, pathB) => {
  let i = 0;
  for (; i < pathA.length && i < pathB.length; i++) {
    if (pathA[i] !== pathB[i]) break;
  }
  return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
}, "getRelativePath");
function parseDef(def, refs, forceResolution = false) {
  var _a24;
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult = (_a24 = refs.override) == null ? void 0 : _a24.call(
      refs,
      def,
      refs,
      seenItem,
      forceResolution
    );
    if (overrideResult !== ignoreOverride) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema2) {
    addMeta(def, refs, jsonSchema2);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
    newItem.jsonSchema = jsonSchema2;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema2;
  return jsonSchema2;
}
__name(parseDef, "parseDef");
var get$ref = /* @__PURE__ */ __name((item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
        console.warn(
          `Recursive reference detected at ${refs.currentPath.join(
            "/"
          )}! Defaulting to any`
        );
        return parseAnyDef();
      }
      return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
    }
  }
}, "get$ref");
var addMeta = /* @__PURE__ */ __name((def, refs, jsonSchema2) => {
  if (def.description) {
    jsonSchema2.description = def.description;
  }
  return jsonSchema2;
}, "addMeta");
var getRefs = /* @__PURE__ */ __name((options) => {
  const _options = getDefaultOptions(options);
  const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    currentPath,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(_options.definitions).map(([name24, def]) => [
        def._def,
        {
          def: def._def,
          path: [..._options.basePath, _options.definitionPath, name24],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ])
    )
  };
}, "getRefs");
var zod3ToJsonSchema = /* @__PURE__ */ __name((schema, options) => {
  var _a24;
  const refs = getRefs(options);
  let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce(
    (acc, [name34, schema2]) => {
      var _a34;
      return {
        ...acc,
        [name34]: (_a34 = parseDef(
          schema2._def,
          {
            ...refs,
            currentPath: [...refs.basePath, refs.definitionPath, name34]
          },
          true
        )) != null ? _a34 : parseAnyDef()
      };
    },
    {}
  ) : void 0;
  const name24 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
  const main = (_a24 = parseDef(
    schema._def,
    name24 === void 0 ? refs : {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name24]
    },
    false
  )) != null ? _a24 : parseAnyDef();
  const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  if (title !== void 0) {
    main.title = title;
  }
  const combined = name24 === void 0 ? definitions ? {
    ...main,
    [refs.definitionPath]: definitions
  } : main : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name24
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name24]: main
    }
  };
  combined.$schema = "http://json-schema.org/draft-07/schema#";
  return combined;
}, "zod3ToJsonSchema");
var schemaSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
  let schema;
  return () => {
    if (schema == null) {
      schema = createSchema();
    }
    return schema;
  };
}
__name(lazySchema, "lazySchema");
function jsonSchema(jsonSchema2, {
  validate
} = {}) {
  return {
    [schemaSymbol]: true,
    _type: void 0,
    // should never be used directly
    get jsonSchema() {
      if (typeof jsonSchema2 === "function") {
        jsonSchema2 = jsonSchema2();
      }
      return jsonSchema2;
    },
    validate
  };
}
__name(jsonSchema, "jsonSchema");
function isSchema(value) {
  return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
__name(isSchema, "isSchema");
function asSchema(schema) {
  return schema == null ? jsonSchema({ properties: {}, additionalProperties: false }) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
__name(asSchema, "asSchema");
function standardSchema(standardSchema2) {
  return jsonSchema(
    () => addAdditionalPropertiesToJsonSchema(
      standardSchema2["~standard"].jsonSchema.input({
        target: "draft-07"
      })
    ),
    {
      validate: /* @__PURE__ */ __name(async (value) => {
        const result = await standardSchema2["~standard"].validate(value);
        return "value" in result ? { success: true, value: result.value } : {
          success: false,
          error: new TypeValidationError({
            value,
            cause: result.issues
          })
        };
      }, "validate")
    }
  );
}
__name(standardSchema, "standardSchema");
function zod3Schema(zodSchema2, options) {
  var _a24;
  const useReferences = (_a24 = options == null ? void 0 : options.useReferences) != null ? _a24 : false;
  return jsonSchema(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => zod3ToJsonSchema(zodSchema2, {
      $refStrategy: useReferences ? "root" : "none"
    }),
    {
      validate: /* @__PURE__ */ __name(async (value) => {
        const result = await zodSchema2.safeParseAsync(value);
        return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
      }, "validate")
    }
  );
}
__name(zod3Schema, "zod3Schema");
function zod4Schema(zodSchema2, options) {
  var _a24;
  const useReferences = (_a24 = options == null ? void 0 : options.useReferences) != null ? _a24 : false;
  return jsonSchema(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => addAdditionalPropertiesToJsonSchema(
      toJSONSchema(zodSchema2, {
        target: "draft-7",
        io: "input",
        reused: useReferences ? "ref" : "inline"
      })
    ),
    {
      validate: /* @__PURE__ */ __name(async (value) => {
        const result = await safeParseAsync2(zodSchema2, value);
        return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
      }, "validate")
    }
  );
}
__name(zod4Schema, "zod4Schema");
function isZod4Schema(zodSchema2) {
  return "_zod" in zodSchema2;
}
__name(isZod4Schema, "isZod4Schema");
function zodSchema(zodSchema2, options) {
  if (isZod4Schema(zodSchema2)) {
    return zod4Schema(zodSchema2, options);
  } else {
    return zod3Schema(zodSchema2, options);
  }
}
__name(zodSchema, "zodSchema");
async function validateTypes({
  value,
  schema,
  context: context2
}) {
  const result = await safeValidateTypes({ value, schema, context: context2 });
  if (!result.success) {
    throw TypeValidationError.wrap({ value, cause: result.error, context: context2 });
  }
  return result.value;
}
__name(validateTypes, "validateTypes");
async function safeValidateTypes({
  value,
  schema,
  context: context2
}) {
  const actualSchema = asSchema(schema);
  try {
    if (actualSchema.validate == null) {
      return { success: true, value, rawValue: value };
    }
    const result = await actualSchema.validate(value);
    if (result.success) {
      return { success: true, value: result.value, rawValue: value };
    }
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: result.error, context: context2 }),
      rawValue: value
    };
  } catch (error40) {
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: error40, context: context2 }),
      rawValue: value
    };
  }
}
__name(safeValidateTypes, "safeValidateTypes");
async function parseJSON({
  text: text2,
  schema
}) {
  try {
    const value = secureJsonParse(text2);
    if (schema == null) {
      return value;
    }
    return validateTypes({ value, schema });
  } catch (error40) {
    if (JSONParseError.isInstance(error40) || TypeValidationError.isInstance(error40)) {
      throw error40;
    }
    throw new JSONParseError({ text: text2, cause: error40 });
  }
}
__name(parseJSON, "parseJSON");
async function safeParseJSON({
  text: text2,
  schema
}) {
  try {
    const value = secureJsonParse(text2);
    if (schema == null) {
      return { success: true, value, rawValue: value };
    }
    return await safeValidateTypes({ value, schema });
  } catch (error40) {
    return {
      success: false,
      error: JSONParseError.isInstance(error40) ? error40 : new JSONParseError({ text: text2, cause: error40 }),
      rawValue: void 0
    };
  }
}
__name(safeParseJSON, "safeParseJSON");
function parseJsonEventStream({
  stream,
  schema
}) {
  return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(
    new TransformStream({
      async transform({ data }, controller) {
        if (data === "[DONE]") {
          return;
        }
        controller.enqueue(await safeParseJSON({ text: data, schema }));
      }
    })
  );
}
__name(parseJsonEventStream, "parseJsonEventStream");
async function parseProviderOptions({
  provider,
  providerOptions,
  schema
}) {
  if ((providerOptions == null ? void 0 : providerOptions[provider]) == null) {
    return void 0;
  }
  const parsedProviderOptions = await safeValidateTypes({
    value: providerOptions[provider],
    schema
  });
  if (!parsedProviderOptions.success) {
    throw new InvalidArgumentError({
      argument: "providerOptions",
      message: `invalid ${provider} provider options`,
      cause: parsedProviderOptions.error
    });
  }
  return parsedProviderOptions.value;
}
__name(parseProviderOptions, "parseProviderOptions");
var getOriginalFetch2 = /* @__PURE__ */ __name(() => globalThis.fetch, "getOriginalFetch2");
var postJsonToApi = /* @__PURE__ */ __name(async ({
  url: url2,
  headers,
  body,
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch: fetch2
}) => postToApi({
  url: url2,
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
  fetch: fetch2
}), "postJsonToApi");
var postToApi = /* @__PURE__ */ __name(async ({
  url: url2,
  headers = {},
  body,
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch2()
}) => {
  try {
    const response = await fetch2(url2, {
      method: "POST",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/provider-utils/${VERSION}`,
        getRuntimeEnvironmentUserAgent()
      ),
      body: body.content,
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url: url2,
          requestBodyValues: body.values
        });
      } catch (error40) {
        if (isAbortError(error40) || APICallError.isInstance(error40)) {
          throw error40;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error40,
          statusCode: response.status,
          url: url2,
          responseHeaders,
          requestBodyValues: body.values
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url: url2,
        requestBodyValues: body.values
      });
    } catch (error40) {
      if (error40 instanceof Error) {
        if (isAbortError(error40) || APICallError.isInstance(error40)) {
          throw error40;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error40,
        statusCode: response.status,
        url: url2,
        responseHeaders,
        requestBodyValues: body.values
      });
    }
  } catch (error40) {
    throw handleFetchError({ error: error40, url: url2, requestBodyValues: body.values });
  }
}, "postToApi");
function tool(tool2) {
  return tool2;
}
__name(tool, "tool");
function createProviderToolFactory({
  id,
  inputSchema
}) {
  return ({
    execute,
    outputSchema: outputSchema2,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    ...args
  }) => tool({
    type: "provider",
    id,
    args,
    inputSchema,
    outputSchema: outputSchema2,
    execute,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable
  });
}
__name(createProviderToolFactory, "createProviderToolFactory");
function createProviderToolFactoryWithOutputSchema({
  id,
  inputSchema,
  outputSchema: outputSchema2,
  supportsDeferredResults
}) {
  return ({
    execute,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    ...args
  }) => tool({
    type: "provider",
    id,
    args,
    inputSchema,
    outputSchema: outputSchema2,
    execute,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    supportsDeferredResults
  });
}
__name(createProviderToolFactoryWithOutputSchema, "createProviderToolFactoryWithOutputSchema");
async function resolve(value) {
  if (typeof value === "function") {
    value = value();
  }
  return Promise.resolve(value);
}
__name(resolve, "resolve");
var createJsonErrorResponseHandler = /* @__PURE__ */ __name(({
  errorSchema,
  errorToMessage,
  isRetryable
}) => async ({ response, url: url2, requestBodyValues }) => {
  const responseBody = await response.text();
  const responseHeaders = extractResponseHeaders(response);
  if (responseBody.trim() === "") {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url: url2,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response)
      })
    };
  }
  try {
    const parsedError = await parseJSON({
      text: responseBody,
      schema: errorSchema
    });
    return {
      responseHeaders,
      value: new APICallError({
        message: errorToMessage(parsedError),
        url: url2,
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
      value: new APICallError({
        message: response.statusText,
        url: url2,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response)
      })
    };
  }
}, "createJsonErrorResponseHandler");
var createEventSourceResponseHandler = /* @__PURE__ */ __name((chunkSchema2) => async ({ response }) => {
  const responseHeaders = extractResponseHeaders(response);
  if (response.body == null) {
    throw new EmptyResponseBodyError({});
  }
  return {
    responseHeaders,
    value: parseJsonEventStream({
      stream: response.body,
      schema: chunkSchema2
    })
  };
}, "createEventSourceResponseHandler");
var createJsonResponseHandler = /* @__PURE__ */ __name((responseSchema2) => async ({ response, url: url2, requestBodyValues }) => {
  const responseBody = await response.text();
  const parsedResult = await safeParseJSON({
    text: responseBody,
    schema: responseSchema2
  });
  const responseHeaders = extractResponseHeaders(response);
  if (!parsedResult.success) {
    throw new APICallError({
      message: "Invalid JSON response",
      cause: parsedResult.error,
      statusCode: response.status,
      responseHeaders,
      responseBody,
      url: url2,
      requestBodyValues
    });
  }
  return {
    responseHeaders,
    value: parsedResult.value,
    rawValue: parsedResult.rawValue
  };
}, "createJsonResponseHandler");
function withoutTrailingSlash(url2) {
  return url2 == null ? void 0 : url2.replace(/\/$/, "");
}
__name(withoutTrailingSlash, "withoutTrailingSlash");
function isAsyncIterable(obj) {
  return obj != null && typeof obj[Symbol.asyncIterator] === "function";
}
__name(isAsyncIterable, "isAsyncIterable");
async function* executeTool({
  execute,
  input,
  options
}) {
  const result = execute(input, options);
  if (isAsyncIterable(result)) {
    let lastOutput;
    for await (const output of result) {
      lastOutput = output;
      yield { type: "preliminary", output };
    }
    yield { type: "final", output: lastOutput };
  } else {
    yield { type: "final", output: await result };
  }
}
__name(executeTool, "executeTool");

// node_modules/@ai-sdk/google/dist/index.mjs
init_esm();
var VERSION2 = true ? "3.0.66" : "0.0.0-test";
var googleErrorDataSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      error: external_exports2.object({
        code: external_exports2.number().nullable(),
        message: external_exports2.string(),
        status: external_exports2.string()
      })
    })
  )
);
var googleFailedResponseHandler = createJsonErrorResponseHandler({
  errorSchema: googleErrorDataSchema,
  errorToMessage: /* @__PURE__ */ __name((data) => data.error.message, "errorToMessage")
});
var googleEmbeddingContentPartSchema = external_exports2.union([
  external_exports2.object({ text: external_exports2.string() }),
  external_exports2.object({
    inlineData: external_exports2.object({
      mimeType: external_exports2.string(),
      data: external_exports2.string()
    })
  })
]);
var googleEmbeddingModelOptions = lazySchema(
  () => zodSchema(
    external_exports2.object({
      /**
       * Optional. Optional reduced dimension for the output embedding.
       * If set, excessive values in the output embedding are truncated from the end.
       */
      outputDimensionality: external_exports2.number().optional(),
      /**
       * Optional. Specifies the task type for generating embeddings.
       * Supported task types:
       * - SEMANTIC_SIMILARITY: Optimized for text similarity.
       * - CLASSIFICATION: Optimized for text classification.
       * - CLUSTERING: Optimized for clustering texts based on similarity.
       * - RETRIEVAL_DOCUMENT: Optimized for document retrieval.
       * - RETRIEVAL_QUERY: Optimized for query-based retrieval.
       * - QUESTION_ANSWERING: Optimized for answering questions.
       * - FACT_VERIFICATION: Optimized for verifying factual information.
       * - CODE_RETRIEVAL_QUERY: Optimized for retrieving code blocks based on natural language queries.
       */
      taskType: external_exports2.enum([
        "SEMANTIC_SIMILARITY",
        "CLASSIFICATION",
        "CLUSTERING",
        "RETRIEVAL_DOCUMENT",
        "RETRIEVAL_QUERY",
        "QUESTION_ANSWERING",
        "FACT_VERIFICATION",
        "CODE_RETRIEVAL_QUERY"
      ]).optional(),
      /**
       * Optional. Per-value multimodal content parts for embedding non-text
       * content (images, video, PDF, audio). Each entry corresponds to the
       * embedding value at the same index and its parts are merged with the
       * text value in the request. Use `null` for entries that are text-only.
       *
       * The array length must match the number of values being embedded. In
       * the case of a single embedding, the array length must be 1.
       */
      content: external_exports2.array(external_exports2.array(googleEmbeddingContentPartSchema).min(1).nullable()).optional()
    })
  )
);
var GoogleGenerativeAIEmbeddingModel = class {
  static {
    __name(this, "GoogleGenerativeAIEmbeddingModel");
  }
  constructor(modelId, config2) {
    this.specificationVersion = "v3";
    this.maxEmbeddingsPerCall = 2048;
    this.supportsParallelCalls = true;
    this.modelId = modelId;
    this.config = config2;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values,
    headers,
    abortSignal,
    providerOptions
  }) {
    const googleOptions = await parseProviderOptions({
      provider: "google",
      providerOptions,
      schema: googleEmbeddingModelOptions
    });
    if (values.length > this.maxEmbeddingsPerCall) {
      throw new TooManyEmbeddingValuesForCallError({
        provider: this.provider,
        modelId: this.modelId,
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        values
      });
    }
    const mergedHeaders = combineHeaders(
      await resolve(this.config.headers),
      headers
    );
    const multimodalContent = googleOptions == null ? void 0 : googleOptions.content;
    if (multimodalContent != null && multimodalContent.length !== values.length) {
      throw new Error(
        `The number of multimodal content entries (${multimodalContent.length}) must match the number of values (${values.length}).`
      );
    }
    if (values.length === 1) {
      const valueParts = multimodalContent == null ? void 0 : multimodalContent[0];
      const textPart = values[0] ? [{ text: values[0] }] : [];
      const parts = valueParts != null ? [...textPart, ...valueParts] : [{ text: values[0] }];
      const {
        responseHeaders: responseHeaders2,
        value: response2,
        rawValue: rawValue2
      } = await postJsonToApi({
        url: `${this.config.baseURL}/models/${this.modelId}:embedContent`,
        headers: mergedHeaders,
        body: {
          model: `models/${this.modelId}`,
          content: {
            parts
          },
          outputDimensionality: googleOptions == null ? void 0 : googleOptions.outputDimensionality,
          taskType: googleOptions == null ? void 0 : googleOptions.taskType
        },
        failedResponseHandler: googleFailedResponseHandler,
        successfulResponseHandler: createJsonResponseHandler(
          googleGenerativeAISingleEmbeddingResponseSchema
        ),
        abortSignal,
        fetch: this.config.fetch
      });
      return {
        warnings: [],
        embeddings: [response2.embedding.values],
        usage: void 0,
        response: { headers: responseHeaders2, body: rawValue2 }
      };
    }
    const {
      responseHeaders,
      value: response,
      rawValue
    } = await postJsonToApi({
      url: `${this.config.baseURL}/models/${this.modelId}:batchEmbedContents`,
      headers: mergedHeaders,
      body: {
        requests: values.map((value, index) => {
          const valueParts = multimodalContent == null ? void 0 : multimodalContent[index];
          const textPart = value ? [{ text: value }] : [];
          return {
            model: `models/${this.modelId}`,
            content: {
              role: "user",
              parts: valueParts != null ? [...textPart, ...valueParts] : [{ text: value }]
            },
            outputDimensionality: googleOptions == null ? void 0 : googleOptions.outputDimensionality,
            taskType: googleOptions == null ? void 0 : googleOptions.taskType
          };
        })
      },
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        googleGenerativeAITextEmbeddingResponseSchema
      ),
      abortSignal,
      fetch: this.config.fetch
    });
    return {
      warnings: [],
      embeddings: response.embeddings.map((item) => item.values),
      usage: void 0,
      response: { headers: responseHeaders, body: rawValue }
    };
  }
};
var googleGenerativeAITextEmbeddingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      embeddings: external_exports2.array(external_exports2.object({ values: external_exports2.array(external_exports2.number()) }))
    })
  )
);
var googleGenerativeAISingleEmbeddingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      embedding: external_exports2.object({ values: external_exports2.array(external_exports2.number()) })
    })
  )
);
function convertGoogleGenerativeAIUsage(usage) {
  var _a21, _b17, _c, _d;
  if (usage == null) {
    return {
      inputTokens: {
        total: void 0,
        noCache: void 0,
        cacheRead: void 0,
        cacheWrite: void 0
      },
      outputTokens: {
        total: void 0,
        text: void 0,
        reasoning: void 0
      },
      raw: void 0
    };
  }
  const promptTokens = (_a21 = usage.promptTokenCount) != null ? _a21 : 0;
  const candidatesTokens = (_b17 = usage.candidatesTokenCount) != null ? _b17 : 0;
  const cachedContentTokens = (_c = usage.cachedContentTokenCount) != null ? _c : 0;
  const thoughtsTokens = (_d = usage.thoughtsTokenCount) != null ? _d : 0;
  return {
    inputTokens: {
      total: promptTokens,
      noCache: promptTokens - cachedContentTokens,
      cacheRead: cachedContentTokens,
      cacheWrite: void 0
    },
    outputTokens: {
      total: candidatesTokens + thoughtsTokens,
      text: candidatesTokens,
      reasoning: thoughtsTokens
    },
    raw: usage
  };
}
__name(convertGoogleGenerativeAIUsage, "convertGoogleGenerativeAIUsage");
function convertJSONSchemaToOpenAPISchema(jsonSchema2, isRoot = true) {
  if (jsonSchema2 == null) {
    return void 0;
  }
  if (isEmptyObjectSchema(jsonSchema2)) {
    if (isRoot) {
      return void 0;
    }
    if (typeof jsonSchema2 === "object" && jsonSchema2.description) {
      return { type: "object", description: jsonSchema2.description };
    }
    return { type: "object" };
  }
  if (typeof jsonSchema2 === "boolean") {
    return { type: "boolean", properties: {} };
  }
  const {
    type,
    description,
    required: required2,
    properties,
    items,
    allOf,
    anyOf,
    oneOf,
    format,
    const: constValue,
    minLength,
    enum: enumValues
  } = jsonSchema2;
  const result = {};
  if (description) result.description = description;
  if (required2) result.required = required2;
  if (format) result.format = format;
  if (constValue !== void 0) {
    result.enum = [constValue];
  }
  if (type) {
    if (Array.isArray(type)) {
      const hasNull = type.includes("null");
      const nonNullTypes = type.filter((t) => t !== "null");
      if (nonNullTypes.length === 0) {
        result.type = "null";
      } else {
        result.anyOf = nonNullTypes.map((t) => ({ type: t }));
        if (hasNull) {
          result.nullable = true;
        }
      }
    } else {
      result.type = type;
    }
  }
  if (enumValues !== void 0) {
    result.enum = enumValues;
  }
  if (properties != null) {
    result.properties = Object.entries(properties).reduce(
      (acc, [key, value]) => {
        acc[key] = convertJSONSchemaToOpenAPISchema(value, false);
        return acc;
      },
      {}
    );
  }
  if (items) {
    result.items = Array.isArray(items) ? items.map((item) => convertJSONSchemaToOpenAPISchema(item, false)) : convertJSONSchemaToOpenAPISchema(items, false);
  }
  if (allOf) {
    result.allOf = allOf.map(
      (item) => convertJSONSchemaToOpenAPISchema(item, false)
    );
  }
  if (anyOf) {
    if (anyOf.some(
      (schema) => typeof schema === "object" && (schema == null ? void 0 : schema.type) === "null"
    )) {
      const nonNullSchemas = anyOf.filter(
        (schema) => !(typeof schema === "object" && (schema == null ? void 0 : schema.type) === "null")
      );
      if (nonNullSchemas.length === 1) {
        const converted = convertJSONSchemaToOpenAPISchema(
          nonNullSchemas[0],
          false
        );
        if (typeof converted === "object") {
          result.nullable = true;
          Object.assign(result, converted);
        }
      } else {
        result.anyOf = nonNullSchemas.map(
          (item) => convertJSONSchemaToOpenAPISchema(item, false)
        );
        result.nullable = true;
      }
    } else {
      result.anyOf = anyOf.map(
        (item) => convertJSONSchemaToOpenAPISchema(item, false)
      );
    }
  }
  if (oneOf) {
    result.oneOf = oneOf.map(
      (item) => convertJSONSchemaToOpenAPISchema(item, false)
    );
  }
  if (minLength !== void 0) {
    result.minLength = minLength;
  }
  return result;
}
__name(convertJSONSchemaToOpenAPISchema, "convertJSONSchemaToOpenAPISchema");
function isEmptyObjectSchema(jsonSchema2) {
  return jsonSchema2 != null && typeof jsonSchema2 === "object" && jsonSchema2.type === "object" && (jsonSchema2.properties == null || Object.keys(jsonSchema2.properties).length === 0) && !jsonSchema2.additionalProperties;
}
__name(isEmptyObjectSchema, "isEmptyObjectSchema");
var dataUrlRegex = /^data:([^;,]+);base64,(.+)$/s;
function parseBase64DataUrl(value) {
  const match = dataUrlRegex.exec(value);
  if (match == null) {
    return void 0;
  }
  return {
    mediaType: match[1],
    data: match[2]
  };
}
__name(parseBase64DataUrl, "parseBase64DataUrl");
function convertUrlToolResultPart(url2) {
  const parsedDataUrl = parseBase64DataUrl(url2);
  if (parsedDataUrl == null) {
    return void 0;
  }
  return {
    inlineData: {
      mimeType: parsedDataUrl.mediaType,
      data: parsedDataUrl.data
    }
  };
}
__name(convertUrlToolResultPart, "convertUrlToolResultPart");
function appendToolResultParts(parts, toolName, outputValue) {
  const functionResponseParts = [];
  const responseTextParts = [];
  for (const contentPart of outputValue) {
    switch (contentPart.type) {
      case "text": {
        responseTextParts.push(contentPart.text);
        break;
      }
      case "image-data":
      case "file-data": {
        functionResponseParts.push({
          inlineData: {
            mimeType: contentPart.mediaType,
            data: contentPart.data
          }
        });
        break;
      }
      case "image-url":
      case "file-url": {
        const functionResponsePart = convertUrlToolResultPart(
          contentPart.url
        );
        if (functionResponsePart != null) {
          functionResponseParts.push(functionResponsePart);
        } else {
          responseTextParts.push(JSON.stringify(contentPart));
        }
        break;
      }
      default: {
        responseTextParts.push(JSON.stringify(contentPart));
        break;
      }
    }
  }
  parts.push({
    functionResponse: {
      name: toolName,
      response: {
        name: toolName,
        content: responseTextParts.length > 0 ? responseTextParts.join("\n") : "Tool executed successfully."
      },
      ...functionResponseParts.length > 0 ? { parts: functionResponseParts } : {}
    }
  });
}
__name(appendToolResultParts, "appendToolResultParts");
function appendLegacyToolResultParts(parts, toolName, outputValue) {
  for (const contentPart of outputValue) {
    switch (contentPart.type) {
      case "text":
        parts.push({
          functionResponse: {
            name: toolName,
            response: {
              name: toolName,
              content: contentPart.text
            }
          }
        });
        break;
      case "image-data":
        parts.push(
          {
            inlineData: {
              mimeType: String(contentPart.mediaType),
              data: String(contentPart.data)
            }
          },
          {
            text: "Tool executed successfully and returned this image as a response"
          }
        );
        break;
      default:
        parts.push({ text: JSON.stringify(contentPart) });
        break;
    }
  }
}
__name(appendLegacyToolResultParts, "appendLegacyToolResultParts");
function convertToGoogleGenerativeAIMessages(prompt, options) {
  var _a21, _b17, _c, _d, _e, _f, _g, _h;
  const systemInstructionParts = [];
  const contents = [];
  let systemMessagesAllowed = true;
  const isGemmaModel = (_a21 = options == null ? void 0 : options.isGemmaModel) != null ? _a21 : false;
  const providerOptionsName = (_b17 = options == null ? void 0 : options.providerOptionsName) != null ? _b17 : "google";
  const supportsFunctionResponseParts = (_c = options == null ? void 0 : options.supportsFunctionResponseParts) != null ? _c : true;
  for (const { role, content } of prompt) {
    switch (role) {
      case "system": {
        if (!systemMessagesAllowed) {
          throw new UnsupportedFunctionalityError({
            functionality: "system messages are only supported at the beginning of the conversation"
          });
        }
        systemInstructionParts.push({ text: content });
        break;
      }
      case "user": {
        systemMessagesAllowed = false;
        const parts = [];
        for (const part of content) {
          switch (part.type) {
            case "text": {
              parts.push({ text: part.text });
              break;
            }
            case "file": {
              const mediaType = part.mediaType === "image/*" ? "image/jpeg" : part.mediaType;
              parts.push(
                part.data instanceof URL ? {
                  fileData: {
                    mimeType: mediaType,
                    fileUri: part.data.toString()
                  }
                } : {
                  inlineData: {
                    mimeType: mediaType,
                    data: convertToBase64(part.data)
                  }
                }
              );
              break;
            }
          }
        }
        contents.push({ role: "user", parts });
        break;
      }
      case "assistant": {
        systemMessagesAllowed = false;
        contents.push({
          role: "model",
          parts: content.map((part) => {
            var _a24, _b23, _c2, _d2;
            const providerOpts = (_d2 = (_a24 = part.providerOptions) == null ? void 0 : _a24[providerOptionsName]) != null ? _d2 : providerOptionsName !== "google" ? (_b23 = part.providerOptions) == null ? void 0 : _b23.google : (_c2 = part.providerOptions) == null ? void 0 : _c2.vertex;
            const thoughtSignature = (providerOpts == null ? void 0 : providerOpts.thoughtSignature) != null ? String(providerOpts.thoughtSignature) : void 0;
            switch (part.type) {
              case "text": {
                return part.text.length === 0 ? void 0 : {
                  text: part.text,
                  thoughtSignature
                };
              }
              case "reasoning": {
                return part.text.length === 0 ? void 0 : {
                  text: part.text,
                  thought: true,
                  thoughtSignature
                };
              }
              case "file": {
                if (part.data instanceof URL) {
                  throw new UnsupportedFunctionalityError({
                    functionality: "File data URLs in assistant messages are not supported"
                  });
                }
                return {
                  inlineData: {
                    mimeType: part.mediaType,
                    data: convertToBase64(part.data)
                  },
                  ...(providerOpts == null ? void 0 : providerOpts.thought) === true ? { thought: true } : {},
                  thoughtSignature
                };
              }
              case "tool-call": {
                const serverToolCallId = (providerOpts == null ? void 0 : providerOpts.serverToolCallId) != null ? String(providerOpts.serverToolCallId) : void 0;
                const serverToolType = (providerOpts == null ? void 0 : providerOpts.serverToolType) != null ? String(providerOpts.serverToolType) : void 0;
                if (serverToolCallId && serverToolType) {
                  return {
                    toolCall: {
                      toolType: serverToolType,
                      args: typeof part.input === "string" ? JSON.parse(part.input) : part.input,
                      id: serverToolCallId
                    },
                    thoughtSignature
                  };
                }
                return {
                  functionCall: {
                    name: part.toolName,
                    args: part.input
                  },
                  thoughtSignature
                };
              }
              case "tool-result": {
                const serverToolCallId = (providerOpts == null ? void 0 : providerOpts.serverToolCallId) != null ? String(providerOpts.serverToolCallId) : void 0;
                const serverToolType = (providerOpts == null ? void 0 : providerOpts.serverToolType) != null ? String(providerOpts.serverToolType) : void 0;
                if (serverToolCallId && serverToolType) {
                  return {
                    toolResponse: {
                      toolType: serverToolType,
                      response: part.output.type === "json" ? part.output.value : {},
                      id: serverToolCallId
                    },
                    thoughtSignature
                  };
                }
                return void 0;
              }
            }
          }).filter((part) => part !== void 0)
        });
        break;
      }
      case "tool": {
        systemMessagesAllowed = false;
        const parts = [];
        for (const part of content) {
          if (part.type === "tool-approval-response") {
            continue;
          }
          const partProviderOpts = (_g = (_d = part.providerOptions) == null ? void 0 : _d[providerOptionsName]) != null ? _g : providerOptionsName !== "google" ? (_e = part.providerOptions) == null ? void 0 : _e.google : (_f = part.providerOptions) == null ? void 0 : _f.vertex;
          const serverToolCallId = (partProviderOpts == null ? void 0 : partProviderOpts.serverToolCallId) != null ? String(partProviderOpts.serverToolCallId) : void 0;
          const serverToolType = (partProviderOpts == null ? void 0 : partProviderOpts.serverToolType) != null ? String(partProviderOpts.serverToolType) : void 0;
          if (serverToolCallId && serverToolType) {
            const serverThoughtSignature = (partProviderOpts == null ? void 0 : partProviderOpts.thoughtSignature) != null ? String(partProviderOpts.thoughtSignature) : void 0;
            if (contents.length > 0) {
              const lastContent = contents[contents.length - 1];
              if (lastContent.role === "model") {
                lastContent.parts.push({
                  toolResponse: {
                    toolType: serverToolType,
                    response: part.output.type === "json" ? part.output.value : {},
                    id: serverToolCallId
                  },
                  thoughtSignature: serverThoughtSignature
                });
                continue;
              }
            }
          }
          const output = part.output;
          if (output.type === "content") {
            if (supportsFunctionResponseParts) {
              appendToolResultParts(parts, part.toolName, output.value);
            } else {
              appendLegacyToolResultParts(parts, part.toolName, output.value);
            }
          } else {
            parts.push({
              functionResponse: {
                name: part.toolName,
                response: {
                  name: part.toolName,
                  content: output.type === "execution-denied" ? (_h = output.reason) != null ? _h : "Tool execution denied." : output.value
                }
              }
            });
          }
        }
        contents.push({
          role: "user",
          parts
        });
        break;
      }
    }
  }
  if (isGemmaModel && systemInstructionParts.length > 0 && contents.length > 0 && contents[0].role === "user") {
    const systemText = systemInstructionParts.map((part) => part.text).join("\n\n");
    contents[0].parts.unshift({ text: systemText + "\n\n" });
  }
  return {
    systemInstruction: systemInstructionParts.length > 0 && !isGemmaModel ? { parts: systemInstructionParts } : void 0,
    contents
  };
}
__name(convertToGoogleGenerativeAIMessages, "convertToGoogleGenerativeAIMessages");
function getModelPath(modelId) {
  return modelId.includes("/") ? modelId : `models/${modelId}`;
}
__name(getModelPath, "getModelPath");
var googleLanguageModelOptions = lazySchema(
  () => zodSchema(
    external_exports2.object({
      responseModalities: external_exports2.array(external_exports2.enum(["TEXT", "IMAGE"])).optional(),
      thinkingConfig: external_exports2.object({
        thinkingBudget: external_exports2.number().optional(),
        includeThoughts: external_exports2.boolean().optional(),
        // https://ai.google.dev/gemini-api/docs/gemini-3?thinking=high#thinking_level
        thinkingLevel: external_exports2.enum(["minimal", "low", "medium", "high"]).optional()
      }).optional(),
      /**
       * Optional.
       * The name of the cached content used as context to serve the prediction.
       * Format: cachedContents/{cachedContent}
       */
      cachedContent: external_exports2.string().optional(),
      /**
       * Optional. Enable structured output. Default is true.
       *
       * This is useful when the JSON Schema contains elements that are
       * not supported by the OpenAPI schema version that
       * Google Generative AI uses. You can use this to disable
       * structured outputs if you need to.
       */
      structuredOutputs: external_exports2.boolean().optional(),
      /**
       * Optional. A list of unique safety settings for blocking unsafe content.
       */
      safetySettings: external_exports2.array(
        external_exports2.object({
          category: external_exports2.enum([
            "HARM_CATEGORY_UNSPECIFIED",
            "HARM_CATEGORY_HATE_SPEECH",
            "HARM_CATEGORY_DANGEROUS_CONTENT",
            "HARM_CATEGORY_HARASSMENT",
            "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "HARM_CATEGORY_CIVIC_INTEGRITY"
          ]),
          threshold: external_exports2.enum([
            "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
            "BLOCK_LOW_AND_ABOVE",
            "BLOCK_MEDIUM_AND_ABOVE",
            "BLOCK_ONLY_HIGH",
            "BLOCK_NONE",
            "OFF"
          ])
        })
      ).optional(),
      threshold: external_exports2.enum([
        "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
        "BLOCK_LOW_AND_ABOVE",
        "BLOCK_MEDIUM_AND_ABOVE",
        "BLOCK_ONLY_HIGH",
        "BLOCK_NONE",
        "OFF"
      ]).optional(),
      /**
       * Optional. Enables timestamp understanding for audio-only files.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/audio-understanding
       */
      audioTimestamp: external_exports2.boolean().optional(),
      /**
       * Optional. Defines labels used in billing reports. Available on Vertex AI only.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls
       */
      labels: external_exports2.record(external_exports2.string(), external_exports2.string()).optional(),
      /**
       * Optional. If specified, the media resolution specified will be used.
       *
       * https://ai.google.dev/api/generate-content#MediaResolution
       */
      mediaResolution: external_exports2.enum([
        "MEDIA_RESOLUTION_UNSPECIFIED",
        "MEDIA_RESOLUTION_LOW",
        "MEDIA_RESOLUTION_MEDIUM",
        "MEDIA_RESOLUTION_HIGH"
      ]).optional(),
      /**
       * Optional. Configures the image generation aspect ratio for Gemini models.
       *
       * https://ai.google.dev/gemini-api/docs/image-generation#aspect_ratios
       */
      imageConfig: external_exports2.object({
        aspectRatio: external_exports2.enum([
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9",
          "1:8",
          "8:1",
          "1:4",
          "4:1"
        ]).optional(),
        imageSize: external_exports2.enum(["1K", "2K", "4K", "512"]).optional()
      }).optional(),
      /**
       * Optional. Configuration for grounding retrieval.
       * Used to provide location context for Google Maps and Google Search grounding.
       *
       * https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps
       */
      retrievalConfig: external_exports2.object({
        latLng: external_exports2.object({
          latitude: external_exports2.number(),
          longitude: external_exports2.number()
        }).optional()
      }).optional(),
      /**
       * Optional. When set to true, function call arguments will be streamed
       * incrementally via partialArgs in streaming responses. Only supported
       * on the Vertex AI API (not the Gemini API) and only for Gemini 3+
       * models.
       *
       * @default false
       *
       * https://docs.cloud.google.com/vertex-ai/generative-ai/docs/multimodal/function-calling#streaming-fc
       */
      streamFunctionCallArguments: external_exports2.boolean().optional(),
      /**
       * Optional. The service tier to use for the request.
       */
      serviceTier: external_exports2.enum(["standard", "flex", "priority"]).optional()
    })
  )
);
var VertexServiceTierMap = {
  standard: "SERVICE_TIER_STANDARD",
  flex: "SERVICE_TIER_FLEX",
  priority: "SERVICE_TIER_PRIORITY"
};
function prepareTools({
  tools,
  toolChoice,
  modelId
}) {
  var _a21, _b17;
  tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
  const toolWarnings = [];
  const isLatest = [
    "gemini-flash-latest",
    "gemini-flash-lite-latest",
    "gemini-pro-latest"
  ].some((id) => id === modelId);
  const isGemini2orNewer = modelId.includes("gemini-2") || modelId.includes("gemini-3") || modelId.includes("nano-banana") || isLatest;
  const isGemini3orNewer = modelId.includes("gemini-3");
  const supportsFileSearch = modelId.includes("gemini-2.5") || modelId.includes("gemini-3");
  if (tools == null) {
    return { tools: void 0, toolConfig: void 0, toolWarnings };
  }
  const hasFunctionTools = tools.some((tool2) => tool2.type === "function");
  const hasProviderTools = tools.some((tool2) => tool2.type === "provider");
  if (hasFunctionTools && hasProviderTools && !isGemini3orNewer) {
    toolWarnings.push({
      type: "unsupported",
      feature: `combination of function and provider-defined tools`
    });
  }
  if (hasProviderTools) {
    const googleTools2 = [];
    const ProviderTools = tools.filter((tool2) => tool2.type === "provider");
    ProviderTools.forEach((tool2) => {
      switch (tool2.id) {
        case "google.google_search":
          if (isGemini2orNewer) {
            googleTools2.push({ googleSearch: { ...tool2.args } });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "Google Search requires Gemini 2.0 or newer."
            });
          }
          break;
        case "google.enterprise_web_search":
          if (isGemini2orNewer) {
            googleTools2.push({ enterpriseWebSearch: {} });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "Enterprise Web Search requires Gemini 2.0 or newer."
            });
          }
          break;
        case "google.url_context":
          if (isGemini2orNewer) {
            googleTools2.push({ urlContext: {} });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The URL context tool is not supported with other Gemini models than Gemini 2."
            });
          }
          break;
        case "google.code_execution":
          if (isGemini2orNewer) {
            googleTools2.push({ codeExecution: {} });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The code execution tool is not supported with other Gemini models than Gemini 2."
            });
          }
          break;
        case "google.file_search":
          if (supportsFileSearch) {
            googleTools2.push({ fileSearch: { ...tool2.args } });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The file search tool is only supported with Gemini 2.5 models and Gemini 3 models."
            });
          }
          break;
        case "google.vertex_rag_store":
          if (isGemini2orNewer) {
            googleTools2.push({
              retrieval: {
                vertex_rag_store: {
                  rag_resources: {
                    rag_corpus: tool2.args.ragCorpus
                  },
                  similarity_top_k: tool2.args.topK
                }
              }
            });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The RAG store tool is not supported with other Gemini models than Gemini 2."
            });
          }
          break;
        case "google.google_maps":
          if (isGemini2orNewer) {
            googleTools2.push({ googleMaps: {} });
          } else {
            toolWarnings.push({
              type: "unsupported",
              feature: `provider-defined tool ${tool2.id}`,
              details: "The Google Maps grounding tool is not supported with Gemini models other than Gemini 2 or newer."
            });
          }
          break;
        default:
          toolWarnings.push({
            type: "unsupported",
            feature: `provider-defined tool ${tool2.id}`
          });
          break;
      }
    });
    if (hasFunctionTools && isGemini3orNewer && googleTools2.length > 0) {
      const functionDeclarations2 = [];
      for (const tool2 of tools) {
        if (tool2.type === "function") {
          functionDeclarations2.push({
            name: tool2.name,
            description: (_a21 = tool2.description) != null ? _a21 : "",
            parameters: convertJSONSchemaToOpenAPISchema(tool2.inputSchema)
          });
        }
      }
      const combinedToolConfig = {
        functionCallingConfig: { mode: "VALIDATED" },
        includeServerSideToolInvocations: true
      };
      if (toolChoice != null) {
        switch (toolChoice.type) {
          case "auto":
            break;
          case "none":
            combinedToolConfig.functionCallingConfig = { mode: "NONE" };
            break;
          case "required":
            combinedToolConfig.functionCallingConfig = { mode: "ANY" };
            break;
          case "tool":
            combinedToolConfig.functionCallingConfig = {
              mode: "ANY",
              allowedFunctionNames: [toolChoice.toolName]
            };
            break;
        }
      }
      return {
        tools: [...googleTools2, { functionDeclarations: functionDeclarations2 }],
        toolConfig: combinedToolConfig,
        toolWarnings
      };
    }
    return {
      tools: googleTools2.length > 0 ? googleTools2 : void 0,
      toolConfig: void 0,
      toolWarnings
    };
  }
  const functionDeclarations = [];
  let hasStrictTools = false;
  for (const tool2 of tools) {
    switch (tool2.type) {
      case "function":
        functionDeclarations.push({
          name: tool2.name,
          description: (_b17 = tool2.description) != null ? _b17 : "",
          parameters: convertJSONSchemaToOpenAPISchema(tool2.inputSchema)
        });
        if (tool2.strict === true) {
          hasStrictTools = true;
        }
        break;
      default:
        toolWarnings.push({
          type: "unsupported",
          feature: `function tool ${tool2.name}`
        });
        break;
    }
  }
  if (toolChoice == null) {
    return {
      tools: [{ functionDeclarations }],
      toolConfig: hasStrictTools ? { functionCallingConfig: { mode: "VALIDATED" } } : void 0,
      toolWarnings
    };
  }
  const type = toolChoice.type;
  switch (type) {
    case "auto":
      return {
        tools: [{ functionDeclarations }],
        toolConfig: {
          functionCallingConfig: {
            mode: hasStrictTools ? "VALIDATED" : "AUTO"
          }
        },
        toolWarnings
      };
    case "none":
      return {
        tools: [{ functionDeclarations }],
        toolConfig: { functionCallingConfig: { mode: "NONE" } },
        toolWarnings
      };
    case "required":
      return {
        tools: [{ functionDeclarations }],
        toolConfig: {
          functionCallingConfig: {
            mode: hasStrictTools ? "VALIDATED" : "ANY"
          }
        },
        toolWarnings
      };
    case "tool":
      return {
        tools: [{ functionDeclarations }],
        toolConfig: {
          functionCallingConfig: {
            mode: hasStrictTools ? "VALIDATED" : "ANY",
            allowedFunctionNames: [toolChoice.toolName]
          }
        },
        toolWarnings
      };
    default: {
      const _exhaustiveCheck = type;
      throw new UnsupportedFunctionalityError({
        functionality: `tool choice type: ${_exhaustiveCheck}`
      });
    }
  }
}
__name(prepareTools, "prepareTools");
var GoogleJSONAccumulator = class {
  static {
    __name(this, "GoogleJSONAccumulator");
  }
  constructor() {
    this.accumulatedArgs = {};
    this.jsonText = "";
    this.pathStack = [];
    this.stringOpen = false;
  }
  /**
   * Input: [{jsonPath:"$.brightness",numberValue:50}]
   * Output: { currentJSON:{brightness:50}, textDelta:'{"brightness":50' }
   */
  processPartialArgs(partialArgs) {
    let delta = "";
    for (const arg of partialArgs) {
      const rawPath = arg.jsonPath.replace(/^\$\./, "");
      if (!rawPath) continue;
      const segments = parsePath(rawPath);
      const existingValue = getNestedValue(this.accumulatedArgs, segments);
      const isStringContinuation = arg.stringValue != null && existingValue !== void 0;
      if (isStringContinuation) {
        const escaped = JSON.stringify(arg.stringValue).slice(1, -1);
        setNestedValue(
          this.accumulatedArgs,
          segments,
          existingValue + arg.stringValue
        );
        delta += escaped;
        continue;
      }
      const resolved = resolvePartialArgValue(arg);
      if (resolved == null) continue;
      setNestedValue(this.accumulatedArgs, segments, resolved.value);
      delta += this.emitNavigationTo(segments, arg, resolved.json);
    }
    this.jsonText += delta;
    return {
      currentJSON: this.accumulatedArgs,
      textDelta: delta
    };
  }
  /**
   * Input: jsonText='{"brightness":50', accumulatedArgs={brightness:50}
   * Output: { finalJSON:'{"brightness":50}', closingDelta:'}' }
   */
  finalize() {
    const finalArgs = JSON.stringify(this.accumulatedArgs);
    const closingDelta = finalArgs.slice(this.jsonText.length);
    return { finalJSON: finalArgs, closingDelta };
  }
  /**
   * Input: pathStack=[] (first call) or pathStack=[root,...] (subsequent calls)
   * Output: '{' (first call) or '' (subsequent calls)
   */
  ensureRoot() {
    if (this.pathStack.length === 0) {
      this.pathStack.push({ segment: "", isArray: false, childCount: 0 });
      return "{";
    }
    return "";
  }
  /**
   * Emits the JSON text fragment needed to navigate from the current open
   * path to the new leaf at `targetSegments`, then writes the value.
   *
   * Input: targetSegments=["recipe","name"], arg={jsonPath:"$.recipe.name",stringValue:"Lasagna"}, valueJson='"Lasagna"'
   * Output: '{"recipe":{"name":"Lasagna"'
   */
  emitNavigationTo(targetSegments, arg, valueJson) {
    let fragment = "";
    if (this.stringOpen) {
      fragment += '"';
      this.stringOpen = false;
    }
    fragment += this.ensureRoot();
    const targetContainerSegments = targetSegments.slice(0, -1);
    const leafSegment = targetSegments[targetSegments.length - 1];
    const commonDepth = this.findCommonStackDepth(targetContainerSegments);
    fragment += this.closeDownTo(commonDepth);
    fragment += this.openDownTo(targetContainerSegments, leafSegment);
    fragment += this.emitLeaf(leafSegment, arg, valueJson);
    return fragment;
  }
  /**
   * Returns the stack depth to preserve when navigating to a new target
   * container path. Always >= 1 (the root is never popped).
   *
   * Input: stack=[root,"recipe","ingredients",0], target=["recipe","ingredients",1]
   * Output: 3 (keep root+"recipe"+"ingredients")
   */
  findCommonStackDepth(targetContainer) {
    const maxDepth = Math.min(
      this.pathStack.length - 1,
      targetContainer.length
    );
    let common = 0;
    for (let i = 0; i < maxDepth; i++) {
      if (this.pathStack[i + 1].segment === targetContainer[i]) {
        common++;
      } else {
        break;
      }
    }
    return common + 1;
  }
  /**
   * Closes containers from the current stack depth back down to `targetDepth`.
   *
   * Input: this.pathStack=[root,"recipe","ingredients",0], targetDepth=3
   * Output: '}'
   */
  closeDownTo(targetDepth) {
    let fragment = "";
    while (this.pathStack.length > targetDepth) {
      const entry = this.pathStack.pop();
      fragment += entry.isArray ? "]" : "}";
    }
    return fragment;
  }
  /**
   * Opens containers from the current stack depth down to the full target
   * container path, emitting opening `{`, `[`, keys, and commas as needed.
   * `leafSegment` is used to determine if the innermost container is an array.
   *
   * Input: this.pathStack=[root], targetContainer=["recipe","ingredients"], leafSegment=0
   * Output: '"recipe":{"ingredients":['
   */
  openDownTo(targetContainer, leafSegment) {
    let fragment = "";
    const startIdx = this.pathStack.length - 1;
    for (let i = startIdx; i < targetContainer.length; i++) {
      const seg = targetContainer[i];
      const parentEntry = this.pathStack[this.pathStack.length - 1];
      if (parentEntry.childCount > 0) {
        fragment += ",";
      }
      parentEntry.childCount++;
      if (typeof seg === "string") {
        fragment += `${JSON.stringify(seg)}:`;
      }
      const childSeg = i + 1 < targetContainer.length ? targetContainer[i + 1] : leafSegment;
      const isArray = typeof childSeg === "number";
      fragment += isArray ? "[" : "{";
      this.pathStack.push({ segment: seg, isArray, childCount: 0 });
    }
    return fragment;
  }
  /**
   * Emits the comma, key, and value for a leaf entry in the current container.
   *
   * Input: leafSegment="name", arg={stringValue:"Lasagna"}, valueJson='"Lasagna"'
   * Output: '"name":"Lasagna"' (or ',"name":"Lasagna"' if container.childCount > 0)
   */
  emitLeaf(leafSegment, arg, valueJson) {
    let fragment = "";
    const container = this.pathStack[this.pathStack.length - 1];
    if (container.childCount > 0) {
      fragment += ",";
    }
    container.childCount++;
    if (typeof leafSegment === "string") {
      fragment += `${JSON.stringify(leafSegment)}:`;
    }
    if (arg.stringValue != null && arg.willContinue) {
      fragment += valueJson.slice(0, -1);
      this.stringOpen = true;
    } else {
      fragment += valueJson;
    }
    return fragment;
  }
};
function parsePath(rawPath) {
  const segments = [];
  for (const part of rawPath.split(".")) {
    const bracketIdx = part.indexOf("[");
    if (bracketIdx === -1) {
      segments.push(part);
    } else {
      if (bracketIdx > 0) segments.push(part.slice(0, bracketIdx));
      for (const m of part.matchAll(/\[(\d+)\]/g)) {
        segments.push(parseInt(m[1], 10));
      }
    }
  }
  return segments;
}
__name(parsePath, "parsePath");
function getNestedValue(obj, segments) {
  let current = obj;
  for (const seg of segments) {
    if (current == null || typeof current !== "object") return void 0;
    current = current[seg];
  }
  return current;
}
__name(getNestedValue, "getNestedValue");
function setNestedValue(obj, segments, value) {
  let current = obj;
  for (let i = 0; i < segments.length - 1; i++) {
    const seg = segments[i];
    const nextSeg = segments[i + 1];
    if (current[seg] == null) {
      current[seg] = typeof nextSeg === "number" ? [] : {};
    }
    current = current[seg];
  }
  current[segments[segments.length - 1]] = value;
}
__name(setNestedValue, "setNestedValue");
function resolvePartialArgValue(arg) {
  var _a21, _b17;
  const value = (_b17 = (_a21 = arg.stringValue) != null ? _a21 : arg.numberValue) != null ? _b17 : arg.boolValue;
  if (value != null) return { value, json: JSON.stringify(value) };
  if ("nullValue" in arg) return { value: null, json: "null" };
  return void 0;
}
__name(resolvePartialArgValue, "resolvePartialArgValue");
function mapGoogleGenerativeAIFinishReason({
  finishReason,
  hasToolCalls
}) {
  switch (finishReason) {
    case "STOP":
      return hasToolCalls ? "tool-calls" : "stop";
    case "MAX_TOKENS":
      return "length";
    case "IMAGE_SAFETY":
    case "RECITATION":
    case "SAFETY":
    case "BLOCKLIST":
    case "PROHIBITED_CONTENT":
    case "SPII":
      return "content-filter";
    case "MALFORMED_FUNCTION_CALL":
      return "error";
    case "FINISH_REASON_UNSPECIFIED":
    case "OTHER":
    default:
      return "other";
  }
}
__name(mapGoogleGenerativeAIFinishReason, "mapGoogleGenerativeAIFinishReason");
var GoogleGenerativeAILanguageModel = class {
  static {
    __name(this, "GoogleGenerativeAILanguageModel");
  }
  constructor(modelId, config2) {
    this.specificationVersion = "v3";
    var _a21;
    this.modelId = modelId;
    this.config = config2;
    this.generateId = (_a21 = config2.generateId) != null ? _a21 : generateId;
  }
  get provider() {
    return this.config.provider;
  }
  get supportedUrls() {
    var _a21, _b17, _c;
    return (_c = (_b17 = (_a21 = this.config).supportedUrls) == null ? void 0 : _b17.call(_a21)) != null ? _c : {};
  }
  async getArgs({
    prompt,
    maxOutputTokens,
    temperature,
    topP,
    topK,
    frequencyPenalty,
    presencePenalty,
    stopSequences,
    responseFormat,
    seed,
    tools,
    toolChoice,
    providerOptions
  }, { isStreaming = false } = {}) {
    var _a21, _b17;
    const warnings = [];
    const providerOptionsName = this.config.provider.includes("vertex") ? "vertex" : "google";
    let googleOptions = await parseProviderOptions({
      provider: providerOptionsName,
      providerOptions,
      schema: googleLanguageModelOptions
    });
    if (googleOptions == null && providerOptionsName !== "google") {
      googleOptions = await parseProviderOptions({
        provider: "google",
        providerOptions,
        schema: googleLanguageModelOptions
      });
    }
    const isVertexProvider = this.config.provider.startsWith("google.vertex.");
    if ((tools == null ? void 0 : tools.some(
      (tool2) => tool2.type === "provider" && tool2.id === "google.vertex_rag_store"
    )) && !isVertexProvider) {
      warnings.push({
        type: "other",
        message: `The 'vertex_rag_store' tool is only supported with the Google Vertex provider and might not be supported or could behave unexpectedly with the current Google provider (${this.config.provider}).`
      });
    }
    if ((googleOptions == null ? void 0 : googleOptions.streamFunctionCallArguments) && !isVertexProvider) {
      warnings.push({
        type: "other",
        message: `'streamFunctionCallArguments' is only supported on the Vertex AI API and will be ignored with the current Google provider (${this.config.provider}). See https://docs.cloud.google.com/vertex-ai/generative-ai/docs/multimodal/function-calling#streaming-fc`
      });
    }
    let sanitizedServiceTier = googleOptions == null ? void 0 : googleOptions.serviceTier;
    if ((googleOptions == null ? void 0 : googleOptions.serviceTier) && isVertexProvider) {
      sanitizedServiceTier = VertexServiceTierMap[googleOptions.serviceTier];
    }
    const isGemmaModel = this.modelId.toLowerCase().startsWith("gemma-");
    const supportsFunctionResponseParts = this.modelId.startsWith("gemini-3");
    const { contents, systemInstruction } = convertToGoogleGenerativeAIMessages(
      prompt,
      {
        isGemmaModel,
        providerOptionsName,
        supportsFunctionResponseParts
      }
    );
    const {
      tools: googleTools2,
      toolConfig: googleToolConfig,
      toolWarnings
    } = prepareTools({
      tools,
      toolChoice,
      modelId: this.modelId
    });
    const streamFunctionCallArguments = isStreaming && isVertexProvider ? (_a21 = googleOptions == null ? void 0 : googleOptions.streamFunctionCallArguments) != null ? _a21 : false : void 0;
    const toolConfig = googleToolConfig || streamFunctionCallArguments || (googleOptions == null ? void 0 : googleOptions.retrievalConfig) ? {
      ...googleToolConfig,
      ...streamFunctionCallArguments && {
        functionCallingConfig: {
          ...googleToolConfig == null ? void 0 : googleToolConfig.functionCallingConfig,
          streamFunctionCallArguments: true
        }
      },
      ...(googleOptions == null ? void 0 : googleOptions.retrievalConfig) && {
        retrievalConfig: googleOptions.retrievalConfig
      }
    } : void 0;
    return {
      args: {
        generationConfig: {
          // standardized settings:
          maxOutputTokens,
          temperature,
          topK,
          topP,
          frequencyPenalty,
          presencePenalty,
          stopSequences,
          seed,
          // response format:
          responseMimeType: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? "application/json" : void 0,
          responseSchema: (responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && // Google GenAI does not support all OpenAPI Schema features,
          // so this is needed as an escape hatch:
          // TODO convert into provider option
          ((_b17 = googleOptions == null ? void 0 : googleOptions.structuredOutputs) != null ? _b17 : true) ? convertJSONSchemaToOpenAPISchema(responseFormat.schema) : void 0,
          ...(googleOptions == null ? void 0 : googleOptions.audioTimestamp) && {
            audioTimestamp: googleOptions.audioTimestamp
          },
          // provider options:
          responseModalities: googleOptions == null ? void 0 : googleOptions.responseModalities,
          thinkingConfig: googleOptions == null ? void 0 : googleOptions.thinkingConfig,
          ...(googleOptions == null ? void 0 : googleOptions.mediaResolution) && {
            mediaResolution: googleOptions.mediaResolution
          },
          ...(googleOptions == null ? void 0 : googleOptions.imageConfig) && {
            imageConfig: googleOptions.imageConfig
          }
        },
        contents,
        systemInstruction: isGemmaModel ? void 0 : systemInstruction,
        safetySettings: googleOptions == null ? void 0 : googleOptions.safetySettings,
        tools: googleTools2,
        toolConfig,
        cachedContent: googleOptions == null ? void 0 : googleOptions.cachedContent,
        labels: googleOptions == null ? void 0 : googleOptions.labels,
        serviceTier: sanitizedServiceTier
      },
      warnings: [...warnings, ...toolWarnings],
      providerOptionsName
    };
  }
  async doGenerate(options) {
    var _a21, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    const { args, warnings, providerOptionsName } = await this.getArgs(options);
    const mergedHeaders = combineHeaders(
      await resolve(this.config.headers),
      options.headers
    );
    const {
      responseHeaders,
      value: response,
      rawValue: rawResponse
    } = await postJsonToApi({
      url: `${this.config.baseURL}/${getModelPath(
        this.modelId
      )}:generateContent`,
      headers: mergedHeaders,
      body: args,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(responseSchema),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    const candidate = response.candidates[0];
    const content = [];
    const parts = (_b17 = (_a21 = candidate.content) == null ? void 0 : _a21.parts) != null ? _b17 : [];
    const usageMetadata = response.usageMetadata;
    let lastCodeExecutionToolCallId;
    let lastServerToolCallId;
    for (const part of parts) {
      if ("executableCode" in part && ((_c = part.executableCode) == null ? void 0 : _c.code)) {
        const toolCallId = this.config.generateId();
        lastCodeExecutionToolCallId = toolCallId;
        content.push({
          type: "tool-call",
          toolCallId,
          toolName: "code_execution",
          input: JSON.stringify(part.executableCode),
          providerExecuted: true
        });
      } else if ("codeExecutionResult" in part && part.codeExecutionResult) {
        content.push({
          type: "tool-result",
          // Assumes a result directly follows its corresponding call part.
          toolCallId: lastCodeExecutionToolCallId,
          toolName: "code_execution",
          result: {
            outcome: part.codeExecutionResult.outcome,
            output: (_d = part.codeExecutionResult.output) != null ? _d : ""
          }
        });
        lastCodeExecutionToolCallId = void 0;
      } else if ("text" in part && part.text != null) {
        const thoughtSignatureMetadata = part.thoughtSignature ? {
          [providerOptionsName]: {
            thoughtSignature: part.thoughtSignature
          }
        } : void 0;
        if (part.text.length === 0) {
          if (thoughtSignatureMetadata != null && content.length > 0) {
            const lastContent = content[content.length - 1];
            lastContent.providerMetadata = thoughtSignatureMetadata;
          }
        } else {
          content.push({
            type: part.thought === true ? "reasoning" : "text",
            text: part.text,
            providerMetadata: thoughtSignatureMetadata
          });
        }
      } else if ("functionCall" in part && part.functionCall.name != null && part.functionCall.args != null) {
        content.push({
          type: "tool-call",
          toolCallId: this.config.generateId(),
          toolName: part.functionCall.name,
          input: JSON.stringify(part.functionCall.args),
          providerMetadata: part.thoughtSignature ? {
            [providerOptionsName]: {
              thoughtSignature: part.thoughtSignature
            }
          } : void 0
        });
      } else if ("inlineData" in part) {
        const hasThought = part.thought === true;
        const hasThoughtSignature = !!part.thoughtSignature;
        content.push({
          type: "file",
          data: part.inlineData.data,
          mediaType: part.inlineData.mimeType,
          providerMetadata: hasThought || hasThoughtSignature ? {
            [providerOptionsName]: {
              ...hasThought ? { thought: true } : {},
              ...hasThoughtSignature ? { thoughtSignature: part.thoughtSignature } : {}
            }
          } : void 0
        });
      } else if ("toolCall" in part && part.toolCall) {
        const toolCallId = (_e = part.toolCall.id) != null ? _e : this.config.generateId();
        lastServerToolCallId = toolCallId;
        content.push({
          type: "tool-call",
          toolCallId,
          toolName: `server:${part.toolCall.toolType}`,
          input: JSON.stringify((_f = part.toolCall.args) != null ? _f : {}),
          providerExecuted: true,
          dynamic: true,
          providerMetadata: part.thoughtSignature ? {
            [providerOptionsName]: {
              thoughtSignature: part.thoughtSignature,
              serverToolCallId: toolCallId,
              serverToolType: part.toolCall.toolType
            }
          } : {
            [providerOptionsName]: {
              serverToolCallId: toolCallId,
              serverToolType: part.toolCall.toolType
            }
          }
        });
      } else if ("toolResponse" in part && part.toolResponse) {
        const responseToolCallId = (_g = lastServerToolCallId != null ? lastServerToolCallId : part.toolResponse.id) != null ? _g : this.config.generateId();
        content.push({
          type: "tool-result",
          toolCallId: responseToolCallId,
          toolName: `server:${part.toolResponse.toolType}`,
          result: (_h = part.toolResponse.response) != null ? _h : {},
          providerMetadata: part.thoughtSignature ? {
            [providerOptionsName]: {
              thoughtSignature: part.thoughtSignature,
              serverToolCallId: responseToolCallId,
              serverToolType: part.toolResponse.toolType
            }
          } : {
            [providerOptionsName]: {
              serverToolCallId: responseToolCallId,
              serverToolType: part.toolResponse.toolType
            }
          }
        });
        lastServerToolCallId = void 0;
      }
    }
    const sources = (_i = extractSources({
      groundingMetadata: candidate.groundingMetadata,
      generateId: this.config.generateId
    })) != null ? _i : [];
    for (const source of sources) {
      content.push(source);
    }
    return {
      content,
      finishReason: {
        unified: mapGoogleGenerativeAIFinishReason({
          finishReason: candidate.finishReason,
          // Only count client-executed tool calls for finish reason determination.
          hasToolCalls: content.some(
            (part) => part.type === "tool-call" && !part.providerExecuted
          )
        }),
        raw: (_j = candidate.finishReason) != null ? _j : void 0
      },
      usage: convertGoogleGenerativeAIUsage(usageMetadata),
      warnings,
      providerMetadata: {
        [providerOptionsName]: {
          promptFeedback: (_k = response.promptFeedback) != null ? _k : null,
          groundingMetadata: (_l = candidate.groundingMetadata) != null ? _l : null,
          urlContextMetadata: (_m = candidate.urlContextMetadata) != null ? _m : null,
          safetyRatings: (_n = candidate.safetyRatings) != null ? _n : null,
          usageMetadata: usageMetadata != null ? usageMetadata : null,
          finishMessage: (_o = candidate.finishMessage) != null ? _o : null,
          serviceTier: (_p = response.serviceTier) != null ? _p : null
        }
      },
      request: { body: args },
      response: {
        // TODO timestamp, model id, id
        headers: responseHeaders,
        body: rawResponse
      }
    };
  }
  async doStream(options) {
    const { args, warnings, providerOptionsName } = await this.getArgs(
      options,
      { isStreaming: true }
    );
    const headers = combineHeaders(
      await resolve(this.config.headers),
      options.headers
    );
    const { responseHeaders, value: response } = await postJsonToApi({
      url: `${this.config.baseURL}/${getModelPath(
        this.modelId
      )}:streamGenerateContent?alt=sse`,
      headers,
      body: args,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createEventSourceResponseHandler(chunkSchema),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    let finishReason = {
      unified: "other",
      raw: void 0
    };
    let usage = void 0;
    let providerMetadata = void 0;
    let lastGroundingMetadata = null;
    let lastUrlContextMetadata = null;
    let serviceTier = null;
    const generateId3 = this.config.generateId;
    let hasToolCalls = false;
    let currentTextBlockId = null;
    let currentReasoningBlockId = null;
    let blockCounter = 0;
    const emittedSourceUrls = /* @__PURE__ */ new Set();
    let lastCodeExecutionToolCallId;
    let lastServerToolCallId;
    const activeStreamingToolCalls = [];
    return {
      stream: response.pipeThrough(
        new TransformStream({
          start(controller) {
            controller.enqueue({ type: "stream-start", warnings });
          },
          transform(chunk, controller) {
            var _a21, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
            if (options.includeRawChunks) {
              controller.enqueue({ type: "raw", rawValue: chunk.rawValue });
            }
            if (!chunk.success) {
              controller.enqueue({ type: "error", error: chunk.error });
              return;
            }
            const value = chunk.value;
            const usageMetadata = value.usageMetadata;
            if (usageMetadata != null) {
              usage = usageMetadata;
            }
            if (value.serviceTier != null) {
              serviceTier = value.serviceTier;
            }
            const candidate = (_a21 = value.candidates) == null ? void 0 : _a21[0];
            if (candidate == null) {
              return;
            }
            const content = candidate.content;
            if (candidate.groundingMetadata != null) {
              lastGroundingMetadata = candidate.groundingMetadata;
            }
            if (candidate.urlContextMetadata != null) {
              lastUrlContextMetadata = candidate.urlContextMetadata;
            }
            const sources = extractSources({
              groundingMetadata: candidate.groundingMetadata,
              generateId: generateId3
            });
            if (sources != null) {
              for (const source of sources) {
                if (source.sourceType === "url" && !emittedSourceUrls.has(source.url)) {
                  emittedSourceUrls.add(source.url);
                  controller.enqueue(source);
                }
              }
            }
            if (content != null) {
              const parts = (_b17 = content.parts) != null ? _b17 : [];
              for (const part of parts) {
                if ("executableCode" in part && ((_c = part.executableCode) == null ? void 0 : _c.code)) {
                  const toolCallId = generateId3();
                  lastCodeExecutionToolCallId = toolCallId;
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId,
                    toolName: "code_execution",
                    input: JSON.stringify(part.executableCode),
                    providerExecuted: true
                  });
                } else if ("codeExecutionResult" in part && part.codeExecutionResult) {
                  const toolCallId = lastCodeExecutionToolCallId;
                  if (toolCallId) {
                    controller.enqueue({
                      type: "tool-result",
                      toolCallId,
                      toolName: "code_execution",
                      result: {
                        outcome: part.codeExecutionResult.outcome,
                        output: (_d = part.codeExecutionResult.output) != null ? _d : ""
                      }
                    });
                    lastCodeExecutionToolCallId = void 0;
                  }
                } else if ("text" in part && part.text != null) {
                  const thoughtSignatureMetadata = part.thoughtSignature ? {
                    [providerOptionsName]: {
                      thoughtSignature: part.thoughtSignature
                    }
                  } : void 0;
                  if (part.text.length === 0) {
                    if (thoughtSignatureMetadata != null && currentTextBlockId !== null) {
                      controller.enqueue({
                        type: "text-delta",
                        id: currentTextBlockId,
                        delta: "",
                        providerMetadata: thoughtSignatureMetadata
                      });
                    }
                  } else if (part.thought === true) {
                    if (currentTextBlockId !== null) {
                      controller.enqueue({
                        type: "text-end",
                        id: currentTextBlockId
                      });
                      currentTextBlockId = null;
                    }
                    if (currentReasoningBlockId === null) {
                      currentReasoningBlockId = String(blockCounter++);
                      controller.enqueue({
                        type: "reasoning-start",
                        id: currentReasoningBlockId,
                        providerMetadata: thoughtSignatureMetadata
                      });
                    }
                    controller.enqueue({
                      type: "reasoning-delta",
                      id: currentReasoningBlockId,
                      delta: part.text,
                      providerMetadata: thoughtSignatureMetadata
                    });
                  } else {
                    if (currentReasoningBlockId !== null) {
                      controller.enqueue({
                        type: "reasoning-end",
                        id: currentReasoningBlockId
                      });
                      currentReasoningBlockId = null;
                    }
                    if (currentTextBlockId === null) {
                      currentTextBlockId = String(blockCounter++);
                      controller.enqueue({
                        type: "text-start",
                        id: currentTextBlockId,
                        providerMetadata: thoughtSignatureMetadata
                      });
                    }
                    controller.enqueue({
                      type: "text-delta",
                      id: currentTextBlockId,
                      delta: part.text,
                      providerMetadata: thoughtSignatureMetadata
                    });
                  }
                } else if ("inlineData" in part) {
                  if (currentTextBlockId !== null) {
                    controller.enqueue({
                      type: "text-end",
                      id: currentTextBlockId
                    });
                    currentTextBlockId = null;
                  }
                  if (currentReasoningBlockId !== null) {
                    controller.enqueue({
                      type: "reasoning-end",
                      id: currentReasoningBlockId
                    });
                    currentReasoningBlockId = null;
                  }
                  const hasThought = part.thought === true;
                  const hasThoughtSignature = !!part.thoughtSignature;
                  const fileMeta = hasThought || hasThoughtSignature ? {
                    [providerOptionsName]: {
                      ...hasThought ? { thought: true } : {},
                      ...hasThoughtSignature ? { thoughtSignature: part.thoughtSignature } : {}
                    }
                  } : void 0;
                  controller.enqueue({
                    type: "file",
                    mediaType: part.inlineData.mimeType,
                    data: part.inlineData.data,
                    providerMetadata: fileMeta
                  });
                } else if ("toolCall" in part && part.toolCall) {
                  const toolCallId = (_e = part.toolCall.id) != null ? _e : generateId3();
                  lastServerToolCallId = toolCallId;
                  const serverMeta = {
                    [providerOptionsName]: {
                      ...part.thoughtSignature ? { thoughtSignature: part.thoughtSignature } : {},
                      serverToolCallId: toolCallId,
                      serverToolType: part.toolCall.toolType
                    }
                  };
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId,
                    toolName: `server:${part.toolCall.toolType}`,
                    input: JSON.stringify((_f = part.toolCall.args) != null ? _f : {}),
                    providerExecuted: true,
                    dynamic: true,
                    providerMetadata: serverMeta
                  });
                } else if ("toolResponse" in part && part.toolResponse) {
                  const responseToolCallId = (_g = lastServerToolCallId != null ? lastServerToolCallId : part.toolResponse.id) != null ? _g : generateId3();
                  const serverMeta = {
                    [providerOptionsName]: {
                      ...part.thoughtSignature ? { thoughtSignature: part.thoughtSignature } : {},
                      serverToolCallId: responseToolCallId,
                      serverToolType: part.toolResponse.toolType
                    }
                  };
                  controller.enqueue({
                    type: "tool-result",
                    toolCallId: responseToolCallId,
                    toolName: `server:${part.toolResponse.toolType}`,
                    result: (_h = part.toolResponse.response) != null ? _h : {},
                    providerMetadata: serverMeta
                  });
                  lastServerToolCallId = void 0;
                }
              }
              for (const part of parts) {
                if (!("functionCall" in part)) continue;
                const providerMeta = part.thoughtSignature ? {
                  [providerOptionsName]: {
                    thoughtSignature: part.thoughtSignature
                  }
                } : void 0;
                const isStreamingChunk = part.functionCall.partialArgs != null || part.functionCall.name != null && part.functionCall.willContinue === true;
                const isTerminalChunk = part.functionCall.name == null && part.functionCall.args == null && part.functionCall.partialArgs == null && part.functionCall.willContinue == null;
                const isCompleteCall = part.functionCall.name != null && part.functionCall.args != null && part.functionCall.partialArgs == null;
                if (isStreamingChunk) {
                  if (part.functionCall.name != null && part.functionCall.willContinue === true) {
                    const toolCallId = generateId3();
                    const accumulator = new GoogleJSONAccumulator();
                    activeStreamingToolCalls.push({
                      toolCallId,
                      toolName: part.functionCall.name,
                      accumulator,
                      providerMetadata: providerMeta
                    });
                    controller.enqueue({
                      type: "tool-input-start",
                      id: toolCallId,
                      toolName: part.functionCall.name,
                      providerMetadata: providerMeta
                    });
                    if (part.functionCall.partialArgs != null) {
                      const { textDelta } = accumulator.processPartialArgs(
                        part.functionCall.partialArgs
                      );
                      if (textDelta.length > 0) {
                        controller.enqueue({
                          type: "tool-input-delta",
                          id: toolCallId,
                          delta: textDelta,
                          providerMetadata: providerMeta
                        });
                      }
                    }
                  } else if (part.functionCall.partialArgs != null && activeStreamingToolCalls.length > 0) {
                    const active = activeStreamingToolCalls[activeStreamingToolCalls.length - 1];
                    const { textDelta } = active.accumulator.processPartialArgs(
                      part.functionCall.partialArgs
                    );
                    if (textDelta.length > 0) {
                      controller.enqueue({
                        type: "tool-input-delta",
                        id: active.toolCallId,
                        delta: textDelta,
                        providerMetadata: providerMeta
                      });
                    }
                  }
                } else if (isTerminalChunk && activeStreamingToolCalls.length > 0) {
                  const active = activeStreamingToolCalls.pop();
                  const { finalJSON, closingDelta } = active.accumulator.finalize();
                  if (closingDelta.length > 0) {
                    controller.enqueue({
                      type: "tool-input-delta",
                      id: active.toolCallId,
                      delta: closingDelta,
                      providerMetadata: active.providerMetadata
                    });
                  }
                  controller.enqueue({
                    type: "tool-input-end",
                    id: active.toolCallId,
                    providerMetadata: active.providerMetadata
                  });
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId: active.toolCallId,
                    toolName: active.toolName,
                    input: finalJSON,
                    providerMetadata: active.providerMetadata
                  });
                  hasToolCalls = true;
                } else if (isCompleteCall) {
                  const toolCallId = generateId3();
                  const toolName = part.functionCall.name;
                  const args2 = typeof part.functionCall.args === "string" ? part.functionCall.args : JSON.stringify((_i = part.functionCall.args) != null ? _i : {});
                  controller.enqueue({
                    type: "tool-input-start",
                    id: toolCallId,
                    toolName,
                    providerMetadata: providerMeta
                  });
                  controller.enqueue({
                    type: "tool-input-delta",
                    id: toolCallId,
                    delta: args2,
                    providerMetadata: providerMeta
                  });
                  controller.enqueue({
                    type: "tool-input-end",
                    id: toolCallId,
                    providerMetadata: providerMeta
                  });
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId,
                    toolName,
                    input: args2,
                    providerMetadata: providerMeta
                  });
                  hasToolCalls = true;
                }
              }
            }
            if (candidate.finishReason != null) {
              finishReason = {
                unified: mapGoogleGenerativeAIFinishReason({
                  finishReason: candidate.finishReason,
                  hasToolCalls
                }),
                raw: candidate.finishReason
              };
              providerMetadata = {
                [providerOptionsName]: {
                  promptFeedback: (_j = value.promptFeedback) != null ? _j : null,
                  groundingMetadata: lastGroundingMetadata,
                  urlContextMetadata: lastUrlContextMetadata,
                  safetyRatings: (_k = candidate.safetyRatings) != null ? _k : null,
                  usageMetadata: usageMetadata != null ? usageMetadata : null,
                  finishMessage: (_l = candidate.finishMessage) != null ? _l : null,
                  serviceTier
                }
              };
            }
          },
          flush(controller) {
            if (currentTextBlockId !== null) {
              controller.enqueue({
                type: "text-end",
                id: currentTextBlockId
              });
            }
            if (currentReasoningBlockId !== null) {
              controller.enqueue({
                type: "reasoning-end",
                id: currentReasoningBlockId
              });
            }
            controller.enqueue({
              type: "finish",
              finishReason,
              usage: convertGoogleGenerativeAIUsage(usage),
              providerMetadata
            });
          }
        })
      ),
      response: { headers: responseHeaders },
      request: { body: args }
    };
  }
};
function extractSources({
  groundingMetadata,
  generateId: generateId3
}) {
  var _a21, _b17, _c, _d, _e, _f;
  if (!(groundingMetadata == null ? void 0 : groundingMetadata.groundingChunks)) {
    return void 0;
  }
  const sources = [];
  for (const chunk of groundingMetadata.groundingChunks) {
    if (chunk.web != null) {
      sources.push({
        type: "source",
        sourceType: "url",
        id: generateId3(),
        url: chunk.web.uri,
        title: (_a21 = chunk.web.title) != null ? _a21 : void 0
      });
    } else if (chunk.image != null) {
      sources.push({
        type: "source",
        sourceType: "url",
        id: generateId3(),
        // Google requires attribution to the source URI, not the actual image URI.
        // TODO: add another type in v7 to allow both the image and source URL to be included separately
        url: chunk.image.sourceUri,
        title: (_b17 = chunk.image.title) != null ? _b17 : void 0
      });
    } else if (chunk.retrievedContext != null) {
      const uri = chunk.retrievedContext.uri;
      const fileSearchStore = chunk.retrievedContext.fileSearchStore;
      if (uri && (uri.startsWith("http://") || uri.startsWith("https://"))) {
        sources.push({
          type: "source",
          sourceType: "url",
          id: generateId3(),
          url: uri,
          title: (_c = chunk.retrievedContext.title) != null ? _c : void 0
        });
      } else if (uri) {
        const title = (_d = chunk.retrievedContext.title) != null ? _d : "Unknown Document";
        let mediaType = "application/octet-stream";
        let filename = void 0;
        if (uri.endsWith(".pdf")) {
          mediaType = "application/pdf";
          filename = uri.split("/").pop();
        } else if (uri.endsWith(".txt")) {
          mediaType = "text/plain";
          filename = uri.split("/").pop();
        } else if (uri.endsWith(".docx")) {
          mediaType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
          filename = uri.split("/").pop();
        } else if (uri.endsWith(".doc")) {
          mediaType = "application/msword";
          filename = uri.split("/").pop();
        } else if (uri.match(/\.(md|markdown)$/)) {
          mediaType = "text/markdown";
          filename = uri.split("/").pop();
        } else {
          filename = uri.split("/").pop();
        }
        sources.push({
          type: "source",
          sourceType: "document",
          id: generateId3(),
          mediaType,
          title,
          filename
        });
      } else if (fileSearchStore) {
        const title = (_e = chunk.retrievedContext.title) != null ? _e : "Unknown Document";
        sources.push({
          type: "source",
          sourceType: "document",
          id: generateId3(),
          mediaType: "application/octet-stream",
          title,
          filename: fileSearchStore.split("/").pop()
        });
      }
    } else if (chunk.maps != null) {
      if (chunk.maps.uri) {
        sources.push({
          type: "source",
          sourceType: "url",
          id: generateId3(),
          url: chunk.maps.uri,
          title: (_f = chunk.maps.title) != null ? _f : void 0
        });
      }
    }
  }
  return sources.length > 0 ? sources : void 0;
}
__name(extractSources, "extractSources");
var getGroundingMetadataSchema = /* @__PURE__ */ __name(() => external_exports2.object({
  webSearchQueries: external_exports2.array(external_exports2.string()).nullish(),
  imageSearchQueries: external_exports2.array(external_exports2.string()).nullish(),
  retrievalQueries: external_exports2.array(external_exports2.string()).nullish(),
  searchEntryPoint: external_exports2.object({ renderedContent: external_exports2.string() }).nullish(),
  groundingChunks: external_exports2.array(
    external_exports2.object({
      web: external_exports2.object({ uri: external_exports2.string(), title: external_exports2.string().nullish() }).nullish(),
      image: external_exports2.object({
        sourceUri: external_exports2.string(),
        imageUri: external_exports2.string(),
        title: external_exports2.string().nullish(),
        domain: external_exports2.string().nullish()
      }).nullish(),
      retrievedContext: external_exports2.object({
        uri: external_exports2.string().nullish(),
        title: external_exports2.string().nullish(),
        text: external_exports2.string().nullish(),
        fileSearchStore: external_exports2.string().nullish()
      }).nullish(),
      maps: external_exports2.object({
        uri: external_exports2.string().nullish(),
        title: external_exports2.string().nullish(),
        text: external_exports2.string().nullish(),
        placeId: external_exports2.string().nullish()
      }).nullish()
    })
  ).nullish(),
  groundingSupports: external_exports2.array(
    external_exports2.object({
      segment: external_exports2.object({
        startIndex: external_exports2.number().nullish(),
        endIndex: external_exports2.number().nullish(),
        text: external_exports2.string().nullish()
      }).nullish(),
      segment_text: external_exports2.string().nullish(),
      groundingChunkIndices: external_exports2.array(external_exports2.number()).nullish(),
      supportChunkIndices: external_exports2.array(external_exports2.number()).nullish(),
      confidenceScores: external_exports2.array(external_exports2.number()).nullish(),
      confidenceScore: external_exports2.array(external_exports2.number()).nullish()
    })
  ).nullish(),
  retrievalMetadata: external_exports2.union([
    external_exports2.object({
      webDynamicRetrievalScore: external_exports2.number()
    }),
    external_exports2.object({})
  ]).nullish()
}), "getGroundingMetadataSchema");
var partialArgSchema = external_exports2.object({
  jsonPath: external_exports2.string(),
  stringValue: external_exports2.string().nullish(),
  numberValue: external_exports2.number().nullish(),
  boolValue: external_exports2.boolean().nullish(),
  nullValue: external_exports2.unknown().nullish(),
  willContinue: external_exports2.boolean().nullish()
});
var getContentSchema = /* @__PURE__ */ __name(() => external_exports2.object({
  parts: external_exports2.array(
    external_exports2.union([
      // note: order matters since text can be fully empty
      external_exports2.object({
        functionCall: external_exports2.object({
          name: external_exports2.string().nullish(),
          args: external_exports2.unknown().nullish(),
          partialArgs: external_exports2.array(partialArgSchema).nullish(),
          willContinue: external_exports2.boolean().nullish()
        }),
        thoughtSignature: external_exports2.string().nullish()
      }),
      external_exports2.object({
        inlineData: external_exports2.object({
          mimeType: external_exports2.string(),
          data: external_exports2.string()
        }),
        thought: external_exports2.boolean().nullish(),
        thoughtSignature: external_exports2.string().nullish()
      }),
      external_exports2.object({
        toolCall: external_exports2.object({
          toolType: external_exports2.string(),
          args: external_exports2.unknown().nullish(),
          id: external_exports2.string()
        }),
        thoughtSignature: external_exports2.string().nullish()
      }),
      external_exports2.object({
        toolResponse: external_exports2.object({
          toolType: external_exports2.string(),
          response: external_exports2.unknown().nullish(),
          id: external_exports2.string()
        }),
        thoughtSignature: external_exports2.string().nullish()
      }),
      external_exports2.object({
        executableCode: external_exports2.object({
          language: external_exports2.string(),
          code: external_exports2.string()
        }).nullish(),
        codeExecutionResult: external_exports2.object({
          outcome: external_exports2.string(),
          output: external_exports2.string().nullish()
        }).nullish(),
        text: external_exports2.string().nullish(),
        thought: external_exports2.boolean().nullish(),
        thoughtSignature: external_exports2.string().nullish()
      })
    ])
  ).nullish()
}), "getContentSchema");
var getSafetyRatingSchema = /* @__PURE__ */ __name(() => external_exports2.object({
  category: external_exports2.string().nullish(),
  probability: external_exports2.string().nullish(),
  probabilityScore: external_exports2.number().nullish(),
  severity: external_exports2.string().nullish(),
  severityScore: external_exports2.number().nullish(),
  blocked: external_exports2.boolean().nullish()
}), "getSafetyRatingSchema");
var tokenDetailsSchema = external_exports2.array(
  external_exports2.object({
    modality: external_exports2.string(),
    tokenCount: external_exports2.number()
  })
).nullish();
var usageSchema = external_exports2.object({
  cachedContentTokenCount: external_exports2.number().nullish(),
  thoughtsTokenCount: external_exports2.number().nullish(),
  promptTokenCount: external_exports2.number().nullish(),
  candidatesTokenCount: external_exports2.number().nullish(),
  totalTokenCount: external_exports2.number().nullish(),
  // https://cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/v1/GenerateContentResponse#TrafficType
  trafficType: external_exports2.string().nullish(),
  // https://ai.google.dev/api/generate-content#Modality
  promptTokensDetails: tokenDetailsSchema,
  candidatesTokensDetails: tokenDetailsSchema
});
var getUrlContextMetadataSchema = /* @__PURE__ */ __name(() => external_exports2.object({
  urlMetadata: external_exports2.array(
    external_exports2.object({
      retrievedUrl: external_exports2.string(),
      urlRetrievalStatus: external_exports2.string()
    })
  ).nullish()
}), "getUrlContextMetadataSchema");
var responseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      candidates: external_exports2.array(
        external_exports2.object({
          content: getContentSchema().nullish().or(external_exports2.object({}).strict()),
          finishReason: external_exports2.string().nullish(),
          finishMessage: external_exports2.string().nullish(),
          safetyRatings: external_exports2.array(getSafetyRatingSchema()).nullish(),
          groundingMetadata: getGroundingMetadataSchema().nullish(),
          urlContextMetadata: getUrlContextMetadataSchema().nullish()
        })
      ),
      usageMetadata: usageSchema.nullish(),
      promptFeedback: external_exports2.object({
        blockReason: external_exports2.string().nullish(),
        safetyRatings: external_exports2.array(getSafetyRatingSchema()).nullish()
      }).nullish(),
      serviceTier: external_exports2.string().nullish()
    })
  )
);
var chunkSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      candidates: external_exports2.array(
        external_exports2.object({
          content: getContentSchema().nullish(),
          finishReason: external_exports2.string().nullish(),
          finishMessage: external_exports2.string().nullish(),
          safetyRatings: external_exports2.array(getSafetyRatingSchema()).nullish(),
          groundingMetadata: getGroundingMetadataSchema().nullish(),
          urlContextMetadata: getUrlContextMetadataSchema().nullish()
        })
      ).nullish(),
      usageMetadata: usageSchema.nullish(),
      promptFeedback: external_exports2.object({
        blockReason: external_exports2.string().nullish(),
        safetyRatings: external_exports2.array(getSafetyRatingSchema()).nullish()
      }).nullish(),
      serviceTier: external_exports2.string().nullish()
    })
  )
);
var codeExecution = createProviderToolFactoryWithOutputSchema({
  id: "google.code_execution",
  inputSchema: external_exports2.object({
    language: external_exports2.string().describe("The programming language of the code."),
    code: external_exports2.string().describe("The code to be executed.")
  }),
  outputSchema: external_exports2.object({
    outcome: external_exports2.string().describe('The outcome of the execution (e.g., "OUTCOME_OK").'),
    output: external_exports2.string().describe("The output from the code execution.")
  })
});
var enterpriseWebSearch = createProviderToolFactory({
  id: "google.enterprise_web_search",
  inputSchema: lazySchema(() => zodSchema(external_exports2.object({})))
});
var fileSearchArgsBaseSchema = external_exports2.object({
  /** The names of the file_search_stores to retrieve from.
   *  Example: `fileSearchStores/my-file-search-store-123`
   */
  fileSearchStoreNames: external_exports2.array(external_exports2.string()).describe(
    "The names of the file_search_stores to retrieve from. Example: `fileSearchStores/my-file-search-store-123`"
  ),
  /** The number of file search retrieval chunks to retrieve. */
  topK: external_exports2.number().int().positive().describe("The number of file search retrieval chunks to retrieve.").optional(),
  /** Metadata filter to apply to the file search retrieval documents.
   *  See https://google.aip.dev/160 for the syntax of the filter expression.
   */
  metadataFilter: external_exports2.string().describe(
    "Metadata filter to apply to the file search retrieval documents. See https://google.aip.dev/160 for the syntax of the filter expression."
  ).optional()
}).passthrough();
var fileSearchArgsSchema = lazySchema(
  () => zodSchema(fileSearchArgsBaseSchema)
);
var fileSearch = createProviderToolFactory({
  id: "google.file_search",
  inputSchema: fileSearchArgsSchema
});
var googleMaps = createProviderToolFactory({
  id: "google.google_maps",
  inputSchema: lazySchema(() => zodSchema(external_exports2.object({})))
});
var googleSearchToolArgsBaseSchema = external_exports2.object({
  searchTypes: external_exports2.object({
    webSearch: external_exports2.object({}).optional(),
    imageSearch: external_exports2.object({}).optional()
  }).optional(),
  timeRangeFilter: external_exports2.object({
    startTime: external_exports2.string(),
    endTime: external_exports2.string()
  }).optional()
}).passthrough();
var googleSearchToolArgsSchema = lazySchema(
  () => zodSchema(googleSearchToolArgsBaseSchema)
);
var googleSearch = createProviderToolFactory(
  {
    id: "google.google_search",
    inputSchema: googleSearchToolArgsSchema
  }
);
var urlContext = createProviderToolFactory({
  id: "google.url_context",
  inputSchema: lazySchema(() => zodSchema(external_exports2.object({})))
});
var vertexRagStore = createProviderToolFactory({
  id: "google.vertex_rag_store",
  inputSchema: external_exports2.object({
    ragCorpus: external_exports2.string(),
    topK: external_exports2.number().optional()
  })
});
var googleTools = {
  /**
   * Creates a Google search tool that gives Google direct access to real-time web content.
   * Must have name "google_search".
   */
  googleSearch,
  /**
   * Creates an Enterprise Web Search tool for grounding responses using a compliance-focused web index.
   * Designed for highly-regulated industries (finance, healthcare, public sector).
   * Does not log customer data and supports VPC service controls.
   * Must have name "enterprise_web_search".
   *
   * @note Only available on Vertex AI. Requires Gemini 2.0 or newer.
   *
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise
   */
  enterpriseWebSearch,
  /**
   * Creates a Google Maps grounding tool that gives the model access to Google Maps data.
   * Must have name "google_maps".
   *
   * @see https://ai.google.dev/gemini-api/docs/maps-grounding
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps
   */
  googleMaps,
  /**
   * Creates a URL context tool that gives Google direct access to real-time web content.
   * Must have name "url_context".
   */
  urlContext,
  /**
   * Enables Retrieval Augmented Generation (RAG) via the Gemini File Search tool.
   * Must have name "file_search".
   *
   * @param fileSearchStoreNames - Fully-qualified File Search store resource names.
   * @param metadataFilter - Optional filter expression to restrict the files that can be retrieved.
   * @param topK - Optional result limit for the number of chunks returned from File Search.
   *
   * @see https://ai.google.dev/gemini-api/docs/file-search
   */
  fileSearch,
  /**
   * A tool that enables the model to generate and run Python code.
   * Must have name "code_execution".
   *
   * @note Ensure the selected model supports Code Execution.
   * Multi-tool usage with the code execution tool is typically compatible with Gemini >=2 models.
   *
   * @see https://ai.google.dev/gemini-api/docs/code-execution (Google AI)
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/code-execution-api (Vertex AI)
   */
  codeExecution,
  /**
   * Creates a Vertex RAG Store tool that enables the model to perform RAG searches against a Vertex RAG Store.
   * Must have name "vertex_rag_store".
   */
  vertexRagStore
};
var GoogleGenerativeAIImageModel = class {
  static {
    __name(this, "GoogleGenerativeAIImageModel");
  }
  constructor(modelId, settings, config2) {
    this.modelId = modelId;
    this.settings = settings;
    this.config = config2;
    this.specificationVersion = "v3";
  }
  get maxImagesPerCall() {
    if (this.settings.maxImagesPerCall != null) {
      return this.settings.maxImagesPerCall;
    }
    if (isGeminiModel(this.modelId)) {
      return 10;
    }
    return 4;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate(options) {
    if (isGeminiModel(this.modelId)) {
      return this.doGenerateGemini(options);
    }
    return this.doGenerateImagen(options);
  }
  async doGenerateImagen(options) {
    var _a21, _b17, _c;
    const {
      prompt,
      n = 1,
      size,
      aspectRatio = "1:1",
      seed,
      providerOptions,
      headers,
      abortSignal,
      files,
      mask
    } = options;
    const warnings = [];
    if (files != null && files.length > 0) {
      throw new Error(
        "Google Generative AI does not support image editing with Imagen models. Use Google Vertex AI (@ai-sdk/google-vertex) for image editing capabilities."
      );
    }
    if (mask != null) {
      throw new Error(
        "Google Generative AI does not support image editing with masks. Use Google Vertex AI (@ai-sdk/google-vertex) for image editing capabilities."
      );
    }
    if (size != null) {
      warnings.push({
        type: "unsupported",
        feature: "size",
        details: "This model does not support the `size` option. Use `aspectRatio` instead."
      });
    }
    if (seed != null) {
      warnings.push({
        type: "unsupported",
        feature: "seed",
        details: "This model does not support the `seed` option through this provider."
      });
    }
    const googleOptions = await parseProviderOptions({
      provider: "google",
      providerOptions,
      schema: googleImageModelOptionsSchema
    });
    const currentDate = (_c = (_b17 = (_a21 = this.config._internal) == null ? void 0 : _a21.currentDate) == null ? void 0 : _b17.call(_a21)) != null ? _c : /* @__PURE__ */ new Date();
    const parameters = {
      sampleCount: n
    };
    if (aspectRatio != null) {
      parameters.aspectRatio = aspectRatio;
    }
    if (googleOptions) {
      Object.assign(parameters, googleOptions);
    }
    const body = {
      instances: [{ prompt }],
      parameters
    };
    const { responseHeaders, value: response } = await postJsonToApi({
      url: `${this.config.baseURL}/models/${this.modelId}:predict`,
      headers: combineHeaders(await resolve(this.config.headers), headers),
      body,
      failedResponseHandler: googleFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        googleImageResponseSchema
      ),
      abortSignal,
      fetch: this.config.fetch
    });
    return {
      images: response.predictions.map(
        (p) => p.bytesBase64Encoded
      ),
      warnings,
      providerMetadata: {
        google: {
          images: response.predictions.map(() => ({
            // Add any prediction-specific metadata here
          }))
        }
      },
      response: {
        timestamp: currentDate,
        modelId: this.modelId,
        headers: responseHeaders
      }
    };
  }
  async doGenerateGemini(options) {
    var _a21, _b17, _c, _d, _e, _f, _g, _h, _i;
    const {
      prompt,
      n,
      size,
      aspectRatio,
      seed,
      providerOptions,
      headers,
      abortSignal,
      files,
      mask
    } = options;
    const warnings = [];
    if (mask != null) {
      throw new Error(
        "Gemini image models do not support mask-based image editing."
      );
    }
    if (n != null && n > 1) {
      throw new Error(
        "Gemini image models do not support generating a set number of images per call. Use n=1 or omit the n parameter."
      );
    }
    if (size != null) {
      warnings.push({
        type: "unsupported",
        feature: "size",
        details: "This model does not support the `size` option. Use `aspectRatio` instead."
      });
    }
    const userContent = [];
    if (prompt != null) {
      userContent.push({ type: "text", text: prompt });
    }
    if (files != null && files.length > 0) {
      for (const file2 of files) {
        if (file2.type === "url") {
          userContent.push({
            type: "file",
            data: new URL(file2.url),
            mediaType: "image/*"
          });
        } else {
          userContent.push({
            type: "file",
            data: typeof file2.data === "string" ? file2.data : new Uint8Array(file2.data),
            mediaType: file2.mediaType
          });
        }
      }
    }
    const languageModelPrompt = [
      { role: "user", content: userContent }
    ];
    const languageModel = new GoogleGenerativeAILanguageModel(this.modelId, {
      provider: this.config.provider,
      baseURL: this.config.baseURL,
      headers: (_a21 = this.config.headers) != null ? _a21 : {},
      fetch: this.config.fetch,
      generateId: (_b17 = this.config.generateId) != null ? _b17 : generateId
    });
    const result = await languageModel.doGenerate({
      prompt: languageModelPrompt,
      seed,
      providerOptions: {
        google: {
          responseModalities: ["IMAGE"],
          imageConfig: aspectRatio ? {
            aspectRatio
          } : void 0,
          ...(_c = providerOptions == null ? void 0 : providerOptions.google) != null ? _c : {}
        }
      },
      headers,
      abortSignal
    });
    const currentDate = (_f = (_e = (_d = this.config._internal) == null ? void 0 : _d.currentDate) == null ? void 0 : _e.call(_d)) != null ? _f : /* @__PURE__ */ new Date();
    const images = [];
    for (const part of result.content) {
      if (part.type === "file" && part.mediaType.startsWith("image/")) {
        images.push(convertToBase64(part.data));
      }
    }
    return {
      images,
      warnings,
      providerMetadata: {
        google: {
          images: images.map(() => ({}))
        }
      },
      response: {
        timestamp: currentDate,
        modelId: this.modelId,
        headers: (_g = result.response) == null ? void 0 : _g.headers
      },
      usage: result.usage ? {
        inputTokens: result.usage.inputTokens.total,
        outputTokens: result.usage.outputTokens.total,
        totalTokens: ((_h = result.usage.inputTokens.total) != null ? _h : 0) + ((_i = result.usage.outputTokens.total) != null ? _i : 0)
      } : void 0
    };
  }
};
function isGeminiModel(modelId) {
  return modelId.startsWith("gemini-");
}
__name(isGeminiModel, "isGeminiModel");
var googleImageResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      predictions: external_exports2.array(external_exports2.object({ bytesBase64Encoded: external_exports2.string() })).default([])
    })
  )
);
var googleImageModelOptionsSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      personGeneration: external_exports2.enum(["dont_allow", "allow_adult", "allow_all"]).nullish(),
      aspectRatio: external_exports2.enum(["1:1", "3:4", "4:3", "9:16", "16:9"]).nullish()
    })
  )
);
var GoogleGenerativeAIVideoModel = class {
  static {
    __name(this, "GoogleGenerativeAIVideoModel");
  }
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  get maxVideosPerCall() {
    return 4;
  }
  async doGenerate(options) {
    var _a21, _b17, _c, _d, _e, _f, _g, _h;
    const currentDate = (_c = (_b17 = (_a21 = this.config._internal) == null ? void 0 : _a21.currentDate) == null ? void 0 : _b17.call(_a21)) != null ? _c : /* @__PURE__ */ new Date();
    const warnings = [];
    const googleOptions = await parseProviderOptions({
      provider: "google",
      providerOptions: options.providerOptions,
      schema: googleVideoModelOptionsSchema
    });
    const instances = [{}];
    const instance = instances[0];
    if (options.prompt != null) {
      instance.prompt = options.prompt;
    }
    if (options.image != null) {
      if (options.image.type === "url") {
        warnings.push({
          type: "unsupported",
          feature: "URL-based image input",
          details: "Google Generative AI video models require base64-encoded images. URL will be ignored."
        });
      } else {
        const base64Data = typeof options.image.data === "string" ? options.image.data : convertUint8ArrayToBase64(options.image.data);
        instance.image = {
          inlineData: {
            mimeType: options.image.mediaType || "image/png",
            data: base64Data
          }
        };
      }
    }
    if ((googleOptions == null ? void 0 : googleOptions.referenceImages) != null) {
      instance.referenceImages = googleOptions.referenceImages.map((refImg) => {
        if (refImg.bytesBase64Encoded) {
          return {
            inlineData: {
              mimeType: "image/png",
              data: refImg.bytesBase64Encoded
            }
          };
        } else if (refImg.gcsUri) {
          return {
            gcsUri: refImg.gcsUri
          };
        }
        return refImg;
      });
    }
    const parameters = {
      sampleCount: options.n
    };
    if (options.aspectRatio) {
      parameters.aspectRatio = options.aspectRatio;
    }
    if (options.resolution) {
      const resolutionMap = {
        "1280x720": "720p",
        "1920x1080": "1080p",
        "3840x2160": "4k"
      };
      parameters.resolution = resolutionMap[options.resolution] || options.resolution;
    }
    if (options.duration) {
      parameters.durationSeconds = options.duration;
    }
    if (options.seed) {
      parameters.seed = options.seed;
    }
    if (googleOptions != null) {
      const opts = googleOptions;
      if (opts.personGeneration !== void 0 && opts.personGeneration !== null) {
        parameters.personGeneration = opts.personGeneration;
      }
      if (opts.negativePrompt !== void 0 && opts.negativePrompt !== null) {
        parameters.negativePrompt = opts.negativePrompt;
      }
      for (const [key, value] of Object.entries(opts)) {
        if (![
          "pollIntervalMs",
          "pollTimeoutMs",
          "personGeneration",
          "negativePrompt",
          "referenceImages"
        ].includes(key)) {
          parameters[key] = value;
        }
      }
    }
    const { value: operation } = await postJsonToApi({
      url: `${this.config.baseURL}/models/${this.modelId}:predictLongRunning`,
      headers: combineHeaders(
        await resolve(this.config.headers),
        options.headers
      ),
      body: {
        instances,
        parameters
      },
      successfulResponseHandler: createJsonResponseHandler(
        googleOperationSchema
      ),
      failedResponseHandler: googleFailedResponseHandler,
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    const operationName = operation.name;
    if (!operationName) {
      throw new AISDKError({
        name: "GOOGLE_VIDEO_GENERATION_ERROR",
        message: "No operation name returned from API"
      });
    }
    const pollIntervalMs = (_d = googleOptions == null ? void 0 : googleOptions.pollIntervalMs) != null ? _d : 1e4;
    const pollTimeoutMs = (_e = googleOptions == null ? void 0 : googleOptions.pollTimeoutMs) != null ? _e : 6e5;
    const startTime = Date.now();
    let finalOperation = operation;
    let responseHeaders;
    while (!finalOperation.done) {
      if (Date.now() - startTime > pollTimeoutMs) {
        throw new AISDKError({
          name: "GOOGLE_VIDEO_GENERATION_TIMEOUT",
          message: `Video generation timed out after ${pollTimeoutMs}ms`
        });
      }
      await delay(pollIntervalMs);
      if ((_f = options.abortSignal) == null ? void 0 : _f.aborted) {
        throw new AISDKError({
          name: "GOOGLE_VIDEO_GENERATION_ABORTED",
          message: "Video generation request was aborted"
        });
      }
      const { value: statusOperation, responseHeaders: pollHeaders } = await getFromApi({
        url: `${this.config.baseURL}/${operationName}`,
        headers: combineHeaders(
          await resolve(this.config.headers),
          options.headers
        ),
        successfulResponseHandler: createJsonResponseHandler(
          googleOperationSchema
        ),
        failedResponseHandler: googleFailedResponseHandler,
        abortSignal: options.abortSignal,
        fetch: this.config.fetch
      });
      finalOperation = statusOperation;
      responseHeaders = pollHeaders;
    }
    if (finalOperation.error) {
      throw new AISDKError({
        name: "GOOGLE_VIDEO_GENERATION_FAILED",
        message: `Video generation failed: ${finalOperation.error.message}`
      });
    }
    const response = finalOperation.response;
    if (!((_g = response == null ? void 0 : response.generateVideoResponse) == null ? void 0 : _g.generatedSamples) || response.generateVideoResponse.generatedSamples.length === 0) {
      throw new AISDKError({
        name: "GOOGLE_VIDEO_GENERATION_ERROR",
        message: `No videos in response. Response: ${JSON.stringify(finalOperation)}`
      });
    }
    const videos = [];
    const videoMetadata = [];
    const resolvedHeaders = await resolve(this.config.headers);
    const apiKey = resolvedHeaders == null ? void 0 : resolvedHeaders["x-goog-api-key"];
    for (const generatedSample of response.generateVideoResponse.generatedSamples) {
      if ((_h = generatedSample.video) == null ? void 0 : _h.uri) {
        const urlWithAuth = apiKey ? `${generatedSample.video.uri}${generatedSample.video.uri.includes("?") ? "&" : "?"}key=${apiKey}` : generatedSample.video.uri;
        videos.push({
          type: "url",
          url: urlWithAuth,
          mediaType: "video/mp4"
        });
        videoMetadata.push({
          uri: generatedSample.video.uri
        });
      }
    }
    if (videos.length === 0) {
      throw new AISDKError({
        name: "GOOGLE_VIDEO_GENERATION_ERROR",
        message: "No valid videos in response"
      });
    }
    return {
      videos,
      warnings,
      response: {
        timestamp: currentDate,
        modelId: this.modelId,
        headers: responseHeaders
      },
      providerMetadata: {
        google: {
          videos: videoMetadata
        }
      }
    };
  }
};
var googleOperationSchema = external_exports2.object({
  name: external_exports2.string().nullish(),
  done: external_exports2.boolean().nullish(),
  error: external_exports2.object({
    code: external_exports2.number().nullish(),
    message: external_exports2.string(),
    status: external_exports2.string().nullish()
  }).nullish(),
  response: external_exports2.object({
    generateVideoResponse: external_exports2.object({
      generatedSamples: external_exports2.array(
        external_exports2.object({
          video: external_exports2.object({
            uri: external_exports2.string().nullish()
          }).nullish()
        })
      ).nullish()
    }).nullish()
  }).nullish()
});
var googleVideoModelOptionsSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      pollIntervalMs: external_exports2.number().positive().nullish(),
      pollTimeoutMs: external_exports2.number().positive().nullish(),
      personGeneration: external_exports2.enum(["dont_allow", "allow_adult", "allow_all"]).nullish(),
      negativePrompt: external_exports2.string().nullish(),
      referenceImages: external_exports2.array(
        external_exports2.object({
          bytesBase64Encoded: external_exports2.string().nullish(),
          gcsUri: external_exports2.string().nullish()
        })
      ).nullish()
    }).passthrough()
  )
);
function createGoogleGenerativeAI(options = {}) {
  var _a21, _b17;
  const baseURL = (_a21 = withoutTrailingSlash(options.baseURL)) != null ? _a21 : "https://generativelanguage.googleapis.com/v1beta";
  const providerName = (_b17 = options.name) != null ? _b17 : "google.generative-ai";
  const getHeaders = /* @__PURE__ */ __name(() => withUserAgentSuffix(
    {
      "x-goog-api-key": loadApiKey({
        apiKey: options.apiKey,
        environmentVariableName: "GOOGLE_GENERATIVE_AI_API_KEY",
        description: "Google Generative AI"
      }),
      ...options.headers
    },
    `ai-sdk/google/${VERSION2}`
  ), "getHeaders");
  const createChatModel = /* @__PURE__ */ __name((modelId) => {
    var _a24;
    return new GoogleGenerativeAILanguageModel(modelId, {
      provider: providerName,
      baseURL,
      headers: getHeaders,
      generateId: (_a24 = options.generateId) != null ? _a24 : generateId,
      supportedUrls: /* @__PURE__ */ __name(() => ({
        "*": [
          // Google Generative Language "files" endpoint
          // e.g. https://generativelanguage.googleapis.com/v1beta/files/...
          new RegExp(`^${baseURL}/files/.*$`),
          // YouTube URLs (public or unlisted videos)
          new RegExp(
            `^https://(?:www\\.)?youtube\\.com/watch\\?v=[\\w-]+(?:&[\\w=&.-]*)?$`
          ),
          new RegExp(`^https://youtu\\.be/[\\w-]+(?:\\?[\\w=&.-]*)?$`)
        ]
      }), "supportedUrls"),
      fetch: options.fetch
    });
  }, "createChatModel");
  const createEmbeddingModel = /* @__PURE__ */ __name((modelId) => new GoogleGenerativeAIEmbeddingModel(modelId, {
    provider: providerName,
    baseURL,
    headers: getHeaders,
    fetch: options.fetch
  }), "createEmbeddingModel");
  const createImageModel = /* @__PURE__ */ __name((modelId, settings = {}) => new GoogleGenerativeAIImageModel(modelId, settings, {
    provider: providerName,
    baseURL,
    headers: getHeaders,
    fetch: options.fetch
  }), "createImageModel");
  const createVideoModel = /* @__PURE__ */ __name((modelId) => {
    var _a24;
    return new GoogleGenerativeAIVideoModel(modelId, {
      provider: providerName,
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      generateId: (_a24 = options.generateId) != null ? _a24 : generateId
    });
  }, "createVideoModel");
  const provider = /* @__PURE__ */ __name(function(modelId) {
    if (new.target) {
      throw new Error(
        "The Google Generative AI model function cannot be called with the new keyword."
      );
    }
    return createChatModel(modelId);
  }, "provider");
  provider.specificationVersion = "v3";
  provider.languageModel = createChatModel;
  provider.chat = createChatModel;
  provider.generativeAI = createChatModel;
  provider.embedding = createEmbeddingModel;
  provider.embeddingModel = createEmbeddingModel;
  provider.textEmbedding = createEmbeddingModel;
  provider.textEmbeddingModel = createEmbeddingModel;
  provider.image = createImageModel;
  provider.imageModel = createImageModel;
  provider.video = createVideoModel;
  provider.videoModel = createVideoModel;
  provider.tools = googleTools;
  return provider;
}
__name(createGoogleGenerativeAI, "createGoogleGenerativeAI");
var google = createGoogleGenerativeAI();

// node_modules/ai/dist/index.mjs
init_esm();

// node_modules/@ai-sdk/gateway/dist/index.mjs
init_esm();
var import_oidc = __toESM(require_dist(), 1);
var import_oidc2 = __toESM(require_dist(), 1);
var marker16 = "vercel.ai.gateway.error";
var symbol17 = Symbol.for(marker16);
var _a16;
var _b16;
var GatewayError = class _GatewayError extends (_b16 = Error, _a16 = symbol17, _b16) {
  static {
    __name(this, "_GatewayError");
  }
  constructor({
    message,
    statusCode = 500,
    cause,
    generationId
  }) {
    super(generationId ? `${message} [${generationId}]` : message);
    this[_a16] = true;
    this.statusCode = statusCode;
    this.cause = cause;
    this.generationId = generationId;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(error40) {
    return _GatewayError.hasMarker(error40);
  }
  static hasMarker(error40) {
    return typeof error40 === "object" && error40 !== null && symbol17 in error40 && error40[symbol17] === true;
  }
};
var name15 = "GatewayAuthenticationError";
var marker22 = `vercel.ai.gateway.error.${name15}`;
var symbol22 = Symbol.for(marker22);
var _a22;
var _b22;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b22 = GatewayError, _a22 = symbol22, _b22) {
  static {
    __name(this, "_GatewayAuthenticationError");
  }
  constructor({
    message = "Authentication failed",
    statusCode = 401,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a22] = true;
    this.name = name15;
    this.type = "authentication_error";
  }
  static isInstance(error40) {
    return GatewayError.hasMarker(error40) && symbol22 in error40;
  }
  /**
   * Creates a contextual error message when authentication fails
   */
  static createContextualError({
    apiKeyProvided,
    oidcTokenProvided,
    message = "Authentication failed",
    statusCode = 401,
    cause,
    generationId
  }) {
    let contextualMessage;
    if (apiKeyProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
    } else if (oidcTokenProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
    } else {
      contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
    }
    return new _GatewayAuthenticationError({
      message: contextualMessage,
      statusCode,
      cause,
      generationId
    });
  }
};
var name22 = "GatewayInvalidRequestError";
var marker32 = `vercel.ai.gateway.error.${name22}`;
var symbol32 = Symbol.for(marker32);
var _a32;
var _b32;
var GatewayInvalidRequestError = class extends (_b32 = GatewayError, _a32 = symbol32, _b32) {
  static {
    __name(this, "GatewayInvalidRequestError");
  }
  constructor({
    message = "Invalid request",
    statusCode = 400,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a32] = true;
    this.name = name22;
    this.type = "invalid_request_error";
  }
  static isInstance(error40) {
    return GatewayError.hasMarker(error40) && symbol32 in error40;
  }
};
var name32 = "GatewayRateLimitError";
var marker42 = `vercel.ai.gateway.error.${name32}`;
var symbol42 = Symbol.for(marker42);
var _a42;
var _b42;
var GatewayRateLimitError = class extends (_b42 = GatewayError, _a42 = symbol42, _b42) {
  static {
    __name(this, "GatewayRateLimitError");
  }
  constructor({
    message = "Rate limit exceeded",
    statusCode = 429,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a42] = true;
    this.name = name32;
    this.type = "rate_limit_exceeded";
  }
  static isInstance(error40) {
    return GatewayError.hasMarker(error40) && symbol42 in error40;
  }
};
var name42 = "GatewayModelNotFoundError";
var marker52 = `vercel.ai.gateway.error.${name42}`;
var symbol52 = Symbol.for(marker52);
var modelNotFoundParamSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      modelId: external_exports2.string()
    })
  )
);
var _a52;
var _b52;
var GatewayModelNotFoundError = class extends (_b52 = GatewayError, _a52 = symbol52, _b52) {
  static {
    __name(this, "GatewayModelNotFoundError");
  }
  constructor({
    message = "Model not found",
    statusCode = 404,
    modelId,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a52] = true;
    this.name = name42;
    this.type = "model_not_found";
    this.modelId = modelId;
  }
  static isInstance(error40) {
    return GatewayError.hasMarker(error40) && symbol52 in error40;
  }
};
var name52 = "GatewayInternalServerError";
var marker62 = `vercel.ai.gateway.error.${name52}`;
var symbol62 = Symbol.for(marker62);
var _a62;
var _b62;
var GatewayInternalServerError = class extends (_b62 = GatewayError, _a62 = symbol62, _b62) {
  static {
    __name(this, "GatewayInternalServerError");
  }
  constructor({
    message = "Internal server error",
    statusCode = 500,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a62] = true;
    this.name = name52;
    this.type = "internal_server_error";
  }
  static isInstance(error40) {
    return GatewayError.hasMarker(error40) && symbol62 in error40;
  }
};
var name62 = "GatewayResponseError";
var marker72 = `vercel.ai.gateway.error.${name62}`;
var symbol72 = Symbol.for(marker72);
var _a72;
var _b72;
var GatewayResponseError = class extends (_b72 = GatewayError, _a72 = symbol72, _b72) {
  static {
    __name(this, "GatewayResponseError");
  }
  constructor({
    message = "Invalid response from Gateway",
    statusCode = 502,
    response,
    validationError,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a72] = true;
    this.name = name62;
    this.type = "response_error";
    this.response = response;
    this.validationError = validationError;
  }
  static isInstance(error40) {
    return GatewayError.hasMarker(error40) && symbol72 in error40;
  }
};
async function createGatewayErrorFromResponse({
  response,
  statusCode,
  defaultMessage = "Gateway request failed",
  cause,
  authMethod
}) {
  var _a93;
  const parseResult = await safeValidateTypes({
    value: response,
    schema: gatewayErrorResponseSchema
  });
  if (!parseResult.success) {
    const rawGenerationId = typeof response === "object" && response !== null && "generationId" in response ? response.generationId : void 0;
    return new GatewayResponseError({
      message: `Invalid error response format: ${defaultMessage}`,
      statusCode,
      response,
      validationError: parseResult.error,
      cause,
      generationId: rawGenerationId
    });
  }
  const validatedResponse = parseResult.value;
  const errorType = validatedResponse.error.type;
  const message = validatedResponse.error.message;
  const generationId = (_a93 = validatedResponse.generationId) != null ? _a93 : void 0;
  switch (errorType) {
    case "authentication_error":
      return GatewayAuthenticationError.createContextualError({
        apiKeyProvided: authMethod === "api-key",
        oidcTokenProvided: authMethod === "oidc",
        statusCode,
        cause,
        generationId
      });
    case "invalid_request_error":
      return new GatewayInvalidRequestError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "rate_limit_exceeded":
      return new GatewayRateLimitError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "model_not_found": {
      const modelResult = await safeValidateTypes({
        value: validatedResponse.error.param,
        schema: modelNotFoundParamSchema
      });
      return new GatewayModelNotFoundError({
        message,
        statusCode,
        modelId: modelResult.success ? modelResult.value.modelId : void 0,
        cause,
        generationId
      });
    }
    case "internal_server_error":
      return new GatewayInternalServerError({
        message,
        statusCode,
        cause,
        generationId
      });
    default:
      return new GatewayInternalServerError({
        message,
        statusCode,
        cause,
        generationId
      });
  }
}
__name(createGatewayErrorFromResponse, "createGatewayErrorFromResponse");
var gatewayErrorResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      error: external_exports2.object({
        message: external_exports2.string(),
        type: external_exports2.string().nullish(),
        param: external_exports2.unknown().nullish(),
        code: external_exports2.union([external_exports2.string(), external_exports2.number()]).nullish()
      }),
      generationId: external_exports2.string().nullish()
    })
  )
);
function extractApiCallResponse(error40) {
  if (error40.data !== void 0) {
    return error40.data;
  }
  if (error40.responseBody != null) {
    try {
      return JSON.parse(error40.responseBody);
    } catch (e) {
      return error40.responseBody;
    }
  }
  return {};
}
__name(extractApiCallResponse, "extractApiCallResponse");
var name72 = "GatewayTimeoutError";
var marker82 = `vercel.ai.gateway.error.${name72}`;
var symbol82 = Symbol.for(marker82);
var _a82;
var _b82;
var GatewayTimeoutError = class _GatewayTimeoutError extends (_b82 = GatewayError, _a82 = symbol82, _b82) {
  static {
    __name(this, "_GatewayTimeoutError");
  }
  constructor({
    message = "Request timed out",
    statusCode = 408,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a82] = true;
    this.name = name72;
    this.type = "timeout_error";
  }
  static isInstance(error40) {
    return GatewayError.hasMarker(error40) && symbol82 in error40;
  }
  /**
   * Creates a helpful timeout error message with troubleshooting guidance
   */
  static createTimeoutError({
    originalMessage,
    statusCode = 408,
    cause,
    generationId
  }) {
    const message = `Gateway request timed out: ${originalMessage}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`;
    return new _GatewayTimeoutError({
      message,
      statusCode,
      cause,
      generationId
    });
  }
};
function isTimeoutError(error40) {
  if (!(error40 instanceof Error)) {
    return false;
  }
  const errorCode = error40.code;
  if (typeof errorCode === "string") {
    const undiciTimeoutCodes = [
      "UND_ERR_HEADERS_TIMEOUT",
      "UND_ERR_BODY_TIMEOUT",
      "UND_ERR_CONNECT_TIMEOUT"
    ];
    return undiciTimeoutCodes.includes(errorCode);
  }
  return false;
}
__name(isTimeoutError, "isTimeoutError");
async function asGatewayError(error40, authMethod) {
  var _a93;
  if (GatewayError.isInstance(error40)) {
    return error40;
  }
  if (isTimeoutError(error40)) {
    return GatewayTimeoutError.createTimeoutError({
      originalMessage: error40 instanceof Error ? error40.message : "Unknown error",
      cause: error40
    });
  }
  if (APICallError.isInstance(error40)) {
    if (error40.cause && isTimeoutError(error40.cause)) {
      return GatewayTimeoutError.createTimeoutError({
        originalMessage: error40.message,
        cause: error40
      });
    }
    return await createGatewayErrorFromResponse({
      response: extractApiCallResponse(error40),
      statusCode: (_a93 = error40.statusCode) != null ? _a93 : 500,
      defaultMessage: "Gateway request failed",
      cause: error40,
      authMethod
    });
  }
  return await createGatewayErrorFromResponse({
    response: {},
    statusCode: 500,
    defaultMessage: error40 instanceof Error ? `Gateway request failed: ${error40.message}` : "Unknown Gateway error",
    cause: error40,
    authMethod
  });
}
__name(asGatewayError, "asGatewayError");
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
  const result = await safeValidateTypes({
    value: headers[GATEWAY_AUTH_METHOD_HEADER],
    schema: gatewayAuthMethodSchema
  });
  return result.success ? result.value : void 0;
}
__name(parseAuthMethod, "parseAuthMethod");
var gatewayAuthMethodSchema = lazySchema(
  () => zodSchema(external_exports2.union([external_exports2.literal("api-key"), external_exports2.literal("oidc")]))
);
var KNOWN_MODEL_TYPES = [
  "embedding",
  "image",
  "language",
  "reranking",
  "video"
];
var GatewayFetchMetadata = class {
  static {
    __name(this, "GatewayFetchMetadata");
  }
  constructor(config2) {
    this.config = config2;
  }
  async getAvailableModels() {
    try {
      const { value } = await getFromApi({
        url: `${this.config.baseURL}/config`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayAvailableModelsResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error40) {
      throw await asGatewayError(error40);
    }
  }
  async getCredits() {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/credits`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayCreditsResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error40) {
      throw await asGatewayError(error40);
    }
  }
};
var gatewayAvailableModelsResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      models: external_exports2.array(
        external_exports2.object({
          id: external_exports2.string(),
          name: external_exports2.string(),
          description: external_exports2.string().nullish(),
          pricing: external_exports2.object({
            input: external_exports2.string(),
            output: external_exports2.string(),
            input_cache_read: external_exports2.string().nullish(),
            input_cache_write: external_exports2.string().nullish()
          }).transform(
            ({ input, output, input_cache_read, input_cache_write }) => ({
              input,
              output,
              ...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
              ...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
            })
          ).nullish(),
          specification: external_exports2.object({
            specificationVersion: external_exports2.literal("v3"),
            provider: external_exports2.string(),
            modelId: external_exports2.string()
          }),
          modelType: external_exports2.string().nullish()
        })
      ).transform(
        (models) => models.filter(
          (m) => m.modelType == null || KNOWN_MODEL_TYPES.includes(m.modelType)
        )
      )
    })
  )
);
var gatewayCreditsResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      balance: external_exports2.string(),
      total_used: external_exports2.string()
    }).transform(({ balance, total_used }) => ({
      balance,
      totalUsed: total_used
    }))
  )
);
var GatewaySpendReport = class {
  static {
    __name(this, "GatewaySpendReport");
  }
  constructor(config2) {
    this.config = config2;
  }
  async getSpendReport(params) {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const searchParams = new URLSearchParams();
      searchParams.set("start_date", params.startDate);
      searchParams.set("end_date", params.endDate);
      if (params.groupBy) {
        searchParams.set("group_by", params.groupBy);
      }
      if (params.datePart) {
        searchParams.set("date_part", params.datePart);
      }
      if (params.userId) {
        searchParams.set("user_id", params.userId);
      }
      if (params.model) {
        searchParams.set("model", params.model);
      }
      if (params.provider) {
        searchParams.set("provider", params.provider);
      }
      if (params.credentialType) {
        searchParams.set("credential_type", params.credentialType);
      }
      if (params.tags && params.tags.length > 0) {
        searchParams.set("tags", params.tags.join(","));
      }
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/report?${searchParams.toString()}`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewaySpendReportResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error40) {
      throw await asGatewayError(error40);
    }
  }
};
var gatewaySpendReportResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      results: external_exports2.array(
        external_exports2.object({
          day: external_exports2.string().optional(),
          hour: external_exports2.string().optional(),
          user: external_exports2.string().optional(),
          model: external_exports2.string().optional(),
          tag: external_exports2.string().optional(),
          provider: external_exports2.string().optional(),
          credential_type: external_exports2.enum(["byok", "system"]).optional(),
          total_cost: external_exports2.number(),
          market_cost: external_exports2.number().optional(),
          input_tokens: external_exports2.number().optional(),
          output_tokens: external_exports2.number().optional(),
          cached_input_tokens: external_exports2.number().optional(),
          cache_creation_input_tokens: external_exports2.number().optional(),
          reasoning_tokens: external_exports2.number().optional(),
          request_count: external_exports2.number().optional()
        }).transform(
          ({
            credential_type,
            total_cost,
            market_cost,
            input_tokens,
            output_tokens,
            cached_input_tokens,
            cache_creation_input_tokens,
            reasoning_tokens,
            request_count,
            ...rest
          }) => ({
            ...rest,
            ...credential_type !== void 0 ? { credentialType: credential_type } : {},
            totalCost: total_cost,
            ...market_cost !== void 0 ? { marketCost: market_cost } : {},
            ...input_tokens !== void 0 ? { inputTokens: input_tokens } : {},
            ...output_tokens !== void 0 ? { outputTokens: output_tokens } : {},
            ...cached_input_tokens !== void 0 ? { cachedInputTokens: cached_input_tokens } : {},
            ...cache_creation_input_tokens !== void 0 ? { cacheCreationInputTokens: cache_creation_input_tokens } : {},
            ...reasoning_tokens !== void 0 ? { reasoningTokens: reasoning_tokens } : {},
            ...request_count !== void 0 ? { requestCount: request_count } : {}
          })
        )
      )
    })
  )
);
var GatewayGenerationInfoFetcher = class {
  static {
    __name(this, "GatewayGenerationInfoFetcher");
  }
  constructor(config2) {
    this.config = config2;
  }
  async getGenerationInfo(params) {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/generation?id=${encodeURIComponent(params.id)}`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayGenerationInfoResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error40) {
      throw await asGatewayError(error40);
    }
  }
};
var gatewayGenerationInfoResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      data: external_exports2.object({
        id: external_exports2.string(),
        total_cost: external_exports2.number(),
        upstream_inference_cost: external_exports2.number(),
        usage: external_exports2.number(),
        created_at: external_exports2.string(),
        model: external_exports2.string(),
        is_byok: external_exports2.boolean(),
        provider_name: external_exports2.string(),
        streamed: external_exports2.boolean(),
        finish_reason: external_exports2.string(),
        latency: external_exports2.number(),
        generation_time: external_exports2.number(),
        native_tokens_prompt: external_exports2.number(),
        native_tokens_completion: external_exports2.number(),
        native_tokens_reasoning: external_exports2.number(),
        native_tokens_cached: external_exports2.number(),
        native_tokens_cache_creation: external_exports2.number(),
        billable_web_search_calls: external_exports2.number()
      }).transform(
        ({
          total_cost,
          upstream_inference_cost,
          created_at,
          is_byok,
          provider_name,
          finish_reason,
          generation_time,
          native_tokens_prompt,
          native_tokens_completion,
          native_tokens_reasoning,
          native_tokens_cached,
          native_tokens_cache_creation,
          billable_web_search_calls,
          ...rest
        }) => ({
          ...rest,
          totalCost: total_cost,
          upstreamInferenceCost: upstream_inference_cost,
          createdAt: created_at,
          isByok: is_byok,
          providerName: provider_name,
          finishReason: finish_reason,
          generationTime: generation_time,
          promptTokens: native_tokens_prompt,
          completionTokens: native_tokens_completion,
          reasoningTokens: native_tokens_reasoning,
          cachedTokens: native_tokens_cached,
          cacheCreationTokens: native_tokens_cache_creation,
          billableWebSearchCalls: billable_web_search_calls
        })
      )
    }).transform(({ data }) => data)
  )
);
var GatewayLanguageModel = class {
  static {
    __name(this, "GatewayLanguageModel");
  }
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v3";
    this.supportedUrls = { "*/*": [/.*/] };
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(options) {
    const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
    return {
      args: this.maybeEncodeFileParts(optionsWithoutSignal),
      warnings: []
    };
  }
  async doGenerate(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue: rawResponse
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          options.headers,
          this.getModelConfigHeaders(this.modelId, false),
          await resolve(this.config.o11yHeaders)
        ),
        body: args,
        successfulResponseHandler: createJsonResponseHandler(external_exports2.any()),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        ...responseBody,
        request: { body: args },
        response: { headers: responseHeaders, body: rawResponse },
        warnings
      };
    } catch (error40) {
      throw await asGatewayError(error40, await parseAuthMethod(resolvedHeaders));
    }
  }
  async doStream(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const { value: response, responseHeaders } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          options.headers,
          this.getModelConfigHeaders(this.modelId, true),
          await resolve(this.config.o11yHeaders)
        ),
        body: args,
        successfulResponseHandler: createEventSourceResponseHandler(external_exports2.any()),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        stream: response.pipeThrough(
          new TransformStream({
            start(controller) {
              if (warnings.length > 0) {
                controller.enqueue({ type: "stream-start", warnings });
              }
            },
            transform(chunk, controller) {
              if (chunk.success) {
                const streamPart = chunk.value;
                if (streamPart.type === "raw" && !options.includeRawChunks) {
                  return;
                }
                if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") {
                  streamPart.timestamp = new Date(streamPart.timestamp);
                }
                controller.enqueue(streamPart);
              } else {
                controller.error(
                  chunk.error
                );
              }
            }
          })
        ),
        request: { body: args },
        response: { headers: responseHeaders }
      };
    } catch (error40) {
      throw await asGatewayError(error40, await parseAuthMethod(resolvedHeaders));
    }
  }
  isFilePart(part) {
    return part && typeof part === "object" && "type" in part && part.type === "file";
  }
  /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */
  maybeEncodeFileParts(options) {
    for (const message of options.prompt) {
      for (const part of message.content) {
        if (this.isFilePart(part)) {
          const filePart = part;
          if (filePart.data instanceof Uint8Array) {
            const buffer = Uint8Array.from(filePart.data);
            const base64Data = Buffer.from(buffer).toString("base64");
            filePart.data = new URL(
              `data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`
            );
          }
        }
      }
    }
    return options;
  }
  getUrl() {
    return `${this.config.baseURL}/language-model`;
  }
  getModelConfigHeaders(modelId, streaming) {
    return {
      "ai-language-model-specification-version": "3",
      "ai-language-model-id": modelId,
      "ai-language-model-streaming": String(streaming)
    };
  }
};
var GatewayEmbeddingModel = class {
  static {
    __name(this, "GatewayEmbeddingModel");
  }
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v3";
    this.maxEmbeddingsPerCall = 2048;
    this.supportsParallelCalls = true;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values,
    headers,
    abortSignal,
    providerOptions
  }) {
    var _a93;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          values,
          ...providerOptions ? { providerOptions } : {}
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayEmbeddingResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        embeddings: responseBody.embeddings,
        usage: (_a93 = responseBody.usage) != null ? _a93 : void 0,
        providerMetadata: responseBody.providerMetadata,
        response: { headers: responseHeaders, body: rawValue },
        warnings: []
      };
    } catch (error40) {
      throw await asGatewayError(error40, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/embedding-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-embedding-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayEmbeddingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      embeddings: external_exports2.array(external_exports2.array(external_exports2.number())),
      usage: external_exports2.object({ tokens: external_exports2.number() }).nullish(),
      providerMetadata: external_exports2.record(external_exports2.string(), external_exports2.record(external_exports2.string(), external_exports2.unknown())).optional()
    })
  )
);
var GatewayImageModel = class {
  static {
    __name(this, "GatewayImageModel");
  }
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v3";
    this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt,
    n,
    size,
    aspectRatio,
    seed,
    files,
    mask,
    providerOptions,
    headers,
    abortSignal
  }) {
    var _a93, _b92, _c, _d;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          prompt,
          n,
          ...size && { size },
          ...aspectRatio && { aspectRatio },
          ...seed && { seed },
          ...providerOptions && { providerOptions },
          ...files && {
            files: files.map((file2) => maybeEncodeImageFile(file2))
          },
          ...mask && { mask: maybeEncodeImageFile(mask) }
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayImageResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        images: responseBody.images,
        // Always base64 strings from server
        warnings: (_a93 = responseBody.warnings) != null ? _a93 : [],
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: responseHeaders
        },
        ...responseBody.usage != null && {
          usage: {
            inputTokens: (_b92 = responseBody.usage.inputTokens) != null ? _b92 : void 0,
            outputTokens: (_c = responseBody.usage.outputTokens) != null ? _c : void 0,
            totalTokens: (_d = responseBody.usage.totalTokens) != null ? _d : void 0
          }
        }
      };
    } catch (error40) {
      throw await asGatewayError(error40, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/image-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-image-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
function maybeEncodeImageFile(file2) {
  if (file2.type === "file" && file2.data instanceof Uint8Array) {
    return {
      ...file2,
      data: convertUint8ArrayToBase64(file2.data)
    };
  }
  return file2;
}
__name(maybeEncodeImageFile, "maybeEncodeImageFile");
var providerMetadataEntrySchema = external_exports2.object({
  images: external_exports2.array(external_exports2.unknown()).optional()
}).catchall(external_exports2.unknown());
var gatewayImageWarningSchema = external_exports2.discriminatedUnion("type", [
  external_exports2.object({
    type: external_exports2.literal("unsupported"),
    feature: external_exports2.string(),
    details: external_exports2.string().optional()
  }),
  external_exports2.object({
    type: external_exports2.literal("compatibility"),
    feature: external_exports2.string(),
    details: external_exports2.string().optional()
  }),
  external_exports2.object({
    type: external_exports2.literal("other"),
    message: external_exports2.string()
  })
]);
var gatewayImageUsageSchema = external_exports2.object({
  inputTokens: external_exports2.number().nullish(),
  outputTokens: external_exports2.number().nullish(),
  totalTokens: external_exports2.number().nullish()
});
var gatewayImageResponseSchema = external_exports2.object({
  images: external_exports2.array(external_exports2.string()),
  // Always base64 strings over the wire
  warnings: external_exports2.array(gatewayImageWarningSchema).optional(),
  providerMetadata: external_exports2.record(external_exports2.string(), providerMetadataEntrySchema).optional(),
  usage: gatewayImageUsageSchema.optional()
});
var GatewayVideoModel = class {
  static {
    __name(this, "GatewayVideoModel");
  }
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v3";
    this.maxVideosPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt,
    n,
    aspectRatio,
    resolution,
    duration: duration3,
    fps,
    seed,
    image,
    providerOptions,
    headers,
    abortSignal
  }) {
    var _a93;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const { responseHeaders, value: responseBody } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders),
          { accept: "text/event-stream" }
        ),
        body: {
          prompt,
          n,
          ...aspectRatio && { aspectRatio },
          ...resolution && { resolution },
          ...duration3 && { duration: duration3 },
          ...fps && { fps },
          ...seed && { seed },
          ...providerOptions && { providerOptions },
          ...image && { image: maybeEncodeVideoFile(image) }
        },
        successfulResponseHandler: /* @__PURE__ */ __name(async ({
          response,
          url: url2,
          requestBodyValues
        }) => {
          if (response.body == null) {
            throw new APICallError({
              message: "SSE response body is empty",
              url: url2,
              requestBodyValues,
              statusCode: response.status
            });
          }
          const eventStream = parseJsonEventStream({
            stream: response.body,
            schema: gatewayVideoEventSchema
          });
          const reader = eventStream.getReader();
          const { done, value: parseResult } = await reader.read();
          reader.releaseLock();
          if (done || !parseResult) {
            throw new APICallError({
              message: "SSE stream ended without a data event",
              url: url2,
              requestBodyValues,
              statusCode: response.status
            });
          }
          if (!parseResult.success) {
            throw new APICallError({
              message: "Failed to parse video SSE event",
              cause: parseResult.error,
              url: url2,
              requestBodyValues,
              statusCode: response.status
            });
          }
          const event = parseResult.value;
          if (event.type === "error") {
            throw new APICallError({
              message: event.message,
              statusCode: event.statusCode,
              url: url2,
              requestBodyValues,
              responseHeaders: Object.fromEntries([...response.headers]),
              responseBody: JSON.stringify(event),
              data: {
                error: {
                  message: event.message,
                  type: event.errorType,
                  param: event.param
                }
              }
            });
          }
          return {
            value: {
              videos: event.videos,
              warnings: event.warnings,
              providerMetadata: event.providerMetadata
            },
            responseHeaders: Object.fromEntries([...response.headers])
          };
        }, "successfulResponseHandler"),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        videos: responseBody.videos,
        warnings: (_a93 = responseBody.warnings) != null ? _a93 : [],
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: responseHeaders
        }
      };
    } catch (error40) {
      throw await asGatewayError(error40, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/video-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-video-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
function maybeEncodeVideoFile(file2) {
  if (file2.type === "file" && file2.data instanceof Uint8Array) {
    return {
      ...file2,
      data: convertUint8ArrayToBase64(file2.data)
    };
  }
  return file2;
}
__name(maybeEncodeVideoFile, "maybeEncodeVideoFile");
var providerMetadataEntrySchema2 = external_exports2.object({
  videos: external_exports2.array(external_exports2.unknown()).optional()
}).catchall(external_exports2.unknown());
var gatewayVideoDataSchema = external_exports2.union([
  external_exports2.object({
    type: external_exports2.literal("url"),
    url: external_exports2.string(),
    mediaType: external_exports2.string()
  }),
  external_exports2.object({
    type: external_exports2.literal("base64"),
    data: external_exports2.string(),
    mediaType: external_exports2.string()
  })
]);
var gatewayVideoWarningSchema = external_exports2.discriminatedUnion("type", [
  external_exports2.object({
    type: external_exports2.literal("unsupported"),
    feature: external_exports2.string(),
    details: external_exports2.string().optional()
  }),
  external_exports2.object({
    type: external_exports2.literal("compatibility"),
    feature: external_exports2.string(),
    details: external_exports2.string().optional()
  }),
  external_exports2.object({
    type: external_exports2.literal("other"),
    message: external_exports2.string()
  })
]);
var gatewayVideoEventSchema = external_exports2.discriminatedUnion("type", [
  external_exports2.object({
    type: external_exports2.literal("result"),
    videos: external_exports2.array(gatewayVideoDataSchema),
    warnings: external_exports2.array(gatewayVideoWarningSchema).optional(),
    providerMetadata: external_exports2.record(external_exports2.string(), providerMetadataEntrySchema2).optional()
  }),
  external_exports2.object({
    type: external_exports2.literal("error"),
    message: external_exports2.string(),
    errorType: external_exports2.string(),
    statusCode: external_exports2.number(),
    param: external_exports2.unknown().nullable()
  })
]);
var GatewayRerankingModel = class {
  static {
    __name(this, "GatewayRerankingModel");
  }
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v3";
  }
  get provider() {
    return this.config.provider;
  }
  async doRerank({
    documents,
    query,
    topN,
    headers,
    abortSignal,
    providerOptions
  }) {
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          documents,
          query,
          ...topN != null ? { topN } : {},
          ...providerOptions ? { providerOptions } : {}
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayRerankingResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports2.any(),
          errorToMessage: /* @__PURE__ */ __name((data) => data, "errorToMessage")
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        ranking: responseBody.ranking,
        providerMetadata: responseBody.providerMetadata,
        response: { headers: responseHeaders, body: rawValue },
        warnings: []
      };
    } catch (error40) {
      throw await asGatewayError(error40, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/reranking-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-reranking-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayRerankingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports2.object({
      ranking: external_exports2.array(
        external_exports2.object({
          index: external_exports2.number(),
          relevanceScore: external_exports2.number()
        })
      ),
      providerMetadata: external_exports2.record(external_exports2.string(), external_exports2.record(external_exports2.string(), external_exports2.unknown())).optional()
    })
  )
);
var parallelSearchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      objective: external_exports.string().describe(
        "Natural-language description of the web research goal, including source or freshness guidance and broader context from the task. Maximum 5000 characters."
      ),
      search_queries: external_exports.array(external_exports.string()).optional().describe(
        "Optional search queries to supplement the objective. Maximum 200 characters per query."
      ),
      mode: external_exports.enum(["one-shot", "agentic"]).optional().describe(
        'Mode preset: "one-shot" for comprehensive results with longer excerpts (default), "agentic" for concise, token-efficient results for multi-step workflows.'
      ),
      max_results: external_exports.number().optional().describe(
        "Maximum number of results to return (1-20). Defaults to 10 if not specified."
      ),
      source_policy: external_exports.object({
        include_domains: external_exports.array(external_exports.string()).optional().describe("List of domains to include in search results."),
        exclude_domains: external_exports.array(external_exports.string()).optional().describe("List of domains to exclude from search results."),
        after_date: external_exports.string().optional().describe(
          "Only include results published after this date (ISO 8601 format)."
        )
      }).optional().describe(
        "Source policy for controlling which domains to include/exclude and freshness."
      ),
      excerpts: external_exports.object({
        max_chars_per_result: external_exports.number().optional().describe("Maximum characters per result."),
        max_chars_total: external_exports.number().optional().describe("Maximum total characters across all results.")
      }).optional().describe("Excerpt configuration for controlling result length."),
      fetch_policy: external_exports.object({
        max_age_seconds: external_exports.number().optional().describe(
          "Maximum age in seconds for cached content. Set to 0 to always fetch fresh content."
        )
      }).optional().describe("Fetch policy for controlling content freshness.")
    })
  )
);
var parallelSearchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      // Success response
      external_exports.object({
        searchId: external_exports.string(),
        results: external_exports.array(
          external_exports.object({
            url: external_exports.string(),
            title: external_exports.string(),
            excerpt: external_exports.string(),
            publishDate: external_exports.string().nullable().optional(),
            relevanceScore: external_exports.number().optional()
          })
        )
      }),
      // Error response
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "rate_limit",
          "timeout",
          "invalid_input",
          "configuration_error",
          "unknown"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var parallelSearchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.parallel_search",
  inputSchema: parallelSearchInputSchema,
  outputSchema: parallelSearchOutputSchema
});
var parallelSearch = /* @__PURE__ */ __name((config2 = {}) => parallelSearchToolFactory(config2), "parallelSearch");
var perplexitySearchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      query: external_exports.union([external_exports.string(), external_exports.array(external_exports.string())]).describe(
        "Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."
      ),
      max_results: external_exports.number().optional().describe(
        "Maximum number of search results to return (1-20, default: 10)"
      ),
      max_tokens_per_page: external_exports.number().optional().describe(
        "Maximum number of tokens to extract per search result page (256-2048, default: 2048)"
      ),
      max_tokens: external_exports.number().optional().describe(
        "Maximum total tokens across all search results (default: 25000, max: 1000000)"
      ),
      country: external_exports.string().optional().describe(
        "Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"
      ),
      search_domain_filter: external_exports.array(external_exports.string()).optional().describe(
        "List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"
      ),
      search_language_filter: external_exports.array(external_exports.string()).optional().describe(
        "List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"
      ),
      search_after_date: external_exports.string().optional().describe(
        "Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."
      ),
      search_before_date: external_exports.string().optional().describe(
        "Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."
      ),
      last_updated_after_filter: external_exports.string().optional().describe(
        "Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."
      ),
      last_updated_before_filter: external_exports.string().optional().describe(
        "Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."
      ),
      search_recency_filter: external_exports.enum(["day", "week", "month", "year"]).optional().describe(
        "Filter results by relative time period. Cannot be used with search_after_date or search_before_date."
      )
    })
  )
);
var perplexitySearchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      // Success response
      external_exports.object({
        results: external_exports.array(
          external_exports.object({
            title: external_exports.string(),
            url: external_exports.string(),
            snippet: external_exports.string(),
            date: external_exports.string().optional(),
            lastUpdated: external_exports.string().optional()
          })
        ),
        id: external_exports.string()
      }),
      // Error response
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "rate_limit",
          "timeout",
          "invalid_input",
          "unknown"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var perplexitySearchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.perplexity_search",
  inputSchema: perplexitySearchInputSchema,
  outputSchema: perplexitySearchOutputSchema
});
var perplexitySearch = /* @__PURE__ */ __name((config2 = {}) => perplexitySearchToolFactory(config2), "perplexitySearch");
var gatewayTools = {
  /**
   * Search the web using Parallel AI's Search API for LLM-optimized excerpts.
   *
   * Takes a natural language objective and returns relevant excerpts,
   * replacing multiple keyword searches with a single call for broad
   * or complex queries. Supports different search types for depth vs
   * breadth tradeoffs.
   */
  parallelSearch,
  /**
   * Search the web using Perplexity's Search API for real-time information,
   * news, research papers, and articles.
   *
   * Provides ranked search results with advanced filtering options including
   * domain, language, date range, and recency filters.
   */
  perplexitySearch
};
async function getVercelRequestId() {
  var _a93;
  return (_a93 = (0, import_oidc.getContext)().headers) == null ? void 0 : _a93["x-vercel-id"];
}
__name(getVercelRequestId, "getVercelRequestId");
var VERSION3 = true ? "3.0.107" : "0.0.0-test";
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
  var _a93, _b92;
  let pendingMetadata = null;
  let metadataCache = null;
  const cacheRefreshMillis = (_a93 = options.metadataCacheRefreshMillis) != null ? _a93 : 1e3 * 60 * 5;
  let lastFetchTime = 0;
  const baseURL = (_b92 = withoutTrailingSlash(options.baseURL)) != null ? _b92 : "https://ai-gateway.vercel.sh/v3/ai";
  const getHeaders = /* @__PURE__ */ __name(async () => {
    try {
      const auth = await getGatewayAuthToken(options);
      return withUserAgentSuffix(
        {
          Authorization: `Bearer ${auth.token}`,
          "ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
          [GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
          ...options.headers
        },
        `ai-sdk/gateway/${VERSION3}`
      );
    } catch (error40) {
      throw GatewayAuthenticationError.createContextualError({
        apiKeyProvided: false,
        oidcTokenProvided: false,
        statusCode: 401,
        cause: error40
      });
    }
  }, "getHeaders");
  const createO11yHeaders = /* @__PURE__ */ __name(() => {
    const deploymentId = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    });
    const environment = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    });
    const region = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    const projectId = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_PROJECT_ID"
    });
    return async () => {
      const requestId = await getVercelRequestId();
      return {
        ...deploymentId && { "ai-o11y-deployment-id": deploymentId },
        ...environment && { "ai-o11y-environment": environment },
        ...region && { "ai-o11y-region": region },
        ...requestId && { "ai-o11y-request-id": requestId },
        ...projectId && { "ai-o11y-project-id": projectId }
      };
    };
  }, "createO11yHeaders");
  const createLanguageModel = /* @__PURE__ */ __name((modelId) => {
    return new GatewayLanguageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  }, "createLanguageModel");
  const getAvailableModels = /* @__PURE__ */ __name(async () => {
    var _a103, _b102, _c;
    const now2 = (_c = (_b102 = (_a103 = options._internal) == null ? void 0 : _a103.currentDate) == null ? void 0 : _b102.call(_a103).getTime()) != null ? _c : Date.now();
    if (!pendingMetadata || now2 - lastFetchTime > cacheRefreshMillis) {
      lastFetchTime = now2;
      pendingMetadata = new GatewayFetchMetadata({
        baseURL,
        headers: getHeaders,
        fetch: options.fetch
      }).getAvailableModels().then((metadata) => {
        metadataCache = metadata;
        return metadata;
      }).catch(async (error40) => {
        throw await asGatewayError(
          error40,
          await parseAuthMethod(await getHeaders())
        );
      });
    }
    return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
  }, "getAvailableModels");
  const getCredits = /* @__PURE__ */ __name(async () => {
    return new GatewayFetchMetadata({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getCredits().catch(async (error40) => {
      throw await asGatewayError(
        error40,
        await parseAuthMethod(await getHeaders())
      );
    });
  }, "getCredits");
  const getSpendReport = /* @__PURE__ */ __name(async (params) => {
    return new GatewaySpendReport({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getSpendReport(params).catch(async (error40) => {
      throw await asGatewayError(
        error40,
        await parseAuthMethod(await getHeaders())
      );
    });
  }, "getSpendReport");
  const getGenerationInfo = /* @__PURE__ */ __name(async (params) => {
    return new GatewayGenerationInfoFetcher({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getGenerationInfo(params).catch(async (error40) => {
      throw await asGatewayError(
        error40,
        await parseAuthMethod(await getHeaders())
      );
    });
  }, "getGenerationInfo");
  const provider = /* @__PURE__ */ __name(function(modelId) {
    if (new.target) {
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    }
    return createLanguageModel(modelId);
  }, "provider");
  provider.specificationVersion = "v3";
  provider.getAvailableModels = getAvailableModels;
  provider.getCredits = getCredits;
  provider.getSpendReport = getSpendReport;
  provider.getGenerationInfo = getGenerationInfo;
  provider.imageModel = (modelId) => {
    return new GatewayImageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.languageModel = createLanguageModel;
  const createEmbeddingModel = /* @__PURE__ */ __name((modelId) => {
    return new GatewayEmbeddingModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  }, "createEmbeddingModel");
  provider.embeddingModel = createEmbeddingModel;
  provider.textEmbeddingModel = createEmbeddingModel;
  provider.videoModel = (modelId) => {
    return new GatewayVideoModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  const createRerankingModel = /* @__PURE__ */ __name((modelId) => {
    return new GatewayRerankingModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  }, "createRerankingModel");
  provider.rerankingModel = createRerankingModel;
  provider.reranking = createRerankingModel;
  provider.chat = provider.languageModel;
  provider.embedding = provider.embeddingModel;
  provider.image = provider.imageModel;
  provider.video = provider.videoModel;
  provider.tools = gatewayTools;
  return provider;
}
__name(createGatewayProvider, "createGatewayProvider");
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
  const apiKey = loadOptionalSetting({
    settingValue: options.apiKey,
    environmentVariableName: "AI_GATEWAY_API_KEY"
  });
  if (apiKey) {
    return {
      token: apiKey,
      authMethod: "api-key"
    };
  }
  const oidcToken = await (0, import_oidc2.getVercelOidcToken)();
  return {
    token: oidcToken,
    authMethod: "oidc"
  };
}
__name(getGatewayAuthToken, "getGatewayAuthToken");

// node_modules/ai/dist/index.mjs
init_esm2();
init_esm2();
var __defProp = Object.defineProperty;
var __export2 = /* @__PURE__ */ __name((target, all) => {
  for (var name21 in all)
    __defProp(target, name21, { get: all[name21], enumerable: true });
}, "__export");
var name16 = "AI_InvalidArgumentError";
var marker17 = `vercel.ai.error.${name16}`;
var symbol18 = Symbol.for(marker17);
var _a17;
var InvalidArgumentError2 = class extends AISDKError {
  static {
    __name(this, "InvalidArgumentError");
  }
  constructor({
    parameter,
    value,
    message
  }) {
    super({
      name: name16,
      message: `Invalid argument for parameter ${parameter}: ${message}`
    });
    this[_a17] = true;
    this.parameter = parameter;
    this.value = value;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker17);
  }
};
_a17 = symbol18;
var name23 = "AI_InvalidStreamPartError";
var marker23 = `vercel.ai.error.${name23}`;
var symbol23 = Symbol.for(marker23);
var _a23;
_a23 = symbol23;
var name33 = "AI_InvalidToolApprovalError";
var marker33 = `vercel.ai.error.${name33}`;
var symbol33 = Symbol.for(marker33);
var _a33;
var InvalidToolApprovalError = class extends AISDKError {
  static {
    __name(this, "InvalidToolApprovalError");
  }
  constructor({ approvalId }) {
    super({
      name: name33,
      message: `Tool approval response references unknown approvalId: "${approvalId}". No matching tool-approval-request found in message history.`
    });
    this[_a33] = true;
    this.approvalId = approvalId;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker33);
  }
};
_a33 = symbol33;
var name43 = "AI_InvalidToolInputError";
var marker43 = `vercel.ai.error.${name43}`;
var symbol43 = Symbol.for(marker43);
var _a43;
var InvalidToolInputError = class extends AISDKError {
  static {
    __name(this, "InvalidToolInputError");
  }
  constructor({
    toolInput,
    toolName,
    cause,
    message = `Invalid input for tool ${toolName}: ${getErrorMessage(cause)}`
  }) {
    super({ name: name43, message, cause });
    this[_a43] = true;
    this.toolInput = toolInput;
    this.toolName = toolName;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker43);
  }
};
_a43 = symbol43;
var name53 = "AI_ToolCallNotFoundForApprovalError";
var marker53 = `vercel.ai.error.${name53}`;
var symbol53 = Symbol.for(marker53);
var _a53;
var ToolCallNotFoundForApprovalError = class extends AISDKError {
  static {
    __name(this, "ToolCallNotFoundForApprovalError");
  }
  constructor({
    toolCallId,
    approvalId
  }) {
    super({
      name: name53,
      message: `Tool call "${toolCallId}" not found for approval request "${approvalId}".`
    });
    this[_a53] = true;
    this.toolCallId = toolCallId;
    this.approvalId = approvalId;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker53);
  }
};
_a53 = symbol53;
var name63 = "AI_MissingToolResultsError";
var marker63 = `vercel.ai.error.${name63}`;
var symbol63 = Symbol.for(marker63);
var _a63;
var MissingToolResultsError = class extends AISDKError {
  static {
    __name(this, "MissingToolResultsError");
  }
  constructor({ toolCallIds }) {
    super({
      name: name63,
      message: `Tool result${toolCallIds.length > 1 ? "s are" : " is"} missing for tool call${toolCallIds.length > 1 ? "s" : ""} ${toolCallIds.join(
        ", "
      )}.`
    });
    this[_a63] = true;
    this.toolCallIds = toolCallIds;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker63);
  }
};
_a63 = symbol63;
var name73 = "AI_NoImageGeneratedError";
var marker73 = `vercel.ai.error.${name73}`;
var symbol73 = Symbol.for(marker73);
var _a73;
_a73 = symbol73;
var name82 = "AI_NoObjectGeneratedError";
var marker83 = `vercel.ai.error.${name82}`;
var symbol83 = Symbol.for(marker83);
var _a83;
var NoObjectGeneratedError = class extends AISDKError {
  static {
    __name(this, "NoObjectGeneratedError");
  }
  constructor({
    message = "No object generated.",
    cause,
    text: text2,
    response,
    usage,
    finishReason
  }) {
    super({ name: name82, message, cause });
    this[_a83] = true;
    this.text = text2;
    this.response = response;
    this.usage = usage;
    this.finishReason = finishReason;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker83);
  }
};
_a83 = symbol83;
var name92 = "AI_NoOutputGeneratedError";
var marker92 = `vercel.ai.error.${name92}`;
var symbol92 = Symbol.for(marker92);
var _a92;
var NoOutputGeneratedError = class extends AISDKError {
  static {
    __name(this, "NoOutputGeneratedError");
  }
  // used in isInstance
  constructor({
    message = "No output generated.",
    cause
  } = {}) {
    super({ name: name92, message, cause });
    this[_a92] = true;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker92);
  }
};
_a92 = symbol92;
var name102 = "AI_NoSpeechGeneratedError";
var marker102 = `vercel.ai.error.${name102}`;
var symbol102 = Symbol.for(marker102);
var _a102;
_a102 = symbol102;
var name112 = "AI_NoTranscriptGeneratedError";
var marker112 = `vercel.ai.error.${name112}`;
var symbol112 = Symbol.for(marker112);
var _a112;
_a112 = symbol112;
var name122 = "AI_NoVideoGeneratedError";
var marker122 = `vercel.ai.error.${name122}`;
var symbol122 = Symbol.for(marker122);
var _a122;
_a122 = symbol122;
var name132 = "AI_NoSuchToolError";
var marker132 = `vercel.ai.error.${name132}`;
var symbol132 = Symbol.for(marker132);
var _a132;
var NoSuchToolError = class extends AISDKError {
  static {
    __name(this, "NoSuchToolError");
  }
  constructor({
    toolName,
    availableTools = void 0,
    message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === void 0 ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}`
  }) {
    super({ name: name132, message });
    this[_a132] = true;
    this.toolName = toolName;
    this.availableTools = availableTools;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker132);
  }
};
_a132 = symbol132;
var name142 = "AI_ToolCallRepairError";
var marker142 = `vercel.ai.error.${name142}`;
var symbol142 = Symbol.for(marker142);
var _a142;
var ToolCallRepairError = class extends AISDKError {
  static {
    __name(this, "ToolCallRepairError");
  }
  constructor({
    cause,
    originalError,
    message = `Error repairing tool call: ${getErrorMessage(cause)}`
  }) {
    super({ name: name142, message, cause });
    this[_a142] = true;
    this.originalError = originalError;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker142);
  }
};
_a142 = symbol142;
var UnsupportedModelVersionError = class extends AISDKError {
  static {
    __name(this, "UnsupportedModelVersionError");
  }
  constructor(options) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${options.version} for provider "${options.provider}" and model "${options.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    });
    this.version = options.version;
    this.provider = options.provider;
    this.modelId = options.modelId;
  }
};
var name152 = "AI_UIMessageStreamError";
var marker152 = `vercel.ai.error.${name152}`;
var symbol152 = Symbol.for(marker152);
var _a152;
_a152 = symbol152;
var name162 = "AI_InvalidDataContentError";
var marker162 = `vercel.ai.error.${name162}`;
var symbol162 = Symbol.for(marker162);
var _a162;
_a162 = symbol162;
var name17 = "AI_InvalidMessageRoleError";
var marker172 = `vercel.ai.error.${name17}`;
var symbol172 = Symbol.for(marker172);
var _a172;
var InvalidMessageRoleError = class extends AISDKError {
  static {
    __name(this, "InvalidMessageRoleError");
  }
  constructor({
    role,
    message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: name17, message });
    this[_a172] = true;
    this.role = role;
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker172);
  }
};
_a172 = symbol172;
var name18 = "AI_MessageConversionError";
var marker18 = `vercel.ai.error.${name18}`;
var symbol182 = Symbol.for(marker18);
var _a18;
_a18 = symbol182;
var name19 = "AI_RetryError";
var marker19 = `vercel.ai.error.${name19}`;
var symbol19 = Symbol.for(marker19);
var _a19;
var RetryError = class extends AISDKError {
  static {
    __name(this, "RetryError");
  }
  constructor({
    message,
    reason,
    errors
  }) {
    super({ name: name19, message });
    this[_a19] = true;
    this.reason = reason;
    this.errors = errors;
    this.lastError = errors[errors.length - 1];
  }
  static isInstance(error40) {
    return AISDKError.hasMarker(error40, marker19);
  }
};
_a19 = symbol19;
function asArray(value) {
  return value === void 0 ? [] : Array.isArray(value) ? value : [value];
}
__name(asArray, "asArray");
async function notify(options) {
  for (const callback of asArray(options.callbacks)) {
    if (callback == null)
      continue;
    try {
      await callback(options.event);
    } catch (_ignored) {
    }
  }
}
__name(notify, "notify");
function formatWarning({
  warning,
  provider,
  model
}) {
  const prefix = `AI SDK Warning (${provider} / ${model}):`;
  switch (warning.type) {
    case "unsupported": {
      let message = `${prefix} The feature "${warning.feature}" is not supported.`;
      if (warning.details) {
        message += ` ${warning.details}`;
      }
      return message;
    }
    case "compatibility": {
      let message = `${prefix} The feature "${warning.feature}" is used in a compatibility mode.`;
      if (warning.details) {
        message += ` ${warning.details}`;
      }
      return message;
    }
    case "other": {
      return `${prefix} ${warning.message}`;
    }
    default: {
      return `${prefix} ${JSON.stringify(warning, null, 2)}`;
    }
  }
}
__name(formatWarning, "formatWarning");
var FIRST_WARNING_INFO_MESSAGE = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.";
var hasLoggedBefore = false;
var logWarnings = /* @__PURE__ */ __name((options) => {
  if (options.warnings.length === 0) {
    return;
  }
  const logger = globalThis.AI_SDK_LOG_WARNINGS;
  if (logger === false) {
    return;
  }
  if (typeof logger === "function") {
    logger(options);
    return;
  }
  if (!hasLoggedBefore) {
    hasLoggedBefore = true;
    console.info(FIRST_WARNING_INFO_MESSAGE);
  }
  for (const warning of options.warnings) {
    console.warn(
      formatWarning({
        warning,
        provider: options.provider,
        model: options.model
      })
    );
  }
}, "logWarnings");
function logV2CompatibilityWarning({
  provider,
  modelId
}) {
  logWarnings({
    warnings: [
      {
        type: "compatibility",
        feature: "specificationVersion",
        details: `Using v2 specification compatibility mode. Some features may not be available.`
      }
    ],
    provider,
    model: modelId
  });
}
__name(logV2CompatibilityWarning, "logV2CompatibilityWarning");
function asLanguageModelV3(model) {
  if (model.specificationVersion === "v3") {
    return model;
  }
  logV2CompatibilityWarning({
    provider: model.provider,
    modelId: model.modelId
  });
  return new Proxy(model, {
    get(target, prop) {
      switch (prop) {
        case "specificationVersion":
          return "v3";
        case "doGenerate":
          return async (...args) => {
            const result = await target.doGenerate(...args);
            return {
              ...result,
              finishReason: convertV2FinishReasonToV3(result.finishReason),
              usage: convertV2UsageToV3(result.usage)
            };
          };
        case "doStream":
          return async (...args) => {
            const result = await target.doStream(...args);
            return {
              ...result,
              stream: convertV2StreamToV3(result.stream)
            };
          };
        default:
          return target[prop];
      }
    }
  });
}
__name(asLanguageModelV3, "asLanguageModelV3");
function convertV2StreamToV3(stream) {
  return stream.pipeThrough(
    new TransformStream({
      transform(chunk, controller) {
        switch (chunk.type) {
          case "finish":
            controller.enqueue({
              ...chunk,
              finishReason: convertV2FinishReasonToV3(chunk.finishReason),
              usage: convertV2UsageToV3(chunk.usage)
            });
            break;
          default:
            controller.enqueue(chunk);
            break;
        }
      }
    })
  );
}
__name(convertV2StreamToV3, "convertV2StreamToV3");
function convertV2FinishReasonToV3(finishReason) {
  return {
    unified: finishReason === "unknown" ? "other" : finishReason,
    raw: void 0
  };
}
__name(convertV2FinishReasonToV3, "convertV2FinishReasonToV3");
function convertV2UsageToV3(usage) {
  return {
    inputTokens: {
      total: usage.inputTokens,
      noCache: void 0,
      cacheRead: usage.cachedInputTokens,
      cacheWrite: void 0
    },
    outputTokens: {
      total: usage.outputTokens,
      text: void 0,
      reasoning: usage.reasoningTokens
    }
  };
}
__name(convertV2UsageToV3, "convertV2UsageToV3");
function resolveLanguageModel(model) {
  if (typeof model !== "string") {
    if (model.specificationVersion !== "v3" && model.specificationVersion !== "v2") {
      const unsupportedModel = model;
      throw new UnsupportedModelVersionError({
        version: unsupportedModel.specificationVersion,
        provider: unsupportedModel.provider,
        modelId: unsupportedModel.modelId
      });
    }
    return asLanguageModelV3(model);
  }
  return getGlobalProvider().languageModel(model);
}
__name(resolveLanguageModel, "resolveLanguageModel");
function getGlobalProvider() {
  var _a21;
  return (_a21 = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? _a21 : gateway;
}
__name(getGlobalProvider, "getGlobalProvider");
function getTotalTimeoutMs(timeout) {
  if (timeout == null) {
    return void 0;
  }
  if (typeof timeout === "number") {
    return timeout;
  }
  return timeout.totalMs;
}
__name(getTotalTimeoutMs, "getTotalTimeoutMs");
function getStepTimeoutMs(timeout) {
  if (timeout == null || typeof timeout === "number") {
    return void 0;
  }
  return timeout.stepMs;
}
__name(getStepTimeoutMs, "getStepTimeoutMs");
var imageMediaTypeSignatures = [
  {
    mediaType: "image/gif",
    bytesPrefix: [71, 73, 70]
    // GIF
  },
  {
    mediaType: "image/png",
    bytesPrefix: [137, 80, 78, 71]
    // PNG
  },
  {
    mediaType: "image/jpeg",
    bytesPrefix: [255, 216]
    // JPEG
  },
  {
    mediaType: "image/webp",
    bytesPrefix: [
      82,
      73,
      70,
      70,
      // "RIFF"
      null,
      null,
      null,
      null,
      // file size (variable)
      87,
      69,
      66,
      80
      // "WEBP"
    ]
  },
  {
    mediaType: "image/bmp",
    bytesPrefix: [66, 77]
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [73, 73, 42, 0]
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [77, 77, 0, 42]
  },
  {
    mediaType: "image/avif",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      97,
      118,
      105,
      102
    ]
  },
  {
    mediaType: "image/heic",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      104,
      101,
      105,
      99
    ]
  }
];
var stripID3 = /* @__PURE__ */ __name((data) => {
  const bytes = typeof data === "string" ? convertBase64ToUint8Array(data) : data;
  const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
  return bytes.slice(id3Size + 10);
}, "stripID3");
function stripID3TagsIfPresent(data) {
  const hasId3 = typeof data === "string" && data.startsWith("SUQz") || typeof data !== "string" && data.length > 10 && data[0] === 73 && // 'I'
  data[1] === 68 && // 'D'
  data[2] === 51;
  return hasId3 ? stripID3(data) : data;
}
__name(stripID3TagsIfPresent, "stripID3TagsIfPresent");
function detectMediaType({
  data,
  signatures
}) {
  const processedData = stripID3TagsIfPresent(data);
  const bytes = typeof processedData === "string" ? convertBase64ToUint8Array(
    processedData.substring(0, Math.min(processedData.length, 24))
  ) : processedData;
  for (const signature of signatures) {
    if (bytes.length >= signature.bytesPrefix.length && signature.bytesPrefix.every(
      (byte, index) => byte === null || bytes[index] === byte
    )) {
      return signature.mediaType;
    }
  }
  return void 0;
}
__name(detectMediaType, "detectMediaType");
var VERSION4 = true ? "6.0.172" : "0.0.0-test";
var download = /* @__PURE__ */ __name(async ({
  url: url2,
  maxBytes,
  abortSignal
}) => {
  var _a21;
  const urlText = url2.toString();
  validateDownloadUrl(urlText);
  try {
    const response = await fetch(urlText, {
      headers: withUserAgentSuffix(
        {},
        `ai-sdk/${VERSION4}`,
        getRuntimeEnvironmentUserAgent()
      ),
      signal: abortSignal
    });
    if (response.redirected) {
      validateDownloadUrl(response.url);
    }
    if (!response.ok) {
      throw new DownloadError({
        url: urlText,
        statusCode: response.status,
        statusText: response.statusText
      });
    }
    const data = await readResponseWithSizeLimit({
      response,
      url: urlText,
      maxBytes: maxBytes != null ? maxBytes : DEFAULT_MAX_DOWNLOAD_SIZE
    });
    return {
      data,
      mediaType: (_a21 = response.headers.get("content-type")) != null ? _a21 : void 0
    };
  } catch (error40) {
    if (DownloadError.isInstance(error40)) {
      throw error40;
    }
    throw new DownloadError({ url: urlText, cause: error40 });
  }
}, "download");
var createDefaultDownloadFunction = /* @__PURE__ */ __name((download2 = download) => (requestedDownloads) => Promise.all(
  requestedDownloads.map(
    async (requestedDownload) => requestedDownload.isUrlSupportedByModel ? null : download2(requestedDownload)
  )
), "createDefaultDownloadFunction");
function splitDataUrl(dataUrl) {
  try {
    const [header, base64Content] = dataUrl.split(",");
    return {
      mediaType: header.split(";")[0].split(":")[1],
      base64Content
    };
  } catch (error40) {
    return {
      mediaType: void 0,
      base64Content: void 0
    };
  }
}
__name(splitDataUrl, "splitDataUrl");
var dataContentSchema = external_exports2.union([
  external_exports2.string(),
  external_exports2.instanceof(Uint8Array),
  external_exports2.instanceof(ArrayBuffer),
  external_exports2.custom(
    // Buffer might not be available in some environments such as CloudFlare:
    (value) => {
      var _a21, _b17;
      return (_b17 = (_a21 = globalThis.Buffer) == null ? void 0 : _a21.isBuffer(value)) != null ? _b17 : false;
    },
    { message: "Must be a Buffer" }
  )
]);
function convertToLanguageModelV3DataContent(content) {
  if (content instanceof Uint8Array) {
    return { data: content, mediaType: void 0 };
  }
  if (content instanceof ArrayBuffer) {
    return { data: new Uint8Array(content), mediaType: void 0 };
  }
  if (typeof content === "string") {
    try {
      content = new URL(content);
    } catch (error40) {
    }
  }
  if (content instanceof URL && content.protocol === "data:") {
    const { mediaType: dataUrlMediaType, base64Content } = splitDataUrl(
      content.toString()
    );
    if (dataUrlMediaType == null || base64Content == null) {
      throw new AISDKError({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${content.toString()}`
      });
    }
    return { data: base64Content, mediaType: dataUrlMediaType };
  }
  return { data: content, mediaType: void 0 };
}
__name(convertToLanguageModelV3DataContent, "convertToLanguageModelV3DataContent");
function convertDataContentToBase64String(content) {
  if (typeof content === "string") {
    return content;
  }
  if (content instanceof ArrayBuffer) {
    return convertUint8ArrayToBase64(new Uint8Array(content));
  }
  return convertUint8ArrayToBase64(content);
}
__name(convertDataContentToBase64String, "convertDataContentToBase64String");
async function convertToLanguageModelPrompt({
  prompt,
  supportedUrls,
  download: download2 = createDefaultDownloadFunction()
}) {
  const downloadedAssets = await downloadAssets(
    prompt.messages,
    download2,
    supportedUrls
  );
  const approvalIdToToolCallId = /* @__PURE__ */ new Map();
  for (const message of prompt.messages) {
    if (message.role === "assistant" && Array.isArray(message.content)) {
      for (const part of message.content) {
        if (part.type === "tool-approval-request" && "approvalId" in part && "toolCallId" in part) {
          approvalIdToToolCallId.set(
            part.approvalId,
            part.toolCallId
          );
        }
      }
    }
  }
  const approvedToolCallIds = /* @__PURE__ */ new Set();
  for (const message of prompt.messages) {
    if (message.role === "tool") {
      for (const part of message.content) {
        if (part.type === "tool-approval-response") {
          const toolCallId = approvalIdToToolCallId.get(part.approvalId);
          if (toolCallId) {
            approvedToolCallIds.add(toolCallId);
          }
        }
      }
    }
  }
  const messages = [
    ...prompt.system != null ? typeof prompt.system === "string" ? [{ role: "system", content: prompt.system }] : asArray(prompt.system).map((message) => ({
      role: "system",
      content: message.content,
      providerOptions: message.providerOptions
    })) : [],
    ...prompt.messages.map(
      (message) => convertToLanguageModelMessage({ message, downloadedAssets })
    )
  ];
  const combinedMessages = [];
  for (const message of messages) {
    if (message.role !== "tool") {
      combinedMessages.push(message);
      continue;
    }
    const lastCombinedMessage = combinedMessages.at(-1);
    if ((lastCombinedMessage == null ? void 0 : lastCombinedMessage.role) === "tool") {
      lastCombinedMessage.content.push(...message.content);
    } else {
      combinedMessages.push(message);
    }
  }
  const toolCallIds = /* @__PURE__ */ new Set();
  for (const message of combinedMessages) {
    switch (message.role) {
      case "assistant": {
        for (const content of message.content) {
          if (content.type === "tool-call" && !content.providerExecuted) {
            toolCallIds.add(content.toolCallId);
          }
        }
        break;
      }
      case "tool": {
        for (const content of message.content) {
          if (content.type === "tool-result") {
            toolCallIds.delete(content.toolCallId);
          }
        }
        break;
      }
      case "user":
      case "system":
        for (const id of approvedToolCallIds) {
          toolCallIds.delete(id);
        }
        if (toolCallIds.size > 0) {
          throw new MissingToolResultsError({
            toolCallIds: Array.from(toolCallIds)
          });
        }
        break;
    }
  }
  for (const id of approvedToolCallIds) {
    toolCallIds.delete(id);
  }
  if (toolCallIds.size > 0) {
    throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
  }
  return combinedMessages.filter(
    // Filter out empty tool messages (e.g. if they only contained
    // tool-approval-response parts that were removed).
    // This prevents sending invalid empty messages to the provider.
    // Note: provider-executed tool-approval-response parts are preserved.
    (message) => message.role !== "tool" || message.content.length > 0
  );
}
__name(convertToLanguageModelPrompt, "convertToLanguageModelPrompt");
function convertToLanguageModelMessage({
  message,
  downloadedAssets
}) {
  const role = message.role;
  switch (role) {
    case "system": {
      return {
        role: "system",
        content: message.content,
        providerOptions: message.providerOptions
      };
    }
    case "user": {
      if (typeof message.content === "string") {
        return {
          role: "user",
          content: [{ type: "text", text: message.content }],
          providerOptions: message.providerOptions
        };
      }
      return {
        role: "user",
        content: message.content.map((part) => convertPartToLanguageModelPart(part, downloadedAssets)).filter((part) => part.type !== "text" || part.text !== ""),
        providerOptions: message.providerOptions
      };
    }
    case "assistant": {
      if (typeof message.content === "string") {
        return {
          role: "assistant",
          content: [{ type: "text", text: message.content }],
          providerOptions: message.providerOptions
        };
      }
      return {
        role: "assistant",
        content: message.content.filter(
          // remove empty text parts (no text, and no provider options):
          (part) => part.type !== "text" || part.text !== "" || part.providerOptions != null
        ).filter(
          (part) => part.type !== "tool-approval-request"
        ).map((part) => {
          const providerOptions = part.providerOptions;
          switch (part.type) {
            case "file": {
              const { data, mediaType } = convertToLanguageModelV3DataContent(
                part.data
              );
              return {
                type: "file",
                data,
                filename: part.filename,
                mediaType: mediaType != null ? mediaType : part.mediaType,
                providerOptions
              };
            }
            case "reasoning": {
              return {
                type: "reasoning",
                text: part.text,
                providerOptions
              };
            }
            case "text": {
              return {
                type: "text",
                text: part.text,
                providerOptions
              };
            }
            case "tool-call": {
              return {
                type: "tool-call",
                toolCallId: part.toolCallId,
                toolName: part.toolName,
                input: part.input,
                providerExecuted: part.providerExecuted,
                providerOptions
              };
            }
            case "tool-result": {
              return {
                type: "tool-result",
                toolCallId: part.toolCallId,
                toolName: part.toolName,
                output: mapToolResultOutput(part.output),
                providerOptions
              };
            }
          }
        }),
        providerOptions: message.providerOptions
      };
    }
    case "tool": {
      return {
        role: "tool",
        content: message.content.filter(
          // Only include tool-approval-response for provider-executed tools
          (part) => part.type !== "tool-approval-response" || part.providerExecuted
        ).map((part) => {
          switch (part.type) {
            case "tool-result": {
              return {
                type: "tool-result",
                toolCallId: part.toolCallId,
                toolName: part.toolName,
                output: mapToolResultOutput(part.output),
                providerOptions: part.providerOptions
              };
            }
            case "tool-approval-response": {
              return {
                type: "tool-approval-response",
                approvalId: part.approvalId,
                approved: part.approved,
                reason: part.reason
              };
            }
          }
        }),
        providerOptions: message.providerOptions
      };
    }
    default: {
      const _exhaustiveCheck = role;
      throw new InvalidMessageRoleError({ role: _exhaustiveCheck });
    }
  }
}
__name(convertToLanguageModelMessage, "convertToLanguageModelMessage");
async function downloadAssets(messages, download2, supportedUrls) {
  const plannedDownloads = messages.filter((message) => message.role === "user").map((message) => message.content).filter(
    (content) => Array.isArray(content)
  ).flat().filter(
    (part) => part.type === "image" || part.type === "file"
  ).map((part) => {
    var _a21;
    const mediaType = (_a21 = part.mediaType) != null ? _a21 : part.type === "image" ? "image/*" : void 0;
    let data = part.type === "image" ? part.image : part.data;
    if (typeof data === "string") {
      try {
        data = new URL(data);
      } catch (ignored) {
      }
    }
    return { mediaType, data };
  }).filter(
    (part) => part.data instanceof URL
  ).map((part) => ({
    url: part.data,
    isUrlSupportedByModel: part.mediaType != null && isUrlSupported({
      url: part.data.toString(),
      mediaType: part.mediaType,
      supportedUrls
    })
  }));
  const downloadedFiles = await download2(plannedDownloads);
  return Object.fromEntries(
    downloadedFiles.map(
      (file2, index) => file2 == null ? null : [
        plannedDownloads[index].url.toString(),
        { data: file2.data, mediaType: file2.mediaType }
      ]
    ).filter((file2) => file2 != null)
  );
}
__name(downloadAssets, "downloadAssets");
function convertPartToLanguageModelPart(part, downloadedAssets) {
  var _a21;
  if (part.type === "text") {
    return {
      type: "text",
      text: part.text,
      providerOptions: part.providerOptions
    };
  }
  let originalData;
  const type = part.type;
  switch (type) {
    case "image":
      originalData = part.image;
      break;
    case "file":
      originalData = part.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${type}`);
  }
  const { data: convertedData, mediaType: convertedMediaType } = convertToLanguageModelV3DataContent(originalData);
  let mediaType = convertedMediaType != null ? convertedMediaType : part.mediaType;
  let data = convertedData;
  if (data instanceof URL) {
    const downloadedFile = downloadedAssets[data.toString()];
    if (downloadedFile) {
      data = downloadedFile.data;
      mediaType != null ? mediaType : mediaType = downloadedFile.mediaType;
    }
  }
  switch (type) {
    case "image": {
      if (data instanceof Uint8Array || typeof data === "string") {
        mediaType = (_a21 = detectMediaType({ data, signatures: imageMediaTypeSignatures })) != null ? _a21 : mediaType;
      }
      return {
        type: "file",
        mediaType: mediaType != null ? mediaType : "image/*",
        // any image
        filename: void 0,
        data,
        providerOptions: part.providerOptions
      };
    }
    case "file": {
      if (mediaType == null) {
        throw new Error(`Media type is missing for file part`);
      }
      return {
        type: "file",
        mediaType,
        filename: part.filename,
        data,
        providerOptions: part.providerOptions
      };
    }
  }
}
__name(convertPartToLanguageModelPart, "convertPartToLanguageModelPart");
function mapToolResultOutput(output) {
  if (output.type !== "content") {
    return output;
  }
  return {
    type: "content",
    value: output.value.map((item) => {
      if (item.type !== "media") {
        return item;
      }
      if (item.mediaType.startsWith("image/")) {
        return {
          type: "image-data",
          data: item.data,
          mediaType: item.mediaType
        };
      }
      return {
        type: "file-data",
        data: item.data,
        mediaType: item.mediaType
      };
    })
  };
}
__name(mapToolResultOutput, "mapToolResultOutput");
async function createToolModelOutput({
  toolCallId,
  input,
  output,
  tool: tool2,
  errorMode
}) {
  if (errorMode === "text") {
    return { type: "error-text", value: getErrorMessage(output) };
  } else if (errorMode === "json") {
    return { type: "error-json", value: toJSONValue(output) };
  }
  if (tool2 == null ? void 0 : tool2.toModelOutput) {
    return await tool2.toModelOutput({ toolCallId, input, output });
  }
  return typeof output === "string" ? { type: "text", value: output } : { type: "json", value: toJSONValue(output) };
}
__name(createToolModelOutput, "createToolModelOutput");
function toJSONValue(value) {
  return value === void 0 ? null : value;
}
__name(toJSONValue, "toJSONValue");
function prepareCallSettings({
  maxOutputTokens,
  temperature,
  topP,
  topK,
  presencePenalty,
  frequencyPenalty,
  seed,
  stopSequences
}) {
  if (maxOutputTokens != null) {
    if (!Number.isInteger(maxOutputTokens)) {
      throw new InvalidArgumentError2({
        parameter: "maxOutputTokens",
        value: maxOutputTokens,
        message: "maxOutputTokens must be an integer"
      });
    }
    if (maxOutputTokens < 1) {
      throw new InvalidArgumentError2({
        parameter: "maxOutputTokens",
        value: maxOutputTokens,
        message: "maxOutputTokens must be >= 1"
      });
    }
  }
  if (temperature != null) {
    if (typeof temperature !== "number") {
      throw new InvalidArgumentError2({
        parameter: "temperature",
        value: temperature,
        message: "temperature must be a number"
      });
    }
  }
  if (topP != null) {
    if (typeof topP !== "number") {
      throw new InvalidArgumentError2({
        parameter: "topP",
        value: topP,
        message: "topP must be a number"
      });
    }
  }
  if (topK != null) {
    if (typeof topK !== "number") {
      throw new InvalidArgumentError2({
        parameter: "topK",
        value: topK,
        message: "topK must be a number"
      });
    }
  }
  if (presencePenalty != null) {
    if (typeof presencePenalty !== "number") {
      throw new InvalidArgumentError2({
        parameter: "presencePenalty",
        value: presencePenalty,
        message: "presencePenalty must be a number"
      });
    }
  }
  if (frequencyPenalty != null) {
    if (typeof frequencyPenalty !== "number") {
      throw new InvalidArgumentError2({
        parameter: "frequencyPenalty",
        value: frequencyPenalty,
        message: "frequencyPenalty must be a number"
      });
    }
  }
  if (seed != null) {
    if (!Number.isInteger(seed)) {
      throw new InvalidArgumentError2({
        parameter: "seed",
        value: seed,
        message: "seed must be an integer"
      });
    }
  }
  return {
    maxOutputTokens,
    temperature,
    topP,
    topK,
    presencePenalty,
    frequencyPenalty,
    stopSequences,
    seed
  };
}
__name(prepareCallSettings, "prepareCallSettings");
function isNonEmptyObject(object22) {
  return object22 != null && Object.keys(object22).length > 0;
}
__name(isNonEmptyObject, "isNonEmptyObject");
async function prepareToolsAndToolChoice({
  tools,
  toolChoice,
  activeTools
}) {
  if (!isNonEmptyObject(tools)) {
    return {
      tools: void 0,
      toolChoice: void 0
    };
  }
  const filteredTools = activeTools != null ? Object.entries(tools).filter(
    ([name21]) => activeTools.includes(name21)
  ) : Object.entries(tools);
  const languageModelTools = [];
  for (const [name21, tool2] of filteredTools) {
    const toolType = tool2.type;
    switch (toolType) {
      case void 0:
      case "dynamic":
      case "function":
        languageModelTools.push({
          type: "function",
          name: name21,
          description: tool2.description,
          inputSchema: await asSchema(tool2.inputSchema).jsonSchema,
          ...tool2.inputExamples != null ? { inputExamples: tool2.inputExamples } : {},
          providerOptions: tool2.providerOptions,
          ...tool2.strict != null ? { strict: tool2.strict } : {}
        });
        break;
      case "provider":
        languageModelTools.push({
          type: "provider",
          name: name21,
          id: tool2.id,
          args: tool2.args
        });
        break;
      default: {
        const exhaustiveCheck = toolType;
        throw new Error(`Unsupported tool type: ${exhaustiveCheck}`);
      }
    }
  }
  return {
    tools: languageModelTools,
    toolChoice: toolChoice == null ? { type: "auto" } : typeof toolChoice === "string" ? { type: toolChoice } : { type: "tool", toolName: toolChoice.toolName }
  };
}
__name(prepareToolsAndToolChoice, "prepareToolsAndToolChoice");
var jsonValueSchema = external_exports2.lazy(
  () => external_exports2.union([
    external_exports2.null(),
    external_exports2.string(),
    external_exports2.number(),
    external_exports2.boolean(),
    external_exports2.record(external_exports2.string(), jsonValueSchema.optional()),
    external_exports2.array(jsonValueSchema)
  ])
);
var providerMetadataSchema = external_exports2.record(
  external_exports2.string(),
  external_exports2.record(external_exports2.string(), jsonValueSchema.optional())
);
var textPartSchema = external_exports2.object({
  type: external_exports2.literal("text"),
  text: external_exports2.string(),
  providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = external_exports2.object({
  type: external_exports2.literal("image"),
  image: external_exports2.union([dataContentSchema, external_exports2.instanceof(URL)]),
  mediaType: external_exports2.string().optional(),
  providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = external_exports2.object({
  type: external_exports2.literal("file"),
  data: external_exports2.union([dataContentSchema, external_exports2.instanceof(URL)]),
  filename: external_exports2.string().optional(),
  mediaType: external_exports2.string(),
  providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = external_exports2.object({
  type: external_exports2.literal("reasoning"),
  text: external_exports2.string(),
  providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = external_exports2.object({
  type: external_exports2.literal("tool-call"),
  toolCallId: external_exports2.string(),
  toolName: external_exports2.string(),
  input: external_exports2.unknown(),
  providerOptions: providerMetadataSchema.optional(),
  providerExecuted: external_exports2.boolean().optional()
});
var outputSchema = external_exports2.discriminatedUnion(
  "type",
  [
    external_exports2.object({
      type: external_exports2.literal("text"),
      value: external_exports2.string(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports2.object({
      type: external_exports2.literal("json"),
      value: jsonValueSchema,
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports2.object({
      type: external_exports2.literal("execution-denied"),
      reason: external_exports2.string().optional(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports2.object({
      type: external_exports2.literal("error-text"),
      value: external_exports2.string(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports2.object({
      type: external_exports2.literal("error-json"),
      value: jsonValueSchema,
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports2.object({
      type: external_exports2.literal("content"),
      value: external_exports2.array(
        external_exports2.union([
          external_exports2.object({
            type: external_exports2.literal("text"),
            text: external_exports2.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports2.object({
            type: external_exports2.literal("media"),
            data: external_exports2.string(),
            mediaType: external_exports2.string()
          }),
          external_exports2.object({
            type: external_exports2.literal("file-data"),
            data: external_exports2.string(),
            mediaType: external_exports2.string(),
            filename: external_exports2.string().optional(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports2.object({
            type: external_exports2.literal("file-url"),
            url: external_exports2.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports2.object({
            type: external_exports2.literal("file-id"),
            fileId: external_exports2.union([external_exports2.string(), external_exports2.record(external_exports2.string(), external_exports2.string())]),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports2.object({
            type: external_exports2.literal("image-data"),
            data: external_exports2.string(),
            mediaType: external_exports2.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports2.object({
            type: external_exports2.literal("image-url"),
            url: external_exports2.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports2.object({
            type: external_exports2.literal("image-file-id"),
            fileId: external_exports2.union([external_exports2.string(), external_exports2.record(external_exports2.string(), external_exports2.string())]),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports2.object({
            type: external_exports2.literal("custom"),
            providerOptions: providerMetadataSchema.optional()
          })
        ])
      )
    })
  ]
);
var toolResultPartSchema = external_exports2.object({
  type: external_exports2.literal("tool-result"),
  toolCallId: external_exports2.string(),
  toolName: external_exports2.string(),
  output: outputSchema,
  providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = external_exports2.object({
  type: external_exports2.literal("tool-approval-request"),
  approvalId: external_exports2.string(),
  toolCallId: external_exports2.string()
});
var toolApprovalResponseSchema = external_exports2.object({
  type: external_exports2.literal("tool-approval-response"),
  approvalId: external_exports2.string(),
  approved: external_exports2.boolean(),
  reason: external_exports2.string().optional()
});
var systemModelMessageSchema = external_exports2.object(
  {
    role: external_exports2.literal("system"),
    content: external_exports2.string(),
    providerOptions: providerMetadataSchema.optional()
  }
);
var userModelMessageSchema = external_exports2.object({
  role: external_exports2.literal("user"),
  content: external_exports2.union([
    external_exports2.string(),
    external_exports2.array(external_exports2.union([textPartSchema, imagePartSchema, filePartSchema]))
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var assistantModelMessageSchema = external_exports2.object({
  role: external_exports2.literal("assistant"),
  content: external_exports2.union([
    external_exports2.string(),
    external_exports2.array(
      external_exports2.union([
        textPartSchema,
        filePartSchema,
        reasoningPartSchema,
        toolCallPartSchema,
        toolResultPartSchema,
        toolApprovalRequestSchema
      ])
    )
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var toolModelMessageSchema = external_exports2.object({
  role: external_exports2.literal("tool"),
  content: external_exports2.array(external_exports2.union([toolResultPartSchema, toolApprovalResponseSchema])),
  providerOptions: providerMetadataSchema.optional()
});
var modelMessageSchema = external_exports2.union([
  systemModelMessageSchema,
  userModelMessageSchema,
  assistantModelMessageSchema,
  toolModelMessageSchema
]);
async function standardizePrompt({
  allowSystemInMessages,
  system,
  prompt,
  messages
}) {
  if (prompt == null && messages == null) {
    throw new InvalidPromptError({
      prompt,
      message: "prompt or messages must be defined"
    });
  }
  if (prompt != null && messages != null) {
    throw new InvalidPromptError({
      prompt,
      message: "prompt and messages cannot be defined at the same time"
    });
  }
  if (typeof system !== "string" && !asArray(system).every((message) => message.role === "system")) {
    throw new InvalidPromptError({
      prompt,
      message: "system must be a string, SystemModelMessage, or array of SystemModelMessage"
    });
  }
  if (prompt != null && typeof prompt === "string") {
    messages = [{ role: "user", content: prompt }];
  } else if (prompt != null && Array.isArray(prompt)) {
    messages = prompt;
  } else if (messages == null) {
    throw new InvalidPromptError({
      prompt,
      message: "prompt or messages must be defined"
    });
  }
  if (messages.length === 0) {
    throw new InvalidPromptError({
      prompt,
      message: "messages must not be empty"
    });
  }
  if (messages.some((message) => message.role === "system")) {
    if (allowSystemInMessages === false) {
      throw new InvalidPromptError({
        prompt,
        message: "System messages are not allowed in the prompt or messages fields. Use the system option instead."
      });
    }
    if (allowSystemInMessages === void 0) {
      console.warn(
        "AI SDK Warning: System messages in the prompt or messages fields can be a security risk because they may enable prompt injection attacks. Use the system option instead when possible. Set allowSystemInMessages to true to suppress this warning, or false to throw an error."
      );
    }
  }
  const validationResult = await safeValidateTypes({
    value: messages,
    schema: external_exports2.array(modelMessageSchema)
  });
  if (!validationResult.success) {
    throw new InvalidPromptError({
      prompt,
      message: "The messages do not match the ModelMessage[] schema.",
      cause: validationResult.error
    });
  }
  return { messages, system };
}
__name(standardizePrompt, "standardizePrompt");
function wrapGatewayError(error40) {
  if (!GatewayAuthenticationError.isInstance(error40))
    return error40;
  const isProductionEnv = (process == null ? void 0 : process.env.NODE_ENV) === "production";
  const moreInfoURL = "https://ai-sdk.dev/unauthenticated-ai-gateway";
  if (isProductionEnv) {
    return new AISDKError({
      name: "GatewayError",
      message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: ${moreInfoURL}`
    });
  }
  return Object.assign(
    new Error(`\x1B[1m\x1B[31mUnauthenticated request to AI Gateway.\x1B[0m

To authenticate, set the \x1B[33mAI_GATEWAY_API_KEY\x1B[0m environment variable with your API key.

Alternatively, you can use a provider module instead of the AI Gateway.

Learn more: \x1B[34m${moreInfoURL}\x1B[0m

`),
    { name: "GatewayAuthenticationError" }
  );
}
__name(wrapGatewayError, "wrapGatewayError");
function assembleOperationName({
  operationId,
  telemetry
}) {
  return {
    // standardized operation and resource name:
    "operation.name": `${operationId}${(telemetry == null ? void 0 : telemetry.functionId) != null ? ` ${telemetry.functionId}` : ""}`,
    "resource.name": telemetry == null ? void 0 : telemetry.functionId,
    // detailed, AI SDK specific data:
    "ai.operationId": operationId,
    "ai.telemetry.functionId": telemetry == null ? void 0 : telemetry.functionId
  };
}
__name(assembleOperationName, "assembleOperationName");
function getBaseTelemetryAttributes({
  model,
  settings,
  telemetry,
  headers
}) {
  var _a21;
  return {
    "ai.model.provider": model.provider,
    "ai.model.id": model.modelId,
    // settings:
    ...Object.entries(settings).reduce((attributes, [key, value]) => {
      if (key === "timeout") {
        const totalTimeoutMs = getTotalTimeoutMs(
          value
        );
        if (totalTimeoutMs != null) {
          attributes[`ai.settings.${key}`] = totalTimeoutMs;
        }
      } else {
        attributes[`ai.settings.${key}`] = value;
      }
      return attributes;
    }, {}),
    // add metadata as attributes:
    ...Object.entries((_a21 = telemetry == null ? void 0 : telemetry.metadata) != null ? _a21 : {}).reduce(
      (attributes, [key, value]) => {
        attributes[`ai.telemetry.metadata.${key}`] = value;
        return attributes;
      },
      {}
    ),
    // request headers
    ...Object.entries(headers != null ? headers : {}).reduce((attributes, [key, value]) => {
      if (value !== void 0) {
        attributes[`ai.request.headers.${key}`] = value;
      }
      return attributes;
    }, {})
  };
}
__name(getBaseTelemetryAttributes, "getBaseTelemetryAttributes");
var noopTracer = {
  startSpan() {
    return noopSpan;
  },
  startActiveSpan(name21, arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
      return arg1(noopSpan);
    }
    if (typeof arg2 === "function") {
      return arg2(noopSpan);
    }
    if (typeof arg3 === "function") {
      return arg3(noopSpan);
    }
  }
};
var noopSpan = {
  spanContext() {
    return noopSpanContext;
  },
  setAttribute() {
    return this;
  },
  setAttributes() {
    return this;
  },
  addEvent() {
    return this;
  },
  addLink() {
    return this;
  },
  addLinks() {
    return this;
  },
  setStatus() {
    return this;
  },
  updateName() {
    return this;
  },
  end() {
    return this;
  },
  isRecording() {
    return false;
  },
  recordException() {
    return this;
  }
};
var noopSpanContext = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function getTracer({
  isEnabled = false,
  tracer
} = {}) {
  if (!isEnabled) {
    return noopTracer;
  }
  if (tracer) {
    return tracer;
  }
  return trace.getTracer("ai");
}
__name(getTracer, "getTracer");
async function recordSpan({
  name: name21,
  tracer,
  attributes,
  fn,
  endWhenDone = true
}) {
  return tracer.startActiveSpan(
    name21,
    { attributes: await attributes },
    async (span) => {
      const ctx = context.active();
      try {
        const result = await context.with(ctx, () => fn(span));
        if (endWhenDone) {
          span.end();
        }
        return result;
      } catch (error40) {
        try {
          recordErrorOnSpan(span, error40);
        } finally {
          span.end();
        }
        throw error40;
      }
    }
  );
}
__name(recordSpan, "recordSpan");
function recordErrorOnSpan(span, error40) {
  if (error40 instanceof Error) {
    span.recordException({
      name: error40.name,
      message: error40.message,
      stack: error40.stack
    });
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error40.message
    });
  } else {
    span.setStatus({ code: SpanStatusCode.ERROR });
  }
}
__name(recordErrorOnSpan, "recordErrorOnSpan");
async function selectTelemetryAttributes({
  telemetry,
  attributes
}) {
  if ((telemetry == null ? void 0 : telemetry.isEnabled) !== true) {
    return {};
  }
  const resultAttributes = {};
  for (const [key, value] of Object.entries(attributes)) {
    if (value == null) {
      continue;
    }
    if (typeof value === "object" && "input" in value && typeof value.input === "function") {
      if ((telemetry == null ? void 0 : telemetry.recordInputs) === false) {
        continue;
      }
      const result = await value.input();
      if (result != null) {
        resultAttributes[key] = result;
      }
      continue;
    }
    if (typeof value === "object" && "output" in value && typeof value.output === "function") {
      if ((telemetry == null ? void 0 : telemetry.recordOutputs) === false) {
        continue;
      }
      const result = await value.output();
      if (result != null) {
        resultAttributes[key] = result;
      }
      continue;
    }
    resultAttributes[key] = value;
  }
  return resultAttributes;
}
__name(selectTelemetryAttributes, "selectTelemetryAttributes");
function stringifyForTelemetry(prompt) {
  return JSON.stringify(
    prompt.map((message) => ({
      ...message,
      content: typeof message.content === "string" ? message.content : message.content.map(
        (part) => part.type === "file" ? {
          ...part,
          data: part.data instanceof Uint8Array ? convertDataContentToBase64String(part.data) : part.data
        } : part
      )
    }))
  );
}
__name(stringifyForTelemetry, "stringifyForTelemetry");
function getGlobalTelemetryIntegrations() {
  var _a21;
  return (_a21 = globalThis.AI_SDK_TELEMETRY_INTEGRATIONS) != null ? _a21 : [];
}
__name(getGlobalTelemetryIntegrations, "getGlobalTelemetryIntegrations");
function getGlobalTelemetryIntegration() {
  const globalIntegrations = getGlobalTelemetryIntegrations();
  return (integrations) => {
    const localIntegrations = asArray(integrations);
    const allIntegrations = [...globalIntegrations, ...localIntegrations];
    function createTelemetryComposite(getListenerFromIntegration) {
      const listeners = allIntegrations.map(getListenerFromIntegration).filter(Boolean);
      return async (event) => {
        for (const listener of listeners) {
          try {
            await listener(event);
          } catch (_ignored) {
          }
        }
      };
    }
    __name(createTelemetryComposite, "createTelemetryComposite");
    return {
      onStart: createTelemetryComposite((integration) => integration.onStart),
      onStepStart: createTelemetryComposite(
        (integration) => integration.onStepStart
      ),
      onToolCallStart: createTelemetryComposite(
        (integration) => integration.onToolCallStart
      ),
      onToolCallFinish: createTelemetryComposite(
        (integration) => integration.onToolCallFinish
      ),
      onStepFinish: createTelemetryComposite(
        (integration) => integration.onStepFinish
      ),
      onFinish: createTelemetryComposite((integration) => integration.onFinish)
    };
  };
}
__name(getGlobalTelemetryIntegration, "getGlobalTelemetryIntegration");
function asLanguageModelUsage(usage) {
  return {
    inputTokens: usage.inputTokens.total,
    inputTokenDetails: {
      noCacheTokens: usage.inputTokens.noCache,
      cacheReadTokens: usage.inputTokens.cacheRead,
      cacheWriteTokens: usage.inputTokens.cacheWrite
    },
    outputTokens: usage.outputTokens.total,
    outputTokenDetails: {
      textTokens: usage.outputTokens.text,
      reasoningTokens: usage.outputTokens.reasoning
    },
    totalTokens: addTokenCounts(
      usage.inputTokens.total,
      usage.outputTokens.total
    ),
    raw: usage.raw,
    reasoningTokens: usage.outputTokens.reasoning,
    cachedInputTokens: usage.inputTokens.cacheRead
  };
}
__name(asLanguageModelUsage, "asLanguageModelUsage");
function addLanguageModelUsage(usage1, usage2) {
  var _a21, _b17, _c, _d, _e, _f, _g, _h, _i, _j;
  return {
    inputTokens: addTokenCounts(usage1.inputTokens, usage2.inputTokens),
    inputTokenDetails: {
      noCacheTokens: addTokenCounts(
        (_a21 = usage1.inputTokenDetails) == null ? void 0 : _a21.noCacheTokens,
        (_b17 = usage2.inputTokenDetails) == null ? void 0 : _b17.noCacheTokens
      ),
      cacheReadTokens: addTokenCounts(
        (_c = usage1.inputTokenDetails) == null ? void 0 : _c.cacheReadTokens,
        (_d = usage2.inputTokenDetails) == null ? void 0 : _d.cacheReadTokens
      ),
      cacheWriteTokens: addTokenCounts(
        (_e = usage1.inputTokenDetails) == null ? void 0 : _e.cacheWriteTokens,
        (_f = usage2.inputTokenDetails) == null ? void 0 : _f.cacheWriteTokens
      )
    },
    outputTokens: addTokenCounts(usage1.outputTokens, usage2.outputTokens),
    outputTokenDetails: {
      textTokens: addTokenCounts(
        (_g = usage1.outputTokenDetails) == null ? void 0 : _g.textTokens,
        (_h = usage2.outputTokenDetails) == null ? void 0 : _h.textTokens
      ),
      reasoningTokens: addTokenCounts(
        (_i = usage1.outputTokenDetails) == null ? void 0 : _i.reasoningTokens,
        (_j = usage2.outputTokenDetails) == null ? void 0 : _j.reasoningTokens
      )
    },
    totalTokens: addTokenCounts(usage1.totalTokens, usage2.totalTokens),
    reasoningTokens: addTokenCounts(
      usage1.reasoningTokens,
      usage2.reasoningTokens
    ),
    cachedInputTokens: addTokenCounts(
      usage1.cachedInputTokens,
      usage2.cachedInputTokens
    )
  };
}
__name(addLanguageModelUsage, "addLanguageModelUsage");
function addTokenCounts(tokenCount1, tokenCount2) {
  return tokenCount1 == null && tokenCount2 == null ? void 0 : (tokenCount1 != null ? tokenCount1 : 0) + (tokenCount2 != null ? tokenCount2 : 0);
}
__name(addTokenCounts, "addTokenCounts");
function mergeObjects(base, overrides) {
  if (base === void 0 && overrides === void 0) {
    return void 0;
  }
  if (base === void 0) {
    return overrides;
  }
  if (overrides === void 0) {
    return base;
  }
  const result = { ...base };
  for (const key in overrides) {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(overrides, key)) {
      const overridesValue = overrides[key];
      if (overridesValue === void 0)
        continue;
      const baseValue = key in base ? base[key] : void 0;
      const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
      const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
      if (isSourceObject && isTargetObject) {
        result[key] = mergeObjects(
          baseValue,
          overridesValue
        );
      } else {
        result[key] = overridesValue;
      }
    }
  }
  return result;
}
__name(mergeObjects, "mergeObjects");
function getRetryDelayInMs({
  error: error40,
  exponentialBackoffDelay
}) {
  const headers = error40.responseHeaders;
  if (!headers)
    return exponentialBackoffDelay;
  let ms;
  const retryAfterMs = headers["retry-after-ms"];
  if (retryAfterMs) {
    const timeoutMs = parseFloat(retryAfterMs);
    if (!Number.isNaN(timeoutMs)) {
      ms = timeoutMs;
    }
  }
  const retryAfter = headers["retry-after"];
  if (retryAfter && ms === void 0) {
    const timeoutSeconds = parseFloat(retryAfter);
    if (!Number.isNaN(timeoutSeconds)) {
      ms = timeoutSeconds * 1e3;
    } else {
      ms = Date.parse(retryAfter) - Date.now();
    }
  }
  if (ms != null && !Number.isNaN(ms) && 0 <= ms && (ms < 60 * 1e3 || ms < exponentialBackoffDelay)) {
    return ms;
  }
  return exponentialBackoffDelay;
}
__name(getRetryDelayInMs, "getRetryDelayInMs");
var retryWithExponentialBackoffRespectingRetryHeaders = /* @__PURE__ */ __name(({
  maxRetries = 2,
  initialDelayInMs = 2e3,
  backoffFactor = 2,
  abortSignal
} = {}) => async (f) => _retryWithExponentialBackoff(f, {
  maxRetries,
  delayInMs: initialDelayInMs,
  backoffFactor,
  abortSignal
}), "retryWithExponentialBackoffRespectingRetryHeaders");
async function _retryWithExponentialBackoff(f, {
  maxRetries,
  delayInMs,
  backoffFactor,
  abortSignal
}, errors = []) {
  try {
    return await f();
  } catch (error40) {
    if (isAbortError(error40)) {
      throw error40;
    }
    if (maxRetries === 0) {
      throw error40;
    }
    const errorMessage = getErrorMessage2(error40);
    const newErrors = [...errors, error40];
    const tryNumber = newErrors.length;
    if (tryNumber > maxRetries) {
      throw new RetryError({
        message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
        reason: "maxRetriesExceeded",
        errors: newErrors
      });
    }
    if (error40 instanceof Error && APICallError.isInstance(error40) && error40.isRetryable === true && tryNumber <= maxRetries) {
      await delay(
        getRetryDelayInMs({
          error: error40,
          exponentialBackoffDelay: delayInMs
        }),
        { abortSignal }
      );
      return _retryWithExponentialBackoff(
        f,
        {
          maxRetries,
          delayInMs: backoffFactor * delayInMs,
          backoffFactor,
          abortSignal
        },
        newErrors
      );
    }
    if (tryNumber === 1) {
      throw error40;
    }
    throw new RetryError({
      message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
      reason: "errorNotRetryable",
      errors: newErrors
    });
  }
}
__name(_retryWithExponentialBackoff, "_retryWithExponentialBackoff");
function prepareRetries({
  maxRetries,
  abortSignal
}) {
  if (maxRetries != null) {
    if (!Number.isInteger(maxRetries)) {
      throw new InvalidArgumentError2({
        parameter: "maxRetries",
        value: maxRetries,
        message: "maxRetries must be an integer"
      });
    }
    if (maxRetries < 0) {
      throw new InvalidArgumentError2({
        parameter: "maxRetries",
        value: maxRetries,
        message: "maxRetries must be >= 0"
      });
    }
  }
  const maxRetriesResult = maxRetries != null ? maxRetries : 2;
  return {
    maxRetries: maxRetriesResult,
    retry: retryWithExponentialBackoffRespectingRetryHeaders({
      maxRetries: maxRetriesResult,
      abortSignal
    })
  };
}
__name(prepareRetries, "prepareRetries");
function collectToolApprovals({
  messages
}) {
  const lastMessage = messages.at(-1);
  if ((lastMessage == null ? void 0 : lastMessage.role) != "tool") {
    return {
      approvedToolApprovals: [],
      deniedToolApprovals: []
    };
  }
  const toolCallsByToolCallId = {};
  for (const message of messages) {
    if (message.role === "assistant" && typeof message.content !== "string") {
      const content = message.content;
      for (const part of content) {
        if (part.type === "tool-call") {
          toolCallsByToolCallId[part.toolCallId] = part;
        }
      }
    }
  }
  const toolApprovalRequestsByApprovalId = {};
  for (const message of messages) {
    if (message.role === "assistant" && typeof message.content !== "string") {
      const content = message.content;
      for (const part of content) {
        if (part.type === "tool-approval-request") {
          toolApprovalRequestsByApprovalId[part.approvalId] = part;
        }
      }
    }
  }
  const toolResults = {};
  for (const part of lastMessage.content) {
    if (part.type === "tool-result") {
      toolResults[part.toolCallId] = part;
    }
  }
  const approvedToolApprovals = [];
  const deniedToolApprovals = [];
  const approvalResponses = lastMessage.content.filter(
    (part) => part.type === "tool-approval-response"
  );
  for (const approvalResponse of approvalResponses) {
    const approvalRequest = toolApprovalRequestsByApprovalId[approvalResponse.approvalId];
    if (approvalRequest == null) {
      throw new InvalidToolApprovalError({
        approvalId: approvalResponse.approvalId
      });
    }
    if (toolResults[approvalRequest.toolCallId] != null) {
      continue;
    }
    const toolCall = toolCallsByToolCallId[approvalRequest.toolCallId];
    if (toolCall == null) {
      throw new ToolCallNotFoundForApprovalError({
        toolCallId: approvalRequest.toolCallId,
        approvalId: approvalRequest.approvalId
      });
    }
    const approval = {
      approvalRequest,
      approvalResponse,
      toolCall
    };
    if (approvalResponse.approved) {
      approvedToolApprovals.push(approval);
    } else {
      deniedToolApprovals.push(approval);
    }
  }
  return { approvedToolApprovals, deniedToolApprovals };
}
__name(collectToolApprovals, "collectToolApprovals");
function now() {
  var _a21, _b17;
  return (_b17 = (_a21 = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : _a21.now()) != null ? _b17 : Date.now();
}
__name(now, "now");
async function executeToolCall({
  toolCall,
  tools,
  tracer,
  telemetry,
  messages,
  abortSignal,
  experimental_context,
  stepNumber,
  model,
  onPreliminaryToolResult,
  onToolCallStart,
  onToolCallFinish
}) {
  const { toolName, toolCallId, input } = toolCall;
  const tool2 = tools == null ? void 0 : tools[toolName];
  if ((tool2 == null ? void 0 : tool2.execute) == null) {
    return void 0;
  }
  const baseCallbackEvent = {
    stepNumber,
    model,
    toolCall,
    messages,
    abortSignal,
    functionId: telemetry == null ? void 0 : telemetry.functionId,
    metadata: telemetry == null ? void 0 : telemetry.metadata,
    experimental_context
  };
  return recordSpan({
    name: "ai.toolCall",
    attributes: selectTelemetryAttributes({
      telemetry,
      attributes: {
        ...assembleOperationName({
          operationId: "ai.toolCall",
          telemetry
        }),
        "ai.toolCall.name": toolName,
        "ai.toolCall.id": toolCallId,
        "ai.toolCall.args": {
          output: /* @__PURE__ */ __name(() => JSON.stringify(input), "output")
        }
      }
    }),
    tracer,
    fn: /* @__PURE__ */ __name(async (span) => {
      let output;
      await notify({ event: baseCallbackEvent, callbacks: onToolCallStart });
      const startTime = now();
      try {
        const stream = executeTool({
          execute: tool2.execute.bind(tool2),
          input,
          options: {
            toolCallId,
            messages,
            abortSignal,
            experimental_context
          }
        });
        for await (const part of stream) {
          if (part.type === "preliminary") {
            onPreliminaryToolResult == null ? void 0 : onPreliminaryToolResult({
              ...toolCall,
              type: "tool-result",
              output: part.output,
              preliminary: true
            });
          } else {
            output = part.output;
          }
        }
      } catch (error40) {
        const durationMs2 = now() - startTime;
        await notify({
          event: {
            ...baseCallbackEvent,
            success: false,
            error: error40,
            durationMs: durationMs2
          },
          callbacks: onToolCallFinish
        });
        recordErrorOnSpan(span, error40);
        return {
          type: "tool-error",
          toolCallId,
          toolName,
          input,
          error: error40,
          dynamic: tool2.type === "dynamic",
          ...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {}
        };
      }
      const durationMs = now() - startTime;
      await notify({
        event: {
          ...baseCallbackEvent,
          success: true,
          output,
          durationMs
        },
        callbacks: onToolCallFinish
      });
      try {
        span.setAttributes(
          await selectTelemetryAttributes({
            telemetry,
            attributes: {
              "ai.toolCall.result": {
                output: /* @__PURE__ */ __name(() => JSON.stringify(output), "output")
              }
            }
          })
        );
      } catch (ignored) {
      }
      return {
        type: "tool-result",
        toolCallId,
        toolName,
        input,
        output,
        dynamic: tool2.type === "dynamic",
        ...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {}
      };
    }, "fn")
  });
}
__name(executeToolCall, "executeToolCall");
function extractReasoningContent(content) {
  const parts = content.filter(
    (content2) => content2.type === "reasoning"
  );
  return parts.length === 0 ? void 0 : parts.map((content2) => content2.text).join("\n");
}
__name(extractReasoningContent, "extractReasoningContent");
function extractTextContent(content) {
  const parts = content.filter(
    (content2) => content2.type === "text"
  );
  if (parts.length === 0) {
    return void 0;
  }
  return parts.map((content2) => content2.text).join("");
}
__name(extractTextContent, "extractTextContent");
var DefaultGeneratedFile = class {
  static {
    __name(this, "DefaultGeneratedFile");
  }
  constructor({
    data,
    mediaType
  }) {
    const isUint8Array = data instanceof Uint8Array;
    this.base64Data = isUint8Array ? void 0 : data;
    this.uint8ArrayData = isUint8Array ? data : void 0;
    this.mediaType = mediaType;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    if (this.base64Data == null) {
      this.base64Data = convertUint8ArrayToBase64(this.uint8ArrayData);
    }
    return this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    if (this.uint8ArrayData == null) {
      this.uint8ArrayData = convertBase64ToUint8Array(this.base64Data);
    }
    return this.uint8ArrayData;
  }
};
async function isApprovalNeeded({
  tool: tool2,
  toolCall,
  messages,
  experimental_context
}) {
  if (tool2.needsApproval == null) {
    return false;
  }
  if (typeof tool2.needsApproval === "boolean") {
    return tool2.needsApproval;
  }
  return await tool2.needsApproval(toolCall.input, {
    toolCallId: toolCall.toolCallId,
    messages,
    experimental_context
  });
}
__name(isApprovalNeeded, "isApprovalNeeded");
var output_exports = {};
__export2(output_exports, {
  array: /* @__PURE__ */ __name(() => array2, "array"),
  choice: /* @__PURE__ */ __name(() => choice, "choice"),
  json: /* @__PURE__ */ __name(() => json2, "json"),
  object: /* @__PURE__ */ __name(() => object2, "object"),
  text: /* @__PURE__ */ __name(() => text, "text")
});
function fixJson(input) {
  const stack = ["ROOT"];
  let lastValidIndex = -1;
  let literalStart = null;
  function processValueStart(char, i, swapState) {
    {
      switch (char) {
        case '"': {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_STRING");
          break;
        }
        case "f":
        case "t":
        case "n": {
          lastValidIndex = i;
          literalStart = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_LITERAL");
          break;
        }
        case "-": {
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
        case "9": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "{": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_OBJECT_START");
          break;
        }
        case "[": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_ARRAY_START");
          break;
        }
      }
    }
  }
  __name(processValueStart, "processValueStart");
  function processAfterObjectValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  __name(processAfterObjectValue, "processAfterObjectValue");
  function processAfterArrayValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  __name(processAfterArrayValue, "processAfterArrayValue");
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const currentState = stack[stack.length - 1];
    switch (currentState) {
      case "ROOT":
        processValueStart(char, i, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (char) {
          case ":": {
            stack.pop();
            stack.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        processAfterObjectValue(char, i);
        break;
      }
      case "INSIDE_STRING": {
        switch (char) {
          case '"': {
            stack.pop();
            lastValidIndex = i;
            break;
          }
          case "\\": {
            stack.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default: {
            lastValidIndex = i;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (char) {
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (char) {
          case ",": {
            stack.pop();
            stack.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        stack.pop();
        lastValidIndex = i;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (char) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            lastValidIndex = i;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".": {
            break;
          }
          case ",": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "}": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "]": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            break;
          }
          default: {
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
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
  for (let i = stack.length - 1; i >= 0; i--) {
    const state = stack[i];
    switch (state) {
      case "INSIDE_STRING": {
        result += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        result += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        result += "]";
        break;
      }
      case "INSIDE_LITERAL": {
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
__name(fixJson, "fixJson");
async function parsePartialJson(jsonText) {
  if (jsonText === void 0) {
    return { value: void 0, state: "undefined-input" };
  }
  let result = await safeParseJSON({ text: jsonText });
  if (result.success) {
    return { value: result.value, state: "successful-parse" };
  }
  result = await safeParseJSON({ text: fixJson(jsonText) });
  if (result.success) {
    return { value: result.value, state: "repaired-parse" };
  }
  return { value: void 0, state: "failed-parse" };
}
__name(parsePartialJson, "parsePartialJson");
var text = /* @__PURE__ */ __name(() => ({
  name: "text",
  responseFormat: Promise.resolve({ type: "text" }),
  async parseCompleteOutput({ text: text2 }) {
    return text2;
  },
  async parsePartialOutput({ text: text2 }) {
    return { partial: text2 };
  },
  createElementStreamTransform() {
    return void 0;
  }
}), "text");
var object2 = /* @__PURE__ */ __name(({
  schema: inputSchema,
  name: name21,
  description
}) => {
  const schema = asSchema(inputSchema);
  return {
    name: "object",
    responseFormat: resolve(schema.jsonSchema).then((jsonSchema2) => ({
      type: "json",
      schema: jsonSchema2,
      ...name21 != null && { name: name21 },
      ...description != null && { description }
    })),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const validationResult = await safeValidateTypes({
        value: parseResult.value,
        schema
      });
      if (!validationResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: validationResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return validationResult.value;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          return {
            // Note: currently no validation of partial results:
            partial: result.value
          };
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
}, "object");
var array2 = /* @__PURE__ */ __name(({
  element: inputElementSchema,
  name: name21,
  description
}) => {
  const elementSchema = asSchema(inputElementSchema);
  return {
    name: "array",
    // JSON schema that describes an array of elements:
    responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema2) => {
      const { $schema, ...itemSchema } = jsonSchema2;
      return {
        type: "json",
        schema: {
          $schema: "http://json-schema.org/draft-07/schema#",
          type: "object",
          properties: {
            elements: { type: "array", items: itemSchema }
          },
          required: ["elements"],
          additionalProperties: false
        },
        ...name21 != null && { name: name21 },
        ...description != null && { description }
      };
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const outerValue = parseResult.value;
      if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: new TypeValidationError({
            value: outerValue,
            cause: "response must be an object with an elements array"
          }),
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      for (const element of outerValue.elements) {
        const validationResult = await safeValidateTypes({
          value: element,
          schema: elementSchema
        });
        if (!validationResult.success) {
          throw new NoObjectGeneratedError({
            message: "No object generated: response did not match schema.",
            cause: validationResult.error,
            text: text2,
            response: context2.response,
            usage: context2.usage,
            finishReason: context2.finishReason
          });
        }
      }
      return outerValue.elements;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          const outerValue = result.value;
          if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) {
            return void 0;
          }
          const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
          const parsedElements = [];
          for (const rawElement of rawElements) {
            const validationResult = await safeValidateTypes({
              value: rawElement,
              schema: elementSchema
            });
            if (validationResult.success) {
              parsedElements.push(validationResult.value);
            }
          }
          return { partial: parsedElements };
        }
      }
    },
    createElementStreamTransform() {
      let publishedElements = 0;
      return new TransformStream({
        transform({ partialOutput }, controller) {
          if (partialOutput != null) {
            for (; publishedElements < partialOutput.length; publishedElements++) {
              controller.enqueue(partialOutput[publishedElements]);
            }
          }
        }
      });
    }
  };
}, "array");
var choice = /* @__PURE__ */ __name(({
  options: choiceOptions,
  name: name21,
  description
}) => {
  return {
    name: "choice",
    // JSON schema that describes an enumeration:
    responseFormat: Promise.resolve({
      type: "json",
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
          result: { type: "string", enum: choiceOptions }
        },
        required: ["result"],
        additionalProperties: false
      },
      ...name21 != null && { name: name21 },
      ...description != null && { description }
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const outerValue = parseResult.value;
      if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: new TypeValidationError({
            value: outerValue,
            cause: "response must be an object that contains a choice value."
          }),
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return outerValue.result;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          const outerValue = result.value;
          if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") {
            return void 0;
          }
          const potentialMatches = choiceOptions.filter(
            (choiceOption) => choiceOption.startsWith(outerValue.result)
          );
          if (result.state === "successful-parse") {
            return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
          } else {
            return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
          }
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
}, "choice");
var json2 = /* @__PURE__ */ __name(({
  name: name21,
  description
} = {}) => {
  return {
    name: "json",
    responseFormat: Promise.resolve({
      type: "json",
      ...name21 != null && { name: name21 },
      ...description != null && { description }
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return parseResult.value;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          return result.value === void 0 ? void 0 : { partial: result.value };
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
}, "json");
async function parseToolCall({
  toolCall,
  tools,
  repairToolCall,
  system,
  messages
}) {
  var _a21;
  try {
    if (tools == null) {
      if (toolCall.providerExecuted && toolCall.dynamic) {
        return await parseProviderExecutedDynamicToolCall(toolCall);
      }
      throw new NoSuchToolError({ toolName: toolCall.toolName });
    }
    try {
      return await doParseToolCall({ toolCall, tools });
    } catch (error40) {
      if (repairToolCall == null || !(NoSuchToolError.isInstance(error40) || InvalidToolInputError.isInstance(error40))) {
        throw error40;
      }
      let repairedToolCall = null;
      try {
        repairedToolCall = await repairToolCall({
          toolCall,
          tools,
          inputSchema: /* @__PURE__ */ __name(async ({ toolName }) => {
            const { inputSchema } = tools[toolName];
            return await asSchema(inputSchema).jsonSchema;
          }, "inputSchema"),
          system,
          messages,
          error: error40
        });
      } catch (repairError) {
        throw new ToolCallRepairError({
          cause: repairError,
          originalError: error40
        });
      }
      if (repairedToolCall == null) {
        throw error40;
      }
      return await doParseToolCall({ toolCall: repairedToolCall, tools });
    }
  } catch (error40) {
    const parsedInput = await safeParseJSON({ text: toolCall.input });
    const input = parsedInput.success ? parsedInput.value : toolCall.input;
    return {
      type: "tool-call",
      toolCallId: toolCall.toolCallId,
      toolName: toolCall.toolName,
      input,
      dynamic: true,
      invalid: true,
      error: error40,
      title: (_a21 = tools == null ? void 0 : tools[toolCall.toolName]) == null ? void 0 : _a21.title,
      providerExecuted: toolCall.providerExecuted,
      providerMetadata: toolCall.providerMetadata
    };
  }
}
__name(parseToolCall, "parseToolCall");
async function parseProviderExecutedDynamicToolCall(toolCall) {
  const parseResult = toolCall.input.trim() === "" ? { success: true, value: {} } : await safeParseJSON({ text: toolCall.input });
  if (parseResult.success === false) {
    throw new InvalidToolInputError({
      toolName: toolCall.toolName,
      toolInput: toolCall.input,
      cause: parseResult.error
    });
  }
  return {
    type: "tool-call",
    toolCallId: toolCall.toolCallId,
    toolName: toolCall.toolName,
    input: parseResult.value,
    providerExecuted: true,
    dynamic: true,
    providerMetadata: toolCall.providerMetadata
  };
}
__name(parseProviderExecutedDynamicToolCall, "parseProviderExecutedDynamicToolCall");
async function doParseToolCall({
  toolCall,
  tools
}) {
  const toolName = toolCall.toolName;
  const tool2 = tools[toolName];
  if (tool2 == null) {
    if (toolCall.providerExecuted && toolCall.dynamic) {
      return await parseProviderExecutedDynamicToolCall(toolCall);
    }
    throw new NoSuchToolError({
      toolName: toolCall.toolName,
      availableTools: Object.keys(tools)
    });
  }
  const schema = asSchema(tool2.inputSchema);
  const parseResult = toolCall.input.trim() === "" ? await safeValidateTypes({ value: {}, schema }) : await safeParseJSON({ text: toolCall.input, schema });
  if (parseResult.success === false) {
    throw new InvalidToolInputError({
      toolName,
      toolInput: toolCall.input,
      cause: parseResult.error
    });
  }
  return tool2.type === "dynamic" ? {
    type: "tool-call",
    toolCallId: toolCall.toolCallId,
    toolName: toolCall.toolName,
    input: parseResult.value,
    providerExecuted: toolCall.providerExecuted,
    providerMetadata: toolCall.providerMetadata,
    dynamic: true,
    title: tool2.title
  } : {
    type: "tool-call",
    toolCallId: toolCall.toolCallId,
    toolName,
    input: parseResult.value,
    providerExecuted: toolCall.providerExecuted,
    providerMetadata: toolCall.providerMetadata,
    title: tool2.title
  };
}
__name(doParseToolCall, "doParseToolCall");
var DefaultStepResult = class {
  static {
    __name(this, "DefaultStepResult");
  }
  constructor({
    stepNumber,
    model,
    functionId,
    metadata,
    experimental_context,
    content,
    finishReason,
    rawFinishReason,
    usage,
    warnings,
    request,
    response,
    providerMetadata
  }) {
    this.stepNumber = stepNumber;
    this.model = model;
    this.functionId = functionId;
    this.metadata = metadata;
    this.experimental_context = experimental_context;
    this.content = content;
    this.finishReason = finishReason;
    this.rawFinishReason = rawFinishReason;
    this.usage = usage;
    this.warnings = warnings;
    this.request = request;
    this.response = response;
    this.providerMetadata = providerMetadata;
  }
  get text() {
    return this.content.filter((part) => part.type === "text").map((part) => part.text).join("");
  }
  get reasoning() {
    return this.content.filter((part) => part.type === "reasoning");
  }
  get reasoningText() {
    return this.reasoning.length === 0 ? void 0 : this.reasoning.map((part) => part.text).join("");
  }
  get files() {
    return this.content.filter((part) => part.type === "file").map((part) => part.file);
  }
  get sources() {
    return this.content.filter((part) => part.type === "source");
  }
  get toolCalls() {
    return this.content.filter((part) => part.type === "tool-call");
  }
  get staticToolCalls() {
    return this.toolCalls.filter(
      (toolCall) => toolCall.dynamic !== true
    );
  }
  get dynamicToolCalls() {
    return this.toolCalls.filter(
      (toolCall) => toolCall.dynamic === true
    );
  }
  get toolResults() {
    return this.content.filter((part) => part.type === "tool-result");
  }
  get staticToolResults() {
    return this.toolResults.filter(
      (toolResult) => toolResult.dynamic !== true
    );
  }
  get dynamicToolResults() {
    return this.toolResults.filter(
      (toolResult) => toolResult.dynamic === true
    );
  }
};
function stepCountIs(stepCount) {
  return ({ steps }) => steps.length === stepCount;
}
__name(stepCountIs, "stepCountIs");
async function isStopConditionMet({
  stopConditions,
  steps
}) {
  return (await Promise.all(stopConditions.map((condition) => condition({ steps })))).some((result) => result);
}
__name(isStopConditionMet, "isStopConditionMet");
async function toResponseMessages({
  content: inputContent,
  tools
}) {
  const responseMessages = [];
  const content = [];
  for (const part of inputContent) {
    if (part.type === "source") {
      continue;
    }
    if ((part.type === "tool-result" || part.type === "tool-error") && !part.providerExecuted) {
      continue;
    }
    if (part.type === "text" && part.text.length === 0) {
      continue;
    }
    switch (part.type) {
      case "text":
        content.push({
          type: "text",
          text: part.text,
          providerOptions: part.providerMetadata
        });
        break;
      case "reasoning":
        content.push({
          type: "reasoning",
          text: part.text,
          providerOptions: part.providerMetadata
        });
        break;
      case "file":
        content.push({
          type: "file",
          data: part.file.base64,
          mediaType: part.file.mediaType,
          providerOptions: part.providerMetadata
        });
        break;
      case "tool-call":
        content.push({
          type: "tool-call",
          toolCallId: part.toolCallId,
          toolName: part.toolName,
          input: part.invalid && typeof part.input !== "object" ? {} : part.input,
          providerExecuted: part.providerExecuted,
          providerOptions: part.providerMetadata
        });
        break;
      case "tool-result": {
        const output = await createToolModelOutput({
          toolCallId: part.toolCallId,
          input: part.input,
          tool: tools == null ? void 0 : tools[part.toolName],
          output: part.output,
          errorMode: "none"
        });
        content.push({
          type: "tool-result",
          toolCallId: part.toolCallId,
          toolName: part.toolName,
          output,
          providerOptions: part.providerMetadata
        });
        break;
      }
      case "tool-error": {
        const output = await createToolModelOutput({
          toolCallId: part.toolCallId,
          input: part.input,
          tool: tools == null ? void 0 : tools[part.toolName],
          output: part.error,
          errorMode: "json"
        });
        content.push({
          type: "tool-result",
          toolCallId: part.toolCallId,
          toolName: part.toolName,
          output,
          providerOptions: part.providerMetadata
        });
        break;
      }
      case "tool-approval-request":
        content.push({
          type: "tool-approval-request",
          approvalId: part.approvalId,
          toolCallId: part.toolCall.toolCallId
        });
        break;
    }
  }
  if (content.length > 0) {
    responseMessages.push({
      role: "assistant",
      content
    });
  }
  const toolResultContent = [];
  for (const part of inputContent) {
    if (!(part.type === "tool-result" || part.type === "tool-error") || part.providerExecuted) {
      continue;
    }
    const output = await createToolModelOutput({
      toolCallId: part.toolCallId,
      input: part.input,
      tool: tools == null ? void 0 : tools[part.toolName],
      output: part.type === "tool-result" ? part.output : part.error,
      errorMode: part.type === "tool-error" ? "text" : "none"
    });
    toolResultContent.push({
      type: "tool-result",
      toolCallId: part.toolCallId,
      toolName: part.toolName,
      output,
      ...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
    });
  }
  if (toolResultContent.length > 0) {
    responseMessages.push({
      role: "tool",
      content: toolResultContent
    });
  }
  return responseMessages;
}
__name(toResponseMessages, "toResponseMessages");
function mergeAbortSignals(...signals) {
  const validSignals = signals.filter(
    (signal) => signal != null
  );
  if (validSignals.length === 0) {
    return void 0;
  }
  if (validSignals.length === 1) {
    return validSignals[0];
  }
  const controller = new AbortController();
  for (const signal of validSignals) {
    if (signal.aborted) {
      controller.abort(signal.reason);
      return controller.signal;
    }
    signal.addEventListener(
      "abort",
      () => {
        controller.abort(signal.reason);
      },
      { once: true }
    );
  }
  return controller.signal;
}
__name(mergeAbortSignals, "mergeAbortSignals");
var originalGenerateId = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
async function generateText({
  model: modelArg,
  tools,
  toolChoice,
  system,
  prompt,
  messages,
  allowSystemInMessages,
  maxRetries: maxRetriesArg,
  abortSignal,
  timeout,
  headers,
  stopWhen = stepCountIs(1),
  experimental_output,
  output = experimental_output,
  experimental_telemetry: telemetry,
  providerOptions,
  experimental_activeTools,
  activeTools = experimental_activeTools,
  experimental_prepareStep,
  prepareStep = experimental_prepareStep,
  experimental_repairToolCall: repairToolCall,
  experimental_download: download2,
  experimental_context,
  experimental_include: include,
  _internal: { generateId: generateId2 = originalGenerateId } = {},
  experimental_onStart: onStart,
  experimental_onStepStart: onStepStart,
  experimental_onToolCallStart: onToolCallStart,
  experimental_onToolCallFinish: onToolCallFinish,
  onStepFinish,
  onFinish,
  ...settings
}) {
  const model = resolveLanguageModel(modelArg);
  const createGlobalTelemetry = getGlobalTelemetryIntegration();
  const stopConditions = asArray(stopWhen);
  const totalTimeoutMs = getTotalTimeoutMs(timeout);
  const stepTimeoutMs = getStepTimeoutMs(timeout);
  const stepAbortController = stepTimeoutMs != null ? new AbortController() : void 0;
  const mergedAbortSignal = mergeAbortSignals(
    abortSignal,
    totalTimeoutMs != null ? AbortSignal.timeout(totalTimeoutMs) : void 0,
    stepAbortController == null ? void 0 : stepAbortController.signal
  );
  const { maxRetries, retry } = prepareRetries({
    maxRetries: maxRetriesArg,
    abortSignal: mergedAbortSignal
  });
  const callSettings = prepareCallSettings(settings);
  const headersWithUserAgent = withUserAgentSuffix(
    headers != null ? headers : {},
    `ai/${VERSION4}`
  );
  const baseTelemetryAttributes = getBaseTelemetryAttributes({
    model,
    telemetry,
    headers: headersWithUserAgent,
    settings: { ...callSettings, maxRetries }
  });
  const modelInfo = { provider: model.provider, modelId: model.modelId };
  const initialPrompt = await standardizePrompt({
    system,
    prompt,
    messages,
    allowSystemInMessages
  });
  const globalTelemetry = createGlobalTelemetry(telemetry == null ? void 0 : telemetry.integrations);
  await notify({
    event: {
      model: modelInfo,
      system,
      prompt,
      messages,
      tools,
      toolChoice,
      activeTools,
      maxOutputTokens: callSettings.maxOutputTokens,
      temperature: callSettings.temperature,
      topP: callSettings.topP,
      topK: callSettings.topK,
      presencePenalty: callSettings.presencePenalty,
      frequencyPenalty: callSettings.frequencyPenalty,
      stopSequences: callSettings.stopSequences,
      seed: callSettings.seed,
      maxRetries,
      timeout,
      headers,
      providerOptions,
      stopWhen,
      output,
      abortSignal,
      include,
      functionId: telemetry == null ? void 0 : telemetry.functionId,
      metadata: telemetry == null ? void 0 : telemetry.metadata,
      experimental_context
    },
    callbacks: [
      onStart,
      globalTelemetry.onStart
    ]
  });
  const tracer = getTracer(telemetry);
  try {
    return await recordSpan({
      name: "ai.generateText",
      attributes: selectTelemetryAttributes({
        telemetry,
        attributes: {
          ...assembleOperationName({
            operationId: "ai.generateText",
            telemetry
          }),
          ...baseTelemetryAttributes,
          // model:
          "ai.model.provider": model.provider,
          "ai.model.id": model.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: /* @__PURE__ */ __name(() => JSON.stringify({ system, prompt, messages }), "input")
          }
        }
      }),
      tracer,
      fn: /* @__PURE__ */ __name(async (span) => {
        var _a21, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
        const initialMessages = initialPrompt.messages;
        const responseMessages = [];
        const { approvedToolApprovals, deniedToolApprovals } = collectToolApprovals({ messages: initialMessages });
        const localApprovedToolApprovals = approvedToolApprovals.filter(
          (toolApproval) => !toolApproval.toolCall.providerExecuted
        );
        if (deniedToolApprovals.length > 0 || localApprovedToolApprovals.length > 0) {
          const toolOutputs = await executeTools({
            toolCalls: localApprovedToolApprovals.map(
              (toolApproval) => toolApproval.toolCall
            ),
            tools,
            tracer,
            telemetry,
            messages: initialMessages,
            abortSignal: mergedAbortSignal,
            experimental_context,
            stepNumber: 0,
            model: modelInfo,
            onToolCallStart: [
              onToolCallStart,
              globalTelemetry.onToolCallStart
            ],
            onToolCallFinish: [
              onToolCallFinish,
              globalTelemetry.onToolCallFinish
            ]
          });
          const toolContent = [];
          for (const output2 of toolOutputs) {
            const modelOutput = await createToolModelOutput({
              toolCallId: output2.toolCallId,
              input: output2.input,
              tool: tools == null ? void 0 : tools[output2.toolName],
              output: output2.type === "tool-result" ? output2.output : output2.error,
              errorMode: output2.type === "tool-error" ? "text" : "none"
            });
            toolContent.push({
              type: "tool-result",
              toolCallId: output2.toolCallId,
              toolName: output2.toolName,
              output: modelOutput
            });
          }
          for (const toolApproval of deniedToolApprovals) {
            toolContent.push({
              type: "tool-result",
              toolCallId: toolApproval.toolCall.toolCallId,
              toolName: toolApproval.toolCall.toolName,
              output: {
                type: "execution-denied",
                reason: toolApproval.approvalResponse.reason,
                // For provider-executed tools, include approvalId so provider can correlate
                ...toolApproval.toolCall.providerExecuted && {
                  providerOptions: {
                    openai: {
                      approvalId: toolApproval.approvalResponse.approvalId
                    }
                  }
                }
              }
            });
          }
          responseMessages.push({
            role: "tool",
            content: toolContent
          });
        }
        const callSettings2 = prepareCallSettings(settings);
        let currentModelResponse;
        let clientToolCalls = [];
        let clientToolOutputs = [];
        const steps = [];
        const pendingDeferredToolCalls = /* @__PURE__ */ new Map();
        do {
          const stepTimeoutId = stepTimeoutMs != null ? setTimeout(() => stepAbortController.abort(), stepTimeoutMs) : void 0;
          try {
            const stepInputMessages = [...initialMessages, ...responseMessages];
            const prepareStepResult = await (prepareStep == null ? void 0 : prepareStep({
              model,
              steps,
              stepNumber: steps.length,
              messages: stepInputMessages,
              experimental_context
            }));
            const stepModel = resolveLanguageModel(
              (_a21 = prepareStepResult == null ? void 0 : prepareStepResult.model) != null ? _a21 : model
            );
            const stepModelInfo = {
              provider: stepModel.provider,
              modelId: stepModel.modelId
            };
            const promptMessages = await convertToLanguageModelPrompt({
              prompt: {
                system: (_b17 = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _b17 : initialPrompt.system,
                messages: (_c = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _c : stepInputMessages
              },
              supportedUrls: await stepModel.supportedUrls,
              download: download2
            });
            experimental_context = (_d = prepareStepResult == null ? void 0 : prepareStepResult.experimental_context) != null ? _d : experimental_context;
            const stepActiveTools = (_e = prepareStepResult == null ? void 0 : prepareStepResult.activeTools) != null ? _e : activeTools;
            const { toolChoice: stepToolChoice, tools: stepTools } = await prepareToolsAndToolChoice({
              tools,
              toolChoice: (_f = prepareStepResult == null ? void 0 : prepareStepResult.toolChoice) != null ? _f : toolChoice,
              activeTools: stepActiveTools
            });
            const stepMessages = (_g = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _g : stepInputMessages;
            const stepSystem = (_h = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _h : initialPrompt.system;
            const stepProviderOptions = mergeObjects(
              providerOptions,
              prepareStepResult == null ? void 0 : prepareStepResult.providerOptions
            );
            await notify({
              event: {
                stepNumber: steps.length,
                model: stepModelInfo,
                system: stepSystem,
                messages: stepMessages,
                tools,
                toolChoice: stepToolChoice,
                activeTools: stepActiveTools,
                steps: [...steps],
                providerOptions: stepProviderOptions,
                timeout,
                headers,
                stopWhen,
                output,
                abortSignal,
                include,
                functionId: telemetry == null ? void 0 : telemetry.functionId,
                metadata: telemetry == null ? void 0 : telemetry.metadata,
                experimental_context
              },
              callbacks: [
                onStepStart,
                globalTelemetry.onStepStart
              ]
            });
            currentModelResponse = await retry(
              () => {
                var _a222;
                return recordSpan({
                  name: "ai.generateText.doGenerate",
                  attributes: selectTelemetryAttributes({
                    telemetry,
                    attributes: {
                      ...assembleOperationName({
                        operationId: "ai.generateText.doGenerate",
                        telemetry
                      }),
                      ...baseTelemetryAttributes,
                      // model:
                      "ai.model.provider": stepModel.provider,
                      "ai.model.id": stepModel.modelId,
                      // prompt:
                      "ai.prompt.messages": {
                        input: /* @__PURE__ */ __name(() => stringifyForTelemetry(promptMessages), "input")
                      },
                      "ai.prompt.tools": {
                        // convert the language model level tools:
                        input: /* @__PURE__ */ __name(() => stepTools == null ? void 0 : stepTools.map((tool2) => JSON.stringify(tool2)), "input")
                      },
                      "ai.prompt.toolChoice": {
                        input: /* @__PURE__ */ __name(() => stepToolChoice != null ? JSON.stringify(stepToolChoice) : void 0, "input")
                      },
                      // standardized gen-ai llm span attributes:
                      "gen_ai.system": stepModel.provider,
                      "gen_ai.request.model": stepModel.modelId,
                      "gen_ai.request.frequency_penalty": settings.frequencyPenalty,
                      "gen_ai.request.max_tokens": settings.maxOutputTokens,
                      "gen_ai.request.presence_penalty": settings.presencePenalty,
                      "gen_ai.request.stop_sequences": settings.stopSequences,
                      "gen_ai.request.temperature": (_a222 = settings.temperature) != null ? _a222 : void 0,
                      "gen_ai.request.top_k": settings.topK,
                      "gen_ai.request.top_p": settings.topP
                    }
                  }),
                  tracer,
                  fn: /* @__PURE__ */ __name(async (span2) => {
                    var _a232, _b23, _c2, _d2, _e2, _f2, _g2, _h2;
                    const result = await stepModel.doGenerate({
                      ...callSettings2,
                      tools: stepTools,
                      toolChoice: stepToolChoice,
                      responseFormat: await (output == null ? void 0 : output.responseFormat),
                      prompt: promptMessages,
                      providerOptions: stepProviderOptions,
                      abortSignal: mergedAbortSignal,
                      headers: headersWithUserAgent
                    });
                    const responseData = {
                      id: (_b23 = (_a232 = result.response) == null ? void 0 : _a232.id) != null ? _b23 : generateId2(),
                      timestamp: (_d2 = (_c2 = result.response) == null ? void 0 : _c2.timestamp) != null ? _d2 : /* @__PURE__ */ new Date(),
                      modelId: (_f2 = (_e2 = result.response) == null ? void 0 : _e2.modelId) != null ? _f2 : stepModel.modelId,
                      headers: (_g2 = result.response) == null ? void 0 : _g2.headers,
                      body: (_h2 = result.response) == null ? void 0 : _h2.body
                    };
                    const usage = asLanguageModelUsage(result.usage);
                    span2.setAttributes(
                      await selectTelemetryAttributes({
                        telemetry,
                        attributes: {
                          "ai.response.finishReason": result.finishReason.unified,
                          "ai.response.text": {
                            output: /* @__PURE__ */ __name(() => extractTextContent(result.content), "output")
                          },
                          "ai.response.reasoning": {
                            output: /* @__PURE__ */ __name(() => extractReasoningContent(result.content), "output")
                          },
                          "ai.response.toolCalls": {
                            output: /* @__PURE__ */ __name(() => {
                              const toolCalls = asToolCalls(result.content);
                              return toolCalls == null ? void 0 : JSON.stringify(toolCalls);
                            }, "output")
                          },
                          "ai.response.id": responseData.id,
                          "ai.response.model": responseData.modelId,
                          "ai.response.timestamp": responseData.timestamp.toISOString(),
                          "ai.response.providerMetadata": JSON.stringify(
                            result.providerMetadata
                          ),
                          "ai.usage.inputTokens": result.usage.inputTokens.total,
                          "ai.usage.inputTokenDetails.noCacheTokens": result.usage.inputTokens.noCache,
                          "ai.usage.inputTokenDetails.cacheReadTokens": result.usage.inputTokens.cacheRead,
                          "ai.usage.inputTokenDetails.cacheWriteTokens": result.usage.inputTokens.cacheWrite,
                          "ai.usage.outputTokens": result.usage.outputTokens.total,
                          "ai.usage.outputTokenDetails.textTokens": result.usage.outputTokens.text,
                          "ai.usage.outputTokenDetails.reasoningTokens": result.usage.outputTokens.reasoning,
                          "ai.usage.totalTokens": usage.totalTokens,
                          "ai.usage.reasoningTokens": result.usage.outputTokens.reasoning,
                          "ai.usage.cachedInputTokens": result.usage.inputTokens.cacheRead,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [
                            result.finishReason.unified
                          ],
                          "gen_ai.response.id": responseData.id,
                          "gen_ai.response.model": responseData.modelId,
                          "gen_ai.usage.input_tokens": result.usage.inputTokens.total,
                          "gen_ai.usage.output_tokens": result.usage.outputTokens.total
                        }
                      })
                    );
                    return { ...result, response: responseData };
                  }, "fn")
                });
              }
            );
            const stepToolCalls = await Promise.all(
              currentModelResponse.content.filter(
                (part) => part.type === "tool-call"
              ).map(
                (toolCall) => parseToolCall({
                  toolCall,
                  tools,
                  repairToolCall,
                  system,
                  messages: stepInputMessages
                })
              )
            );
            const toolApprovalRequests = {};
            for (const toolCall of stepToolCalls) {
              if (toolCall.invalid) {
                continue;
              }
              const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
              if (tool2 == null) {
                continue;
              }
              if ((tool2 == null ? void 0 : tool2.onInputAvailable) != null) {
                await tool2.onInputAvailable({
                  input: toolCall.input,
                  toolCallId: toolCall.toolCallId,
                  messages: stepInputMessages,
                  abortSignal: mergedAbortSignal,
                  experimental_context
                });
              }
              if (await isApprovalNeeded({
                tool: tool2,
                toolCall,
                messages: stepInputMessages,
                experimental_context
              })) {
                toolApprovalRequests[toolCall.toolCallId] = {
                  type: "tool-approval-request",
                  approvalId: generateId2(),
                  toolCall
                };
              }
            }
            const invalidToolCalls = stepToolCalls.filter(
              (toolCall) => toolCall.invalid && toolCall.dynamic
            );
            clientToolOutputs = [];
            for (const toolCall of invalidToolCalls) {
              clientToolOutputs.push({
                type: "tool-error",
                toolCallId: toolCall.toolCallId,
                toolName: toolCall.toolName,
                input: toolCall.input,
                error: getErrorMessage2(toolCall.error),
                dynamic: true
              });
            }
            clientToolCalls = stepToolCalls.filter(
              (toolCall) => !toolCall.providerExecuted
            );
            if (tools != null) {
              clientToolOutputs.push(
                ...await executeTools({
                  toolCalls: clientToolCalls.filter(
                    (toolCall) => !toolCall.invalid && toolApprovalRequests[toolCall.toolCallId] == null
                  ),
                  tools,
                  tracer,
                  telemetry,
                  messages: stepInputMessages,
                  abortSignal: mergedAbortSignal,
                  experimental_context,
                  stepNumber: steps.length,
                  model: stepModelInfo,
                  onToolCallStart: [
                    onToolCallStart,
                    globalTelemetry.onToolCallStart
                  ],
                  onToolCallFinish: [
                    onToolCallFinish,
                    globalTelemetry.onToolCallFinish
                  ]
                })
              );
            }
            for (const toolCall of stepToolCalls) {
              if (!toolCall.providerExecuted)
                continue;
              const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
              if ((tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults) {
                const hasResultInResponse = currentModelResponse.content.some(
                  (part) => part.type === "tool-result" && part.toolCallId === toolCall.toolCallId
                );
                if (!hasResultInResponse) {
                  pendingDeferredToolCalls.set(toolCall.toolCallId, {
                    toolName: toolCall.toolName
                  });
                }
              }
            }
            for (const part of currentModelResponse.content) {
              if (part.type === "tool-result") {
                pendingDeferredToolCalls.delete(part.toolCallId);
              }
            }
            const stepContent = asContent({
              content: currentModelResponse.content,
              toolCalls: stepToolCalls,
              toolOutputs: clientToolOutputs,
              toolApprovalRequests: Object.values(toolApprovalRequests),
              tools
            });
            responseMessages.push(
              ...await toResponseMessages({
                content: stepContent,
                tools
              })
            );
            const stepRequest = ((_i = include == null ? void 0 : include.requestBody) != null ? _i : true) ? (_j = currentModelResponse.request) != null ? _j : {} : { ...currentModelResponse.request, body: void 0 };
            const stepResponse = {
              ...currentModelResponse.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(responseMessages),
              // Conditionally include response body:
              body: ((_k = include == null ? void 0 : include.responseBody) != null ? _k : true) ? (_l = currentModelResponse.response) == null ? void 0 : _l.body : void 0
            };
            const stepNumber = steps.length;
            const currentStepResult = new DefaultStepResult({
              stepNumber,
              model: stepModelInfo,
              functionId: telemetry == null ? void 0 : telemetry.functionId,
              metadata: telemetry == null ? void 0 : telemetry.metadata,
              experimental_context,
              content: stepContent,
              finishReason: currentModelResponse.finishReason.unified,
              rawFinishReason: currentModelResponse.finishReason.raw,
              usage: asLanguageModelUsage(currentModelResponse.usage),
              warnings: currentModelResponse.warnings,
              providerMetadata: currentModelResponse.providerMetadata,
              request: stepRequest,
              response: stepResponse
            });
            logWarnings({
              warnings: (_m = currentModelResponse.warnings) != null ? _m : [],
              provider: stepModelInfo.provider,
              model: stepModelInfo.modelId
            });
            steps.push(currentStepResult);
            await notify({
              event: currentStepResult,
              callbacks: [onStepFinish, globalTelemetry.onStepFinish]
            });
          } finally {
            if (stepTimeoutId != null) {
              clearTimeout(stepTimeoutId);
            }
          }
        } while (
          // Continue if:
          // 1. There are client tool calls that have all been executed, OR
          // 2. There are pending deferred results from provider-executed tools
          (clientToolCalls.length > 0 && clientToolOutputs.length === clientToolCalls.length || pendingDeferredToolCalls.size > 0) && // continue until a stop condition is met:
          !await isStopConditionMet({ stopConditions, steps })
        );
        span.setAttributes(
          await selectTelemetryAttributes({
            telemetry,
            attributes: {
              "ai.response.finishReason": currentModelResponse.finishReason.unified,
              "ai.response.text": {
                output: /* @__PURE__ */ __name(() => extractTextContent(currentModelResponse.content), "output")
              },
              "ai.response.reasoning": {
                output: /* @__PURE__ */ __name(() => extractReasoningContent(currentModelResponse.content), "output")
              },
              "ai.response.toolCalls": {
                output: /* @__PURE__ */ __name(() => {
                  const toolCalls = asToolCalls(currentModelResponse.content);
                  return toolCalls == null ? void 0 : JSON.stringify(toolCalls);
                }, "output")
              },
              "ai.response.providerMetadata": JSON.stringify(
                currentModelResponse.providerMetadata
              )
            }
          })
        );
        const lastStep = steps[steps.length - 1];
        const totalUsage = steps.reduce(
          (totalUsage2, step) => {
            return addLanguageModelUsage(totalUsage2, step.usage);
          },
          {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0,
            reasoningTokens: void 0,
            cachedInputTokens: void 0
          }
        );
        span.setAttributes(
          await selectTelemetryAttributes({
            telemetry,
            attributes: {
              "ai.usage.inputTokens": totalUsage.inputTokens,
              "ai.usage.inputTokenDetails.noCacheTokens": (_n = totalUsage.inputTokenDetails) == null ? void 0 : _n.noCacheTokens,
              "ai.usage.inputTokenDetails.cacheReadTokens": (_o = totalUsage.inputTokenDetails) == null ? void 0 : _o.cacheReadTokens,
              "ai.usage.inputTokenDetails.cacheWriteTokens": (_p = totalUsage.inputTokenDetails) == null ? void 0 : _p.cacheWriteTokens,
              "ai.usage.outputTokens": totalUsage.outputTokens,
              "ai.usage.outputTokenDetails.textTokens": (_q = totalUsage.outputTokenDetails) == null ? void 0 : _q.textTokens,
              "ai.usage.outputTokenDetails.reasoningTokens": (_r = totalUsage.outputTokenDetails) == null ? void 0 : _r.reasoningTokens,
              "ai.usage.totalTokens": totalUsage.totalTokens,
              "ai.usage.reasoningTokens": (_s = totalUsage.outputTokenDetails) == null ? void 0 : _s.reasoningTokens,
              "ai.usage.cachedInputTokens": (_t = totalUsage.inputTokenDetails) == null ? void 0 : _t.cacheReadTokens
            }
          })
        );
        await notify({
          event: {
            stepNumber: lastStep.stepNumber,
            model: lastStep.model,
            functionId: lastStep.functionId,
            metadata: lastStep.metadata,
            experimental_context: lastStep.experimental_context,
            finishReason: lastStep.finishReason,
            rawFinishReason: lastStep.rawFinishReason,
            usage: lastStep.usage,
            content: lastStep.content,
            text: lastStep.text,
            reasoningText: lastStep.reasoningText,
            reasoning: lastStep.reasoning,
            files: lastStep.files,
            sources: lastStep.sources,
            toolCalls: lastStep.toolCalls,
            staticToolCalls: lastStep.staticToolCalls,
            dynamicToolCalls: lastStep.dynamicToolCalls,
            toolResults: lastStep.toolResults,
            staticToolResults: lastStep.staticToolResults,
            dynamicToolResults: lastStep.dynamicToolResults,
            request: lastStep.request,
            response: lastStep.response,
            warnings: lastStep.warnings,
            providerMetadata: lastStep.providerMetadata,
            steps,
            totalUsage
          },
          callbacks: [
            onFinish,
            globalTelemetry.onFinish
          ]
        });
        let resolvedOutput;
        if (lastStep.finishReason === "stop") {
          const outputSpecification = output != null ? output : text();
          resolvedOutput = await outputSpecification.parseCompleteOutput(
            { text: lastStep.text },
            {
              response: lastStep.response,
              usage: lastStep.usage,
              finishReason: lastStep.finishReason
            }
          );
        }
        return new DefaultGenerateTextResult({
          steps,
          totalUsage,
          output: resolvedOutput
        });
      }, "fn")
    });
  } catch (error40) {
    throw wrapGatewayError(error40);
  }
}
__name(generateText, "generateText");
async function executeTools({
  toolCalls,
  tools,
  tracer,
  telemetry,
  messages,
  abortSignal,
  experimental_context,
  stepNumber,
  model,
  onToolCallStart,
  onToolCallFinish
}) {
  const toolOutputs = await Promise.all(
    toolCalls.map(
      async (toolCall) => executeToolCall({
        toolCall,
        tools,
        tracer,
        telemetry,
        messages,
        abortSignal,
        experimental_context,
        stepNumber,
        model,
        onToolCallStart,
        onToolCallFinish
      })
    )
  );
  return toolOutputs.filter(
    (output) => output != null
  );
}
__name(executeTools, "executeTools");
var DefaultGenerateTextResult = class {
  static {
    __name(this, "DefaultGenerateTextResult");
  }
  constructor(options) {
    this.steps = options.steps;
    this._output = options.output;
    this.totalUsage = options.totalUsage;
  }
  get finalStep() {
    return this.steps[this.steps.length - 1];
  }
  get content() {
    return this.finalStep.content;
  }
  get text() {
    return this.finalStep.text;
  }
  get files() {
    return this.finalStep.files;
  }
  get reasoningText() {
    return this.finalStep.reasoningText;
  }
  get reasoning() {
    return this.finalStep.reasoning;
  }
  get toolCalls() {
    return this.finalStep.toolCalls;
  }
  get staticToolCalls() {
    return this.finalStep.staticToolCalls;
  }
  get dynamicToolCalls() {
    return this.finalStep.dynamicToolCalls;
  }
  get toolResults() {
    return this.finalStep.toolResults;
  }
  get staticToolResults() {
    return this.finalStep.staticToolResults;
  }
  get dynamicToolResults() {
    return this.finalStep.dynamicToolResults;
  }
  get sources() {
    return this.finalStep.sources;
  }
  get finishReason() {
    return this.finalStep.finishReason;
  }
  get rawFinishReason() {
    return this.finalStep.rawFinishReason;
  }
  get warnings() {
    return this.finalStep.warnings;
  }
  get providerMetadata() {
    return this.finalStep.providerMetadata;
  }
  get response() {
    return this.finalStep.response;
  }
  get request() {
    return this.finalStep.request;
  }
  get usage() {
    return this.finalStep.usage;
  }
  get experimental_output() {
    return this.output;
  }
  get output() {
    if (this._output == null) {
      throw new NoOutputGeneratedError();
    }
    return this._output;
  }
};
function asToolCalls(content) {
  const parts = content.filter(
    (part) => part.type === "tool-call"
  );
  if (parts.length === 0) {
    return void 0;
  }
  return parts.map((toolCall) => ({
    toolCallId: toolCall.toolCallId,
    toolName: toolCall.toolName,
    input: toolCall.input
  }));
}
__name(asToolCalls, "asToolCalls");
function asContent({
  content,
  toolCalls,
  toolOutputs,
  toolApprovalRequests,
  tools
}) {
  const contentParts = [];
  for (const part of content) {
    switch (part.type) {
      case "text":
      case "reasoning":
      case "source":
        contentParts.push(part);
        break;
      case "file": {
        contentParts.push({
          type: "file",
          file: new DefaultGeneratedFile(part),
          ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
        });
        break;
      }
      case "tool-call": {
        contentParts.push(
          toolCalls.find((toolCall) => toolCall.toolCallId === part.toolCallId)
        );
        break;
      }
      case "tool-result": {
        const toolCall = toolCalls.find(
          (toolCall2) => toolCall2.toolCallId === part.toolCallId
        );
        if (toolCall == null) {
          const tool2 = tools == null ? void 0 : tools[part.toolName];
          const supportsDeferredResults = (tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults;
          if (!supportsDeferredResults) {
            throw new Error(`Tool call ${part.toolCallId} not found.`);
          }
          if (part.isError) {
            contentParts.push({
              type: "tool-error",
              toolCallId: part.toolCallId,
              toolName: part.toolName,
              input: void 0,
              error: part.result,
              providerExecuted: true,
              dynamic: part.dynamic,
              ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
            });
          } else {
            contentParts.push({
              type: "tool-result",
              toolCallId: part.toolCallId,
              toolName: part.toolName,
              input: void 0,
              output: part.result,
              providerExecuted: true,
              dynamic: part.dynamic,
              ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
            });
          }
          break;
        }
        if (part.isError) {
          contentParts.push({
            type: "tool-error",
            toolCallId: part.toolCallId,
            toolName: part.toolName,
            input: toolCall.input,
            error: part.result,
            providerExecuted: true,
            dynamic: toolCall.dynamic,
            ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
          });
        } else {
          contentParts.push({
            type: "tool-result",
            toolCallId: part.toolCallId,
            toolName: part.toolName,
            input: toolCall.input,
            output: part.result,
            providerExecuted: true,
            dynamic: toolCall.dynamic,
            ...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
          });
        }
        break;
      }
      case "tool-approval-request": {
        const toolCall = toolCalls.find(
          (toolCall2) => toolCall2.toolCallId === part.toolCallId
        );
        if (toolCall == null) {
          throw new ToolCallNotFoundForApprovalError({
            toolCallId: part.toolCallId,
            approvalId: part.approvalId
          });
        }
        contentParts.push({
          type: "tool-approval-request",
          approvalId: part.approvalId,
          toolCall
        });
        break;
      }
    }
  }
  return [...contentParts, ...toolOutputs, ...toolApprovalRequests];
}
__name(asContent, "asContent");
var JsonToSseTransformStream = class extends TransformStream {
  static {
    __name(this, "JsonToSseTransformStream");
  }
  constructor() {
    super({
      transform(part, controller) {
        controller.enqueue(`data: ${JSON.stringify(part)}

`);
      },
      flush(controller) {
        controller.enqueue("data: [DONE]\n\n");
      }
    });
  }
};
var uiMessageChunkSchema = lazySchema(
  () => zodSchema(
    external_exports2.union([
      external_exports2.strictObject({
        type: external_exports2.literal("text-start"),
        id: external_exports2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("text-delta"),
        id: external_exports2.string(),
        delta: external_exports2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("text-end"),
        id: external_exports2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("error"),
        errorText: external_exports2.string()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("tool-input-start"),
        toolCallId: external_exports2.string(),
        toolName: external_exports2.string(),
        providerExecuted: external_exports2.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        dynamic: external_exports2.boolean().optional(),
        title: external_exports2.string().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("tool-input-delta"),
        toolCallId: external_exports2.string(),
        inputTextDelta: external_exports2.string()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("tool-input-available"),
        toolCallId: external_exports2.string(),
        toolName: external_exports2.string(),
        input: external_exports2.unknown(),
        providerExecuted: external_exports2.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        dynamic: external_exports2.boolean().optional(),
        title: external_exports2.string().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("tool-input-error"),
        toolCallId: external_exports2.string(),
        toolName: external_exports2.string(),
        input: external_exports2.unknown(),
        providerExecuted: external_exports2.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        dynamic: external_exports2.boolean().optional(),
        errorText: external_exports2.string(),
        title: external_exports2.string().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("tool-approval-request"),
        approvalId: external_exports2.string(),
        toolCallId: external_exports2.string()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("tool-output-available"),
        toolCallId: external_exports2.string(),
        output: external_exports2.unknown(),
        providerExecuted: external_exports2.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        dynamic: external_exports2.boolean().optional(),
        preliminary: external_exports2.boolean().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("tool-output-error"),
        toolCallId: external_exports2.string(),
        errorText: external_exports2.string(),
        providerExecuted: external_exports2.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        dynamic: external_exports2.boolean().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("tool-output-denied"),
        toolCallId: external_exports2.string()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("reasoning-start"),
        id: external_exports2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("reasoning-delta"),
        id: external_exports2.string(),
        delta: external_exports2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("reasoning-end"),
        id: external_exports2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("source-url"),
        sourceId: external_exports2.string(),
        url: external_exports2.string(),
        title: external_exports2.string().optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("source-document"),
        sourceId: external_exports2.string(),
        mediaType: external_exports2.string(),
        title: external_exports2.string(),
        filename: external_exports2.string().optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("file"),
        url: external_exports2.string(),
        mediaType: external_exports2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.custom(
          (value) => typeof value === "string" && value.startsWith("data-"),
          { message: 'Type must start with "data-"' }
        ),
        id: external_exports2.string().optional(),
        data: external_exports2.unknown(),
        transient: external_exports2.boolean().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("start-step")
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("finish-step")
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("start"),
        messageId: external_exports2.string().optional(),
        messageMetadata: external_exports2.unknown().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("finish"),
        finishReason: external_exports2.enum([
          "stop",
          "length",
          "content-filter",
          "tool-calls",
          "error",
          "other"
        ]).optional(),
        messageMetadata: external_exports2.unknown().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("abort"),
        reason: external_exports2.string().optional()
      }),
      external_exports2.strictObject({
        type: external_exports2.literal("message-metadata"),
        messageMetadata: external_exports2.unknown()
      })
    ])
  )
);
var originalGenerateId2 = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
var uiMessagesSchema = lazySchema(
  () => zodSchema(
    external_exports2.array(
      external_exports2.object({
        id: external_exports2.string(),
        role: external_exports2.enum(["system", "user", "assistant"]),
        metadata: external_exports2.unknown().optional(),
        parts: external_exports2.array(
          external_exports2.union([
            external_exports2.object({
              type: external_exports2.literal("text"),
              text: external_exports2.string(),
              state: external_exports2.enum(["streaming", "done"]).optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("reasoning"),
              text: external_exports2.string(),
              state: external_exports2.enum(["streaming", "done"]).optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("source-url"),
              sourceId: external_exports2.string(),
              url: external_exports2.string(),
              title: external_exports2.string().optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("source-document"),
              sourceId: external_exports2.string(),
              mediaType: external_exports2.string(),
              title: external_exports2.string(),
              filename: external_exports2.string().optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("file"),
              mediaType: external_exports2.string(),
              filename: external_exports2.string().optional(),
              url: external_exports2.string(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("step-start")
            }),
            external_exports2.object({
              type: external_exports2.string().startsWith("data-"),
              id: external_exports2.string().optional(),
              data: external_exports2.unknown()
            }),
            external_exports2.object({
              type: external_exports2.literal("dynamic-tool"),
              toolName: external_exports2.string(),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("input-streaming"),
              input: external_exports2.unknown().optional(),
              providerExecuted: external_exports2.boolean().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              approval: external_exports2.never().optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("dynamic-tool"),
              toolName: external_exports2.string(),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("input-available"),
              input: external_exports2.unknown(),
              providerExecuted: external_exports2.boolean().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.never().optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("dynamic-tool"),
              toolName: external_exports2.string(),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("approval-requested"),
              input: external_exports2.unknown(),
              providerExecuted: external_exports2.boolean().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.never().optional(),
                reason: external_exports2.never().optional()
              })
            }),
            external_exports2.object({
              type: external_exports2.literal("dynamic-tool"),
              toolName: external_exports2.string(),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("approval-responded"),
              input: external_exports2.unknown(),
              providerExecuted: external_exports2.boolean().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.boolean(),
                reason: external_exports2.string().optional()
              })
            }),
            external_exports2.object({
              type: external_exports2.literal("dynamic-tool"),
              toolName: external_exports2.string(),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("output-available"),
              input: external_exports2.unknown(),
              providerExecuted: external_exports2.boolean().optional(),
              output: external_exports2.unknown(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              resultProviderMetadata: providerMetadataSchema.optional(),
              preliminary: external_exports2.boolean().optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.literal(true),
                reason: external_exports2.string().optional()
              }).optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("dynamic-tool"),
              toolName: external_exports2.string(),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("output-error"),
              input: external_exports2.unknown(),
              rawInput: external_exports2.unknown().optional(),
              providerExecuted: external_exports2.boolean().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.string(),
              callProviderMetadata: providerMetadataSchema.optional(),
              resultProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.literal(true),
                reason: external_exports2.string().optional()
              }).optional()
            }),
            external_exports2.object({
              type: external_exports2.literal("dynamic-tool"),
              toolName: external_exports2.string(),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("output-denied"),
              input: external_exports2.unknown(),
              providerExecuted: external_exports2.boolean().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.literal(false),
                reason: external_exports2.string().optional()
              })
            }),
            external_exports2.object({
              type: external_exports2.string().startsWith("tool-"),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("input-streaming"),
              providerExecuted: external_exports2.boolean().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              input: external_exports2.unknown().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              approval: external_exports2.never().optional()
            }),
            external_exports2.object({
              type: external_exports2.string().startsWith("tool-"),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("input-available"),
              providerExecuted: external_exports2.boolean().optional(),
              input: external_exports2.unknown(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.never().optional()
            }),
            external_exports2.object({
              type: external_exports2.string().startsWith("tool-"),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("approval-requested"),
              input: external_exports2.unknown(),
              providerExecuted: external_exports2.boolean().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.never().optional(),
                reason: external_exports2.never().optional()
              })
            }),
            external_exports2.object({
              type: external_exports2.string().startsWith("tool-"),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("approval-responded"),
              input: external_exports2.unknown(),
              providerExecuted: external_exports2.boolean().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.boolean(),
                reason: external_exports2.string().optional()
              })
            }),
            external_exports2.object({
              type: external_exports2.string().startsWith("tool-"),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("output-available"),
              providerExecuted: external_exports2.boolean().optional(),
              input: external_exports2.unknown(),
              output: external_exports2.unknown(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              resultProviderMetadata: providerMetadataSchema.optional(),
              preliminary: external_exports2.boolean().optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.literal(true),
                reason: external_exports2.string().optional()
              }).optional()
            }),
            external_exports2.object({
              type: external_exports2.string().startsWith("tool-"),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("output-error"),
              providerExecuted: external_exports2.boolean().optional(),
              input: external_exports2.unknown(),
              rawInput: external_exports2.unknown().optional(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.string(),
              callProviderMetadata: providerMetadataSchema.optional(),
              resultProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.literal(true),
                reason: external_exports2.string().optional()
              }).optional()
            }),
            external_exports2.object({
              type: external_exports2.string().startsWith("tool-"),
              toolCallId: external_exports2.string(),
              state: external_exports2.literal("output-denied"),
              providerExecuted: external_exports2.boolean().optional(),
              input: external_exports2.unknown(),
              output: external_exports2.never().optional(),
              errorText: external_exports2.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports2.object({
                id: external_exports2.string(),
                approved: external_exports2.literal(false),
                reason: external_exports2.string().optional()
              })
            })
          ])
        ).nonempty("Message must contain at least one part")
      })
    ).nonempty("Messages array must not be empty")
  )
);
var originalGenerateId3 = createIdGenerator({ prefix: "aiobj", size: 24 });
function createDownload(options) {
  return ({ url: url2, abortSignal }) => download({ url: url2, maxBytes: options == null ? void 0 : options.maxBytes, abortSignal });
}
__name(createDownload, "createDownload");
var originalGenerateId4 = createIdGenerator({ prefix: "aiobj", size: 24 });
var defaultDownload = createDownload();
var name20 = "AI_NoSuchProviderError";
var marker20 = `vercel.ai.error.${name20}`;
var symbol20 = Symbol.for(marker20);
var _a20;
_a20 = symbol20;
var defaultDownload2 = createDownload();

export {
  tool,
  createGoogleGenerativeAI,
  generateText
};
//# sourceMappingURL=chunk-U2WBBFSF.mjs.map
