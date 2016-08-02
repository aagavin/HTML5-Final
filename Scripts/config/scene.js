var config;
(function (config) {
    (function (Scene) {
        Scene[Scene["MENU"] = 0] = "MENU";
        Scene[Scene["LEVEL1"] = 1] = "LEVEL1";
        Scene[Scene["LEVEL2"] = 2] = "LEVEL2";
        Scene[Scene["LEVEL3"] = 3] = "LEVEL3";
        Scene[Scene["OVER"] = 4] = "OVER";
        Scene[Scene["INSTRUCTIONS"] = 5] = "INSTRUCTIONS";
    })(config.Scene || (config.Scene = {}));
    var Scene = config.Scene;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map