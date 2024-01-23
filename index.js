
//function for data
function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log ()


        async function init() {
          console.log("Starting init");
        var svgString = "";
        }