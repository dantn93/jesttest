// Intro.js
import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Home from './Home';
import People from './People';

const MainApp = createStackNavigator({
  Home: {
           screen: mapNavigationStateParamsToProps(Home)
  },
 SearchResults: {
           screen: mapNavigationStateParamsToProps(People)
  },
});

function mapNavigationStateParamsToProps(SomeComponent) {
    return class extends Component {
           static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
           render() {
                  return <SomeComponent {...this.props} />
           }
    }
};

export default class Stack extends React.Component {
     render() {
         return (
             <View style={{ flex: 1 }}>
               <StatusBar
                    barStyle="light-content"
                    backgroundColor={'#202930'} />
               <MainApp />
            </View>
     );
}
}