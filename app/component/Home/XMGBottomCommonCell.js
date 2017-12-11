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

export default class BottomCommonCell extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
          <TouchableOpacity>
             <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                  <Image
                      source={this.props.leftIcon}
                      style={{width:23,height:23,marginRight:5,}}
                  />
                   <Text style={{fontSize:16}}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                   <Text style={{color:"gray"}}>{this.props.rightTitle}</Text>
                   <Image
                       source={require("../../assets/images/icon_cell_rightarrow.png")}
                       style={{width:8,height:13,marginRight:8,marginLeft:5,}}
                   />
                </View>
             </View>
          </TouchableOpacity>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      height:44,
      flexDirection:"row",
      backgroundColor:"white",
      alignItems:"center",
      justifyContent:"space-between",
      borderBottomColor:"#e8e8e8",
      borderBottomWidth:0.5,
   },
   leftViewStyle: {
      flexDirection:"row",
      alignItems:"center",
      marginLeft:8,
   },
   rightViewStyle: {
      flexDirection:"row",
      alignItems:"center",
   }
});

