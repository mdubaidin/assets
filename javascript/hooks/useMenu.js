import { useCallback, useState } from 'react';
import MuiMenu from '@mui/material/Menu';

function useMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [payload, setPayload] = useState();

    const openMenu = useCallback(function (e, payload) {
        setAnchorEl(e.currentTarget);
        if (payload) setPayload(payload);
    }, []);

    const closeMenu = useCallback(function () {
        setAnchorEl(null);
    }, []);

    return { anchorEl, openMenu, closeMenu, payload };
}

function Menu(props) {
    const { children, ...rest } = props;

    return (
        <MuiMenu
            // keepMounted
            // getContentAnchorEl={null}
            // anchorOrigin={{
            //     // vertical: "top",
            //     horizontal: "right",
            // }}
            // transformOrigin={{
            //     // vertical: "top",
            //     horizontal: "right",
            // }}

            {...rest}>
            {children}
        </MuiMenu>
    );
}

export { useMenu, Menu };
