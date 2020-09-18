/* eslint-disable no-undef */
import React from 'react';
import { Text, Slider, View, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

export default function UdaciSlider({ max, unit, step, value, onChange }) {
  return (
    <View style={styles.row}>
      <Slider
        style={{ flex: 1 }}
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View style={styles.metricCount}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}> {value} </Text> 
        <Text style={{ fontSize: 18, color: gray }}> {unit} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',
  },
  metricCount: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  }
})