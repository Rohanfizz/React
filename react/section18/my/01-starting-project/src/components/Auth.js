import classes from './Auth.module.css';
import {useDispatch} from 'react-redux';
import {authActions} from '../store/auth';

const Auth = () => {

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    console.log('asd');
    dispatch(authActions.login());
  }


  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
// aim, theory, code, => handwritten output=>screenshot 
// rollNo_Name
// mention in sheet name, university roll number, subject code, subject name
// 9 onwards
