import { fetchUtils } from "react-admin"
import simpleRestProvider from 'ra-data-simple-rest'
import { API_URL } from './config'
const dataProvider = simpleRestProvider(API_URL, (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' })
    }
    options.credentials = 'include'
    return fetchUtils.fetchJson(url, options)
})

export default dataProvider