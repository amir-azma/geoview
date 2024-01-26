import { Theme } from '@mui/material';

export const getSxClasses = (theme: Theme) => ({
  enlargeBtn: {
    width: '7rem !important',
    height: '2.5rem !important',
    borderRadius: '1.5rem',
    boxShadow: `0px 3px 6px ${theme.palette.geoViewColors.bgColorDarker}`,
    marginTop: '0.25rem',
    background: `${theme.palette.geoViewColors.enlargeBtnBg} !important`,
    '>div': {
      color: `${theme.palette.primary.main} !important`,
    },
    '& svg': {
      marginRight: '0.25rem',
    },
    ':hover': {
      backgroundColor: `${theme.palette.primary.main} !important`,
      '> div': {
        color: `${theme.palette.common.white} !important`,
      },
      '& svg': {
        color: `${theme.palette.common.white} !important`,
      },
    },
    [theme.breakpoints.down('md')]: { display: 'none' },
  },
  enlargeBtnIcon: {
    color: theme.palette.primary.main,
  },
});
