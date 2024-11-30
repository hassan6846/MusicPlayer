import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
//ui
import { SafeAreaView } from "react-native-safe-area-context"
import { Icon, Divider } from '@rneui/themed'


const Profile = () => {
  const Data = [
    {
      name: "Playlists",
      icon: "playlist-add-check",
      songs: "23 songs"

    },
    {
      name: "Videos",
      icon: "videocam",
      songs: "no videos"

    },
    {
      name: "Mp3s",
      icon: "music-note",
      songs: "3 songs"

    }, {
      name: "Albums",
      icon: "disc-full",
      songs: "7 Albums"
    }
  ]
  const ListData = [
    {
      title: "Your Playlists",
      icon: "playlist-add-check",

    },
    {
      title: "Liked Songs",
      icon: "favorite",

    },
    {
      title: "Followed Artists",
      icon: "person",

    },
    {
      title: "History",
      icon: "history",

    },

  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <Text style={{ marginTop: 5, marginLeft: 5 }} >Your Downloads</Text>
        <View style={styles.ListContainer}>
          {
            Data.map((data, index) => (
              <Pressable key={index} style={styles.ListItem}>
                <Icon containerStyle={{ backgroundColor: "cyan", padding: 10, borderRadius: 30, marginBottom: 2, justifyContent: "center", alignItems: "center" }} size={30} name={data.icon} />
                <Text style={styles.TextHead}>{data.name}</Text>
                <Text style={styles.TextSong}>{data.songs}</Text>
              </Pressable>
            ))
          }
        </View>
        <Text style={{ marginTop: 5, marginLeft: 5 }}>Your Activites</Text>
        <View style={styles.More_Container}>
          {
            ListData.map((data, index) => (
              <Pressable style={styles.More_Pressable} key={index}>
                <View style={{flexDirection:"row",columnGap:10,alignItems:"center"}} >
                  <Icon containerStyle={{padding:10,backgroundColor:"cyan",borderRadius:90,marginLeft:5}} name={data.icon} type="any" />
                  <Text>{data.title}</Text>
                </View>
                <Icon color="#d3d3d3" type='material' name='chevron-right' />
         
              </Pressable>
              
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  ListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
    justifyContent: "center",
    marginTop: 5,
    alignItems: "center"

  },
  ListItem: {
    width: '48%',
    height: 150,
    borderRadius: 10,
    backgroundColor: "orange",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  TextHead: {
    fontSize: 16,
    marginBottom: 2,
    marginTop: 2
  },
  TextSong: {
    fontSize: 12,
  },
  More_Container: {

  },
  More_Pressable:{
    flexDirection:"row",
    borderBottomColor:"#D3D3D3",
    borderBottomWidth:1,
    justifyContent:"space-between",
    alignItems:"center",
    padding:8,
  }
})