import { Fragment } from 'react';
import { Layout, Menu, Avatar, Image } from 'antd';
import { Link } from 'umi';
import { connect } from 'dva';
import { LogoutOutlined } from '@ant-design/icons';
import styles from './styles.css';

const { Header } = Layout;
const { SubMenu } = Menu;

function GlobalHeader({ statusLogin, userInfo, dispatch }) {
    function onLogout() {
        dispatch({ type: 'app/logout' });
    }

    const rightContent = [
        statusLogin && (
            <Menu key="user" mode="horizontal" className={styles.headerAntd}>
                <SubMenu
                    className={styles.subMenu}
                    title={
                        <Fragment>
                            <span style={{ color: '#999', marginRight: 4 }}>Hi,</span>
                            <span>{userInfo.username}</span>
                            <Avatar
                                size="large"
                                style={{ marginLeft: 8, top: '-5px' }}
                                src={userInfo.avatar ? userInfo.avatar : null}
                            >
                                {userInfo?.username.charAt(0).toUpperCase()}
                            </Avatar>
                        </Fragment>
                    }
                >
                    <Menu.Item key="SignOut" onClick={onLogout}>
                        <LogoutOutlined />
                        Sign out
                    </Menu.Item>
                </SubMenu>
            </Menu>
        ),
    ];
    rightContent.unshift(
        !statusLogin && (
            <Menu
                key="login"
                //   selectedKeys={[currentLanguage.key]}
                className={styles.headerAntd}
                mode="horizontal"
            >
                <Menu.Item>
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
        ),
    );
    rightContent.unshift(
        <Menu
            key="home"
            //   selectedKeys={[currentLanguage.key]}
            className={styles.headerAntd}
            mode="horizontal"
        >
            <Menu.Item>
                <Link to="/home">Home page</Link>
            </Menu.Item>
        </Menu>,
    );
    rightContent.unshift(
        <Menu
            key="dashboard"
            //   selectedKeys={[currentLanguage.key]}
            className={styles.headerAntd}
            mode="horizontal"
        >
            <Menu.Item>
                <Link to="/admin">Admin page</Link>
            </Menu.Item>
        </Menu>,
    );

    const leftContent = [
        <div className={styles.logo} key="logo">
            <Image
                src="https://avatars1.githubusercontent.com/u/20552239?s=200&v=4"
                alt="img"
                width={50}
                style={{ top: '-5px' }}
            />
            <span>dva</span>
        </div>,
    ];

    return (
        <Header className={styles.header}>
            <div className={styles.leftContent}>{leftContent}</div>
            <div className={styles.rightContainer}>{rightContent}</div>
        </Header>
    );
}

export default connect(({ app }) => ({
    statusLogin: app.statusLogin,
    userInfo: app.userInfo,
}))(GlobalHeader);
