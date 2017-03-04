import React, {Component} from "react";
import{
  View, Text, StyleSheet,
} from "react-native";

export default class HoaiSon extends React.Component {
  render(){
    return (
      <View style={styles.title}>
        <Text>
        {this.props.tenKhachHang}
        </Text>
      </View>
    );
  }
}

HoaiSon.proType = {
  tenKhachHang:React.PropTypes.string,
}

var styles = StyleSheet.create({
  title:{
    width: 200,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
