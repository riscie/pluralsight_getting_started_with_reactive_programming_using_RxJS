module.exports = {
    entry: "./main",
    output: { filename: "app.js" },
    mode: "development",
    module: {
        rules: [{
            test: /.ts$/,
            use: [{ loader: "ts-loader" }]
        }]

    },
    resolve: {
        extensions: [".ts", ".js"]
    }

}