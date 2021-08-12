import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.sirestore()

firestore.collection('users').doc('qmd6BUGNFl4hwCcimMiy').collection('cartItems').doc('vDuhqrNZAhmn5DxtlSe4')
firestore.doc('/users/qmd6BUGNFl4hwCcimMiy/cartItems/vDuhqrNZAhmn5DxtlSe4')
firestore.collection('/users/qmd6BUGNFl4hwCcimMiy/cartItems')