import React from 'react'

const TemplateForm = () => {
  return (
    <>
    <form>
         <div className="">
         <label htmlFor="first-name" className='text-white font-[600] mb-2 flex'>Your name <span className='text-[#FF5757] ml-[2px]'>*</span></label>
           <div className="grid grid-cols-2 gap-5">
           <div>
            <input type="text" placeholder='First name' autoComplete="off" name="first-name" id="first-name" className='bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg' />
           </div>

           <div>
            <input type="test" placeholder='Last name' autoComplete="off" name="last-name" id="last-name" className='bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg' />
           </div>
           </div>
         </div>

         <div className='mt-7'>
            <label htmlFor="phone-number" className='text-white font-[600] mb-2 flex'>Phone Number <span className='text-[#FF5757] ml-[2px]'>*</span></label>
            <input type="text" placeholder='Phone number' autoComplete="off" name="phone-number" id="phone-number" className='bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg' />
         </div>

         <div className='mt-7'>
            <label htmlFor="email-address" className='text-white font-[600] mb-2 flex'>Email <span className='text-[#FF5757] ml-[2px]'>*</span></label>
            <input type="email" placeholder='Email address' autoComplete="off" name="email-address" id="email-address" className='bg-form-main placeholder-placeholder-main font-[500] text-white px-3.5 py-3 w-full rounded-lg' />
         </div>


         <div className='mt-7'>
            <div className='text-white font-[600] mb-2 flex'>Cover Letter</div>
         </div>

    </form>

    </>
  )
}

export default TemplateForm