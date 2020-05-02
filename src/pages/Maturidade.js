import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Estilos
import Style from '../css/HomeStyle'
import MaturidadeStyle from '../css/MaturidadeStyle'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
// Imagens
import Porquinho from '../images/porquinho.png'
import Mapa from '../images/local.png';
import Trofeu from '../images/trofeu.png'
import Moeda from '../images/moeda.png';
import Nota from '../images/nota.png'
import Flourish from '../images/flourish3.png'

// Componentes
import MaturidadeContent from './MaturidadeContent';

let menuState = 'menu'
export default function ModuloMaturidade({navigation}) {

    function navigationToMap() {
        navigation.navigate('Mapa');
    }

    function navigationToGame() {
        navigation.navigate('Game')
    }

    function navigationToPoupanca() {
        navigation.navigate('Poupanca')
    }

    function getUserData(){
        var url = "https://infinite-fortress-20170.herokuapp.com/api/customer/token";
        var text = '{"token":"9775f681333e9ada4a9e8ed316d03578" , "id":2}';
        var obj = JSON.parse(text);
        axios.post(url, {
            credentials: obj,
          })
          .then(function (response) {
            Alert.alert(response);
          })
          .catch(function (error) {
            Alert.alert(error);
          });
    }

    const barWidth = Dimensions.get('screen').width - 100;

    const progress = {
        progress: 20,
        progressWithOnComplete: 20,
        progressCustomized: 0,
    }

    return (
        <MaturidadeContent nav={navigation} navToMap={navigationToMap} navToPoupanca={navigationToPoupanca} navToGame={navigationToGame}/>
    )
}

