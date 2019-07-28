import React, { Component, PureComponent } from 'react'
// import { HeaderShowcase, Menu }   from '@groceristar/antd-showcase-components';

import { List } from 'antd'

import ListWrapper from '~/ListWrapper/ListWrapper'

import data from './data'

import {
  list,
  responsive
} from './styles'

const Grid = (styles, data) => {
  return (
    <Fragment>
      <List
        grid={styles}
        dataSource={data}
        renderItem={RenderItem(item)}
      />
    </Fragment>
  )
}

const GridList = () => {
  return (
    <Fragment>
      <Grid
        styles={list.grid}
        data={data}
      />
    </Fragment>
  )
}

const GridCardsResponsive = () => {
  return (
    <Fragment>
      <Grid
        styles={responsive.grid}
        data={data}
      />
    </Fragment>
  )
}

export {
  Grid,
  GridList,
  GridCardsResponsive
}
