import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { app } from '../../libs/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Select, OptionType } from '../atoms/select'
import { RadioAvators } from '../molecules/radio_avators'
import { notifyError, notifySuccess } from '../../utilities/toast'
import { GenderType } from '../../enums/gender_type'
import { IAvator } from '../../enums/avators'

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
  const [selectedAvatorId, setSelectedAvatorId] = useState<IAvator["id"] | null>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    setDisabled(email === '' || password === '' || nickname === '' || (typeof selectedAvatorId !== "number" && !selectedGender))
  }, [email, password, nickname, selectedGender, selectedAvatorId])

  const onSubmit = async () => {
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, email, password).then(response => {
      if (response.operationType === "signIn") {
        notifyError("既にアカウントが存在します。サインインしてください。")
      }
    }).catch((reason: any) => {
      console.log(reason)
    })
  }

  return (
    <Modal isOpen={props.isOpen} shouldCloseOnOverlayClick={false} ariaHideApp={false}>
      <h2>You need singup now</h2>
      <div className="signupModal">
        <div className="signupModal--in">
          <section className="signupModal--field">
            <label htmlFor="avator">Select your avator</label>
            <RadioAvators selectedAvatorId={selectedAvatorId} onSelect={setSelectedAvatorId} />
          </section>
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
            <label htmlFor="gender">Gender</label>
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
