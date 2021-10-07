export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        'data|5-10': [
          {
            id: '@increment(1)',
            name: '@cword(2, 8)',
            price: '@natural(2, 10)',
            count: '@natural(100, 999)',
          },
        ],
      }
    },
  },
  {
    url: '/api/user/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        'data|5-10': [
          {
            id: '@increment(1)',
            name: '@cname',
            area: '@city(true)',
            price: '@natural(2, 10)',
            count: '@natural(100, 999)',
            avatar: '@image', //生成一个随机的图片地址,
            creatTime: '@datetime("yyyy-MM-dd HH:mm:ss")', //返回一个随机的日期和时间字符串
          },
        ],
      }
    },
  },
]
