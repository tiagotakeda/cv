import Axios from 'axios'
import { useEffect, useState } from 'react'
import { SideBar } from '../../components/SideBar'
import { HeaderMenu } from '../../components/HeaderMenu'
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
import useSWR from 'swr'
import { dynamoGetById } from '../../service/apiDsmDynamo'
import { ViewAccessesModal } from '../../components/Modals/SwitchRoles/ViewAccessesModal'
import { CloseOutlined } from '@ant-design/icons'
import './iframeStyle.css'

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [state, setState] = useState('')
  const [data, setData] = useState([])
  const { Text } = Typography
  const { Content } = Layout
  const { Option } = Select

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderMenu collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <SideBar collapsed={collapsed} />
        <Content style={{ padding: '2em' }}>
          <Card
            style={{
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              borderRadius: '20px',
              marginRight: '10px'
            }}
          ></Card>
        </Content>
      </Layout>
    </Layout>
  )
}
