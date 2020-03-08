import * as React from 'react';
import {Text, View} from 'react-native';

interface Props {
  navigation: any;
}

export class UserList extends React.Component<Props> {
  componentDidMount(): void {
    console.log('UserList componentDidMount');
  }

  componentWillUnmount(): void {
    console.log('UserList componentWillUnmount');
  }

  render() {
    return (
      <View>
        <Text>User List</Text>
      </View>
    );
  }
}
