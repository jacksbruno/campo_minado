import { Dimensions } from 'react-native'

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: .15, //Proporção do painel superior da tela
  difficultLevel: .1,
  getColumnsAmount(){
    const width = Dimensions.get('window').width
    return Math.floor(width / this.blockSize)
  },
  getRowsAmount(){
    const totalHeight = Dimensions.get('window').height
    const boardHeight = totalHeight * (1 - this.headerRatio)
    return Math.floor(boardHeight / this.blockSize)
  }
}

export default params