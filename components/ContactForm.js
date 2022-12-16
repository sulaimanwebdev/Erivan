import React from 'react'

const ContactForm = () => {
  return (
    <>
    <form>
           <div>
            <label htmlFor="name" className='text-white font-[600] mb-2 flex'>Your name</label>
            <input type="text" placeholder='Enter your name' autoComplete="off" name="name" id="name" className='bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg' />
           </div>

           <div className='mt-7'>
            <label htmlFor="email" className='text-white font-[600] mb-2 flex'>Your email</label>
            <input type="email" placeholder='Enter your email' autoComplete="off" name="email" id="email" className='bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg' />
           </div>

           <div className='mt-7'>
            <label htmlFor="message" className='text-white font-[600] mb-2 flex'>Your Message or comment</label>
            <textarea type="message" placeholder='Enter your Message or comment' autoComplete="off" name="message" id="message" className='bg-form-main resize-none min-h-[150px] placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg'></textarea>
           </div>

           <button type="submit" className='mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-10 py-3 mt-5'>SUBMIT <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>

    </form>
    </>
  )
}

export default ContactForm