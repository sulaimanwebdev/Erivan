import CoverLetterFileUpload from './CoverLetterFileUpload'
import ResumeFileUpload from './ResumeFileUpload'

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
            <CoverLetterFileUpload/>
         </div>


         <div className='mt-7'>
            <div className='text-white font-[600] mb-2 flex'>Résumé | CV <span className='text-[#FF5757] ml-[2px]'>*</span></div>
            <ResumeFileUpload/>
         </div>


         <button type="submit" className='mx-auto flex items-center font-[600] gap-3 text-white border border-content-main rounded-full px-10 py-3 mt-7'>SUBMIT <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 6.99992L6.808 1.63592L8.222 0.221924L16 7.99992L8.222 15.7779L6.808 14.3639L12.172 8.99992H0V6.99992H12.172Z" fill="white"/></svg></button>

    </form>

    </>
  )
}

export default TemplateForm