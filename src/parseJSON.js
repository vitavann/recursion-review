// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var firstChar = json[0];

  if (firstChar === '[') {
    var results = [];
    var insideArray = json.slice(1, json.length - 1);
    if (insideArray.length > 0) {
      var items = insideArray.split(/, |,/);
      items.forEach(function(item) {
        results = results.concat(parseJSON(item));
      });
    }
    return results;
  }

  if (firstChar === '{') {
    var results = {};
    var insideObj = json.slice(1, json.length - 1);
    if (insideObj.length > 0) {
      var items = insideObj.split(/, |,/);
      items.forEach(function(item) {
        var keyVal = item.split(/: |:/);
        var key = parseJSON(keyVal[0]);
        var val = parseJSON(keyVal[1]);
        results[key] = val;
      });
    }
    return results;
  }

  if (firstChar === '"') {
    return json.slice(1, json.length - 1);
  }

  if (json === 'null') {
    return null;
  }
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }

  return parseFloat(json);
};
