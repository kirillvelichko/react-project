import React from 'react'
import ReactDOM from 'react-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {ruRU} from '@material-ui/core/locale';
import 'typeface-roboto'

const theme = createMuiTheme({
    palette: {
        primary: {main: '#aed581'},
    },
}, ruRU);


const Index = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h3>Парам пам пам</h3>
            </div>
        </ThemeProvider>

    )
};

ReactDOM.render(<Index/>, document.getElementById('root'));