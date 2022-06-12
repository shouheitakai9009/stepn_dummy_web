import React from 'react'

export const SneakerItem = () => {
  return (
    <section className="sneakerItem">
      <div className="sneakerItem--topArea">
        WALKER
      </div>
      <div className="sneakerItem--centerArea">
        <img src="/images/sneaker.png" alt="" className="sneakerItem--centerArea__sneakerImage" />
        <div className="sneakerItem--centerArea--idArea">
          <div className="sneakerItem--centerArea--idArea--in">
            <span className="sneakerItem--centerArea--idArea--sharp">#</span>
            977162961
          </div>
        </div>
        <div className="sneakerItem--centerArea--mintArea">
          <div className="sneakerItem--centerArea--mintArea--in">
            <span className="sneakerItem--centerArea--mintArea--in--mint">Mint: 2</span>
            <span className="sneakerItem--centerArea--mintArea--in--lv">Lv: 5</span>
          </div>
          <div className="sneakerItem--centerArea--mintArea--resilience" />
        </div>
      </div>
      <div className="sneakerItem--bottomArea">
        <span className="sneakerItem--bottomArea--price">3.8SOL</span>
        <button className="button button--primary">BUY</button>
      </div>
    </section>
  )
}