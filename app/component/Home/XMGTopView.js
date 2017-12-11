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
   ScrollView,
   ListView,
   Image
} from 'react-native';
import Dimensions from "Dimensions";
const { width } = Dimensions.get("window");
import TopListView from "./XMGTopListView";
// var TopMenu = require("../../LocalData/TopMenu.json");
const TopMenu =
{
   "data": [
      [  {
            "title" : "美食",
            "image" : require("../../assets/images/ms.png")
         },
         {
            "title" : "电影",
            "image" : require("../../assets/images/dy.png")
         },
         {
            "title" : "酒店",
            "image" : require("../../assets/images/jd.png")
         },
         {
            "title" : "休闲娱乐",
            "image" : require("../../assets/images/xxyl.png")
         },
         {
            "title" : "外卖",
            "image" : require("../../assets/images/wm.png")
         },
         {
            "title" : "自助餐",
            "image" : require("../../assets/images/zzc.png")
         },
         {
            "title" : "KTV",
            "image" : require("../../assets/images/ktv.png")
         },
         {
            "title" : "火车票机票",
            "image" : require("../../assets/images/hcpjp.png")
         },
         {
            "title" : "丽人",
            "image" : require("../../assets/images/lr.png")
         },
         {
            "title" : "周边游",
            "image" : require("../../assets/images/zby.png")
         }
      ],
      [
         {
            "title" : "足疗按摩",
            "image" : require("../../assets/images/zlam.png")
         },
         {
            "title" : "购物",
            "image" : require("../../assets/images/gw.png")
         },
         {
            "title" : "今日新单",
            "image" : require("../../assets/images/jrxd.png")
         },
         {
            "title" : "小吃快餐",
            "image" : require("../../assets/images/xckc.png")
         },
         {
            "title" : "生活服务",
            "image" : require("../../assets/images/shfw.png")
         },
         {
            "title" : "甜点饮品",
            "image" : require("../../assets/images/tdyp.png")
         },
         {
            "title" : "美甲",
            "image" : require("../../assets/images/mj.png")
         },
         {
            "title" : "景点门票",
            "image" : require("../../assets/images/jdmp.png")
         },
         {
            "title" : "旅游",
            "image" : require("../../assets/images/ly.png")
         },
         {
            "title" : "全部分类",
            "image" : require("../../assets/images/qbfl.png")
         }
      ]
   ]
}
export default class TopView extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activePage: 0,

      }
   }
   render() {
      return (
          <View style={styles.container}>
             {/*内容部分*/}
             <ScrollView
               horizontal={true}
               pagingEnabled={true}
               showsHorizontalScrollIndicator={false}
               onMomentumScrollEnd={this.onScrollAnimationEnd.bind(this)}
             >
                {this.renderScrollItem()}
             </ScrollView>
             {/*点部分*/}
             <View style={styles.indicatorViewStyle}>
                {this.renderIndicator()}
             </View>
          </View>
      );
   }
   //当一针滚动结束
   onScrollAnimationEnd(e) {
      //求出当前页面
      const currentPage = Math.floor(e.nativeEvent.contentOffset.x / width)
      //更新状态机
      this.setState({
         activePage:currentPage
      })
   }
   //内部组件
   renderScrollItem(){
      const itemArr = [];
      // 颜色数组
      // const colorArr = ["red","green"];
      const dataArr = TopMenu.data;
      for (let i =0; i<dataArr.length; i++) {
         itemArr.push(
             <TopListView
               key={i}
               dataArr={dataArr[i]}
             />
         )
      }
      return itemArr;
   }
   renderIndicator() {
      //指示器数组
      const indicatorArr = [];
      let style= "";
      for (let i=0; i<2; i++) {
         style = (i===this.state.activePage) ? {color:"orange"} : {color:"gray"}
         indicatorArr.push(
             <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
         )
      }
      return indicatorArr;
   }
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
   },
   indicatorViewStyle: {
      flexDirection:"row",
      justifyContent:"center",
      alignItems: "center",
   }
});

