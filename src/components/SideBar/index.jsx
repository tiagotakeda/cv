import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Menu, Col, Row, Layout } from 'antd'
import React, { useState } from 'react'
const { Header, Content, Sider } = Layout

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

export const SideBar = () => {
  const menuItems = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem(
        'Item 1',
        'g1',
        null,
        [getItem('Option 1', '1'), getItem('Option 2', '2')],
        'group'
      ),
      getItem(
        'Item 2',
        'g2',
        null,
        [getItem('Option 3', '3'), getItem('Option 4', '4')],
        'group'
      )
    ])
  ]

  return (
    <Layout>
      <Content
        style={{
          padding: '0'
        }}
      >
        <Sider width={256}>
          <Menu
            mode="inline"
            theme="dark"
            style={{
              background: 'green',
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              padding: '1rem',
              left: 0,
              top: 0,
              bottom: 0,
              margin: 0
            }}
            items={menuItems}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
          ></Menu>
        </Sider>
      </Content>
    </Layout>
  )
}
