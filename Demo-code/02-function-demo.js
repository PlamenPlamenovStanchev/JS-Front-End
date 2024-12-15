function hLine() {
    console.log('--------------------');
}

function printHeader() {
    console.log('~~~-    {@}    -~~~');
    console.log('~- Certificate -~~~');
    console.log('~~~-   ~---~   -~~~');
}

function printName(nameArray) {
    console.log(`${nameArray[0]} ${nameArray[1]}`);
}

function printLabel() {
    console.log('Label');
}

function printContent() {
    console.log('Content');
}

function printCertificate(grade, name) {
    if ( grade < 3 ) {
        console.log('Student does not qualify');
    } else {
        printHeader();
        printLabel();
        printContent();
        printName(name);
    }
    
}

printCertificate('5', ['David', 'Core']);