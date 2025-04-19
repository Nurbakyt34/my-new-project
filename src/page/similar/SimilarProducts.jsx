import React from 'react';
import { useParams } from 'react-router';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';


const products = [
  { id: 1, categoryId: 11, title: 'Изголовье Leny', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1141%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22ley2232nyny-2.jpg&w=1080&q=75' },
  { id: 1, categoryId: 11, title: '', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1140%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22lwe2226xzxz-10.jpg&w=1080&q=75' },
  { id: 1, categoryId: 11, title: 'Изголовье Estonya', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1133%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-26esygg00100004-2.jpg&w=1080&q=75' },
  { id: 1, categoryId: 11, title: 'Изголовье Verso', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1129%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-26esyii00100002-2.jpg&w=1080&q=75' },
  { id: 1, categoryId: 11, title: 'Изголовье Petra S', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1122%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-26ptxii00100003-5.jpg&w=1080&q=75' },
  { id: 1, categoryId: 11, title: 'Изголовье Linda S', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1137%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-26lnsbb00100006-2.jpg&w=1080&q=75' },
  { id: 1, categoryId: 11, title: 'Изголовье Estonya', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1132%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-26esyii00100003-8.jpg&w=1080&q=75' },
  { id: 1, categoryId: 11, title: 'Изголовье Linda S', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F1136%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-26lnskk00100001-2.jpg&w=1080&q=75' },

  { id: 2, categoryId: 12, title: 'Комплект угловой мягкой мебели Efect - модульный, кремовый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F64%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57ectpc00000003-2.jpg&w=1080&q=75' },
  { id: 2, categoryId: 12, title: 'Откидной угловой диван Tina', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F62%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57tnapc00000001-2.jpg&w=1080&q=75' },
  { id: 2, categoryId: 12, title: 'Комплект угловой мягкой мебели Marses', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F61%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57mrspc00000001-2.jpg&w=1080&q=75' },
  { id: 2, categoryId: 12, title: 'Комплект угловой мягкой мебели Moderno', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F60%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57mdepc00000000-26.jpg&w=1080&q=75' },
  { id: 2, categoryId: 12, title: 'Угловой диван Cantona', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F59%2Fthumbs%2Fkdbjkds.jpg&w=1080&q=75' },
  { id: 2, categoryId: 12, title: 'Угловой диван Espina', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F58%2Fthumbs%2F1-espina-kose-takimi-corte-a-gri-corta-bordo-krea-ana-desen-01.jpg&w=1080&q=75' },
  { id: 2, categoryId: 12, title: 'Угловой диван Rivoli', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F57%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-57rvopc00000000-8.jpg&w=1080&q=75' },
  { id: 2, categoryId: 12, title: 'Угловой диван Aden Plus V (3+2)', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F56%2Fthumbs%2Foijspjp.jpg&w=1080&q=75' },
 
 
  { id: 3, categoryId: 13, title: 'Трехместный диван Veronica - кремовый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F254%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20ver3d00400001-2.jpg&w=1080&q=75' },
  { id: 3, categoryId: 13, title: 'Трехместный диван Mathias синий', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F341%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20mth3d00400004-2.jpg&w=1080&q=75' },
  { id: 3, categoryId: 13, title: 'Трехместный диван İndiana - черная ножка серый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F488%2F1-indiana-koltuk-takimi-28.jpg&w=1080&q=75' },
  { id: 3, categoryId: 13, title: 'Трехместный диван Flexy светло-серый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F773%2F1-flexy-koltuk-takimlari-24.jpg&w=1080&q=75' },
  { id: 3, categoryId: 13, title: 'Трехместный диван Valesco Antrasit', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F253%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20vlo3d00400428-2.jpg&w=1080&q=75' },
  { id: 3, categoryId: 13, title: 'Двухместный диван Valesco - Бежевый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F255%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20vlo2d00300002-4.jpg&w=1080&q=75' },
  { id: 3, categoryId: 13, title: 'Трехместный диван Valesco - Зеленый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F251%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20vlo3c00400002-2.jpg&w=1080&q=75' },
  { id: 3, categoryId: 13, title: 'Трехместный диван Loretto с клетчатым узором Antrasit', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F249%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20ltt3c00500002-3.jpg&w=1080&q=75' },


  { id: 4, categoryId: 14, title: 'Кресло Veronica - кремовое', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F255%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20ver1a00400001-2.jpg&w=1080&q=75' },
  { id: 4, categoryId: 14, title: 'Кресло Flexy светло-серое', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F767%2F2-flexy-koltuk-takimlari-25.jpg&w=1080&q=75' },
  { id: 4, categoryId: 14, title: 'Кресло Flexy серое', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F769%2F2-flexy-koltuk-takimlari-50.jpg&w=1080&q=75' },
  { id: 4, categoryId: 14, title: 'Кресло Mathias - бордовое', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F338%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20mth1c00200003-2.jpg&w=1080&q=75' },
  { id: 4, categoryId: 14, title: 'Кресло İndiana - ореховая ножка серое', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F484%2F1-indiana-koltuk-takimi-42.jpg&w=1080&q=75' },
  { id: 4, categoryId: 14, title: 'Кресло Victor бежевое', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F535%2F1-viktor-koltuk-takimi-dekupe0448.jpg&w=1080&q=75' },
  { id: 4, categoryId: 14, title: 'Кресло Montego - Зеленый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F383%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20mte1a00200008-2.jpg&w=1080&q=75' },
  { id: 4, categoryId: 14, title: 'Кресло Cantona кирпичный цвет', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F381%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-20cnb1c00100001-2.jpg&w=1080&q=75' },


  { id: 5, categoryId: 15, title: 'ТВ-тумба Veronica', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F323%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58ver80450dmz-2.jpg&w=1080&q=75' },
  { id: 5, categoryId: 15, title: 'ТВ-тумба Victor', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F428%2F1-victor-tv-unitesi-08.jpg&w=1080&q=75' },
  { id: 5, categoryId: 15, title: 'ТВ-тумба Napoli', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F433%2F1-napoli-tv-unitesi-04.jpg&w=1080&q=75' },
  { id: 5, categoryId: 15, title: 'ТВ-тумба Marses Compact', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F424%2Fthumbs%2Fmarses-tv-unitesi.jpg&w=1080&q=75' },
  { id: 5, categoryId: 15, title: 'ТВ-тумба Gravita', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F423%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58gta8045zexz-8.jpg&w=1080&q=75' },
  { id: 5, categoryId: 15, title: 'ТВ-тумба Mistral', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F422%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mis8045opop-9.jpg&w=1080&q=75' },
  { id: 5, categoryId: 15, title: 'ТВ-тумба Montego', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F421%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8045ldfw-16.jpg&w=1080&q=75' },
  { id: 5, categoryId: 15, title: 'ТВ-тумба Marses', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F420%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mrs8045sxoc-30.jpg&w=1080&q=75' },


  { id: 6, categoryId: 16, title: 'Обеденный стол Montego', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F188%2F21.jpg&w=1080&q=75' },
  { id: 6, categoryId: 16, title: 'Раскрывающийся обеденный стол Loretto ', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F018%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22ltt31552v2v-6.jpg&w=1080&q=75' },
  { id: 6, categoryId: 16, title: 'Раскрывающийся мини Обеденный стол Mavenna', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F009%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22mvn3156opne-1.jpg&w=1080&q=75' },
  { id: 6, categoryId: 16, title: 'Раскрывающийся обеденный стол Napoli', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F441%2F2-napoli-yemek-odasi-34.jpg&w=1080&q=75' },
  { id: 6, categoryId: 16, title: 'Раскрывающийся обеденный стол Valesco ', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F144%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22vlo31551r1r-2.jpg&w=1080&q=75' },
  { id: 6, categoryId: 16, title: 'Обеденный стол Gravita серый ', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F793%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22gta3150zeze-2.jpg&w=1080&q=75' },
  { id: 6, categoryId: 16, title: 'Раскрывающийся обеденный стол Gravita серый ', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F796%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22gta3155zeze-2.jpg&w=1080&q=75' },
  { id: 6, categoryId: 16, title: 'Обеденный стол Leny', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F371%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22ley3150fdxz-3.jpg&w=1080&q=75' },


  { id: 7, categoryId: 17, title: 'Стул Melinton 4077 2 li серый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F574%2F1-livarno-yemek-odasi-0023.jpg&w=1080&q=75' },
  { id: 7, categoryId: 17, title: 'Стул Victor 6346 2 li бежевый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F422%2F1-victor-yemek-odasi-32.jpg&w=1080&q=75' },
  { id: 7, categoryId: 17, title: 'Стул Lizy S 6334 2 li - норковый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F889%2F1-lizy-masa-sandalye-takimi-16.jpg&w=1080&q=75' },
  { id: 7, categoryId: 17, title: 'Стул Plaza 6339 2 li', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fideacdn.net%2Fidea%2Fkc%2F78%2Fmyassets%2Fproducts%2F980%2F1-plaza-yemek-odasi-25.jpg&w=1080&q=75' },
  { id: 7, categoryId: 17, title: 'Стул Valesco 6316 2 li - Темно-синий', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F686%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-23vlo63160230002-2.jpg&w=1080&q=75' },
  { id: 7, categoryId: 17, title: 'Стул Mavenna 6091 2 li - Дуб', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F685%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-23mvn60910220001-3.jpg&w=1080&q=75' },
  { id: 7, categoryId: 17, title: 'Стул Loretto 6317 2 li Antrasit', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F682%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-23ltt63170220002-13.jpg&w=1080&q=75' },
  { id: 7, categoryId: 17, title: 'Стул Montego 6166 2 li - Орех', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F681%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-23mtg61660230001-7.jpg&w=1080&q=75' },

  
  { id: 8, categoryId: 18, title: 'Журнальный столик Armina', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F515%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22ana33021p1p-2.jpg&w=1080&q=75' },
  { id: 8, categoryId: 18, title: 'Журнальный столик Lantes S', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F509%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22lnt3300zgzg-2.jpg&w=1080&q=75' },
  { id: 8, categoryId: 18, title: 'Журнальный столик Montego', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F505%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22mtg3302ldfw-2.jpg&w=1080&q=75' },
  { id: 8, categoryId: 18, title: 'Журнальный столик 719', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F504%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22ysm3302fsur-2.jpg&w=1080&q=75' },
  { id: 8, categoryId: 18, title: 'Журнальный столик Gravita - Серый', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F502%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22gta3302zeze-2.jpg&w=1080&q=75' },
  { id: 8, categoryId: 18, title: 'Журнальный столик Cozy', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F501%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22czy3302ngng-1.jpg&w=1080&q=75' },
  { id: 8, categoryId: 18, title: 'Журнальный столик Leny', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F499%2Fthumbs%2Fimage-tr-22ley3302fdfd-2.jpg&w=1080&q=75' },
  { id: 8, categoryId: 18, title: 'Журнальный столик Sanvito', image: 'https://bellonamebel.kg/_next/image?url=https%3A%2F%2Fadmin.bellonamebel.kg%2Fstorage%2Fproducts%2F493%2Fthumbs%2Fhttps-bellona-mncdn-com-mnresize-1280-720-img-image-tr-22svt3302efef-2.jpg&w=1080&q=75' },

];

function SimilarProducts() {
  const { category } = useParams();

  const categorySlug = decodeURIComponent(category);
  
  const categoryIdMap = {
    'кровати-и-матрасы': 11,
    'угловые-диваны': 12,
    'диваны': 13,
    'кресла': 14,
    'тв-тумбы': 15,
    'столы': 16,

    'стулья': 17,
    'журнальные-столики': 18
  };

  const categoryId = categoryIdMap[categorySlug] || null;

  const filteredProducts = products.filter(product => product.categoryId === categoryId);

  return (
    <div className="app-container p-10">
      <h2 className="text-4xl font-bold mt-[180px] mb-14">
        <Breadcrumbs/>
         {categorySlug}:
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="">
            <div className="w-full h-50 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="object-cover w-full rounded-[10px] hover:shadow-lg  transition h-full" 
                onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
              />
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
