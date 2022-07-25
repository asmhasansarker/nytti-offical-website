import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import PrintContent from './PrintContent';

const PrintButton = () => {
  const componentRef = useRef();

  return (
    <div className='container'>
      <ReactToPrint
              trigger={() => <div className='text-center my-3'>
                  <button className='btn btn-danger '><i className="fa-solid fa-print"></i> Print</button>
        </div>}
        content={() => componentRef.current}
      />
      <PrintContent ref={componentRef} />
    </div>
  );
};

export default PrintButton