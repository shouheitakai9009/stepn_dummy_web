import React from 'react'
import { IAvator } from '../../enums/avators'

interface IProps {
  avator: IAvator
  selected?: boolean
  onClick?: (id: IAvator["id"]) => void
}

export const Avator = (props: IProps) => {
  return (
    <div
      className={`avator ${props.selected && "avator--selected"}`}
      onClick={() => props.onClick && props.onClick(props.avator.id)}
    >
      <img src={props.avator.image_url} alt='' />
      {props.selected && <i className="avator--selected--icon fas fa-check-circle" />}
    </div>
  )
}