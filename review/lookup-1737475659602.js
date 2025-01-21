(function(window, undefined) {
  var dictionary = {
    "91ea563e-dd0a-48f8-8e2a-3a7c077784bc": "Delivery",
    "e77254c4-c30d-4641-8238-1e907617ad32": "Featured products",
    "15a8ec25-1d2d-4c5b-87e3-4742ba95b079": "Confirmation",
    "ebf023a8-0f4b-460e-8af2-b43bd067ecc1": "Product page",
    "c7296b0b-9f88-42c9-be3c-368dbccff289": "Products",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "5d848f0c-dea2-4da9-9412-fc52d638af36": "Main navigation menu",
    "ad86307c-873f-4ba1-83b3-5f59295b87c3": "Cart",
    "d27246f8-858f-4e4f-bbc9-d24df5b904e2": "Footer",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);