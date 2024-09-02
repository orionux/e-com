import React from 'react'
import styles from '../../styles/signIn/signIn.module.css';

const SignIn = () => {
  return (
    <div className={styles.signinWrapper}>
      <div className={styles.signinSection}>
        
        <div className={styles.signinForm}>
          <form action="#" method="post">
            <h2>Log In</h2>
            <h5>To connect with us bla bla bla</h5>
            <div className={styles.userName}>
              <input type="text" name="user-name" placeholder="User Name" />
            </div>

            <div className={styles.signinPasswords}>
              <div className={styles.Password}>
                <input type="password" name="user-password" placeholder="Password"/>
              </div>
            </div>

            <div className={styles.signinBtn}>
              <a href='#'><u>Forget Password?</u></a>
              <button type="submit">LogIn</button>
            </div>

            <p className='text-black'>Don`t you have an account? <a href='/register'><u>Register Now</u></a></p>
          </form>
        </div>
      </div>
      <div className={styles.signinImg}>
      <h1>Original Products</h1>
      <p>All types of tobacco and related products with a guarantee. </p>
        <img src="/images/signIn/signin.png" alt="" width='800px' className=''/>
      </div>
    </div>
  )
}

export default SignIn;
