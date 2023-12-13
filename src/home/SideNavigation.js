import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LearnHTML from '../htmlDocs/LearnHTML';
import SideNavigationStyled from './SideNavigationStyled';
import Analog from '../htmlDocs/Analog';
const SideNavigation = () => {
  return (
    <>
    <SideNavigationStyled>
        <TabList>
          <Tab>Home</Tab>
          <Tab>HTML</Tab>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
        </TabList>
        <TabPanel>
        <Analog/>
        </TabPanel>
        <TabPanel>
          <LearnHTML/>
        </TabPanel>
    </SideNavigationStyled>
    </>
  )
}

export default SideNavigation