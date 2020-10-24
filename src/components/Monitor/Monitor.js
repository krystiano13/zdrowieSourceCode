import React from 'react';
import styles from './Monitor.module.scss';

class Monitor extends React.Component {
    state = {
        region : 'worldwide',
        worldStats : {
            TotalConfirmed : null,
            TotalDeaths : null,
            NewConfirmed : null,
            NewDeaths : null
        },
        viewStats : {
            tc : null,
            td : null,
            nc : null,
            nd : null
        },
        test : [],
        test2 : null,
        country : 'Wybierz kraj lub zobacz dane z całego świata',
    }
    handleChooseWorld = async () => {
        this.setState({region : 'worldwide'});
        this.setState({country : 'Global'});
        await fetch('https://api.covid19api.com/summary')
            .then(response => {
                return response.json();
            })
            .then(data => {        
                this.setState({worldStats : {
                    TotalConfirmed : data.Global.TotalConfirmed,
                    NewConfirmed : data.Global.NewConfirmed,
                    TotalDeaths : data.Global.TotalDeaths,
                    NewDeaths : data.Global.NewDeaths   
                }}); 
            })
            this.setState({viewStats : {
                tc : this.state.worldStats.TotalConfirmed,
                td : this.state.worldStats.TotalDeaths,
                nc : this.state.worldStats.NewConfirmed,
                nd : this.state.worldStats.NewDeaths
            }})
    }
    handleChooseCountry = () => {
        this.setState({region : 'countries'});
    }
    handleSearchForCountry = (e) => {
        let id = e.target.id;
        fetch('https://api.covid19api.com/summary')
            .then(response => {
                return response.json();
            })
            .then(data => {
                let country;
                country = data.Countries.findIndex(x => x.Country === id);
                this.setState({worldStats : {
                    TotalConfirmed : data.Countries[country].TotalConfirmed,
                    NewConfirmed : data.Countries[country].NewConfirmed,
                    TotalDeaths : data.Countries[country].TotalDeaths,
                    NewDeaths : data.Countries[country].NewDeaths   
                }}); 
                this.setState({viewStats : {
                    tc : this.state.worldStats.TotalConfirmed,
                    td : this.state.worldStats.TotalDeaths,
                    nc : this.state.worldStats.NewConfirmed,
                    nd : this.state.worldStats.NewDeaths
                }});
                this.setState({country :  data.Countries[country].Country});
                this.setState({region : 'worldwide'});
            })
    }
    componentDidMount = () => {
        this.GetWorldData();
    }
    GetWorldData = () => {
        fetch('https://api.covid19api.com/summary')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);    
                this.setState({worldStats : {
                    TotalConfirmed : data.Global.TotalConfirmed,
                    NewConfirmed : data.Global.NewConfirmed,
                    TotalDeaths : data.Global.TotalDeaths,
                    NewDeaths : data.Global.NewDeaths   
                }}); 
                let arr = [...this.state.test];
                arr = [...data.Countries];
                this.setState({test : arr})
                console.log(arr);
                this.setState({test2 : this.state.test[0].Date});
            })

    }
    render() {
        return (
            <div className={styles.Monitor}>
                <div className={styles.choose}>
                    <button className={this.state.region !== 'worldwide' ? styles.b1Black : styles.b1} onClick={this.handleChooseWorld}>Cały Świat</button>
                    <button className={this.state.region !== 'worldwide' ? styles.b2Black : styles.b2} onClick={this.handleChooseCountry}>Wybierz kraj</button>
                </div>
                <h1 className={styles.country}>{this.state.country}</h1>
                <div className={this.state.region !== 'worldwide' ? styles.dataBlack : styles.data}>
                    <div className={styles.dataElement}>
                        <div className={styles.image2}></div>
                        <h1 className={styles.title}>Zakażeń dziś</h1>
                        <h1 className={styles.title2}>{this.state.viewStats.nc}</h1>
                    </div>
                    <div className={styles.dataElement}>
                        <div className={styles.image}></div>
                        <h1 className={styles.title}>Zgonów dziś</h1>
                        <h1 className={styles.title2}>{this.state.viewStats.nd}</h1>
                    </div>
                    <div className={styles.dataElement}>
                        <div className={styles.image}></div>
                        <h1 className={styles.title}>Zgonów Ogółem</h1>
                        <h1 className={styles.title2}>{this.state.viewStats.td}</h1>
                    </div>
                    <div className={styles.dataElement}>
                        <div className={styles.image2}></div>
                        <h1 className={styles.title}>Zakażeń Ogółem</h1>
                        <h1 className={styles.title2}>{this.state.viewStats.tc}</h1>
                    </div>
                    
                </div>
                {
                    this.state.region !== 'worldwide' &&
                        <div className={styles.modal}>
                        {
                            this.state.test.map(item => (
                                <button onClick={this.handleSearchForCountry} id={item.Country}>{item.Country}</button>
                            ))
                        }
                        </div>
                }
               
            </div>
        )
    }
}

export default Monitor;