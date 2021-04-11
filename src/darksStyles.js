const darkstyles = `
    html {
        background-color: #181a1b !important;
    }
    html, body, input, textarea, select, button {
        background-color: #181a1b;
    }
    html, body, input, textarea, select, button {
        border-color: #736b5e;
        color: #e8e6e3;
    }
    a {
        color: #3391ff;
    }
    table {
        border-color: #545b5e;
    }
    ::placeholder {
        color: #b2aba1;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        background-color: #555b00 !important;
        color: #e8e6e3 !important;
    }
    ::-webkit-scrollbar {
        background-color: #202324;
        color: #aba499;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #454a4d;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #575e62;
    }
    ::-webkit-scrollbar-thumb:active {
        background-color: #484e51;
    }
    ::-webkit-scrollbar-corner {
        background-color: #181a1b;
    }
    ::selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }
    ::-moz-selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }

    /* Invert Style */
    .jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, embed[type="application/pdf"] {
        filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
    }

    /* Variables Style */
    :root {
    --darkreader-neutral-background: #131516;
    --darkreader-neutral-text: #d8d4cf;
    --darkreader-selection-background: #004daa;
    --darkreader-selection-text: #e8e6e3;
    }

    /* Modified CSS */
    .card {
        border-color: rgb(140, 130, 115);
    }
    .circleGreen {
        background-image: initial;
        background-color: rgb(80, 152, 42);
    }
    .circleRed {
        background-image: initial;
        background-color: rgb(168, 45, 33);
    }
    .circleGray {
        background-image: initial;
        background-color: rgb(79, 85, 89);
    }
    .main-btn {
        color: rgb(232, 230, 227);
        border-color: rgb(140, 130, 115);
    }
    .gender,
    .status-form {
        border-color: rgb(140, 130, 115);
    }
    .gender p,
    .status-form p {
        color: rgb(148, 62, 229);
    }
    .status-form {
        border-color: rgb(84, 91, 94);
    }
    a {
        text-decoration-color: initial;
    }
    .link {
        border-color: rgb(140, 130, 115);
        color: rgb(232, 230, 227);
    }
    .input {
        border-color: rgb(116, 108, 95);
        color: rgb(232, 230, 227);
    }
    .btn {
        border-color: initial;
        outline-color: initial;
        background: black;
    }
    .App-header {
        background-color: rgb(32, 35, 42);
        color: rgb(232, 230, 227);
    }
    .App-link {
        color: rgb(95, 217, 251);
    }
    .MuiSvgIcon-root {
        fill: currentcolor;
    }
    .MuiSvgIcon-colorPrimary {
        color: rgb(109, 149, 204);
    }
    .MuiSvgIcon-colorSecondary {
        color: rgb(255, 33, 112);
    }
    .MuiSvgIcon-colorAction {
        color: rgba(232, 230, 227, 0.54);
    }
    .MuiSvgIcon-colorError {
        color: rgb(245, 78, 66);
    }
    .MuiSvgIcon-colorDisabled {
        color: rgba(232, 230, 227, 0.26);
    }
    .MuiTouchRipple-child {
        background-color: currentcolor;
    }
    .MuiButtonBase-root {
        color: inherit;
        border-color: initial;
        outline-color: initial;
        text-decoration-color: initial;
        background-color: transparent;
        -webkit-tap-highlight-color: transparent;
    }
    .MuiPaginationItem-root {
        color: rgba(232, 230, 227, 0.87);
    }
    .MuiPaginationItem-page:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
    .MuiPaginationItem-page.Mui-focusVisible {
        background-color: rgba(0, 0, 0, 0.12);
    }
    .MuiPaginationItem-page.Mui-selected {
        background-color: rgba(0, 0, 0, 0.08);
    }
    .MuiPaginationItem-page.Mui-selected:hover,
    .MuiPaginationItem-page.Mui-selected.Mui-focusVisible {
        background-color: rgba(0, 0, 0, 0.12);
    }
    .MuiPaginationItem-page.Mui-selected.Mui-disabled {
        color: rgba(232, 230, 227, 0.26);
        background-color: rgba(0, 0, 0, 0.08);
    }
    @media (hover: none) {
        .MuiPaginationItem-page.Mui-selected:hover,
        .MuiPaginationItem-page.Mui-selected.Mui-focusVisible {
            background-color: rgba(0, 0, 0, 0.08);
        }
    }
    @media (hover: none) {
        .MuiPaginationItem-page:hover {
            background-color: transparent;
        }
    }
    .MuiPaginationItem-textPrimary.Mui-selected {
        color: rgb(232, 230, 227);
        background-color: rgb(50, 65, 145);
    }
    .MuiPaginationItem-textPrimary.Mui-selected:hover,
    .MuiPaginationItem-textPrimary.Mui-selected.Mui-focusVisible {
        background-color: rgb(38, 50, 127);
    }
    .MuiPaginationItem-textPrimary.Mui-selected.Mui-disabled {
        color: rgba(232, 230, 227, 0.26);
    }
    @media (hover: none) {
        .MuiPaginationItem-textPrimary.Mui-selected:hover,
        .MuiPaginationItem-textPrimary.Mui-selected.Mui-focusVisible {
            background-color: rgb(50, 65, 145);
        }
    }
    .MuiPaginationItem-textSecondary.Mui-selected {
        color: rgb(232, 230, 227);
        background-color: rgb(196, 0, 70);
    }
    .MuiPaginationItem-textSecondary.Mui-selected:hover,
    .MuiPaginationItem-textSecondary.Mui-selected.Mui-focusVisible {
        background-color: rgb(158, 14, 78);
    }
    .MuiPaginationItem-textSecondary.Mui-selected.Mui-disabled {
        color: rgba(232, 230, 227, 0.26);
    }
    @media (hover: none) {
        .MuiPaginationItem-textSecondary.Mui-selected:hover,
        .MuiPaginationItem-textSecondary.Mui-selected.Mui-focusVisible {
            background-color: rgb(196, 0, 70);
        }
    }
    .MuiPaginationItem-outlined {
        border-color: rgba(140, 130, 115, 0.23);
    }
    .MuiPaginationItem-outlined.Mui-selected.Mui-disabled {
        border-color: rgba(140, 130, 115, 0.12);
    }
    .MuiPaginationItem-outlinedPrimary.Mui-selected {
        color: rgb(109, 149, 204);
        border-color: rgba(47, 60, 135, 0.5);
        background-color: rgba(50, 65, 145, 0.12);
    }
    .MuiPaginationItem-outlinedPrimary.Mui-selected:hover,
    .MuiPaginationItem-outlinedPrimary.Mui-selected.Mui-focusVisible {
        background-color: rgba(50, 65, 145, 0.16);
    }
    .MuiPaginationItem-outlinedPrimary.Mui-selected.Mui-disabled {
        color: rgba(232, 230, 227, 0.26);
    }
    @media (hover: none) {
        .MuiPaginationItem-outlinedPrimary.Mui-selected:hover,
        .MuiPaginationItem-outlinedPrimary.Mui-selected.Mui-focusVisible {
            background-color: transparent;
        }
    }
    .MuiPaginationItem-outlinedSecondary.Mui-selected {
        color: rgb(255, 33, 112);
        border-color: rgba(182, 0, 64, 0.5);
        background-color: rgba(196, 0, 70, 0.12);
    }
    .MuiPaginationItem-outlinedSecondary.Mui-selected:hover,
    .MuiPaginationItem-outlinedSecondary.Mui-selected.Mui-focusVisible {
        background-color: rgba(196, 0, 70, 0.16);
    }
    .MuiPaginationItem-outlinedSecondary.Mui-selected.Mui-disabled {
        color: rgba(232, 230, 227, 0.26);
    }
    @media (hover: none) {
        .MuiPaginationItem-outlinedSecondary.Mui-selected:hover,
        .MuiPaginationItem-outlinedSecondary.Mui-selected.Mui-focusVisible {
            background-color: transparent;
        }
    }
    .MuiPagination-ul {
        list-style-image: initial;
    }

    /* Override Style */
    .vimvixen-hint {
        background-color: #7b5300 !important;
        border-color: #d8b013 !important;
        color: #f3e8c8 !important;
    }
    ::placeholder {
        opacity: 0.5 !important;
    }
    a[href="https://coinmarketcap.com/"] > svg[width="94"][height="16"] > path {
        fill: var(--darkreader-neutral-text) !important;
    }
    #edge-translate-panel-body {
        color: var(--darkreader-neutral-text) !important;
    }
`;
export default darkstyles;
