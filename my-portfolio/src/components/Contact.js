import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import {  UndrawMail } from"react-undraw-illustrations";
import {  FaEnvelope} from 'react-icons/fa';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs
      .sendForm('service_70lxs3v', 'template_ewj145l', form.current, {
        publicKey: 'MTljQxFJ9CoQfUeuH',
      })
      .then(
        (result) => {
          alert( "Message Sent Successfully" ,result.text);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED!', error.text);
        },
      );
  };
  return (
    <div className='main' id='contact'>
   <p className='undraw-mail'> <UndrawMail height ="400px" accentColor = "crimson" skinColor ="crimson" primaryColor = "crimson" Color = "crimson" align = "left"/></p>
    <h1 className='h1-feel' data-aos="fade-right">
        Get in <span className='connect-1' data-aos="fade-right">Touch</span> With Me    
    </h1>
    <form ref={form} onSubmit={sendEmail}  className='formik' data-aos="fade-right">
      <label className='name-1' >Name :</label>
      <input type="text" name="from_name" className = "name-2 " placeholder='Enter your name ' required ="true"/><br></br><br></br>
      <label className='name-1'>Email :</label>
      <input type="email" name="from_email" className='name-2' placeholder='Enter your email'  required ="true"/><br></br><br></br>
      <label className='label-name'>Message :</label>
      <textarea className='text' name="message" /><br></br><br></br><br></br>
      <input type="submit"  onclick = "Contact()" value = "Send  ➤ "  className='send'/>
      <p id = "output"> </p>
    </form>
    <div className='align'  data-aos="fade-right">
      <p className='phone'>
        <h2 className='mail'><FaEnvelope className='size'/>  Mail me On</h2>
     <span className='number'>raguraman120601@gmail.com</span>
      </p>
    </div>
   
     
</div>
  )
}

export default Contact