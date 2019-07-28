import React, { Fragment } from 'react'

import { Divider } from 'antd'

import {
  DefaultCard1,
  DefaultCard2,
  DefaultCard3,
  DefaultCard4,
  DefaultCard5
} from '/index'

const DefaultCardsExample = () => {
  return (
    <Fragment>

      <Divider />

      <DefaultCard1 />
      <Divider />

      <DefaultCard2 />
      <Divider />

      <DefaultCard3 />
      <Divider />

      <DefaultCard4 />
      <Divider />

      <DefaultCard5 />
      <Divider />

    </Fragment>
  )
}

export default DefaultCardsExample
