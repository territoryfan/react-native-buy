/**
 * territory create
 * 愁眉弯唇皆是为你从此眉间心上再无一人
 */
import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View
} from 'react-native';
import Main from "./app/component/Main/XMGMain";
// import Launch from "./app/component/Main/XMGLaunchImage";
export default class XMGBuy extends Component {
   render() {
      return (
          <Main/>
      );
   }
}
AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
