import React from 'react';
import styles from '../sidebar/sidebar.module.css';
import MenuLink from '../sidebar/menuLink/menuLink';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag, 
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter
} from 'react-icons/md';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]
  }
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.username}>Joselyne Uwingabire</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {
          menuItems.map((cat) => (
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
                {cat.list.map(item => (
                    <MenuLink item={item} key={item.title} />
                ))}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Sidebar;
