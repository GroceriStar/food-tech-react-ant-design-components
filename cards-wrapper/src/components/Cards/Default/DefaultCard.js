import React, { Component } from 'react'

// <Icon type="picture" />

// import { Card } from 'antd';
// import { Card, Icon, Avatar } from 'antd';

// import { Card, Col, Row } from 'antd';

import { Card, Icon, Avatar, Col, Row } from 'antd'

const { Meta } = Card

const DefaultCard1 = () => {
  return (
    <Card
      title='Card title'
      extra={<a href='#'>More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}

const DefaultCard2 = () => {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title='Card title' bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}

const DefaultCard3 = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
      actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}
    >
      <Meta
        avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
        title='Card title'
        description='This is the description'
      />
    </Card>
  )
}

// https://codesandbox.io/s/vvvpj6y603

const DefaultCard4 = () => {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Card title' bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card title='Card title' bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card title='Card title' bordered={false}>Card content</Card>
        </Col>
      </Row>
    </div>
  )
}

const DefaultCard5 = () => {
  return (
    <div style={{ margin: 24 }}>
      <p style={{ marginBottom: 24 }}>
        Current antd version: {version} <br />
        You can change antd version on the left panel (Dependencies section).
      </p>
      <Card
        style={{ width: 300 }}
        cover={
          <img alt='site preview' src='https://via.placeholder.com/350x250' />
        }
        actions={[
          <Icon
            className='card-action-content'
            type='edit'
            onClick={() => openNotification()}
          />,
          <Icon
            className='card-action-content'
            type='delete'
            onClick={() => openNotification()}
          />,
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={() => openNotification()}>
                <Menu.Item key='site-overview'>
                  <Icon type='eye-o' />
                  <span style={{ marginLeft: '6px' }}>Overview</span>
                </Menu.Item>
                <Menu.Item key='marketing'>
                  <Icon type='area-chart' />
                  <span style={{ marginLeft: '6px' }}>Marketing</span>
                </Menu.Item>
                <Menu.Item key='activity'>
                  <Icon type='calendar' />
                  <span style={{ marginLeft: '6px' }}>Activity</span>
                </Menu.Item>
              </Menu>
            }
          >
            <Icon className='card-action-content' type='ellipsis' />
          </Dropdown>
        ]}
      >
        <Card.Meta title='card title' description={'description'} />
      </Card>
    </div>
  )
}

export {
  DefaultCard1,
  DefaultCard2,
  DefaultCard3,
  DefaultCard4,
  DefaultCard5
}
