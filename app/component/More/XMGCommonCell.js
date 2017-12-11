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
   Switch
} from 'react-native';

export default class CommonCell extends Component {
   constructor(props) {
      super(props);
      this.state = {
         // title: "",
         isSwitch: false, //是否展示开关
         isOn: false,
         // rightTitle:"",
      }
   }
   render() {
      return (
          <TouchableOpacity style={{flex:1}}>
             <View style={styles.container}>
                <Text style={{marginLeft:8}}>{this.props.title}</Text>
                {this.renderRightView()}
             </View>
          </TouchableOpacity>
      );
   }
   //cell右边显示的内容
   renderRightView() {
      //判断
      if(this.props.isSwitch){
         return (
             <Switch
                 value={this.state.isOn==true}
                 style={{marginRight:8}}
                 onValueChange={()=>{
                    this.setState({
                       isOn: !this.state.isOn
                    })
                 }}
             />
         )
      }else{
         return (
             <View style={{flexDirection:"row",alignItems:"center"}}>
                {this.rightTitle()}
                <Image
                    source={require("../../assets/images/icon_cell_rightarrow.png")}
                    style={{width:8,height:13,marginRight:8}}
                />
             </View>
         )
      }

   }
   rightTitle(){
      if(this.props.rightTitle && this.props.rightTitle.length>0){
         return (
             <Text style={{color:"gray",marginRight:3}}>{this.props.rightTitle}</Text>
         )
      }
   }
}

const styles = StyleSheet.create({
   container: {
      flex:1,
      height:44,
      backgroundColor:"white",
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:"center",
      borderBottomColor:"#ddd",
      borderBottomWidth:0.5,
   }
});

