import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button} from "react-native";
import TopLogin from "./components/TopLogin";
import DownLogin from "./components/DownLogin";
// import ButtonLogin from "./components/Login/ButtonLogin";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TopLogin style={styles.TopLogin}/>
      <Text style={styles.titulo}>Bienvenido!</Text>
      <TextInput
        style={styles.inputUsuario}
        placeholder="Usuario/Correo Electronico"
      />
      <TextInput style={styles.inputUsuario} placeholder="Contraseña"/>
      <Text style={styles.subTitle}>Sing In to your account</Text>
      <Button
        width={800}
        color={'#046B99'}
        title="Iniciar Sesión"
      />                 
      <Text style={styles.subTitle2}
      >¿Olvidaste tu contraseña?</Text>
      <StatusBar style="auto" />
      <DownLogin style={styles.DownLogin}/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height:"100%",
    width:"100%",
    position: "absolute"
  },

  titulo: {
    width: "90%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    color: "#1C304A",
  },

  subTitle: {
    fontSize: 15,
    color: "#1C304A",
    fontWeight: "bold",
    marginBottom: 15,
  },

  subTitle2: {
    fontSize: 15,
    color: "#1C304A",
    fontWeight: "bold",
    marginTop: 15,
  },

  inputUsuario: {
    borderWidth: 1,
    borderColor: (255, 255, 255, 0.19),
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
    paddingStart: 25,
    padding: 10,
    width: "79%",
    height: 50,
    borderRadius: 12,
    position: "relative"
  },
  TopLogin:{
    // position: "absolute",
    // marginTop:-650
    marginTop:"-72%",
    marginBottom:"30%",

  },
  DownLogin:{
    // marginBottom:-650,
    marginTop:"32%",
    marginBottom:"-71%",

  }
});
