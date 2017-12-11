/**
 * territory create
 * 愁眉弯唇皆是为你从此眉间心上再无一人
 */
import React, {Component} from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Image,
   Platform //判断系统
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import Home from "../Home/XMGHome";
import Shop from "../Shop/XMGShop";
import Mine from "../Mine/XMGMine";
import More from "../More/XMGMore";
export default class Main extends Component {

   constructor(props) {
      super(props);
      this.state = {
         selectedTab: "home"
      }
   }

   render() {
      return (
          <TabNavigator>
             {/*首页*/}
             <TabNavigator.Item
                 title="首页"
                 selected={this.state.selectedTab === "home"}
                 onPress={() => {
                    this.setState({selectedTab: "home"})
                 }}
                 renderIcon={() => <Image source={require("../../assets/images/icon_tabbar_homepage.png")}
                                          style={styles.iconStyle}/>}
                 renderSelectedIcon={() => <Image
                     source={require("../../assets/images/icon_tabbar_homepage_selected.png")}
                     style={styles.iconStyle}/>}
             >
                <Home/>
             </TabNavigator.Item>
             {/*商家*/}
             <TabNavigator.Item
                 title="商家"
                 selected={this.state.selectedTab === "shop"}
                 onPress={() => {
                    this.setState({selectedTab: "shop"})
                 }}
                 renderIcon={() => <Image source={require("../../assets/images/icon_tabbar_merchant_normal.png")}
                                          style={styles.iconStyle}/>}
                 renderSelectedIcon={() => <Image
                     source={require("../../assets/images/icon_tabbar_merchant_selected.png")}
                     style={styles.iconStyle}/>}
             >
                <Shop/>
             </TabNavigator.Item>
             {/*我的*/}
             <TabNavigator.Item
                 title="我的"
                 selected={this.state.selectedTab === "mine"}
                 onPress={() => {
                    this.setState({selectedTab: "mine"})
                 }}
                 renderIcon={() => <Image source={require("../../assets/images/icon_tabbar_mine.png")}
                                          style={styles.iconStyle}/>}
                 renderSelectedIcon={() => <Image source={require("../../assets/images/icon_tabbar_mine_selected.png")}
                                                  style={styles.iconStyle}/>}
             >
                <Mine/>
             </TabNavigator.Item>
             {/*更多*/}
             <TabNavigator.Item
                 title="更多"
                 selected={this.state.selectedTab === "more"}
                 onPress={() => {
                    this.setState({selectedTab: "more"})
                 }}
                 renderIcon={() => <Image source={require("../../assets/images/icon_tabbar_misc.png")}
                                          style={styles.iconStyle}/>}
                 renderSelectedIcon={() => <Image source={require("../../assets/images/icon_tabbar_misc_selected.png")}
                                                  style={styles.iconStyle}/>}
             >
                <More/>
             </TabNavigator.Item>
          </TabNavigator>
      );
   }
}
const styles = StyleSheet.create({
   iconStyle: {
      width: Platform.OS === "ios" ? 30 : 25,
      height: Platform.OS === "ios" ? 30 : 25
   }
});

