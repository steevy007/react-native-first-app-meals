import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { useNavigation } from "@react-navigation/native";
const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = (itemdata) => {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview",{
        categoryId:itemdata.item.id
      })
    };

    return (
      <CategoryGridTitle
        title={itemdata.item.title}
        color={itemdata.item.color}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem.bind()}
      numColumns={1}
    />
  );
};

export default CategoriesScreen;
