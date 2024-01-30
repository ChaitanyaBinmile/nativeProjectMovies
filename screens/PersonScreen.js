import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../theme";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ios } from "./HomeScreen";
import { height, width } from "../components/trendingMovies";
import MovieList from "../components/movieList";
import Loading from "../components/loading";
import {
  fallbackPersonImage,
  fetchPersonDetails,
  fetchPersonMovies,
  image342,
} from "../api/moviedb";

export default function PersonScreen() {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  const handleBack = (item) => {
    navigation.goBack();
  };

  const [personMovies, setPersonMovies] = useState([]);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(false);
  const verticalMargin = ios ? "" : "my-3";
  useEffect(() => {
    setLoading(true);
    // console.log('person', item);
    getPersonDetails(item.id);
    getPersonMovies(item.id);
  }, [item]);

  const getPersonDetails = async (id) => {
    const data = await fetchPersonDetails(id);
    // console.log(data)
    if(data)setPerson(data);
    setLoading(false);
  };
  const getPersonMovies = async (id) => {
    const data = await fetchPersonMovies(id);
    // console.log(data)
    if(data && data.cast) setPersonMovies(data.cast);
    // console.log(personMovies)
  };

  return (
    <ScrollView className="flex-1 bg-neutral-900 pb-5">
      <SafeAreaView
        className={
          "z-20 w-full flex-row justify-between items-center p-5 h-fit" +
          verticalMargin
        }
      >
        <TouchableOpacity
          className=" rounded-xl p-1  mx-4"
          onPress={() => handleBack()}
          style={styles.background}
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
      {/* person view */}
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            className="flex-row justify-center shadow-lg shadow-slate-400"
            style={{
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
              elevation: 0.5,
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
              <Image
                style={{ height: height * 0.43, width: width * 0.74 }}
                // source={require("../assets/cast.jpg")}
                source={{
                  uri: image342(person?.profile_path) || fallbackPersonImage,
                }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-3xl text-white font-bold  text-center">
              {person?.name}
            </Text>
            <Text className="text-base text-neutral-500 text-center">
              {person?.place_of_birth}
            </Text>
          </View>
          <View className="mx-3 mt-6 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold px-2 items-center">
                Gender
              </Text>
              <Text className="text-neutral-300 text-sm">
                {person?.gender == 1 ? "Female" : "Male"}
              </Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold px-2 items-center">
                Birthday
              </Text>
              <Text className="text-neutral-300 text-sm">
                {person?.birthday}
              </Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold px-2 items-center">
                Known for
              </Text>
              <Text className="text-neutral-300 text-sm">
                {person?.known_for_department}
              </Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold items-center">
                Popularity
              </Text>
              <Text className="text-neutral-300 text-sm">
                {person?.popularity?.toFixed(2)}%
              </Text>
            </View>
          </View>
          <View className="my-2 mx-4 space-y-2">
            <Text className="text-white text-lg"></Text>
            <Text className="text-neutral-400 tracking-wind">
              {person?.biography || 'N/A'}
            </Text>
          </View>
          <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
}
