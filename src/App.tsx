import { Http, IHttp } from './helpers/http';
import Post from "./Post";
import { createContext } from 'react';

const http: IHttp = Http();
export const HttpContext = createContext(http);

const App = () => {
  return <Post/>
}

export default App;
