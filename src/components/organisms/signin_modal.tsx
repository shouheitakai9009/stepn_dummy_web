import { useState, useEffect } from 'react';
import Modal from 'react-modal'

interface IProps {
  isOpen: boolean
  onClickToSignup: () => void
}

export const SigninModal = (props: IProps) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    setDisabled(email === '' || password === '')
  }, [email, password])

  const onSubmit = () => {
  }

  return (
    <Modal isOpen={props.isOpen} shouldCloseOnOverlayClick={false} ariaHideApp={false}>
      <h2>Sign in now</h2>
      <div className="signupModal">
        <div className="signupModal--in">
          <section className="signupModal--field">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" className="input" value={email} onChange={e => setEmail(e.target.value)} />
          </section>
          <section className="signupModal--field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input" value={password} onChange={e => setPassword(e.target.value)} />
          </section>
          <section className="signupModal--buttonArea">
            <button
              className={`button button--primary button--large ${disabled && "button--disabled"}`}
              disabled={disabled}
              onClick={onSubmit}
            >
              Sign In
            </button>
          </section>
          <section className="signupModal--buttonArea">
            <span className="linktext linktext--primary" onClick={props.onClickToSignup}>Click here to sign up.</span>
          </section>
        </div>
      </div>
    </Modal>
  );
}
