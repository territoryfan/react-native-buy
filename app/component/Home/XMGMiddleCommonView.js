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
   TouchableOpacity,
} from 'react-native';
import Dimensions from "Dimensions";
const {width} = Dimensions.get("window");
export default class CommonView extends Component {
   render() {
      const title = this.props.title;
      const subTitle = this.props.subTitle;
      const rightImage = this.props.rightImage;
      const titleColor = this.props.titleColor;
      // console.log(rightData);
      return (
          <TouchableOpacity>
             <View style={styles.container}>
                {/*左边*/}
                <View>
                   <Text style={[{color: titleColor}, styles.titleStyle]}>{title}</Text>
                   <Text style={styles.subTitleStyle}>{subTitle}</Text>
                </View>
                {/*右边*/}
                <Image
                    source={rightImage}
                    style={{width: 64, height: 43,resizeMode:"contain"}}
                />
             </View>
          </TouchableOpacity>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      width: width * 0.5 - 1,
      height: 60,
      backgroundColor: "white",
      marginBottom:1,
      marginRight:1,
   },
   titleStyle: {
      fontSize: 18,
      fontWeight: "bold",
   },
   subTitleStyle: {
      color: "gray",
   }
});

