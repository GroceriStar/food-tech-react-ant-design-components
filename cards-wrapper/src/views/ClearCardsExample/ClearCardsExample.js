import React, { Fragment } from 'react'

import { Divider } from 'antd'

// import { DefaultCard1,
//   DefaultCard2, DefaultCard3,
//   DefaultCard4, DefaultCard5
// } from '/index'

import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5
} from '/index'

const ClearCardsExample = () => {
  return (
    <Fragment>
      <br />

      <Divider />

      <Card1 title='Card title'>
        <hr />
        <hr />
        <hr />
        <hr />
      </Card1>
      <Divider />

      <Card2 title='Card title'>
        <hr />
        <hr />
        <hr />
      </Card2>
      <Divider />

      <Card3 title='Card title' description='This is the description' />
      <Divider />

      <Card4 />
      <Divider />

      <Card5 />
      <Divider />

    </Fragment>
  )
}

export default ClearCardsExample
