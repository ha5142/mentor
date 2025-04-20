import React, { Component } from 'react';

// Step 1: Name Component
const Step1_Name = ({ nextStep, handleChange, values }) => (
  <div className="flex justify-center items-center min-h-screen bg-black">
    <div className="bg-black border-2 border-white rounded-2xl p-8 w-80 shadow-lg shadow-white/10 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Step 1: Enter Name</h2>
      <input
        type="text"
        placeholder="Full Name"
        onChange={handleChange('name')}
        value={values.name}
        className="w-full bg-gray-900 text-white border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white transition-all"
      />
      <button
        onClick={nextStep}
        className="mt-6 bg-white hover:bg-gray-200 text-black font-medium py-2 px-6 rounded-xl transition-all transform hover:scale-105 focus:outline-none"
      >
        Next
      </button>
    </div>
  </div>
);

// Step 2: Skills & Domain Component
const Step2_SkillsDomain = ({ nextStep, prevStep, handleChange, values }) => (
  <div className="flex justify-center items-center min-h-screen bg-black">
    <div className="bg-black border-2 border-white rounded-2xl p-8 w-80 shadow-lg shadow-white/10 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Step 2: Skills & Domain</h2>
      <input
        type="text"
        placeholder="Skills (e.g. React, Node.js)"
        onChange={handleChange('skills')}
        value={values.skills}
        className="w-full bg-gray-900 text-white border border-gray-700 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-white transition-all"
      />
      <input
        type="text"
        placeholder="Domain (e.g. Web Dev)"
        onChange={handleChange('domain')}
        value={values.domain}
        className="w-full bg-gray-900 text-white border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white transition-all"
      />
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-xl transition-all focus:outline-none"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-white hover:bg-gray-200 text-black font-medium py-2 px-6 rounded-xl transition-all transform hover:scale-105 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

// Step 3: Resume Upload Component
const Step3_ResumeUpload = ({ nextStep, prevStep, handleFileChange, values }) => (
  <div className="flex justify-center items-center min-h-screen bg-black">
    <div className="bg-black border-2 border-white rounded-2xl p-8 w-80 shadow-lg shadow-white/10 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Step 3: Upload Resume</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-300">Select File</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200 focus:outline-none"
        />
      </div>
      {values.resume && (
        <p className="text-gray-300 text-sm mb-4">
          Uploaded: {values.resume.name}
        </p>
      )}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-xl transition-all focus:outline-none"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-white hover:bg-gray-200 text-black font-medium py-2 px-6 rounded-xl transition-all transform hover:scale-105 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

// Step 4: Profile Preview Component
const Step4_ProfilePreview = ({ prevStep, values }) => (
  <div className="flex justify-center items-center min-h-screen bg-black">
    <div className="bg-black border-2 border-white rounded-2xl p-8 w-80 shadow-lg shadow-white/10 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Step 4: Profile Preview</h2>
      <div className="bg-gray-900 p-4 rounded-xl mb-6 text-left">
        <p className="text-white mb-2">
          <span className="text-gray-300 font-medium">Name:</span> {values.name || 'Not provided'}
        </p>
        <p className="text-white mb-2">
          <span className="text-gray-300 font-medium">Skills:</span> {values.skills || 'Not provided'}
        </p>
        <p className="text-white mb-2">
          <span className="text-gray-300 font-medium">Domain:</span> {values.domain || 'Not provided'}
        </p>
        <p className="text-white">
          <span className="text-gray-300 font-medium">Resume:</span> {values.resume ? values.resume.name : 'None'}
        </p>
        <p className="text-white">
          <span className="text-gray-300 font-medium">Linkedin Profile:</span> {values.Linkedin ? values.Linkedin.name : 'None'}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-xl transition-all focus:outline-none"
        >
          Back
        </button>
        <button
          onClick={() => alert('Profile Submitted!')}
          className="bg-white hover:bg-gray-200 text-black font-medium py-2 px-6 rounded-xl transition-all transform hover:scale-105 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);

// Main UserForm Component
class UserForm extends Component {
  state = {
    step: 1,
    name: '',
    skills: '',
    domain: '',
    resume: null,
  };

  nextStep = () => {
    this.setState(prev => ({ step: prev.step + 1 }));
  };

  prevStep = () => {
    this.setState(prev => ({ step: prev.step - 1 }));
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleFileChange = e => {
    this.setState({ resume: e.target.files[0] });
  };

  render() {
    const { step, name, skills, domain, resume } = this.state;
    const values = { name, skills, domain, resume };

    return (
      <div className="bg-black min-h-screen">
        {/* Progress indicator */}
        <div className="container mx-auto pt-6 px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map(num => (
                  <div key={num} className="flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        step >= num ? 'bg-white text-black' : 'bg-gray-800 text-white'
                      } transition-all duration-300 text-sm font-medium`}
                    >
                      {num}
                    </div>
                    <div className={text-xs mt-1 ${step >= num ? 'text-white' : 'text-gray-500'}}>
                      {num === 1 && 'Name'}
                      {num === 2 && 'Skills'}
                      {num === 3 && 'Resume'}
                      {num === 4 && 'Preview'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="h-1 bg-gray-800 rounded-full">
                  <div 
                    className="h-1 bg-white rounded-full transition-all duration-300"
                    style={{ width: ${((step - 1) / 3) * 100}% }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form steps */}
        {step === 1 && (
          <Step1_Name nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )}
        {step === 2 && (
          <Step2_SkillsDomain 
            nextStep={this.nextStep} 
            prevStep={this.prevStep} 
            handleChange={this.handleChange} 
            values={values} 
          />
        )}
        {step === 3 && (
          <Step3_ResumeUpload 
            nextStep={this.nextStep} 
            prevStep={this.prevStep} 
            handleFileChange={this.handleFileChange} 
            values={values} 
          />
        )}
        {step === 4 && (
          <Step4_ProfilePreview prevStep={this.prevStep} values={values} />
        )}
      </div>
    );
  }
}

export default UserForm;