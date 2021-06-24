import { FC } from 'react'
import { BsFileEarmarkText } from 'react-icons/bs'
import { GoFileDirectory } from 'react-icons/go'
import {
  DirectoryDiv,
  SaveButton,
  IconButton,
  AxeDiv,
  NewWorldLogoSVG,
  AxeSpan,
  SeparatorDiv,
  HeaderDiv,
} from './HeaderStyles'

export const Header: FC = () => {
  return (
    <HeaderDiv>
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
    </HeaderDiv>
  )
}
