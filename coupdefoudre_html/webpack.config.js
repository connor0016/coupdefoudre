const glob = require("glob");
const entrypoint = glob.sync("./src/js/*.js");

module.exports = {
    mode: "development",
    //development:非圧縮モード　production:圧縮モード
    entry: entrypoint,
    output: {
        filename: 'index.js'
    }
}