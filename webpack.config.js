const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
    entry: './src/js/node_entry.js',
    plugins: [
        new MergeIntoSingleFilePlugin({
            files: {
                "vendor.js": [
                    "node_modules/lru_map/lru.js",
                    "node_modules/i18next/i18next.min.js",
                    "node_modules/i18next-xhr-backend/i18nextXHRBackend.min.js",
                    "node_modules/marked/marked.min.js",
                    "node_modules/universal-ga/lib/analytics.min.js",
                    "node_modules/short-unique-id/dist/short-unique-id.min.js",
                    "node_modules/object-hash/dist/object_hash.js",
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/jbox/dist/jBox.min.js",
                    "node_modules/jquery-ui-npm/jquery-ui.min.js",
                    "node_modules/bluebird/js/browser/bluebird.min.js",
                    "node_modules/inflection/inflection.min.js",
                    "node_modules/jquery-textcomplete/dist/jquery.textcomplete.min.js"
                ],
                "vendor.css": [
                    'node_modules/jbox/dist/jBox.min.css'
                ]
            }
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', ".js", ".jsx", ".css"]
    },
    output: {
        filename: 'node_main.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    devtool: 'inline-source-map',
};
