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
   Platform,
   TouchableOpacity
} from 'react-native';
import Dimensions from "Dimensions";
const {width} = Dimensions.get('window');
export default class HeaderView extends Component {
   render() {
      return (
          <View style={styles.container}>
             {/*上部分*/}
             {this.renderTopView()}
             {/*下部分*/}
             {this.renderBottomView()}
          </View>
      );
   }
   renderTopView () {
      return (
          <View style={styles.topViewStyle}>
               <Image source={require("../../assets/images/see.png")} style={styles.leftIconStyle}/>
               <View style={styles.centerViewStyle}>
                  <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>小玛哥电商</Text>
                  <Image source={require("../../assets/images/avatar_vip.png")} style={{width:17, height:17}}/>
               </View>
               <Image source={require("../../assets/images/icon_cell_rightarrow.png")} style={{width:8, height:13, marginRight:8}}/>
          </View>
      )
   }
   renderBottomView () {
      return (
          <View style={styles.bottomViewStyle}>
             {this.renderBottomItem()}
          </View>
      )
   }
   renderBottomItem() {
      const itemArr = [];
      const data = [
         {'number':'100', 'title':'码哥券'},
         {'number':'12', 'title':'评价'},
         {'number':'50', 'title':'收藏'}
      ]
      //遍历创建组件装入数组
      for(let i =0;i<data.length;i++) {
         const item = data[i];
         itemArr.push(
             <TouchableOpacity key={i}>
                <View style={styles.bottomInnerViewStyle}>
                   <Text style={{color:"white"}}>{item.number}</Text>
                   <Text style={{color:"white"}}>{item.title}</Text>
                </View>
             </TouchableOpacity>
         )
      }
      return itemArr;
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // height:Platform.OS == 'ios'? 400 : 200,
      height:Platform.OS == 'ios'? 200 : 200,
      backgroundColor: 'rgba(255,96,0,1.0)'
   },
   topViewStyle: {
      flexDirection:"row",
      // marginTop:Platform.OS == 'ios'? 280 : 80,
      marginTop:Platform.OS == 'ios'? 80 : 80,
      justifyContent:"space-around",
      alignItems:"center"
   },
   leftIconStyle:{
      width:70,
      height:70,
      borderRadius:35,
      borderWidth:3,
      borderColor:'rgba(0,0,0,0.2)'
   },
   centerViewStyle: {
      flexDirection:'row',
      width:width * 0.72
   },
   bottomViewStyle: {
      flexDirection:"row",
      position:"absolute",
      bottom:0
   },
   bottomInnerViewStyle: {
      width:(width/3)+1,
      height:40,
      backgroundColor:'rgba(255,255,255,0.4)',

      justifyContent:'center',
      alignItems:'center',

      borderRightWidth:1,
      borderRightColor:'white'
   }
});

