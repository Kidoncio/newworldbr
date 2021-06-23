import React from 'react'
import { NextPage } from 'next'
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
  AxeSpan,
  SeparatorHorizontal,
  PointsDiv,
  PointsDivSpan,
  PointsSpanName,
  PointsSpanValue,
  PointsInput,
  PointsSpanStr,
} from '@/styles/indexStyle'
import { InputRange } from '@/components'
import { BsFileEarmarkText } from 'react-icons/bs'
import { GoFileDirectory } from 'react-icons/go'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextSeo
        title="New World BR"
        description="Comunidade brasileira de New World."
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />

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

            <div className="flex w-1/3 items-center">
              <NewWorldLogoSVG />

              <AxeDiv className="flex flex-col">
                <AxeSpan>calculadora</AxeSpan>

                <span>new world brasil</span>
              </AxeDiv>
            </div>
          </Header>

          <SeparatorHorizontal />

          <PointsDiv>
            <PointsDivSpan>
              <PointsSpanName>Pontos disponíveis</PointsSpanName>

              <PointsSpanValue>135</PointsSpanValue>
            </PointsDivSpan>

            <div className="flex mt-4 items-center">
              <PointsInput type="text" defaultValue="55" />

              <div className="flex flex-col w-full">
                <PointsSpanStr>força</PointsSpanStr>

                <InputRange defaultValue={30} step={50} marks min={0} max={400} />
              </div>
            </div>
          </PointsDiv>
        </ContainerDiv>
      </main>
    </div>
  )
}

export default Home
