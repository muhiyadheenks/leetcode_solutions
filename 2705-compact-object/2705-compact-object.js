/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    
  if (Array.isArray(obj)) {
    return obj
      .filter(Boolean)
      .map((item) =>
        typeof item === "object" && item !== null ? compactObject(item) : item
      );
  }
if (typeof obj === "object" && obj !== null) {
    const result = {};

    for (let key in obj) {
      if (Boolean(obj[key])) {
        result[key] =
          typeof obj[key] === "object"
            ? compactObject(obj[key])
            : obj[key];
      }}
      return result
    }
return obj
};