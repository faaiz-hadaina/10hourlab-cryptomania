import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, Text } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';
import * as actions from '../../helpers/redux/actions';

function index() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.root);

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#fcfcfd'
        }}
      />
    );
  };
  return (
    <View
      style={{
        maxHeight: '40%'
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: '#6778c1',
          fontFamily: 'BalsamiqSans_700Bold'
        }}
      >
        My Assets
      </Text>
      <FlatList
        data={state.assetstoarray}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              dispatch(
                actions.openItem(item.coin_token, item.percentage_increase)
              )
            }
          >
            <View
              style={{
                backgroundColor: '#fff',
                padding: 15,
                height: 110,
                borderWidth: 1,
                borderColor: '#eeeeee',
                width: '100%',
                flexDirection: 'row',
                borderRadius: 20,
                justifyContent: 'space-between'
              }}
            >
              <View style={{ justifyContent: 'space-between' }}>
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
                    {item.coin_token} /
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'BalsamiqSans_400Regular'
                    }}
                  >
                    {' ' + item.unit / item.noofuploads}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#ccc',
                    fontFamily: 'BalsamiqSans_400Regular'
                  }}
                >
                  at +{item.percentage_to_sell_at || 25}%{' '}
                  {item.percentage_increase < item.percentage_to_sell_at ||
                  item.percentage_increase < 25
                    ? '(Coin cannot be sold)'
                    : '(Coin can be sold)'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'BalsamiqSans_400Regular'
                  }}
                >
                  {state.mainCurrency} {item.total_cost / item.noofuploads}
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
                      item.percentage_increase <= 0
                        ? 'md-caret-down'
                        : 'md-caret-up'
                    }
                    style={styles.changeIcon}
                    size={12}
                    color={
                      item.percentage_increase <= 0 ? '#fc0505' : '#50c50c'
                    }
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      color:
                        item.percentage_increase <= 0 ? '#fc0505' : '#50c50c',
                      fontFamily: 'BalsamiqSans_700Bold'
                    }}
                  >
                    {item.percentage_increase}%
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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

export default index;
