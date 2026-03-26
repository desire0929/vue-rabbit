import httpInstance from "@/utils/http";

//查询全部部门数据
export const getCategoryApi = () => httpInstance.get('/home/category/head');

