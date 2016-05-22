var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var reg = /\.(HTML|CSS|JS|PNG|JPG|GIF|JPEG|SVG|ICON|MP3|OGG|WAV|MP4|WEBM)/i;
    if (reg.test(pathname)) {
        //->�����ļ��ĺ�׺����ȡMIME����
        var suffix = reg.exec(pathname)[1].toUpperCase();
        var suffixType = null;
        switch (suffix) {
            case "HTML":
                suffixType = "text/html";
                break;
            case "CSS":
                suffixType = "text/css";
                break;
            case "JS":
                suffixType = "text/javascript";
                break;
            case "PNG":
                suffixType = "image/png";
                break;
            case "JPG":
            case "JPEG":
                suffixType = "image/jpeg";
                break;
            case "GIF":
                suffixType = "image/gif";
                break;
            case "SVG":
                suffixType = "image/svg";
                break;
            case "ICON":
                suffixType = "image/icon";
                break;
            case "MP3":
                suffixType = "audio/mpeg";
                break;
            case "OGG":
                suffixType = "audio/ogg";
                break;
            case "WAV":
                suffixType = "audio/wav";
                break;
            case "MP4":
                suffixType = "video/mp4";
                break;
            case "WEBM":
                suffixType = "video/webm";
                break;
        }

        //->��ȡ�ļ�����,Ȼ�󷵻ظ��ͻ�����Ⱦ
        var conFile = /(HTML|CSS|JS)/i.test(suffix) ? fs.readFileSync("." + pathname, "utf8") : fs.readFileSync("." + pathname);
        res.writeHead(200, {'content-type': suffixType});
        res.end(conFile);
    }
});
server.listen(1101);
