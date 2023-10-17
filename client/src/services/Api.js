import axiox from 'axios'
import store from '@/store'

export default () => {
    return axiox.create({
        baseURL: 'http://localhost:8081',
        headers:{
            Authorization: `Bearer ${store.state.token}`
        }
    })
}