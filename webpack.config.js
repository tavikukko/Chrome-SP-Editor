module.exports = [{
  // sp.es5.umd.bundle.js
  entry: "./pnpjs-sources/index-sp.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: "ts-loader",
        }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        },
        type: "javascript/auto",
      },
    ]
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
          loader: "ts-loader",
        }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        },
        type: "javascript/auto",
      },
    ]
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
  // queryable.es5.umd.bundle.js
  entry: "./pnpjs-sources/index-queryable.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: "ts-loader",
        }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        },
        type: "javascript/auto",
      },
    ]
  },
  output: {
    filename: "queryable.es5.umd.bundle.js",
    library: "pnp.queryable",
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
          loader: "ts-loader",
        }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        },
        type: "javascript/auto",
      },
    ]
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
  // core.es5.umd.bundle.js
  entry: "./pnpjs-sources/index-core.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: "ts-loader",
        }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        },
        type: "javascript/auto",
      },
    ]
  },
  output: {
    filename: "core.es5.umd.bundle.js",
    library: "pnp.core",
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
  // msaljsclient.es5.umd.bundle.js
  entry: "./pnpjs-sources/index-msaljsclient.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: "ts-loader",
        }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        },
        type: "javascript/auto",
      },
    ]
  },
  output: {
    filename: "msaljsclient.es5.umd.bundle.js",
    library: "pnp.msaljsclient",
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
  // graph-sdk.js.js
  entry: "./pnpjs-sources/index-graph-sdk.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: "ts-loader",
        }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        },
        type: "javascript/auto",
      },
    ]
  },
  output: {
    filename: "graph-sdk.es5.umd.bundle.js",
    library: "graph-sdk",
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
