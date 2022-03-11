'use strict'
require('./check-versions')();

const rm              = require('rimraf');
const fs              = require('fs');
const ora             = require('ora');
const path            = require('path');
const chalk           = require('chalk');
const config          = require('../config');
const spinner         = ora(`building for production...`);
const webpack         = require('webpack');
const jsMinify        = require('./jsMinify');
const notifier        = require('node-notifier');
const childProcess    = require('child_process');
const webpackConfig   = require('./webpack.prod.conf');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;

  webpack(webpackConfig, (err, stats) => {
    spinner.stop();
    if (err) throw err;
    
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1);
    }

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ));
    minifyJs();
  });
});

function minifyJs() {
  webpack(jsMinify, (err, stats) => {
    spinner.stop();
    if (err) throw err;

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    if (stats.hasErrors()) {
      console.log(chalk.red(' Minify failed with errors.\n'));
      process.exit(1);
    }

    console.log(chalk.cyan('  Minify complete.\n'));
    console.log(chalk.yellow(
      '  Tip: Minify file are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ));
    console.log(chalk.yellow(`Minify Done`));

    const path = 'dist/templateLoader.html';
    try {
      fs.unlinkSync(path);
      //file removed
    } catch(err) {
      console.error(err);
    }

    childProcess.fork('build/replace.js');
    notifier.notify({
      title: 'Build Ready 😁🤙',
      message: `Build is Ready For Upload`,
      subtitle: 'Upload this file /dist/app-isolation.zip',
      icon: 'build/logo.png'
    });
  })
}
