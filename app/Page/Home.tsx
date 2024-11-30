import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//ui
import { SafeAreaView } from "react-native-safe-area-context"
import { Avatar } from '@rneui/themed'

const Home = ({navigation}:{navigation:any}) => {
  React.useEffect(()=>{

})
  const data = [
    {
      id: "1",
      avatar: "https://via.placeholder.com/150",
      type: "audio",
    },
    {
      id: "2",
      avatar: "https://via.placeholder.com/150",
      type: "video",
    },
    {
      id: "3",
      avatar: "https://via.placeholder.com/150",
      type: "audio",
    },
    {
      id: "4",
      avatar: "https://via.placeholder.com/150",
      type: "audio",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Avatar source={{ uri: "https://via.placeholder.com/150" }} containerStyle={{ width: "100%", height: 240, borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} />

        </View>
        <Text style={styles.title}>Hot</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{
            alignItems: 'center', // Center items vertically
          }}
          style={{ maxHeight: 120 }} // Restrict height to desired value
        >
          {data.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              {/* Media Image as Avatar */}
              <Avatar
                size={100}

                source={{ uri: item.avatar }}
                containerStyle={styles.mediaAvatar}
              />

              {/* Type Icon Overlay */}
              <Avatar
                size={24}
                rounded
                containerStyle={styles.iconOverlay}
                icon={{
                  name: item.type === "audio" ? "music" : "video",
                  color: "white",
                }}
              />
            </View>
          ))}


        </ScrollView>
        <Text style={styles.title}>2024 Hits</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{
            alignItems: 'center', // Center items vertically
          }}
          style={{ maxHeight: 120 }} // Restrict height to desired value
        >
          {data.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              {/* Media Image as Avatar */}
              <Avatar
                size={100}

                source={{ uri: item.avatar }}
                containerStyle={styles.mediaAvatar}
              />

              {/* Type Icon Overlay */}
              <Avatar
                size={24}
                rounded
                containerStyle={styles.iconOverlay}
                icon={{
                  name: item.type === "audio" ? "music" : "video",
                  color: "white",
                }}
              />
            </View>
          ))}


        </ScrollView>
        <Text style={styles.title}>Artists</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{
            alignItems: 'center', // Center items vertically
          }}
          style={{ maxHeight: 120 }} // Restrict height to desired value
        >
          {data.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              {/* Media Image as Avatar */}
              <Avatar
                size={100}
                rounded
                source={{ uri: item.avatar }}
                containerStyle={styles.mediaAvatar}
              />

              {/* Type Icon Overlay */}
              <Avatar
                size={24}
                rounded
                containerStyle={styles.iconOverlay}
                icon={{
                  name: item.type === "audio" ? "music" : "video",
                  color: "white",
                }}
              />
            </View>
          ))}


        </ScrollView>
        <Text style={styles.title}>Podcasts</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{
            alignItems: 'center', // Center items vertically
          }}
          style={{ maxHeight: 120 }} // Restrict height to desired value
        >
          {data.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              {/* Media Image as Avatar */}
              <Avatar
                size={100}

                source={{ uri: item.avatar }}
                containerStyle={styles.mediaAvatar}
              />

              {/* Type Icon Overlay */}
              <Avatar
                size={24}
                rounded
                containerStyle={styles.iconOverlay}
                icon={{
                  name: item.type === "audio" ? "music" : "video",
                  color: "white",
                }}
              />
            </View>
          ))}


        </ScrollView>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  }, title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  iconOverlay: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  }, mediaAvatar: {
    borderRadius: 10,
  }, itemContainer: {
    marginRight: 15,
    position: "relative",
  }
})