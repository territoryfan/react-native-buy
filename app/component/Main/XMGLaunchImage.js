/**
 * territory create
 * 愁眉弯唇皆是为你从此眉间心上再无一人
 */
import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Image
} from 'react-native';
// import Main from "../Main/XMGMain";
export default class Launch extends Component {
   render() {
      return (
          <Image
            source={require("../../assets/images/launchimage.png")}
            style={styles.launchImgStyle}
          />
      );
   }
   componentDidMount() {
      // setTimeout(()=>{
      //
      // },1000)
   }
}

const styles = StyleSheet.create({
   launchImgStyle: {
      flex:1
   }
});

