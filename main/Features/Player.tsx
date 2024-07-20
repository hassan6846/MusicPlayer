import { View, Text} from 'react-native'
import React, { useEffect } from 'react'
//lib
import Video, {VideoRef} from "react-native-video"
import { useRoute } from "@react-navigation/native";

//params
const Player = () => {
  const route = useRoute();

  const { videoUri } = route.params as { videoUri: any }; // Type assertion to specify the shape of route.params

  useEffect(()=>{
   console.log(videoUri)
  },[])
  return (
    <View>
  
    </View>
  )
}

export default Player