import React, { Component, Fragment } from 'react'

import { Card, Menu, Dropdown, Icon, version, message } from 'antd'

import {
  // Card,
  // Icon,
  Avatar, Col, Row } from 'antd'

const { Meta } = Card

const openNotification = () => {
  message.info('This is a normal message')
}

const Card5 = () => {
  const styles = {
    width: 300
  }

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
                  <span style={{ marginLeft: '6px' }}>
                  Overview
                  </span>
                </Menu.Item>
                <Menu.Item key='marketing'>
                  <Icon type='area-chart' />
                  <span style={{ marginLeft: '6px' }}>
                  Marketing
                  </span>
                </Menu.Item>
                <Menu.Item key='activity'>
                  <Icon type='calendar' />
                  <span style={{ marginLeft: '6px' }}>
                  Activity
                  </span>
                </Menu.Item>
              </Menu>
            }
          >
            <Icon className='card-action-content' type='ellipsis' />
          </Dropdown>
        ]}
      >
        <Card.Meta
          title='card title'
          description={'description'} />
      </Card>
    </div>
  )
}

export default Card5
