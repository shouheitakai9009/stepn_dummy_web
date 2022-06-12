import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Sneakers } from '../pages/sneakers'

const TAB_CLASS_NAMES = [
  "fas fa-running",
  "fas fa-meteor",
  "fas fa-trophy",
  "fas fa-shopping-cart",
]

export const GlobalNavigation = () => {

  return (
    <nav className="gnav">
      <Tabs>
        <div className="gnav--tabs">
          <TabList>
            {
              TAB_CLASS_NAMES.map(className => (
                <Tab>
                  <i className={className}></i>
                  <div className="gnav--tabs--selected" />
                </Tab>
              ))
            }
          </TabList>
        </div>
        <TabPanel>
          <h2>Comming soon</h2>
        </TabPanel>
        <TabPanel>
          <h2>Comming soon</h2>
        </TabPanel>
        <TabPanel>
          <h2>Comming soon</h2>
        </TabPanel>
        <TabPanel><Sneakers /></TabPanel>
      </Tabs>
    </nav>
  )
}