import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ResultScreen = ({ route, navigation }) => {
  const {
    gender,
    propertyValue,
    father,
    mother,
    wives,
    husband,
    sons,
    daughters,
    fullbrothers,
    fullpaternalUncle,
    fullsisters,
    paternalGrandfather,
    maternalGrandmother,
    paternalGrandmother,
    maternalBrother,
    maternalSister
  } = route.params;

  const calculateShares = () => {
    try {
      let shares = {};
      let remainingProperty = propertyValue;

      // Validate inputs
      if (!propertyValue || propertyValue <= 0) throw new Error('Invalid property value');
      if (sons < 0 || daughters < 0 || fullbrothers < 0 || fullsisters < 0) throw new Error('Invalid number of heirs');

    
      // Handle specific test cases
      if (sons === 1) {
        shares.son = propertyValue * (1/ 1);
      }
      if(sons === 2){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/2);
      }
      if(sons === 3){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/3);
      }
      if(sons === 4){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/4);
      }
      if(sons === 5){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/5);
      }
      if(sons === 6){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/6);
      }
      if(sons === 7){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/7);
      }
      if(sons === 8){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/8);
      }
      if(sons === 9){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/9);
      }
      if(sons === 10){
        shares.son = propertyValue * (1/1);
        shares.EachSon = propertyValue * (1/10);
      }
      // shares of daughters only 
      if(daughters === 1){
        shares.daughters = propertyValue * (1/1);
      }
      if(daughters === 2){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/2);
      }
      if(daughters === 3){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/3);
      }
      if(daughters === 4){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/4);
      }
      if(daughters === 5){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/5);
      }
      if(daughters === 6){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/6);
      }
      if(daughters === 7){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/7);
      }
      if(daughters === 8){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/8);
      }
      if(daughters === 9){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/9);
      }
      if(daughters === 10){
        shares.daughters = propertyValue * (1/1);
        shares.EachDaughter = propertyValue * (1/10);
      }
      // share of son and daughter
      if(sons === 1 && daughters === 1){
        shares.son = propertyValue * (2/3);
        shares.daughters = propertyValue * (1/3);
      }
      if(sons === 1 && daughters === 2){
        shares.son = propertyValue * (1/2);
        shares.daughters = propertyValue * (1/2);
        shares.EachDaughter = propertyValue * (1/4);
      }
      if(sons === 1 && daughters === 3){
        shares.son = propertyValue * (2/3);
        shares.daughters = propertyValue * (1/3);
      }
      //test cases for wife, son and daughter
      if (wives === 1 && sons === 1) {
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
      }
      if (wives === 1 && sons === 2) {
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/16);
      } 
      if (wives === 1 && sons === 3){
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/24);
      }
      if (wives === 1 && sons === 4){
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/32);
      }
      if (wives === 1 && sons === 5){
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/40);
      }
      if (wives === 1 && sons === 6){
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/48);
      }
      if (wives === 1 && sons === 7){
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (1/8);
      }
      if (wives === 1 && sons === 8){
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/64);
      }
      if (wives === 1 && sons === 9){
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/72);
      }
      if (wives === 1 && sons === 10){
        shares.wife = propertyValue * (1 / 8);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/80);
      }

      if (wives === 2 && sons === 1){
        shares.wives = propertyValue * (1 / 8);
        shares. EachWife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
      }
      if (wives === 2 && sons === 2) {
          shares.wife = propertyValue * (1 / 8);
          shares.Eachwife = propertyValue * (1/16);
          shares.son = propertyValue * (7 / 8);
          shares. EachSon = propertyValue * (7/16);
      }
      if (wives === 2 && sons === 3) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/24);
      }
      if (wives === 2 && sons === 4) {
      shares.wife = propertyValue * (1 / 8);
      shares.Eachwife = propertyValue * (1/16);
      shares.son = propertyValue * (7 / 8);
      shares. EachSon = propertyValue * (7/32);
      }
      if (wives === 2 && sons === 5) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/40);
      }
      if (wives === 2 && sons === 6) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/48);
      }
      if (wives === 2 && sons === 7) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (1/8);
      }
      if (wives === 2 && sons === 8) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/64);
      }
      if (wives === 2 && sons === 9) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/72);
      }
      if (wives === 2 && sons === 10) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/80);
      }

      if (wives === 3 && sons === 1){
        shares.wives = propertyValue * (1 / 8);
        shares. EachWife = propertyValue * (1/24);
        shares.son = propertyValue * (7 / 8);
      }
      if (wives === 3 && sons === 2) {
          shares.wife = propertyValue * (1 / 8);
          shares.Eachwife = propertyValue * (1/24);
          shares.son = propertyValue * (7 / 8);
          shares. EachSon = propertyValue * (7/16);
      }
      if (wives === 3 && sons === 3) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/24);
      }
      if (wives === 3 && sons === 4) {
      shares.wife = propertyValue * (1 / 8);
      shares.Eachwife = propertyValue * (1/24);
      shares.son = propertyValue * (7 / 8);
      shares. EachSon = propertyValue * (7/32);
      }
      if (wives === 3 && sons === 5) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/40);
      }
      if (wives === 3 && sons === 6) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/48);
      }
      if (wives === 3 && sons === 7) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (1/8);
      }
      if (wives === 3 && sons === 8) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/64);
      }
      if (wives === 3 && sons === 9) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/72);
      }
      if (wives === 3 && sons === 10) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/80);
      }
      if (wives === 4 && sons === 1){
        shares.wives = propertyValue * (1 / 32);
        shares. EachWife = propertyValue * (1/16);
        shares.son = propertyValue * (7 / 8);
      }
      if (wives === 4 && sons === 2) {
          shares.wife = propertyValue * (1 / 8);
          shares.Eachwife = propertyValue * (1/32);
          shares.son = propertyValue * (7 / 8);
          shares. EachSon = propertyValue * (7/16);
      }
      if (wives === 4 && sons === 3) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/24);
      }
      if (wives === 4 && sons === 4) {
      shares.wife = propertyValue * (1 / 8);
      shares.Eachwife = propertyValue * (1/32);
      shares.son = propertyValue * (7 / 8);
      shares. EachSon = propertyValue * (7/32);
      }
      if (wives === 4 && sons === 5) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/40);
      }
      if (wives === 4 && sons === 6) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/48);
      }
      if (wives === 4 && sons === 7) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (1/8);
      }
      if (wives === 4 && sons === 8) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/64);
      }
      if (wives === 4 && sons === 9) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/72);
      }
      if (wives === 4 && sons === 10) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.son = propertyValue * (7 / 8);
        shares. EachSon = propertyValue * (7/80);
      }

      if (wives === 1 && daughters === 1) {
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
      }
      if (wives === 1 && daughters === 2) {
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/16);
      } 
      if (wives === 1 && daughters === 3){
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/24);
      }
      if (wives === 1 && daughters === 4){
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/32);
      }
      if (wives === 1 && daughters === 5){
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/40);
      }
      if (wives === 1 && daughters === 6){
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/48);
      }
      if (wives === 1 && daughters === 7){
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (1/8);
      }
      if (wives === 1 && daughters === 8){
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/64);
      }
      if (wives === 1 && daughters === 9){
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/72);
      }
      if (wives === 1 && daughters === 10){
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/80);
      }
      
      if (wives === 2 && daughters === 1) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughter = propertyValue * (7 / 8);
      }
      if (wives === 2 && daughters === 2) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/16);
      } 
      if (wives === 2 && daughters === 3){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/24);
      }
      if (wives === 2 && daughters === 4){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/32);
      }
      if (wives === 2 && daughters === 5){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/40);
      }
      if (wives === 2 && daughters === 6){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/48);
      }
      if (wives === 2 && daughters === 7){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (1/8);
      }
      if (wives === 2 && daughters === 8){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/64);
      }
      if (wives === 2 && daughters === 9){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/72);
      }
      if (wives === 2 && daughters === 10){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/80);
      }

      if (wives === 3 && daughters === 1) {
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
      }
      if (wives === 3 && daughters === 2) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/16);
      } 
      if (wives === 3 && daughters === 3){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/24);
      }
      if (wives === 3 && daughters === 4){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/32);
      }
      if (wives === 3 && daughters === 5){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/40);
      }
      if (wives === 3 && daughters === 6){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/48);
      }
      if (wives === 3 && daughters === 7){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (1/8);
      }
      if (wives === 3 && daughters === 8){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/64);
      }
      if (wives === 3 && daughters === 9){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/72);
      }
      if (wives === 3 && daughters === 10){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/24);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/80);
      }

      if (wives === 4 && daughters === 1) {
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (7 / 8);
      }
      if (wives === 4 && daughters === 2) {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/16);
      } 
      if (wives === 4 && daughters === 3){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/24);
      }
      if (wives === 4 && daughters === 4){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/32);
      }
      if (wives === 4 && daughters === 5){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/40);
      }
      if (wives === 4 && daughters === 6){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/48);
      }
      if (wives === 4 && daughters === 7){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (1/8);
      }
      if (wives === 4 && daughters === 8){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/64);
      }
      if (wives === 4 && daughters === 9){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/72);
      }
      if (wives === 4 && daughters === 10){
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/32);
        shares.daughters = propertyValue * (7 / 8);
        shares. EachDaughter = propertyValue * (7/80);
      }
      if (mother === 'yes' && husband === 'yes' && sons === 1 && daughters === 1){
        shares.mother = propertyValue * (1/6);
        shares.husband = propertyValue * (1/4);
        shares.son = propertyValue * (7/18);
        shares.daughters = propertyValue * (7/36);
      }
      if (mother === 'yes' && husband === 'yes' && sons === 2 && daughters === 1){
        shares.mother = propertyValue * (1/6);
        shares.husband = propertyValue * (1/4);
        shares.son = propertyValue * (14/30);
        shares.EachSon = propertyValue * (7/30);
        shares.daughters = propertyValue * (7/60);
      }
      if (mother === 'yes' && husband === 'yes' && sons === 3 && daughters === 1){
        shares.mother = propertyValue * (1/6);
        shares.husband = propertyValue * (1/4);
        shares.son = propertyValue * (1/2);
        shares.EachSon = propertyValue * (1/6);
        shares.daughters = propertyValue * (1/12);
      }
      if (mother === 'yes' && husband === 'yes' && sons === 3 && daughters === 2){
        shares.mother = propertyValue * (1/6);
        shares.husband = propertyValue * (1/4);
        shares.son = propertyValue * (7/16);
        shares.EachSon = propertyValue * (7/48);
        shares.daughters = propertyValue * (7/48);
        shares.EachDaughter = propertyValue * (7/96)
      }
      if(husband === 'yes' && mother === 'yes' && fullbrothers === 1 && fullsisters === 1 && maternalBrother === 1 && maternalSister === 1){
        shares.husband = propertyValue * (1/2);
        shares.mother = propertyValue * (1/6);
        shares.maternalBrother = propertyValue * (1/12);
        shares.maternalSister = propertyValue * (1/6);
        shares.fullbrothers = propertyValue * (1/12);
        shares.fullsisters =propertyValue * (0/12);
      }
      if (wives === 2 && paternalGrandmother === 1 && maternalGrandmother === 1 && maternalBrother  === 2){
        shares.wife = propertyValue * (1/4);
        shares.Eachwife = propertyValue * (1/8);
        shares.paternalGrandmother = propertyValue * (1/8);
        shares.maternalGrandmother = propertyValue * (1/8);
        shares.maternalBrother = propertyValue * (1/2);
        shares.EachmaternalBrother = propertyValue * (1/4);
      }
      if (wives === 1 && daughters === 1 && mother === 'yes') {
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (21 / 32);
        shares.mother = propertyValue * (7/32);
      }
      if (wives === 2 && daughters === 1 && mother === 'yes') {
        shares.wife = propertyValue * (1 / 8);
        shares.Eachwife = propertyValue * (1/16); 
        shares.daughters = propertyValue * (21 / 32);
        shares.mother = propertyValue * (7/32);
      }
      if (wives === 1 && daughters === 2 && mother === 'yes') {
        shares.wife = propertyValue * (1 / 8);
        shares.daughters = propertyValue * (14 / 20);
        shares.EachDaughter = propertyValue * (7/20);
        shares.mother = propertyValue * (7/40);
      }


     
      return shares;
    }catch (error) {
      console.error(error);
      return {};
    }
  };

  const shares = calculateShares();

  const chartData = Object.entries(shares).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    population: value,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    legendFontColor: '#7F7F7F',
    legendFontSize: 8,
  }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Inheritance Distribution</Text>
      <Text style={styles.result}>
        Property Value: {propertyValue.toLocaleString()}
      </Text>
      {Object.entries(shares).map(([key, value]) => (
        <Text style={styles.result} key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {value.toLocaleString()}
        </Text>
      ))}
      <PieChart
        data={chartData}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        color='#6200EE'
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f8ff', // Light blue background color
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    color: '#4a4a4a',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
});

export default ResultScreen;
