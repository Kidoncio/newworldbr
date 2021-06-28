import { FC } from 'react'
import Image from 'next/image'
import { GemModal } from './../GemModal/index'

import roundShield from '@/public/roundshield.png'

import { GiBroadsword, GiCrystalCluster } from 'react-icons/gi'
import { AiOutlinePlus } from 'react-icons/ai'

import {
  WeaponsDiv,
  WeaponButton,
  ShieldButton,
  GemDiv,
  WeaponSpan,
  WeaponGemDiv,
  WeaponsLabel,
} from './WeaponsStyles'

export const Weapons: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <WeaponsLabel>armas</WeaponsLabel>

      <WeaponsDiv className="flex w-full">
        <ShieldButton>
          <Image src={roundShield} alt="Circular Shield" />
        </ShieldButton>

        <WeaponGemDiv>
          <WeaponSpan>1</WeaponSpan>

          <div>
            <WeaponButton borderColor="#460079" backgroundColor="#B401DA" gradientColor="#4A0064">
              <GiBroadsword size={40} />
            </WeaponButton>

            <GemDiv>
              <span>1365</span>

              <GemModal>
                <GiCrystalCluster size={20} color="#E28E2A" />
              </GemModal>
            </GemDiv>
          </div>
        </WeaponGemDiv>

        <WeaponGemDiv>
          <WeaponSpan>2</WeaponSpan>

          <div>
            <WeaponButton borderColor="#707070" backgroundColor="#5E5E5E" gradientColor="#414141">
              <AiOutlinePlus size={25} color="#9c9b9b" />
            </WeaponButton>

            <GemDiv>
              <span>0</span>

              <GemModal>
                <AiOutlinePlus size={15} color="#9c9b9b" />
              </GemModal>
            </GemDiv>
          </div>
        </WeaponGemDiv>
      </WeaponsDiv>
    </div>
  )
}
