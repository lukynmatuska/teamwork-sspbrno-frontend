import {
    List, Datagrid, TextField, DateField, EditButton, DeleteButton,
    Edit, SimpleForm, TextInput, SelectInput,
    Create
} from 'react-admin'
// import { AccordionSummary } from '@material-ui/core'

export const YearList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="status" />
            <DateField source="created" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

const YearSimpleForm = props => (
    <SimpleForm {...props}>
        <TextInput source="name" />
        <TextInput source="description" />
        <SelectInput source="status" choices={[
            { id: 'archived', name: 'Archived' },
            { id: 'active', name: 'Actived' },
            { id: 'prepared', name: 'Prepared' },
        ]} />
    </SimpleForm>
)

export const YearEdit = props => (
    <Edit {...props}>
        <YearSimpleForm />
    </Edit>
)

export const YearCreate = props => (
    <Create {...props}>
        <YearSimpleForm />
    </Create>
)