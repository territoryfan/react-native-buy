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
   TouchableOpacity,
} from 'react-native';
import CommonView from "./XMGMiddleCommonView";
import Dimensions from "Dimensions";
const { width } = Dimensions.get("window");
const TopMiddleData = {
   "dataLeft":[
      {"img1" : require("../../assets/images/mdqg.png"), "img2" : require("../../assets/images/yyms.png"), "title" : "探路组碳烤鱼", "price": "¥9.5", "sale": "再减3元"}
   ],
   "dataRight":[
      {"title" : "天天特价", "subTitle" : "特惠不打烊", "rightImage" : require("../../assets/images/tttj.png"), "titleColor": "orange"},
      {"title" : "一元吃", "subTitle" : "一元吃美食", "rightImage" : require("../../assets/images/yyms.png"), "titleColor": "red"}
   ]
}
export default class HomeMiddleView extends Component {
   render() {
      return (
          <View style={styles.container}>
            {/*左边*/}
            {this.renderLeftView()}
            {/*右边*/}
            <View>
               {this.renderRightView()}
            </View>
          </View>
      );
   }
   //左边的View
   renderLeftView () {
      const LeftData = TopMiddleData.dataLeft[0];
      return (
         <TouchableOpacity>
             <View style={styles.leftViewStyle}>
                <Image source={LeftData.img1} style={styles.leftImageStyle}/>
                <Image source={LeftData.img2} style={styles.leftImageStyle}/>
                <Text style={{color:"gray"}}>{LeftData.title}</Text>
                <View style={{flexDirection:"row",marginTop:5}}>
                   <Text style={{color:"rgba(85,173,177,1)",marginRight:5}}>{LeftData.price}</Text>
                   <Text style={{color:"orange",backgroundColor:"yellow"}}>{LeftData.sale}</Text>
                </View>
             </View>
         </TouchableOpacity>
      )
   }
   //右边的View
   renderRightView () {
      const itemArr = [];
      const rightData = TopMiddleData.dataRight;
      for (let i=0; i<rightData.length; i++) {
         itemArr.push(
            <CommonView
                title={rightData[i].title}
                subTitle={rightData[i].subTitle}
                rightImage={rightData[i].rightImage}
                titleColor={rightData[i].titleColor}
                key={i}
            />
         )
      }
      return itemArr;
   }
}

const styles = StyleSheet.create({
   container: {
      marginTop:15,
      flexDirection:"row",

   },
   leftViewStyle: {
      width:width*0.5,
      height:121,
      backgroundColor:"white",
      marginRight:1,
      /*水平垂直居中*/
      justifyContent:"center",
      alignItems:"center",
   },
   leftImageStyle: {
      width:120,
      height:30,
      resizeMode:"contain",
   }
});

