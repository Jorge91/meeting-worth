import React, { Component } from 'react';
import { ButtonGroup, Button, Grid, Typography } from '@material-ui/core';
import { TITLE } from '../../data/data';


class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
          isOn: false,
          money: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
      }

      componentDidUpdate(prevProps) {
          if ((prevProps.hourCost !== this.props.hourCost) && (this.state.isOn)) {
            this.updateTimer();
          }
        }

      updateTimer() {
        const { hourCost } = this.props;

          clearInterval(this.timer)  
          this.timer = setInterval(() => this.setState({
              money: this.state.money + (hourCost / 3600000)
            }), 1);   
      }  

      startTimer() {
        if (!this.state.isOn) {
            this.setState({
              isOn: true
            })
            this.updateTimer();
        }
        
      }

      stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
      }

      resetTimer() {
        this.setState({money: 0, isOn: false})
      }

    render () {
        return (

            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
                <br/><br/>
                <Typography variant="h2" component="h2">
                  {TITLE}
                </Typography>

                <Typography variant="h1" component="h1">
                  {this.state.money.toFixed(3)} €
                </Typography>
           
                <br/>
                <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                  <Button onClick={this.startTimer}>START</Button>
                  <Button onClick={this.stopTimer}>STOP</Button>
                  <Button onClick={this.resetTimer}>RESTART</Button>
                </ButtonGroup>
            </Grid>
            )
    }
}

export default Counter;