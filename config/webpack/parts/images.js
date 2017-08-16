/**
 * Configure image loading via `url-loader`.
 * @param {number} limit - maximum size (in bytes) for images that will be served as a data URL
 * @param {string} name - filename template for images rendered via file-loader
 * @returns {{module: {rules: [*]}}}
 */
function images({ limit = 20480, name = '[name].[ext]' } = {}) {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          exclude: /node_modules/,

          use: [
            {
              loader: 'url-loader',
              options: {
                limit,
                name,
              },
            },
          ],
        },
      ],
    },
  };
}

export default images;
