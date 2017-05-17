/**
 * Created by user on 2015/12/9.
 */

var compressor = require('yuicompressor');
var fs = require('fs');
var puts = console.log;
console.dir(compressor);
console.log("*===========================*")
console.dir(fs);
compressor.compress('sm_xiao.js', {
    //Compressor Options:
    charset: 'utf8',
    type: 'js',
    nomunge: true,
    'line-break': 80,
    outfile:"sm_xiao.min.js"
}, function(err, data, extra) {
    //err   If compressor encounters an error, it's stderr will be here
    //data  The compressed string, you write it out where you want it
    //extra The stderr (warnings are printed here in case you want to echo them

    fs.writeFile('sm_xiao.min.js',data,function(err){
        console.log(err);
        console.log('done!');
    });
    puts(data);
});
















