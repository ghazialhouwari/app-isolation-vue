# app-isolation-vue

> App Isolation Template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

/////////////
git checkout master
git pull origin master
npm i

npm run build

upload app-isolation.zip

unzaip app-isolation.zip -d app-isolation
//////

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Project Structure

```
app-isolation-vue
├─ build/                  # Webpack config files
│  └─ ...
├─ config/                 # Project configration for each environment 
│  └─ ...
├─ dist/                   # Builds ready to release
│  └─ ...
├─ src/                    # app-isolation Source code
│  ├─ components/          # All component used in app-isolation
│  │  └─ ...
│  ├─ services/            # APIs that bot use
│  │  └─ ...
│  ├─ store/               # State management of the app-isolation
│  │  └─ ...
│  ├─ styles/              # Styles of app-isolation and bootstrap partial import
│  │  └─ ...
│  ├─ utilities/           # All shared functions and codes
│  │  └─ ...
│  ├─ eventbus.js          # Comunication methods between bot components
│  ├─ main.js              # Main entry point on development
│  ├─ mainProduction.js    # Main entry point on production
│  └ App.vue               # Main app component
├─ static/                 # All static files (images, fonts, etc...)
│  └─ ...
├─ template.html           # Template of templateLoader javascript file
├─ defaultVals.json        # Default values of app-isolation theme
├─ index.html 
├─ package.json            # Build scripts and dependencies
├─ botConfig.jsonc         # Structure of json files for theme with data types
└─ test/                   # Automation test for app-isolation
    └─ ...
```