import { API_URL } from './config'
const authProvider = {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        return fetch(API_URL + '/user/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ email: username, password }) // body data type must match "Content-Type" header
        })
            .then(async response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText)
                } else {
                    return fetch(API_URL + '/session', {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                        credentials: 'include', // include, *same-origin, omit
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        // body: JSON.stringify({ email: username, password }) // body data type must match "Content-Type" header
                    })
                }
            })
            .then(async response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText)
                } else {
                    return response.json()
                }
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth.user))
            })
            .catch((err) => {
                console.error(err)
                throw new Error(`Network error`)
            })
    },
    // called when the API returns an error
    checkError: (error) => {
        if (error.status === 401 || error.status === 403) {
            localStorage.removeItem('auth')
            return Promise.reject({ redirectTo: '/credentials-required' })
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve()
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => localStorage.getItem('auth')
        ? Promise.resolve()
        : Promise.reject({ message: 'login.required' }),
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('auth')
        return Promise.resolve()
    },
    getIdentity: () => {
        try {
            const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'))
            return Promise.resolve({ id, fullName, avatar })
        } catch (error) {
            return Promise.reject(error)
        }
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        const role = localStorage.getItem('permissions')
        return role ? Promise.resolve(role) : Promise.reject()
    }
}

export default authProvider