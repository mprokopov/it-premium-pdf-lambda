var path = require('path');
var pdfmake = require('pdfmake');
const pdfMakePrinter = require('pdfmake/src/printer');

exports.generatePdf = (docDefinition, callback) => {
    let chunks = [];
    const fontDescriptors = {
        Roboto: {
            normal: path.join(__dirname, '/fonts/Roboto-Regular.ttf'),
        }
    };
    const printer = new pdfMakePrinter(fontDescriptors);
    const doc = printer.createPdfKitDocument(docDefinition);

    // doc.on('data', (chunk) => {
    //     chunks.push(chunk);
    // });

    // doc.on('end', () => {
    //     callback(Buffer.concat(chunks));
    // });

    doc.on('data', (chunk) => {
        chunks.push(chunk);
    });

    doc.on('end', () => {
        // const result = Buffer.concat(chunks);
        // callback('data:application/pdf;base64,' + result.toString('base64'));
        callback(Buffer.concat(chunks));
    });
    doc.end();
};
