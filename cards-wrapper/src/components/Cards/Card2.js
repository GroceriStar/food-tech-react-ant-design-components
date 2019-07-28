import React, { Component, Fragment } from 'react'

import { Card, Icon, Avatar, Col, Row } from 'antd'

const { Meta } = Card

const Card2 = ({ title, children }) => {
  const styles = {
    width: 300
  }

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card
        title={title}
        bordered={false}
        style={styles}>
        {children}
      </Card>
    </div>
  )
}

export default Card2
