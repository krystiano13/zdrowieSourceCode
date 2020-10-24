import React, { useEffect } from 'react';
import styles from './HomePage.module.scss';
import gsap from 'gsap';
import { useHistory } from "react-router-dom";

const HomePage = () => {
    
    const svg = React.useRef(null);
    const elements = React.useRef(null);
    const history = useHistory();

    const handleNavigate = () => {
        history.push("/zdrowie/content");
    }

    useEffect(() => {
        const [logo] = svg.current.children;
        const header = elements.current.children[0];
        const startButton = elements.current.children[1];
        const svg1 = logo.querySelector('#s1');
        const svg2 = logo.querySelector('#s2');
        const svg3 = logo.querySelector('#s3');
        const svg4 = logo.querySelector('#s4');
        const svg5 = logo.querySelector('#s5');
        const svg6 = logo.querySelector('#s6');
        const svg7 = logo.querySelector('#s7');
        const tl = gsap.timeline();

        tl.set([svg1,svg2,svg3,svg4,svg5,svg6,svg7,header,startButton],{opacity : 0})
            .set(header,{opacity : 0,x : 50})
            .set(startButton,{opacity : 0,x : 50})
            .fromTo(svg4,0.6,{opacity : 0, x : -50},{opacity : 1,x:0},"+=1")
            .fromTo(svg5,0.6,{opacity : 0, y : -50},{opacity : 1,y:0})
            .to(svg6,0.6,{opacity : 1})
            .to(svg7,0.6,{opacity : 1})
            .to(svg1,0.6,{opacity : 1})
            .to(svg3,0.6,{opacity : 1})
            .to(svg2,0.6,{opacity : 1})
            .to(header,0.6,{opacity : 1,x : 0})
            .to(startButton,0.6,{opacity : 1,x : 0})

    })

    return (
        <div className={styles.HomePage}>
            <div className={styles.logo}>
                <svg ref={svg} id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g>
                        <path id="s1" d="m336.86 394.055v.01l124.28-45.94c19.53-7.592 40.86 6.789 40.86 27.97 0 11.98-7.02 22.32-17.17 27.13-2 .94-148.83 72.87-208.83 72.87-80 0-100-40-180-40v-120c24.08 0 56-38.5 107.15-9.73l48.28 27.16c3 1.69 6.37 2.57 9.81 2.57h64.76c16.57 0 30 13.43 30 30 0 12.74-7.94 23.62-19.14 27.96z" fill="#fce8d0"/>
                        <path id="s2" d="m406.1 35.905c62.39 0 147.88 96.85-69.98 240.19-218.23-143.59-131.86-240.19-69.97-240.19 46.46 0 69.97 40.19 69.97 40.19s23.51-40.19 69.98-40.19z" fill="#ff7b79"/>
                        <path id="s3" d="m96 456.095h-86v-140h86z" fill="#eefaff"/>
                        </g>
                    <g>
                        <path id="s4" d="m10 466.095h86c5.522 0 10-4.477 10-10v-9.773c32.327 1.478 53.74 10.04 76.286 19.058 25.461 10.185 51.788 20.715 93.714 20.715 18.417 0 45.751-6.193 81.245-18.407 5.223-1.797 7.999-7.487 6.202-12.709-1.798-5.223-7.49-8-12.71-6.202-33.395 11.491-58.54 17.318-74.737 17.318-38.074 0-61.492-9.367-86.286-19.285-23.373-9.349-47.485-18.984-83.714-20.502v-101.601c6.41-1.66 12.868-4.598 19.57-7.657 19.712-8.996 42.054-19.195 72.677-1.97l48.274 27.158c4.479 2.523 9.569 3.857 14.719 3.857h64.76c11.028 0 20 8.972 20 20 0 8.19-5.125 15.68-12.786 18.648-2.29.897-4.717 1.352-7.214 1.352h-101.66c-5.522 0-10 4.477-10 10s4.478 10 10 10h101.66c4.863 0 9.609-.875 14.086-2.574.08-.027.161-.046.241-.076 0 0 124.383-45.979 124.435-46 2.307-.896 4.742-1.351 7.238-1.351 11.028 0 20 8.972 20 20 0 7.694-4.495 14.796-11.429 18.082-1.711.825-3.425 1.656-6.734 3.232l-2.893-5.786c-2.47-4.94-8.481-6.942-13.416-4.472-4.94 2.47-6.942 8.477-4.473 13.417l2.656 5.313c-6.546 3.004-13.987 6.363-22.123 9.943-5.055 2.225-7.35 8.126-5.124 13.181 2.228 5.063 8.133 7.345 13.181 5.125 19.672-8.658 32.69-14.799 47.467-21.867 13.904-6.589 22.888-20.785 22.888-36.167 0-22.056-17.944-40-40-40-4.954 0-9.798.9-14.399 2.677l-92.193 34.079c.385-2.211.592-4.469.592-6.756 0-22.056-17.944-40-40-40h-64.76c-1.718 0-3.413-.443-4.907-1.285l-48.28-27.161c-39.484-22.208-69.136-8.674-90.786 1.206-8.512 3.885-15.862 7.24-21.267 7.24h-86c-5.522 0-10 4.477-10 10v140c0 5.523 4.478 10 10 10zm10-140h66v120h-66z"/>
                        <path id="s5" d="m330.623 284.449c1.669 1.097 3.582 1.646 5.497 1.646 1.914 0 3.829-.549 5.496-1.646 146.687-96.511 151.52-167.922 141.344-201.899-11.136-37.188-47.095-56.645-76.86-56.645-35.159 0-58.396 20.093-69.979 33.486-11.582-13.393-34.817-33.486-69.97-33.486-29.732 0-65.668 19.49-76.824 56.742-10.17 33.954-5.335 105.322 141.296 201.802zm-122.138-196.064c8.263-27.591 35.878-42.479 57.665-42.479 39.883 0 60.446 33.742 61.352 35.263 1.797 3.053 5.075 4.927 8.618 4.927 3.553 0 6.838-1.885 8.632-4.951.206-.353 21.079-35.239 61.348-35.239 21.819 0 49.457 14.854 57.701 42.382 6.816 22.762 7.731 85.058-127.681 175.805-135.357-90.715-134.446-152.964-127.635-175.708z"/>
                        <path id="s6" d="m296 166.095h30v30c0 5.523 4.478 10 10 10s10-4.477 10-10v-30h30c5.522 0 10-4.477 10-10s-4.478-10-10-10h-30v-30c0-5.523-4.478-10-10-10s-10 4.477-10 10v30h-30c-5.522 0-10 4.477-10 10s4.478 10 10 10z"/>
                        <circle id="s7" cx="396" cy="442.095" r="10"/>
                        </g>
                    </g>
                </svg>
            </div>
            <div ref={elements} className={styles.element}>
                <div className={styles.header}>
                    <h1>ZDROWIE</h1>
                    <div className={styles.threeSquares}>
                        <div className={styles.square}></div>
                        <div className={styles.square}></div>
                        <div className={styles.square}></div>
                    </div>
                </div>
                <button onClick={handleNavigate} className={styles.startButton}>Dalej</button>
            </div>
            <p>2020 Krystian Zieja</p>
        </div>
    )
}

export default HomePage;


