import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../AuthProvider.tsx";

function Greeting(): React.JSX.Element {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome {user?.username},</Text>
      <Text style={styles.text2}>
        Hãy chọn khóa học mà bạn mong muốn! Happy hacking :))
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },

  text1: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "700",
    color: "black"
  },

  text2: {
    marginTop: 10,
    fontSize: 20,
    color: "gray"
  }
});

export default Greeting;
