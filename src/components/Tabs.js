// <Link to="/"><i className="fa fa-home fa-2x" aria-hidden="true"></i></Link>
// <Link to="/about"><i className="fa fa-info fa-2x" aria-hidden="true"></i></Link>
// <Link to="/projects"><i className="fa fa-product-hunt fa-2x" aria-hidden="true"></i></Link>
// <Link to="/tech"><i className="fa fa-language fa-2x" aria-hidden="true"></i></Link>
// <Link to="/resume"><i className="fa fa-file-text fa-2x" aria-hidden="true"></i></Link>
// <a target="_blank" href="https://www.linkedin.com/in/joel-legg-279a5b58/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
// <a href="mailto:joellegg@bellsouth.net"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
// <a target="_blank" href="https://github.com/joellegg"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

// Views 
import About from './About';
import Projects from './Projects';
// import Contact from './Contact';

// CSS 
import '../css/Tabs.css';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="absolute" color="default" className="header">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="About" />
                        <Tab label="Projects" />
                        <Tab label="Contact" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <About />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <Projects />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);