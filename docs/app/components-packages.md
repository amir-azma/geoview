# Components versus Packages

The main difference between a component and a package is their level of customization. Components are potentially configurable basic elements with which we can build other more complex elements. On the other hand, a package is something built with several basic or customized components. By analogy, we can compare components to Lego blocks and packages to structures built with them.

## What is a components

Components are part of the geoview-core package where we find the basic functionality of GeoView (api, events, translation, ...).
Some components, like legends and data grids can be reused in another package or directly from the GeoView API as we can see in these demos:

- [legend](https://canadian-geospatial-platform.github.io/geoview/public/legend.html)
- [data-grid](https://canadian-geospatial-platform.github.io/geoview/public/package-footer-panel.html)

Other components can be added to the map from the configuration via the following line:

```js
'components': ['app-bar', 'nav-bar', 'north-arrow', 'overview-map', 'footer-bar']
```

In all these cases, components are building blocks on which we can build more important functionality.

## What is a packages

Packages are collections of components that extend the functionality of the viewer. There are two types of packages, **Core Package** and **External Package**.

A **Core Package** is a package developed and maintained by the viewer team. The viewer supports few core packages such as a [basemap panel](https://canadian-geospatial-platform.github.io/geoview/public/package-basemap-panel.html), details panel, layers panel or [footer panel](https://canadian-geospatial-platform.github.io/geoview/public/package-footer-panel.html). Core packages can be added to the map from the configuration via the following line:

```js
'corePackages': ['details-panel', 'layers-panel', 'basemap-panel', 'footer-panel', 'swiper'],
```

Each of these packages is associated with a default schema and configuration. It is therefore possible to configure them to some extent according to our needs. For exemple, the basemap panel has this [schema](https://github.com/Canadian-Geospatial-Platform/geoview/blob/develop/packages/geoview-basemap-panel/schema.json) and [default configuration](https://github.com/Canadian-Geospatial-Platform/geoview/blob/develop/packages/geoview-basemap-panel/default-config-basemap-panel.json). If necessary, the user can customize the package by providing a custom configuration file to initialize the package.

To associate a custom configuration with a package, follow these steps:

- Provide in the map's div tag a json configuration file, say package-bp1-lcc-config.json using the key **data-config-url** as shown below:

```html
<div
  id="mapLCC"
  class="llwp-map"
  data-lang="en"
  data-config-url="./configs/package-bp1-lcc-config.json"
></div>
```

- In the provided json file, specify the desired core package using the **corePackages** key as follows:

```js
'corePackages': ['basemap-panel'],
```

- Then, create a configuration file for the package and name it <config-file-name>-<package-name>(i.e. `package-bp1-lcc-config-basemap-panel.json`)
- Put both configuration files in the same folder

An **External Package** is a package developed outside the GeoView repository and not maintained by the viewer team. You can see a demonstration in this [repository](https://github.com/Canadian-Geospatial-Platform/geoview-ce-demo).

**Currently there is no mechanism to reuse an external package in another viewer instance, this is a work in progress.**
