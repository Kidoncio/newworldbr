import React from 'react'
import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {
  ContainerDiv,
  SeparatorHorizontal,
  ItemsDiv,
  WeaponsDiv,
  WeaponButton,
  ShieldButton,
  GemDiv,
  WeaponSpan,
  WeaponGemDiv,
  SeparatorVertical,
} from '@/styles/indexStyle'
import { Attributes, Armor, Header, BonusAndPassives, EssentialElement } from '@/components'
import { GiBroadsword, GiCrystalCluster } from 'react-icons/gi'
import { AiOutlinePlus } from 'react-icons/ai'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import roundshield from '@/public/roundshield.png'
import { ButtonGem } from '@/components/Armor/ArmorStyles'

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
            <Attributes />

            <ItemsDiv>
              <Armor />

              <div className="flex flex-col w-full">
                <span style={{ marginBottom: '1rem' }}>armas</span>
                <WeaponsDiv className="flex w-full">
                  <ShieldButton>
                    <Image src={roundshield} alt="Circular Shield" />
                  </ShieldButton>

                  <WeaponGemDiv>
                    <WeaponSpan>1</WeaponSpan>

                    <div>
                      <WeaponButton
                        borderColor="#460079"
                        backgroundColor="#B401DA"
                        gradientColor="#4A0064"
                      >
                        <GiBroadsword size={40} />
                      </WeaponButton>

                      <GemDiv>
                        <span>1365</span>
                        <ButtonGem>
                          <GiCrystalCluster size={20} color="#E28E2A" />
                        </ButtonGem>
                      </GemDiv>
                    </div>
                  </WeaponGemDiv>

                  <WeaponGemDiv>
                    <WeaponSpan>2</WeaponSpan>

                    <div>
                      <WeaponButton
                        borderColor="#707070"
                        backgroundColor="#5E5E5E"
                        gradientColor="#414141"
                      >
                        <AiOutlinePlus size={25} color="#9c9b9b" />
                      </WeaponButton>
                      <GemDiv>
                        <span>0</span>
                        <ButtonGem>
                          <AiOutlinePlus size={15} color="#9c9b9b" />
                        </ButtonGem>
                      </GemDiv>
                    </div>
                  </WeaponGemDiv>
                </WeaponsDiv>
              </div>
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
