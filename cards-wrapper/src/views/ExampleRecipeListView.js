import React, { Component } from 'react'
import _ from 'lodash'
import { List, Divider } from 'antd'

// import { DefaultList } from '@groceristar/grocery-component'
import { ListWrapperShort } from '@groceristar/antd-showcase-components'

// import {
//   getRandomRecipe,
//   getFirstFiveRecipes,
//   getFiveRandomIngredients,
//   getRecipeChickenKyivById,
//   getShowcaseFiveRecipes
// } from '../selector'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

const h3Style = { margin: '16px 0' }

const ExampleRecipeListView = (data) => {
  return (
    <div>

      <h3 style={h3Style}>
        Default Size
      </h3>
      <ListWrapperShort data={data} />

      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />

      <Divider />

      <h3 style={h3Style}>
        Small Size
      </h3>
      <ListWrapperShort data={data} size='small' />
      <List
        size='small'
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
      <Divider />

      <h3 style={h3Style}>
        Large Size
      </h3>
      <ListWrapperShort data={data} size='large' />

      <List
        size='large'
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
      <Divider />

    </div>
  )
}

export default ExampleRecipeListView
