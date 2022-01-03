import React from 'react';
import {Button, ScrollView} from "react-native";
import CardTest from "../components/cards/CardTest";

export default function Home({navigation}) {
  return (
      <>
          <ScrollView style={{flex: 1}}>
              <CardTest/>
          </ScrollView>
          <Button title="Go to Details" onPress={() => navigation.navigate('test')}/>
      </>
  );
}
