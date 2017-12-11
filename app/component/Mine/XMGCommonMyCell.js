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
   Image
} from 'react-native';

export default class MyCell extends Component {
   constructor(props) {
      super(props);
      this.state = {
         leftIconName: "",
         leftTitle: "",
         rightIconName: "",
         rightTitle: ""
      }
   }

   render() {
      return (
          <TouchableOpacity activeOpacity={0.5}>
             <View style={styles.container}>
                {/*left*/}
                <View style={styles.leftViewStyle}>
                   <Image
                       source={this.props.leftIconName}
                       style={styles.leftImgStyle}
                   />
                   <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                </View>
                {/*right*/}
                <View style={styles.rightViewStyle}>
                   {this.rightSubView()}
                </View>
             </View>
          </TouchableOpacity>
      );
   }

   //右边内容
   rightSubView() {
      return (
          <View style={{flexDirection: "row", alignItems: "center"}}>
             {this.renderRightContent()}
             <Image
                 source={require("../../assets/images/icon_cell_rightarrow.png")}
                 style={{width: 8, height: 13, marginRight: 8,marginLeft:5}}
             />
          </View>
      )
   }

   renderRightContent() {
      if (this.props.rightIconName.length == 0) {//不返回图片
         return (
             <Text style={{color:"gray"}}>{this.props.rightTitle}</Text>
         )
      } else {
         // if (this.props.rightIconName==true) {
            return (
                <Image
                    source={this.props.rightIconName}
                    style={{width: 24, height: 13}}
                />
            )
         // }

      }
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "row",
      // 主轴对齐方式
      justifyContent: "space-between",
      backgroundColor: "white",
      alignItems: "center",
      height: 40,
      borderBottomColor:"#e8e8e8",
      borderBottomWidth:0.5
   },
   leftViewStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft:8
   },
   rightViewStyle: {},
   leftImgStyle: {
      width: 24,
      height: 24,
      marginRight:6,
      borderRadius:12
   },
   leftTitleStyle: {
      fontSize:16
   }
});

