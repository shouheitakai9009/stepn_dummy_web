import * as React from 'react'
import AppSelect, { ActionMeta, SingleValue } from 'react-select'

export interface OptionType {
  value: number
  label: string
}

interface IProps {
  options: OptionType[]
  value: OptionType | null
  onChange: (newValue: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void
}

export const Select = (props: IProps) => {
  return (
    <AppSelect<OptionType>
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      className="select"
    />
  )
}