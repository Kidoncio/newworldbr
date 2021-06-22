import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  ContainerDiv,
  SeparatorDiv,
  Header,
  DirectoryDiv,
  SaveButton,
  IconButton,
  AxeDiv,
  NewWorldLogoSVG,
} from '@/styles/indexStyle'
import { BsFileEarmarkText } from 'react-icons/bs'
import { GoFileDirectory } from 'react-icons/go'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ContainerDiv>
          <Header>
            <DirectoryDiv className="flex w-1/2 items-center">
              <IconButton marginRight="1rem">
                <BsFileEarmarkText />
              </IconButton>

              <IconButton>
                <GoFileDirectory />
              </IconButton>

              <SeparatorDiv />

              <input type="text" placeholder="Build exotica abuh" />

              <SaveButton>salvar</SaveButton>
            </DirectoryDiv>

            <AxeDiv className="flex w-1/3 items-center">
              <NewWorldLogoSVG />

              <div className="flex flex-col">
                <span>CALCULADORA</span>
                <span>NEW WORLD BRASIL</span>
              </div>
            </AxeDiv>
          </Header>
        </ContainerDiv>
      </main>
    </div>
  )
}

export default Home
