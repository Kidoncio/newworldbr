import { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AccessoriesDiv, AccessoriesSpanDiv, ButtonItem } from './AccessoriesStyles'

export const Accessories: FC = () => {
  return (
    <AccessoriesDiv className="flex-col">
      <AccessoriesSpanDiv className="flex w-full items-center">
        <span>Acessórios</span>
      </AccessoriesSpanDiv>

      <AccessoriesDiv className="justify-between">
        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#707070" backgroundColor="#5E5E5E" gradientColor="#414141">
            <AiOutlinePlus size={25} color="#9c9b9b" />
          </ButtonItem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#707070" backgroundColor="#5E5E5E" gradientColor="#414141">
            <AiOutlinePlus size={25} color="#9c9b9b" />
          </ButtonItem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#707070" backgroundColor="#5E5E5E" gradientColor="#414141">
            <AiOutlinePlus size={25} color="#9c9b9b" />
          </ButtonItem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#707070" backgroundColor="#5E5E5E" gradientColor="#414141">
            <AiOutlinePlus size={25} color="#9c9b9b" />
          </ButtonItem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#707070" backgroundColor="#5E5E5E" gradientColor="#414141">
            <AiOutlinePlus size={25} color="#9c9b9b" />
          </ButtonItem>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ButtonItem borderColor="#707070" backgroundColor="#5E5E5E" gradientColor="#414141">
            <AiOutlinePlus size={25} color="#9c9b9b" />
          </ButtonItem>
        </div>
      </AccessoriesDiv>
    </AccessoriesDiv>
  )
}
