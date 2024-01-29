import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

export default function MovieScreen() {
  const navigation = useNavigation();

  const { params: item } = useRoute();
  // useEffect(() => {
  //   // call movie details api
  // }, [item]);
  const handleBack = () => {
    navigation.navigate("Home")
  }
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
          <TouchableOpacity className=" rounded-xl p-1" onPress={handleBack}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
            <Text className="text-white">dsdlfasablabooble</Text>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}
