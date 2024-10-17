import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'home',
          filename: 'static/chunks/remoteEntry.js',
          dts: false,
          remotes: {
            remote: `remote@http://localhost:3000/_next/static/${options.isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          },
          shared: {
            react: {
              eager: true,
              singleton: true,
            },
          },
          // shareStrategy: 'loaded-first',
          extraOptions: {
            exposePages: true,
            enableImageLoaderFix: true,
            enableUrlLoaderFix: true,
          },
        }),
      );
    }

    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
