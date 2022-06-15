import React from 'react'
import { Avator } from '../atoms/avator'
import { avators, IAvator } from '../../enums/avators'

interface IProps {
  selectedAvatorId: IAvator["id"] | null
  onSelect: (id: IAvator["id"]) => void
}

export const RadioAvators = (props: IProps) => {
  return (
    <section className="radioAvators">
      {
        avators.map(avator => (
          <Avator
            key={avator.id}
            avator={avator}
            selected={avator.id === props.selectedAvatorId}
            onClick={props.onSelect}
          />
        ))
      }
    </section>
  )
}