import React, { Component, PureComponent } from 'react'
import { Empty, Button } from 'antd'

// @TODO replace it
const imagePath = 'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original'

const EmptyExtended = () => {
  return (
    <Fragment>
      <Empty
        image={imagePath}
        description={
          <span>
            Customize
            <a href='#API'>Description</a>
          </span>
        }
      >
        <Button type='primary'>
          Create Now
        </Button>
      </Empty>
    </Fragment>
  )
}
// https://ant.design/components/empty/#components-empty-demo-config-provider
export default EmptyExtended
