const nextConfig = {
  webpack: (config, { isServer }) => {
    config.cache = false; // Disable cache

    // Add a rule to handle audio files
    config.module.rules.push({
      test: /\.(wav|mp3|ogg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: `/portfolio/_next/static/audio/`,
            outputPath: `${isServer ? "../" : ""}static/audio/`,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
