import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import { useTranslation } from 'react-i18next';

const HelpPopover: React.FunctionComponent<any> = (props) => {
    const { t } = useTranslation('translations', { keyPrefix: 'fieldHelp'});
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'info-popover' : undefined;

    return (
        <div id={props.id + `-help-button`}>
            <IconButton aria-label="help" color="primary" onClick={handleClick}>
                <HelpIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                style={{whiteSpace: 'pre-wrap'}}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 3 }}>{t(props.popoverContent)}</Typography>
            </Popover>
        </div>
    );
}

export default HelpPopover;