export default [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', name: '主页', icon: 'smile', component: './Welcome' },
  { path: '/cake', name: '蛋糕', icon: 'search', component: './Cake/MyCakeCard' },
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
    ],
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {path: '/admin', redirect: '/admin/user'},
      { name: '用户管理', path: '/admin/user', component: './Admin/UserList' },
      { name: '商品管理', path: '/admin/goods', component: './Admin/GoodsList' },
      { name: '订单管理', path: '/admin/order', component: './Admin/OrderList' },
      { name: '商品类型管理', path: '/admin/type', component: './Admin/TypeList' },
    ],
  },
  {
    path: '/account',
    name: "个人页",
    icon: "user",
    routes: [
      {path: '/account', redirect: '/account/center'},
      {name: '个人中心', path: '/account/center', component: './Account/Center'},
      {name: '个人设置', path: '/account/settings', component: './Account/Settings'},
    ]

  },
  { path: '*', layout: false, component: './Exception/404' },
];
