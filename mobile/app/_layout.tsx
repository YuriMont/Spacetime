import { styled } from "nativewind";
import { ImageBackground } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import * as SecurityStore from "expo-secure-store";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

import blurBg from "../src/assets/bg-blur.png";
import Stripes from "../src/assets/stripes.svg";
import { StatusBar } from "expo-status-bar";

const StyledStripes = styled(Stripes);
export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    null | boolean
  >(null);

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  useEffect(() => {
    SecurityStore.getItemAsync("token").then((token) => {
      setIsUserAuthenticated(!!token);
    });
  }, []);

  if (!hasLoadedFonts) {
    return <SplashScreen />;
  }

  return (
    <ImageBackground
      source={blurBg}
      imageStyle={{ position: "absolute", left: "-100%" }}
      className="relative flex-1 bg-gray-900"
    >
      <StyledStripes className="absolute left-2" />
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
    </ImageBackground>
  );
}
