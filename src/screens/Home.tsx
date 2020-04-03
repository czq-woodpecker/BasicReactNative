import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface Props {
  navigation: any;
}

export class Home extends React.Component<Props> {
  componentDidMount(): void {
    console.log('Home componentDidMount');
  }

  componentWillUnmount(): void {
    console.log('Home componentWillUnmount');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title={'User List'}
            onPress={() => this.props.navigation.navigate('UserList')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: 100,
  },
});
