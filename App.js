import React from "react";
import { View, Text, Image, Button,SafeAreaView, ScrollView } from "react-native";
import add from "./images/add.png";
import menu from "./images/menu.png";
import profile from "./images/profile.jpg";
import home from "./images/home.png";
import search from "./images/search.png";
import reel from "./images/reel.png";
import shop from "./images/shop.png";
import feed from "./images/feed.png";
import tag from "./images/tag.png";
import foto from "./images/foto.png";

const Angka = (props) => {
  return(
    <View style={{alignItems:"center"}}>
      <Text style={{fontSize:26, color:'black', fontWeight:'bold', marginTop:15, marginBottom:1}}>{props.jumlahAngka}</Text>
    </View>
  );
}

const Detail = (props) => {
  return(
    <View style={{alignItems:"center"}}>
      <Text style={{fontSize:14, color:'black', marginTop:5}}>{props.labelDetail}</Text>
    </View>
  )
}

const Textbio = (props) => {
  return(
      <View>
        <Text>{props.textBio}</Text>
      </View>
  );
}

const App = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1, flexDirection:"row", backgroundColor:"white"}}>
        <Text style={{color:'black', padding:14, fontWeight:'bold', fontSize:22, flex:4}}>
          lindasuvirahmawati
        </Text>
        <View style={{flex:1}}>
          <Image style={{height:32, width:32, marginLeft:20, marginTop:12}} source = {add}/>
        </View>
        <View style={{flex:1}}>
          <Image style={{height:22, width:22, marginLeft:17, marginTop:17}} source = {menu}/>
        </View>
      </View >
      <View style={{flex:1.5, flexDirection:"row", backgroundColor:"white"}}>
        <View style={{flex:2}}>
          <Image style={{height:94, width:94, borderRadius:100, marginLeft:22, borderColor:"black", borderWidth:2}} source = {profile}/>
        </View>
        <View style={{flex:1}}>
          <Angka jumlahAngka="100"/>
          <Detail labelDetail="Posts"/>
        </View> 
        <View style={{flex:1}} >
          <Angka jumlahAngka="1.010"/>
          <Detail labelDetail="Followers"/>
        </View>
        <View style={{flex:1, marginRight:22}} >
          <Angka jumlahAngka="1706"/>
          <Detail labelDetail="Following"/>
        </View>
      </View>
      <View style={{backgroundColor:"white", flex:2}}>
        <Text style={{color:'black', marginLeft:20, marginTop:8, fontWeight:'bold', fontSize:16}}>
            Linda Suvi Rahmawati
        </Text>
        <Text style={{marginTop:5, marginLeft:20, color:'blue'}}>👨‍👩‍👦‍👦@andri_hcwmalang</Text>
        <Text style={{marginLeft:20, color:'blue'}}>👩@anindhitaazzahraprasetyo</Text>
        <Text style={{marginLeft:20, color:'blue'}}>👨@abqaryalzhafranprasetyo</Text>
        <Text style={{marginLeft:20, color:'blue'}}>🏢@kampus_stimata</Text>
      </View>
      <View style={{backgroundColor:"white", flexDirection:"row"}}>
        <View style={{flex:4}}>
          <View style = {{marginLeft:14, width:260}}>
            <Button title="Edit Profile">
            </Button>
          </View>
        </View>
        <View style={{flex:1}}>
          <View style = {{marginLeft:14, width:40}}>
            <Button title="v" >
            </Button>
          </View>
        </View>
      </View>
      <View style={{flex:2, flexDirection:"row"}}>
        <View style={{marginTop:11, marginLeft:20}}>
          <Image style={{height:60, width:60, borderRadius:100, marginTop:8, borderColor:"black", borderWidth:2}} source = {profile}/>
          <Text style={{textAlign:"center", fontSize:12, color:"black"}}>celebrate😘</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{height:60, width:60, borderRadius:100, marginTop:8, borderColor:"black",borderWidth:2}} source = {profile}/>
          <Text style={{textAlign:"center", fontSize:12, color:"black"}}>gadis and bujan</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{height:60, width:60, borderRadius:100, marginTop:8, borderColor:"black",borderWidth:2}} source = {profile}/>
          <Text style={{textAlign:"center", fontSize:12, color:"black"}}>haru biru 😍</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{height:60, width:60, borderRadius:100, marginTop:8, borderColor:"black",borderWidth:2}} source = {profile}/>
          <Text style={{textAlign:"center", fontSize:12, color:"black"}}>gadisku😍</Text>
        </View>
      </View>
      <View style={{backgroundColor:"white", flex:1, flexDirection:"row"}}> 
        <View style={{alignItems:"center", flex:1}}>
          <Image style={{height:50, width:50, marginTop:4}} source = {feed}/>
        </View>
        <View style={{alignItems:"center", flex:1}}>
          <Image style={{height:34, width:34, marginTop:11}} source = {reel}/>
        </View>
        <View style={{alignItems:"center", flex:1}}>
          <Image style={{height:38, width:38, marginTop:8}} source = {tag}/>
        </View>
      </View>
      <View style={{backgroundColor:"red", flex:2,flexDirection:"row"}}>
        <View style={{backgroundColor:"black", flex:1}}>
        <Image style={{width:'100%',height:undefined, aspectRatio:1}} source = {foto}/>
        </View>
        <View style={{backgroundColor:"red", flex:1}}>
        <Image style={{width:'100%', height:undefined, aspectRatio:1}} source = {foto}/>
        </View>
        <View style={{backgroundColor:"yellow", flex:1}}>
        <Image style={{width:'100%', height:undefined, aspectRatio:1}} source = {foto}/>
        </View>
      </View>
      <View style={{backgroundColor:"white", flex:1, flexDirection:"row"}}>
        <View style={{flex:1}}>
          <Image style={{height:34, width:34, marginLeft:18, marginTop:10}} source = {home}/>
        </View>
        <View style={{flex:1}}>
          <Image style={{height:30, width:30, marginLeft:20, marginTop:13}} source = {search}/>
        </View>
        <View style={{flex:1}}>
          <Image style={{height:30, width:30, marginLeft:20, marginTop:13}} source = {reel}/>
        </View>
        <View style={{flex:1}}>
          <Image style={{height:30, width:30, marginLeft:20, marginTop:13}} source = {shop}/>
        </View>
        <View style={{flex:1}}>
          <Image style={{height:30, width:30, marginLeft:20, marginTop:13, borderRadius:100, borderColor:"black", borderWidth:1}} source = {profile}/>
        </View>
      </View>
    </View>
  );
};

export default App;