import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

// Estilos
import Style from '../css/HomeStyle'
import InvestStyle from '../css/InvestStyle'

// Imagens
import Porquinho from '../images/porquinho.png'
import Mapa from '../images/local.png';
import Trofeu from '../images/trofeu.png'
import Moeda from '../images/moeda.png';
import Nota from '../images/nota.png'

let menuState = 'menu'

const DATA = [
    {
        id: 1,
        title: 'Poupança',
        img: '',
        desc: 'teste',
        color: '#ff4'
    },
    {
        id: 2,
        title: 'CDB',
        img: '',
        desc: 'teste'
    },
    {
        id: 3,
        title: 'LCI',
        img: '',
        desc: 'teste'
    },
    {
        id: 4,
        title: 'SELIC',
        img: '',
        desc: 'teste'
    },
    {
        id: 4,
        title: 'SELIC',
        img: '',
        desc: 'teste'
    },
    {
        id: 4,
        title: 'SELIC',
        img: '',
        desc: 'teste'
    },
    {
        id: 4,
        title: 'SELIC',
        img: '',
        desc: 'teste'
    },  {
        id: 4,
        title: 'SELIC',
        img: '',
        desc: 'teste'
    }
];

function Item({ title }) {
    return (
        <View style={InvestStyle.containerItem}>
            <Image source={Moeda} style={InvestStyle.ImgMoney} />
            <TouchableOpacity>
                <Text style={InvestStyle.Item}>{title}</Text>
            </TouchableOpacity>
            <Feather name="arrow-right" style={{ fontSize: 20 }} />
        </View>
    );
}

export default function ModuloInvestimentos({ navigation }) {

    function navigationToMap() {
        navigation.navigate('Mapa');
    }

    function navigationToGame() {
        navigation.navigate('Game')
    }

    function navigationToPoupanca() {
        navigation.navigate('Poupanca')
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
                    Investimentos
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


            <View style={InvestStyle.FlatList}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Item title={item.title} />

                    }
                />
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

