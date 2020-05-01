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

    const barWidth = Dimensions.get('screen').width - 100;

    const progress = {
        progress: 20,
        progressWithOnComplete: 20,
        progressCustomized: 0,
    }

    return (

        // Container global
        <View style={Style.container}>

           {/* Top */}
           <View style={Style.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name={menuState}
                        color="#000"
                        style={Style.arrow} />
                </TouchableOpacity>
                <Text style={Style.titleHeader}>
                    Maturidade
                </Text>
            </View>

            {/* Valor da Moeda lateral Direita */}
            <View style={Style.containerMoney}>
                <View style={Style.money}>
                    <View style={Style.containerImgMoney}>

                        <View style={Style.containerMenuNota}>
                            <Image source={Nota} style={Style.ImgNota} />
                            <Text style={Style.valor}>R$ 0</Text>
                        </View>

                        <View style={Style.containerMenuMoney}>
                            <Image source={Moeda} style={Style.ImgMoney} />
                            <Text style={Style.valor}>0</Text>
                        </View>
                    
                    </View>
                    
                </View>
            </View>

        {/* Body */}
            <View style={MaturidadeStyle.containerMaturidade}>
                    <Text style={MaturidadeStyle.labelLevel}>Baby</Text>
                    <ImageBackground style={MaturidadeStyle.tinyLogo} source={Flourish}>
                        <Text style={MaturidadeStyle.labelPoints}>0</Text>
                    </ImageBackground>
                    <View style={MaturidadeStyle.containerProgress}>
                        <Text style={MaturidadeStyle.labelLevelProgress} >Baby</Text>
                        <ProgressBarAnimated
                            {...MaturidadeStyle.progressCustomStyles}
                            width={barWidth}
                            value={progress.progressWithOnComplete}
                            onComplete={() => {
                            Alert.alert('Parabéns você avançou de level');
                            }}
                        />
                        <Text style={Style.labelLevelProgress} >Child</Text>
                    </View>
            </View>

            {/* Footer */}
            <View style={Style.footer}>
                <View style={Style.menuFooter}>
                    <TouchableOpacity onPress={navigationToMap}>
                        <Image source={Mapa} style={{ height: 69, width: 50 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigationToPoupanca}>
                        <Image source={Porquinho} style={{ height: 85, width: 90 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigationToGame}>
                        <Image source={Trofeu} style={{ height: 90, width: 90 }} />
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

