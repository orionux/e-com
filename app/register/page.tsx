import React from 'react'
import styles from '../../styles/register/register.module.css';

const Register = () => {
  return (
    <div className={styles.registerWrapper}>
        <div className={styles.registerSection}>
        <div className={styles.registerForm}>
            <form action="#" method="post">
                <h3>Register Here</h3>
                <div className={styles.userName}>
                    <input type="text" name="user-name" placeholder="Name" />
                </div>
                <div className={styles.emailPhone}>
                    <input type="text" name="Email" placeholder="Email" />
                    <input type="tel" id="phone" name="contact-number" placeholder="Contact Number" />
                </div>
                <div className={styles.registerPasswords}>
                    <div className={styles.Password}>
                        <input type="password" name="user-password" placeholder="Password"/>
                    </div>
                    <div className={styles.confirmPassword}>
                        <input type="password" name="user-password" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor="terms-conditions" style={{color:"black"}} className={styles.terms}>
                        <input type="checkbox" id="terms-conditions" name="terms-conditions" />
                        &nbsp;I’ve read and agreed to the <a href="/terms-and-conditions" target="_blank">&nbsp;terms & conditions.</a>
                    </label>
                </div>
                <div className={styles.regBtn}>
                    <button type="submit">Register</button>
                </div>
                
                    <p className='text-black'>Returning customer? <a href='/signin'><u>click here to login</u></a></p>
                
            </form>
        </div>
        <div className={styles.regImg}>
            <img src="/images/register/register.png" alt="" width='400px' className='img-fluid'/>
        </div>
        </div>
    </div>
  )
}

export default Register
