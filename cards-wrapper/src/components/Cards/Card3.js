
import React, { Component, Fragment } from 'react'

import { Card, Icon, Avatar, Col, Row } from 'antd'

const { Meta } = Card

const Card3 = ({ title, description, children, type = 'all' }) => {
  const styles = {
    width: 300
  }

  const cover = <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />

  // actions
  let actions
  switch (type) {
    case 'all':
      actions = [
        <Icon type='setting' />,
        <Icon type='edit' />,
        <Icon type='ellipsis' />
      ]
      break
    default:
      actions = []
  }

  return (
    <Card
      style={styles}
      cover={cover}
      actions={actions}
    >
      <Meta
        avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
        title={title}
        description={description}
      />
    </Card>
  )
}

export default Card3
