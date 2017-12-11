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
const Home_D4 = {
   "stid": "720698155324449024",
   "data": [{
      "position": 0,
      "typeface_color": "#ff9900",
      "id": 7486,
      "share": {
         "message": "1元能吃肯德基",
         "url": "http://i.meituan.com/firework/kfchanbao"
      },
      "title": "1元能吃肯德基",
      "module": false,
      "maintitle": "1元肯德基",
      "tplurl": "imeituan://www.meituan.com/web?url=http://i.meituan.com/firework/kfchanbao",
      "type": 1,
      "imageurl": require("../../assets/images/middle0.png"),
      "solds": 0,
      "deputytitle": "新用户专享"
   }, {
      "position": 0,
      "typeface_color": "#f6687d",
      "id": 15351,
      "share": {
         "message": "刷新颜值啦！领最高188元红包，更有疯狂立减ing～",
         "url": "http://i.meituan.com/firework/beautyactivity0328"
      },
      "title": "4月开春大促",
      "module": false,
      "maintitle": "领21元红包",
      "tplurl": "imeituan://www.meituan.com/web?url=http://i.meituan.com/firework/beautyactivity0328",
      "type": 1,
      "imageurl": require("../../assets/images/middle1.png"),
      "solds": 0,
      "deputytitle": "小长假美美哒"
   }, {
      "position": 0,
      "typeface_color": "#6bbd00",
      "id": 15444,
      "share": {
         "message": "",
         "url": "http://i.meituan.com/firework/160115xinyonghu?activity_id=611"
      },
      "title": "外卖0401-0417刘莉君新客",
      "module": false,
      "maintitle": "新用户专享",
      "tplurl": "imeituan://www.meituan.com/web?url=http://i.meituan.com/firework/160115xinyonghu?activity_id=611",
      "type": 1,
      "imageurl": require("../../assets/images/middle2.png"),
      "solds": 0,
      "deputytitle": "最高立减25元"
   }, {
      "position": 0,
      "typeface_color": "#06c1ae",
      "id": 15182,
      "share": {
         "message": "",
         "url": "http://mpay.meituan.com/resource/oneyuan/deal-list.html?entry=home#deal-list/"
      },
      "title": "一元抢吧",
      "module": false,
      "maintitle": "一元抢吧",
      "tplurl": "imeituan://www.meituan.com/web?url=http://mpay.meituan.com/resource/oneyuan/deal-list.html?entry=home#deal-list/",
      "type": 1,
      "imageurl": require("../../assets/images/middle3.png"),
      "solds": 0,
      "deputytitle": "爆品抢到手软"
   }],
   "server": {
      "time": 1459731016
   },
   "paging": {
      "count": 5
   }
};
import CommonView from "./XMGMiddleCommonView";
export default class BottomView extends Component {
   render() {
      return (
          <View style={styles.container}>
             {/*上部分*/}
             <View style={styles.topViewStyle}>

             </View>
             {/*下部分*/}
             <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
             </View>
          </View>
      );
   }
   //下面的所有子组件
   renderBottomItem () {
      const itemArr = [];
      const dataArr = Home_D4.data;
      for (let i=0; i<dataArr.length; i++) {
         itemArr.push(
            <CommonView
                title={dataArr[i].maintitle}
                subTitle={dataArr[i].deputytitle}
                rightImage={dataArr[i].imageurl}
                titleColor={dataArr[i].typeface_color}
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
   },
   topViewStyle: {

   },
   bottomViewStyle: {
      flexDirection:"row",
      flexWrap:"wrap"
   }
});

