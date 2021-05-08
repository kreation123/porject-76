import React from 'react'
import { Component } from 'react'
import {Text,View, TextInput, StyleSheet, TouchableOpacity, A   lert} from 'react-native'
import db from '../config'
import firebase from 'firebase'  
export default class LogInScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId:"",
            passward : "",
            firstName : "",
            lastName : "",
            contact: "",
            adress : "",
            comfirmPassward : "",

        }
    }
    userSignUp = (emailId, passward)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId, passward)
    .then((Response)=>{
        return Alert.alert('userAddedSuccessfully ')
    })    
    .catch(function(error){
        var errorCode = error.code
        var errorMessage  = error.message 
        return Alert.alert(errorMessage) 
    })
    }
    userLogIn = (emailId, passward)=>{
        firebase.auth().createLogInWithEmailAndPassword(emailId, passward)
        .then((Response)=>{
            return Alert.alert('userAddedSuccessfully ')
        })    
        .catch(function(error){
            var errorCode = error.code
            var errorMessage  = error.message 
            return Alert.alert(errorMessage) 
        })
        }
    render(){
        return(
            <View>
            <Text>Book Santa App</Text>
            <TextInput
            style = {styles.logInBox}
            placeholder = 'Enter Email ID'
            keyboardType  = 'email-address'
            onChangeText = {(text)=>{
                this.setState({
                    emailId : text
                })
            }}             
            />
            <TextInput
            style = {styles.logInBox}
            placeholder = ' Enter Passward '
            onChangeText = {(text)=>{
                this.setState({
                    passward : text
                })
            }}
            />
            <TouchableOpacity
            onPress=  {()=>{
                this.userSignUp(this.state.emailId,this.state.passward)
            }}
            >
                <Text style={{backgroundColor : 'red',width : 300 , height : 50 , justifyContent : 'center',
    borderRadius:25,
    alignItems : 'center', textAlign : 'center',fontSize : 20,    }}>SignUp</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress=  {()=>{
                this.userLogIn(this.state.emailId.this.state.passward)
            }}
            >
                <Text style={{backgroundColor : 'red',width : 300 , height : 50 , justifyContent : 'center',
    borderRadius:25,
    alignItems : 'center', textAlign : 'center',fontSize : 20,    }}>log in </Text>
            </TouchableOpacity>
           

            <TextInput 
            placeholder = 'firstName'
            maxLength = '10'
            onchangeText ={(text)=>{
                this.setState({
                    firstName : text
                    
                })
            }}
            
            />
            
            <TextInput 
            placeholder = 'lastName'
            maxLength = '10'
            onchangeText ={(text)=>{
                this.setState({
                    lastName : text
                    
                })
            }}
            />
            <TextInput 
            placeholder = 'Contact'
            maxLength = '10'
            onchangeText ={(text)=>{
                this.setState({
                    contact : text
                    
                })
            }}
            />
            <TextInput 
            placeholder = 'passward'
            maxLength = '10'
            onchangeText ={(text)=>{
                this.setState({
                    passward : text
                    
                })
            }}
            />
            <TextInput 
            placeholder = 'Adress'
            maxLength = '10'
            onchangeText ={(text)=>{
                this.setState({
                    adress : text
                    
                })
            }}
            />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    logInBox:{
      width: 300,
      hight:40,
      borderColor : 'black',
      borderBottomWidth : 2 ,
        fontSize : 20,
        padding : 10,
        margin: 10,
        


    },
    textBox : {
    width:300,
    height:50,
    
    justifyContent : 'center',
    borderRadius:25,
    alignItems : 'center',
    backgroundColor : ' black',
    shadowColor : 'red',

},
})

//{}