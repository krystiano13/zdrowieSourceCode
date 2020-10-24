import React from 'react';
import styles from './Licznik.module.scss';
import products from './products';

class Licznik extends React.Component {
    state = {
        currentItem : null,
        currentKcal : null,
        waga : null,
        kcalAll : null,
        allItems : [],
        all : 0,
        modal : false,
        arr : []
    }
    componentDidMount = () => {
        this.setState({arr : products});
    }
    searchProduct = async (e) => {
        e.persist();
        console.log(e.target.value);
        await this.setState({arr : products});
        let array = this.state.arr;
        let value = e.target.value;
        array = products.filter(x => {
           return x.product.includes(value);
        });
        await this.setState({arr : array});
    }
    handleAddItem = async (e) => {
        e.preventDefault();
        await this.setState({waga : this.state.currentKcal * e.target[0].value});
        await this.setState({kcalAll : Math.ceil(this.state.waga)});
        let arr = this.state.allItems;
        await arr.push({
            name : this.state.currentItem,
            calories : this.state.kcalAll
        })
        let everything = this.state.all;
        everything += this.state.kcalAll;
        await this.setState({all : everything});
        await this.setState({allItems : arr})
    }
    handleGetProduct = async (e) => {
        let id = products.findIndex(x => x.product === e.target.id);
        await this.setState({currentItem : e.target.id});
        await this.setState({currentKcal : products[id].calories1g});
    }
    handleToggleModal = async () => {
        if(this.state.modal === false) {
            await this.setState({modal : true});
        } else {
            await this.setState({modal : false});
        }
    }
    render() {
        return (
            <div className={styles.licznik}>
                <button onClick={this.handleToggleModal} className={styles.formButton}>{this.state.modal === false ? 'Dodaj produkt' : 'Ukryj okno'}</button>
                <h1 className={styles.calTitle}>Licznik Kalorii</h1>
                {
                    this.state.modal !== false &&

                    <div className={styles.form}>
                    <input onChange={this.searchProduct} className={styles.wyszukiwarka} placeholder="Wyszukaj produkt" />
                    <div className={styles.buttons}>
                        {
                            this.state.arr.map(item => (
                                <button
                                    onClick={this.handleGetProduct} 
                                    id={item.product}
                                >
                                    {item.product}
                                </button>
                            ))
                        }
                    </div>
                    <form onSubmit={this.handleAddItem}>
                        <input onChange={this.checkChange} placeholder="waga(g)" />
                        <button type="submit">Dodaj</button>
                    </form>
                    <h1>Nazwa : {this.state.currentItem}</h1>
                    <h1>Kalorie /1g : {this.state.currentKcal}</h1>
                    </div>

                }
                <div className={styles.list}>
                        {
                            this.state.allItems.map(item => (
                                <div>
                                    <h1>{item.name}</h1>
                                    <h2>{item.calories} kcal</h2>
                                </div>
                            ))
                        }
                </div>
                <h1 className={styles.result}>Razem kcal : {this.state.all}</h1>
            </div>
        )
    }
}

export default Licznik;