// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var res = [];
  if(node === undefined) {
    node = document.body;
  }

  if(node.classList) {
    if(node.classList.contains(className)) {
      res.push(node);
    }
  }

  if(node.hasChildNodes()) {
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      res = res.concat(getElementsByClassName(className, children[i]));
    }
  }

  return res;
};
