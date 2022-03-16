import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import params from './src/params'

  export default (props) => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Iniciando o campo minado</Text>
          <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
        </View>
      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
