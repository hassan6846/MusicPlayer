import { View, Text,Pressable } from 'react-native'
import React, { useEffect, useState } from "react";
//render all video files from media library
// redirect to video player by passing uri of video only 
//make thumb of video..
//pass param and use through use route..

import * as MediaLibrary from "expo-media-library";
import * as VideoThumbnails from 'expo-video-thumbnails';

const Video = () => {
  const [VideoFiles, SetVideoFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

    //fetch mp4 
    const FetchVideoFiles = async () => {
      try {
        const mediaFiles = await MediaLibrary.getAssetsAsync({
          mediaType: ["video"],

          sortBy: ["creationTime"],
        });
        SetVideoFiles(mediaFiles.assets);
      } catch (error) {
        console.error("Error fetching audio files:", error);
      } finally {
        setLoading(false);
      }
    };
//on component mount
  useEffect(()=>{

    FetchVideoFiles();
    console.log(VideoFiles)
  },[])
  return (
    <View>
      <Text>Video</Text>
    </View>
  )
}

export default Video