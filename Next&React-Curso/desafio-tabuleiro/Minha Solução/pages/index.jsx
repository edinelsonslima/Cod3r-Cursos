import styles from '../styles/Tabuleiro.module.css'
import Casa from '../components/Casa'

export default function Home() {
  function gerarTabuleiro() {
    let casa = []
    for(let i = 1; i <= 64; i++) {
      if( i <= 8){
        i % 2 == 0 ? casa.push(<Casa key={i.toString()}/>) :
        casa.push(<Casa impaPar  key={i.toString()}/>)
      } 
      else if (i >= 9 && i <=16){
        i % 2 == 0 ? casa.push(<Casa impaPar key={i.toString()}/>):
        casa.push(<Casa  key={i.toString()}/>)
      }
      else if (i >= 17 && i <=24){
        i % 2 == 0 ? casa.push(<Casa key={i.toString()}/>):
        casa.push(<Casa impaPar key={i.toString()}/>)
      }
      else if (i >= 25 && i <=32){
        i % 2 == 0 ? casa.push(<Casa impaPar key={i.toString()}/>):
        casa.push(<Casa key={i.toString()}/>)
      }
      else if (i >= 33 && i <=40){
        i % 2 == 0 ? casa.push(<Casa key={i.toString()}/>):
        casa.push(<Casa impaPar key={i.toString()}/>)
      }
      else if (i >= 41 && i <=48){
        i % 2 == 0 ? casa.push(<Casa impaPar key={i.toString()}/>):
        casa.push(<Casa key={i.toString()}/>)
      }
      else if (i >= 49 && i <=56){
        i % 2 == 0 ? casa.push(<Casa key={i.toString()}/>):
        casa.push(<Casa impaPar key={i.toString()}/>)
      }
      else if (i >= 57 && i <=64){
        i % 2 == 0 ? casa.push(<Casa impaPar key={i.toString()}/>):
        casa.push(<Casa key={i.toString()}/>)
      }
    }
    return casa
  }

  return (
    <main className={styles.main}>
      <div className={styles.tabuleiro}>
        {gerarTabuleiro()}
      </div>
    </main>
  )
}
