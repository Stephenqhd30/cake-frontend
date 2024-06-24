export default [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
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
