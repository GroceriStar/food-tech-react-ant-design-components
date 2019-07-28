import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import { Card, Icon, Avatar, Col, Row } from 'antd'

const { Meta } = Card

const Card4 = () => {
  const styles = {
    width: 300
  }

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

export default Card4
