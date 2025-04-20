import React from 'react';

const Step4_ProfilePreview = ({ prevStep, values }) => (
  <center>
  <div className='text-black border-2 border-gray-600 w-80 rounded-2xl bg-white mt-5'>
    <h2 className='mt-3'>Step 4: Profile Preview</h2>
    <p className='mt-5'><strong>Name:</strong> {values.name}</p>
    <p className='mt-5'><strong>Skills:</strong> {values.skills}</p>
    <p className='mt-5'><strong>Domain:</strong> {values.domain}</p>
    <p className='mt-5'><strong>Resume:</strong> {values.resume ? values.resume.name : 'None'}</p>
    <p className='mt-5'><strong>Linkedin:</strong> {values.Linkedin ? values.Linkedin.name : 'None'}</p>
    <button onClick={prevStep} className='mr-5 mt-5'>Back</button>
    <button onClick={() => alert('Profile Submitted!')} className='bg-blue-600 w-30 h-7 font-bold rounded-xl text-white'>Submit</button>
  </div>
  </center>
);

export default Step4_ProfilePreview;
