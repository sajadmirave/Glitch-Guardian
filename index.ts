
declare function require(name: string)
const { exit } = require("node:process")

// declare function  require(name: "node:process")

const {
    red, yellow, magenta, black, green, blue, cyan, white, gray, bgBlue, bgGreen, bgBlackBright, bgBlueBright, bgMagentaBright, bgWhiteBright, bgYellowBright, bold, underline
} = require("colorette")

// random collor

class Debug {
    public title = 'debug'
    private xss = false;
    private paylod = ['<', '>', '"', "'", 'OR', '=', 'script'];

    // degub
    // @params value
    public debug(value) {
        // debug temp
        let debug_temp = {
            title: magenta(`${this.title}: `),
            value: yellow(value),

            output: function () {
                return this.title + this.value
            }
        }

        // output
        console.log(debug_temp.output())
        return exit(1);

    }

    /*
    @title debug table
    @Desc return data as table template
    @params value
    */

    public debug_table(value) {
        // empty array to pass data
        let values: { id: number, code: string }[] = [];

        // add data to array
        for (let i = 0; i < value.length; i++) {
            values.push({ id: i, code: value[i] })
        }

        // output
        console.table(values)
        exit(1)
    }

    public debug_console(value) {

        let color = red(value);
        let debug_title = bgBlackBright(this.title)

        // random color
        // Output: a random integer between 0 and 10
        const randomNumber = Math.floor(Math.random() * 9);

        // conditions
        const actions = {
            1: () => color = black(value),
            2: () => color = yellow(value),
            3: () => color = magenta(value),
            4: () => color = green(value),
            5: () => color = blue(value),
            6: () => color = cyan(value),
            7: () => color = white(value),
            8: () => color = gray(value),
        }

        // display with color
        if (actions[randomNumber]) {
            actions[randomNumber]()
        }

        // output styling
        let output = `${debug_title} ${underline(bold(color))}`
        console.log(output)
    }

    // xss attack
    private xss_detect(data) {
        let newData = data.split(/<|>| /)

        // layer two
        for (let i = 0; i < data.length; i++) {
            this.paylod.map((paylod) => {
                if (data[i] == paylod)
                    return true
            })
        }

        // layer one
        for (let i = 0; i < newData.length; i++) {
            this.paylod.map((paylod) => {
                if (newData[i] == paylod)
                    return true
            })
        }
    }
}