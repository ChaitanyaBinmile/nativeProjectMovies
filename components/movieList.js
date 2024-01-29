import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "./trendingMovies";

export default function MovieList({ title, data }) {
  const navigation = useNavigation();

  let movieName = "Ant-Man and the Wasp: Quantamania";
  const handleClick = (item) =>{
    navigation.navigate('Movie',item);
}
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className=" text-white text-xl ">{title}</Text>
        <TouchableOpacity>
          <Text style={styles.text}>See All </Text>
        </TouchableOpacity>
      </View>
      {/* movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={handleClick(item)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={require("../assets/Movie3.jpg")}
                  className="rounded-3xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                ></Image>
                <Text className="text-neutral-300 ml-1">{movieName.length>14? movieName.slice(0,14)+'...':movieName}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
