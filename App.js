import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag } from './src/logica'

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
        board: createMinedBoard(rows, cols, this.minesAmount()),
        won: false,
        lost: false
      }
    }

    onOpenField = (row, column) => {
      const board = cloneBoard(this.state.board)
      openField(board, row, column)
      const lost = hadExplosion(board)
      const won = wonGame(board)

      if(lost) {
        showMines(board)
        Alert.alert('Perdeuu', 'Seu burro!!!')
      }

      if(won) {
        Alert.alert('Parabéns', 'Você venceu!!!')
      }

      this.setState({ board, lost, won })
    }

    onSelectField = (row, column) => {
      const board = cloneBoard(this.state.board)
      invertFlag(board, row, column)
      const won = wonGame(board)
      if(won) Alert.alert('Parabéns', 'Você venceu!!!')
    }

    render(){
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text>Iniciando o campo minado</Text>
            <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
          </View>
          <View style={styles.board}>
            <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
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
