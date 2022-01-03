import React from 'react';
import {ScrollView} from "react-native";
import CardTest from "../components/cards/CardTest";

export default function Home2() {
  return (
      <ScrollView style={{flex: 1}}>
          <CardTest/>
      </ScrollView>
  );
}
