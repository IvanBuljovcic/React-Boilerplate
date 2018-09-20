# React Boilerplate

A template for new projects with the basic setup and examples.

## Table of Contents

- [Installation](#installation)
- [About the boilerplate](#about-the-project)
- [Commiting](#commiting-your-code)
- [Contributing](#contributing)

## Installation

Download to your project directory:

```sh
git clone git@gitlab.internal.roundglobe.tech:andrija/react-boilerplate.git && cd react-boilerplate
yarn install
```

<hr />

## About the project

What is included in the project:

- [Webpack](#webpack)
- [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/#devserver)
- [Webpack Modes][modes]
  - [Development][dev]
  - [Production][prod]
- [Webpack Presets](#presets)
- [Production Server](#production-server)
- [ES 6](http://es6-features.org/)
- [ESLint](#eslint)
- [Jest](#jest)
- [Enzyme](https://devhints.io/enzyme)
- [PostCSS](#postcss)
- [Lazy Loading Components](#lazy-loading-components)
- [Storybook](#storybook)

## Webpack
Webpack's default config is set in the `webpack.config.js` file in the project root.
It uses loaders to handle specific file types.

The entry point of the application is `<ROOT_DIR>/src/index.jsx`.


For development puposes, `webpack-dev-server` has been set-up. It starts by default when you run the `start` script

<hr />

## Modes
Aside from the default config, webpack has a `development` and a `production` mode.
Both these modes do some things specific to their purpose.

**Using modes**

Modes are used via the `webpack` script, by passing a `--env.mode` argument.

`yarn run webpack --env.mode development` will call the `<ROOT_DIR>/build-utils/webpack.development.js` file i.e. the development mode.

Modes (link to file):
- [Development](https://gitlab.internal.roundglobe.tech/andrija/react-boilerplate/blob/develop/build-utils/webpack.development.js)
- [Production](https://gitlab.internal.roundglobe.tech/andrija/react-boilerplate/blob/develop/build-utils/webpack.production.js)

### Development
This mode will **NOT** output any files to the file system. It keeps everything in the cache.

For performace and caching, the `NamedChunksPlugin` is used.

### Production
Production **WILL** output all the relevant files into the `dist` folder. <br />
The files follow the `[name].[chunkhash].js` pattern. Namely, if you only have more then one `bundle` file, they will be named in the order they were created `bundle.0`, `bundle.1` ...

<hr />

## Presets
Presets are small config files, that **must** follow a naming pattern in order to be loaded, the pattern being `webpack.[presetName].js`, and they must be placed into the `presets` folder.

The presets are loaded via the `<ROOT_DIR>/build-utils/loadPresets.js` file.

A preset should be as simple as calling the `eslint-loader` with its options if needed.
It is then injected into the `webpack.config.js` when webpack starts.

If you need a preset for example for, typescript, just create a `webpack.typescript.js` file in the folder, call the `typescript-loader` and call 

You can pick and choose which preset to load in which mode.

**Using presets**

Presets are called similarly to [modes][modes], by passing a argument into the webpack scritp. Only instead of `--env.mode` you pass `--env.presets`

```sh
yarn run webpack --env.presets eslint
```

List of presets (link to file):
- [Analyze](https://gitlab.internal.roundglobe.tech/andrija/react-boilerplate/blob/develop/build-utils/presets/webpack.analyze.js)
- [Compress](https://gitlab.internal.roundglobe.tech/andrija/react-boilerplate/blob/develop/build-utils/presets/webpack.compress.js)
- [Eslint](https://gitlab.internal.roundglobe.tech/andrija/react-boilerplate/blob/develop/build-utils/presets/webpack.eslint.js)
- [Postcss](https://gitlab.internal.roundglobe.tech/andrija/react-boilerplate/blob/develop/build-utils/presets/webpack.postcss.js)

<hr />

## Production Server

Let's say youre working on some feature. You have your `webpack-dev-server` running, everything is running smoothly, functionality, lazy-loading, images load, tests pass, linting is perfect, rainbows in the sky. Then you `commit` the code and lo and behold, something is not working. One of your files isn't where you were expecting it. Then you have to rework the logic and `commit` again and so on.

One way to try to combat this is with runnig a `server` that will serve (*ba dum tss*) you your production files i.e. the files outputed from the `production` mode.

We run this server via the script

`yarn run prod:server`

It will run the `build` script and run the `<ROOT_DIR>/build-utils/distServer.js` file.


## ES Lint

ES Lint uses [AirBnB](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)'s default config, with some modifications.

Config file is: [`.eslintrc.json`](https://gitlab.internal.roundglobe.tech/andrija/react-boilerplate/blob/develop/.eslintrc.json)

Disabled options from AirBnB:

- Camelcase
- Import Extensions
- Import No Extraneous Dependencies
- Import No Unresolved
- Jest Lowercase Name
- No Underscore Dangle
- No `var`
- React Require Extension
- React JSX One Expression Per Line
- React JSX Wrap Multilines

## Jest

In a perfect world and/or project, every component, every function, would have a test that checks it.

Running tests in the project is as simple as:

- `yarn run test`
- or if you want to **watch** for changes, `yarn run test:watch`

To aviod accidental modification of the DOM, we can use **snapshot** testing to check if our current component DOM is equal to the one our snapshot of it created.

Creating a snapshot is pretty simple:

```jsx
test('Component renders correctly', () => {
  const wrapper = shallow(<Component />);

  expect(wrapper).toMatchSnapshot();
})
```

And thats it. If your component has some props that it can accept, variations of itself, you can create a new test case, pass in the props and check it against a snapshot.

When you create a new component, obviously, no snapshot of it will exist. The first time you run the test, a snapshot will be created.

When intentionally chaning a components DOM, either run the `jarn:update` script or if you are running the `test:watch` script, in the terminal, press **w** then **u** to update snapshots

## PostCSS

[PostCSS](https://github.com/postcss/postcss) is a tool for handling your CSS files.

This project uses the **postcss** syntax. This means that styles are written in `.css` files but you can **nest** your rules, use the **&** operator and most all of `sass` / `scss` syntax.

The config file is: `<ROOT_DIR>/`[`postcss.config.js`](https://gitlab.internal.roundglobe.tech/andrija/react-boilerplate/blob/develop/postcss.config.js)

Every component should have it's specific style file **inside** it's folder i.e. 

`src/componenents/exampleComponent/`
  - `ExampleComponent.jsx`
  - `ExampleComponent.css`

### Variables

Variables are stored in `<ROOT_DIR>/src/css/variables` folder.

Each type of variable has its own **YAML** file. The only caveat with this set-up is, **when you edit a variable `*.yml` file, you must restart the `webpack-dev-server`**, because these files are loaded directly into webpack, not via a *css* file.

<hr />

When bundling CSS, CSS-MQPacker (Media Query Packer) will find every itteration of a specific *@media* query in your styles, and *pack* them all into a single *@media* rule.
This will speed up the reading of the CSS since the browser has to read a *@media* rule only once and set the rules instead of going rule-by-rule.

## Lazy Loading Components

For the most effective use of browser loading, http requests etc. we can split our code into smaller chunks. If for example, you have a modal on a page, you dont necessarily need to load it onto the page until the user triggers it.

By splitting components that are not essential on the initial render into lazy-loaded chunks, you are speeding up the load time of your application and providing a more enjoyable experience to the users.

To accomplish this, we use `react-imported-component`.

You can find an example of this in `<ROOT_DIR>/src/components/Routing/Routes.jsx`, where the `<About />` component is being lazy-loaded.

`const About = importedComponent(() => import('../About/About')), {...})`

While the component is being loaded, you can add a `LoadingComponent` or an `ErrorComponent` if the loading fails.

<hr />

## Storybook

Similarly to testing your component, if it has a *storybook* example of its variations, how it looks and functions, you can help your fellow team members to understand your component at a glance.

By creating a `_story.jsx` file in your **component** folder and writting a brief explanation of how to use said component, you might notice that you maybe wrote your component too complex and in the process simplify it.

<hr />

## Commiting your code

When you `git commit` files to your repository, `husky` will run its `precommit` script which will in turn, run the following scripts from the `package.json`:

- `eslint`
- `test`

If both linting and test pass, your commit will "pass".

If either script fails, you **need to fix** the errors. Only then will you be allowed to commit your code.

## Contributing

While everyone who is a developer can add to this repository, before making changes, consult with the rest of the users of the project.

## Authors


[modes]: #modes
[dev]: #development
[prod]: #production
