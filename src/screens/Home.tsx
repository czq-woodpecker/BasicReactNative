import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface Props {
  navigation: any;
}

export class Home extends React.Component<Props> {
  componentDidMount(): void {
    console.warn('Home componentDidMount');
  }

  componentWillUnmount(): void {
    console.warn('Home componentWillUnmount');
  }

  render() {
    return (
      <View>
        <Button
          title={'User List'}
          onPress={() => this.props.navigation.navigate('UserList')}
        />
      </View>
    );
  }
}
