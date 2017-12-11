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
   TouchableOpacity,
   Image,
   TextInput,
   Platform,
   ScrollView
} from 'react-native';
import Dimensions from "Dimensions";
const {width, height} = Dimensions.get("window");
// import HomeDetail from "./XMGHomeDetail";
// import { StackNavigator } from "react-navigation";
import HomeMiddleView from "./XMGHomeMiddleView";
import TopView from "./XMGTopView";
import BottomView from "./XMGMiddleBottomView";
import ShopCenter from "./XMGShopCenter";
export default class Home extends Component {
   // static navigationOptions = {
   //    title: "首页",
   //    header:null
   // };
   constructor(props) {
      super(props);
   }

   render() {
      // const { navigate } = this.props.navigation;
      return (
          <View style={styles.container}>
             {/*首页的导航条*/}
             {this.renderNavBar()}
             {/*首页主要内容*/}
             <ScrollView>
                {/*头部的View*/}
                <TopView/>
                {/*中间部分*/}
                <HomeMiddleView/>
                {/*中间下半部分*/}
                <BottomView/>
                {/*购物中心*/}
                <ShopCenter/>
             </ScrollView>
          </View>
      );
   }
   //首页导航条
   renderNavBar() {
      return (
          <View style={styles.navBarStyle}>
             <TouchableOpacity
               onPress={()=>alert("点击了")}
             >
                <Text style={{color:"white"}}>上海</Text>
             </TouchableOpacity>
             <TextInput
               placeholder="请选择商家，品类，商圈"
               style={styles.topInputStyle}
             />
              <View style={{flexDirection:"row"}}>
                 <TouchableOpacity
                     onPress={()=>alert("点击了")}
                 >
                    <Image
                        source={require("../../assets/images/icon_homepage_message.png")}
                        style={styles.navRightImgStyle}
                    />
                 </TouchableOpacity>
                 <TouchableOpacity
                     onPress={()=>alert("点击了")}
                 >
                    <Image
                        source={require("../../assets/images/icon_homepage_scan.png")}
                        style={styles.navRightImgStyle}
                    />
                 </TouchableOpacity>
              </View>
          </View>
      )
   }
}
// const Route = StackNavigator({
//    Home: { screen: Home },
//    HomeDetail: { screen: HomeDetail}
// });
// module.exports = Route;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#e8e8e8',
   },
   topInputStyle: {
      width: width * 0.71,
      height: Platform.OS == "ios" ? 35: 30,
      backgroundColor:"white",
      borderRadius:18,
      paddingLeft:10
   },
   navRightImgStyle: {
      width:Platform.OS == "ios" ? 28: 24,
      height:Platform.OS == "ios" ? 28: 24
   },
   navBarStyle: {
      justifyContent:"space-around",
      height:Platform.OS == "ios" ? 64 : 44,
      backgroundColor:"rgba(256,96,0,1.0)",
      flexDirection:"row",
      alignItems:"center",
      paddingTop:15
   }
});

