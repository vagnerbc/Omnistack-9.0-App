import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  AsyncStorage,
  Image,
  ScrollView,
  StyleSheet
} from "react-native";

import SpotList from "../components/SpotList";

import logo from "../../assets/logo.png";

const List = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storageTechs => {
      const techsArray = storageTechs.split(",").map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <ScrollView>
        {techs.map((tech, index) => (
          <SpotList key={index} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 30
  }
});
