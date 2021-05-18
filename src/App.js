import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import TopBar from './components/TopBar';
import ListView from './components/ListView';
import DetailView from './components/DetailView';

const App = () => {
  return (
    <NativeRouter>
      <ScrollView style={scrollMain.container}>
        <TopBar />
        <Route path="/" exact component={ListView} />
        <Route path="/detail/:id" component={DetailView} />
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
