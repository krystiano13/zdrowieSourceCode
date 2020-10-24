import React , {useState} from 'react';
import styles from './Calculator.module.scss';

const Calculator = () => {
    const [result,setResult] = React.useState(null);
    const [result2,setResult2] = React.useState(null);

    const handleResetResult =  async () => {
        await setResult(null);
        await setResult2(null);
    }

    const oblicz = (e) => {
        e.preventDefault();
        let waga = e.target[0].value;
        let wzrost = e.target[1].value / 100;
        let bmi = Math.round(waga / Math.pow(wzrost,2));
        setResult(bmi);

        if(bmi < 16) {
            setResult2('Wygłodzenie');
        } else if (bmi >= 16 && bmi <= 17) {
            setResult2('Wychudzenie');
        } else if (bmi > 17 && bmi < 18.5) {
            setResult2('Niedowaga');
        } else if (bmi > 18.5 && bmi <= 25) {
            setResult2('Waga prawidłowa');
        } else if (bmi > 25 && bmi < 30) {
            setResult2('Nadwaga');
        } else if (bmi > 30 && bmi < 35) {
            setResult2('otyłość I stopnia');
        } else if (bmi > 35 && bmi < 40) {
            setResult2('otyłość II stopnia');
        }else if (bmi > 40) {
            setResult2('otyłość III stopnia');
        }
    }

    return (
        <div className={styles.calc}>
            <h2>Oblicz swoje BMI</h2>
            {
                result === null 
                && 
                <>
                <form onSubmit={oblicz}>
                    <input placeholder="Waga(kg)"/>
                    <input placeholder="Wzrost(cm)"/>
                    <button type="submit">Oblicz</button>
                </form>
                </>
            }   
            {
                result !== null 
                &&
                <>
                    <div className={styles.img}>
                        <div className={styles.img1}></div>
                        <div className={styles.img2}></div>
                    </div>
                    <h1>Twoje BMI wynosi : <span>{result}</span></h1>
                    <h3>{result2}</h3>
                    <button onClick={handleResetResult} className={styles.returnButton}>Powrót</button>
                </>
            } 
        </div>
    )
}

export default Calculator;