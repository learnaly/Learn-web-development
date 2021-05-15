export const FONT_FAMILY = {
    primary: [
        'Montserrat',
        'Helvetica',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Arial',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'sans-serif',
    ].join(','),
    secondary: [
        'Lato',
        'Helvetica',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Montserrat',
        'Arial',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'sans-serif',
    ].join(','),
    tertiary: [
        'Montserrat',
        'Helvetica',
        '"Helvetica Neue"',
        '-apple-system',
        'Arial',
        'sans-serif',
    ].join(','),
};

export const PALETTE = {
    primary: '#304ffe',
    secondary: '#00f67d',
    error: '#D63815',
    warning: '#FFBD2F',
    success: '#15D675',
    info: '#2fbfff',
};

export const BREAKPOINTS = {
    values: {
        xs: 0,
        sm: 600,
        form: 768,
        md: 960,
        lg: 1280,
        lg2: 1440,
        xl: 1920
    },
};

const colors = {
    background: {
        'primary': {
            light: '#fff',
            dark: '#000',
        },
        'secondary': {
            light: '#f9f9f9',
            dark: '#111',
        },
    },
};

export const ALLOWED_THEMES = ['light', 'dark', 'auto'];

export const DEFAULT_THEME = 'light';

export const GetTheme = (options = { theme: 'light' }) => {
    const { theme } = options;

    return {
        palette: {
            type: theme,
            primary: { main: PALETTE.primary },
            secondary: { main: PALETTE.secondary },
            error: { main: PALETTE.error },
            warning: { main: PALETTE.warning },
            info: { main: PALETTE.info },
            background: {
                'primary': colors.background['primary'][theme],
                'secondary': colors.background['secondary'][theme],
            },
        },
        shape: {
            borderRadius: 10,
        },
        breakpoints: BREAKPOINTS,
        typography: {
            fontFamily: FONT_FAMILY.secondary,
            fontSize: 13,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,

            h1: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 30,
                lineHeight: 1.25,
            },
            h2: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 300,
                fontSize: 22,
                lineHeight: 1.55,
            },
            h3: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 26,
                lineHeight: 1.25,
            },
            h4: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 25,
                lineHeight: 1.25,
            },
            h5: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 24,
                lineHeight: 1.25,
            },
            h6: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 19,
                lineHeight: 1.45,
            },
            body1: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 13,
                lineHeight: 1.65,
            },
            body2: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.65,
            },
            caption: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 11,
                lineHeight: 1.05,
            },
            button: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: 1.15,
            },
            overline: {
                fontFamily: FONT_FAMILY.tertiary,
                fontWeight: 400,
                fontSize: 13,
                lineHeight: 1.3,
                letterSpacing: '0.1em',
                textTransform: "uppercase",
            },
            label: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.15,
            },
            text_1: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: 1.25,
            },

            // Label
            subtitle1: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.15,
            },
            // Data
            subtitle2: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 600,
                fontSize: 15,
                lineHeight: 1.55,
            },
        },

        overrides: {
            MuiInputBase: {
                root: {
                    fontSize: '0.85rem',
                },
            },
            MuiFormLabel: {
                root: {
                    opacity: 1,
                },
            },
            MuiPaper: {
                elevation1: {
                    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.08), 0px 2px 1px -1px rgba(0,0,0,0.05)',
                },
                elevation24: {
                    boxShadow: '0px 5px 15px -7px rgb(0 0 0 / 1%), 0px 24px 38px 3px rgb(0 0 0 / 1%), 0px 9px 46px 8px rgb(0 0 0 / 3%)',
                },
            },
            MuiCssBaseline: {
                '@global': {
                    html: {
                        '-webkit-text-size-adjust': '100% !important',
                        overflow: 'auto',
                    },

                    '*': {
                        margin: 0,
                        padding: 0,
                        border: 0,
                        outline: 'none',
                        fontSize: '100%',
                        background: 'transparent',
                        boxSizing: 'border-box',
                        touchAction: 'manipulation',
                    },

                    body: {
                        fontSize: '13px',
                        fontFamily: FONT_FAMILY.secondary,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        position: 'relative',
                        overflowX: 'hidden',
                        backgroundColor: theme !== 'light' ? '#000' : '#fff',
                    },

                    'img, embed, object, video': {
                        maxWidth: '100%',
                        height: 'auto',
                    },

                    ul: {
                        padding: 0,
                        margin: 0,
                    },

                    a: {
                        textDecoration: 'none',
                        cursor: 'pointer',
                    },

                    span: {
                        wordWrap: 'break-word',
                    },

                    hr: {
                        boxSizing: 'content-box',
                        height: '1px',
                        overflow: 'visible',
                        background: '#D8D8D8',
                        width: '100%',
                        margin: '25px 0',
                    },

                    code: {
                        '& span': {
                            whiteSpace: 'pre-wrap',
                        },
                    },

                    ':focus': {
                        outline: 'none',
                    },

                    '.underline': {
                        borderBottom: `2px solid ${PALETTE.secondary}`,
                        paddingBottom: 1,
                    },
                },
            },
        },

        mixins: {
            body: {
                width: '100%',
                maxWidth: BREAKPOINTS.values.lg2,
                margin: '0 auto',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 auto',
                paddingTop: 105,
            },
            main: {
                flex: '1 1 auto',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            },
            button: {
                action: {
                    flex: '0 0 auto',
                    alignSelf: 'center',
                },
                submit: {
                    backgroundColor: '#fff',
                    color: '#333',
                    marginTop: 24,
                    justifySelf: 'center',
                    alignSelf: 'center',
                },
            },
        },

        CONST: {
            side_padding: 40,
        },
    };
};

export default GetTheme;
