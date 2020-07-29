function readTextFile(file) {

    // read the file
    var reader = new FileReader();

    // file reading started
    reader.addEventListener('loadstart', function() {
        console.log('File reading started');
    });

    // file reading finished successfully
    reader.addEventListener('load', function(e) {
        // contents of file in variable     
        var text = e.target.result;

        console.log(text);
    });

    // file reading failed
    reader.addEventListener('error', function() {
        alert('Error : Failed to read file');
    });

    // file read progress 
    reader.addEventListener('progress', function(e) {
        if(e.lengthComputable == true) {
            var percent_read = Math.floor((e.loaded/e.total)*100);
            console.log(percent_read + '% read');
        }
    });

    // read as text file
    reader.readAsText(file);
}

readTextFile('../txt/nutrition.txt');