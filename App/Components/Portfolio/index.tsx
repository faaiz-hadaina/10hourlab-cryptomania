import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, Text } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';
import * as actions from '../../helpers/redux/actions';
function Index() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.root);
  const openedCurrencies = state.openedCurrencies || [];
  return (
    <View style={{ marginTop: 10, marginBottom: 20 }}>
      <Text
        style={{
          fontSize: 22,
          fontFamily: 'BalsamiqSans_700Bold',
          color: '#6778c1',
          marginBottom: 10
        }}
      >
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
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 15,
                  height: 130,
                  width: 200,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginRight: 15,
                  justifyContent: 'space-between'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 10,
                      resizeMode: 'stretch'
                    }}
                    source={require('../../../assets/btc.png')}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      fontFamily: 'BalsamiqSans_700Bold'
                    }}
                  >
                    {state.openedCoin} /
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'BalsamiqSans_400Regular'
                    }}
                  >
                    {' ' + item}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#ccc',
                    fontFamily: 'BalsamiqSans_700Bold'
                  }}
                >
                  Portfolio
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 18,
                      flex: 1,
                      fontFamily: 'BalsamiqSans_700Bold'
                    }}
                  >
                    {item + ' ' + openedCurrencies[item].toFixed(2)}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
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
                      style={{
                        fontSize: 15,
                        color:
                          state.percentage_increase <= 0
                            ? '#fc0505'
                            : '#50c50c',
                        fontFamily: 'BalsamiqSans_700Bold'
                      }}
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
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  changeIcon: {
    marginRight: 5
  }
});

export default Index;
