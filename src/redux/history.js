import { createBrowserHistory } from 'history';
import config from 'config';

let historyConfig = {};
if (config.ROUTE_BASENAME) {
  historyConfig = { basename: `${config.ROUTE_BASENAME}` };
}

export default createBrowserHistory(historyConfig);
