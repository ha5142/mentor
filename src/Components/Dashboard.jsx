// import React, { useState } from "react";
// import { MessageSquare, Users, CalendarCheck, UserPlus, Send, Search, Bell, Moon, User, LogOut } from "lucide-react";

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("chat");
//   const [message, setMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState([
//     { sender: "John Doe", message: "Hello! How can I help you with your career questions?", time: "10:30 AM", isAlumni: true },
//     { sender: "You", message: "Hi John! I'm interested in learning more about your experience in software engineering.", time: "10:32 AM", isAlumni: false }
//   ]);

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       const newMessage = { 
//         sender: "You", 
//         message: message, 
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         isAlumni: false
//       };
//       setChatMessages([...chatMessages, newMessage]);
//       setMessage("");
      
//       // Simulate response
//       setTimeout(() => {
//         const response = { 
//           sender: "John Doe", 
//           message: "Thanks for reaching out. I'd be happy to share my experience at Google. What specific aspects are you curious about?", 
//           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//           isAlumni: true
//         };
//         setChatMessages(prev => [...prev, response]);
//       }, 1000);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="flex h-screen bg-black">
//       {/* Sidebar */}
//       <div className="w-20 bg-gray-900 flex flex-col items-center py-6 border-r border-gray-800">
//         <div className="bg-white text-black rounded-full h-10 w-10 flex items-center justify-center font-bold mb-8">AS</div>
//         <div className="flex flex-col items-center space-y-8 mt-4">
//           <button 
//             onClick={() => setActiveTab("chat")} 
//             className={p-3 rounded-xl ${activeTab === "chat" ? "bg-white text-black" : "text-white hover:bg-gray-800"}}
//           >
//             <MessageSquare className="w-6 h-6" />
//           </button>
//           <button 
//             onClick={() => setActiveTab("alumni")} 
//             className={p-3 rounded-xl ${activeTab === "alumni" ? "bg-white text-black" : "text-white hover:bg-gray-800"}}
//           >
//             <Users className="w-6 h-6" />
//           </button>
//           <button 
//             onClick={() => setActiveTab("events")} 
//             className={p-3 rounded-xl ${activeTab === "events" ? "bg-white text-black" : "text-white hover:bg-gray-800"}}
//           >
//             <CalendarCheck className="w-6 h-6" />
//           </button>
//           <button 
//             onClick={() => setActiveTab("mentorship")} 
//             className={p-3 rounded-xl ${activeTab === "mentorship" ? "bg-white text-black" : "text-white hover:bg-gray-800"}}>
//             <UserPlus className="w-6 h-6" />
//           </button>
//         </div>
//         <div className="mt-auto">
//           <button className="p-3 text-white hover:bg-gray-800 rounded-xl">
//             <LogOut className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
//           <h1 className="text-xl font-bold text-white">
//             {activeTab === "chat" && "Alumni Chat"}
//             {activeTab === "alumni" && "Alumni Directory"}
//             {activeTab === "events" && "Upcoming Events"}
//             {activeTab === "mentorship" && "Mentorship Program"}
//           </h1>
//           <div className="flex items-center space-x-4">
//             <button className="relative text-white">
//               <Bell className="w-5 h-5" />
//               <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full"></span>
//             </button>
//             <div className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center">
//               <User className="w-4 h-4" />
//             </div>
//           </div>
//         </header>

//         {/* Content Area */}
//         <div className="flex-1 overflow-auto p-6">
//           {/* Chat Section */}
//           {activeTab === "chat" && (
//             <div className="h-full flex flex-col">
//               <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-900 rounded-xl border border-gray-800">
//                 <div className="h-12 w-12 bg-white text-black rounded-full flex items-center justify-center font-bold">JD</div>
//                 <div>
//                   <h3 className="font-bold text-white">John Doe</h3>
//                   <p className="text-gray-400 text-sm">Software Engineer at Google • Batch 2015</p>
//                 </div>
//               </div>
              
//               <div className="flex-1 overflow-y-auto mb-4 bg-gray-900 rounded-xl border border-gray-800 p-4">
//                 {chatMessages.map((msg, index) => (
//                   <div key={index} className={flex mb-4 ${!msg.isAlumni ? 'justify-end' : ''}}>
//                     {msg.isAlumni && (
//                       <div className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center mr-2 mt-1 font-bold text-sm">JD</div>
//                     )}
//                     <div className={max-w-xs rounded-lg px-4 py-2 ${msg.isAlumni ? 'bg-gray-800 text-white' : 'bg-white text-black'}}>
//                       <p>{msg.message}</p>
//                       <p className={text-xs mt-1 ${msg.isAlumni ? 'text-gray-400' : 'text-gray-600'}}>{msg.time}</p>
//                     </div>
//                     {!msg.isAlumni && (
//                       <div className="h-8 w-8 bg-gray-800 text-white rounded-full flex items-center justify-center ml-2 mt-1 font-bold text-sm">Y</div>
//                     )}
//                   </div>
//                 ))}
//               </div>
              
//               <div className="flex bg-gray-900 rounded-xl border border-gray-800 p-2">
//                 <input
//                   type="text"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Type your message..."
//                   className="flex-1 bg-transparent border-0 focus:ring-0 text-white outline-none px-2"
//                 />
//                 <button 
//                   onClick={handleSendMessage}
//                   className="bg-white text-black p-2 rounded-lg"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Alumni Directory */}
//           {activeTab === "alumni" && (
//             <div>
//               <div className="relative mb-6">
//                 <input
//                   type="text"
//                   placeholder="Search alumni by name, batch or company..."
//                   className="w-full bg-gray-900 border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-white"
//                 />
//                 <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {[
//                   { name: "John Doe", batch: "2015", position: "Software Engineer", company: "Google", image: "JD" },
//                   { name: "Jane Smith", batch: "2018", position: "Product Manager", company: "Microsoft", image: "JS" },
//                   { name: "Robert Chen", batch: "2016", position: "Data Scientist", company: "Amazon", image: "RC" },
//                   { name: "Sarah Johnson", batch: "2020", position: "UI/UX Designer", company: "Adobe", image: "SJ" }
//                 ].map((alumni, index) => (
//                   <div key={index} className="bg-gray-900 rounded-xl p-4 border border-gray-800 flex items-center space-x-4 hover:border-white transition-colors">
//                     <div className="h-16 w-16 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl">
//                       {alumni.image}
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-white">{alumni.name}</h3>
//                       <p className="text-gray-400">{alumni.position} at {alumni.company}</p>
//                       <p className="text-sm text-gray-500">Batch of {alumni.batch}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Events Section */}
//           {activeTab === "events" && (
//             <div className="space-y-6">
//               <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-white transition-colors">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <span className="inline-block px-3 py-1 bg-white text-black text-xs font-medium rounded-full mb-2">Upcoming</span>
//                     <h3 className="text-xl font-bold text-white">Alumni Meet 2025</h3>
//                     <p className="text-gray-400 mt-2">Join fellow alumni for networking and knowledge sharing</p>
//                   </div>
//                   <div className="bg-black px-4 py-2 rounded-lg text-center min-w-16">
//                     <p className="text-white font-bold text-xl">20</p>
//                     <p className="text-gray-400 text-sm">MAY</p>
//                   </div>
//                 </div>
//                 <div className="mt-4 text-sm text-gray-400">
//                   <p>Time: 7:00 PM - 9:00 PM</p>
//                   <p>Location: Online (Zoom)</p>
//                 </div>
//                 <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-medium">Register</button>
//               </div>

//               <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-white transition-colors">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <span className="inline-block px-3 py-1 bg-white text-black text-xs font-medium rounded-full mb-2">Workshop</span>
//                     <h3 className="text-xl font-bold text-white">Career Guidance Webinar</h3>
//                     <p className="text-gray-400 mt-2">Learn about emerging career opportunities in tech</p>
//                   </div>
//                   <div className="bg-black px-4 py-2 rounded-lg text-center min-w-16">
//                     <p className="text-white font-bold text-xl">14</p>
//                     <p className="text-gray-400 text-sm">APR</p>
//                   </div>
//                 </div>
//                 <div className="mt-4 text-sm text-gray-400">
//                   <p>Time: 5:30 PM - 7:00 PM</p>
//                   <p>Location: Online (Zoom)</p>
//                 </div>
//                 <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-medium">Register</button>
//               </div>

//               <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-white transition-colors">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <span className="inline-block px-3 py-1 bg-white text-black text-xs font-medium rounded-full mb-2">Networking</span>
//                     <h3 className="text-xl font-bold text-white">Tech Industry Mixer</h3>
//                     <p className="text-gray-400 mt-2">Connect with alumni working at top tech companies</p>
//                   </div>
//                   <div className="bg-black px-4 py-2 rounded-lg text-center min-w-16">
//                     <p className="text-white font-bold text-xl">05</p>
//                     <p className="text-gray-400 text-sm">JUN</p>
//                   </div>
//                 </div>
//                 <div className="mt-4 text-sm text-gray-400">
//                   <p>Time: 6:00 PM - 8:30 PM</p>
//                   <p>Location: Tech Hub Conference Center</p>
//                 </div>
//                 <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-medium">Register</button>
//               </div>
//             </div>
//           )}

//           {/* Mentorship Section */}
//           {activeTab === "mentorship" && (
//             <div>
//               <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
//                 <h3 className="text-xl font-bold text-white mb-4">Request Mentorship</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-gray-400 mb-2 text-sm">Area of Interest</label>
//                     <select className="w-full bg-black border border-gray-800 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-white">
//                       <option>Software Development</option>
//                       <option>Data Science</option>
//                       <option>Product Management</option>
//                       <option>UI/UX Design</option>
//                       <option>Marketing</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-gray-400 mb-2 text-sm">Preferred Alumni (Optional)</label>
//                     <input 
//                       type="text" 
//                       placeholder="Enter alumni name if you have a preference"
//                       className="w-full bg-black border border-gray-800 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-white"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-400 mb-2 text-sm">Brief Message</label>
//                     <textarea 
//                       placeholder="Tell us about your goals and what you hope to gain from mentorship"
//                       className="w-full bg-black border border-gray-800 rounded-lg py-2 px-3 text-white h-24 focus:outline-none focus:border-white"
//                     ></textarea>
//                   </div>
//                   <button className="w-full bg-white text-black py-2 rounded-lg font-medium">Submit Request</button>
//                 </div>
//               </div>

//               <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
//                 <h3 className="text-xl font-bold text-white mb-4">Your Mentorship Connections</h3>
//                 <div className="space-y-4">
//                   <div className="bg-black rounded-lg p-4 border border-gray-800">
//                     <div className="flex justify-between">
//                       <div className="flex items-center">
//                         <div className="h-12 w-12 bg-white text-black rounded-full flex items-center justify-center font-bold mr-3">JD</div>
//                         <div>
//                           <h4 className="font-bold text-white">John Doe</h4>
//                           <p className="text-gray-400 text-sm">Software Development</p>
//                         </div>
//                       </div>
//                       <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-medium rounded-full h-fit">Pending</span>
//                     </div>
//                     <p className="text-gray-500 text-sm mt-3">Requested on April 2, 2025</p>
//                   </div>

//                   <div className="bg-black rounded-lg p-4 border border-gray-800">
//                     <div className="flex justify-between">
//                       <div className="flex items-center">
//                         <div className="h-12 w-12 bg-white text-black rounded-full flex items-center justify-center font-bold mr-3">JS</div>
//                         <div>
//                           <h4 className="font-bold text-white">Jane Smith</h4>
//                           <p className="text-gray-400 text-sm">UI/UX Design</p>
//                         </div>
//                       </div>
//                       <span className="px-3 py-1 bg-green-500 text-black text-xs font-medium rounded-full h-fit">Active</span>
//                     </div>
//                     <p className="text-gray-500 text-sm mt-3">Connected since March 15, 2025</p>
//                     <button className="mt-3 w-full bg-white text-black py-2 rounded-lg font-medium">Message</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }