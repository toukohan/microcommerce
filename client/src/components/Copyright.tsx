import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const Copyright = (props: any) => {
    return (
        <Typography sx={{ marginTop: 2}} variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link to="/">
            toukohan
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }

export default Copyright;