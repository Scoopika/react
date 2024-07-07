"use strict";
var Scoopika = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/zod-to-json-schema/dist/cjs/Options.js
  var require_Options = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/Options.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDefaultOptions = exports.defaultOptions = exports.ignoreOverride = void 0;
      exports.ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
      exports.defaultOptions = {
        name: void 0,
        $refStrategy: "root",
        basePath: ["#"],
        effectStrategy: "input",
        pipeStrategy: "all",
        dateStrategy: "format:date-time",
        mapStrategy: "entries",
        removeAdditionalStrategy: "passthrough",
        definitionPath: "definitions",
        target: "jsonSchema7",
        strictUnions: false,
        definitions: {},
        errorMessages: false,
        markdownDescription: false,
        patternStrategy: "escape",
        applyRegexFlags: false,
        emailStrategy: "format:email",
        base64Strategy: "contentEncoding:base64",
        nameStrategy: "ref"
      };
      var getDefaultOptions = (options) => typeof options === "string" ? {
        ...exports.defaultOptions,
        name: options
      } : {
        ...exports.defaultOptions,
        ...options
      };
      exports.getDefaultOptions = getDefaultOptions;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/Refs.js
  var require_Refs = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/Refs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getRefs = void 0;
      var Options_js_1 = require_Options();
      var getRefs = (options) => {
        const _options = (0, Options_js_1.getDefaultOptions)(options);
        const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
        return {
          ..._options,
          currentPath,
          propertyPath: void 0,
          seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [
            def._def,
            {
              def: def._def,
              path: [..._options.basePath, _options.definitionPath, name],
              // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
              jsonSchema: void 0
            }
          ]))
        };
      };
      exports.getRefs = getRefs;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/errorMessages.js
  var require_errorMessages = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/errorMessages.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.setResponseValueAndErrors = exports.addErrorMessage = void 0;
      function addErrorMessage(res, key, errorMessage, refs) {
        if (!(refs == null ? void 0 : refs.errorMessages))
          return;
        if (errorMessage) {
          res.errorMessage = {
            ...res.errorMessage,
            [key]: errorMessage
          };
        }
      }
      exports.addErrorMessage = addErrorMessage;
      function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
        res[key] = value;
        addErrorMessage(res, key, errorMessage, refs);
      }
      exports.setResponseValueAndErrors = setResponseValueAndErrors;
    }
  });

  // node_modules/zod/lib/helpers/util.js
  var require_util = __commonJS({
    "node_modules/zod/lib/helpers/util.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getParsedType = exports.ZodParsedType = exports.objectUtil = exports.util = void 0;
      var util;
      (function(util2) {
        util2.assertEqual = (val) => val;
        function assertIs(_arg) {
        }
        util2.assertIs = assertIs;
        function assertNever(_x) {
          throw new Error();
        }
        util2.assertNever = assertNever;
        util2.arrayToEnum = (items) => {
          const obj = {};
          for (const item of items) {
            obj[item] = item;
          }
          return obj;
        };
        util2.getValidEnumValues = (obj) => {
          const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
          const filtered = {};
          for (const k of validKeys) {
            filtered[k] = obj[k];
          }
          return util2.objectValues(filtered);
        };
        util2.objectValues = (obj) => {
          return util2.objectKeys(obj).map(function(e) {
            return obj[e];
          });
        };
        util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
          const keys = [];
          for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
              keys.push(key);
            }
          }
          return keys;
        };
        util2.find = (arr, checker) => {
          for (const item of arr) {
            if (checker(item))
              return item;
          }
          return void 0;
        };
        util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
        function joinValues(array, separator = " | ") {
          return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
        }
        util2.joinValues = joinValues;
        util2.jsonStringifyReplacer = (_, value) => {
          if (typeof value === "bigint") {
            return value.toString();
          }
          return value;
        };
      })(util = exports.util || (exports.util = {}));
      var objectUtil;
      (function(objectUtil2) {
        objectUtil2.mergeShapes = (first, second) => {
          return {
            ...first,
            ...second
            // second overwrites first
          };
        };
      })(objectUtil = exports.objectUtil || (exports.objectUtil = {}));
      exports.ZodParsedType = util.arrayToEnum([
        "string",
        "nan",
        "number",
        "integer",
        "float",
        "boolean",
        "date",
        "bigint",
        "symbol",
        "function",
        "undefined",
        "null",
        "array",
        "object",
        "unknown",
        "promise",
        "void",
        "never",
        "map",
        "set"
      ]);
      var getParsedType = (data) => {
        const t = typeof data;
        switch (t) {
          case "undefined":
            return exports.ZodParsedType.undefined;
          case "string":
            return exports.ZodParsedType.string;
          case "number":
            return isNaN(data) ? exports.ZodParsedType.nan : exports.ZodParsedType.number;
          case "boolean":
            return exports.ZodParsedType.boolean;
          case "function":
            return exports.ZodParsedType.function;
          case "bigint":
            return exports.ZodParsedType.bigint;
          case "symbol":
            return exports.ZodParsedType.symbol;
          case "object":
            if (Array.isArray(data)) {
              return exports.ZodParsedType.array;
            }
            if (data === null) {
              return exports.ZodParsedType.null;
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
              return exports.ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
              return exports.ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
              return exports.ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
              return exports.ZodParsedType.date;
            }
            return exports.ZodParsedType.object;
          default:
            return exports.ZodParsedType.unknown;
        }
      };
      exports.getParsedType = getParsedType;
    }
  });

  // node_modules/zod/lib/ZodError.js
  var require_ZodError = __commonJS({
    "node_modules/zod/lib/ZodError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ZodError = exports.quotelessJson = exports.ZodIssueCode = void 0;
      var util_1 = require_util();
      exports.ZodIssueCode = util_1.util.arrayToEnum([
        "invalid_type",
        "invalid_literal",
        "custom",
        "invalid_union",
        "invalid_union_discriminator",
        "invalid_enum_value",
        "unrecognized_keys",
        "invalid_arguments",
        "invalid_return_type",
        "invalid_date",
        "invalid_string",
        "too_small",
        "too_big",
        "invalid_intersection_types",
        "not_multiple_of",
        "not_finite"
      ]);
      var quotelessJson = (obj) => {
        const json = JSON.stringify(obj, null, 2);
        return json.replace(/"([^"]+)":/g, "$1:");
      };
      exports.quotelessJson = quotelessJson;
      var ZodError = class _ZodError extends Error {
        constructor(issues) {
          super();
          this.issues = [];
          this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
          };
          this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
          };
          const actualProto = new.target.prototype;
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(this, actualProto);
          } else {
            this.__proto__ = actualProto;
          }
          this.name = "ZodError";
          this.issues = issues;
        }
        get errors() {
          return this.issues;
        }
        format(_mapper) {
          const mapper = _mapper || function(issue) {
            return issue.message;
          };
          const fieldErrors = { _errors: [] };
          const processError = (error) => {
            for (const issue of error.issues) {
              if (issue.code === "invalid_union") {
                issue.unionErrors.map(processError);
              } else if (issue.code === "invalid_return_type") {
                processError(issue.returnTypeError);
              } else if (issue.code === "invalid_arguments") {
                processError(issue.argumentsError);
              } else if (issue.path.length === 0) {
                fieldErrors._errors.push(mapper(issue));
              } else {
                let curr = fieldErrors;
                let i = 0;
                while (i < issue.path.length) {
                  const el = issue.path[i];
                  const terminal = i === issue.path.length - 1;
                  if (!terminal) {
                    curr[el] = curr[el] || { _errors: [] };
                  } else {
                    curr[el] = curr[el] || { _errors: [] };
                    curr[el]._errors.push(mapper(issue));
                  }
                  curr = curr[el];
                  i++;
                }
              }
            }
          };
          processError(this);
          return fieldErrors;
        }
        static assert(value) {
          if (!(value instanceof _ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
          }
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, util_1.util.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(mapper = (issue) => issue.message) {
          const fieldErrors = {};
          const formErrors = [];
          for (const sub of this.issues) {
            if (sub.path.length > 0) {
              fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
              fieldErrors[sub.path[0]].push(mapper(sub));
            } else {
              formErrors.push(mapper(sub));
            }
          }
          return { formErrors, fieldErrors };
        }
        get formErrors() {
          return this.flatten();
        }
      };
      exports.ZodError = ZodError;
      ZodError.create = (issues) => {
        const error = new ZodError(issues);
        return error;
      };
    }
  });

  // node_modules/zod/lib/locales/en.js
  var require_en = __commonJS({
    "node_modules/zod/lib/locales/en.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var util_1 = require_util();
      var ZodError_1 = require_ZodError();
      var errorMap = (issue, _ctx) => {
        let message;
        switch (issue.code) {
          case ZodError_1.ZodIssueCode.invalid_type:
            if (issue.received === util_1.ZodParsedType.undefined) {
              message = "Required";
            } else {
              message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
          case ZodError_1.ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util_1.util.jsonStringifyReplacer)}`;
            break;
          case ZodError_1.ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util_1.util.joinValues(issue.keys, ", ")}`;
            break;
          case ZodError_1.ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
          case ZodError_1.ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util_1.util.joinValues(issue.options)}`;
            break;
          case ZodError_1.ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util_1.util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
          case ZodError_1.ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
          case ZodError_1.ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
          case ZodError_1.ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
          case ZodError_1.ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
              if ("includes" in issue.validation) {
                message = `Invalid input: must include "${issue.validation.includes}"`;
                if (typeof issue.validation.position === "number") {
                  message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                }
              } else if ("startsWith" in issue.validation) {
                message = `Invalid input: must start with "${issue.validation.startsWith}"`;
              } else if ("endsWith" in issue.validation) {
                message = `Invalid input: must end with "${issue.validation.endsWith}"`;
              } else {
                util_1.util.assertNever(issue.validation);
              }
            } else if (issue.validation !== "regex") {
              message = `Invalid ${issue.validation}`;
            } else {
              message = "Invalid";
            }
            break;
          case ZodError_1.ZodIssueCode.too_small:
            if (issue.type === "array")
              message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
              message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
              message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
              message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else
              message = "Invalid input";
            break;
          case ZodError_1.ZodIssueCode.too_big:
            if (issue.type === "array")
              message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
              message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
              message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
              message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
              message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
              message = "Invalid input";
            break;
          case ZodError_1.ZodIssueCode.custom:
            message = `Invalid input`;
            break;
          case ZodError_1.ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
          case ZodError_1.ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
          case ZodError_1.ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
          default:
            message = _ctx.defaultError;
            util_1.util.assertNever(issue);
        }
        return { message };
      };
      exports.default = errorMap;
    }
  });

  // node_modules/zod/lib/errors.js
  var require_errors = __commonJS({
    "node_modules/zod/lib/errors.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getErrorMap = exports.setErrorMap = exports.defaultErrorMap = void 0;
      var en_1 = __importDefault(require_en());
      exports.defaultErrorMap = en_1.default;
      var overrideErrorMap = en_1.default;
      function setErrorMap(map) {
        overrideErrorMap = map;
      }
      exports.setErrorMap = setErrorMap;
      function getErrorMap() {
        return overrideErrorMap;
      }
      exports.getErrorMap = getErrorMap;
    }
  });

  // node_modules/zod/lib/helpers/parseUtil.js
  var require_parseUtil = __commonJS({
    "node_modules/zod/lib/helpers/parseUtil.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isAsync = exports.isValid = exports.isDirty = exports.isAborted = exports.OK = exports.DIRTY = exports.INVALID = exports.ParseStatus = exports.addIssueToContext = exports.EMPTY_PATH = exports.makeIssue = void 0;
      var errors_1 = require_errors();
      var en_1 = __importDefault(require_en());
      var makeIssue = (params) => {
        const { data, path, errorMaps, issueData } = params;
        const fullPath = [...path, ...issueData.path || []];
        const fullIssue = {
          ...issueData,
          path: fullPath
        };
        if (issueData.message !== void 0) {
          return {
            ...issueData,
            path: fullPath,
            message: issueData.message
          };
        }
        let errorMessage = "";
        const maps = errorMaps.filter((m) => !!m).slice().reverse();
        for (const map of maps) {
          errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
        }
        return {
          ...issueData,
          path: fullPath,
          message: errorMessage
        };
      };
      exports.makeIssue = makeIssue;
      exports.EMPTY_PATH = [];
      function addIssueToContext(ctx, issueData) {
        const overrideMap = (0, errors_1.getErrorMap)();
        const issue = (0, exports.makeIssue)({
          issueData,
          data: ctx.data,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === en_1.default ? void 0 : en_1.default
            // then global default map
          ].filter((x) => !!x)
        });
        ctx.common.issues.push(issue);
      }
      exports.addIssueToContext = addIssueToContext;
      var ParseStatus = class _ParseStatus {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          if (this.value === "valid")
            this.value = "dirty";
        }
        abort() {
          if (this.value !== "aborted")
            this.value = "aborted";
        }
        static mergeArray(status, results) {
          const arrayValue = [];
          for (const s of results) {
            if (s.status === "aborted")
              return exports.INVALID;
            if (s.status === "dirty")
              status.dirty();
            arrayValue.push(s.value);
          }
          return { status: status.value, value: arrayValue };
        }
        static async mergeObjectAsync(status, pairs) {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value
            });
          }
          return _ParseStatus.mergeObjectSync(status, syncPairs);
        }
        static mergeObjectSync(status, pairs) {
          const finalObject = {};
          for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
              return exports.INVALID;
            if (value.status === "aborted")
              return exports.INVALID;
            if (key.status === "dirty")
              status.dirty();
            if (value.status === "dirty")
              status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
              finalObject[key.value] = value.value;
            }
          }
          return { status: status.value, value: finalObject };
        }
      };
      exports.ParseStatus = ParseStatus;
      exports.INVALID = Object.freeze({
        status: "aborted"
      });
      var DIRTY = (value) => ({ status: "dirty", value });
      exports.DIRTY = DIRTY;
      var OK = (value) => ({ status: "valid", value });
      exports.OK = OK;
      var isAborted = (x) => x.status === "aborted";
      exports.isAborted = isAborted;
      var isDirty = (x) => x.status === "dirty";
      exports.isDirty = isDirty;
      var isValid = (x) => x.status === "valid";
      exports.isValid = isValid;
      var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
      exports.isAsync = isAsync;
    }
  });

  // node_modules/zod/lib/helpers/typeAliases.js
  var require_typeAliases = __commonJS({
    "node_modules/zod/lib/helpers/typeAliases.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/zod/lib/helpers/errorUtil.js
  var require_errorUtil = __commonJS({
    "node_modules/zod/lib/helpers/errorUtil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.errorUtil = void 0;
      var errorUtil;
      (function(errorUtil2) {
        errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
        errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
      })(errorUtil = exports.errorUtil || (exports.errorUtil = {}));
    }
  });

  // node_modules/zod/lib/types.js
  var require_types = __commonJS({
    "node_modules/zod/lib/types.js"(exports) {
      "use strict";
      var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      var _ZodEnum_cache;
      var _ZodNativeEnum_cache;
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.boolean = exports.bigint = exports.array = exports.any = exports.coerce = exports.ZodFirstPartyTypeKind = exports.late = exports.ZodSchema = exports.Schema = exports.custom = exports.ZodReadonly = exports.ZodPipeline = exports.ZodBranded = exports.BRAND = exports.ZodNaN = exports.ZodCatch = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = exports.ZodTransformer = exports.ZodEffects = exports.ZodPromise = exports.ZodNativeEnum = exports.ZodEnum = exports.ZodLiteral = exports.ZodLazy = exports.ZodFunction = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodDate = exports.ZodBoolean = exports.ZodBigInt = exports.ZodNumber = exports.ZodString = exports.datetimeRegex = exports.ZodType = void 0;
      exports.NEVER = exports.void = exports.unknown = exports.union = exports.undefined = exports.tuple = exports.transformer = exports.symbol = exports.string = exports.strictObject = exports.set = exports.record = exports.promise = exports.preprocess = exports.pipeline = exports.ostring = exports.optional = exports.onumber = exports.oboolean = exports.object = exports.number = exports.nullable = exports.null = exports.never = exports.nativeEnum = exports.nan = exports.map = exports.literal = exports.lazy = exports.intersection = exports.instanceof = exports.function = exports.enum = exports.effect = exports.discriminatedUnion = exports.date = void 0;
      var errors_1 = require_errors();
      var errorUtil_1 = require_errorUtil();
      var parseUtil_1 = require_parseUtil();
      var util_1 = require_util();
      var ZodError_1 = require_ZodError();
      var ParseInputLazyPath = class {
        constructor(parent, value, path, key) {
          this._cachedPath = [];
          this.parent = parent;
          this.data = value;
          this._path = path;
          this._key = key;
        }
        get path() {
          if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
              this._cachedPath.push(...this._path, ...this._key);
            } else {
              this._cachedPath.push(...this._path, this._key);
            }
          }
          return this._cachedPath;
        }
      };
      var handleResult = (ctx, result) => {
        if ((0, parseUtil_1.isValid)(result)) {
          return { success: true, data: result.value };
        } else {
          if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
          }
          return {
            success: false,
            get error() {
              if (this._error)
                return this._error;
              const error = new ZodError_1.ZodError(ctx.common.issues);
              this._error = error;
              return this._error;
            }
          };
        }
      };
      function processCreateParams(params) {
        if (!params)
          return {};
        const { errorMap, invalid_type_error, required_error, description } = params;
        if (errorMap && (invalid_type_error || required_error)) {
          throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
        }
        if (errorMap)
          return { errorMap, description };
        const customMap = (iss, ctx) => {
          var _a, _b;
          const { message } = params;
          if (iss.code === "invalid_enum_value") {
            return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
          }
          if (typeof ctx.data === "undefined") {
            return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
          }
          if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
          return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
        };
        return { errorMap: customMap, description };
      }
      var ZodType = class {
        constructor(def) {
          this.spa = this.safeParseAsync;
          this._def = def;
          this.parse = this.parse.bind(this);
          this.safeParse = this.safeParse.bind(this);
          this.parseAsync = this.parseAsync.bind(this);
          this.safeParseAsync = this.safeParseAsync.bind(this);
          this.spa = this.spa.bind(this);
          this.refine = this.refine.bind(this);
          this.refinement = this.refinement.bind(this);
          this.superRefine = this.superRefine.bind(this);
          this.optional = this.optional.bind(this);
          this.nullable = this.nullable.bind(this);
          this.nullish = this.nullish.bind(this);
          this.array = this.array.bind(this);
          this.promise = this.promise.bind(this);
          this.or = this.or.bind(this);
          this.and = this.and.bind(this);
          this.transform = this.transform.bind(this);
          this.brand = this.brand.bind(this);
          this.default = this.default.bind(this);
          this.catch = this.catch.bind(this);
          this.describe = this.describe.bind(this);
          this.pipe = this.pipe.bind(this);
          this.readonly = this.readonly.bind(this);
          this.isNullable = this.isNullable.bind(this);
          this.isOptional = this.isOptional.bind(this);
        }
        get description() {
          return this._def.description;
        }
        _getType(input) {
          return (0, util_1.getParsedType)(input.data);
        }
        _getOrReturnCtx(input, ctx) {
          return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, util_1.getParsedType)(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          };
        }
        _processInputParams(input) {
          return {
            status: new parseUtil_1.ParseStatus(),
            ctx: {
              common: input.parent.common,
              data: input.data,
              parsedType: (0, util_1.getParsedType)(input.data),
              schemaErrorMap: this._def.errorMap,
              path: input.path,
              parent: input.parent
            }
          };
        }
        _parseSync(input) {
          const result = this._parse(input);
          if ((0, parseUtil_1.isAsync)(result)) {
            throw new Error("Synchronous parse encountered promise.");
          }
          return result;
        }
        _parseAsync(input) {
          const result = this._parse(input);
          return Promise.resolve(result);
        }
        parse(data, params) {
          const result = this.safeParse(data, params);
          if (result.success)
            return result.data;
          throw result.error;
        }
        safeParse(data, params) {
          var _a;
          const ctx = {
            common: {
              issues: [],
              async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
              contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, util_1.getParsedType)(data)
          };
          const result = this._parseSync({ data, path: ctx.path, parent: ctx });
          return handleResult(ctx, result);
        }
        async parseAsync(data, params) {
          const result = await this.safeParseAsync(data, params);
          if (result.success)
            return result.data;
          throw result.error;
        }
        async safeParseAsync(data, params) {
          const ctx = {
            common: {
              issues: [],
              contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
              async: true
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, util_1.getParsedType)(data)
          };
          const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
          const result = await ((0, parseUtil_1.isAsync)(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
          return handleResult(ctx, result);
        }
        refine(check, message) {
          const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
              return { message };
            } else if (typeof message === "function") {
              return message(val);
            } else {
              return message;
            }
          };
          return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
              code: ZodError_1.ZodIssueCode.custom,
              ...getIssueProperties(val)
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
              return result.then((data) => {
                if (!data) {
                  setError();
                  return false;
                } else {
                  return true;
                }
              });
            }
            if (!result) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        refinement(check, refinementData) {
          return this._refinement((val, ctx) => {
            if (!check(val)) {
              ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
              return false;
            } else {
              return true;
            }
          });
        }
        _refinement(refinement) {
          return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement }
          });
        }
        superRefine(refinement) {
          return this._refinement(refinement);
        }
        optional() {
          return ZodOptional.create(this, this._def);
        }
        nullable() {
          return ZodNullable.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return ZodArray.create(this, this._def);
        }
        promise() {
          return ZodPromise.create(this, this._def);
        }
        or(option) {
          return ZodUnion.create([this, option], this._def);
        }
        and(incoming) {
          return ZodIntersection.create(this, incoming, this._def);
        }
        transform(transform) {
          return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform }
          });
        }
        default(def) {
          const defaultValueFunc = typeof def === "function" ? def : () => def;
          return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
          });
        }
        brand() {
          return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def)
          });
        }
        catch(def) {
          const catchValueFunc = typeof def === "function" ? def : () => def;
          return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
          });
        }
        describe(description) {
          const This = this.constructor;
          return new This({
            ...this._def,
            description
          });
        }
        pipe(target) {
          return ZodPipeline.create(this, target);
        }
        readonly() {
          return ZodReadonly.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      };
      exports.ZodType = ZodType;
      exports.Schema = ZodType;
      exports.ZodSchema = ZodType;
      var cuidRegex = /^c[^\s-]{8,}$/i;
      var cuid2Regex = /^[0-9a-z]+$/;
      var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
      var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
      var nanoidRegex = /^[a-z0-9_-]{21}$/i;
      var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
      var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
      var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
      var emojiRegex;
      var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
      var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
      var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
      var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
      var dateRegex = new RegExp(`^${dateRegexSource}$`);
      function timeRegexSource(args) {
        let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
        if (args.precision) {
          regex = `${regex}\\.\\d{${args.precision}}`;
        } else if (args.precision == null) {
          regex = `${regex}(\\.\\d+)?`;
        }
        return regex;
      }
      function timeRegex(args) {
        return new RegExp(`^${timeRegexSource(args)}$`);
      }
      function datetimeRegex(args) {
        let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
        const opts = [];
        opts.push(args.local ? `Z?` : `Z`);
        if (args.offset)
          opts.push(`([+-]\\d{2}:?\\d{2})`);
        regex = `${regex}(${opts.join("|")})`;
        return new RegExp(`^${regex}$`);
      }
      exports.datetimeRegex = datetimeRegex;
      function isValidIP(ip, version) {
        if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
          return true;
        }
        if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
          return true;
        }
        return false;
      }
      var ZodString = class _ZodString extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = String(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.string) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.string,
              received: ctx2.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const status = new parseUtil_1.ParseStatus();
          let ctx = void 0;
          for (const check of this._def.checks) {
            if (check.kind === "min") {
              if (input.data.length < check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              if (input.data.length > check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "length") {
              const tooBig = input.data.length > check.value;
              const tooSmall = input.data.length < check.value;
              if (tooBig || tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                if (tooBig) {
                  (0, parseUtil_1.addIssueToContext)(ctx, {
                    code: ZodError_1.ZodIssueCode.too_big,
                    maximum: check.value,
                    type: "string",
                    inclusive: true,
                    exact: true,
                    message: check.message
                  });
                } else if (tooSmall) {
                  (0, parseUtil_1.addIssueToContext)(ctx, {
                    code: ZodError_1.ZodIssueCode.too_small,
                    minimum: check.value,
                    type: "string",
                    inclusive: true,
                    exact: true,
                    message: check.message
                  });
                }
                status.dirty();
              }
            } else if (check.kind === "email") {
              if (!emailRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "email",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "emoji") {
              if (!emojiRegex) {
                emojiRegex = new RegExp(_emojiRegex, "u");
              }
              if (!emojiRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "emoji",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "uuid") {
              if (!uuidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "uuid",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "nanoid") {
              if (!nanoidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "nanoid",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "cuid") {
              if (!cuidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "cuid",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "cuid2") {
              if (!cuid2Regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "cuid2",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "ulid") {
              if (!ulidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "ulid",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "url") {
              try {
                new URL(input.data);
              } catch (_a) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "url",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "regex") {
              check.regex.lastIndex = 0;
              const testResult = check.regex.test(input.data);
              if (!testResult) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "regex",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "trim") {
              input.data = input.data.trim();
            } else if (check.kind === "includes") {
              if (!input.data.includes(check.value, check.position)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: { includes: check.value, position: check.position },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "toLowerCase") {
              input.data = input.data.toLowerCase();
            } else if (check.kind === "toUpperCase") {
              input.data = input.data.toUpperCase();
            } else if (check.kind === "startsWith") {
              if (!input.data.startsWith(check.value)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: { startsWith: check.value },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "endsWith") {
              if (!input.data.endsWith(check.value)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: { endsWith: check.value },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "datetime") {
              const regex = datetimeRegex(check);
              if (!regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: "datetime",
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "date") {
              const regex = dateRegex;
              if (!regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: "date",
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "time") {
              const regex = timeRegex(check);
              if (!regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: "time",
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "duration") {
              if (!durationRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "duration",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "ip") {
              if (!isValidIP(input.data, check.version)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "ip",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "base64") {
              if (!base64Regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "base64",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util_1.util.assertNever(check);
            }
          }
          return { status: status.value, value: input.data };
        }
        _regex(regex, validation, message) {
          return this.refinement((data) => regex.test(data), {
            validation,
            code: ZodError_1.ZodIssueCode.invalid_string,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        _addCheck(check) {
          return new _ZodString({
            ...this._def,
            checks: [...this._def.checks, check]
          });
        }
        email(message) {
          return this._addCheck({ kind: "email", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        url(message) {
          return this._addCheck({ kind: "url", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        emoji(message) {
          return this._addCheck({ kind: "emoji", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        uuid(message) {
          return this._addCheck({ kind: "uuid", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        nanoid(message) {
          return this._addCheck({ kind: "nanoid", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        cuid(message) {
          return this._addCheck({ kind: "cuid", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        cuid2(message) {
          return this._addCheck({ kind: "cuid2", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        ulid(message) {
          return this._addCheck({ kind: "ulid", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        base64(message) {
          return this._addCheck({ kind: "base64", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        ip(options) {
          return this._addCheck({ kind: "ip", ...errorUtil_1.errorUtil.errToObj(options) });
        }
        datetime(options) {
          var _a, _b;
          if (typeof options === "string") {
            return this._addCheck({
              kind: "datetime",
              precision: null,
              offset: false,
              local: false,
              message: options
            });
          }
          return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...errorUtil_1.errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
          });
        }
        date(message) {
          return this._addCheck({ kind: "date", message });
        }
        time(options) {
          if (typeof options === "string") {
            return this._addCheck({
              kind: "time",
              precision: null,
              message: options
            });
          }
          return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...errorUtil_1.errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
          });
        }
        duration(message) {
          return this._addCheck({ kind: "duration", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        regex(regex, message) {
          return this._addCheck({
            kind: "regex",
            regex,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        includes(value, options) {
          return this._addCheck({
            kind: "includes",
            value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil_1.errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
          });
        }
        startsWith(value, message) {
          return this._addCheck({
            kind: "startsWith",
            value,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        endsWith(value, message) {
          return this._addCheck({
            kind: "endsWith",
            value,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        min(minLength, message) {
          return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        max(maxLength, message) {
          return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        length(len, message) {
          return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        /**
         * @deprecated Use z.string().min(1) instead.
         * @see {@link ZodString.min}
         */
        nonempty(message) {
          return this.min(1, errorUtil_1.errorUtil.errToObj(message));
        }
        trim() {
          return new _ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }]
          });
        }
        toLowerCase() {
          return new _ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }]
          });
        }
        toUpperCase() {
          return new _ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }]
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((ch) => ch.kind === "datetime");
        }
        get isDate() {
          return !!this._def.checks.find((ch) => ch.kind === "date");
        }
        get isTime() {
          return !!this._def.checks.find((ch) => ch.kind === "time");
        }
        get isDuration() {
          return !!this._def.checks.find((ch) => ch.kind === "duration");
        }
        get isEmail() {
          return !!this._def.checks.find((ch) => ch.kind === "email");
        }
        get isURL() {
          return !!this._def.checks.find((ch) => ch.kind === "url");
        }
        get isEmoji() {
          return !!this._def.checks.find((ch) => ch.kind === "emoji");
        }
        get isUUID() {
          return !!this._def.checks.find((ch) => ch.kind === "uuid");
        }
        get isNANOID() {
          return !!this._def.checks.find((ch) => ch.kind === "nanoid");
        }
        get isCUID() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid");
        }
        get isCUID2() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid2");
        }
        get isULID() {
          return !!this._def.checks.find((ch) => ch.kind === "ulid");
        }
        get isIP() {
          return !!this._def.checks.find((ch) => ch.kind === "ip");
        }
        get isBase64() {
          return !!this._def.checks.find((ch) => ch.kind === "base64");
        }
        get minLength() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min;
        }
        get maxLength() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max;
        }
      };
      exports.ZodString = ZodString;
      ZodString.create = (params) => {
        var _a;
        return new ZodString({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodString,
          coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
          ...processCreateParams(params)
        });
      };
      function floatSafeRemainder(val, step) {
        const valDecCount = (val.toString().split(".")[1] || "").length;
        const stepDecCount = (step.toString().split(".")[1] || "").length;
        const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
        const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
        const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
        return valInt % stepInt / Math.pow(10, decCount);
      }
      var ZodNumber = class _ZodNumber extends ZodType {
        constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
          this.step = this.multipleOf;
        }
        _parse(input) {
          if (this._def.coerce) {
            input.data = Number(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.number) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.number,
              received: ctx2.parsedType
            });
            return parseUtil_1.INVALID;
          }
          let ctx = void 0;
          const status = new parseUtil_1.ParseStatus();
          for (const check of this._def.checks) {
            if (check.kind === "int") {
              if (!util_1.util.isInteger(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "min") {
              const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
              if (tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "number",
                  inclusive: check.inclusive,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
              if (tooBig) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "number",
                  inclusive: check.inclusive,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "multipleOf") {
              if (floatSafeRemainder(input.data, check.value) !== 0) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.not_multiple_of,
                  multipleOf: check.value,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "finite") {
              if (!Number.isFinite(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.not_finite,
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util_1.util.assertNever(check);
            }
          }
          return { status: status.value, value: input.data };
        }
        gte(value, message) {
          return this.setLimit("min", value, true, errorUtil_1.errorUtil.toString(message));
        }
        gt(value, message) {
          return this.setLimit("min", value, false, errorUtil_1.errorUtil.toString(message));
        }
        lte(value, message) {
          return this.setLimit("max", value, true, errorUtil_1.errorUtil.toString(message));
        }
        lt(value, message) {
          return this.setLimit("max", value, false, errorUtil_1.errorUtil.toString(message));
        }
        setLimit(kind, value, inclusive, message) {
          return new _ZodNumber({
            ...this._def,
            checks: [
              ...this._def.checks,
              {
                kind,
                value,
                inclusive,
                message: errorUtil_1.errorUtil.toString(message)
              }
            ]
          });
        }
        _addCheck(check) {
          return new _ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check]
          });
        }
        int(message) {
          return this._addCheck({
            kind: "int",
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        positive(message) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        negative(message) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        nonpositive(message) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        nonnegative(message) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        multipleOf(value, message) {
          return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        finite(message) {
          return this._addCheck({
            kind: "finite",
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        safe(message) {
          return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil_1.errorUtil.toString(message)
          })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min;
        }
        get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max;
        }
        get isInt() {
          return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util_1.util.isInteger(ch.value));
        }
        get isFinite() {
          let max = null, min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
              return true;
            } else if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            } else if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return Number.isFinite(min) && Number.isFinite(max);
        }
      };
      exports.ZodNumber = ZodNumber;
      ZodNumber.create = (params) => {
        return new ZodNumber({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodNumber,
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
          ...processCreateParams(params)
        });
      };
      var ZodBigInt = class _ZodBigInt extends ZodType {
        constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
        }
        _parse(input) {
          if (this._def.coerce) {
            input.data = BigInt(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.bigint) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.bigint,
              received: ctx2.parsedType
            });
            return parseUtil_1.INVALID;
          }
          let ctx = void 0;
          const status = new parseUtil_1.ParseStatus();
          for (const check of this._def.checks) {
            if (check.kind === "min") {
              const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
              if (tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_small,
                  type: "bigint",
                  minimum: check.value,
                  inclusive: check.inclusive,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
              if (tooBig) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_big,
                  type: "bigint",
                  maximum: check.value,
                  inclusive: check.inclusive,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "multipleOf") {
              if (input.data % check.value !== BigInt(0)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.not_multiple_of,
                  multipleOf: check.value,
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util_1.util.assertNever(check);
            }
          }
          return { status: status.value, value: input.data };
        }
        gte(value, message) {
          return this.setLimit("min", value, true, errorUtil_1.errorUtil.toString(message));
        }
        gt(value, message) {
          return this.setLimit("min", value, false, errorUtil_1.errorUtil.toString(message));
        }
        lte(value, message) {
          return this.setLimit("max", value, true, errorUtil_1.errorUtil.toString(message));
        }
        lt(value, message) {
          return this.setLimit("max", value, false, errorUtil_1.errorUtil.toString(message));
        }
        setLimit(kind, value, inclusive, message) {
          return new _ZodBigInt({
            ...this._def,
            checks: [
              ...this._def.checks,
              {
                kind,
                value,
                inclusive,
                message: errorUtil_1.errorUtil.toString(message)
              }
            ]
          });
        }
        _addCheck(check) {
          return new _ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check]
          });
        }
        positive(message) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        negative(message) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        nonpositive(message) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        nonnegative(message) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        multipleOf(value, message) {
          return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min;
        }
        get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max;
        }
      };
      exports.ZodBigInt = ZodBigInt;
      ZodBigInt.create = (params) => {
        var _a;
        return new ZodBigInt({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodBigInt,
          coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
          ...processCreateParams(params)
        });
      };
      var ZodBoolean = class extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = Boolean(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.boolean,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodBoolean = ZodBoolean;
      ZodBoolean.create = (params) => {
        return new ZodBoolean({
          typeName: ZodFirstPartyTypeKind.ZodBoolean,
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
          ...processCreateParams(params)
        });
      };
      var ZodDate = class _ZodDate extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = new Date(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.date) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.date,
              received: ctx2.parsedType
            });
            return parseUtil_1.INVALID;
          }
          if (isNaN(input.data.getTime())) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_date
            });
            return parseUtil_1.INVALID;
          }
          const status = new parseUtil_1.ParseStatus();
          let ctx = void 0;
          for (const check of this._def.checks) {
            if (check.kind === "min") {
              if (input.data.getTime() < check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_small,
                  message: check.message,
                  inclusive: true,
                  exact: false,
                  minimum: check.value,
                  type: "date"
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              if (input.data.getTime() > check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_big,
                  message: check.message,
                  inclusive: true,
                  exact: false,
                  maximum: check.value,
                  type: "date"
                });
                status.dirty();
              }
            } else {
              util_1.util.assertNever(check);
            }
          }
          return {
            status: status.value,
            value: new Date(input.data.getTime())
          };
        }
        _addCheck(check) {
          return new _ZodDate({
            ...this._def,
            checks: [...this._def.checks, check]
          });
        }
        min(minDate, message) {
          return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        max(maxDate, message) {
          return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        get minDate() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min != null ? new Date(min) : null;
        }
        get maxDate() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max != null ? new Date(max) : null;
        }
      };
      exports.ZodDate = ZodDate;
      ZodDate.create = (params) => {
        return new ZodDate({
          checks: [],
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
          typeName: ZodFirstPartyTypeKind.ZodDate,
          ...processCreateParams(params)
        });
      };
      var ZodSymbol = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.symbol,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodSymbol = ZodSymbol;
      ZodSymbol.create = (params) => {
        return new ZodSymbol({
          typeName: ZodFirstPartyTypeKind.ZodSymbol,
          ...processCreateParams(params)
        });
      };
      var ZodUndefined = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.undefined,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodUndefined = ZodUndefined;
      ZodUndefined.create = (params) => {
        return new ZodUndefined({
          typeName: ZodFirstPartyTypeKind.ZodUndefined,
          ...processCreateParams(params)
        });
      };
      var ZodNull = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.null,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodNull = ZodNull;
      ZodNull.create = (params) => {
        return new ZodNull({
          typeName: ZodFirstPartyTypeKind.ZodNull,
          ...processCreateParams(params)
        });
      };
      var ZodAny = class extends ZodType {
        constructor() {
          super(...arguments);
          this._any = true;
        }
        _parse(input) {
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodAny = ZodAny;
      ZodAny.create = (params) => {
        return new ZodAny({
          typeName: ZodFirstPartyTypeKind.ZodAny,
          ...processCreateParams(params)
        });
      };
      var ZodUnknown = class extends ZodType {
        constructor() {
          super(...arguments);
          this._unknown = true;
        }
        _parse(input) {
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodUnknown = ZodUnknown;
      ZodUnknown.create = (params) => {
        return new ZodUnknown({
          typeName: ZodFirstPartyTypeKind.ZodUnknown,
          ...processCreateParams(params)
        });
      };
      var ZodNever = class extends ZodType {
        _parse(input) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.never,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
      };
      exports.ZodNever = ZodNever;
      ZodNever.create = (params) => {
        return new ZodNever({
          typeName: ZodFirstPartyTypeKind.ZodNever,
          ...processCreateParams(params)
        });
      };
      var ZodVoid = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.void,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodVoid = ZodVoid;
      ZodVoid.create = (params) => {
        return new ZodVoid({
          typeName: ZodFirstPartyTypeKind.ZodVoid,
          ...processCreateParams(params)
        });
      };
      var ZodArray = class _ZodArray extends ZodType {
        _parse(input) {
          const { ctx, status } = this._processInputParams(input);
          const def = this._def;
          if (ctx.parsedType !== util_1.ZodParsedType.array) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.array,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: tooBig ? ZodError_1.ZodIssueCode.too_big : ZodError_1.ZodIssueCode.too_small,
                minimum: tooSmall ? def.exactLength.value : void 0,
                maximum: tooBig ? def.exactLength.value : void 0,
                type: "array",
                inclusive: true,
                exact: true,
                message: def.exactLength.message
              });
              status.dirty();
            }
          }
          if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                minimum: def.minLength.value,
                type: "array",
                inclusive: true,
                exact: false,
                message: def.minLength.message
              });
              status.dirty();
            }
          }
          if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
                maximum: def.maxLength.value,
                type: "array",
                inclusive: true,
                exact: false,
                message: def.maxLength.message
              });
              status.dirty();
            }
          }
          if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
              return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result2) => {
              return parseUtil_1.ParseStatus.mergeArray(status, result2);
            });
          }
          const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          });
          return parseUtil_1.ParseStatus.mergeArray(status, result);
        }
        get element() {
          return this._def.type;
        }
        min(minLength, message) {
          return new _ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        max(maxLength, message) {
          return new _ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        length(len, message) {
          return new _ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        nonempty(message) {
          return this.min(1, message);
        }
      };
      exports.ZodArray = ZodArray;
      ZodArray.create = (schema, params) => {
        return new ZodArray({
          type: schema,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: ZodFirstPartyTypeKind.ZodArray,
          ...processCreateParams(params)
        });
      };
      function deepPartialify(schema) {
        if (schema instanceof ZodObject) {
          const newShape = {};
          for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
          }
          return new ZodObject({
            ...schema._def,
            shape: () => newShape
          });
        } else if (schema instanceof ZodArray) {
          return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element)
          });
        } else if (schema instanceof ZodOptional) {
          return ZodOptional.create(deepPartialify(schema.unwrap()));
        } else if (schema instanceof ZodNullable) {
          return ZodNullable.create(deepPartialify(schema.unwrap()));
        } else if (schema instanceof ZodTuple) {
          return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
        } else {
          return schema;
        }
      }
      var ZodObject = class _ZodObject extends ZodType {
        constructor() {
          super(...arguments);
          this._cached = null;
          this.nonstrict = this.passthrough;
          this.augment = this.extend;
        }
        _getCached() {
          if (this._cached !== null)
            return this._cached;
          const shape = this._def.shape();
          const keys = util_1.util.objectKeys(shape);
          return this._cached = { shape, keys };
        }
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.object) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.object,
              received: ctx2.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const { status, ctx } = this._processInputParams(input);
          const { shape, keys: shapeKeys } = this._getCached();
          const extraKeys = [];
          if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
              if (!shapeKeys.includes(key)) {
                extraKeys.push(key);
              }
            }
          }
          const pairs = [];
          for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
              alwaysSet: key in ctx.data
            });
          }
          if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
              for (const key of extraKeys) {
                pairs.push({
                  key: { status: "valid", value: key },
                  value: { status: "valid", value: ctx.data[key] }
                });
              }
            } else if (unknownKeys === "strict") {
              if (extraKeys.length > 0) {
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.unrecognized_keys,
                  keys: extraKeys
                });
                status.dirty();
              }
            } else if (unknownKeys === "strip") {
            } else {
              throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
          } else {
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
              const value = ctx.data[key];
              pairs.push({
                key: { status: "valid", value: key },
                value: catchall._parse(
                  new ParseInputLazyPath(ctx, value, ctx.path, key)
                  //, ctx.child(key), value, getParsedType(value)
                ),
                alwaysSet: key in ctx.data
              });
            }
          }
          if (ctx.common.async) {
            return Promise.resolve().then(async () => {
              const syncPairs = [];
              for (const pair of pairs) {
                const key = await pair.key;
                const value = await pair.value;
                syncPairs.push({
                  key,
                  value,
                  alwaysSet: pair.alwaysSet
                });
              }
              return syncPairs;
            }).then((syncPairs) => {
              return parseUtil_1.ParseStatus.mergeObjectSync(status, syncPairs);
            });
          } else {
            return parseUtil_1.ParseStatus.mergeObjectSync(status, pairs);
          }
        }
        get shape() {
          return this._def.shape();
        }
        strict(message) {
          errorUtil_1.errorUtil.errToObj;
          return new _ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== void 0 ? {
              errorMap: (issue, ctx) => {
                var _a, _b, _c, _d;
                const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                if (issue.code === "unrecognized_keys")
                  return {
                    message: (_d = errorUtil_1.errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                  };
                return {
                  message: defaultError
                };
              }
            } : {}
          });
        }
        strip() {
          return new _ZodObject({
            ...this._def,
            unknownKeys: "strip"
          });
        }
        passthrough() {
          return new _ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
          });
        }
        // const AugmentFactory =
        //   <Def extends ZodObjectDef>(def: Def) =>
        //   <Augmentation extends ZodRawShape>(
        //     augmentation: Augmentation
        //   ): ZodObject<
        //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
        //     Def["unknownKeys"],
        //     Def["catchall"]
        //   > => {
        //     return new ZodObject({
        //       ...def,
        //       shape: () => ({
        //         ...def.shape(),
        //         ...augmentation,
        //       }),
        //     }) as any;
        //   };
        extend(augmentation) {
          return new _ZodObject({
            ...this._def,
            shape: () => ({
              ...this._def.shape(),
              ...augmentation
            })
          });
        }
        /**
         * Prior to zod@1.0.12 there was a bug in the
         * inferred type of merged objects. Please
         * upgrade if you are experiencing issues.
         */
        merge(merging) {
          const merged = new _ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
              ...this._def.shape(),
              ...merging._def.shape()
            }),
            typeName: ZodFirstPartyTypeKind.ZodObject
          });
          return merged;
        }
        // merge<
        //   Incoming extends AnyZodObject,
        //   Augmentation extends Incoming["shape"],
        //   NewOutput extends {
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   },
        //   NewInput extends {
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }
        // >(
        //   merging: Incoming
        // ): ZodObject<
        //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
        //   Incoming["_def"]["unknownKeys"],
        //   Incoming["_def"]["catchall"],
        //   NewOutput,
        //   NewInput
        // > {
        //   const merged: any = new ZodObject({
        //     unknownKeys: merging._def.unknownKeys,
        //     catchall: merging._def.catchall,
        //     shape: () =>
        //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
        //     typeName: ZodFirstPartyTypeKind.ZodObject,
        //   }) as any;
        //   return merged;
        // }
        setKey(key, schema) {
          return this.augment({ [key]: schema });
        }
        // merge<Incoming extends AnyZodObject>(
        //   merging: Incoming
        // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
        // ZodObject<
        //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
        //   Incoming["_def"]["unknownKeys"],
        //   Incoming["_def"]["catchall"]
        // > {
        //   // const mergedShape = objectUtil.mergeShapes(
        //   //   this._def.shape(),
        //   //   merging._def.shape()
        //   // );
        //   const merged: any = new ZodObject({
        //     unknownKeys: merging._def.unknownKeys,
        //     catchall: merging._def.catchall,
        //     shape: () =>
        //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
        //     typeName: ZodFirstPartyTypeKind.ZodObject,
        //   }) as any;
        //   return merged;
        // }
        catchall(index) {
          return new _ZodObject({
            ...this._def,
            catchall: index
          });
        }
        pick(mask) {
          const shape = {};
          util_1.util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
              shape[key] = this.shape[key];
            }
          });
          return new _ZodObject({
            ...this._def,
            shape: () => shape
          });
        }
        omit(mask) {
          const shape = {};
          util_1.util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
              shape[key] = this.shape[key];
            }
          });
          return new _ZodObject({
            ...this._def,
            shape: () => shape
          });
        }
        /**
         * @deprecated
         */
        deepPartial() {
          return deepPartialify(this);
        }
        partial(mask) {
          const newShape = {};
          util_1.util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
              newShape[key] = fieldSchema;
            } else {
              newShape[key] = fieldSchema.optional();
            }
          });
          return new _ZodObject({
            ...this._def,
            shape: () => newShape
          });
        }
        required(mask) {
          const newShape = {};
          util_1.util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
              newShape[key] = this.shape[key];
            } else {
              const fieldSchema = this.shape[key];
              let newField = fieldSchema;
              while (newField instanceof ZodOptional) {
                newField = newField._def.innerType;
              }
              newShape[key] = newField;
            }
          });
          return new _ZodObject({
            ...this._def,
            shape: () => newShape
          });
        }
        keyof() {
          return createZodEnum(util_1.util.objectKeys(this.shape));
        }
      };
      exports.ZodObject = ZodObject;
      ZodObject.create = (shape, params) => {
        return new ZodObject({
          shape: () => shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params)
        });
      };
      ZodObject.strictCreate = (shape, params) => {
        return new ZodObject({
          shape: () => shape,
          unknownKeys: "strict",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params)
        });
      };
      ZodObject.lazycreate = (shape, params) => {
        return new ZodObject({
          shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params)
        });
      };
      var ZodUnion = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const options = this._def.options;
          function handleResults(results) {
            for (const result of results) {
              if (result.result.status === "valid") {
                return result.result;
              }
            }
            for (const result of results) {
              if (result.result.status === "dirty") {
                ctx.common.issues.push(...result.ctx.common.issues);
                return result.result;
              }
            }
            const unionErrors = results.map((result) => new ZodError_1.ZodError(result.ctx.common.issues));
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_union,
              unionErrors
            });
            return parseUtil_1.INVALID;
          }
          if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
              const childCtx = {
                ...ctx,
                common: {
                  ...ctx.common,
                  issues: []
                },
                parent: null
              };
              return {
                result: await option._parseAsync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: childCtx
                }),
                ctx: childCtx
              };
            })).then(handleResults);
          } else {
            let dirty = void 0;
            const issues = [];
            for (const option of options) {
              const childCtx = {
                ...ctx,
                common: {
                  ...ctx.common,
                  issues: []
                },
                parent: null
              };
              const result = option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              });
              if (result.status === "valid") {
                return result;
              } else if (result.status === "dirty" && !dirty) {
                dirty = { result, ctx: childCtx };
              }
              if (childCtx.common.issues.length) {
                issues.push(childCtx.common.issues);
              }
            }
            if (dirty) {
              ctx.common.issues.push(...dirty.ctx.common.issues);
              return dirty.result;
            }
            const unionErrors = issues.map((issues2) => new ZodError_1.ZodError(issues2));
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_union,
              unionErrors
            });
            return parseUtil_1.INVALID;
          }
        }
        get options() {
          return this._def.options;
        }
      };
      exports.ZodUnion = ZodUnion;
      ZodUnion.create = (types, params) => {
        return new ZodUnion({
          options: types,
          typeName: ZodFirstPartyTypeKind.ZodUnion,
          ...processCreateParams(params)
        });
      };
      var getDiscriminator = (type) => {
        if (type instanceof ZodLazy) {
          return getDiscriminator(type.schema);
        } else if (type instanceof ZodEffects) {
          return getDiscriminator(type.innerType());
        } else if (type instanceof ZodLiteral) {
          return [type.value];
        } else if (type instanceof ZodEnum) {
          return type.options;
        } else if (type instanceof ZodNativeEnum) {
          return util_1.util.objectValues(type.enum);
        } else if (type instanceof ZodDefault) {
          return getDiscriminator(type._def.innerType);
        } else if (type instanceof ZodUndefined) {
          return [void 0];
        } else if (type instanceof ZodNull) {
          return [null];
        } else if (type instanceof ZodOptional) {
          return [void 0, ...getDiscriminator(type.unwrap())];
        } else if (type instanceof ZodNullable) {
          return [null, ...getDiscriminator(type.unwrap())];
        } else if (type instanceof ZodBranded) {
          return getDiscriminator(type.unwrap());
        } else if (type instanceof ZodReadonly) {
          return getDiscriminator(type.unwrap());
        } else if (type instanceof ZodCatch) {
          return getDiscriminator(type._def.innerType);
        } else {
          return [];
        }
      };
      var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.object) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.object,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const discriminator = this.discriminator;
          const discriminatorValue = ctx.data[discriminator];
          const option = this.optionsMap.get(discriminatorValue);
          if (!option) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_union_discriminator,
              options: Array.from(this.optionsMap.keys()),
              path: [discriminator]
            });
            return parseUtil_1.INVALID;
          }
          if (ctx.common.async) {
            return option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
          } else {
            return option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
          }
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        /**
         * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
         * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
         * have a different value for each object in the union.
         * @param discriminator the name of the discriminator property
         * @param types an array of object schemas
         * @param params
         */
        static create(discriminator, options, params) {
          const optionsMap = /* @__PURE__ */ new Map();
          for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
              throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
              if (optionsMap.has(value)) {
                throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
              }
              optionsMap.set(value, type);
            }
          }
          return new _ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
          });
        }
      };
      exports.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
      function mergeValues(a, b) {
        const aType = (0, util_1.getParsedType)(a);
        const bType = (0, util_1.getParsedType)(b);
        if (a === b) {
          return { valid: true, data: a };
        } else if (aType === util_1.ZodParsedType.object && bType === util_1.ZodParsedType.object) {
          const bKeys = util_1.util.objectKeys(b);
          const sharedKeys = util_1.util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
          const newObj = { ...a, ...b };
          for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
              return { valid: false };
            }
            newObj[key] = sharedValue.data;
          }
          return { valid: true, data: newObj };
        } else if (aType === util_1.ZodParsedType.array && bType === util_1.ZodParsedType.array) {
          if (a.length !== b.length) {
            return { valid: false };
          }
          const newArray = [];
          for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
              return { valid: false };
            }
            newArray.push(sharedValue.data);
          }
          return { valid: true, data: newArray };
        } else if (aType === util_1.ZodParsedType.date && bType === util_1.ZodParsedType.date && +a === +b) {
          return { valid: true, data: a };
        } else {
          return { valid: false };
        }
      }
      var ZodIntersection = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const handleParsed = (parsedLeft, parsedRight) => {
            if ((0, parseUtil_1.isAborted)(parsedLeft) || (0, parseUtil_1.isAborted)(parsedRight)) {
              return parseUtil_1.INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_intersection_types
              });
              return parseUtil_1.INVALID;
            }
            if ((0, parseUtil_1.isDirty)(parsedLeft) || (0, parseUtil_1.isDirty)(parsedRight)) {
              status.dirty();
            }
            return { status: status.value, value: merged.data };
          };
          if (ctx.common.async) {
            return Promise.all([
              this._def.left._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              }),
              this._def.right._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              })
            ]).then(([left, right]) => handleParsed(left, right));
          } else {
            return handleParsed(this._def.left._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }), this._def.right._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }));
          }
        }
      };
      exports.ZodIntersection = ZodIntersection;
      ZodIntersection.create = (left, right, params) => {
        return new ZodIntersection({
          left,
          right,
          typeName: ZodFirstPartyTypeKind.ZodIntersection,
          ...processCreateParams(params)
        });
      };
      var ZodTuple = class _ZodTuple extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.array) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.array,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          if (ctx.data.length < this._def.items.length) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.too_small,
              minimum: this._def.items.length,
              inclusive: true,
              exact: false,
              type: "array"
            });
            return parseUtil_1.INVALID;
          }
          const rest = this._def.rest;
          if (!rest && ctx.data.length > this._def.items.length) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.too_big,
              maximum: this._def.items.length,
              inclusive: true,
              exact: false,
              type: "array"
            });
            status.dirty();
          }
          const items = [...ctx.data].map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
              return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
          }).filter((x) => !!x);
          if (ctx.common.async) {
            return Promise.all(items).then((results) => {
              return parseUtil_1.ParseStatus.mergeArray(status, results);
            });
          } else {
            return parseUtil_1.ParseStatus.mergeArray(status, items);
          }
        }
        get items() {
          return this._def.items;
        }
        rest(rest) {
          return new _ZodTuple({
            ...this._def,
            rest
          });
        }
      };
      exports.ZodTuple = ZodTuple;
      ZodTuple.create = (schemas, params) => {
        if (!Array.isArray(schemas)) {
          throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
        }
        return new ZodTuple({
          items: schemas,
          typeName: ZodFirstPartyTypeKind.ZodTuple,
          rest: null,
          ...processCreateParams(params)
        });
      };
      var ZodRecord = class _ZodRecord extends ZodType {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.object) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.object,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const pairs = [];
          const keyType = this._def.keyType;
          const valueType = this._def.valueType;
          for (const key in ctx.data) {
            pairs.push({
              key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
              value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
              alwaysSet: key in ctx.data
            });
          }
          if (ctx.common.async) {
            return parseUtil_1.ParseStatus.mergeObjectAsync(status, pairs);
          } else {
            return parseUtil_1.ParseStatus.mergeObjectSync(status, pairs);
          }
        }
        get element() {
          return this._def.valueType;
        }
        static create(first, second, third) {
          if (second instanceof ZodType) {
            return new _ZodRecord({
              keyType: first,
              valueType: second,
              typeName: ZodFirstPartyTypeKind.ZodRecord,
              ...processCreateParams(third)
            });
          }
          return new _ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
          });
        }
      };
      exports.ZodRecord = ZodRecord;
      var ZodMap = class extends ZodType {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.map) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.map,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const keyType = this._def.keyType;
          const valueType = this._def.valueType;
          const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
              key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
              value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
            };
          });
          if (ctx.common.async) {
            const finalMap = /* @__PURE__ */ new Map();
            return Promise.resolve().then(async () => {
              for (const pair of pairs) {
                const key = await pair.key;
                const value = await pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                  return parseUtil_1.INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                  status.dirty();
                }
                finalMap.set(key.value, value.value);
              }
              return { status: status.value, value: finalMap };
            });
          } else {
            const finalMap = /* @__PURE__ */ new Map();
            for (const pair of pairs) {
              const key = pair.key;
              const value = pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return parseUtil_1.INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          }
        }
      };
      exports.ZodMap = ZodMap;
      ZodMap.create = (keyType, valueType, params) => {
        return new ZodMap({
          valueType,
          keyType,
          typeName: ZodFirstPartyTypeKind.ZodMap,
          ...processCreateParams(params)
        });
      };
      var ZodSet = class _ZodSet extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.set) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.set,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const def = this._def;
          if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                minimum: def.minSize.value,
                type: "set",
                inclusive: true,
                exact: false,
                message: def.minSize.message
              });
              status.dirty();
            }
          }
          if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
                maximum: def.maxSize.value,
                type: "set",
                inclusive: true,
                exact: false,
                message: def.maxSize.message
              });
              status.dirty();
            }
          }
          const valueType = this._def.valueType;
          function finalizeSet(elements2) {
            const parsedSet = /* @__PURE__ */ new Set();
            for (const element of elements2) {
              if (element.status === "aborted")
                return parseUtil_1.INVALID;
              if (element.status === "dirty")
                status.dirty();
              parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
          }
          const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
          if (ctx.common.async) {
            return Promise.all(elements).then((elements2) => finalizeSet(elements2));
          } else {
            return finalizeSet(elements);
          }
        }
        min(minSize, message) {
          return new _ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        max(maxSize, message) {
          return new _ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        size(size, message) {
          return this.min(size, message).max(size, message);
        }
        nonempty(message) {
          return this.min(1, message);
        }
      };
      exports.ZodSet = ZodSet;
      ZodSet.create = (valueType, params) => {
        return new ZodSet({
          valueType,
          minSize: null,
          maxSize: null,
          typeName: ZodFirstPartyTypeKind.ZodSet,
          ...processCreateParams(params)
        });
      };
      var ZodFunction = class _ZodFunction extends ZodType {
        constructor() {
          super(...arguments);
          this.validate = this.implement;
        }
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.function) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.function,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          function makeArgsIssue(args, error) {
            return (0, parseUtil_1.makeIssue)({
              data: args,
              path: ctx.path,
              errorMaps: [
                ctx.common.contextualErrorMap,
                ctx.schemaErrorMap,
                (0, errors_1.getErrorMap)(),
                errors_1.defaultErrorMap
              ].filter((x) => !!x),
              issueData: {
                code: ZodError_1.ZodIssueCode.invalid_arguments,
                argumentsError: error
              }
            });
          }
          function makeReturnsIssue(returns, error) {
            return (0, parseUtil_1.makeIssue)({
              data: returns,
              path: ctx.path,
              errorMaps: [
                ctx.common.contextualErrorMap,
                ctx.schemaErrorMap,
                (0, errors_1.getErrorMap)(),
                errors_1.defaultErrorMap
              ].filter((x) => !!x),
              issueData: {
                code: ZodError_1.ZodIssueCode.invalid_return_type,
                returnTypeError: error
              }
            });
          }
          const params = { errorMap: ctx.common.contextualErrorMap };
          const fn = ctx.data;
          if (this._def.returns instanceof ZodPromise) {
            const me = this;
            return (0, parseUtil_1.OK)(async function(...args) {
              const error = new ZodError_1.ZodError([]);
              const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
                error.addIssue(makeArgsIssue(args, e));
                throw error;
              });
              const result = await Reflect.apply(fn, this, parsedArgs);
              const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
                error.addIssue(makeReturnsIssue(result, e));
                throw error;
              });
              return parsedReturns;
            });
          } else {
            const me = this;
            return (0, parseUtil_1.OK)(function(...args) {
              const parsedArgs = me._def.args.safeParse(args, params);
              if (!parsedArgs.success) {
                throw new ZodError_1.ZodError([makeArgsIssue(args, parsedArgs.error)]);
              }
              const result = Reflect.apply(fn, this, parsedArgs.data);
              const parsedReturns = me._def.returns.safeParse(result, params);
              if (!parsedReturns.success) {
                throw new ZodError_1.ZodError([makeReturnsIssue(result, parsedReturns.error)]);
              }
              return parsedReturns.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...items) {
          return new _ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
          });
        }
        returns(returnType) {
          return new _ZodFunction({
            ...this._def,
            returns: returnType
          });
        }
        implement(func) {
          const validatedFunc = this.parse(func);
          return validatedFunc;
        }
        strictImplement(func) {
          const validatedFunc = this.parse(func);
          return validatedFunc;
        }
        static create(args, returns, params) {
          return new _ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
          });
        }
      };
      exports.ZodFunction = ZodFunction;
      var ZodLazy = class extends ZodType {
        get schema() {
          return this._def.getter();
        }
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const lazySchema = this._def.getter();
          return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
        }
      };
      exports.ZodLazy = ZodLazy;
      ZodLazy.create = (getter, params) => {
        return new ZodLazy({
          getter,
          typeName: ZodFirstPartyTypeKind.ZodLazy,
          ...processCreateParams(params)
        });
      };
      var ZodLiteral = class extends ZodType {
        _parse(input) {
          if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              received: ctx.data,
              code: ZodError_1.ZodIssueCode.invalid_literal,
              expected: this._def.value
            });
            return parseUtil_1.INVALID;
          }
          return { status: "valid", value: input.data };
        }
        get value() {
          return this._def.value;
        }
      };
      exports.ZodLiteral = ZodLiteral;
      ZodLiteral.create = (value, params) => {
        return new ZodLiteral({
          value,
          typeName: ZodFirstPartyTypeKind.ZodLiteral,
          ...processCreateParams(params)
        });
      };
      function createZodEnum(values, params) {
        return new ZodEnum({
          values,
          typeName: ZodFirstPartyTypeKind.ZodEnum,
          ...processCreateParams(params)
        });
      }
      var ZodEnum = class _ZodEnum extends ZodType {
        constructor() {
          super(...arguments);
          _ZodEnum_cache.set(this, void 0);
        }
        _parse(input) {
          if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, parseUtil_1.addIssueToContext)(ctx, {
              expected: util_1.util.joinValues(expectedValues),
              received: ctx.parsedType,
              code: ZodError_1.ZodIssueCode.invalid_type
            });
            return parseUtil_1.INVALID;
          }
          if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
          }
          if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, parseUtil_1.addIssueToContext)(ctx, {
              received: ctx.data,
              code: ZodError_1.ZodIssueCode.invalid_enum_value,
              options: expectedValues
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
        get Values() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
        get Enum() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
        extract(values, newDef = this._def) {
          return _ZodEnum.create(values, {
            ...this._def,
            ...newDef
          });
        }
        exclude(values, newDef = this._def) {
          return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
            ...this._def,
            ...newDef
          });
        }
      };
      exports.ZodEnum = ZodEnum;
      _ZodEnum_cache = /* @__PURE__ */ new WeakMap();
      ZodEnum.create = createZodEnum;
      var ZodNativeEnum = class extends ZodType {
        constructor() {
          super(...arguments);
          _ZodNativeEnum_cache.set(this, void 0);
        }
        _parse(input) {
          const nativeEnumValues = util_1.util.getValidEnumValues(this._def.values);
          const ctx = this._getOrReturnCtx(input);
          if (ctx.parsedType !== util_1.ZodParsedType.string && ctx.parsedType !== util_1.ZodParsedType.number) {
            const expectedValues = util_1.util.objectValues(nativeEnumValues);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              expected: util_1.util.joinValues(expectedValues),
              received: ctx.parsedType,
              code: ZodError_1.ZodIssueCode.invalid_type
            });
            return parseUtil_1.INVALID;
          }
          if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util_1.util.getValidEnumValues(this._def.values)), "f");
          }
          if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
            const expectedValues = util_1.util.objectValues(nativeEnumValues);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              received: ctx.data,
              code: ZodError_1.ZodIssueCode.invalid_enum_value,
              options: expectedValues
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
        get enum() {
          return this._def.values;
        }
      };
      exports.ZodNativeEnum = ZodNativeEnum;
      _ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
      ZodNativeEnum.create = (values, params) => {
        return new ZodNativeEnum({
          values,
          typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
          ...processCreateParams(params)
        });
      };
      var ZodPromise = class extends ZodType {
        unwrap() {
          return this._def.type;
        }
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.promise && ctx.common.async === false) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.promise,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const promisified = ctx.parsedType === util_1.ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
          return (0, parseUtil_1.OK)(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
              path: ctx.path,
              errorMap: ctx.common.contextualErrorMap
            });
          }));
        }
      };
      exports.ZodPromise = ZodPromise;
      ZodPromise.create = (schema, params) => {
        return new ZodPromise({
          type: schema,
          typeName: ZodFirstPartyTypeKind.ZodPromise,
          ...processCreateParams(params)
        });
      };
      var ZodEffects = class extends ZodType {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
        }
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const effect = this._def.effect || null;
          const checkCtx = {
            addIssue: (arg) => {
              (0, parseUtil_1.addIssueToContext)(ctx, arg);
              if (arg.fatal) {
                status.abort();
              } else {
                status.dirty();
              }
            },
            get path() {
              return ctx.path;
            }
          };
          checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
          if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(processed).then(async (processed2) => {
                if (status.value === "aborted")
                  return parseUtil_1.INVALID;
                const result = await this._def.schema._parseAsync({
                  data: processed2,
                  path: ctx.path,
                  parent: ctx
                });
                if (result.status === "aborted")
                  return parseUtil_1.INVALID;
                if (result.status === "dirty")
                  return (0, parseUtil_1.DIRTY)(result.value);
                if (status.value === "dirty")
                  return (0, parseUtil_1.DIRTY)(result.value);
                return result;
              });
            } else {
              if (status.value === "aborted")
                return parseUtil_1.INVALID;
              const result = this._def.schema._parseSync({
                data: processed,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return parseUtil_1.INVALID;
              if (result.status === "dirty")
                return (0, parseUtil_1.DIRTY)(result.value);
              if (status.value === "dirty")
                return (0, parseUtil_1.DIRTY)(result.value);
              return result;
            }
          }
          if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
              const result = effect.refinement(acc, checkCtx);
              if (ctx.common.async) {
                return Promise.resolve(result);
              }
              if (result instanceof Promise) {
                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
              }
              return acc;
            };
            if (ctx.common.async === false) {
              const inner = this._def.schema._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (inner.status === "aborted")
                return parseUtil_1.INVALID;
              if (inner.status === "dirty")
                status.dirty();
              executeRefinement(inner.value);
              return { status: status.value, value: inner.value };
            } else {
              return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
                if (inner.status === "aborted")
                  return parseUtil_1.INVALID;
                if (inner.status === "dirty")
                  status.dirty();
                return executeRefinement(inner.value).then(() => {
                  return { status: status.value, value: inner.value };
                });
              });
            }
          }
          if (effect.type === "transform") {
            if (ctx.common.async === false) {
              const base = this._def.schema._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (!(0, parseUtil_1.isValid)(base))
                return base;
              const result = effect.transform(base.value, checkCtx);
              if (result instanceof Promise) {
                throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
              }
              return { status: status.value, value: result };
            } else {
              return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
                if (!(0, parseUtil_1.isValid)(base))
                  return base;
                return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
              });
            }
          }
          util_1.util.assertNever(effect);
        }
      };
      exports.ZodEffects = ZodEffects;
      exports.ZodTransformer = ZodEffects;
      ZodEffects.create = (schema, effect, params) => {
        return new ZodEffects({
          schema,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect,
          ...processCreateParams(params)
        });
      };
      ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
        return new ZodEffects({
          schema,
          effect: { type: "preprocess", transform: preprocess },
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          ...processCreateParams(params)
        });
      };
      var ZodOptional = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === util_1.ZodParsedType.undefined) {
            return (0, parseUtil_1.OK)(void 0);
          }
          return this._def.innerType._parse(input);
        }
        unwrap() {
          return this._def.innerType;
        }
      };
      exports.ZodOptional = ZodOptional;
      ZodOptional.create = (type, params) => {
        return new ZodOptional({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodOptional,
          ...processCreateParams(params)
        });
      };
      var ZodNullable = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === util_1.ZodParsedType.null) {
            return (0, parseUtil_1.OK)(null);
          }
          return this._def.innerType._parse(input);
        }
        unwrap() {
          return this._def.innerType;
        }
      };
      exports.ZodNullable = ZodNullable;
      ZodNullable.create = (type, params) => {
        return new ZodNullable({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodNullable,
          ...processCreateParams(params)
        });
      };
      var ZodDefault = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          let data = ctx.data;
          if (ctx.parsedType === util_1.ZodParsedType.undefined) {
            data = this._def.defaultValue();
          }
          return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
          });
        }
        removeDefault() {
          return this._def.innerType;
        }
      };
      exports.ZodDefault = ZodDefault;
      ZodDefault.create = (type, params) => {
        return new ZodDefault({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodDefault,
          defaultValue: typeof params.default === "function" ? params.default : () => params.default,
          ...processCreateParams(params)
        });
      };
      var ZodCatch = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const newCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            }
          };
          const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
              ...newCtx
            }
          });
          if ((0, parseUtil_1.isAsync)(result)) {
            return result.then((result2) => {
              return {
                status: "valid",
                value: result2.status === "valid" ? result2.value : this._def.catchValue({
                  get error() {
                    return new ZodError_1.ZodError(newCtx.common.issues);
                  },
                  input: newCtx.data
                })
              };
            });
          } else {
            return {
              status: "valid",
              value: result.status === "valid" ? result.value : this._def.catchValue({
                get error() {
                  return new ZodError_1.ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          }
        }
        removeCatch() {
          return this._def.innerType;
        }
      };
      exports.ZodCatch = ZodCatch;
      ZodCatch.create = (type, params) => {
        return new ZodCatch({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodCatch,
          catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
          ...processCreateParams(params)
        });
      };
      var ZodNaN = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.nan,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return { status: "valid", value: input.data };
        }
      };
      exports.ZodNaN = ZodNaN;
      ZodNaN.create = (params) => {
        return new ZodNaN({
          typeName: ZodFirstPartyTypeKind.ZodNaN,
          ...processCreateParams(params)
        });
      };
      exports.BRAND = Symbol("zod_brand");
      var ZodBranded = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const data = ctx.data;
          return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
          });
        }
        unwrap() {
          return this._def.type;
        }
      };
      exports.ZodBranded = ZodBranded;
      var ZodPipeline = class _ZodPipeline extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.common.async) {
            const handleAsync = async () => {
              const inResult = await this._def.in._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (inResult.status === "aborted")
                return parseUtil_1.INVALID;
              if (inResult.status === "dirty") {
                status.dirty();
                return (0, parseUtil_1.DIRTY)(inResult.value);
              } else {
                return this._def.out._parseAsync({
                  data: inResult.value,
                  path: ctx.path,
                  parent: ctx
                });
              }
            };
            return handleAsync();
          } else {
            const inResult = this._def.in._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return parseUtil_1.INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return {
                status: "dirty",
                value: inResult.value
              };
            } else {
              return this._def.out._parseSync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          }
        }
        static create(a, b) {
          return new _ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
          });
        }
      };
      exports.ZodPipeline = ZodPipeline;
      var ZodReadonly = class extends ZodType {
        _parse(input) {
          const result = this._def.innerType._parse(input);
          const freeze = (data) => {
            if ((0, parseUtil_1.isValid)(data)) {
              data.value = Object.freeze(data.value);
            }
            return data;
          };
          return (0, parseUtil_1.isAsync)(result) ? result.then((data) => freeze(data)) : freeze(result);
        }
        unwrap() {
          return this._def.innerType;
        }
      };
      exports.ZodReadonly = ZodReadonly;
      ZodReadonly.create = (type, params) => {
        return new ZodReadonly({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodReadonly,
          ...processCreateParams(params)
        });
      };
      function custom(check, params = {}, fatal) {
        if (check)
          return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            if (!check(data)) {
              const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
              const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
              const p2 = typeof p === "string" ? { message: p } : p;
              ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
            }
          });
        return ZodAny.create();
      }
      exports.custom = custom;
      exports.late = {
        object: ZodObject.lazycreate
      };
      var ZodFirstPartyTypeKind;
      (function(ZodFirstPartyTypeKind2) {
        ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
        ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
        ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
        ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
        ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
        ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
        ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
        ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
        ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
        ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
        ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
        ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
        ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
        ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
        ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
        ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
        ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
        ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
        ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
        ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
        ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
        ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
        ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
        ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
        ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
        ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
        ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
        ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
        ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
        ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
        ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
        ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
        ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
        ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
        ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
        ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
      })(ZodFirstPartyTypeKind = exports.ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = {}));
      var instanceOfType = (cls, params = {
        message: `Input not instance of ${cls.name}`
      }) => custom((data) => data instanceof cls, params);
      exports.instanceof = instanceOfType;
      var stringType = ZodString.create;
      exports.string = stringType;
      var numberType = ZodNumber.create;
      exports.number = numberType;
      var nanType = ZodNaN.create;
      exports.nan = nanType;
      var bigIntType = ZodBigInt.create;
      exports.bigint = bigIntType;
      var booleanType = ZodBoolean.create;
      exports.boolean = booleanType;
      var dateType = ZodDate.create;
      exports.date = dateType;
      var symbolType = ZodSymbol.create;
      exports.symbol = symbolType;
      var undefinedType = ZodUndefined.create;
      exports.undefined = undefinedType;
      var nullType = ZodNull.create;
      exports.null = nullType;
      var anyType = ZodAny.create;
      exports.any = anyType;
      var unknownType = ZodUnknown.create;
      exports.unknown = unknownType;
      var neverType = ZodNever.create;
      exports.never = neverType;
      var voidType = ZodVoid.create;
      exports.void = voidType;
      var arrayType = ZodArray.create;
      exports.array = arrayType;
      var objectType = ZodObject.create;
      exports.object = objectType;
      var strictObjectType = ZodObject.strictCreate;
      exports.strictObject = strictObjectType;
      var unionType = ZodUnion.create;
      exports.union = unionType;
      var discriminatedUnionType = ZodDiscriminatedUnion.create;
      exports.discriminatedUnion = discriminatedUnionType;
      var intersectionType = ZodIntersection.create;
      exports.intersection = intersectionType;
      var tupleType = ZodTuple.create;
      exports.tuple = tupleType;
      var recordType = ZodRecord.create;
      exports.record = recordType;
      var mapType = ZodMap.create;
      exports.map = mapType;
      var setType = ZodSet.create;
      exports.set = setType;
      var functionType = ZodFunction.create;
      exports.function = functionType;
      var lazyType = ZodLazy.create;
      exports.lazy = lazyType;
      var literalType = ZodLiteral.create;
      exports.literal = literalType;
      var enumType = ZodEnum.create;
      exports.enum = enumType;
      var nativeEnumType = ZodNativeEnum.create;
      exports.nativeEnum = nativeEnumType;
      var promiseType = ZodPromise.create;
      exports.promise = promiseType;
      var effectsType = ZodEffects.create;
      exports.effect = effectsType;
      exports.transformer = effectsType;
      var optionalType = ZodOptional.create;
      exports.optional = optionalType;
      var nullableType = ZodNullable.create;
      exports.nullable = nullableType;
      var preprocessType = ZodEffects.createWithPreprocess;
      exports.preprocess = preprocessType;
      var pipelineType = ZodPipeline.create;
      exports.pipeline = pipelineType;
      var ostring = () => stringType().optional();
      exports.ostring = ostring;
      var onumber = () => numberType().optional();
      exports.onumber = onumber;
      var oboolean = () => booleanType().optional();
      exports.oboolean = oboolean;
      exports.coerce = {
        string: (arg) => ZodString.create({ ...arg, coerce: true }),
        number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
        boolean: (arg) => ZodBoolean.create({
          ...arg,
          coerce: true
        }),
        bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
        date: (arg) => ZodDate.create({ ...arg, coerce: true })
      };
      exports.NEVER = parseUtil_1.INVALID;
    }
  });

  // node_modules/zod/lib/external.js
  var require_external = __commonJS({
    "node_modules/zod/lib/external.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_errors(), exports);
      __exportStar(require_parseUtil(), exports);
      __exportStar(require_typeAliases(), exports);
      __exportStar(require_util(), exports);
      __exportStar(require_types(), exports);
      __exportStar(require_ZodError(), exports);
    }
  });

  // node_modules/zod/lib/index.js
  var require_lib = __commonJS({
    "node_modules/zod/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.z = void 0;
      var z = __importStar(require_external());
      exports.z = z;
      __exportStar(require_external(), exports);
      exports.default = z;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/any.js
  var require_any = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/any.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseAnyDef = void 0;
      function parseAnyDef() {
        return {};
      }
      exports.parseAnyDef = parseAnyDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/array.js
  var require_array = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseArrayDef = void 0;
      var zod_1 = require_lib();
      var errorMessages_js_1 = require_errorMessages();
      var parseDef_js_1 = require_parseDef();
      function parseArrayDef(def, refs) {
        var _a, _b;
        const res = {
          type: "array"
        };
        if (((_b = (_a = def.type) == null ? void 0 : _a._def) == null ? void 0 : _b.typeName) !== zod_1.ZodFirstPartyTypeKind.ZodAny) {
          res.items = (0, parseDef_js_1.parseDef)(def.type._def, {
            ...refs,
            currentPath: [...refs.currentPath, "items"]
          });
        }
        if (def.minLength) {
          (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minItems", def.minLength.value, def.minLength.message, refs);
        }
        if (def.maxLength) {
          (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
        }
        if (def.exactLength) {
          (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
          (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
        }
        return res;
      }
      exports.parseArrayDef = parseArrayDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/bigint.js
  var require_bigint = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/bigint.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseBigintDef = void 0;
      var errorMessages_js_1 = require_errorMessages();
      function parseBigintDef(def, refs) {
        const res = {
          type: "integer",
          format: "int64"
        };
        if (!def.checks)
          return res;
        for (const check of def.checks) {
          switch (check.kind) {
            case "min":
              if (refs.target === "jsonSchema7") {
                if (check.inclusive) {
                  (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minimum", check.value, check.message, refs);
                } else {
                  (0, errorMessages_js_1.setResponseValueAndErrors)(res, "exclusiveMinimum", check.value, check.message, refs);
                }
              } else {
                if (!check.inclusive) {
                  res.exclusiveMinimum = true;
                }
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minimum", check.value, check.message, refs);
              }
              break;
            case "max":
              if (refs.target === "jsonSchema7") {
                if (check.inclusive) {
                  (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maximum", check.value, check.message, refs);
                } else {
                  (0, errorMessages_js_1.setResponseValueAndErrors)(res, "exclusiveMaximum", check.value, check.message, refs);
                }
              } else {
                if (!check.inclusive) {
                  res.exclusiveMaximum = true;
                }
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maximum", check.value, check.message, refs);
              }
              break;
            case "multipleOf":
              (0, errorMessages_js_1.setResponseValueAndErrors)(res, "multipleOf", check.value, check.message, refs);
              break;
          }
        }
        return res;
      }
      exports.parseBigintDef = parseBigintDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/boolean.js
  var require_boolean = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/boolean.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseBooleanDef = void 0;
      function parseBooleanDef() {
        return {
          type: "boolean"
        };
      }
      exports.parseBooleanDef = parseBooleanDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/branded.js
  var require_branded = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/branded.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseBrandedDef = void 0;
      var parseDef_js_1 = require_parseDef();
      function parseBrandedDef(_def, refs) {
        return (0, parseDef_js_1.parseDef)(_def.type._def, refs);
      }
      exports.parseBrandedDef = parseBrandedDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/catch.js
  var require_catch = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/catch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseCatchDef = void 0;
      var parseDef_js_1 = require_parseDef();
      var parseCatchDef = (def, refs) => {
        return (0, parseDef_js_1.parseDef)(def.innerType._def, refs);
      };
      exports.parseCatchDef = parseCatchDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/date.js
  var require_date = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/date.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseDateDef = void 0;
      var errorMessages_js_1 = require_errorMessages();
      function parseDateDef(def, refs, overrideDateStrategy) {
        const strategy = overrideDateStrategy ?? refs.dateStrategy;
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
            return integerDateParser(def, refs);
        }
      }
      exports.parseDateDef = parseDateDef;
      var integerDateParser = (def, refs) => {
        const res = {
          type: "integer",
          format: "unix-time"
        };
        if (refs.target === "openApi3") {
          return res;
        }
        for (const check of def.checks) {
          switch (check.kind) {
            case "min":
              (0, errorMessages_js_1.setResponseValueAndErrors)(
                res,
                "minimum",
                check.value,
                // This is in milliseconds
                check.message,
                refs
              );
              break;
            case "max":
              (0, errorMessages_js_1.setResponseValueAndErrors)(
                res,
                "maximum",
                check.value,
                // This is in milliseconds
                check.message,
                refs
              );
              break;
          }
        }
        return res;
      };
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/default.js
  var require_default = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/default.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseDefaultDef = void 0;
      var parseDef_js_1 = require_parseDef();
      function parseDefaultDef(_def, refs) {
        return {
          ...(0, parseDef_js_1.parseDef)(_def.innerType._def, refs),
          default: _def.defaultValue()
        };
      }
      exports.parseDefaultDef = parseDefaultDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/effects.js
  var require_effects = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/effects.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseEffectsDef = void 0;
      var parseDef_js_1 = require_parseDef();
      function parseEffectsDef(_def, refs) {
        return refs.effectStrategy === "input" ? (0, parseDef_js_1.parseDef)(_def.schema._def, refs) : {};
      }
      exports.parseEffectsDef = parseEffectsDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/enum.js
  var require_enum = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/enum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseEnumDef = void 0;
      function parseEnumDef(def) {
        return {
          type: "string",
          enum: def.values
        };
      }
      exports.parseEnumDef = parseEnumDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/intersection.js
  var require_intersection = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/intersection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseIntersectionDef = void 0;
      var parseDef_js_1 = require_parseDef();
      var isJsonSchema7AllOfType = (type) => {
        if ("type" in type && type.type === "string")
          return false;
        return "allOf" in type;
      };
      function parseIntersectionDef(def, refs) {
        const allOf = [
          (0, parseDef_js_1.parseDef)(def.left._def, {
            ...refs,
            currentPath: [...refs.currentPath, "allOf", "0"]
          }),
          (0, parseDef_js_1.parseDef)(def.right._def, {
            ...refs,
            currentPath: [...refs.currentPath, "allOf", "1"]
          })
        ].filter((x) => !!x);
        let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
        const mergedAllOf = [];
        allOf.forEach((schema) => {
          if (isJsonSchema7AllOfType(schema)) {
            mergedAllOf.push(...schema.allOf);
            if (schema.unevaluatedProperties === void 0) {
              unevaluatedProperties = void 0;
            }
          } else {
            let nestedSchema = schema;
            if ("additionalProperties" in schema && schema.additionalProperties === false) {
              const { additionalProperties, ...rest } = schema;
              nestedSchema = rest;
            } else {
              unevaluatedProperties = void 0;
            }
            mergedAllOf.push(nestedSchema);
          }
        });
        return mergedAllOf.length ? {
          allOf: mergedAllOf,
          ...unevaluatedProperties
        } : void 0;
      }
      exports.parseIntersectionDef = parseIntersectionDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/literal.js
  var require_literal = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/literal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseLiteralDef = void 0;
      function parseLiteralDef(def, refs) {
        const parsedType = typeof def.value;
        if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
          return {
            type: Array.isArray(def.value) ? "array" : "object"
          };
        }
        if (refs.target === "openApi3") {
          return {
            type: parsedType === "bigint" ? "integer" : parsedType,
            enum: [def.value]
          };
        }
        return {
          type: parsedType === "bigint" ? "integer" : parsedType,
          const: def.value
        };
      }
      exports.parseLiteralDef = parseLiteralDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/string.js
  var require_string = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseStringDef = exports.zodPatterns = void 0;
      var errorMessages_js_1 = require_errorMessages();
      exports.zodPatterns = {
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
         */
        emoji: RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"),
        /**
         * Unused
         */
        uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
        /**
         * Unused
         */
        ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        /**
         * Unused
         */
        ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        nanoid: /^[a-zA-Z0-9_-]{21}$/
      };
      function parseStringDef(def, refs) {
        const res = {
          type: "string"
        };
        function processPattern(value) {
          return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(value) : value;
        }
        if (def.checks) {
          for (const check of def.checks) {
            switch (check.kind) {
              case "min":
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
                break;
              case "max":
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
                break;
              case "email":
                switch (refs.emailStrategy) {
                  case "format:email":
                    addFormat(res, "email", check.message, refs);
                    break;
                  case "format:idn-email":
                    addFormat(res, "idn-email", check.message, refs);
                    break;
                  case "pattern:zod":
                    addPattern(res, exports.zodPatterns.email, check.message, refs);
                    break;
                }
                break;
              case "url":
                addFormat(res, "uri", check.message, refs);
                break;
              case "uuid":
                addFormat(res, "uuid", check.message, refs);
                break;
              case "regex":
                addPattern(res, check.regex, check.message, refs);
                break;
              case "cuid":
                addPattern(res, exports.zodPatterns.cuid, check.message, refs);
                break;
              case "cuid2":
                addPattern(res, exports.zodPatterns.cuid2, check.message, refs);
                break;
              case "startsWith":
                addPattern(res, RegExp(`^${processPattern(check.value)}`), check.message, refs);
                break;
              case "endsWith":
                addPattern(res, RegExp(`${processPattern(check.value)}$`), check.message, refs);
                break;
              case "datetime":
                addFormat(res, "date-time", check.message, refs);
                break;
              case "date":
                addFormat(res, "date", check.message, refs);
                break;
              case "time":
                addFormat(res, "time", check.message, refs);
                break;
              case "duration":
                addFormat(res, "duration", check.message, refs);
                break;
              case "length":
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
                break;
              case "includes": {
                addPattern(res, RegExp(processPattern(check.value)), check.message, refs);
                break;
              }
              case "ip": {
                if (check.version !== "v6") {
                  addFormat(res, "ipv4", check.message, refs);
                }
                if (check.version !== "v4") {
                  addFormat(res, "ipv6", check.message, refs);
                }
                break;
              }
              case "emoji":
                addPattern(res, exports.zodPatterns.emoji, check.message, refs);
                break;
              case "ulid": {
                addPattern(res, exports.zodPatterns.ulid, check.message, refs);
                break;
              }
              case "base64": {
                switch (refs.base64Strategy) {
                  case "format:binary": {
                    addFormat(res, "binary", check.message, refs);
                    break;
                  }
                  case "contentEncoding:base64": {
                    (0, errorMessages_js_1.setResponseValueAndErrors)(res, "contentEncoding", "base64", check.message, refs);
                    break;
                  }
                  case "pattern:zod": {
                    addPattern(res, exports.zodPatterns.base64, check.message, refs);
                    break;
                  }
                }
                break;
              }
              case "nanoid": {
                addPattern(res, exports.zodPatterns.nanoid, check.message, refs);
              }
              case "toLowerCase":
              case "toUpperCase":
              case "trim":
                break;
              default:
                /* @__PURE__ */ ((_) => {
                })(check);
            }
          }
        }
        return res;
      }
      exports.parseStringDef = parseStringDef;
      var escapeNonAlphaNumeric = (value) => Array.from(value).map((c) => /[a-zA-Z0-9]/.test(c) ? c : `\\${c}`).join("");
      var addFormat = (schema, value, message, refs) => {
        var _a;
        if (schema.format || ((_a = schema.anyOf) == null ? void 0 : _a.some((x) => x.format))) {
          if (!schema.anyOf) {
            schema.anyOf = [];
          }
          if (schema.format) {
            schema.anyOf.push({
              format: schema.format,
              ...schema.errorMessage && refs.errorMessages && {
                errorMessage: { format: schema.errorMessage.format }
              }
            });
            delete schema.format;
            if (schema.errorMessage) {
              delete schema.errorMessage.format;
              if (Object.keys(schema.errorMessage).length === 0) {
                delete schema.errorMessage;
              }
            }
          }
          schema.anyOf.push({
            format: value,
            ...message && refs.errorMessages && { errorMessage: { format: message } }
          });
        } else {
          (0, errorMessages_js_1.setResponseValueAndErrors)(schema, "format", value, message, refs);
        }
      };
      var addPattern = (schema, regex, message, refs) => {
        var _a;
        if (schema.pattern || ((_a = schema.allOf) == null ? void 0 : _a.some((x) => x.pattern))) {
          if (!schema.allOf) {
            schema.allOf = [];
          }
          if (schema.pattern) {
            schema.allOf.push({
              pattern: schema.pattern,
              ...schema.errorMessage && refs.errorMessages && {
                errorMessage: { pattern: schema.errorMessage.pattern }
              }
            });
            delete schema.pattern;
            if (schema.errorMessage) {
              delete schema.errorMessage.pattern;
              if (Object.keys(schema.errorMessage).length === 0) {
                delete schema.errorMessage;
              }
            }
          }
          schema.allOf.push({
            pattern: processRegExp(regex, refs),
            ...message && refs.errorMessages && { errorMessage: { pattern: message } }
          });
        } else {
          (0, errorMessages_js_1.setResponseValueAndErrors)(schema, "pattern", processRegExp(regex, refs), message, refs);
        }
      };
      var processRegExp = (regex, refs) => {
        var _a;
        if (!refs.applyRegexFlags || !regex.flags)
          return regex.source;
        const flags = {
          i: regex.flags.includes("i"),
          m: regex.flags.includes("m"),
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
                } else if (source[i + 1] === "-" && ((_a = source[i + 2]) == null ? void 0 : _a.match(/[a-z]/))) {
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
          const regexTest = new RegExp(pattern);
        } catch {
          console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
          return regex.source;
        }
        return pattern;
      };
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/record.js
  var require_record = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/record.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseRecordDef = void 0;
      var zod_1 = require_lib();
      var parseDef_js_1 = require_parseDef();
      var string_js_1 = require_string();
      function parseRecordDef(def, refs) {
        var _a, _b, _c, _d;
        if (refs.target === "openApi3" && ((_a = def.keyType) == null ? void 0 : _a._def.typeName) === zod_1.ZodFirstPartyTypeKind.ZodEnum) {
          return {
            type: "object",
            required: def.keyType._def.values,
            properties: def.keyType._def.values.reduce((acc, key) => ({
              ...acc,
              [key]: (0, parseDef_js_1.parseDef)(def.valueType._def, {
                ...refs,
                currentPath: [...refs.currentPath, "properties", key]
              }) ?? {}
            }), {}),
            additionalProperties: false
          };
        }
        const schema = {
          type: "object",
          additionalProperties: (0, parseDef_js_1.parseDef)(def.valueType._def, {
            ...refs,
            currentPath: [...refs.currentPath, "additionalProperties"]
          }) ?? {}
        };
        if (refs.target === "openApi3") {
          return schema;
        }
        if (((_b = def.keyType) == null ? void 0 : _b._def.typeName) === zod_1.ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
          const keyType = Object.entries((0, string_js_1.parseStringDef)(def.keyType._def, refs)).reduce((acc, [key, value]) => key === "type" ? acc : { ...acc, [key]: value }, {});
          return {
            ...schema,
            propertyNames: keyType
          };
        } else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === zod_1.ZodFirstPartyTypeKind.ZodEnum) {
          return {
            ...schema,
            propertyNames: {
              enum: def.keyType._def.values
            }
          };
        }
        return schema;
      }
      exports.parseRecordDef = parseRecordDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/map.js
  var require_map = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/map.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseMapDef = void 0;
      var parseDef_js_1 = require_parseDef();
      var record_js_1 = require_record();
      function parseMapDef(def, refs) {
        if (refs.mapStrategy === "record") {
          return (0, record_js_1.parseRecordDef)(def, refs);
        }
        const keys = (0, parseDef_js_1.parseDef)(def.keyType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", "items", "0"]
        }) || {};
        const values = (0, parseDef_js_1.parseDef)(def.valueType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", "items", "1"]
        }) || {};
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
      exports.parseMapDef = parseMapDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/nativeEnum.js
  var require_nativeEnum = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/nativeEnum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseNativeEnumDef = void 0;
      function parseNativeEnumDef(def) {
        const object = def.values;
        const actualKeys = Object.keys(def.values).filter((key) => {
          return typeof object[object[key]] !== "number";
        });
        const actualValues = actualKeys.map((key) => object[key]);
        const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
        return {
          type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
          enum: actualValues
        };
      }
      exports.parseNativeEnumDef = parseNativeEnumDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/never.js
  var require_never = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/never.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseNeverDef = void 0;
      function parseNeverDef() {
        return {
          not: {}
        };
      }
      exports.parseNeverDef = parseNeverDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/null.js
  var require_null = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/null.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseNullDef = void 0;
      function parseNullDef(refs) {
        return refs.target === "openApi3" ? {
          enum: ["null"],
          nullable: true
        } : {
          type: "null"
        };
      }
      exports.parseNullDef = parseNullDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/union.js
  var require_union = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/union.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseUnionDef = exports.primitiveMappings = void 0;
      var parseDef_js_1 = require_parseDef();
      exports.primitiveMappings = {
        ZodString: "string",
        ZodNumber: "number",
        ZodBigInt: "integer",
        ZodBoolean: "boolean",
        ZodNull: "null"
      };
      function parseUnionDef(def, refs) {
        if (refs.target === "openApi3")
          return asAnyOf(def, refs);
        const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
        if (options.every((x) => x._def.typeName in exports.primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
          const types = options.reduce((types2, x) => {
            const type = exports.primitiveMappings[x._def.typeName];
            return type && !types2.includes(type) ? [...types2, type] : types2;
          }, []);
          return {
            type: types.length > 1 ? types : types[0]
          };
        } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
          const types = options.reduce((acc, x) => {
            const type = typeof x._def.value;
            switch (type) {
              case "string":
              case "number":
              case "boolean":
                return [...acc, type];
              case "bigint":
                return [...acc, "integer"];
              case "object":
                if (x._def.value === null)
                  return [...acc, "null"];
              case "symbol":
              case "undefined":
              case "function":
              default:
                return acc;
            }
          }, []);
          if (types.length === options.length) {
            const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
            return {
              type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
              enum: options.reduce((acc, x) => {
                return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
              }, [])
            };
          }
        } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
          return {
            type: "string",
            enum: options.reduce((acc, x) => [
              ...acc,
              ...x._def.values.filter((x2) => !acc.includes(x2))
            ], [])
          };
        }
        return asAnyOf(def, refs);
      }
      exports.parseUnionDef = parseUnionDef;
      var asAnyOf = (def, refs) => {
        const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => (0, parseDef_js_1.parseDef)(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "anyOf", `${i}`]
        })).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
        return anyOf.length ? { anyOf } : void 0;
      };
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/nullable.js
  var require_nullable = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/nullable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseNullableDef = void 0;
      var parseDef_js_1 = require_parseDef();
      var union_js_1 = require_union();
      function parseNullableDef(def, refs) {
        if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
          if (refs.target === "openApi3") {
            return {
              type: union_js_1.primitiveMappings[def.innerType._def.typeName],
              nullable: true
            };
          }
          return {
            type: [
              union_js_1.primitiveMappings[def.innerType._def.typeName],
              "null"
            ]
          };
        }
        if (refs.target === "openApi3") {
          const base2 = (0, parseDef_js_1.parseDef)(def.innerType._def, {
            ...refs,
            currentPath: [...refs.currentPath]
          });
          if (base2 && "$ref" in base2)
            return { allOf: [base2], nullable: true };
          return base2 && { ...base2, nullable: true };
        }
        const base = (0, parseDef_js_1.parseDef)(def.innerType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "anyOf", "0"]
        });
        return base && { anyOf: [base, { type: "null" }] };
      }
      exports.parseNullableDef = parseNullableDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/number.js
  var require_number = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/number.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseNumberDef = void 0;
      var errorMessages_js_1 = require_errorMessages();
      function parseNumberDef(def, refs) {
        const res = {
          type: "number"
        };
        if (!def.checks)
          return res;
        for (const check of def.checks) {
          switch (check.kind) {
            case "int":
              res.type = "integer";
              (0, errorMessages_js_1.addErrorMessage)(res, "type", check.message, refs);
              break;
            case "min":
              if (refs.target === "jsonSchema7") {
                if (check.inclusive) {
                  (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minimum", check.value, check.message, refs);
                } else {
                  (0, errorMessages_js_1.setResponseValueAndErrors)(res, "exclusiveMinimum", check.value, check.message, refs);
                }
              } else {
                if (!check.inclusive) {
                  res.exclusiveMinimum = true;
                }
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "minimum", check.value, check.message, refs);
              }
              break;
            case "max":
              if (refs.target === "jsonSchema7") {
                if (check.inclusive) {
                  (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maximum", check.value, check.message, refs);
                } else {
                  (0, errorMessages_js_1.setResponseValueAndErrors)(res, "exclusiveMaximum", check.value, check.message, refs);
                }
              } else {
                if (!check.inclusive) {
                  res.exclusiveMaximum = true;
                }
                (0, errorMessages_js_1.setResponseValueAndErrors)(res, "maximum", check.value, check.message, refs);
              }
              break;
            case "multipleOf":
              (0, errorMessages_js_1.setResponseValueAndErrors)(res, "multipleOf", check.value, check.message, refs);
              break;
          }
        }
        return res;
      }
      exports.parseNumberDef = parseNumberDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/object.js
  var require_object = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/object.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseObjectDef = exports.parseObjectDefX = void 0;
      var parseDef_js_1 = require_parseDef();
      function decideAdditionalProperties(def, refs) {
        if (refs.removeAdditionalStrategy === "strict") {
          return def.catchall._def.typeName === "ZodNever" ? def.unknownKeys !== "strict" : (0, parseDef_js_1.parseDef)(def.catchall._def, {
            ...refs,
            currentPath: [...refs.currentPath, "additionalProperties"]
          }) ?? true;
        } else {
          return def.catchall._def.typeName === "ZodNever" ? def.unknownKeys === "passthrough" : (0, parseDef_js_1.parseDef)(def.catchall._def, {
            ...refs,
            currentPath: [...refs.currentPath, "additionalProperties"]
          }) ?? true;
        }
      }
      function parseObjectDefX(def, refs) {
        Object.keys(def.shape()).reduce((schema, key) => {
          let prop = def.shape()[key];
          const isOptional = prop.isOptional();
          if (!isOptional) {
            prop = { ...prop._def.innerSchema };
          }
          const propSchema = (0, parseDef_js_1.parseDef)(prop._def, {
            ...refs,
            currentPath: [...refs.currentPath, "properties", key],
            propertyPath: [...refs.currentPath, "properties", key]
          });
          if (propSchema !== void 0) {
            schema.properties[key] = propSchema;
            if (!isOptional) {
              if (!schema.required) {
                schema.required = [];
              }
              schema.required.push(key);
            }
          }
          return schema;
        }, {
          type: "object",
          properties: {},
          additionalProperties: decideAdditionalProperties(def, refs)
        });
        const result = {
          type: "object",
          ...Object.entries(def.shape()).reduce((acc, [propName, propDef]) => {
            if (propDef === void 0 || propDef._def === void 0)
              return acc;
            const parsedDef = (0, parseDef_js_1.parseDef)(propDef._def, {
              ...refs,
              currentPath: [...refs.currentPath, "properties", propName],
              propertyPath: [...refs.currentPath, "properties", propName]
            });
            if (parsedDef === void 0)
              return acc;
            return {
              properties: { ...acc.properties, [propName]: parsedDef },
              required: propDef.isOptional() ? acc.required : [...acc.required, propName]
            };
          }, { properties: {}, required: [] }),
          additionalProperties: decideAdditionalProperties(def, refs)
        };
        if (!result.required.length)
          delete result.required;
        return result;
      }
      exports.parseObjectDefX = parseObjectDefX;
      function parseObjectDef(def, refs) {
        const result = {
          type: "object",
          ...Object.entries(def.shape()).reduce((acc, [propName, propDef]) => {
            if (propDef === void 0 || propDef._def === void 0)
              return acc;
            const parsedDef = (0, parseDef_js_1.parseDef)(propDef._def, {
              ...refs,
              currentPath: [...refs.currentPath, "properties", propName],
              propertyPath: [...refs.currentPath, "properties", propName]
            });
            if (parsedDef === void 0)
              return acc;
            return {
              properties: { ...acc.properties, [propName]: parsedDef },
              required: propDef.isOptional() ? acc.required : [...acc.required, propName]
            };
          }, { properties: {}, required: [] }),
          additionalProperties: decideAdditionalProperties(def, refs)
        };
        if (!result.required.length)
          delete result.required;
        return result;
      }
      exports.parseObjectDef = parseObjectDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/optional.js
  var require_optional = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/optional.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseOptionalDef = void 0;
      var parseDef_js_1 = require_parseDef();
      var parseOptionalDef = (def, refs) => {
        var _a;
        if (refs.currentPath.toString() === ((_a = refs.propertyPath) == null ? void 0 : _a.toString())) {
          return (0, parseDef_js_1.parseDef)(def.innerType._def, refs);
        }
        const innerSchema = (0, parseDef_js_1.parseDef)(def.innerType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "anyOf", "1"]
        });
        return innerSchema ? {
          anyOf: [
            {
              not: {}
            },
            innerSchema
          ]
        } : {};
      };
      exports.parseOptionalDef = parseOptionalDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/pipeline.js
  var require_pipeline = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/pipeline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parsePipelineDef = void 0;
      var parseDef_js_1 = require_parseDef();
      var parsePipelineDef = (def, refs) => {
        if (refs.pipeStrategy === "input") {
          return (0, parseDef_js_1.parseDef)(def.in._def, refs);
        } else if (refs.pipeStrategy === "output") {
          return (0, parseDef_js_1.parseDef)(def.out._def, refs);
        }
        const a = (0, parseDef_js_1.parseDef)(def.in._def, {
          ...refs,
          currentPath: [...refs.currentPath, "allOf", "0"]
        });
        const b = (0, parseDef_js_1.parseDef)(def.out._def, {
          ...refs,
          currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
        });
        return {
          allOf: [a, b].filter((x) => x !== void 0)
        };
      };
      exports.parsePipelineDef = parsePipelineDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/promise.js
  var require_promise = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/promise.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parsePromiseDef = void 0;
      var parseDef_js_1 = require_parseDef();
      function parsePromiseDef(def, refs) {
        return (0, parseDef_js_1.parseDef)(def.type._def, refs);
      }
      exports.parsePromiseDef = parsePromiseDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/set.js
  var require_set = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/set.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseSetDef = void 0;
      var errorMessages_js_1 = require_errorMessages();
      var parseDef_js_1 = require_parseDef();
      function parseSetDef(def, refs) {
        const items = (0, parseDef_js_1.parseDef)(def.valueType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items"]
        });
        const schema = {
          type: "array",
          uniqueItems: true,
          items
        };
        if (def.minSize) {
          (0, errorMessages_js_1.setResponseValueAndErrors)(schema, "minItems", def.minSize.value, def.minSize.message, refs);
        }
        if (def.maxSize) {
          (0, errorMessages_js_1.setResponseValueAndErrors)(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
        }
        return schema;
      }
      exports.parseSetDef = parseSetDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/tuple.js
  var require_tuple = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/tuple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseTupleDef = void 0;
      var parseDef_js_1 = require_parseDef();
      function parseTupleDef(def, refs) {
        if (def.rest) {
          return {
            type: "array",
            minItems: def.items.length,
            items: def.items.map((x, i) => (0, parseDef_js_1.parseDef)(x._def, {
              ...refs,
              currentPath: [...refs.currentPath, "items", `${i}`]
            })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
            additionalItems: (0, parseDef_js_1.parseDef)(def.rest._def, {
              ...refs,
              currentPath: [...refs.currentPath, "additionalItems"]
            })
          };
        } else {
          return {
            type: "array",
            minItems: def.items.length,
            maxItems: def.items.length,
            items: def.items.map((x, i) => (0, parseDef_js_1.parseDef)(x._def, {
              ...refs,
              currentPath: [...refs.currentPath, "items", `${i}`]
            })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
          };
        }
      }
      exports.parseTupleDef = parseTupleDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/undefined.js
  var require_undefined = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/undefined.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseUndefinedDef = void 0;
      function parseUndefinedDef() {
        return {
          not: {}
        };
      }
      exports.parseUndefinedDef = parseUndefinedDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/unknown.js
  var require_unknown = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/unknown.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseUnknownDef = void 0;
      function parseUnknownDef() {
        return {};
      }
      exports.parseUnknownDef = parseUnknownDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parsers/readonly.js
  var require_readonly = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parsers/readonly.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseReadonlyDef = void 0;
      var parseDef_js_1 = require_parseDef();
      var parseReadonlyDef = (def, refs) => {
        return (0, parseDef_js_1.parseDef)(def.innerType._def, refs);
      };
      exports.parseReadonlyDef = parseReadonlyDef;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/parseDef.js
  var require_parseDef = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/parseDef.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseDef = void 0;
      var zod_1 = require_lib();
      var any_js_1 = require_any();
      var array_js_1 = require_array();
      var bigint_js_1 = require_bigint();
      var boolean_js_1 = require_boolean();
      var branded_js_1 = require_branded();
      var catch_js_1 = require_catch();
      var date_js_1 = require_date();
      var default_js_1 = require_default();
      var effects_js_1 = require_effects();
      var enum_js_1 = require_enum();
      var intersection_js_1 = require_intersection();
      var literal_js_1 = require_literal();
      var map_js_1 = require_map();
      var nativeEnum_js_1 = require_nativeEnum();
      var never_js_1 = require_never();
      var null_js_1 = require_null();
      var nullable_js_1 = require_nullable();
      var number_js_1 = require_number();
      var object_js_1 = require_object();
      var optional_js_1 = require_optional();
      var pipeline_js_1 = require_pipeline();
      var promise_js_1 = require_promise();
      var record_js_1 = require_record();
      var set_js_1 = require_set();
      var string_js_1 = require_string();
      var tuple_js_1 = require_tuple();
      var undefined_js_1 = require_undefined();
      var union_js_1 = require_union();
      var unknown_js_1 = require_unknown();
      var readonly_js_1 = require_readonly();
      var Options_js_1 = require_Options();
      function parseDef(def, refs, forceResolution = false) {
        var _a;
        const seenItem = refs.seen.get(def);
        if (refs.override) {
          const overrideResult = (_a = refs.override) == null ? void 0 : _a.call(refs, def, refs, seenItem, forceResolution);
          if (overrideResult !== Options_js_1.ignoreOverride) {
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
        const jsonSchema = selectParser(def, def.typeName, refs);
        if (jsonSchema) {
          addMeta(def, refs, jsonSchema);
        }
        newItem.jsonSchema = jsonSchema;
        return jsonSchema;
      }
      exports.parseDef = parseDef;
      var get$ref = (item, refs) => {
        switch (refs.$refStrategy) {
          case "root":
            return { $ref: item.path.join("/") };
          case "relative":
            return { $ref: getRelativePath(refs.currentPath, item.path) };
          case "none":
          case "seen": {
            if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
              console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
              return {};
            }
            return refs.$refStrategy === "seen" ? {} : void 0;
          }
        }
      };
      var getRelativePath = (pathA, pathB) => {
        let i = 0;
        for (; i < pathA.length && i < pathB.length; i++) {
          if (pathA[i] !== pathB[i])
            break;
        }
        return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
      };
      var selectParser = (def, typeName, refs) => {
        switch (typeName) {
          case zod_1.ZodFirstPartyTypeKind.ZodString:
            return (0, string_js_1.parseStringDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodNumber:
            return (0, number_js_1.parseNumberDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodObject:
            return (0, object_js_1.parseObjectDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodBigInt:
            return (0, bigint_js_1.parseBigintDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodBoolean:
            return (0, boolean_js_1.parseBooleanDef)();
          case zod_1.ZodFirstPartyTypeKind.ZodDate:
            return (0, date_js_1.parseDateDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodUndefined:
            return (0, undefined_js_1.parseUndefinedDef)();
          case zod_1.ZodFirstPartyTypeKind.ZodNull:
            return (0, null_js_1.parseNullDef)(refs);
          case zod_1.ZodFirstPartyTypeKind.ZodArray:
            return (0, array_js_1.parseArrayDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodUnion:
          case zod_1.ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
            return (0, union_js_1.parseUnionDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodIntersection:
            return (0, intersection_js_1.parseIntersectionDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodTuple:
            return (0, tuple_js_1.parseTupleDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodRecord:
            return (0, record_js_1.parseRecordDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodLiteral:
            return (0, literal_js_1.parseLiteralDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodEnum:
            return (0, enum_js_1.parseEnumDef)(def);
          case zod_1.ZodFirstPartyTypeKind.ZodNativeEnum:
            return (0, nativeEnum_js_1.parseNativeEnumDef)(def);
          case zod_1.ZodFirstPartyTypeKind.ZodNullable:
            return (0, nullable_js_1.parseNullableDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodOptional:
            return (0, optional_js_1.parseOptionalDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodMap:
            return (0, map_js_1.parseMapDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodSet:
            return (0, set_js_1.parseSetDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodLazy:
            return parseDef(def.getter()._def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodPromise:
            return (0, promise_js_1.parsePromiseDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodNaN:
          case zod_1.ZodFirstPartyTypeKind.ZodNever:
            return (0, never_js_1.parseNeverDef)();
          case zod_1.ZodFirstPartyTypeKind.ZodEffects:
            return (0, effects_js_1.parseEffectsDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodAny:
            return (0, any_js_1.parseAnyDef)();
          case zod_1.ZodFirstPartyTypeKind.ZodUnknown:
            return (0, unknown_js_1.parseUnknownDef)();
          case zod_1.ZodFirstPartyTypeKind.ZodDefault:
            return (0, default_js_1.parseDefaultDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodBranded:
            return (0, branded_js_1.parseBrandedDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodReadonly:
            return (0, readonly_js_1.parseReadonlyDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodCatch:
            return (0, catch_js_1.parseCatchDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodPipeline:
            return (0, pipeline_js_1.parsePipelineDef)(def, refs);
          case zod_1.ZodFirstPartyTypeKind.ZodFunction:
          case zod_1.ZodFirstPartyTypeKind.ZodVoid:
          case zod_1.ZodFirstPartyTypeKind.ZodSymbol:
            return void 0;
          default:
            return /* @__PURE__ */ ((_) => void 0)(typeName);
        }
      };
      var addMeta = (def, refs, jsonSchema) => {
        if (def.description) {
          jsonSchema.description = def.description;
          if (refs.markdownDescription) {
            jsonSchema.markdownDescription = def.description;
          }
        }
        return jsonSchema;
      };
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/zodToJsonSchema.js
  var require_zodToJsonSchema = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/zodToJsonSchema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.zodToJsonSchema = void 0;
      var parseDef_js_1 = require_parseDef();
      var Refs_js_1 = require_Refs();
      var zodToJsonSchema = (schema, options) => {
        const refs = (0, Refs_js_1.getRefs)(options);
        const definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2]) => ({
          ...acc,
          [name2]: (0, parseDef_js_1.parseDef)(schema2._def, {
            ...refs,
            currentPath: [...refs.basePath, refs.definitionPath, name2]
          }, true) ?? {}
        }), {}) : void 0;
        const name = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
        const main = (0, parseDef_js_1.parseDef)(schema._def, name === void 0 ? refs : {
          ...refs,
          currentPath: [...refs.basePath, refs.definitionPath, name]
        }, false) ?? {};
        const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
        if (title !== void 0) {
          main.title = title;
        }
        const combined = name === void 0 ? definitions ? {
          ...main,
          [refs.definitionPath]: definitions
        } : main : {
          $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name
          ].join("/"),
          [refs.definitionPath]: {
            ...definitions,
            [name]: main
          }
        };
        if (refs.target === "jsonSchema7") {
          combined.$schema = "http://json-schema.org/draft-07/schema#";
        } else if (refs.target === "jsonSchema2019-09") {
          combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
        }
        return combined;
      };
      exports.zodToJsonSchema = zodToJsonSchema;
    }
  });

  // node_modules/zod-to-json-schema/dist/cjs/index.js
  var require_cjs = __commonJS({
    "node_modules/zod-to-json-schema/dist/cjs/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Options(), exports);
      __exportStar(require_Refs(), exports);
      __exportStar(require_errorMessages(), exports);
      __exportStar(require_parseDef(), exports);
      __exportStar(require_any(), exports);
      __exportStar(require_array(), exports);
      __exportStar(require_bigint(), exports);
      __exportStar(require_boolean(), exports);
      __exportStar(require_branded(), exports);
      __exportStar(require_catch(), exports);
      __exportStar(require_date(), exports);
      __exportStar(require_default(), exports);
      __exportStar(require_effects(), exports);
      __exportStar(require_enum(), exports);
      __exportStar(require_intersection(), exports);
      __exportStar(require_literal(), exports);
      __exportStar(require_map(), exports);
      __exportStar(require_nativeEnum(), exports);
      __exportStar(require_never(), exports);
      __exportStar(require_null(), exports);
      __exportStar(require_nullable(), exports);
      __exportStar(require_number(), exports);
      __exportStar(require_object(), exports);
      __exportStar(require_optional(), exports);
      __exportStar(require_pipeline(), exports);
      __exportStar(require_promise(), exports);
      __exportStar(require_readonly(), exports);
      __exportStar(require_record(), exports);
      __exportStar(require_set(), exports);
      __exportStar(require_string(), exports);
      __exportStar(require_tuple(), exports);
      __exportStar(require_undefined(), exports);
      __exportStar(require_union(), exports);
      __exportStar(require_unknown(), exports);
      __exportStar(require_zodToJsonSchema(), exports);
      var zodToJsonSchema_js_1 = require_zodToJsonSchema();
      exports.default = zodToJsonSchema_js_1.zodToJsonSchema;
    }
  });

  // node_modules/@scoopika/client/index.js
  var require_client = __commonJS({
    "node_modules/@scoopika/client/index.js"(exports, module) {
      "use strict";
      var __create2 = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf2 = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
      var src_exports2 = {};
      __export2(src_exports2, {
        Agent: () => agent_default,
        Box: () => box_default,
        Client: () => client_default,
        RunAudioPlayer: () => audio_player_default,
        Store: () => store_default,
        VoiceRecorder: () => voice_recorder_default,
        VoiceVisualizer: () => visualizer_default,
        createAIButton: () => createAIButton,
        createAIInput: () => createAIInput,
        createAction: () => createAction
      });
      module.exports = __toCommonJS2(src_exports2);
      function streamMessages(stream) {
        const messages = [];
        const streamRegex = /<SCOOPSTREAM>(.*?)<\/SCOOPSTREAM>/gs;
        let match;
        while ((match = streamRegex.exec(stream)) !== null) {
          messages.push(match[1]);
        }
        return messages;
      }
      async function executeStreamHooks(value, hooks) {
        const stream = JSON.parse(value);
        const type = stream.type;
        const data = stream.data;
        const mappings = {
          start: hooks.onStart,
          stream: hooks.onStream,
          response: hooks.onFinish,
          token: hooks.onToken,
          audio: hooks.onAudio,
          tool_call: hooks.onToolCall,
          tool_result: hooks.onToolResult,
          agent_response: hooks.onAgentResponse,
          error: hooks.onError,
          select_agent: hooks.onSelectAgent,
          box_response: hooks.onBoxFinish,
          client_action: hooks.onClientSideAction,
          end: void 0,
          generated_json: void 0
          // support coming soon
        };
        const func = mappings[type];
        if (func && typeof func === "function") {
          await func(data);
        }
      }
      async function readStreamChunk(chunk, callback, pre) {
        if (!chunk.value) {
          return;
        }
        const decoder = new TextDecoder();
        let value = decoder.decode(chunk.value);
        if (value.startsWith("<SCOOPSTREAM>") && pre) {
          console.warn("There was a lost stream chunk that did not end");
          pre = void 0;
        }
        value = (pre || "") + value;
        const stream_messages = streamMessages(value);
        if (value.startsWith("<SCOOPSTREAM>") && stream_messages.length < 1) {
          return value;
        }
        for await (const message of stream_messages) {
          await callback(message);
        }
      }
      var Store = class {
        client;
        constructor(client) {
          this.client = client;
        }
        async getSession(id, allow_new) {
          let response = "";
          const onMessage = (s) => {
            response += s;
          };
          const req = {
            type: "get_session",
            payload: { id, allow_new }
          };
          await this.client.request(req, onMessage);
          const session = this.client.readResponse(response);
          return session;
        }
        async deleteSession(id) {
          let response = "";
          const onMessage = (s) => {
            response += s;
          };
          const req = {
            type: "delete_session",
            payload: { id }
          };
          await this.client.request(req, onMessage);
          const result = this.client.readResponse(response);
          return result.success ?? false;
        }
        async newSession(data) {
          let response = "";
          const onMessage = (s) => response += s;
          const req = {
            type: "new_session",
            payload: data || {}
          };
          await this.client.request(req, onMessage);
          const session = this.client.readResponse(response);
          return session;
        }
        async listUserSessions(user_id) {
          let response = "";
          const onMessage = (s) => response += s;
          const req = {
            type: "list_user_sessions",
            payload: {
              id: user_id
            }
          };
          await this.client.request(req, onMessage);
          const sessions = this.client.readResponse(response);
          return sessions.sessions;
        }
        async getSessionMessages(session_id) {
          let response = "";
          const onMessage = (s) => response += s;
          const req = {
            type: "get_session_runs",
            payload: {
              id: session_id
            }
          };
          await this.client.request(req, onMessage);
          const runs = this.client.readResponse(response);
          return runs.runs;
        }
        async getSessionRuns(session_id) {
          let response = "";
          const onMessage = (s) => response += s;
          const req = {
            type: "get_session_runs",
            payload: {
              id: session_id
            }
          };
          await this.client.request(req, onMessage);
          const runs = this.client.readResponse(response);
          return runs.runs;
        }
        async getRun(session, run_id, role) {
          let response = "";
          const onMessage = (s) => response += s;
          const req = {
            type: "get_run",
            payload: { session, run_id, role }
          };
          await this.client.request(req, onMessage);
          const run = this.client.readResponse(response);
          return run.run;
        }
      };
      var store_default = Store;
      var Client3 = class {
        apiUrl;
        store;
        constructor(apiUrl) {
          if (apiUrl.endsWith("/")) {
            apiUrl = apiUrl.substring(0, apiUrl.length - 1);
          }
          this.apiUrl = apiUrl;
          this.store = new store_default(this);
        }
        async request(req, onMessage) {
          var _a;
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(req)
          };
          const res = await fetch(this.apiUrl, options);
          const reader = (_a = res.body) == null ? void 0 : _a.getReader();
          let chunked;
          if (!reader) {
            throw new Error("Can't get HTTP stream reader");
          }
          while (true) {
            const chunk = await reader.read();
            const read = await readStreamChunk(chunk, onMessage, chunked);
            if (typeof read === "string") {
              chunked = read;
            } else {
              chunked = void 0;
            }
            if (chunk.done) {
              break;
            }
          }
          reader == null ? void 0 : reader.releaseLock();
        }
        readResponse(s) {
          try {
            return JSON.parse(s);
          } catch (err) {
            throw new Error(`Can't read server response: ${err}`);
          }
        }
      };
      var client_default = Client3;
      async function executeAction(call, actions) {
        const wanted_action = actions.filter(
          (a) => a.type === "client-side" && a.tool.function.name === call.tool_name
        )[0];
        if (!wanted_action) {
          throw new Error(`Wanted server action not found: ${call.tool_name}`);
        }
        if (typeof call.arguments === "string") {
          call.arguments = JSON.parse(call.arguments);
        }
        await wanted_action.executor(call.arguments);
      }
      var import_zod_to_json_schema = require_cjs();
      function createAction(tool) {
        var _a;
        const json = (_a = (0, import_zod_to_json_schema.zodToJsonSchema)(tool.parameters, "schema").definitions) == null ? void 0 : _a.schema;
        if (!json)
          throw new Error("Can't read tool parameters");
        return {
          execute: tool.execute,
          schema: {
            name: tool.name,
            description: tool.description || "",
            parameters: json
          }
        };
      }
      function madeActionToFunctionTool({
        execute,
        schema
      }) {
        return {
          type: "client-side",
          executor: execute,
          tool: {
            type: "function",
            function: schema
          }
        };
      }
      var import_zod_to_json_schema2 = __toESM2(require_cjs());
      var Agent3 = class {
        id;
        client;
        client_actions = [];
        paused_runs = [];
        constructor(id, client) {
          this.id = id;
          this.client = client;
        }
        async load() {
          let response = "";
          const onMessage = (s) => response += s;
          const req = {
            type: "load_agent",
            payload: {
              id: this.id
            }
          };
          await this.client.request(req, onMessage);
          const agent = this.client.readResponse(response);
          return agent;
        }
        async structuredOutput({
          inputs,
          options,
          schema,
          system_prompt
        }) {
          let response = "";
          const onMessage = (s) => response += s;
          const json = (0, import_zod_to_json_schema2.default)(schema);
          const req = {
            type: "generate_json",
            payload: {
              id: this.id,
              inputs,
              options,
              system_prompt,
              schema: json
            }
          };
          await this.client.request(req, onMessage);
          const data = this.client.readResponse(response);
          return data;
        }
        async run({
          inputs,
          hooks,
          options
        }) {
          if (!hooks) {
            hooks = {};
          }
          options = options ?? {};
          options.run_id = options.run_id ?? "run_" + crypto.randomUUID();
          let response = void 0;
          hooks.onClientSideAction = (action) => executeAction(action, [
            ...(options == null ? void 0 : options.tools) || [],
            ...this.client_actions
          ]);
          hooks.onAgentResponse = (action) => {
            response = action.response;
          };
          const used_hooks = Object.keys(hooks);
          const req = {
            type: "run_agent",
            payload: {
              id: this.id,
              inputs,
              options: {
                ...options || {},
                tools: [...(options == null ? void 0 : options.tools) || [], ...this.client_actions]
              },
              hooks: used_hooks
            }
          };
          const onMessage = async (s) => {
            if (this.paused_runs.indexOf(options.run_id || "NONE") !== -1)
              return;
            await executeStreamHooks(s, hooks);
          };
          await this.client.request(req, onMessage);
          if (!response) {
            throw new Error("Did not receive a final response from the server");
          }
          return response;
        }
        addClientAction(tool) {
          if (!tool)
            return;
          const action = createAction(tool);
          this.client_actions = [
            ...this.client_actions.filter(
              (a) => a.tool.function.name !== action.schema.name
            ),
            madeActionToFunctionTool(action)
          ];
        }
        removeClientAction(name) {
          this.client_actions = this.client_actions.filter(
            (c) => c.tool.function.name !== name
          );
        }
        removeAllClientActions() {
          this.client_actions = [];
        }
        cancelRun(run_id) {
          this.paused_runs.push(run_id);
        }
      };
      var agent_default = Agent3;
      var Box = class {
        id;
        client;
        client_actions = [];
        constructor(id, client) {
          this.id = id;
          this.client = client;
        }
        async load() {
          let response = "";
          const onMessage = (s) => {
            response += s;
          };
          const req = {
            type: "load_box",
            payload: {
              id: this.id
            }
          };
          await this.client.request(req, onMessage);
          const box = this.client.readResponse(response);
          return box;
        }
        async run({
          inputs,
          options,
          hooks
        }) {
          if (!hooks) {
            hooks = {};
          }
          let response = void 0;
          hooks.onClientSideAction = (action) => executeAction(action, [
            ...(options == null ? void 0 : options.tools) || [],
            ...this.client_actions
          ]);
          hooks.onBoxFinish = (action) => {
            response = action;
          };
          const used_hooks = Object.keys(hooks);
          const req = {
            type: "run_box",
            payload: {
              id: this.id,
              inputs,
              options: {
                ...options || {},
                tools: [...(options == null ? void 0 : options.tools) || [], ...this.client_actions]
              },
              hooks: used_hooks
            }
          };
          const onMessage = async (s) => {
            await executeStreamHooks(s, hooks);
          };
          await this.client.request(req, onMessage);
          if (!response) {
            throw new Error("Did not receive a final response from the server");
          }
          return response;
        }
        addClientAction(func, tool) {
          this.client_actions.push({
            type: "client-side",
            executor: func,
            tool: {
              type: "function",
              function: tool
            }
          });
        }
      };
      var box_default = Box;
      function sleep2(ms) {
        if (typeof ms !== "number") {
          ms = 0;
        }
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }
      var sleep_default2 = sleep2;
      var RunVoicePlayer = class {
        elm;
        listeners = {};
        done_indexes = [];
        paused = false;
        started = false;
        constructor(elm) {
          const element = typeof elm === "string" ? document.getElementById(elm) : elm;
          if (!element) {
            throw new Error("Audio element is not found");
          }
          this.elm = element;
          this.elm.crossOrigin = "anonymous";
        }
        async queue(stream) {
          if (Array.isArray(stream)) {
            for (const s of stream) {
              this.queue(s);
            }
            return;
          }
          this.started = true;
          const url = stream.read;
          if (stream.index === 0) {
            this.listeners = {};
            this.done_indexes = [];
            this.paused = false;
            this.play(stream.index, url);
            return;
          }
          if (this.done_indexes.indexOf(stream.index - 1) !== -1) {
            this.play(stream.index, url);
            return;
          }
          const play = this.play.bind(this);
          this.listeners[stream.index - 1] = () => {
            play(stream.index, url);
          };
        }
        play(index, url) {
          this.elm.src = url;
          this.elm.onended = () => {
            const listener = this.listeners[index];
            if (listener)
              listener();
            this.done_indexes.push(index);
          };
          if (!this.paused) {
            this.elm.play();
          }
        }
        pause() {
          this.elm.pause();
          this.paused = true;
        }
        resume() {
          if (!this.paused || !this.started)
            return;
          this.elm.play();
          this.paused = false;
        }
        isDone(length) {
          return this.done_indexes.length === length;
        }
        newRun() {
          this.listeners = {};
          this.done_indexes = [];
          this.started = false;
          this.paused = false;
          this.elm.src = "";
        }
        async finish(length) {
          while (this.done_indexes.length !== length) {
            await sleep_default2(5);
          }
          this.done_indexes = [];
          this.listeners = {};
          this.started = false;
          return true;
        }
      };
      var audio_player_default = RunVoicePlayer;
      var VoiceRecorder2 = class {
        mediaRecorder = null;
        audioChunks = [];
        stream = null;
        audioBlob = null;
        started = false;
        audioContext = null;
        analyser = null;
        source = null;
        dataArray = null;
        isRecording = false;
        isPaused = false;
        onAudioChunk;
        state = "stopped";
        onStateChange;
        onAudioProcess;
        onText;
        visualizer;
        smoothDataArray = new Array(4).fill(0);
        circleRadius = 0;
        recognition = null;
        text = "";
        isRecognitionFinished = false;
        constructor(options) {
          this.onAudioChunk = options == null ? void 0 : options.onAudioChunk;
          this.onStateChange = options == null ? void 0 : options.onStateChange;
          this.onAudioProcess = options == null ? void 0 : options.onAudioProcess;
          this.onText = options == null ? void 0 : options.onText;
          this.initSpeechRecognition();
        }
        changeState(state) {
          this.state = state;
          if (this.onStateChange)
            this.onStateChange(state);
        }
        handleChunk(chunk) {
          this.audioChunks.push(chunk);
          this.audioBlob = new Blob(this.audioChunks, { type: "audio/wav" });
          if (this.onAudioChunk)
            this.onAudioChunk(chunk);
        }
        startAnalyser() {
          if (!this.audioContext || !this.analyser || !this.dataArray)
            return;
          const processAudio = () => {
            this.analyser.getByteTimeDomainData(this.dataArray);
            if (this.onAudioProcess)
              this.onAudioProcess(this.dataArray);
            if (this.visualizer)
              this.visualizer(this.dataArray);
            if (this.isRecording) {
              requestAnimationFrame(processAudio);
            }
          };
          processAudio.bind(this);
          processAudio();
        }
        async init() {
          try {
            this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(this.stream);
            this.audioContext = new AudioContext();
            this.analyser = this.audioContext.createAnalyser();
            this.source = this.audioContext.createMediaStreamSource(this.stream);
            this.source.connect(this.analyser);
            this.analyser.fftSize = 2048;
            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            const changeState = this.changeState.bind(this);
            const handleChunk = this.handleChunk.bind(this);
            const startAnalyser = this.startAnalyser.bind(this);
            this.mediaRecorder.addEventListener("start", () => {
              changeState("recording");
              startAnalyser();
            });
            this.mediaRecorder.addEventListener("stop", () => {
              changeState("stopped");
            });
            this.mediaRecorder.addEventListener("pause", () => {
              changeState("paused");
            });
            this.mediaRecorder.addEventListener("resume", () => {
              changeState("recording");
              startAnalyser();
            });
            this.mediaRecorder.addEventListener("dataavailable", (e) => {
              handleChunk(e.data);
            });
            this.mediaRecorder.addEventListener("stop", () => {
              this.audioBlob = new Blob(this.audioChunks, { type: "audio/wav" });
            });
            return true;
          } catch (e) {
            console.error(e);
            return false;
          }
        }
        initSpeechRecognition() {
          const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          if (!SpeechRecognition) {
            console.warn("Speech recognition not supported in this browser.");
            return;
          }
          this.recognition = new SpeechRecognition();
          this.recognition.continuous = true;
          this.recognition.interimResults = true;
          this.recognition.lang = "en-US";
          this.recognition.onresult = (event) => {
            let fullTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
              const transcript = event.results[i][0].transcript;
              fullTranscript += transcript;
              if (event.results[i].isFinal) {
                this.text += transcript;
              }
            }
            this.text = fullTranscript;
            if (this.onText)
              this.onText(this.text);
          };
          this.recognition.onerror = (event) => {
            console.error("Speech recognition error", event);
          };
          this.recognition.onend = () => {
            this.isRecognitionFinished = true;
          };
        }
        startSpeechRecognition() {
          if (this.recognition && !this.isPaused) {
            this.recognition.start();
          }
        }
        stopSpeechRecognition() {
          if (this.recognition) {
            this.recognition.stop();
          }
        }
        start() {
          this.audioBlob = null;
          this.audioChunks = [];
          this.text = "";
          this.isRecognitionFinished = false;
          this.init().then(() => {
            if (!this.isRecording && this.mediaRecorder) {
              this.mediaRecorder.start();
              this.isRecording = true;
              this.started = true;
              this.isPaused = false;
              this.startSpeechRecognition();
            }
          });
          return this;
        }
        stop() {
          this.isRecording = false;
          if (this.mediaRecorder)
            this.mediaRecorder.stop();
          this.stopSpeechRecognition();
          this.changeState("stopped");
          if (this.visualizer)
            this.visualizer([]);
          return this;
        }
        pause() {
          if (this.isRecording && !this.isPaused && this.mediaRecorder) {
            this.mediaRecorder.pause();
            this.isRecording = false;
            this.isPaused = true;
            this.changeState("paused");
            this.stopSpeechRecognition();
          }
          return this;
        }
        resume() {
          if (!this.isRecording && this.isPaused && this.mediaRecorder) {
            this.mediaRecorder.resume();
            this.isPaused = false;
            this.isRecording = true;
            this.isRecognitionFinished = false;
            this.changeState("recording");
            this.startSpeechRecognition();
          }
        }
        getBlob() {
          if (!this.audioBlob)
            return null;
          return this.audioBlob;
        }
        getObjectUrl() {
          if (!this.audioBlob)
            return null;
          const url = URL.createObjectURL(this.audioBlob);
          return url;
        }
        toString() {
          if (this.audioBlob) {
            return URL.createObjectURL(this.audioBlob);
          }
          return null;
        }
        async asRunInput() {
          if (this.recognition) {
            while (!this.isRecognitionFinished) {
              await sleep_default2(5);
            }
            if (this.text.length > 0) {
              return {
                message: this.text
              };
            }
          }
          return new Promise((resolve) => {
            if (!this.audioBlob) {
              resolve(null);
              return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
              const dataUrl = reader.result;
              resolve({
                audio: [
                  {
                    type: "base64",
                    value: dataUrl
                  }
                ]
              });
            };
            reader.readAsDataURL(this.audioBlob);
          });
        }
        async finish() {
          this.stop();
          this.started = false;
          if (!this.recognition) {
            return this;
          }
          while (!this.isRecognitionFinished) {
            await sleep_default2(5);
          }
          return this;
        }
        addVisualizer(element, color) {
          const visualize = this.visualize.bind(this);
          visualize(element, this.dataArray || [], color);
          const visualizeFunction = (dataArray) => {
            visualize(element, dataArray, color);
          };
          this.visualizer = visualizeFunction;
        }
        visualize(element, dataArray, color) {
          const elm = typeof element === "string" ? document.getElementById(element) : element;
          if (!elm) {
            throw new Error("Canvas element is not found");
          }
          const canvas = elm;
          const canvasCtx = canvas.getContext("2d");
          if (!canvasCtx) {
            throw new Error("Can't get canvas context");
          }
          const width = canvas.width;
          const height = canvas.height;
          const barCount = 4;
          const centerX = width / 2;
          const centerY = height / 2;
          const barWidth = width / (barCount * 2);
          const barSpacing = barWidth / 2;
          const maxRadius = barWidth / 2;
          const targetRadius = dataArray.length !== 0 && this.state === "recording" ? 0 : width;
          this.circleRadius += (targetRadius - this.circleRadius) * 0.1;
          canvasCtx.clearRect(0, 0, width, height);
          if (this.circleRadius > 1) {
            canvasCtx.fillStyle = color;
            canvasCtx.beginPath();
            canvasCtx.arc(centerX, centerY, this.circleRadius, 0, 2 * Math.PI);
            canvasCtx.fill();
          } else {
            const totalWaveWidth = barCount * barWidth + (barCount - 1) * barSpacing;
            const startX = (width - totalWaveWidth) / 2;
            for (let i = 0; i < barCount; i++) {
              const barHeight = dataArray[i] / 128 * centerY;
              this.smoothDataArray[i] += (barHeight - this.smoothDataArray[i]) * 0.5;
            }
            this.smoothDataArray.forEach((barHeight, i) => {
              const barX = startX + i * (barWidth + barSpacing);
              const barY = centerY - barHeight / 2;
              canvasCtx.fillStyle = color;
              canvasCtx.beginPath();
              canvasCtx.moveTo(barX + maxRadius, barY);
              canvasCtx.lineTo(barX + barWidth - maxRadius, barY);
              canvasCtx.quadraticCurveTo(
                barX + barWidth,
                barY,
                barX + barWidth,
                barY + maxRadius
              );
              canvasCtx.lineTo(barX + barWidth, barY + barHeight - maxRadius);
              canvasCtx.quadraticCurveTo(
                barX + barWidth,
                barY + barHeight,
                barX + barWidth - maxRadius,
                barY + barHeight
              );
              canvasCtx.lineTo(barX + maxRadius, barY + barHeight);
              canvasCtx.quadraticCurveTo(
                barX,
                barY + barHeight,
                barX,
                barY + barHeight - maxRadius
              );
              canvasCtx.lineTo(barX, barY + maxRadius);
              canvasCtx.quadraticCurveTo(barX, barY, barX + maxRadius, barY);
              canvasCtx.closePath();
              canvasCtx.fill();
            });
          }
        }
      };
      var voice_recorder_default = VoiceRecorder2;
      var VoiceVisualizer2 = class {
        elm;
        smoothDataArray = new Array(4).fill(0);
        circleRadius = 0;
        analyser = null;
        dataArray = null;
        visualizing = false;
        color;
        canvas;
        added = false;
        constructor(elm, canvas, color = "#000000") {
          const element = typeof elm === "string" ? document.getElementById(elm) : elm;
          this.canvas = typeof canvas === "string" ? document.getElementById(canvas) : canvas;
          if (!this.canvas)
            throw new Error("Canvas element not found!");
          if (!element) {
            throw new Error("Audio element is not found");
          }
          this.color = color;
          this.elm = element;
        }
        getReady() {
          if (this.added)
            return;
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const audioSource = audioContext.createMediaElementSource(this.elm);
          this.analyser = audioContext.createAnalyser();
          audioSource.connect(this.analyser);
          this.analyser.connect(audioContext.destination);
          this.analyser.fftSize = 2048;
          const bufferLength = this.analyser.frequencyBinCount;
          this.dataArray = new Uint8Array(bufferLength);
          this.added = true;
          this.startVisualization();
        }
        startVisualization() {
          if (!this.visualizing && this.canvas && this.analyser && this.dataArray) {
            this.visualizing = true;
            this.visualize();
          }
        }
        visualize() {
          if (!this.canvas || !this.analyser) {
            return;
          }
          this.analyser.getByteTimeDomainData(this.dataArray || new Uint8Array());
          this.visualizeCanvas(this.dataArray || new Uint8Array(), this.color);
          requestAnimationFrame(() => this.visualize());
        }
        visualizeCanvas(dataArray, color) {
          const canvas = this.canvas;
          const canvasCtx = canvas.getContext("2d");
          if (!canvasCtx) {
            throw new Error("Can't get canvas context");
          }
          const width = canvas.width;
          const height = canvas.height;
          const barCount = 4;
          const centerX = width / 2;
          const centerY = height / 2;
          const barWidth = width / (barCount * 2);
          const barSpacing = barWidth / 2;
          const maxRadius = barWidth / 2;
          const targetRadius = this.elm.paused ? height / 3 : 0;
          this.circleRadius += (targetRadius - this.circleRadius) * 0.1;
          canvasCtx.clearRect(0, 0, width, height);
          if (this.circleRadius > 1) {
            canvasCtx.fillStyle = color;
            canvasCtx.beginPath();
            canvasCtx.arc(centerX, centerY, this.circleRadius, 0, 2 * Math.PI);
            canvasCtx.fill();
          } else {
            const totalWaveWidth = barCount * barWidth + (barCount - 1) * barSpacing;
            const startX = (width - totalWaveWidth) / 2;
            for (let i = 0; i < barCount; i++) {
              const barHeight = dataArray[i] / 128 * centerY;
              this.smoothDataArray[i] += (barHeight - this.smoothDataArray[i]) * 0.5;
            }
            this.smoothDataArray.forEach((barHeight, i) => {
              const barX = startX + i * (barWidth + barSpacing);
              const barY = centerY - barHeight / 2;
              canvasCtx.fillStyle = color;
              canvasCtx.beginPath();
              canvasCtx.moveTo(barX + maxRadius, barY);
              canvasCtx.lineTo(barX + barWidth - maxRadius, barY);
              canvasCtx.quadraticCurveTo(
                barX + barWidth,
                barY,
                barX + barWidth,
                barY + maxRadius
              );
              canvasCtx.lineTo(barX + barWidth, barY + barHeight - maxRadius);
              canvasCtx.quadraticCurveTo(
                barX + barWidth,
                barY + barHeight,
                barX + barWidth - maxRadius,
                barY + barHeight
              );
              canvasCtx.lineTo(barX + maxRadius, barY + barHeight);
              canvasCtx.quadraticCurveTo(
                barX,
                barY + barHeight,
                barX,
                barY + barHeight - maxRadius
              );
              canvasCtx.lineTo(barX, barY + maxRadius);
              canvasCtx.quadraticCurveTo(barX, barY, barX + maxRadius, barY);
              canvasCtx.closePath();
              canvasCtx.fill();
            });
          }
        }
      };
      var visualizer_default = VoiceVisualizer2;
      var import_zod = require_lib();
      function createAIButton(elm, description) {
        if (typeof window === void 0) {
          console.error("AI buttons can only be used on the client-side");
          return;
        }
        const element = typeof elm === "string" ? document.getElementById(elm) : elm;
        const text = element.innerText;
        description = description ?? element.getAttribute("data-scoopika-description") ?? `Click this button when asked to click on ${text}`;
        const action = {
          name: `click_${text.toLowerCase().replace(" ", "_")}`,
          description,
          execute: async ({ delay }) => {
            if (!element) {
              throw new Error(`Button element not found!`);
            }
            if (typeof delay === "number")
              await sleep_default2(delay);
            element.click();
          },
          parameters: import_zod.z.object({
            delay: import_zod.z.number().describe("delay the click by ms. set to 0 to click immediatly").optional()
          })
        };
        return action;
      }
      var import_zod2 = require_lib();
      function createAIInput(elm, description) {
        if (typeof window === void 0) {
          console.error("AI buttons can only be used on the client-side");
          return;
        }
        const element = typeof elm === "string" ? document.getElementById(elm) : elm;
        const text = element.id || element.placeholder;
        description = description ?? element.getAttribute("data-scoopika-description") ?? `Enter value in this input element. it's about '${text}'`;
        const action = {
          name: `enter_value_in_${text.toLowerCase().replace(" ", "_")}`,
          description,
          execute: async ({ value }) => {
            if (!element) {
              throw new Error(`Button element not found!`);
            }
            element.value = value;
          },
          parameters: import_zod2.z.object({
            value: import_zod2.z.string().describe("The value to enter into the input")
          })
        };
        return action;
      }
    }
  });

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = Symbol.for("react.element");
      var n = Symbol.for("react.portal");
      var p = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r = Symbol.for("react.profiler");
      var t = Symbol.for("react.provider");
      var u = Symbol.for("react.context");
      var v = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
        else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e) {
        if (null == a) return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b, e) {
        S(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X;
      exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (process.env.NODE_ENV !== "production") {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.3.1";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState3(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect3(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.act = act;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect3;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState3;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (process.env.NODE_ENV === "production") {
        module.exports = require_react_production_min();
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    useChatState: () => useChatState,
    useVoiceChatState: () => useVoiceChatState
  });

  // src/state.ts
  var import_client = __toESM(require_client());
  var import_react = __toESM(require_react());

  // src/utils/sleep.ts
  function sleep(ms) {
    if (typeof ms !== "number") {
      ms = 0;
    }
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  var sleep_default = sleep;

  // src/state.ts
  var setupRequest = (session_id, inputs, run_id, user_id) => {
    const req = {
      role: "user",
      at: Date.now(),
      session_id,
      run_id: run_id || crypto.randomUUID(),
      user_id,
      request: inputs,
      resolved_message: "PLACEHOLDER"
    };
    return req;
  };
  var agentPlaceholder = ({
    id,
    session_id,
    run_id,
    name,
    audio,
    tools_calls,
    content
  }) => {
    const placeholder = {
      role: "agent",
      at: Date.now(),
      session_id,
      run_id,
      agent_id: id,
      agent_name: name || "",
      tools: [],
      response: {
        run_id,
        session_id,
        audio,
        tools_calls,
        content
      }
    };
    return placeholder;
  };
  var sortedMessages = (messages) => messages.sort((a, b) => a.at - b.at);
  function useChatState(client, agent, state_options) {
    if (typeof agent === "string") {
      agent = new import_client.Agent(agent, client);
    }
    const [clientInstance] = (0, import_react.useState)(client);
    const [agentInstance] = (0, import_react.useState)(agent);
    const [session, setSession] = (0, import_react.useState)(
      (state_options == null ? void 0 : state_options.session_id) ?? "session_" + crypto.randomUUID()
    );
    const [loadingSession, setLoadingSession] = (0, import_react.useState)(false);
    const [status, setStatus] = (0, import_react.useState)();
    const [generating, setGenerating] = (0, import_react.useState)(false);
    const [loading, setLoading] = (0, import_react.useState)(false);
    const [messages, setMessages] = (0, import_react.useState)([]);
    const [streamPlaceholder, setStreamPlaceholder] = (0, import_react.useState)(void 0);
    const getSessionMessages = async (id) => {
      setLoadingSession(true);
      const messages2 = await clientInstance.store.getSessionRuns(id);
      setMessages(messages2);
      setLoadingSession(false);
      if (state_options == null ? void 0 : state_options.scroll) {
        scroll();
      }
    };
    const changeSession = async (session2) => {
      const id = session2 ?? crypto.randomUUID();
      setSession(id);
      await getSessionMessages(id);
    };
    (0, import_react.useEffect)(() => {
      if (state_options == null ? void 0 : state_options.session_id) {
        getSessionMessages(state_options.session_id);
      }
    }, []);
    const newRequest = async ({
      inputs = {},
      options,
      hooks
    } = {}) => {
      try {
        while (generating || loading) {
          await sleep_default(5);
        }
        setLoading(true);
        options = { ...options || {} };
        options.session_id = session;
        const request = setupRequest(session, inputs, options == null ? void 0 : options.run_id);
        let run_id = request.run_id;
        setStreamPlaceholder(
          agentPlaceholder({
            id: agent.id,
            session_id: session,
            run_id,
            audio: [],
            content: "",
            tools_calls: []
          })
        );
        setMessages((prev) => [...sortedMessages(prev), request]);
        setStatus("Thinking...");
        const all_hooks = {
          ...hooks || {},
          onStart: (info) => {
            run_id = info.run_id;
            if (state_options == null ? void 0 : state_options.scroll) state_options.scroll();
          },
          onToken: (token) => {
            if (loading) setLoading(false);
            if (!generating) setGenerating(true);
            if (status) setStatus(void 0);
            setStreamPlaceholder((prev) => {
              if (!prev) return;
              return {
                ...prev,
                response: {
                  ...prev.response,
                  content: prev.response.content + token
                }
              };
            });
            if (hooks == null ? void 0 : hooks.onToken) hooks.onToken(token);
            if (state_options == null ? void 0 : state_options.scroll) state_options.scroll();
          },
          onToolCall: (call) => {
            setStatus(`Talking with ${call.function.name}`);
            if (hooks == null ? void 0 : hooks.onToolCall) hooks.onToolCall(call);
          },
          onToolResult: (res) => {
            setStatus(void 0);
            setStreamPlaceholder((prev) => {
              if (!prev) return;
              return {
                ...prev,
                tools: [...prev.tools, res],
                response: {
                  ...prev.response,
                  tools_calls: [...prev.response.tools_calls, res]
                }
              };
            });
            if (hooks == null ? void 0 : hooks.onToolResult) hooks.onToolResult(res);
          },
          onFinish: async () => {
            setStatus(void 0);
            const messages2 = await clientInstance.store.getSessionRuns(session);
            setStreamPlaceholder(void 0);
            setMessages(sortedMessages(messages2));
          }
        };
        const response = await agentInstance.run({
          inputs,
          options,
          hooks: all_hooks
        });
        return response;
      } catch (err) {
        if (hooks == null ? void 0 : hooks.onError)
          hooks.onError({
            healed: false,
            error: err.message ?? "Unexpected error"
          });
        console.error(err);
      } finally {
        setStatus(void 0);
        setLoading(false);
        setGenerating(false);
        const messages2 = await clientInstance.store.getSessionRuns(session);
        setMessages(messages2);
        if (state_options == null ? void 0 : state_options.scroll) state_options.scroll();
      }
    };
    return {
      generating,
      loading,
      status,
      streamPlaceholder,
      messages,
      newRequest,
      agent,
      session,
      changeSession,
      loadingSession
    };
  }

  // src/voice_state.ts
  var import_client2 = __toESM(require_client());
  var import_react2 = __toESM(require_react());
  function useVoiceChatState(client, agent, state_options) {
    const chatState = useChatState(client, agent, state_options);
    const [agentVoicePlayer, setAgentVoicePlayer] = (0, import_react2.useState)(null);
    const [voiceRecorder, setVoiceRecorder] = (0, import_react2.useState)(null);
    const [voicePlaying, setVoicePlaying] = (0, import_react2.useState)(false);
    const [visualizer, setVisualizer] = (0, import_react2.useState)(null);
    const [recorderState, setRecorderState] = (0, import_react2.useState)("stopped");
    const [agentVoicePaused, setPlayerPaused] = (0, import_react2.useState)(false);
    const [working, setWorking] = (0, import_react2.useState)(false);
    const [recognizedText, setRecognizedText] = (0, import_react2.useState)();
    const [supportRecognition, setSupportRecognition] = (0, import_react2.useState)(
      null
    );
    const pauseAgentVoice = () => {
      if (!agentVoicePlayer) return;
      agentVoicePlayer.pause();
      setPlayerPaused(true);
    };
    const resumeAgentVoice = () => {
      if (!agentVoicePlayer) return;
      agentVoicePlayer.resume();
      setPlayerPaused(false);
    };
    const updateRecognizedText = (text) => {
      if (voiceRecorder) voiceRecorder.stop();
      if (voiceRecorder) voiceRecorder.text = text;
      setRecognizedText(text);
    };
    (0, import_react2.useEffect)(() => {
      setVoiceRecorder(
        new import_client2.VoiceRecorder({
          onStateChange: (state) => setRecorderState(state),
          onText: (text) => setRecognizedText(text)
        })
      );
      if (voiceRecorder) {
        setSupportRecognition(voiceRecorder.recognition !== null);
      }
      const visualize = state_options == null ? void 0 : state_options.agent_voice;
      if (visualize == null ? void 0 : visualize.canvas) {
        setVisualizer(
          new import_client2.VoiceVisualizer(
            visualize.audio,
            visualize.canvas,
            visualize.wave_color
          )
        );
      }
    }, []);
    const newRequest = async ({
      inputs,
      options,
      hooks
    } = {}) => {
      try {
        if (agentVoicePlayer == null ? void 0 : agentVoicePlayer.started) {
          agentVoicePlayer.pause();
          setVoicePlaying(false);
          setPlayerPaused(false);
        }
        let player = null;
        if (voiceRecorder == null ? void 0 : voiceRecorder.started) voiceRecorder.stop();
        inputs = inputs || {};
        if (voiceRecorder == null ? void 0 : voiceRecorder.started) {
          const recorderInputs = voiceRecorder ? await voiceRecorder.asRunInput() : null;
          let message = (inputs == null ? void 0 : inputs.message) || "";
          const audio = (inputs == null ? void 0 : inputs.audio) || [];
          if (recorderInputs == null ? void 0 : recorderInputs.message) {
            if (message.length > 0) message += "\n";
            message += recorderInputs.message;
          }
          if (recorderInputs == null ? void 0 : recorderInputs.audio) {
            audio.push(...recorderInputs.audio);
          }
          inputs = { ...inputs || {}, message, audio };
        }
        setWorking(true);
        if (voiceRecorder == null ? void 0 : voiceRecorder.started) await voiceRecorder.finish();
        options = { voice: true, ...options || {} };
        if (state_options == null ? void 0 : state_options.agent_voice) {
          player = new import_client2.RunAudioPlayer(
            state_options.agent_voice.audio
          );
          setAgentVoicePlayer(player);
        }
        if (visualizer) visualizer.getReady();
        const all_hooks = {
          ...hooks || {},
          onAudio: (stream) => {
            if ((state_options == null ? void 0 : state_options.auto_play_audio) !== false) {
              if (!(player == null ? void 0 : player.paused)) {
                setPlayerPaused(false);
              }
              setVoicePlaying(true);
              if (player) player.queue(stream);
            }
            if (hooks == null ? void 0 : hooks.onAudio) hooks.onAudio(stream);
          }
        };
        const response = await chatState.newRequest({
          inputs,
          options,
          hooks: all_hooks
        });
        setWorking(false);
        if (player && response) await player.finish(response.audio.length);
        setVoicePlaying(false);
        return response;
      } catch (err) {
        console.error(err);
      } finally {
        setWorking(false);
        setVoicePlaying(false);
      }
    };
    return {
      ...chatState,
      voiceRecorder,
      setVoiceRecorder,
      voicePlaying,
      setVoicePlaying,
      agentVoicePlayer,
      setAgentVoicePlayer,
      newRequest,
      visualizer,
      setVisualizer,
      recorderState,
      setRecorderState,
      recognizedText,
      setRecognizedText,
      supportRecognition,
      setSupportRecognition,
      updateRecognizedText,
      working,
      setWorking,
      pauseAgentVoice,
      resumeAgentVoice,
      agentVoicePaused,
      setPlayerPaused
    };
  }
  return __toCommonJS(src_exports);
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
