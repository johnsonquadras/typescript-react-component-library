const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {

    // Add typescript loader
    defaultConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src/shared/components"),
        loader: require.resolve("ts-loader"),
        options: {
            configFile: ".storybook/tsconfig.json"
        }
    });
    defaultConfig.resolve.extensions.push(".ts", ".tsx");

    return defaultConfig;
};

