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
   ListView,
   TouchableOpacity
} from 'react-native';
import Dimensions from "Dimensions";
const { width } = Dimensions.get("window");
export default class TopListView extends Component {
   constructor(props) {
      super(props);
      // const dataArr = [];
      //创建数据源
      const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
      this.state = {
         dataSource: ds.cloneWithRows(this.props.dataArr)
      }
   }

   render() {
      return (
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              contentContainerStyle={styles.contentViewStyle}
              scrollEnabled={false}
          />
      );
   }

   renderRow(rowData) {
      return (
          <TouchableOpacity>
             <View style={styles.cellStyle}>
                <Image source={rowData.image} style={{width:52,height:52}}/>
                <Text style={styles.titleStyle}>{rowData.title}</Text>
             </View>
          </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   contentViewStyle: {
      flexWrap:"wrap",//多个cell同一行显示
      flexDirection:"row",
      width:width
   },
   cellStyle: {
      width:72,
      height:72,
      justifyContent:"center",
      alignItems:"center",
      marginTop:10,
      marginLeft:(width-72*5)/(5+1),
   },
   titleStyle: {
      fontSize:14,
      color:"gray"
   }
});

