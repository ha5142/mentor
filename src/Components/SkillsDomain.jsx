import React from 'react';

const Step2_SkillsDomain = ({ nextStep, prevStep, handleChange, values }) => (
  <center>
  <div className='text-black mt-5 border-2 border-gray-600 w-80 rounded-2xl bg-white'>
    <h2>Step 2: Skills & Domain</h2>
    <input type="text" placeholder="Skills (e.g. React, Node.js)" onChange={handleChange('skills')} value={values.skills} className='mt-5 border-1 rounded-xl py-2' />
    <br />
    <input type="text" placeholder="Domain (e.g. Web Dev)" onChange={handleChange('domain')} value={values.domain} className='mt-5 border-1 rounded-xl py-2' />
    <br />
    <div className=''>
    <button onClick={prevStep} className='mt-5 mr-7'>Back</button>
    <button onClick={nextStep} className='mt-5 ml-3'>Next</button>
    </div>
  </div>
  </center>
);

export default Step2_SkillsDomain;
