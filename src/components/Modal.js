import { Modal as MuiModal, IconButton, Typography, useMediaQuery } from '@mui/material'
import { CloseRounded } from '@mui/icons-material'

function Modal({ open, onClose, title = 'Title', children }) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <MuiModal
      open={open}
      onClose={onClose}
      sx={{
        display: 'grid',
        placeItems: 'center',
      }}>
      <div
        className='scroll'
        style={{
          cursor: 'unset',
          maxWidth: '100vw',
          minWidth: isMobile ? '100vw' : '420px',
          width: isMobile ? '100%' : 'fit-content',
          minHeight: isMobile ? '100vh' : '420px',
          maxHeight: isMobile ? '100vh' : '90vh',
          padding: '1rem',
          backgroundColor: 'var(--blue)',
          borderRadius: isMobile ? '0' : '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}>
        <IconButton
          sx={{
            margin: '7px',
            position: 'absolute',
            top: '0',
            right: '0',
            zIndex: '9',
          }}
          onClick={onClose}>
          <CloseRounded color='error' />
        </IconButton>
        <Typography variant='h5'>{title}</Typography>
        {children}
      </div>
    </MuiModal>
  )
}

export default Modal
