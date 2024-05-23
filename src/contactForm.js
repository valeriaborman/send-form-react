// import React, { useState } from 'react';
// import axios from 'axios';


// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [sendingStatus, setSendingStatus] = useState('idle');

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form submission

//     setSendingStatus('sending'); // Indicate sending in progress

//     try {
//       const response = await axios.post('/send-email', {
//         name,
//         email,
//         message,
//       });

//       if (response.status === 200) {
//         setSendingStatus('success'); // Email sent successfully
//         console.log('Email sent!');
//         setName(''); // Clear form fields
//         setEmail('');
//         setMessage('');
//       } else {
//         setSendingStatus('error'); // Failed to send email
//         console.error('Failed to send email');
//       }
//     } catch (error) {
//       setSendingStatus('error'); // Failed to send email
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <button type="submit" disabled={sendingStatus === 'sending'}>
//         {sendingStatus === 'sending' ? 'Sending...' : 'Send Message'}
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
