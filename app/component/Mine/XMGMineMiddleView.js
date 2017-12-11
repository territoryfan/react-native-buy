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
   Image,
   TouchableOpacity
} from 'react-native';
const MiddleObj = [
   {'iconName':require("../../assets/images/order1.png"), 'title':'待付款'},
   {'iconName':require("../../assets/images/order2.png"), 'title':'待使用'},
   {'iconName':require("../../assets/images/order3.png"), 'title':'待评价'},
   {'iconName':require("../../assets/images/order4.png"), 'title':'退款/售后'},
];
export default class MineMiddleView extends Component {
   render() {
      return (
          <View style={styles.container}>
             {this.renderMiddleView()}
          </View>
      );
   }
   renderMiddleView() {
      const itemArr = [];
      for (let i =0; i<MiddleObj.length; i++) {
         const item = MiddleObj[i];
         itemArr.push(
             <TouchableOpacity key={i}>
                <View style={styles.innerViewStyle}>
                   <Image
                       style={{width:30,height:20}}
                       source={item.iconName}
                   />
                   <Text>{item.title}</Text>
                </View>
             </TouchableOpacity>
         )
      }
      return itemArr
   }
}
const styles = StyleSheet.create({
   container: {
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems: 'center',
      backgroundColor: 'white',
   },
   innerViewStyle: {
      width:70,
      height:70,
      justifyContent:"center",
      alignItems:"center"
   }
});

