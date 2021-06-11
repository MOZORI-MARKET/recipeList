import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import ListView from './components/ListView';
import DetailView from './components/DetailView';

const App = () => {
  return (
    <NativeRouter>
      <ScrollView style={scrollMain.container}>
        <Route path="/" exact component={ListView} />
        <Route path="/detail/:id" exact component={DetailView} />
      </ScrollView>
    </NativeRouter>
  );
};

const scrollMain = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
