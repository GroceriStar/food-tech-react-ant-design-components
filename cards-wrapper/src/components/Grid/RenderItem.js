const RenderItem = (item) => {
  return (
    <List.Item>
      <Card title={item.title}>
        Card content
      </Card>
    </List.Item>
  )
}

export default RenderItem
