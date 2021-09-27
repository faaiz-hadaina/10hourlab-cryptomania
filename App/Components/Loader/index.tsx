import React from 'react';
import { StyleSheet, View, Modal, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
const Loader = (props: any) => {
  const loading = useSelector((state: any) => state.root.loading);

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator />
          <ActivityIndicator size="large" color="#1b81d9" />
          <Text style={{ marginBottom: 15 }}>Loading ...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;
