import httpInstance from '@/utils/http'

export const loginApi = ({account,password}) => httpInstance.post('/login', {account,password})