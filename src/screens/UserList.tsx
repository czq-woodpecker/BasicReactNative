import * as React from 'react';
import {Text, View} from 'react-native';

interface Props {
  navigation: any;
}

export class UserList extends React.Component<Props> {
  componentDidMount(): void {
    console.warn('UserList componentDidMount');
  }

  componentWillUnmount(): void {
    console.warn('UserList componentWillUnmount');
  }

  render() {
    return (
      <View>
        <Text>User List</Text>
      </View>
    );
  }
}
