// import axios from 'axios';
// import { useState } from 'react';

import { rangeFogFactor } from "three/tsl";

// export default function FileUploader() {
//   const [file, setFile] = useState(null);
//   const [status, setStatus] = useState('idle'); // 'idle' | 'uploading' | 'success' | 'error'
//   const [uploadProgress, setUploadProgress] = useState(0);

//   function handleFileChange(e) {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   }

//   async function handleFileUpload() {
//     if (!file) return;

//     setStatus('uploading');
//     setUploadProgress(0);

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       await axios.post('https://httpbin.org/post', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         onUploadProgress: (progressEvent) => {
//           const progress = progressEvent.total
//             ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
//             : 0;
//           setUploadProgress(progress);
//         },
//       });

//       setStatus('success');
//       setUploadProgress(100);
//     } catch (err) {
//       setStatus('error');
//       setUploadProgress(0);
//     }
//   }

//   return (
//     <center>

  
//     <div className="space-y-2  text-white mt-5">
//       <input type="file" onChange={handleFileChange} />

//       {file && (
//         <div className="mb-4 text-sm">
//           <p>File name: {file.name}</p>
//           <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
//           <p>Type: {file.type}</p>
//         </div>
//       )}

//       {status === 'uploading' && (
//         <div className="space-y-2">
//           <div className="h-2.5 w-full rounded-full bg-gray-200">
//             <div
//               className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
//               style={{ width: `${uploadProgress}%` }}
//             ></div>
//           </div>
//           <p className="text-sm text-gray-600">{uploadProgress}% uploaded</p>
//         </div>
//       )}

//       {file && status !== 'uploading' && (
//         <button onClick={handleFileUpload} className='bg-blue-600 rounded-xl w-30 h-7 cursor-pointer'>Upload</button>
//       )}

//       {status === 'success' && (
//         <p className="text-sm text-green-600">File uploaded successfully!</p>
//       )}

//       {status === 'error' && (
//         <p className="text-sm text-red-600">Upload failed. Please try again.</p>
//       )}
//     </div>
//     </center>
//   );
// }

import React from 'react'
import {HeroSectionOne} from './Components/HeroSection'


import { Routes, Route } from "react-router-dom";
import {SignupFormDemo} from './Components/Signup';
import { LoginFormDemo } from "./Components/Login";
import Layout from "./Components/Layout";
import { Sidebar } from "./Sidebar";



 
const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<HeroSectionOne/>}/>
       {/* <Route path='' element={<Sidebar/>}/> */}
      <Route path="/signup" element={<SignupFormDemo/>}/>
      <Route path="/login" element={<LoginFormDemo/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
