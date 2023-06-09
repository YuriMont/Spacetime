import { SplashScreen, useSearchParams } from "expo-router";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/Feather";
import NLWLogo from "../../src/assets/nlw-spacetime-logo.svg";
import { Link } from "expo-router";
import { api } from "../../src/lib/api";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

dayjs.locale(ptBr);
interface Memory {
  coverUrl: string;
  content: string;
  createdAt: string;
  id: string;
}

export default function Memory() {
  const { bottom, top } = useSafeAreaInsets();
  const [memory, setMemory] = useState<Memory | null>(null);
  const { id } = useSearchParams();

  async function loadMemory() {
    const token = await SecureStore.getItemAsync("token");

    const response = await api.get(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setMemory(response.data);
  }

  useEffect(() => {
    loadMemory()
  }, [])

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <NLWLogo />
        <Link href="memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#FFF" />
          </TouchableOpacity>
        </Link>
      </View>
      <View className="mt-6 space-y-10">
        <View className="space-y-4">
          <View className="flex-row items-center gap-2">
            <View className="h-px w-5 bg-gray-50" />
            <Text className="font-body text-xs text-gray-100">
              {dayjs(memory?.createdAt).format("D[ de ]MMMM[, ]YYYY")}
            </Text>
          </View>
          <View className="space-y-4 px-2">
            <Image
              source={{ uri: memory?.coverUrl }}
              className="aspect-video w-full rounded-lg"
              alt=""
            />
            <Text className="font-body text-base leading-relaxed text-gray-100">
              {memory?.content}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
