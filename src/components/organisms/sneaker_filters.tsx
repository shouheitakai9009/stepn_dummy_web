import React, { useMemo, useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import { ShoeType } from '../../enums/shoe_type'
import { Rality } from '../../enums/rality'

export const SneakerFilters = () => {

  const [selectedClass, setSelectedClass] = useState<number | null>(null)
  const [selectedQuality, setSelectedQuality] = useState<number | null>(null)
  const [minLevel, setMinLevel] = useState<number>(0)
  const [maxLevel, setMaxLevel] = useState<number>(30)
  const [minMintCount, setMinMintCount] = useState<number>(0)
  const [maxMintCount, setMaxMintCount] = useState<number>(7)

  const filterCount = useMemo(() => {
    let tmpCount = 0;
    if (selectedClass !== null) tmpCount++
    if (selectedQuality !== null) tmpCount++
    if (minLevel > 0 || maxLevel < 30) tmpCount++
    if (minMintCount > 0 || maxMintCount < 7) tmpCount++
    return tmpCount
  }, [selectedClass, selectedQuality, minLevel, maxLevel, minMintCount, maxMintCount])

  const onClear = () => {
    setSelectedClass(null)
    setSelectedQuality(null)
    setMinLevel(0)
    setMaxLevel(30)
    setMinMintCount(0)
    setMaxMintCount(7)
  }

  const onConfirm = () => {

  }

  return (
    <div className="sneakerFilters">
      <div className="sneakerFilters--header">
        <h3 className="sneakerFilters--header--title">Filter&nbsp;(&nbsp;{filterCount}&nbsp;)</h3>
        <span className="sneakerFilters--header--clear" onClick={onClear}>Clear filter</span>
      </div>
      <section className="sneakerFilters--searchField">
        <h3 className="sneakerFilters--searchField--title">Class</h3>
        <div className="sneakerFilters--searchField--radios">
          {
            Object.keys(ShoeType).map((key, index) => (
              <button
                key={key}
                className={`button ${selectedClass === index ? "button--primary" : "button--outline"} sneakerFilters--searchField--radios--item`}
                onClick={() => setSelectedClass(index)}
              >
                {key}
              </button>
            ))
          }
        </div>
      </section>
      <section className="sneakerFilters--searchField">
        <h3 className="sneakerFilters--searchField--title">Quality</h3>
        <div className="sneakerFilters--searchField--in sneakerFilters--searchField--radios">
          {
            Object.keys(Rality).map((key, index) => (
              <button
                key={key}
                className={`button ${selectedQuality === index ? "button--primary" : "button--outline"} sneakerFilters--searchField--radios--item`}
                onClick={() => setSelectedQuality(index)}
              >
                {key}
              </button>
            ))
          }
        </div>
      </section>
      <section className="sneakerFilters--searchField">
        <h3 className="sneakerFilters--searchField--title">Level</h3>
        <div className="sneakerFilters--searchField--in">
          <Slider
            range={true}
            value={[minLevel, maxLevel]}
            min={0}
            max={30}
            step={1}
            marks={{
              0: { label: minLevel },
              30: { label: maxLevel },
            }}
            allowCross={false}
            onChange={value => {
              if (typeof value === "number") return
              setMinLevel(value[0])
              setMaxLevel(value[1])
            }}
          />
        </div>
      </section>
      <section className="sneakerFilters--searchField">
        <h3 className="sneakerFilters--searchField--title">Shoe mint</h3>
        <div className="sneakerFilters--searchField--in">
          <Slider
            range={true}
            value={[minMintCount, maxMintCount]}
            min={0}
            max={7}
            step={1}
            marks={{
              0: { label: minMintCount },
              7: { label: maxMintCount },
            }}
            allowCross={false}
            onChange={value => {
              if (typeof value === "number") return
              setMinMintCount(value[0])
              setMaxMintCount(value[1])
            }}
          />
        </div>
      </section>
      <section className="sneakerFilters--buttonArea">
        <button className="button button--primary button--large" onClick={onConfirm}>CONFIRM</button>
      </section>
    </div>
  )
}