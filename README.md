### Install Dependencies
We use [node package manager][npm] (npm) to install dependencies.

Check that you have npm installed by running `npm -v`. If you don't have npm
installed run following:

``` sh
$ brew install npm            # Mac OS X
$ sudo apt-get install npm    # Linux
```

Once npm is installed, use it to install the application dependencies:

```sh
$ npm install
```

### Transpile Code
This application uses the ES6 version of Javascript. Since many of its features are not yet
supported by modern browsers, we need to compile it down to ES5. To do this we use [Babel][babel].

The application also uses the CommonJS format for requiring modules. Like ES6, this functionality
isn't yet supported in all modern browsers. To support this behavior and to run the Babel
compilation, we're using [Webpack][webpack], which transpiles the code down to a single
`bundle.js` file.

Webpack's transpilation currently runs in the npm bundle task:

```sh
$ npm run bundle
```

By default, this task is configured to watch for changes to the files, so you shouldn't need to
rerun it in development.

### Run the Application

You can start the server by running npm start:

```sh
$ npm start
```

This should launch the application at `http://localhost:3001/`.

[babel]: https://babeljs.io/
[npm]: https://www.npmjs.org/
[webpack]: https://webpack.github.io/
