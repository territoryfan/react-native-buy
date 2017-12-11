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
   ScrollView
} from 'react-native';
import MyCell from "./XMGCommonMyCell";
import MineMiddleView from "./XMGMineMiddleView";
import HeaderView from "./XMGMineHeaderView";
export default class Mine extends Component {
   render() {
      return (
          <ScrollView
            style={styles.scrollViewStyle}
            // contentInset={{top:-200}}
            // contentOffset={{y:200}}
          >
             <HeaderView/>
             <View style={{marginTop:20}}>
                <MyCell
                    leftIconName={require("../../assets/images/collect.png")}
                    leftTitle="我的订单"
                    rightTitle="查看全部订单"
                    rightIconName=""
                />

             </View>
             <MineMiddleView/>

             <View style={{marginTop:20}}>
                <MyCell
                    leftIconName={require("../../assets/images/draft.png")}
                    leftTitle="小马哥钱包"
                    rightTitle="账户余额：¥100"
                    rightIconName=""
                />
                <MyCell
                    leftIconName={require("../../assets/images/like.png")}
                    leftTitle="抵用券"
                    rightTitle="10张"
                    rightIconName=""
                />
             </View>
             <View style={{marginTop:20}}>
                <MyCell
                    leftIconName={require("../../assets/images/card.png")}
                    leftTitle="积分商城"
                    rightIconName=""
                />
             </View>
             <View style={{marginTop:20}}>
                <MyCell
                    leftIconName={require("../../assets/images/new_friend.png")}
                    leftTitle="今日推荐"
                    rightIconName={require("../../assets/images/me_new.png")}
                />
             </View>
             <View style={{marginTop:20}}>
                <MyCell
                    leftIconName={require("../../assets/images/pay.png")}
                    leftTitle="我要合作"
                    rightTitle="轻松开店，招财进宝"
                    rightIconName=""
                />
             </View>
          </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
   scrollViewStyle: {
      backgroundColor:"#e8e8e8"
   }
});

