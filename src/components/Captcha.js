import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
export default function Captcha({recaptchaRef, onChange}) {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
       <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LfaJX4aAAAAAOgr4g8Us190DhSpbKz1HOa3zEV_'} onChange={onChange} size='normal' ref={recaptchaRef}/>
    </div>
  )
}
