# Redux Example Component

This, expertly named component, is, as its name suggests, simply an example of how you *connect* your component to the *Redux store*.

Lets just dive in to the files and see what each does.

## [Example.jsx](https://github.com/IvanBuljovcic/React-Boilerplate/tree/master/src/components/REDUX_EXAMPLE_COMP/Example.jsx)

Is just the **VIEW** part of the *ExampleComponent*. Not much is happening here.

All the data in here is just displayed, there is no manipulation of data.

## [ExampleController.jsx](https://github.com/IvanBuljovcic/React-Boilerplate/tree/master/src/components/REDUX_EXAMPLE_COMP/ExampleController.jsx)

This right here is your controller component. There is a section in the main [*README*](https://github.com/IvanBuljovcic/React-Boilerplate#controller-components) that talks a in more detail about this topic.

**TL:DR;** All your data manipulation and functions, related to the *Example* is done in here.

The controller then imports the **View** part and passes the data into it.

## [index.js](https://github.com/IvanBuljovcic/React-Boilerplate/tree/master/src/components/REDUX_EXAMPLE_COMP/index.js)

Now the fun part...

All of the relevant *Redux store* data and *Redux actions* are imported in this file.

The store data is in trun, connected to the Example component via the `mapStateToProps`.

Actions are connected via the `mapDispatchToProps`. If your action expects an argument, you must also define an pass it in here.

---

**NOTE:** Both `mapStateToProps` and `mapDispatchToProps` **MUST** be named as such!

---

If you do not need, either the state or actions, when connecting the, you need to pass a `null` argument to the `connect()` function, i.e. `connect(null, mapDispatchToProps)(Example)`.

Anything set in here will be available in your connected component as a `props` or `this.props` accordingly.
