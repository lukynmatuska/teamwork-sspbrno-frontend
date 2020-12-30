import {
    List, Datagrid, TextField
} from 'react-admin'

export const TeamWorkList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="author.name.full" label="Author" />
            <TextField source="year.name" label="Year" />
        </Datagrid>
    </List>
)