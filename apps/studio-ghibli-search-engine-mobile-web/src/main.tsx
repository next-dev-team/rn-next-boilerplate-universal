import { AppRegistry } from 'react-native';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import App from '../../studio-ghibli-search-engine-mobile/src/app';

AppRegistry.registerComponent('main', () => App);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});
