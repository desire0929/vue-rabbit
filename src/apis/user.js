import httpInstance from '@/utils/http'

export const loginApi = ({account,password}) => httpInstance.post('/login', {account,password})

export const getLikeListApi = ({ limit = 4 }) => httpInstance.get('/goods/relevant',{limit})