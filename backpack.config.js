const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ['./server/index.ts'];

    config.resolve = {
      extensions: ['.ts', '.js', '.json'],
    };

    config.plugins.push(
      new CopyWebpackPlugin(
        [
          {
            from: 'server/app/api/swagger/api.yaml',
            to: 'server/app/api/swagger/api.yaml',
          },
        ],
        options
      )
    );

    config.module.rules.push({
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
    });

    return config;
  },
};
