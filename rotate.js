const PDFDocument = require('pdfkit');
const fs = require ('fs');
const bwipjs = require('bwip-js');



var env = process.env.NODE_ENV || "development";
class DeutschePost {

  generate_label_pdf() {
    var label_doc = new PDFDocument({
      layout: 'landscape',
      size: [this.cm_to_point(29), this.cm_to_point(21)],
    //  margin: this.cm_to_point(0.8),
    //  background : 'yellow'
   });


    label_doc.pipe(fs.createWriteStream('rotate.pdf'));


    label_doc.save();
     label_doc.fillColor('black').fontSize(8).font('Helvetica-Bold');
     label_doc.lineWidth(3);
     label_doc.lineCap('round').moveTo(100,150).quadraticCurveTo(102, 165, 109, 145);
label_doc.stroke();
    label_doc.end();
  }


  cm_to_point(cm) {
    return cm * 28.3465;
  }
}

var dp = new DeutschePost();
dp.generate_label_pdf();
