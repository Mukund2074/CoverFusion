'use client';
import React, { useRef } from 'react';
import './index.css';
import { FaPhoneVolume, FaUserTie } from 'react-icons/fa6';
import { HiOfficeBuilding } from 'react-icons/hi';
import { BiBuildings } from 'react-icons/bi';
import { FaEnvelopeOpen, FaPercentage } from 'react-icons/fa';
import { IoCalendar } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

const PrintPage = () => {


    const printRef = useRef();
    const location = useLocation();


    const css = ` 
      .print-section { width: 21cm; height: 29.7cm; padding-left: 0.5cm; padding-right: 0.5cm; }
      .print-flex-container { margin-top: 7cm; position: relative; display: flex; flex-direction: column; height: 12cm; overflow: hidden; }
      .print-header {  display: flex; justify-content: flex-start; align-items: flex-start; }
      .print-info { position: relative; display: flex; flex-direction: column; padding: 0.5rem; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25); border-radius: 10px;  }
      .bg-image-info { position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; border-radius: 10px; }
      .print-subtext { display: flex; align-items: center; gap: 0.5rem; font-size: 14px; font-weight: 600; }
      .print-date { position: relative; margin-left: auto; display: flex; justify-content: center; align-items: center;  border-radius: 5px; padding: 0.5rem; }
      .bg-image-date { position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; border-radius: 5px; }
      .print-date-box { border: 1px solid black; width: 6rem; height: 2rem; display: flex; justify-content: center; align-items: center; font-size: 15px; font-weight: bold; margin-left: 10px; border-radius: 5px; }
      .print-address { position: relative; padding: 1.5rem; display: flex; margin-left: auto; margin-top: 0.5rem; padding-right: 1rem; width: 60%; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; }
      .bg-image-to { position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; border-radius: 10px; z-index: 0; }
      .print-address-label { font-size: 14px; font-weight: 600; margin-right: 0.5rem; margin-left: 0.5rem; z-index: 1; }
      .print-address-details { display: flex; flex-direction: column; width: 100%; z-index: 1; }
      .ribbon-holder { display: flex; justify-content: center; align-items: center; max-width: 100%; max-height: 50px; }
      .print-line { border-bottom: 1px solid black; font-size: 14px; font-weight: 600; color: black; }
      .bg-image-ribbon { width: 100%; height: 100%; border-radius: 10px; }
      .print-footer { z-index: 100; position: relative; display: flex; flex-direction: column; padding: 0.5rem; align-items: center;  margin-top: auto; margin-bottom: 2rem; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25); border-radius: 8px; }
      .bg-image-from { z-index: -1; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; border-radius: 8px; }
      .print-from { display: flex; align-items: center; width: 100%; margin-bottom: 2px; }
      .print-icon { width: 20px; height: 20px; margin-left: 0.5rem; }
      .print-icon-img { width: 40px; height: 25px; margin-left: 0.5rem; }
      .print-footer-text { font-size: 13px; }
      .print-logo { width: 1.5rem; height: 1.5rem; margin-left: 0.5rem; object-fit: contain; }
      .bold-text { font-weight: bold; }
       .print-product { position: relative; background-color: #d0d0d056; display: flex; flex-direction: column; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; }
        .print-product-image { z-index: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; border-radius: 8px; }
       .print-product-title { font-size: 16px; font-weight: 700; display: flex; justify-content: center; align-items: center; backdrop-filter: blur(10px); border-radius: 10px; padding: 0.5rem; }
      .print-product-text { font-size: 14px; font-weight: 700; display: flex; align-items: center; backdrop-filter: blur(1px); filter: brightness(95%); border-radius: 10px; padding: 0.5rem; color: black;}

    `;

    let date = location.state.date || '';


    const PrintableComponent = () => {
        return (
            <React.Fragment>
                <style>{css}</style>

                <section ref={printRef} className="print-section">

                    <div className="print-flex-container">
                        <div className="print-header">
                            <span className="print-info">
                                <img src='./info.png' alt="Logo" className="bg-image-info" />
                                <font className="print-subtext"><img src='./box.png' alt="Logo" className="print-logo" /> Product Name:- {location.state.product_name || ''}</font>
                                <font className="print-subtext"><img src='./checklist.png' alt="Logo" className="print-logo" />Product Unit:- {location.state.product_unit || ''}</font>
                                <font className="print-subtext"><img src='./truck.png' alt="Logo" className="print-logo" />Transporter:- {location.state.transporter || ''}</font>
                            </span>

                            <div className="print-date">
                                <img src='./info.png' alt="Logo" className="bg-image-info" />
                                <IoCalendar className="print-icon" /> Date:- <span className="print-date-box">{date.split('-').reverse().join('-')}</span>

                            </div>
                        </div>

                        <div className="print-address">
                            <img src='./plane.png' alt="Logo" className="bg-image-to" />
                            <font className="print-address-label">To:- &nbsp;</font>
                            <span className="print-address-details">
                                <div className="print-line ">{location.state.address1 || ''}</div>
                                <div className="print-line ">{location.state.address2 || ''}</div>
                                <div className="print-line ">{location.state.address3 || ''}</div>
                                <div className="print-line ">{location.state.customer_name || ''} - {location.state.customer_mobile || ''}</div>
                            </span>
                        </div>

                        {/* <img src='./ribbon.png' alt="GST" className="ribbon-image" /> */}

                        <div className="print-footer">
                            <img src='./from1.png' alt="Logo" className="bg-image-from" />
                            <span className="print-from">
                                <FaUserTie className="print-icon" />
                                <font className="print-footer-text"> <font className="bold-text">| From :- Rajeshbhai Naranbhai Hadiya</font></font>
                            </span>
                            <span className="print-from">
                                <HiOfficeBuilding className="print-icon" />
                                <font className="print-footer-text"><font className="bold-text"> | B/O :- </font> Madhupura Chowk, B/h kukarvada Bank AmarJash Enclave F/6, Madhupura, Ahmedabad - 380004</font>
                            </span>
                            <span className="print-from">
                                <BiBuildings className="print-icon" />
                                <font className="print-footer-text"> <font className="bold-text">| H/O :-</font> Gujarati Ni Vadi, Gokul Nagar 2 Opp- Nilkanth Mahadev Mandir, Jetpur, Dist: - Rajkot - 360370</font>
                            </span>

                            <span className="print-from">
                                <FaPhoneVolume className="print-icon" />
                                <font className="print-footer-text"> <font className="bold-text">| Mobile :- </font>+91 9979711975</font>

                                <FaEnvelopeOpen className="print-icon" />
                                <font className="print-footer-text"> <font className="bold-text">| Email :- </font> rajuhadiya9@gmail.com</font>
                            </span>

                            <span className="print-from">
                                <FaPercentage className="print-icon" />
                                <font className="print-footer-text"> <font className="bold-text">| GST :- </font> 24AKCPH5546C1ZM</font>

                                <img src='./fssai.png' alt="FSSAI" className="print-icon-img" />
                                <font className="print-footer-text"> <font className="bold-text">| FSSAI :- </font> 10717019000186</font>
                            </span>

                        </div>



                    </div>


                    <span className='print-product'>
                        <img src='./product.png' alt="Logo" className="print-product-image" />
                        <font className="print-product-title">PRODUCT LIST </font>
                        <font className='print-product-text'>
                            ◎   તલ, રાય, જીરૂ, વરિયાળી, મેથી, અજમો <br />
                            ◎    તજ,લવિંગ, બાદિયાન, મરી, તજપાન  <br />
                            ◎    કસુરીમેથી, કોપરા, આંબલી, સાબુદાણા, મોરૈયો, મેંદાસેવ  <br />
                            ◎    સોજી, મેંદા, આટા, બેસન, રવા, રાજગરા  <br />
                            ◎    આખા = મરચા, હળદર, ધાણી, સુંઠ  <br />
                            ◎    પાવડર = મરચું, હળદર, ધાણા, જીરૂ, ગરમ મસાલા,હિંગ તેમજ ઇન્સ્ટન્ટ મસાલા  <br />
                            ◎    અડદપાપડ, ચોખા પાપડ,ખીચીયા પાપડ, પાસ્તા, રમકડા, ઝાઇકા, ફ્રાઈમ્સ  <br />
                            ◎    કાજુ,બદામ, કીસમીસ,દ્રાક્ષ, અંજીર,અખરોટ, ખજૂર, ખારેક
                            <br />
                        </font>
                    </span>
                </section>


            </React.Fragment>
        );
    };

    const handlePrint = () => {
        const contentToPrint = printRef.current;

        const mywindow = window.open('', 'PRINT', `width=${screen.width}, height=${screen.height}`);
        mywindow.document.write(`
            <html><head><title>Print</title>
            <style>
                    ${css}
            </style>
            </head><body>
                ${contentToPrint.innerHTML}
            </body></html>
        `);
        mywindow.document.close();
        mywindow.print();

    };



    return (
        <div className='flex flex-col items-center bg-slate-100 min-h-screen min-w-screen p-2 gap-4'>

            <div className=' border-2 bg-white border-gray-600 p-4 rounded-xl max-w-[90dvw] max-h-[85dvh] overflow-scroll'>
                <PrintableComponent />
            </div>
            <p className='text-sm font-bold text-red-600'> WARNING:- MOBILE device OR small screen size can not show size A4 paper </p>
            <p className='text-sm font-bold text-red-600'> please click on print button to view the acctual print of the A4 size paper </p>

            <button
                onClick={handlePrint}
                className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
            >
                Print Current Page
            </button>

        </div>
    );
};

export default PrintPage;
