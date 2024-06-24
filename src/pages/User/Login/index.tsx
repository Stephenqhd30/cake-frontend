import { Footer } from '@/components';
import { LoginFormPage } from '@ant-design/pro-components';
import { Helmet, history, useModel } from '@umijs/max';
import { message, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { createStyles } from 'antd-style';
import { BACKGROUND_IMAGE, STEPHEN_SUBTITLE, STEPHEN_TITLE } from '@/constants';
import RegisterPage from '@/pages/User/Login/components/RegisterPage';
import LoginPage from '@/pages/User/Login/components/LoginPage';
import {userLoginUsingPost, userRegisterUsingPost} from '@/services/stephen-backend/userController';

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});


const Login: React.FC = () => {
  const [type, setType] = useState<string>('login');
  const {initialState, setInitialState} = useModel('@@initialState');
  const [redirected, setRedirected] = useState(false); // 控制重定向状态
  const {styles} = useStyles();
  // 用户登录
  const handleLoginSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPost({
        ...values,
      });
      const hide = message.success('登录成功！');
      // 保存已登录的用户信息
      setInitialState({
        ...initialState,
        currentUser: res?.data,
      });
      setRedirected(true); // 设置重定向状态为 true
      hide()
      return;
    } catch (error: any) {
      const defaultLoginFailureMessage = `登录失败${error.message}, 请重试！`;
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };

  // 用户注册
  const handleRegisterSubmit = async (values: API.UserRegisterRequest) => {
    try {
      // 注册
      await userRegisterUsingPost({
        ...values
      });
      const defaultLoginSuccessMessage = '注册成功！';
      message.success(defaultLoginSuccessMessage);
      return;
    } catch (error: any) {
      const defaultLoginFailureMessage = `注册失败${error.message}, 请重试！`;
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };

  // useEffect 监听 redirected 状态的变化
  useEffect(() => {
    if (redirected) {
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
    }
  }, [redirected]);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{}</title>
      </Helmet>
      <div
        style={{
          flex: '1 auto',
          padding: '0'
        }}
      >
        {/*用户登录的表单*/}
        <LoginFormPage
          submitter={{
            searchConfig: {
              submitText: type === 'login' ? '登录' : '注册'
            }
          }}
          backgroundImageUrl={BACKGROUND_IMAGE}
          containerStyle={{
            backdropFilter: 'blur(4px)'
          }}
          logo={<img alt="logo" src="/logo.svg"/>}
          title={STEPHEN_TITLE}
          subTitle={STEPHEN_SUBTITLE}
          initialValues={{
            autoLogin: true
          }}
          onFinish={async (values) => {
            if (type === 'login') {
              await handleLoginSubmit(values as API.UserLoginRequest);
            } else if (type === 'register') {
              await handleRegisterSubmit(values as API.UserRegisterRequest);
            }
          }}
        >
          <Tabs
            centered
            activeKey={type}
            onChange={(activeKey) => setType(activeKey)}
            items={[
              {label: '账号密码登录', key: 'login'},
              {label: '注册新用户', key: 'register'}
            ]}
          ></Tabs>
          {/*用户选择账号密码登录*/}
          {type === 'login' && <LoginPage/>}
          {type === 'register' && <RegisterPage/>}
          {/*给输入框和登录按钮中一个边距*/}
          <div
            style={{
              marginBottom: 36
            }}
          ></div>
        </LoginFormPage>
      </div>
      <Footer/>
    </div>
  );
};
export default Login;
