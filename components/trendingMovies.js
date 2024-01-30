import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

export var { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  return (
    <View className="mb-8">
      <Text className=" text-white text-xl mx-4 mb-4">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
        loop={true}
      />
    </View>
  );
}

const MovieCard = ({ item }) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  return (
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
      <Image
        source={require("../assets/Movie2.jpg")}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
