import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard } from './src/logica'

  export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = this.createState()
    }

    minesAmount = () => {
      const cols = params.getColumnsAmount()
      const rows = params.getRowsAmount()
      return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
      const cols = params.getColumnsAmount()
      const rows = params.getRowsAmount()
      return {
        board: createMinedBoard(rows, cols, this.minesAmount())
      }
    }

    render(){
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text>Iniciando o campo minado</Text>
            <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
          </View>
          <View style={styles.board}>
            <MineField board={this.state.board} />
          </View>
        </SafeAreaView>
      )
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aaa'
  }
})
