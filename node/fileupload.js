var http = require('http');
let formidable = require('formidable');
var fs = require('fs'); // file systems module

http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            let oldPath = files.filetoupload.path;
            let newPath = 'C:/Users/Your Name/' + files.filetoupload.name;
            fs.rename(oldPath, newPath, function (err) {
                if (err) throw err;
                res.write('File Uploaded and moved');
                res.end();
            });
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080); 