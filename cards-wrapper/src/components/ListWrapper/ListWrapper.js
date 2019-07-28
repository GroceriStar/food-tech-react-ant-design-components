import React, { Component } from 'react'
import { List, Card, Ellipsis, Icon, Button } from 'antd'
import Img from 'react-image'

const Avatar = (image) => (
  <Img src={image} alt='' className='cardAvatar' />
)

// @TODO REPLACE CARD WITH OUR CUSTOM WRAPPER
// import {
//   Card1,
//   Card2,
//   Card3,
//   Card4,
//   Card5
// } from '~/Cards'

// @TODO Yeah, it's a joke, we need to update that card.
const BetterCard = (image, title, directions) => {
  const actions = [
    <a>OK</a>,
    <a>OK</a>
  ]
  return (
    <Card
      hoverable
      className='card'
      actions={actions}>
      <Card.Meta
        avatar={Avatar(image)}
        title={<a>{title}</a>}
        description={
          <h2>
            {directions}
          </h2>
        }
      />
    </Card>
  )
}

const ItemCard = (item) => (
  <List.Item key={item.key}>
    {BetterCard(item.recipe.img, item.recipe.title, item.recipe.directions)}
  </List.Item>
)

const ItemCardEmpty = () => (
  <List.Item>
    <Button type='dashed' className='newButton'>
      <Icon type='plus' /> Add new
    </Button>
  </List.Item>
)

const renderItem = (item) => {
  // can be replaced with <ItemCard />
  return (
    (item) ? ItemCard(item) : ItemCardEmpty
  )
}

// compare this grid styles with styles from Grid component
const gridStyles = {
  gutter: 24,
  lg: 3,
  md: 2,
  sm: 1,
  xs: 1
}

// @TODO actually this list wrapper has a similar role to Grid component.
// we need to discuss it later
const ListWrapper = ({ list }) => {
  return (
    <List
      rowKey='id'
      grid={gridStyles}
      dataSource={['', ...list]}
      renderItem={item => renderItem(item)}
    />
  )
}

export default ListWrapper
