import React from 'react';
import { Text } from 'react-native-ui-lib';
function index(props: any) {
  return (
    <>
      <Text
        style={{
          color: props.color ? props.color : '#000',
          fontSize: props.size,
          marginBottom: props.marginB,
          fontFamily: props.bold
            ? 'BalsamiqSans_700Bold'
            : 'BalsamiqSans_400Regular'
        }}
      >
        {props.children}
      </Text>
    </>
  );
}

export default index;
