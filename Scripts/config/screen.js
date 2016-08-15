var config;
(function (config) {
    (function (Screen) {
        Screen[Screen["WIDTH"] = 850] = "WIDTH";
        Screen[Screen["HEIGHT"] = 550] = "HEIGHT";
        Screen[Screen["HALF_WIDTH"] = 425] = "HALF_WIDTH";
        Screen[Screen["HALF_HEIGHT"] = 275] = "HALF_HEIGHT";
    })(config.Screen || (config.Screen = {}));
    var Screen = config.Screen;
})(config || (config = {}));
//# sourceMappingURL=screen.js.map