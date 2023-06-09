import { styled } from "nativewind";
import { ImageBackground } from "react-native";
import { SplashScreen, Stack } from "expo-router";


import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

export default function LayoutMemories() {


  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });


  if (!hasLoadedFonts) {
    return <SplashScreen />;
  }

  return (
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          animation: "fade",
        }}
      >
      </Stack>
  );
}
