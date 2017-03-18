# Flexbox Grid

A Set of React Native Components to make a grid easier to reason about.

# The Problem
Responsive Design is easy on the web but a bit harder on a mobile app.

I'm experimenting with using a CSS type grid to have conditional looks based on device width similar to media queries.

# Getting Started

### Installation

In your react native project

```
npm install react-native-flexbox-grid
```

### Import

```
import {Column as Col, Row} from 'react-native-flexbox-grid';
```

### Basic Example

```
<View style={styles.container}>        
  <Row size={12}>
    <Col sm={6} md={4} lg={3}>
      <Text>
        First Column
      </Text>
    </Col>
    <Col sm={6} md={4} lg={3}>
      <Text>
        Second Column
      </Text>
    </Col>
  </Row>      
</View>
```

The api is inspired by
[react-flexbox-grid](https://www.npmjs.com/package/react-flexbox-grid), but it is not exactly the same.

The main difference is you can specify the grid size. By default `<Row>` is a size of 12. However if you want you can make a `<Row>` any size you want.

### More Documentation

[Documentation](https://github.com/rundmt/react-native-flexbox-grid/wiki/Documentation)

#### Changes for 0.3.0

React Native now supports percentages as of 0.42. All of our versions going forward will rely on percentages. It has much faster performance compared to what we did before when we relied on `onLayout`. The API for apps is the same. There should be no difference in expected output of your app.

#### Changes for 0.2.0

As of 0.2.0 Row will automatically wrap components. If you do not want components to automatically wrap you must specify `nowrap` in the row's prop.

```
  <Row size={12} nowrap>
```

## Known Issues

For react-native 0.41 and earlier you muse use `react-native-flexbox-grid@0.2.0` or earlier.

Since React Native before 0.41 and earlier doesn't support percentages we have to rely on using React Native's `onlayout` to pass the width of the parent to the child. This causes layouts to be a bit slow, because the child has to wait for the parent to layout and then rerender. This problem is resolved by using react native 0.42 and the `react-native-flexbox-grid@0.3.0` or later.


### What's working
* Basic Grid
* Styles
* Hiding Items
* Basic Unit Testing

### To Do
* Integration Testing. (Possibly New Examples Repo)
