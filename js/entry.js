import milligram from 'milligram';
require.context("../", true, /^\.\/.*\.html/);
require.context("../images", true, /^\.\/.*\.png/);
require.context("./", true, /^\.\/.*\.js/);
import $ from 'jquery';
import 'p5';
import 'p5/lib/addons/p5.dom.js';
