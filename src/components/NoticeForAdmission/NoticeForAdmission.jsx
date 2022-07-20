import React from 'react'
import Marquee from "react-fast-marquee";

const NoticeForAdmission = () => {
  return (
      <Marquee speed={150}className='display-6 text-danger bg-info py-3 px-3' gradient={false} pauseOnHover={true}>
       
          <h1 className='me-3'>জাতীয় যুব ও কারিগরি প্রশিক্ষণ কেন্দ্রে ভর্তি চলছে। এস.এস.সি পরিক্ষার্থীদের জন্য বিশেষ ছাড়।</h1>
        
    </Marquee>
  )
}

export default NoticeForAdmission