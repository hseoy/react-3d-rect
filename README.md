# react-3d-rect

> 3D Rectangle with transition

- [Demo](https://hseoy.github.io/react-3d-rect/)

## Table of Content

1. [Install](#install)
2. [Usage](#usage)
3. [Main Props](#main-props)
4. [To run an example](#to-run-an-example)
5. [License](#license)

## Install

```
$ npm install --save react-3d-rect
```

## Usage

The library consists of a single component. Rect components can have four children and can ignore more than four children. You can control the index, transition-duration, etc. of Rect using props.

```jsx
import Rect from 'react-3d-rect';

// ...

<Rect index={'front'} transition={0.5}>
  <div>FRONT</div>
  <div>RIGHT</div>
  <div>BACK</div>
  <div>LEFT</div>
</Rect>;

// ...
```

### Main Props

| Attributes   |   Type   | Default | Description                                                             |
| :----------- | :------: | :-----: | :---------------------------------------------------------------------- |
| index        | `string` | `front` | Sets the current rect side. Possible values: `front, right, back, left` |
| size         | `number` |  `500`  | Width(px) of Rect. Height of Rect is `100%`                             |
| transition   | `number` |   `1`   | Duration of transition                                                  |
| emptyBgColor | `string` | `#fff`  | Background color of empty face of Rect                                  |
| emptyBdColor | `string` | `#000`  | Border color of empty face of Rect                                      |

### To run an example:

```
$ git clone https://github.com/hseoy/react-3d-rect
$ npm install
$ npm start
```

## License

MIT © [hseoy](https://github.com/hseoy)
