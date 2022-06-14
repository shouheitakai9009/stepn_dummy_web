import React from 'react'
import { SneakerFilters } from '../organisms/sneaker_filters'
import { SneakerItem } from '../molecules/sneaker_item'
import { getContract, getAccounts } from '../../services/get'

export const Sneakers = () => {

  React.useEffect(() => {
    console.log("マウント")
    return () => console.log("アンマウント")
  }, [])

  return (
    <article className="p-sneakers">
      <SneakerFilters />
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
        <SneakerItem />
      </section>
    </article>
  )
}