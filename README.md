# React / Flux &nbsp;Starter Kit

[![Build Status](http://img.shields.io/travis/kriasoft/react-starter-kit/master.svg?style=flat)](http://travis-ci.org/kriasoft/react-starter-kit)
[![Dependency Status](https://david-dm.org/kriasoft/react-starter-kit.svg?style=flat)](https://david-dm.org/kriasoft/react-starter-kit)
[![devDependency Status](https://david-dm.org/kriasoft/react-starter-kit/dev-status.svg?style=flat)](https://david-dm.org/kriasoft/react-starter-kit#info=devDependencies)
[![Tips](http://img.shields.io/gratipay/koistya.svg?style=flat)](https://gratipay.com/koistya)
[![Gitter](http://img.shields.io/badge/chat-online-brightgreen.svg?style=flat)](https://gitter.im/kriasoft/react-starter-kit)

> This project template is a skeleton for an [isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
> web application (SPA) based on Facebook's [React](https://facebook.github.io/react/)
> library and [Flux](http://facebook.github.io/flux/) architecture. You can use
> it to quickly bootstrap your web application projects. It contains only
> client-side components and development tools.

[![Facebook React Starter Kit](https://dl.dropboxusercontent.com/u/16006521/Screens/facebook-react-starter-kit.png)](https://github.com/kriasoft/react-starter-kit)

**Demo**: http://reactjs.kriasoft.com

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /config/                    # Configuration files for Webpack, Jest etc.
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /assets/                # Static files which are copied to ./build on compile
│   ├── /constants/             # Enumerations used in action creators and stores
│   ├── /components/            # React components. E.g. Navbar.jsx, Calendar.jsx
│   ├── /images/                # Graphics (.png, .jpg, .svg etc.)
│   ├── /layouts/               # Shared layouts for top-level components
│   ├── /pages/                 # Top-level, URL-bound React components
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /styles/                # CSS style sheets (or LESS, SASS, Stylus)
│   ├── /app.js                 # The application's bootstrap file, entry point
│   └── /AppDispatcher.js       # The central hub that manages all data flow (see Flux)
├── /test/                      # Unit, integration and load tests
│   ├── /e2e/                   # End-to-end tests
│   └── /unit/                  # Unit tests
│── gulpfile.js                 # Configuration file for automated builds
└── package.json                # The list of 3rd party libraries and utilities
```

### Getting Started

This yeoman generator is based on https://github.com/kriasoft/react-starter-kit:

```shell
$ npm install -g generator-flux-webapp
```


```shell
$ mkdir demo-app
$ cd demo-app
$ yo flux-webapp 
$ gulp
```

### How to Build
```shell
$ gulp build                    # or, `gulp build --release`
```

By default, it builds in debug mode. If you need to build in release mode, add
`--release` flag.

### How to Run

```shell
$ gulp                          # or, `gulp --release`
```

This will start a lightweight development server with LiveReload and
synchronized browsing across multiple devices and browsers.

### How to Deploy

```shell
$ gulp deploy                   # or, `gulp deploy --production`
```

You can deploy to different destinations by adding a corresponding flag.
For example `--production` or `--staging` etc. See the 'deploy' task in
`gulpfile.js`.
