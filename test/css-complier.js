const hook = require('css-modules-require-hook');
const sass = require('node-sass');
const path = require('path');

hook({
    extensions: ['.sass'],
    preprocessCss: function (css, filepath) {
        const result =  sass.renderSync({
            data: css,
            includePaths: [ path.resolve(filepath, '..') ],
            indentedSyntax: true,
        });

        return result.css;
    }
});
