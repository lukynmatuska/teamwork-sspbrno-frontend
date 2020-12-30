import {
    List, Datagrid, TextField,
    EmailField
} from 'react-admin'
import { Avatar } from '@material-ui/core'

const MyAvatar = ({ record = {} }) => <Avatar alt="Profile avatar" src={record.photo} />

export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <MyAvatar />
            <TextField source="name.last" label="Lastname" />
            {/* <TextField source="name.middle" label="Middlename" hidden={true} /> */}
            <TextField source="name.first" label="Firstname" />
            <EmailField source="email" />
            <TextField source="type" />
            <TextField source="specialization.name" label="Specialization" />
        </Datagrid>
    </List>
);