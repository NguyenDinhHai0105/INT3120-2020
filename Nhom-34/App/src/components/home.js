import React, { Component } from 'react';
import { Styles } from './src/common';
import {View,Text, ScrollView} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={Styles.container}>

                    <View style={Styles.element}>
          <View style={Styles.item}>
            <View style={Styles.itemDich}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemKetban}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemMuasam}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemSuckhoe}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemDienthoai}>

            </View>
          </View>
        </View>

        <View style={Styles.element}>
        <View style={Styles.item}>
            <View style={Styles.itemChaohoi}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemThoigian}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemGiaitri}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemThoitiet}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemGiaotiep}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemNhao}>

            </View>
          </View>
        </View>

        <View style={Styles.element}>
        <View style={Styles.item}>
            <View style={Styles.itemThuongdung}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemDulich}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemAnuong}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemVieclam}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemDiadiem}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemYeuthich}>

            </View>
          </View>
        </View>

      </View>
    </ScrollView>
        );
    }
}
