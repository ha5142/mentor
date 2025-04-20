import React from 'react';

const Step1_Name = ({ nextStep, handleChange, values }) => (
  <center>
  <div className='text-black mt-10 py-8 border-2 border-gray-600 w-70 rounded-2xl bg-white'>
    <h2>Step 1: Enter Name</h2>
    <input type="text" placeholder="Full Name" onChange={handleChange('name')} value={values.name} className='mt-5 border-1 rounded-xl px-2' />
    <br />
    <button onClick={nextStep} className='mt-5'>Next</button>
  </div>
  </center>
);

export default Step1_Name;
