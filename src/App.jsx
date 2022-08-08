import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SideBar } from './components/SideBar'
import {
  Col,
  Row,
  Card,
  Input,
  Table,
  Layout,
  Space,
  Select,
  Typography
} from 'antd'

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const { Sider } = Layout

  return (
    <>
      <SideBar collapsed={collapsed} />
    </>
  )
}

export default App
