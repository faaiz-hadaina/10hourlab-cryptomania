import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';
import Text from '@cryptomania/Components/Text';

function BalanceCard() {
  const state = useSelector((state: any) => state.root);
  return (
    <>
      {state.selectedAmount ? (
        <ImageBackground
          imageStyle={{ borderRadius: 25 }}
          style={styles.container}
          source={require('../../../assets/cardbg.png')}
        >
          <View>
            <Text color={'#fff'} size={14}>
              Balance
            </Text>
            <Text color={'#fff'} size={30} bold marginB={30}>
              {state.selectedCurrency + ' ' + state.selectedAmount.toFixed(2)}
            </Text>
          </View>
          <View>
            <Text color={'#fff'} size={14}>
              Current Coin
            </Text>
            <View style={styles.changecontainer}>
              <Text color={'#fff'} bold size={25}>
                {state.openedCoin}
              </Text>
              <View style={styles.textchange}>
                <Ionicons
                  name={
                    state.percentage_increase <= 0
                      ? 'md-caret-down'
                      : 'md-caret-up'
                  }
                  style={styles.changeIcon}
                  size={12}
                  color={state.percentage_increase <= 0 ? '#a73a3a' : '#50c50c'}
                />
                <Text
                  size={15}
                  color={state.percentage_increase <= 0 ? '#a73a3a' : '#50c50c'}
                  bold
                >
                  {state.percentage_increase}%
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      ) : (
        <Text>Please select the file to upload</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  scrollcontainer: {
    maxHeight: '33%',
    minHeight: '33%'
  },
  changecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textchange: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 4,
    marginRight: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  changeIcon: {
    marginRight: 5
  }
});

export default BalanceCard;
