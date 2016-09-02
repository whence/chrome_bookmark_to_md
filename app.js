var cheerio = require('cheerio');
var getStdin = require('get-stdin');
var process = require('process');

var write = function (message) {
    process.stdout.write(message);
};

getStdin().then(function (body) {
    var $ = cheerio.load(body);

    $('h3').each(function(i, el) {
        var node = $(el);
        write('## Folder: ' + node.text() + '\n\n');
        node.next().find('a').each(function(i, el) {
            var node = $(el);
            write('### ' + node.text() + '\n');
            write(node.attr('href') + '\n\n');
        });
    });
});
