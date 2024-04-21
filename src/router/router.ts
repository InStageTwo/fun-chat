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
  
    
  }