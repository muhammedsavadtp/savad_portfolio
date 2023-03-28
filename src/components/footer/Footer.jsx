import React from 'react'

const Footer = () => {
  function getCurrentYear() {
    var date = new Date();
    var year = date.getFullYear();
    return year;
  }
  let today = new Date();
  let date = String(today.getDate()).padStart(2, "0"); // returns a string with two digits
  let month = String(today.getMonth() + 1).padStart(2, "0"); // returns a string with two digits
  let year = today.getFullYear(); // returns a four-digit number

  // join the parts with a slash (/) or any other separator
  let formattedDate = date + "/" + month + "/" + year;
  console.log(formattedDate); // 27/03/2023

  return (
    <div className='bg-gray-800 w-full h-16'>
      <h1 className='text-center text-xl font-bold text-white mt-5'>© {getCurrentYear() } </h1>
    </div>
  )
}

export default Footer
