const BaseStyles = {};

BaseStyles.ReactBash = {
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '\'Inconsolata\', monospace',
    fontSize: 'calc(10px + 1vmin)',
    fontWeight: '400',
    height: '100%',
    overflow: 'hidden',
    textAlign: 'left',
};

BaseStyles.body = {
    flexGrow: 1,
    overflowY: 'scroll',
    padding: '10px',
};

BaseStyles.form = {
    display: 'flex',
};

BaseStyles.input = {
    background: '#1a0000',
    border: 'none',
    color: 'inherit',
    flexGrow: '.4',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    outline: 'none',
    padding: 0,
};

BaseStyles.prefix = {
    marginRight: '5px',
};

export default {

    dark: Object.assign({}, BaseStyles, {
        body: Object.assign({}, BaseStyles.body, {
            backgroundColor: '#000',
            color: '#d0d0d0',
        }),
        header: Object.assign({}, BaseStyles.header, {
            backgroundColor: '#dcdbdb',
        }),
        prefix: Object.assign({}, BaseStyles.prefix, {
            color: '#00FF66',
        }),
    }),
};
