import React from 'react';
import _ from 'lodash';

import Menu from 'core-components/menu';

let dashboardRoutes = [
    { path: '/app/dashboard', text: 'Ticket List' },
    { path: '/app/dashboard/create-ticket', text: 'Create Ticket' },
    { path: '/app/dashboard/articles', text: 'View Articles' },
    { path: '/app/dashboard/edit-profile', text: 'Edit Profile' }
];

class DashboardMenu extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    static propTypes = {
        location: React.PropTypes.object
    };

    render() {
        return (
            <Menu {...this.getProps()} />
        );
    }

    getProps() {
        return {
            items: this.getMenuItems(),
            selectedIndex: this.getSelectedIndex(),
            onItemClick: this.goToPathByIndex.bind(this)
        };
    }

    getMenuItems() {
        return dashboardRoutes.map(this.getMenuItem.bind(this));
    }

    getMenuItem(item) {
        return {
            content: item.text
        };
    }

    getSelectedIndex() {
        let pathname = this.props.location.pathname;

        return _.findIndex(dashboardRoutes, {path: pathname});
    }

    goToPathByIndex(itemIndex) {
        this.context.router.push(dashboardRoutes[itemIndex].path);
    }
}

export default DashboardMenu;