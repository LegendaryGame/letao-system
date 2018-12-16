import axios from 'axios'

const baseURL = 'http://127.0.0.1:3000'
axios.defaults.baseURL = baseURL

// axios的访问请求默认是不带cookie的，因此想要带cookie的请求，需要设置一个参数
axios.defaults.withCredentials = true
// 这样子设置登录后就会有存储信息

// 查询用户
export const getQueryUser = (pa) => {
  return axios.get('/user/queryUser', {params: pa})
    .then(res => {
      return res.data
    })
}

// 更改用户状态
export const updateUserStatus = (pa) => {
  return axios.post('/user/updateUser', pa)
    .then(res => {
      return res.data
    })
}

// 员工登录
export const eLogin = (pa) => {
  return axios.post('/employee/employeeLogin', pa)
    .then(res => {
      return res.data
    })
}

// 判断管理员登录
export const isRootLogin = () => {
  return axios.get('/employee/checkRootLogin')
    .then(res => {
      return res.data
    })
}

// 查询商品
export const queryProduct = (pa) => {
  return axios.get('/product/queryProductDetailList', {params: pa})
    .then(res => {
      return res.data
    })
}

// 一级分类查询
export const queryTopCategoryPaging = (pa) => {
  return axios.get('/category/queryTopCategoryPaging', {params: pa})
    .then(res => {
      return res.data
    })
}

// 一级分类添加
export const addTopCategory = (pa) => {
  return axios.post('/category/addTopCategory', pa)
    .then(res => {
      return res.data
    })
}

// 二级分类查询
export const querySecondCategoryPaging = (pa) => {
  return axios.get('/category/querySecondCategoryPaging', {params: pa})
    .then(res => {
      return res.data
    })
}
