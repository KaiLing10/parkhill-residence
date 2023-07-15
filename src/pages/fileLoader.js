// load vr tour components
// https://webpack.js.org/guides/dependency-management/#requirecontext

const components = {};

const componentContextLevel7 = require.context(
  '../components/virtualTour/level7',
  false,
  /\.js$/
);

const componentContextClubHouse = require.context(
  '../components/virtualTour/level7_clubhouse',
  false,
  /\.js$/
);

const componentContextUnit1 = require.context(
  '../components/virtualTour/unit1',
  false,
  /\.js$/
);

const componentContextUnit2 = require.context(
  '../components/virtualTour/unit2',
  false,
  /\.js$/
);

function registerComponents(componentContext) {
  componentContext.keys().forEach((componentPath) => {
    const componentName = componentPath.replace(/\.\/|\.js/g, '');
    components[componentName] = componentContext(componentPath).default;
  });
}

registerComponents(componentContextLevel7);
registerComponents(componentContextClubHouse);
registerComponents(componentContextUnit1);
registerComponents(componentContextUnit2);


export default components;
