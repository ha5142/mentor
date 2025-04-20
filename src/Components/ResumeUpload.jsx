import React from 'react';

const Step3_ResumeUpload = ({ nextStep, prevStep, handleFileChange, values }) => (
  <center>
  <div className='text-black  mt-5 border-2 border-gray-600 w-80 rounded-2xl bg-white'>
    <h2>Step 3: Upload Resume</h2>
    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className='mt-5 border-1 rounded-xl'/>
    <br />
    {values.resume && <p>Uploaded: {values.resume.name}</p>}
    <div className='mt-5'>
    <button onClick={prevStep} className='mr-5'>Back</button>
    <button onClick={nextStep}>Next</button>
    </div>
  </div>
  </center>
);

export default Step3_ResumeUpload;
