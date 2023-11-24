class Store {
    constructor(initState = {}) {
        this.state = initState;
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);

        return () => {
            this.listeners = this.listeners.filter(item => item !== listener);
        };
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = newState;

        for (const listener of this.listeners) listener();
    }

    addItem() {
        this.setState({
            ...this.state,
            list: [...this.state.list, {code: this.state.list.length + 1, title: 'Новая запись'}]
        })
    };

    deleteItem(code) {
        this.setState({
            ...this.state,
            list: this.state.list.filter(item => item.code !== code)
        })
    };

    selectedItem(code) {
        this.setState({
            ...this.state,
            list: this.state.list.map(item => {
                if (item.code === code){
                    item.selected = !item.selected;
                }
                return item
            })
        })
    }
}

export default Store;