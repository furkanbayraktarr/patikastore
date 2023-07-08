import React from 'react'
import { SafeAreaView,View,Text,FlatList, StyleSheet,TextInput, } from 'react-native'
import news_data from './news_data.json'
import NewsCard from './components/NewsCard/NewsCard'

 
  function App () {

    const renderNews = ({item})=> <NewsCard news={item}/>;
    const [text, setText] = React.useState('Ara...');
    const handleInputChange = (inputText) => {
      setText(inputText)
    };
    

  return(
    
    <SafeAreaView style = {styles.container}>
      <Text style= {styles.headerText}>PATİKASTORE</Text>
      <TextInput 
      style = {styles.arama}  
      onChangeText={handleInputChange}
      value = {text}
      />
      <View style = {styles.window}>
        <FlatList
        
        numColumns={2}
        keyExtractor={item=> item.id.toString()}
        data={news_data}
        renderItem= {renderNews}
      />
      </View>
    </SafeAreaView>
    

  )
}

const styles = StyleSheet.create ({
  container: {flex:1,
    backgroundColor:'white',
    
  },
  
  window: {
    
    margin:10,
    marginBottom:80,
  },
  headerText:{
    color: '#0000cd',
    fontWeight:'bold',
    fontSize : 50,
    marginLeft: 10,
  },
  arama:{
    borderRadius:10,
    color:'gray',
    height: 40,
    margin: 10,
    padding:5,
    backgroundColor:'#eceff1',

}
})

export default App
/*1-https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png"
2-"https://static.coindesk.com/wp-content/uploads/2020/10/GettyImages-alex-wong-1-1024x628.jpg"
3-https://blog.malwarebytes.com/wp-content/uploads/2020/09/shutterstock_640824457-600x410.jpg */
/*json formatından öğe seçerken süslü parantezle seçebiliyoruz bu yüzden renderitemda itemi
süslü parantezde belirttik. 
renderItem = {({item})=> <NewsCard news={item}/>} bu formatı kullanırken şöyle 
bi durum oluyor:
diyelim 200 tane veri var bu formatta her seferinde 200 kez renderItem tetiklenip
işlem yapıyor.Bu sağlıklı değil. Ama callback fonksiyonu return dongüsünün dışında
yukarda sabite eşitlersek,
returnde bu sabiti renderıtem 'a eşitleyip bu işlemi daha sağlıklı yapırız.
Scrollview da horizontal verilerin yatay dizilmesini, showsHorizontalScrollIndicator={false} ise scroll göstergesinin
görünmemesini sağlar.
ScrollView eğer flatlistin dışında üstte yer alsaydı yatay veriler dikey verileri
kaydırsak bile kaybolbayacaktı,
ancak flatlistin içine ekleyerek dikey verileri kaydırınca üstteki yatay
veriler ekrandan cıkıyor.
bunu da ListHeaderComponent ile yapabiliyoruz. Yani flatliste tepesindeki yapıyı 
belirtiyoruz. bunu da bi fonksiyon olarak belirtebiliriz.
React'te useState hook'u,
bileşenlerin içinde durum (state) tutmak için kullanılır. useState hook'u,
fonksiyon bileşenlerinde (function components) durum yönetimi sağlar. 
Yukarıdaki örnekte, useState hook'u, text adında bir durum değişkeni
ve setText adında bir durum güncelleme işlevi döndürür. 
React Native'deki TextInput bileşeninde, kullanıcının girdiği metni
göstermek için value prop'unu kullanabilirsiniz. Bu prop'a bir durum
değişkenini atayarak, kullanıcının girdiği metnin value prop'unun değeri 
olarak tutulmasını sağlayabilirsiniz.
Yukarıdaki örnekte, text adında bir durum değişkeni ve setText adında bir 
durum güncelleme işlevi tanımlanmıştır. handleInputChange işlevi, her metin 
girişi değiştiğinde çağrılarak text durumunu günceller. TextInput bileşeni, 
value prop'unu text durum değişkenine bağlayarak kullanıcının girdiği metni 
gösterir. Her metin girişi değiştiğinde text durumu güncellenir ve TextInput 
otomatik olarak yeni girilen metni gösterir.
hiç handleInputChange fonksiyonu kullanmadan direk onChangeText={setText}
yapabilirdik. ancak render edersek sağlıklı olsun diye bu fonksiyonu return
dışında halledip returna değeri direk koymuş oluyoruz.(geçmiş projedeki sağlıklı
  render işlemi mantığı)
Bu şekilde, kullanıcının girdiği metni TextInput bileşeninin içinde gösterebilir 
ve bu metni durum yönetimiyle kontrol edebilirsiniz.
*/