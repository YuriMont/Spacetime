import { useState } from "react";
import { Switch, TouchableOpacity, View, Text, TextInput, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/Feather";
import * as ImagePicker from 'expo-image-picker';
import * as SecurityStore from "expo-secure-store";

import NLWLogo from "../src/assets/nlw-spacetime-logo.svg";
import { Link, useRouter } from "expo-router";
import { api } from "../src/lib/api";

export default function NewMomery() {
  const router = useRouter()
  const { bottom, top } = useSafeAreaInsets();

  const [preview, setPreview] = useState<string | null>(null)

  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  async function openImagePicker() {
    try{
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
          });

        if(result.assets[0]){
            setPreview(result.assets[0].uri)
        }
    }catch(err){
        console.log(err)
    }
  }

  async function handleCreateMemory() {
    const token = await SecurityStore.getItemAsync('token')

    let coverUrl = ''

    if(preview){
        const uploadFormData = new FormData()

        uploadFormData.append('file', {
            uri: preview,
            name: 'image.jpg',
            type: 'image/jpeg'
        } as any )

        const uploadResponse = await api.post('/upload', uploadFormData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

        coverUrl = uploadResponse.data.URL
    }

    await api.post('/memories', {
        content,
        isPublic,
        coverUrl
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    router.push('/memories')
  }

  return (
    <KeyboardAwareScrollView
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

      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
            trackColor={{ false: "#767577", true: "#fff" }}
            thumbColor={"#9b79ea"}
          />
        </View>

        <TouchableOpacity
          onPress={openImagePicker}
          className="h-32 justify-center rounded-lg border border-dashed border-gray-500 bg-black/20"
        >
          {preview ? (
            <Image source={{uri: preview}} className="h-full w-full rounded-lg object-cover"/>
          ) : (
            <View className="flex-row items-center gap-2">
            <Icon name="image" color="#FFF" />
            <Text className="font-body text-sm text-gray-200">
              Adicionar foto ou vídeo de capa
            </Text>
          </View>
          )}
        </TouchableOpacity>
      </View>
      <TextInput
        value={content}
        onChangeText={setContent}
        textAlignVertical="top"
        placeholderTextColor="#56565a"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        className="p-0 font-body text-lg text-gray-50"
        multiline
      />
      <TouchableOpacity activeOpacity={0.7} className="rounded-full bg-green-500 px-5 py-2" onPress={handleCreateMemory}>
        <Text className="font-alt text-sm uppercase text-black text-center">
            Salvar
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}
