import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import kamera from "./images/kamera.png";
import dm from "./images/dm.png";
import icon from "./images/logo.png";
import iconuser from "./images/user.png";
import uploadimg from "./images/uploadimg.jpg";
import like from "./images/like.png";
import comment from "./images/comment.png";
import save from "./images/save.png";

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 6,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  icon1: {
    width: 30,
    height: 24,
    resizeMode: 'stretch',
    marginTop: 2,
    marginLeft: 8,
  },
  icon2: {
    width: 30,
    height: 30,
    marginRight: 4,
    resizeMode: 'stretch',
  },
  logo: {
    width: 80,
    height: 30,
    marginTop: 2,
    resizeMode: 'stretch',
  },
  card: {
    flexDirection: "row",
    height: 86,
    backgroundColor: "#ebeef2",
  },
  user: {
    borderRadius: 100,
    height: 54,
    width: 54,
    margin: 10,
    marginBottom: -1,
  },
  imgupload: {
    width: '100%',
    height: 300,
  },
  iconnav: {
    width: 30,
    height: 24,
    resizeMode: 'stretch',
    marginTop: 8,
    marginLeft: 8,
  },
});

const my_app = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.icon1} source = {kamera}/>
        <Image style={styles.logo} source = {icon}/>
        <Image style={styles.icon2} source = {dm}/>
      </View>
      <View style={styles.card}>
        <View>
          <Image style={styles.user} source = {iconuser}/>
          <Text style={{ fontWeight: "bold",textAlign: "center" }}>Nanda</Text>
        </View>
        <View>
          <Image style={styles.user} source = {iconuser}/>
          <Text style={{ fontWeight: "bold",textAlign: "center" }}>Eqbar</Text>
        </View>
        <View>
          <Image style={styles.user} source = {iconuser}/>
          <Text style={{ fontWeight: "bold",textAlign: "center" }}>Yudis</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", }}>
        <Image style={{borderRadius: 100,height: 40,width: 40,margin: 14}} source = {iconuser}/>
        <Text style={{ fontWeight: "bold", marginTop:24, marginRight:234 }}>Nanda</Text>
        <Text style={{ fontWeight: "bold", marginTop:20 }}>...</Text>
      </View>
      <View>
        <Image style={styles.imgupload} source = {uploadimg}/>
      </View>
      <View >
        <View style={{ flexDirection: "row",justifyContent: "space-between" }}>
          <View style={{flexDirection: "row"}}>
            <Image style={styles.iconnav} source = {like}/>
            <Image style={styles.iconnav} source = {comment}/>
            <Image style={styles.iconnav} source = {dm}/>
          </View>
          <Image style={styles.iconnav} source = {save}/>
        </View>
      </View>
      <Text style={{ marginTop:8,marginLeft:8}}>13 Suka</Text>
      <View style={{ flexDirection: "row", }}>
        <Text style={{ marginTop:8,marginLeft:8,fontWeight: "bold"}}>Nanda</Text>
        <Text style={{ marginTop:8,marginLeft:8}}>Caption</Text>
      </View>
    </View>
  );
}

export default my_app;