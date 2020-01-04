module.exports = [{
    // sp.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-sp.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "sp.es5.umd.bundle.js",
      library: "pnp.sp",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  },
  {
    // graph.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-graph.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "graph.es5.umd.bundle.js",
      library: "pnp.graph",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  },
  {
    // sp-addinhelpers.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-sp-addinhelpers.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "sp-addinhelpers.es5.umd.bundle.js",
      library: "pnp.sp-addinhelpers",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  },
  {
    // odata.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-odata.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "odata.es5.umd.bundle.js",
      library: "pnp.odata",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  },
  {
    // logging.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-logging.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "logging.es5.umd.bundle.js",
      library: "pnp.logging",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  },
  {
    // config-store.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-config-store.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "config-store.es5.umd.bundle.js",
      library: "pnp.config-store",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  },
  {
    // common.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-common.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "common.es5.umd.bundle.js",
      library: "pnp.common",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  },
  {
    // adaljsclient.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-adaljsclient.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "adaljsclient.es5.umd.bundle.js",
      library: "pnp.adaljsclient",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  },
  {
    // pnpjs.es5.umd.bundle.js
    entry: "./pnpjs-sources/index-pnpjs.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: "ts-loader?configFile=pnpjs-sources/tsconfig.pnpjs.json",
          }],
        },
      ],
    },
    output: {
      filename: "pnpjs.es5.umd.bundle.js",
      library: "pnp",
      libraryTarget: "umd",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: {
      assets: false,
      colors: true,
    },
    optimization: {
      minimize: false
    },
  }];
