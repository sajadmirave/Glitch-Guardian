var exit = require("node:process").exit;
// declare function  require(name: "node:process")
var _a = require("colorette"), red = _a.red, yellow = _a.yellow, magenta = _a.magenta, black = _a.black, green = _a.green, blue = _a.blue, cyan = _a.cyan, white = _a.white, gray = _a.gray, bgBlue = _a.bgBlue, bgGreen = _a.bgGreen, bgBlackBright = _a.bgBlackBright, bgBlueBright = _a.bgBlueBright, bgMagentaBright = _a.bgMagentaBright, bgWhiteBright = _a.bgWhiteBright, bgYellowBright = _a.bgYellowBright, bold = _a.bold, underline = _a.underline;
// random collor
var Debug = /** @class */ (function () {
    function Debug() {
        this.title = 'debug';
        this.xss = false;
        this.paylod = ['<', '>', '"', "'", 'OR', '=', 'script'];
    }
    // degub
    // @params value
    Debug.prototype.debug = function (value) {
        // debug temp
        var debug_temp = {
            title: magenta("".concat(this.title, ": ")),
            value: yellow(value),
            output: function () {
                return this.title + this.value;
            }
        };
        // output
        console.log(debug_temp.output());
        return exit(1);
    };
    /*
    @title debug table
    @Desc return data as table template
    @params value
    */
    Debug.prototype.debug_table = function (value) {
        // empty array to pass data
        var values = [];
        // add data to array
        for (var i = 0; i < value.length; i++) {
            values.push({ id: i, code: value[i] });
        }
        // output
        console.table(values);
        exit(1);
    };
    Debug.prototype.debug_console = function (value) {
        var color = red(value);
        var debug_title = bgBlackBright(this.title);
        // random color
        // Output: a random integer between 0 and 10
        var randomNumber = Math.floor(Math.random() * 9);
        // conditions
        var actions = {
            1: function () { return color = black(value); },
            2: function () { return color = yellow(value); },
            3: function () { return color = magenta(value); },
            4: function () { return color = green(value); },
            5: function () { return color = blue(value); },
            6: function () { return color = cyan(value); },
            7: function () { return color = white(value); },
            8: function () { return color = gray(value); },
        };
        // display with color
        if (actions[randomNumber]) {
            actions[randomNumber]();
        }
        // output styling
        var output = "".concat(debug_title, " ").concat(underline(bold(color)));
        console.log(output);
    };
    // xss attack
    Debug.prototype.xss_detect = function (data) {
        var newData = data.split(/<|>| /);
        var _loop_1 = function (i) {
            this_1.paylod.map(function (paylod) {
                if (data[i] == paylod)
                    return true;
            });
        };
        var this_1 = this;
        // layer two
        for (var i = 0; i < data.length; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            this_2.paylod.map(function (paylod) {
                if (newData[i] == paylod)
                    return true;
            });
        };
        var this_2 = this;
        // layer one
        for (var i = 0; i < newData.length; i++) {
            _loop_2(i);
        }
    };
    return Debug;
}());
