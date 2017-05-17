/**
 * Created by user on 2015/12/9.
 */
var puts = require('util').puts,
    fs = require('fs'),
    cssmin = require('cssmin');
var css = fs.readFileSync("./idangerous.swiper.css", encoding='utf8');
var min = cssmin(css);
fs.writeFile('idangerous.swiper.min.css',min,function(err){
    console.log('done!');
});
puts(min);