import { Component } from 'react'

import { ContainerApp, ContainerTimer, Content, BoxTimer, BoxButtons, Button, } from './style.js'
import sound from '../../shared/sound/tic-tac.mp3'
import ReactAudioPlayer from 'react-audio-player'
import { Pendulum } from '../Pendulum'


export class Timer extends Component {

   state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      stop: true,
      animation: '',
      textButton: 'Start',
      opacity: 1
   }

   /** conta os segundos, minutos e horas */
   timer = () => {
      this.timerInterval = setInterval(() => {
         this.setState({
            seconds: this.state.seconds < 59
               ? this.state.seconds + 1
               : 0

            , minutes: this.state.minutes === 59
               ? 0
               : this.state.seconds === 59
                  ? this.state.minutes + 1
                  : this.state.minutes

            , hours: this.state.minutes === 59
               ? this.state.hours + 1
               : this.state.hours
         })
      }, 1000)
   }

   start = () => {

      /** inicia o timer, o som e o pêndulo */
      if (this.state.stop) {
         this.timer()
         this.rap.audioEl.current.play()
         this.setState({ stop: false, textButton: 'Pausar', animation: 'time', opacity: 0.8 })

         /** pausa o timer, o som e o pêndulo */
      } else {
         clearInterval(this.timerInterval)
         this.rap.audioEl.current.pause()
         this.setState({ stop: true, textButton: 'Iniciar', animation: '', opacity: 1 })
      }
   }

   /** reseta o timer, pausa o som e o pêndulo */
   reset = () => {
      clearInterval(this.timerInterval)
      this.rap.audioEl.current.pause()
      this.setState({ seconds: 0, minutes: 0, hours: 0, stop: true, textButton: 'Iniciar', animation: '', opacity: 1 })
   }

   /** formatar as horas */
   formatTime = () => {
      const time =
         `${this.state.hours < 10 ? '0' + this.state.hours : this.state.hours}`
         + ':' +
         `${this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes}`
         + ':' +
         `${this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}`

      return time
   }

   componentDidMount() {
      document.title = '| My timer'
   }

   componentDidUpdate() {
      document.title = '| ' + this.formatTime()
   }

   render() {
      return (
         <ContainerApp opacity={this.state.opacity}>

            <Pendulum animation={this.state.animation} />
            <ReactAudioPlayer
               ref={(element) => { this.rap = element }}
               src={sound}
               loop
            />
            <ContainerTimer>
               <BoxTimer>
                  <Content>
                     <h1>{this.formatTime()}</h1>
                  </Content>

                  <BoxButtons>
                     <Button onClick={() => this.start()}>{this.state.textButton}</Button>
                     <Button onClick={() => this.reset()}>Reset</Button>
                  </BoxButtons>
               </BoxTimer>

            </ContainerTimer>
         </ContainerApp>
      )
   }
}