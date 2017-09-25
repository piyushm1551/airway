const PDFDocument = require('pdfkit');
const fs = require ('fs');
const bwipjs = require('bwip-js');



var env = process.env.NODE_ENV || "development";
class DeutschePost {

  generate_label_pdf() {
    var label_doc = new PDFDocument({
      layout: 'landscape',
      size: [this.cm_to_point(29), this.cm_to_point(21)],
      margin: this.cm_to_point(0.8),
      background : 'yellow'    });


    label_doc.pipe(fs.createWriteStream('output.pdf'));


    //----------------YELLOW BOX STARTS HERE-----------------------

    label_doc.rect(this.cm_to_point(0.8), this.cm_to_point(0.8), this.cm_to_point(19.5), this.cm_to_point(14.8))
   .fill('#ffcb06');

    //-------------------------------------------------------------


    //--------------------AIRWAY BILL TEXT-------------------------

     label_doc.fillColor('black').fontSize(24);
      label_doc.font('Helvetica').text('AIRWAYBILL', this.cm_to_point(1.3), this.cm_to_point(1.8), {
        align: 'left',
       });

    //-------------------------------------------------------------


    //--------------------DEUTSCHEPOST LOGO-------------------------

    label_doc.image('/home/dell/Desktop/airway/images/logo.png',this.cm_to_point(13.9), this.cm_to_point(1.2),{
          width: this.cm_to_point(6),
          height: this.cm_to_point(1.2),
          align: 'left',
          valign: 'down'
        });

    //-------------------------------------------------------------




    //--------------------SENDERS DETAILS SIDEBOX------------------
    label_doc.save();
     label_doc.fillColor('black').fontSize(7.5).font('Helvetica');
      label_doc.rotate(270, {origin:[0,0]}).save();

      //-----------------SENDERS DETAILS BOX-----------------------
      label_doc.rect(this.cm_to_point(-6.5), this.cm_to_point(1.2), this.cm_to_point(3.6), this.cm_to_point(0.5))
      .fill('#ffe192');

      //-----------------SENDERS DETAILS WHITE BOX-----------------------
      label_doc.rect(this.cm_to_point(-6.5), this.cm_to_point(1.7), this.cm_to_point(3.6), this.cm_to_point(8.7))
      .fill('#fefefe');

      label_doc.fillColor('black').fontSize(8).font('Helvetica-Bold');

      //-----------------SENDERS DETAILS TEXT-----------------------
      label_doc.text(`Sender's Details`, this.cm_to_point(-5.7),  this.cm_to_point(1.35), {
        //align: 'left',
        width: this.cm_to_point(11),
        height: this.cm_to_point(10)
       });
     //--------------------SERVICE DETAILS BOX---------------------

      label_doc.rect(this.cm_to_point(-9.5), this.cm_to_point(1.2), this.cm_to_point(2.9), this.cm_to_point(0.5))
      .fill('#ffe192');

      //--------------------SERVICE DETAILS WHITE BOX---------------------

      label_doc.rect(this.cm_to_point(-9.5), this.cm_to_point(1.7), this.cm_to_point(2.9), this.cm_to_point(8.7))
            .fill('#fefefe');

      label_doc.fillColor('black').fontSize(8).font('Helvetica-Bold');

      //--------------------SERVICE DETAILS TEXT---------------------
      label_doc.text(`Service Details`, this.cm_to_point(-9.0),  this.cm_to_point(1.35), {
        //align: 'left',
        width: this.cm_to_point(11),
        height: this.cm_to_point(10)
       });

       //--------------------BLANK SPACE BOX---------------------

        label_doc.rect(this.cm_to_point(-15.3), this.cm_to_point(1.2), this.cm_to_point(5.7), this.cm_to_point(0.5))
        .fill('#ffe192');

      //--------------------BLANK SPACE WHITE BOX---------------------

        label_doc.rect(this.cm_to_point(-15.3), this.cm_to_point(1.7), this.cm_to_point(5.7), this.cm_to_point(8.7))
        .fill('#fefefe');

        label_doc.fillColor('black').fontSize(8).font('Helvetica-Bold');

        //--------------------BLANK SPACE TEXT---------------------
        label_doc.text(`Please leave space for dispatch bar code`, this.cm_to_point(-15.2),  this.cm_to_point(1.35), {
          //align: 'left',
          width: this.cm_to_point(11),
          height: this.cm_to_point(10)
         });


       //--------------------BARCODE WHITE BOX---------------------

         label_doc.rect(this.cm_to_point(-6.35), this.cm_to_point(10.6), this.cm_to_point(3.45), this.cm_to_point(9.25))
         .fill('#fefefe');

          //--------------------RECIEVERS DETAILS BOX---------------------

          label_doc.rect(this.cm_to_point(-9.95), this.cm_to_point(10.6), this.cm_to_point(3.5), this.cm_to_point(0.5))
          .fill('#ffe192');

        //--------------------RECIEVERS DETAILS WHITE BOX---------------------

          label_doc.rect(this.cm_to_point(-9.95), this.cm_to_point(11.1), this.cm_to_point(3.5), this.cm_to_point(8.75))
          .fill('#fefefe');

          label_doc.fillColor('black').fontSize(8).font('Helvetica-Bold');

          //--------------------RECIEVERS DETAILS TEXT---------------------
          label_doc.text(`Reciever's Details`, this.cm_to_point(-9.45),  this.cm_to_point(10.75), {
            //align: 'left',
            width: this.cm_to_point(11),
            height: this.cm_to_point(10)
           });

           //--------------------DEUTSCHEPOST WEIGHT BOX---------------------

            label_doc.rect(this.cm_to_point(-12.05), this.cm_to_point(10.6), this.cm_to_point(2), this.cm_to_point(9.25))
            .fill('#ffe192');


            //--------------------SIGNATURE BOX---------------------

            label_doc.rect(this.cm_to_point(-14.95), this.cm_to_point(10.6), this.cm_to_point(2.8), this.cm_to_point(0.5))
            .fill('#ffe192');

          //--------------------SIGNATURE WHITE BOX---------------------

            label_doc.rect(this.cm_to_point(-14.95), this.cm_to_point(11.1), this.cm_to_point(2.8), this.cm_to_point(8.75))
            .fill('#fefefe');

            label_doc.fillColor('black').fontSize(8).font('Helvetica-Bold');

            //--------------------SIGNATURE TEXT---------------------
            label_doc.text(`Signature`, this.cm_to_point(-14.165),  this.cm_to_point(10.75), {
              //align: 'left',
              width: this.cm_to_point(11),
              height: this.cm_to_point(10)
             });

             //--------------------RIGHTMOST TEXT---------------------
             label_doc.fillColor('black').fontSize(6.5).font('Helvetica-Bold');

             label_doc.text(`Mat.-NR:915-XXX-000  01/09`, this.cm_to_point(-14.65),  this.cm_to_point(20), {
               //align: 'left',
               width: this.cm_to_point(11),
               height: this.cm_to_point(10)
              });

              //--------------------DEUTSCHEPOST AG LABEL BOX---------------------

              label_doc.rect(this.cm_to_point(-15.55), this.cm_to_point(10.6), this.cm_to_point(0.5), this.cm_to_point(0.5))
              .fill('#808183');

            //--------------------DEUTSCHEPOST AG LABEL BOX---------------------

              label_doc.rect(this.cm_to_point(-15.55), this.cm_to_point(11.1), this.cm_to_point(0.5), this.cm_to_point(9.2))
              .fill('#dcdcde');



            //--------------------HORIZONTAL TEXT STARTS NOW-------------------
            label_doc.rotate(90, {origin:[0,0]}).save();

              label_doc.fillColor('black').fontSize(9).font('Helvetica-Bold');


              //--------------------DEUTSCHEPOST AG LABEL TEXT---------------------
              label_doc.text(`1`, this.cm_to_point(10.75),  this.cm_to_point(15.2), {
                //align: 'left',
                width: this.cm_to_point(11),
                height: this.cm_to_point(10)
               });

               label_doc.text(`Deutsche Post AG  Copy  1  of  1`, this.cm_to_point(13.05),  this.cm_to_point(15.2), {
                 //align: 'left',
                 width: this.cm_to_point(11),
                 height: this.cm_to_point(10)
                });

                //--------------------DEUTSCHEPOST WEIGHT BOX TEXT---------------------
                label_doc.fillColor('black').fontSize(8).font('Helvetica-Bold');

                label_doc.text(`For Deutsche Post AG use only`, this.cm_to_point(10.85),  this.cm_to_point(10.2), {
                  //align: 'left',
                  width: this.cm_to_point(11),
                  height: this.cm_to_point(10)
                 });


                 label_doc.lineWidth(this.cm_to_point(0.03));
                 //label_doc.fillColor('black').lineTo(this.cm_to_point(3.8), this.cm_to_point(14.5)).strokeColor('black').stroke();
                 //---------------------TOTAL WEIGHT OUTLINE--------------------
                 label_doc.moveTo(this.cm_to_point(12.8), this.cm_to_point(11)).lineTo(this.cm_to_point(12.8), this.cm_to_point(10.5)).stroke();
                 label_doc.moveTo(this.cm_to_point(14.45), this.cm_to_point(11)).lineTo(this.cm_to_point(14.45), this.cm_to_point(10.5)).stroke();
                 label_doc.moveTo(this.cm_to_point(14.45), this.cm_to_point(11)).lineTo(this.cm_to_point(12.8), this.cm_to_point(11)).stroke();

                 //---------------------NO OF BAGS/BOXES OUTLINE--------------------
                 label_doc.moveTo(this.cm_to_point(16.3), this.cm_to_point(11)).lineTo(this.cm_to_point(16.3), this.cm_to_point(10.5)).stroke();
                 label_doc.moveTo(this.cm_to_point(19.60), this.cm_to_point(11)).lineTo(this.cm_to_point(19.6), this.cm_to_point(10.5)).stroke();
                 label_doc.moveTo(this.cm_to_point(19.60), this.cm_to_point(11)).lineTo(this.cm_to_point(16.3), this.cm_to_point(11)).stroke();

                 //---------------------SIGNATURE OUTLINE--------------------
                 label_doc.moveTo(this.cm_to_point(11.2), this.cm_to_point(11.4)).lineTo(this.cm_to_point(11.2), this.cm_to_point(11.9)).stroke();
                 label_doc.moveTo(this.cm_to_point(15.8), this.cm_to_point(11.4)).lineTo(this.cm_to_point(15.8), this.cm_to_point(11.9)).stroke();
                 label_doc.moveTo(this.cm_to_point(15.8), this.cm_to_point(11.9)).lineTo(this.cm_to_point(11.2), this.cm_to_point(11.9)).stroke();

                 //---------------------DATE/TIME OUTLINE--------------------
                 label_doc.moveTo(this.cm_to_point(16.3), this.cm_to_point(11.9)).lineTo(this.cm_to_point(16.3), this.cm_to_point(11.4)).stroke();
                 label_doc.moveTo(this.cm_to_point(19.60), this.cm_to_point(11.9)).lineTo(this.cm_to_point(19.6), this.cm_to_point(11.4)).stroke();
                 label_doc.moveTo(this.cm_to_point(19.60), this.cm_to_point(11.9)).lineTo(this.cm_to_point(16.3), this.cm_to_point(11.9)).stroke();


                 //------------------SIGNATURE BOX OUTLINES--------------------
                 //------------------------------------------------------------

                 //---------------------DATE/TIME OUTLINE 1(SIGNATURE)--------------------
                 label_doc.moveTo(this.cm_to_point(16.3), this.cm_to_point(13)).lineTo(this.cm_to_point(16.3), this.cm_to_point(12.5)).stroke();
                 label_doc.moveTo(this.cm_to_point(19.60), this.cm_to_point(13)).lineTo(this.cm_to_point(19.6), this.cm_to_point(12.5)).stroke();
                 label_doc.moveTo(this.cm_to_point(19.60), this.cm_to_point(13)).lineTo(this.cm_to_point(16.3), this.cm_to_point(13)).stroke();

                 //---------------------PICK UP AGENTS SIGNATURE OUTLINE (SIGNATURE)--------------------
                 label_doc.moveTo(this.cm_to_point(11.2), this.cm_to_point(13)).lineTo(this.cm_to_point(11.2), this.cm_to_point(12.5)).stroke();
                 label_doc.moveTo(this.cm_to_point(15.8), this.cm_to_point(13)).lineTo(this.cm_to_point(15.8), this.cm_to_point(12.5)).stroke();
                 label_doc.moveTo(this.cm_to_point(15.8), this.cm_to_point(13)).lineTo(this.cm_to_point(11.2), this.cm_to_point(13)).stroke();


                //---------------------DATE/TIME OUTLINE 2(SIGNATURE)--------------------
                label_doc.moveTo(this.cm_to_point(16.3), this.cm_to_point(14.8)).lineTo(this.cm_to_point(16.3), this.cm_to_point(14.3)).stroke();
                label_doc.moveTo(this.cm_to_point(19.60), this.cm_to_point(14.8)).lineTo(this.cm_to_point(19.6), this.cm_to_point(14.3)).stroke();
                label_doc.moveTo(this.cm_to_point(19.60), this.cm_to_point(14.8)).lineTo(this.cm_to_point(16.3), this.cm_to_point(14.8)).stroke();

                //---------------------SENDER'S SIGNATURE OUTLINE (SIGNATURE)--------------------
                label_doc.moveTo(this.cm_to_point(11.2), this.cm_to_point(14.8)).lineTo(this.cm_to_point(11.2), this.cm_to_point(14.3)).stroke();
                label_doc.moveTo(this.cm_to_point(15.8), this.cm_to_point(14.8)).lineTo(this.cm_to_point(15.8), this.cm_to_point(14.3)).stroke();
                label_doc.moveTo(this.cm_to_point(15.8), this.cm_to_point(14.8)).lineTo(this.cm_to_point(11.2), this.cm_to_point(14.8)).stroke();

                //-------------------------------------------------------------------

                //-----------------SENDERS DETAILS OULINES--------------------------------
                //------------------------------------------------------------------------


            //---------------------EKP NO OUTLINE--------------------
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(3.1)).lineTo(this.cm_to_point(1.7), this.cm_to_point(3.6)).stroke();
            label_doc.moveTo(this.cm_to_point(5.9), this.cm_to_point(3.1)).lineTo(this.cm_to_point(5.9), this.cm_to_point(3.6)).stroke();
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(3.6)).lineTo(this.cm_to_point(5.9), this.cm_to_point(3.6)).stroke();

            //---------------------COMPANY--------------------
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(4.3)).lineTo(this.cm_to_point(1.7), this.cm_to_point(3.8)).stroke();
            label_doc.moveTo(this.cm_to_point(5.9), this.cm_to_point(4.3)).lineTo(this.cm_to_point(5.9), this.cm_to_point(3.8)).stroke();
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(4.3)).lineTo(this.cm_to_point(5.9), this.cm_to_point(4.3)).stroke();

            //---------------------ADDRESS--------------------
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(5)).lineTo(this.cm_to_point(1.7), this.cm_to_point(4.5)).stroke();
            label_doc.moveTo(this.cm_to_point(5.9), this.cm_to_point(5)).lineTo(this.cm_to_point(5.9), this.cm_to_point(4.5)).stroke();
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(5)).lineTo(this.cm_to_point(5.9), this.cm_to_point(5)).stroke();

            //---------------------POSTCODE--------------------
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(5.7)).lineTo(this.cm_to_point(1.7), this.cm_to_point(5.2)).stroke();
            label_doc.moveTo(this.cm_to_point(5.9), this.cm_to_point(5.7)).lineTo(this.cm_to_point(5.9), this.cm_to_point(5.2)).stroke();
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(5.7)).lineTo(this.cm_to_point(5.9), this.cm_to_point(5.7)).stroke();

            //---------------------CONTACT NAME--------------------
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(6.4)).lineTo(this.cm_to_point(1.7), this.cm_to_point(5.9)).stroke();
            label_doc.moveTo(this.cm_to_point(5.9), this.cm_to_point(6.4)).lineTo(this.cm_to_point(5.9), this.cm_to_point(5.9)).stroke();
            label_doc.moveTo(this.cm_to_point(1.7), this.cm_to_point(6.4)).lineTo(this.cm_to_point(5.9), this.cm_to_point(6.4)).stroke();

            //----------------------------------------------------------------------
            //---------------RIGHT SIDE OUTLINE-------------------------------------

            //---------------------YOUR JOB REFERENCE------------------
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(3.1)).lineTo(this.cm_to_point(6.3), this.cm_to_point(3.6)).stroke();
            label_doc.moveTo(this.cm_to_point(10.2), this.cm_to_point(3.1)).lineTo(this.cm_to_point(10.2), this.cm_to_point(3.6)).stroke();
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(3.6)).lineTo(this.cm_to_point(10.2), this.cm_to_point(3.6)).stroke();

            //---------------------AUTHIRIZATION NO--------------------
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(4.3)).lineTo(this.cm_to_point(6.3), this.cm_to_point(3.8)).stroke();
            label_doc.moveTo(this.cm_to_point(10.2), this.cm_to_point(4.3)).lineTo(this.cm_to_point(10.2), this.cm_to_point(3.8)).stroke();
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(4.3)).lineTo(this.cm_to_point(10.2), this.cm_to_point(4.3)).stroke();

            //---------------------COUNTRY--------------------
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(5)).lineTo(this.cm_to_point(6.3), this.cm_to_point(4.5)).stroke();
            label_doc.moveTo(this.cm_to_point(10.2), this.cm_to_point(5)).lineTo(this.cm_to_point(10.2), this.cm_to_point(4.5)).stroke();
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(5)).lineTo(this.cm_to_point(10.2), this.cm_to_point(5)).stroke();

            //---------------------TOWN CITY --------------------
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(5.7)).lineTo(this.cm_to_point(6.3), this.cm_to_point(5.2)).stroke();
            label_doc.moveTo(this.cm_to_point(10.2), this.cm_to_point(5.7)).lineTo(this.cm_to_point(10.2), this.cm_to_point(5.2)).stroke();
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(5.7)).lineTo(this.cm_to_point(10.2), this.cm_to_point(5.7)).stroke();

            //---------------------TELEPHONE NO--------------------
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(6.4)).lineTo(this.cm_to_point(6.3), this.cm_to_point(5.9)).stroke();
            label_doc.moveTo(this.cm_to_point(10.2), this.cm_to_point(6.4)).lineTo(this.cm_to_point(10.2), this.cm_to_point(5.9)).stroke();
            label_doc.moveTo(this.cm_to_point(6.3), this.cm_to_point(6.4)).lineTo(this.cm_to_point(10.2), this.cm_to_point(6.4)).stroke();

            //-----------------SERVICE DETAILS OULINES--------------------------------
            //------------------------------------------------------------------------

            //---------------------PRIORITY------------------

            label_doc.rect(this.cm_to_point(4.5), this.cm_to_point(6.7), this.cm_to_point(0.5), this.cm_to_point(0.5)).stroke();

            //---------------------PACKET PLUS--------------------
            label_doc.rect(this.cm_to_point(4.5), this.cm_to_point(7.4), this.cm_to_point(0.5), this.cm_to_point(0.5)).stroke();

            //---------------------PACKET--------------------
            label_doc.rect(this.cm_to_point(4.5), this.cm_to_point(8.1), this.cm_to_point(0.5), this.cm_to_point(0.5)).stroke();

            //---------------------STANDARD --------------------
            label_doc.rect(this.cm_to_point(7.3), this.cm_to_point(6.7), this.cm_to_point(0.5), this.cm_to_point(0.5)).stroke();

            //-----------------------MAIL--------------------
            label_doc.rect(this.cm_to_point(7.3), this.cm_to_point(7.4), this.cm_to_point(0.5), this.cm_to_point(0.5)).stroke();

            //---------------------SERVICE DETAILS TOTAL WEIGHT --------------------
            label_doc.moveTo(this.cm_to_point(4.6), this.cm_to_point(8.9)).lineTo(this.cm_to_point(4.6), this.cm_to_point(9.4)).stroke();
            label_doc.moveTo(this.cm_to_point(6.0), this.cm_to_point(9.4)).lineTo(this.cm_to_point(6.0), this.cm_to_point(8.9)).stroke();
            label_doc.moveTo(this.cm_to_point(4.6), this.cm_to_point(9.4)).lineTo(this.cm_to_point(6.0), this.cm_to_point(9.4)).stroke();

            //---------------------SERVICE DETAILS NO OF BAGS/BOXES-------------------
            label_doc.moveTo(this.cm_to_point(8), this.cm_to_point(8.9)).lineTo(this.cm_to_point(8), this.cm_to_point(9.4)).stroke();
            label_doc.moveTo(this.cm_to_point(10.3), this.cm_to_point(9.4)).lineTo(this.cm_to_point(10.3), this.cm_to_point(8.9)).stroke();
            label_doc.moveTo(this.cm_to_point(8), this.cm_to_point(9.4)).lineTo(this.cm_to_point(10.3), this.cm_to_point(9.4)).stroke();


            //--------------------DEUTSCHEPOST AG LABEL WHITE BOXES---------------------


            //----------------------------TOTAL WEIGHT WHITE BOX----------------------------
            label_doc.rect(this.cm_to_point(12.825), this.cm_to_point(10.52), this.cm_to_point(1.6), this.cm_to_point(0.45))
            .fill('#ffffff');

            // //----------------------------NO OF BAGS / BOXES  WHITE BOX----------------------------
            label_doc.rect(this.cm_to_point(16.32), this.cm_to_point(10.525), this.cm_to_point(3.25), this.cm_to_point(0.45))
            .fill('#ffffff');

            //----------------------------SIGNATURE WHITE BOX----------------------------
            label_doc.rect(this.cm_to_point(11.22), this.cm_to_point(11.425), this.cm_to_point(4.55), this.cm_to_point(0.45))
            .fill('#ffffff');

            // //----------------------------DATE/TIME WHITE BOX----------------------------
            label_doc.rect(this.cm_to_point(16.32), this.cm_to_point(11.425), this.cm_to_point(3.25), this.cm_to_point(0.45))
            .fill('#ffffff');


            //-------------------------------------------------------------------------------------

            //-------------------------SENDERS DETAILS VALUE TEXT---------------------------------
            label_doc.fillColor('black').fontSize(6);
      //------------------EKP NO HEADING TEXT--------------------------------------------

      label_doc.text('EKP No.', this.cm_to_point(1.8), this.cm_to_point(2.95), {
        align: 'left',
      });
      //------------------------YOUR JOB REFERENCE HEADING TEXT------------------------------------
       label_doc.text('Your job reference', this.cm_to_point(6.4), this.cm_to_point(2.95), {
         align: 'left',
       });
       //------------------COMPANY HEADING TEXT--------------------------------------------

       label_doc.text('Company', this.cm_to_point(1.8), this.cm_to_point(3.67), {
         align: 'left',
       });
       //------------------------AUTHORIZATION NO HEADING TEXT------------------------------------
        label_doc.text('Authorization No.', this.cm_to_point(6.4), this.cm_to_point(3.67), {
          align: 'left',
        });
        //------------------ADDRESS HEADING TEXT--------------------------------------------

        label_doc.text('Address', this.cm_to_point(1.8), this.cm_to_point(4.4), {
          align: 'left',
        });
        //------------------------COUNTRY HEADING TEXT------------------------------------
         label_doc.text('Country', this.cm_to_point(6.4), this.cm_to_point(4.4), {
           align: 'left',
         });
         //------------------POSTCODE HEADING TEXT--------------------------------------------

         label_doc.text('Postcode', this.cm_to_point(1.8), this.cm_to_point(5.1), {
           align: 'left',
         });
         //-------------------TOWN /CITY HEADING TEXT------------------------------------
          label_doc.text('Town/City', this.cm_to_point(6.4), this.cm_to_point(5.1), {
            align: 'left',
          });
          //-----------CONTACT NAME HEADING TEXT--------------------------------------------

          label_doc.text('Contact name', this.cm_to_point(1.8), this.cm_to_point(5.8), {
            align: 'left',
          });
          //------------TELEPHONE NO HEADING TEXT------------------------------------
           label_doc.text('Telephone No.', this.cm_to_point(6.4), this.cm_to_point(5.8), {
             align: 'left',
           });


        //---------------------EKP NO VALUE TEXT-----------------------
        label_doc.fillColor('black').fontSize(8);
           label_doc.text('0000000003', this.cm_to_point(1.35), this.cm_to_point(3.25), {
                 align: 'center',
                 characterSpacing:this.cm_to_point(0.25),
                 height: this.cm_to_point(0.25),
                 width: this.cm_to_point(5)
               });
           //------------------COMPANY VALUE TEXT--------------------------------------------

          label_doc.text('Test Account', this.cm_to_point(1.8), this.cm_to_point(3.95), {
            align: 'left',
          });
         //------------------------AUTHORIZATION NO VALUE TEXT------------------------------------
         label_doc.text('0000001', this.cm_to_point(6.4), this.cm_to_point(3.95), {
           align: 'left',
         });
         //------------------ADDRESS VALUE TEXT--------------------------------------------

        label_doc.text('XXXXXXXXX', this.cm_to_point(1.8), this.cm_to_point(4.65), {
          align: 'left',
        });
            //------------------------COUNTRY VALUE TEXT------------------------------------
        label_doc.text('NL', this.cm_to_point(6.4), this.cm_to_point(4.65), {
        align: 'left',
        });
        //------------------POSTCODE VALUE TEXT--------------------------------------------

        label_doc.text('111111', this.cm_to_point(1.8), this.cm_to_point(5.35), {
        align: 'left',
        });
        //------------------------TOWN /CITY VALUE TEXT------------------------------------
        label_doc.text('XXXXXX', this.cm_to_point(6.4), this.cm_to_point(5.35), {
        align: 'left',
        });
        //------------------CONTACT NAME VALUE TEXT--------------------------------------------

        label_doc.text('XXXXXXXX', this.cm_to_point(1.8), this.cm_to_point(6.1), {
        align: 'left',
        });
        //------------------------AUTHORIZATION NO VALUE TEXT------------------------------------
        label_doc.text('070-3469771', this.cm_to_point(6.4), this.cm_to_point(6.1), {
        align: 'left',
        });

//----------------------SERVICE DETAILS HEADING TEXT---------------------------
//------------------------------------------------------------------------------
//-------------------------SERVICE LEVEL HEADING TEXT---------------------------------------
label_doc.text('Service Level', this.cm_to_point(1.8), this.cm_to_point(6.85), {
  align: 'left',
});

//--------------------------PRIORITY HEADING TEXT-------------------------------------------
label_doc.text('Priority', this.cm_to_point(5.2), this.cm_to_point(6.85), {
  align: 'left',
});


//--------------------------STANDARD HEADING TEXT-------------------------------------------
label_doc.text('Standard', this.cm_to_point(8), this.cm_to_point(6.85), {
  align: 'left',
});

//-------------------------PRODUCT HEADING TEXT---------------------------------------
label_doc.text('Product', this.cm_to_point(1.8), this.cm_to_point(7.55), {
  align: 'left',
});

//--------------------------PACKET PLUS HEADING TEXT-------------------------------------------
label_doc.text('Packet Plus', this.cm_to_point(5.2), this.cm_to_point(7.55), {
  align: 'left',
});


//--------------------------MAIL TEXT-------------------------------------------
label_doc.text('Mail', this.cm_to_point(8), this.cm_to_point(7.55), {
  align: 'left',
});

//--------------------------PACKET HEADING TEXT-------------------------------------------
label_doc.text('Packet', this.cm_to_point(5.2), this.cm_to_point(8.25), {
  align: 'left',
});

//-------------------------QUANTITY HEADING TEXT-------1.8--------------------------------
label_doc.text('Quantity', this.cm_to_point(1.8), this.cm_to_point(8.9), {
  align: 'left',
});

//-----------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica-Bold').fontSize(6);
//-------------------------TOTAL WEIGHT HEADING TEXT-------1.8--------------------------------
label_doc.text('Total', this.cm_to_point(3.9), this.cm_to_point(9.0), {
  align: 'left',
});

label_doc.text('weight', this.cm_to_point(3.9), this.cm_to_point(9.2), {
  align: 'left',
});

//-------------------------NO OF BAGS AND BOXES HEADING TEXT-------1.8--------------------------------
label_doc.text('Number of', this.cm_to_point(6.8), this.cm_to_point(9.0), {
  align: 'left',
});

label_doc.text('bags/boxes', this.cm_to_point(6.8), this.cm_to_point(9.2), {
  align: 'left',
});
//------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica').fontSize(9);
//------------------------------------------------------------------------------
//-------------------------TOTAL WEIGHT HEADING TEXT-------1.8--------------------------------
label_doc.text('0.77', this.cm_to_point(4.7), this.cm_to_point(9.1), {
  align: 'left',
});

//-------------------------NO OF BAGS AND BOXES HEADING TEXT-------1.8--------------------------------
label_doc.text('1', this.cm_to_point(8.1), this.cm_to_point(9.1), {
  align: 'left',
});

//------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica').fontSize(11);
//------------------------------------------------------------------------------
//----------------------------KG SYMBOL-----------------------------------------
label_doc.text('kg', this.cm_to_point(6.025), this.cm_to_point(9), {
  align: 'left',
});
//------------------------------------------------------------------------------

//-------------------DEUTSCHEPOST AG LABEL TEXT HEADING-------------------------
//-----------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica-Bold').fontSize(6);
//-------------------------TOTAL WEIGHT HEADING TEXT-------1.8--------------------------------
label_doc.text('Total', this.cm_to_point(11.9), this.cm_to_point(10.6), {
  align: 'left',
});

label_doc.text('weight', this.cm_to_point(11.9), this.cm_to_point(10.8), {
  align: 'left',
});

//-------------------------NO OF BAGS AND BOXES HEADING TEXT-------1.8--------------------------------
label_doc.text('Number of', this.cm_to_point(15.1), this.cm_to_point(10.6), {
  align: 'left',
});

label_doc.text('bags/boxes', this.cm_to_point(15.1), this.cm_to_point(10.8), {
  align: 'left',
});

//-------------------------SIGNATURE HEADING TEXT-------1.8--------------------------------
label_doc.text('Signature', this.cm_to_point(11.4), this.cm_to_point(11.2), {
  align: 'left',
});

//-------------------------DATE / TIME HEADING TEXT-------1.8--------------------------------
label_doc.text('Date / Time', this.cm_to_point(16.4), this.cm_to_point(11.2), {
  align: 'left',
});


//------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica').fontSize(9);
//------------------------------------------------------------------------------
//----------------------------KG SYMBOL-----------------------------------------

label_doc.text('kg', this.cm_to_point(14.50), this.cm_to_point(10.7), {
  align: 'left',
});
//------------------------------------------------------------------------------
//-------------------------SIGNATURE LABEL TEXT HEADING-------------------------
//-----------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica-Bold').fontSize(6);

//-------------------------PICK UP AGENT SIGNATURE HEADING TEXT-------------------------------
label_doc.text(`Pickup Agent's Signature`, this.cm_to_point(11.4), this.cm_to_point(12.3), {
  align: 'left',
});
//-------------------------DATE / TIME 1 HEADING TEXT-----------------------------
label_doc.text('Date / Time', this.cm_to_point(16.4), this.cm_to_point(12.3), {
  align: 'left',
});
//-------------------------SENDERS SIGNATURE HEADING TEXT-------------------------------
label_doc.text(`Sender's Signature`, this.cm_to_point(11.4), this.cm_to_point(14.1), {
  align: 'left',
});
//-------------------------DATE / TIME 2 HEADING TEXT-----------------------------
label_doc.text('Date / Time', this.cm_to_point(16.4), this.cm_to_point(14.1), {
  align: 'left',
});
//------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica').fontSize(7);
//------------------------------------------------------------------------------
//-----------------TERMS AND CONDITIONS-----------------------------------------
label_doc.text('The consignment shall be subject to general terms and conditions of', this.cm_to_point(11.2), this.cm_to_point(13.2), {
  align: 'left',
});
label_doc.text('Deutsche Post AG as available online under www.deutschepost.com/packet/toc', this.cm_to_point(11.2), this.cm_to_point(13.5), {
  align: 'left',
});

//---------------------------------------------------------------------------------------------------------------------------
//-------------------------RECIEVERS DETAILS TEXT HEADING-------------------------
//-----------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica-Bold').fontSize(8);
//-------------------------LINE NO 1 TEXT-------------------------------
label_doc.text(`Deutsche Post AG`, this.cm_to_point(11.4), this.cm_to_point(6.7), {
  align: 'left',
});
//-------------------------LINE NO 2 TEXT-------------------------------
label_doc.text(`IPZ Frankfurt/M.`, this.cm_to_point(11.4), this.cm_to_point(7.1), {
  align: 'left',
});
//-------------------------LINE NO 5 TEXT-------------------------------
label_doc.text(`Mailhouse (3. OG)`, this.cm_to_point(11.4), this.cm_to_point(8.2), {
  align: 'left',
});
//-------------------------LINE NO 6 TEXT-------------------------------
label_doc.text(`60549 Frankfurt/M.`, this.cm_to_point(11.4), this.cm_to_point(8.6), {
  align: 'left',
});
//-------------------------LINE NO 7 TEXT-------------------------------
label_doc.text(`Germany`, this.cm_to_point(11.4), this.cm_to_point(9), {
  align: 'left',
});

//-----------------------------------------------------------------------------------
label_doc.fillColor('black').font('Helvetica').fontSize(7);

//-------------------------LINE NO 3 TEXT-------------------------------
label_doc.text(`Flughafen Geb. 190`, this.cm_to_point(11.4), this.cm_to_point(7.5), {
  align: 'left',
});
//-------------------------LINE NO 4 TEXT-------------------------------
label_doc.text(`(Lademeisterburo Westseite)`, this.cm_to_point(11.4), this.cm_to_point(7.8), {
  align: 'left',
});
//-------------------------CONTACT TEXT-------------------------------
label_doc.text(`IPZ Contact No. +49 69 69531025`, this.cm_to_point(16), this.cm_to_point(9.6), {
  align: 'left',
});

//---------------------------------------------------------------------------------------------------------------------------
//-------------------------BARCODE TEXT HEADING-------------------------
//-----------------------------------------------------------------------------------
//-------------------------LINE NO 1 TEXT-------------------------------
label_doc.text(`Your shipment`, this.cm_to_point(10.7), this.cm_to_point(4.6), {
  align: 'left',
});
//-------------------------LINE NO 2 TEXT-------------------------------
label_doc.text(`No. (please`, this.cm_to_point(10.7), this.cm_to_point(5), {
  align: 'left',
});
//-------------------------LINE NO 3 TEXT-------------------------------
label_doc.text(`always state`, this.cm_to_point(10.7), this.cm_to_point(5.4), {
  align: 'left',
});
//-------------------------LINE NO 4 TEXT-------------------------------
label_doc.text(`on inquiry).`, this.cm_to_point(10.7), this.cm_to_point(5.8), {
  align: 'left',
});

//-------------------------BLACK ARROW-------------------------------

label_doc.lineWidth(3);
label_doc.fill('black');
label_doc.polygon([this.cm_to_point(12.2),this.cm_to_point(5.8)], [this.cm_to_point(12.2), this.cm_to_point(6)], [this.cm_to_point(12.3), this.cm_to_point(5.9)]);
label_doc.stroke();


//-------------------------BLACK ARROW  SIDE  BARCODE TEXT-------------------------------
label_doc.text(`9980000003342`, this.cm_to_point(12.6), this.cm_to_point(5.8), {
  align: 'left',
});
//----------------------------------------------------------------------------------------
//-----------------------------BARCODE------------------------------------------

bwipjs.toBuffer({
        bcid:        'code128',       // Barcode type  -- identcode  11 / 12  ||  leitcode  13 / 14
        text:        '9980000003342',    // Text to encode
        backgroundcolor: 'FFFFFF',
        width :      46,
        height:      16,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',
    }, function (err, png) {
        if (err) {
          } else {
          console.log(png);
          require("fs").writeFile("out5.png", png, function(err) {
            console.log(err);
          });
            }
    });



 label_doc.image('/home/dell/Desktop/airway/out5.png',this.cm_to_point(12.6), this.cm_to_point(3.4),{
   width: this.cm_to_point(7),
   height: this.cm_to_point(2.2),
   align: 'left',
   valign: 'down'
 });
//--------------------------------------------------------------------------------------------------------

//-----------------------------------TICKS----------------------------------------------------------------

//--------------------------------PRIORITY TICK------------------------------------------------------------
 label_doc.image('/home/dell/Desktop/airway/images/tick.png',this.cm_to_point(4.5), this.cm_to_point(6.7),{
   width: this.cm_to_point(0.5),
   height: this.cm_to_point(0.5),
   align: 'left',
   valign: 'down'
 });

 //--------------------------------PACKET PLUS TICK------------------------------------------------------------
  label_doc.image('/home/dell/Desktop/airway/images/tick.png',this.cm_to_point(4.5), this.cm_to_point(7.4),{
    width: this.cm_to_point(0.5),
    height: this.cm_to_point(0.5),
    align: 'left',
    valign: 'down'
  });

  //--------------------------------PACKET TICK------------------------------------------------------------
   label_doc.image('/home/dell/Desktop/airway/images/tick.png',this.cm_to_point(4.5), this.cm_to_point(8.1),{
     width: this.cm_to_point(0.5),
     height: this.cm_to_point(0.5),
     align: 'left',
     valign: 'down'
   });

   //--------------------------------STANDARD TICK------------------------------------------------------------
    label_doc.image('/home/dell/Desktop/airway/images/tick.png',this.cm_to_point(7.3), this.cm_to_point(6.7),{
      width: this.cm_to_point(0.5),
      height: this.cm_to_point(0.5),
      align: 'left',
      valign: 'down'
    });

    //--------------------------------MAIL TICK------------------------------------------------------------
     label_doc.image('/home/dell/Desktop/airway/images/tick.png',this.cm_to_point(7.3), this.cm_to_point(7.4),{
       width: this.cm_to_point(0.5),
       height: this.cm_to_point(0.5),
       align: 'left',
       valign: 'down'
     });


    label_doc.end();
  }

  cm_to_point(cm) {
    return cm * 28.3465;
  }
}

var dp = new DeutschePost();
dp.generate_label_pdf();
