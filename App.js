import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

  export default (props) => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Iniciando o campo minado</Text>
          <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>

          <Field />
          <Field opened />
          <Field opened nearMines={1} />
          <Field opened nearMines={2} />
          <Field opened nearMines={3} />
          <Field opened nearMines={6} />
          <Field mined />
          <Field mined opened />
          <Field mined opened exploded />
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
