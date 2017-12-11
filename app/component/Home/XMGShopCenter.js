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
   ScrollView,
   TouchableOpacity,
} from 'react-native';
import BottomCommonCell from "./XMGBottomCommonCell";
const Home_D5 = {
   "count": 4,
   "data": [
      {
         "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/4374715",
         "promotionIcon": "",
         "name": "正佳广场",
         "img": require("../../assets/images/shop0.png"),
         "showtext": {
            "text": "离我最近",
            "count": 84,
            "color": ""
         },
         "longitude": 113.327086,
         "latitude": 23.131909,
         "smid": 4374715,
         "promotionText": "送福利 商品低至1.5折"
      },
      {
         "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/50606658",
         "promotionIcon": "",
         "name": "白云万达广场",
         "img": require("../../assets/images/shop1.png"),
         "showtext": {
            "text": "55家优惠",
            "count": 55,
            "color": ""
         },
         "longitude": 113.26605,
         "latitude": 23.17151,
         "smid": 50606658,
         "promotionText": "春来花开 满100最高减60"
      },
      {
         "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/75813274",
         "promotionIcon": "",
         "name": "凯德广场●云尚",
         "img": require("../../assets/images/shop2.png"),
         "showtext": {
            "text": "61家优惠",
            "count": 61,
            "color": ""
         },
         "longitude": 113.269668,
         "latitude": 23.1818,
         "smid": 75813274,
         "promotionText": "新春送福利 购物满额有好礼"
      },
      {
         "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/41692498",
         "promotionIcon": "",
         "name": "来又来广场",
         "img": require("../../assets/images/shop3.png"),
         "showtext": {
            "text": "48家优惠",
            "count": 48,
            "color": ""
         },
         "longitude": 113.232008,
         "latitude": 23.397758,
         "smid": 41692498,
         "promotionText": "48家品牌优惠中：瑞可爷爷的店每满30减5，全单9折（买单立享）"
      }
   ],
   "tips": "全部4家",
   "jumpto": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smList?sid=@geodist:asc"
}
export default class ShopCenter extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
          <View style={styles.container}>
             {/*上部分*/}
             <BottomCommonCell
                 leftIcon={require("../../assets/images/gw.png")}
                 leftTitle="购物中心"
                 rightTitle={Home_D5.tips}
             />
             {/*下部分*/}
             <ScrollView
                 style={styles.scrollViewStyle}
                 horizontal={true}//横向
                 showsHorizontalScrollIndicator={false}
             >
                {this.renderAllItem()}
             </ScrollView>
          </View>
      );
   }

   renderAllItem() {
      const itemArr = [];
      const shopData = Home_D5.data;
      for (let i = 0; i < shopData.length; i++) {
         const data = shopData[i]
         itemArr.push(
             <ShopCenterItem
                 key={i}
                 shopImage={data.img}
                 shopSale={data.showtext.text}
                 shopName={data.name}
             />
         )
      }
      return itemArr;
   }
}
class ShopCenterItem extends Component {
   render() {
      return (
          <TouchableOpacity>
             <View style={styles.centerViewStyle}>
                <Image
                    source={this.props.shopImage}
                    style={styles.imageStyle}
                />
                <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
             </View>
          </TouchableOpacity>
      )
   }
}
const styles = StyleSheet.create({
   container: {
      marginTop: 15,
   },
   scrollViewStyle:{
      margin:8,
   },
   centerViewStyle:{
      backgroundColor:"white",
      padding:10,
   },
   imageStyle: {
      width: 120,
      height: 100,
      borderRadius:8,
   },
   shopSaleStyle: {
      position:"absolute",
      left:0,
      bottom:30,
      backgroundColor:"orange",
      color:"white",
      padding:3
   },
   shopNameStyle: {
      textAlign:"center",
      marginTop:5,
   }
});

