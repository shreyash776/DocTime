import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
         
          <h3>Who We Are</h3>
         <p>
         At DocTime, we strive to revolutionize healthcare by providing a seamless platform for booking doctor appointments. Our mission is to connect patients with top-rated healthcare providers effortlessly, ensuring that you receive the care you need when you need it. With just a few clicks, you can schedule appointments with your preferred doctors, browse through comprehensive profiles, and read patient reviews to make informed decisions. Our platform covers a wide range of medical services, from routine check-ups to specialized consultations, all while maintaining the highest standards of security and confidentiality. Accessible 24/7, DocTime is dedicated to making healthcare more convenient, efficient, and patient-centric.
         </p>


        </div>
      </div>
    </>
  );
};

export default Biography;
