import React, {Component} from 'react';

import {
  View,
} from 'react-native';


export class RkTab extends Component {

  static name = 'tab';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>{this.props.children}</View>
    );
  }



}
