import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';
import Text from '@cryptomania/Components/Text';
import * as actions from '../../helpers/redux/actions';
function Index() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.root);
  const openedCurrencies = state.openedCurrencies || [];
  return (
    <View style={styles.container}>
      <Text size={22} bold color={'#6778c1'} marginB={10}>
        My Currencies
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: 'row'
        }}
      >
        {Object.keys(openedCurrencies)?.map((item: string, index: number) => {
          return (
            <TouchableOpacity
              onPress={() => dispatch(actions.openCurrency(item))}
              key={index}
            >
              <View style={styles.cardcontainer}>
                <View style={styles.cardbody}>
                  <Image
                    style={styles.asseticon}
                    source={require('../../../assets/btc.png')}
                  />
                  <Text size={22} bold>
                    {state.openedCoin} /
                  </Text>
                  <Text size={20}>{' ' + item}</Text>
                </View>
                <Text size={15} color={'#ccc'} bold>
                  Portfolio
                </Text>
                <View style={styles.titlecontainer}>
                  <Text size={18} flex bold>
                    {item +
                      ' ' +
                      openedCurrencies[item]
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                  <View style={styles.changecontainer}>
                    <Ionicons
                      name={
                        state.percentage_increase <= 0
                          ? 'md-caret-down'
                          : 'md-caret-up'
                      }
                      style={styles.changeIcon}
                      size={12}
                      color={
                        state.percentage_increase <= 0 ? '#fc0505' : '#50c50c'
                      }
                    />
                    <Text
                      size={15}
                      color={
                        state.percentage_increase <= 0 ? '#fc0505' : '#50c50c'
                      }
                      bold
                    >
                      {state.percentage_increase}%
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20
  },

  changeIcon: {
    marginRight: 5
  },
  asseticon: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'stretch'
  },
  cardcontainer: {
    backgroundColor: '#fff',
    padding: 15,
    height: 130,
    width: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#eeeeee',
    marginRight: 15,
    justifyContent: 'space-between'
  },
  cardbody: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  changecontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Index;
