import React from 'react';
import { Text } from 'react-native-ui-lib';
function index(props: any) {
  return (
    <>
      <Text
        style={{
          flex: props.flex ? 1 : 0,
          color: props.color ? props.color : '#000',
          fontSize: props.size,
          marginBottom: props.marginB,
          fontFamily: props.bold
            ? 'BalsamiqSans_700Bold'
            : 'BalsamiqSans_400Regular'
        }}
        numberOfLines={1}
      >
        {props.children}
      </Text>
    </>
  );
}

export default index;
