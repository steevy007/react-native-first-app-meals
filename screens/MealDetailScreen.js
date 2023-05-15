import { View, Text, StyleSheet, Image, ScrollView ,Button } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route , navigation}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler=()=>{
    console.log('Presse !')
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=> <IconButton icon={"star"} color={"white"} onPress={ headerButtonPressHandler} />
    })
  },[navigation,headerButtonPressHandler])

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
      />
      <View style={styles.outerContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredient</Subtitle>
          <List list={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List list={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
const styles = StyleSheet.create({
  root: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  outerContainer: {
    alignItems: "center",
  },
});
