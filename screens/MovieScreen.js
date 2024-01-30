import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

import { styles, theme } from "../theme";
import { ios } from "./HomeScreen";
import { height, width } from "../components/trendingMovies";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  const [cast, setCast] = useState([1,2,3,4,5]);
  const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])

  // useEffect(() => {
  //   // call movie details api
  // }, [item]);
  const navigation = useNavigation();

  const handleBack = (item) => {
    navigation.goBack();
  };

  const topMargin = ios ? {} : { marginTop: 40 };

  let movieName = "Ant-Man and the Wasp: Quantamania";

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* back button and movie poster */}
      <View className={"w-full "} style={{ topMargin }}>
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
          <TouchableOpacity
            className=" rounded-xl p-1"
            onPress={() => handleBack()}
            style={styles.background}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon
              size="35"
              color={isFavourite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/Movie2.jpg")}
            style={{
              width,
              height: height * 0.55,
            }}
            className="rounded-3xl"
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width, height: height * 0.3 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* movie details */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        {/* status, release, runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released • 2020 • 170 min
        </Text>

        {/* genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action • Thrill • Comedy
          </Text>
        </View>
        {/* description */}
        <Text className="text-neutral-400 mx-1 font-semibold text-base text-center">
          Very good movie! I watched it four times, not coz it was
          captivating, but due to my slow brain. On the fifth try, I grasped the
          entire story. That's all I can write without leaking any spoilers. So,
          for the remaining lines, I'm jotting down random stuff. Whether you
          guys watch it or not, I don't give two dams, bui...
        </Text>
      </View>
      {/* cast */}
      <Cast cast={cast} navigation={navigation}/>
      {/* similar movies */}
      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>
    </ScrollView>
  );
}
