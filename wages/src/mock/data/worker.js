import Mock from 'mockjs'
export default Mock.mock({
  'workerList|20': [
    {
      'id|+1': 0,
      'name|1': '@cname()',
      'phone|1': '@id()',
      'status|1': [
        '0',
        '1',
        '2'
      ],
      'team|1': '@cword(3, 5)'
    }
  ]
})
