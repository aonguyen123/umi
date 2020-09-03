import { Fragment } from 'react';
import { Layout, Menu, Avatar, Image } from 'antd';
import { Link } from 'umi';
import { connect } from 'dva';
import { LogoutOutlined } from '@ant-design/icons';
import styles from './styles.css';

const { Header } = Layout;
const { SubMenu } = Menu;

function GlobalHeader({ statusLogin, userInfo, dispatch, roleInfo, locationPathname }) {
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
                            <span className={styles.wellcomeHeader}>Hi,</span>
                            <span className={styles.roleUser}>[{roleInfo.roleName}]</span>
                            <span>{userInfo.username}</span>
                            <Avatar
                                className={styles.avatarUser}
                                size="large"
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
                selectedKeys={[locationPathname]}
                className={styles.headerAntd}
                mode="horizontal"
            >
                <Menu.Item key="/login">
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
        ),
    );
    rightContent.unshift(
        <Menu
            key="home"
            selectedKeys={[locationPathname]}
            className={styles.headerAntd}
            mode="horizontal"
        >
            <Menu.Item key="/home">
                <Link to="/home">Home page</Link>
            </Menu.Item>
        </Menu>,
    );
    rightContent.unshift(
        <Menu
            key="dashboard"
            selectedKeys={[locationPathname]}
            className={styles.headerAntd}
            mode="horizontal"
        >
            <Menu.Item key="/admin">
                <Link to="/admin">Admin page</Link>
            </Menu.Item>
        </Menu>,
    );

    const leftContent = [
        <div className={styles.logo} key="logo">
            <Link to="/">
                <Image
                    src="https://avatars1.githubusercontent.com/u/20552239?s=200&v=4"
                    alt="img"
                    width={50}
                    style={{ top: '-5px' }}
                />
                <span>dva</span>
            </Link>
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
    roleInfo: app.roleInfo,
    locationPathname: app.locationPathname,
}))(GlobalHeader);
