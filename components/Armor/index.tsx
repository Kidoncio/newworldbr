import { FC } from 'react'
import {
  GiShoulderArmor,
  GiCrestedHelmet,
  GiLeatherBoot,
  GiGloves,
  GiFireGem,
} from 'react-icons/gi'
import { AiOutlinePlus } from 'react-icons/ai'
import { ButtonItem, ArmorDiv, ButtonGem, ArmorSpanDiv } from './ArmorStyles'

export const Armor: FC = () => {
  return (
    <ArmorDiv className="flex-col">
      <ArmorSpanDiv className="flex w-full items-center">
        <span>Armadura</span>
      </ArmorSpanDiv>

      <ArmorDiv className="justify-between">
        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#00CC00" backgroundColor="#C0F14E" gradientColor="#008E00">
            <GiCrestedHelmet size={45} />
          </ButtonItem>

          <ButtonGem>
            <GiFireGem size={20} color="#00CC00" />
          </ButtonGem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#00CC00" backgroundColor="#C0F14E" gradientColor="#008E00">
            <GiShoulderArmor size={45} />
          </ButtonItem>

          <ButtonGem>
            <AiOutlinePlus size={15} color="#9c9b9b" />
          </ButtonGem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#1B83AE" backgroundColor="#67EFF7" gradientColor="#00737E">
            <GiLeatherBoot size={45} />
          </ButtonItem>

          <ButtonGem>
            <AiOutlinePlus size={15} color="#9c9b9b" />
          </ButtonGem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#460079" backgroundColor="#B401DA" gradientColor="#4A0064">
            <GiGloves size={45} />
          </ButtonItem>

          <ButtonGem>
            <AiOutlinePlus size={15} color="#9c9b9b" />
          </ButtonGem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#707070" backgroundColor="#5E5E5E" gradientColor="#414141">
            <AiOutlinePlus size={25} color="#9c9b9b" />
          </ButtonItem>

          <ButtonGem>
            <AiOutlinePlus size={15} color="#9c9b9b" />
          </ButtonGem>
        </div>
      </ArmorDiv>
    </ArmorDiv>
  )
}
