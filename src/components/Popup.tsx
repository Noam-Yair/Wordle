import Box from '@mui/system/Box';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Portal from '@mui/base/Portal';
import { SxProps } from '@mui/system';
import {useState} from "react";

export default function Popup(content: string) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles: SxProps = {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        p: 1,
        bgcolor: 'red',
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                {open ? (
                    <Portal>
                        <Box sx={styles}>
                            {content}
                        </Box>
                    </Portal>
                ) : null}
            </div>
        </ClickAwayListener>
    );
}
