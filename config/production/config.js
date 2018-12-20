import commonConfiguration from '../commonConfig';

const productionConfiguration = {
  USE_DEV_TOOL_EXTENSION: false,
  HOT_MODULE_LOADER: false
}

export default Object.assign({}, productionConfiguration, commonConfiguration);
