import * as React from "react"
import { Admin, Resource } from "react-admin"
import authProvider from './authProvider'
import dataProvider from './dataProvider'
import { createMuiTheme } from '@material-ui/core/styles'
import { GroupWork, Group, Event, BusinessCenter } from '@material-ui/icons'
import Dashboard from './components/Dashboard'
import { TeamWorkList } from './components/TeamWorks'
import { UserList } from './components/Users'
import { YearList, YearEdit, YearCreate } from './components/Years'
import { SpecializationList, SpecializationEdit, SpecializationCreate } from './components/Specializations'

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: {
      main: '#E2001A', // Purkynka Red
    },
    secondary: {
      main: '#199F58', // Purkynka Green
    },
  },
})

const App = () => (
  <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider} theme={theme}>
    <Resource name="teamworks" icon={GroupWork}
      list={TeamWorkList}
    />
    <Resource name="users" icon={Group}
      list={UserList}
    />
    <Resource name='years' icon={Event}
      list={YearList}
      edit={YearEdit}
      create={YearCreate}
    />
    <Resource name='specializations' icon={BusinessCenter}
      list={SpecializationList}
      edit={SpecializationEdit}
      create={SpecializationCreate}
    />
  </Admin>
)

export default App