import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowRightCircleIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import { Formik } from "formik";
import { SignInSchema } from "../validation";
import { setUser } from "../app/features/login/loginSlice";
import { useAppDispatch } from "../app/hook";
import { theme } from "../theme";

export default function LoginScreen() {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ email: "", pass: "" }}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        console.log(values);
        dispatch(setUser("user"));
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        isSubmitting,
      }) => (
        <SafeAreaView className="bg-neutral-900 flex-1 justify-center items-center">
          <View
            style={{
              borderColor:
                touched.email && errors.email ? "#ec2853ad" : theme.background,
            }}
            className="mx-4 mb-3 flex-row justify-betweeen items-center border border-neutral-500 rounded-full p-2"
          >
            <TextInput
              //   onChangeText={handleTextDebounce}
              placeholder="Username"
              placeholderTextColor={"lightgray"}
              className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
          </View>
          {errors.email && touched.email ? (
            <Text
              className="self-start ml-6 mb-2"
              style={{ color: "#ec2853ad", padding: 0 }}
            >
              {errors.email}
            </Text>
          ) : null}
          <View
            style={{
              borderColor:
                touched.pass && errors.pass ? "#ec2853ad" : theme.background,
            }}
            className="mx-4 mb-3 flex-row justify-betweeen items-center border border-neutral-500 rounded-full p-2"
          >
            <TextInput
              //   onChangeText={handleTextDebounce}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={"lightgray"}
              className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
              onChangeText={handleChange("pass")}
              onBlur={handleBlur("pass")}
              value={values.pass}
            />
          </View>
          {errors.pass && touched.pass ? (
            <Text
              className="self-start ml-6 mb-2"
              style={{ color: "#ec2853ad", padding: 0 }}
            >
              {errors.pass}
            </Text>
          ) : null}
          <View
            className="mx-4 mb-3 mt-8 flex-row justify-betweeen items-center border border-neutral-500 rounded-full"
            style={{
              backgroundColor:
                isValid && !isSubmitting ? theme.background : "#ff0000",
            }}
          >
            <TouchableOpacity
              className="rounded-full p-3 m-1 bg-neutral-500"
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
            >
              <ArrowRightCircleIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}
