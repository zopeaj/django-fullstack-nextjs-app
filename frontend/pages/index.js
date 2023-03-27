import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MainApp } from './api/MainApp';
import { Container } from "@mui/material";
import styled from 'styled-components';


export default function Home() {
  return (
     <Container>
       <MainApp />
     </Container>
  )
}

