import commonConfiguration from '../commonConfig';

const developmentConfiguration = {
  USE_DEV_TOOL_EXTENSION: true,
  HOT_MODULE_LOADER: true
}

export default Object.assign({}, developmentConfiguration, commonConfiguration);
