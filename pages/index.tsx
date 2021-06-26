import React from 'react'
import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {
  ContainerDiv,
  SeparatorHorizontal,
  ItemsDiv,
  SeparatorVertical,
  IndexAttributesDiv,
} from '@/styles/indexStyle'
import {
  Attributes,
  Armor,
  Header,
  BonusAndPassives,
  EssentialElement,
  Accessories,
  Weapons,
} from '@/components'
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
          <Header />

          <SeparatorHorizontal />

          <div className="flex w-full justify-between">
            <IndexAttributesDiv>
              <Attributes />
            </IndexAttributesDiv>

            <ItemsDiv>
              <Armor />

              <Weapons />

              <SeparatorHorizontal />

              <Accessories />
            </ItemsDiv>
          </div>

          <SeparatorHorizontal />

          <div className="flex w-full h-auto">
            <BonusAndPassives />

            <SeparatorVertical />

            <EssentialElement />
          </div>
        </ContainerDiv>
      </main>
    </div>
  )
}

export default Home
