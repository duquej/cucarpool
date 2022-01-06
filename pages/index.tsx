import type { NextPage } from 'next'
import {ThemeProvider} from "styled-components";
import Wrapper from '../components/Wrapper';
import styles from '../styles/Home.module.css'

const theme = { font: "Calibri"}
const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div>
          Hello World!
        </div>
      </Wrapper>
    </ThemeProvider>
 
  )
}

export default Home
