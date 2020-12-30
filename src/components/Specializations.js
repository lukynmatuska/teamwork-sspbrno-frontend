import {
    List, Datagrid, TextField, EditButton, DeleteButton,
    Edit, SimpleForm, TextInput,
    Create
} from 'react-admin'

export const SpecializationList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="short" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const SpecializationEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="short" />
        </SimpleForm>
    </Edit>
)

export const SpecializationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="short" />
        </SimpleForm>
    </Create>
)