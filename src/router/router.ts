import HeaderView from '../views/headerView';
import { Pages } from './pages';

interface Route {
    path: string;
    callback: (resource: string) => void;
}

export default class Router {
    routes: Route[];

    constructor(routes: Route[]) {
        this.routes = routes;
    }

    navigate(url: string) {
        const request = this.parseUrl(url);

        const pathToFind = request.resource === '' ? request.path : `${request.path}/${request.resource}`;
        const route = this.routes.find(item => item.path === pathToFind);
        if (!route) {
            this.redirect();
            return;
        }
        if (pathToFind === '/header') {
            const headerView = new HeaderView(this);
            document.body.appendChild(headerView.render());
        } 
        route.callback(request.resource);
    }

    parseUrl(url: string) {
        const result: { path: string, resource: string } = { path: '', resource: '' };
        const path = url.split('/');
        [result.path = '', result.resource = ''] = path;
        return result;
    }

    redirect() {
        const notFoundPage = this.routes.find((item) => item.path === Pages.NOT_FOUND);
        if (notFoundPage) {
            this.navigate(notFoundPage.path);
        }
        
    }
}
