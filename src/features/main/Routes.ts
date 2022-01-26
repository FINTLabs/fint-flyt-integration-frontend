import IRoute from './Route';
import Dashboard from "../dashboard/Dashboard";
import Log from "../log/Log";
import IntegrationConfigurationForm from "../integration/IntegrationConfigurationForm";
import Overview from "../overview/Overview";
import Support from "../support/support";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        exact: true,
        icon: 'dashboard',
        inNavigationMenu: true
    },
    {
        path: '/integration/configuration/new',
        name: 'Ny avlevering',
        component: IntegrationConfigurationForm,
        exact: true,
        icon: 'add',
        inNavigationMenu: true
    },
    {
        path: '/integration/configuration/edit',
        name: 'Rediger avlevering',
        component: IntegrationConfigurationForm,
        exact: true
    },
    {
        path: '/overview',
        name: 'Skjemaoversikt',
        component: Overview,
        exact: true,
        icon: 'sync',
        inNavigationMenu: true
    },
    {
        path: '/log',
        name: 'Avleveringslogg',
        component: Log,
        icon: 'receipt',
        exact: true,
        inNavigationMenu: true
    },
    {
        path: '/support',
        name: 'Support',
        component: Support,
        icon: 'contact_support',
        exact: true,
        inNavigationMenu: true
    }
]

export default routes;
