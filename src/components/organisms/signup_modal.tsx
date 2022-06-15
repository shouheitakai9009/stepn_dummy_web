import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { Select, OptionType } from '../atoms/select'
import { GenderType } from '../../enums/gender_type'

interface IProps {
  isOpen: boolean
  onClickToSignin: () => void
}

const GENDER_OPTIONS: OptionType[] = Object.keys(GenderType).map(key => ({
  label: key,
  value: GenderType[key as keyof typeof GenderType]
}))

export const SignupModal = (props: IProps) => {

  const [selectedGender, setSelectedGender] = useState<OptionType | null>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    setDisabled(email === '' || password === '' || nickname === '' || !selectedGender)
  }, [email, password, nickname, selectedGender])

  const onSubmit = () => {

  }

  return (
    <Modal isOpen={props.isOpen} shouldCloseOnOverlayClick={false} ariaHideApp={false}>
      <h2>You need singup now</h2>
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
          <section className="signupModal--field">
            <label htmlFor="nickname">Your nickname</label>
            <input type="text" id="nickname" className="input" value={nickname} onChange={e => setNickname(e.target.value)} />
          </section>
          <section className="signupModal--field">
            <label htmlFor="nickname">Gender</label>
            <Select
              options={GENDER_OPTIONS}
              value={selectedGender}
              onChange={(newValue) => setSelectedGender(newValue)}
            />
          </section>
          <section className="signupModal--buttonArea">
            <button
              className={`button button--primary button--large ${disabled && "button--disabled"}`}
              disabled={disabled}
              onClick={onSubmit}
            >
              Create Account
            </button>
          </section>
          <section className="signupModal--buttonArea">
            <span className="linktext linktext--primary" onClick={props.onClickToSignin}>Click here to sign in.</span>
          </section>
        </div>
      </div>
    </Modal>
  );
}
