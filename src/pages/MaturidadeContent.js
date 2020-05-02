import React, { useState, Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, Dimensions, ImageBackground,Alert } from 'react-native';
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
export default class MaturidadeContent extends Component {

    constructor(props){
        super(props);

        this.state = {
                level: "None",
                score: 0,
                nextLevelScore: 0,
                nextLevel: "None",
                balance: 0,
                cash: 0,
                progress : {
                    progress: 100,
                    progressWithOnComplete: 0,
                    progressCustomized: 0,
                }
        };

        this.getUserData();
        this.getUser();
    }

     getUserData(){
        var url = "https://infinite-fortress-20170.herokuapp.com/api/customer/load/score";

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                credentials: {
                    token: "a2e63ee01401aaeca78be023dfbb8c59",
                    id: 3
                }
            }),
        }).then((response) => response.json())
        .then((json) => {
            this.setState( { level: json.response.level } );
            this.setState( { score: json.response.score } );
            this.setState( { nextLevelScore: json.response.next_level_score } );
            this.setState( { nextLevel: json.response.next_level_name } );
            this.setState( { progress: { progressWithOnComplete: json.response.perc_to_update }} );
          })
          .catch((error) => {
            Alert.alert(
                'Sem conexão com a rede'
            );
          });
    }

    getUser(){
        var url = "https://infinite-fortress-20170.herokuapp.com/api/customer/token";

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    token: "a2e63ee01401aaeca78be023dfbb8c59",
                    id: 3
                }
            }),
        }).then((response) => response.json())
        .then((json) => {
            this.setState( { balance: json.response.customer.balance } );
            this.setState( { cash: json.response.customer.cash } );
          })
          .catch((error) => {
            Alert.alert(
                'Sem conexão com a rede'
            );
          });
    }

     barWidth = Dimensions.get('screen').width - 100;

    render(){
        return (
             // Container global
        <View style={Style.container}>

        {/* Top */}
        <View style={Style.header}>
             <TouchableOpacity onPress={() => this.props.nav.openDrawer()}>
                 <Feather name={menuState}
                     color="#000"
                     style={Style.arrow} />
             </TouchableOpacity>
             <Text style={MaturidadeStyle.titleHeader}>
                 Maturidade
             </Text>
         </View>

         {/* Valor da Moeda lateral Direita */}
         <View style={Style.containerMoney}>
             <View style={Style.money}>
                 <View style={Style.containerImgMoney}>

                     <View style={Style.containerMenuNota}>
                         <Image source={Nota} style={Style.ImgNota} />
                         <Text style={MaturidadeStyle.valor}>{this.state.balance}</Text>
                     </View>

                     <View style={Style.containerMenuMoney}>
                         <Image source={Moeda} style={Style.ImgMoney} />
                         <Text style={MaturidadeStyle.valor}>{this.state.score}</Text>
                     </View>
                 
                 </View>
                 
             </View>
         </View>

     {/* Body */}
     <View style={MaturidadeStyle.containerMaturidade}>
                    <Text style={MaturidadeStyle.labelLevel}>{this.state.level}</Text>
                    <ImageBackground style={MaturidadeStyle.tinyLogo} source={Flourish}>
                        <Text style={MaturidadeStyle.labelPoints}>{this.state.score}</Text>
                    </ImageBackground>
                    <View style={MaturidadeStyle.containerProgress}>
                        <Text style={MaturidadeStyle.labelLevelProgress} >{this.state.level}</Text>
                        <ProgressBarAnimated
                            {...MaturidadeStyle.progressCustomStyles}
                            width={this.barWidth}
                            value={this.state.progress.progressWithOnComplete}
                            onComplete={() => {
                            Alert.alert('Parabéns você avançou de level');
                            }}
                        />
                        <Text style={Style.labelLevelProgress} >{this.state.nextLevel}</Text>
                    </View>
            </View>

         {/* Footer */}
         <View style={Style.footer}>
             <View style={Style.menuFooter}>
                 <TouchableOpacity onPress={this.props.navToMap}>
                     <Image source={Mapa} style={{ height: 69, width: 50 }} />
                 </TouchableOpacity>

                 <TouchableOpacity onPress={this.props.navToPoupanca}>
                     <Image source={Porquinho} style={{ height: 85, width: 90 }} />
                 </TouchableOpacity>

                 <TouchableOpacity onPress={this.props.navToGame}>
                     <Image source={Trofeu} style={{ height: 90, width: 90 }} />
                 </TouchableOpacity>
             </View>


         </View>
     </View>
        )
    }
}

