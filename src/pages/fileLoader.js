// load vr tour components

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

function registerComponents(componentContext) {
  componentContext.keys().forEach((componentPath) => {
    const componentName = componentPath.replace(/\.\/|\.js/g, '');
    components[componentName] = componentContext(componentPath).default;
  });
}

registerComponents(componentContextLevel7);
registerComponents(componentContextClubHouse);

export default components;
