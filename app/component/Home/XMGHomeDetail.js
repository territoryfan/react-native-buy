/**
 * territory create
 * 愁眉弯唇皆是为你从此眉间心上再无一人
 */
import React, {Component} from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View
} from 'react-native';
export default class HomeDetail extends Component {
   static navigationOptions = ({navigation})=>({
      title:`二级${navigation.state.params.user}`
   });
   constructor(props) {
      super(props);
   }

   render() {
      const { params } = this.props.navigation.state
      return (
          <View style={styles.container}>
             <Text style={styles.welcome}>
                首页二级页{params.user}
             </Text>
          </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "red",
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   }
});

