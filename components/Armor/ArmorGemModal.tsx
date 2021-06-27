import { FC, useState } from 'react'
import { DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import { ButtonModalGem, StyledDialog, CancelButton } from './ArmorStyles'
import { SeparatorHorizontal } from '../../styles/indexStyle'
import { InputHeader, SaveButton } from '../Header/HeaderStyles'
import { GiFireGem } from 'react-icons/gi'

export const ArmorGemModal: FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <ButtonModalGem onClick={() => setOpen(true)}>{children}</ButtonModalGem>

      <StyledDialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">
          <span>ACOPLAR GEMA</span>
        </DialogTitle>

        <div className="separator">
          <SeparatorHorizontal width="90%" />
        </div>

        <DialogContent>
          <div className="flex tier-input-div">
            <InputHeader type="text" placeholder="Buscar por nome" />

            <div className="flex">
              <SaveButton active={true}>tier 1</SaveButton>
              <SaveButton>tier 2</SaveButton>
              <SaveButton>tier 3</SaveButton>
              <SaveButton>tier 4</SaveButton>
            </div>
          </div>

          <div className="flex div-buttons-gems">
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
            <ButtonModalGem>
              <GiFireGem size={20} color="#00CC00" />
            </ButtonModalGem>
          </div>
        </DialogContent>

        <div className="separator">
          <SeparatorHorizontal width="90%" />
        </div>

        <DialogActions>
          <CancelButton onClick={() => setOpen(false)}>Cancelar</CancelButton>
          <SaveButton onClick={() => setOpen(false)}>Acoplar</SaveButton>
        </DialogActions>
      </StyledDialog>
    </>
  )
}
