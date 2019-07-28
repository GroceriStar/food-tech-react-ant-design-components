import React, { Component, Fragment } from 'react'

import { Card, Icon, Avatar, Col, Row } from 'antd'

const { Meta } = Card

const Card1 = ({ title, path, children }) => {
  const recipe = getRandomRecipe()
  title = recipe.title

  const styles = {
    width: 300
  }

  return (
    <Card
      title={title}
      extra={<a href={path}>More</a>}
      style={styles}
    >
      {children}
    </Card>
  )
}
export default Card1
