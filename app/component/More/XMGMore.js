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
import CommonCell from "./XMGCommonCell";
export default class More extends Component {
   render() {
      return (
          <View style={styles.container}>
             <ScrollView>
                <View style={{flexDirection:"row",marginTop:20}}>
                   <CommonCell title="扫一扫"/>
                </View>
                <View style={{marginTop:20}}>
                   <CommonCell title="省流量模式" isSwitch={true}/>
                   <CommonCell title="信息提醒"/>
                   <CommonCell title="邀请好友"/>
                   <CommonCell title="清空缓存" rightTitle="1.99M"/>
                </View>
                <View style={{marginTop:20}}>
                   <CommonCell title="意见反馈"/>
                   <CommonCell title="问卷调查"/>
                   <CommonCell title="支付帮助"/>
                   <CommonCell title="网络诊断"/>
                </View>
                <View style={{marginTop:20}}>
                   <CommonCell title="精品应用"/>
                </View>
             </ScrollView>
          </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#e8e8e8',
   }
});

