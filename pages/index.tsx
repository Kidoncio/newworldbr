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
  PointsSpanName,
  PointsSpanValue,
  PointsInput,
  PointsSpanStr,
  ItemsDiv,
  WeaponsDiv,
  PrimaryWeaponButton,
  SecondaryWeaponButton,
  CircularDiv,
  GemButton,
} from '@/styles/indexStyle'
import { InputRange, Armor } from '@/components'
import { BsFileEarmarkText } from 'react-icons/bs'
import { GoFileDirectory } from 'react-icons/go'
import { GiBroadsword } from 'react-icons/gi'
import { BiPlus } from 'react-icons/bi'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import roundshield from '@/public/roundshield.png'

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
          <div className="flex w-full justify-between">
            <PointsDiv>
              <div>
                <PointsSpanName>Pontos disponíveis</PointsSpanName>

                <PointsSpanValue>135</PointsSpanValue>
              </div>

              <div className="flex mt-4 items-center">
                <PointsInput type="text" defaultValue="10" />

                <div className="flex flex-col w-full">
                  <PointsSpanStr>força</PointsSpanStr>

                  <InputRange defaultValue={30} step={50} marks min={0} max={300} />
                </div>
              </div>

              <div className="flex mt-4 items-center">
                <PointsInput type="text" defaultValue="20" />

                <div className="flex flex-col w-full">
                  <PointsSpanStr>força</PointsSpanStr>

                  <InputRange defaultValue={30} step={50} marks min={0} max={300} />
                </div>
              </div>

              <div className="flex mt-4 items-center">
                <PointsInput type="text" defaultValue="30" />

                <div className="flex flex-col w-full">
                  <PointsSpanStr>força</PointsSpanStr>

                  <InputRange defaultValue={30} step={50} marks min={0} max={300} />
                </div>
              </div>

              <div className="flex mt-4 items-center">
                <PointsInput type="text" defaultValue="40" />

                <div className="flex flex-col w-full">
                  <PointsSpanStr>força</PointsSpanStr>

                  <InputRange defaultValue={30} step={50} marks min={0} max={300} />
                </div>
              </div>

              <div className="flex mt-4 items-center">
                <PointsInput type="text" defaultValue="50" />

                <div className="flex flex-col w-full">
                  <PointsSpanStr>força</PointsSpanStr>

                  <InputRange defaultValue={30} step={50} marks min={0} max={300} />
                </div>
              </div>
            </PointsDiv>

            <ItemsDiv>
              <Armor />
              <div className="flex flex-col w-full">
                <span>armas</span>
                <WeaponsDiv className="flex w-full">
                  <CircularDiv>
                    <Image src={roundshield} alt="Circular Shield" />
                  </CircularDiv>

                  <div className="flex item-center">
                    <span>1</span>

                    <div>
                      <PrimaryWeaponButton>
                        <GiBroadsword size={40} />
                      </PrimaryWeaponButton>

                      <div className="justify-around">
                        <span>1365</span>
                        <GemButton>
                          <BiPlus size={25} />
                        </GemButton>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <span>2</span>

                    <div>
                      <SecondaryWeaponButton>
                        <BiPlus size={40} />
                      </SecondaryWeaponButton>
                      <div>
                        <span>0</span>
                        <GemButton>
                          <BiPlus size={25} />
                        </GemButton>
                      </div>
                    </div>
                  </div>
                </WeaponsDiv>
              </div>
            </ItemsDiv>
          </div>
        </ContainerDiv>
      </main>
    </div>
  )
}

export default Home
