import React from 'react';
import {View,Text,Image } from 'react-native' 
import styles from './NewsCard.style'





const NewsCard = ({news}) => { /*(props) yerine ({news}) yazarak propsların içinden news olanı seçmiş olıyoruz. 
    ve text içinde props.news.title yerine news.title yazmak yeterli oluyor. */
    return(
        <View style = {styles.container}>
            <Image style ={styles.image} source = {{uri:news.imgURL}}/>
            <View style= {styles.inner_container}>  
            <Text style = {styles.title}>{news.title}</Text>
            <Text style = {styles.price}>{news.price}</Text>
            <Text style= {styles.inStock}>{news.inStock}</Text>
            </View>
        </View>


    )
}
/* react native sayfasında image bölümündeki örnekte verildiği şekilde
imageların urlsini ayrı source = {{uri:...}} şeklinde yazabiliriz.
yani projemizdeki kullanımda source= news.imageUrl şeklinde direk yazamıyoruz. source = {{uri:news.imageUrl}} şeklinde yazabiliriz.
URL, İnternet'te bir kaynağa rastgelen, standart bir formata uygun bir karakter tertibidir.
 Örneğin Vikipedi'nin URL'si şöyledir: http://tr.wikipedia.org/wiki/URL.*/
export default NewsCard;