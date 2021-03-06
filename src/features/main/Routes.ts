import IRoute from './Route';
import Dashboard from "../dashboard/Dashboard";
import Log from "../log/Log";
import IntegrationConfigurationForm from "../integration/IntegrationConfigurationForm";
import Overview from "../overview/Overview";
import Support from "../support/Support";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        exact: true,
        icon: 'dashboard',
        inNavigationMenu: true
    },
    {
        path: '/integration/configuration/new',
        name: 'newIntegration',
        component: IntegrationConfigurationForm,
        exact: true,
        icon: 'add',
        inNavigationMenu: true
    },
    {
        path: '/integration/configuration/edit',
        name: 'editIntegration',
        component: IntegrationConfigurationForm,
        exact: true
    },
    {
        path: '/integration/configuration/list',
        name: 'integrationList',
        component: Overview,
        exact: true,
        icon: 'sync',
        inNavigationMenu: true
    },
    {
        path: '/integration/configuration/details',
        name: 'integrationDetails',
        component: Overview,
        exact: true,
    },
    {
        path: '/log',
        name: 'log',
        component: Log,
        icon: 'receipt',
        exact: true,
        inNavigationMenu: true
    },
    {
        path: '/support',
        name: 'support',
        component: Support,
        icon: 'contact_support',
        exact: true,
        inNavigationMenu: true
    }
]

export default routes;
