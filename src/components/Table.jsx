import React from 'react';

class  Table extends React.Component {
    constructor(props) {
        super(props);
        this.list = this.props.data;
        this.array = [];
        this.trimList = [];
        this.state = {
            id: true,
            name: true,
            value: true,
            pagination: 1,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    handleKeyPress(e) { //filtering by value column
        if (e.key === 'Enter') {
            this.list = this.props.data;
            this.list = this.list.filter(item => {
                return item.value == parseInt(e.target.value);
            });
            if (e.target.value === '') {
              this.list = this.props.data;  
            }
        }
        this.setState({pagination: 1});
    }

    handleClick(name) { //sorting in descending and ascending order
        function sortByName(array, param, option) {
            return array.sort((a, b) => {
                if (a[param] > b[param]) {
                    if (option === true) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
                if (a[param] < b[param]) {
                    if (option === true) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
                return 0;
            })
        }
        if (name === 'id') {
            this.setState({id: !this.state.id});
            this.list = sortByName(this.list, name, this.state.id);
        }
        if (name === 'name') {
            this.setState({name: !this.state.name});
            this.list = sortByName(this.list, name, this.state.name);
        }
        if (name === 'value') {
            this.setState({value: !this.state.value});
            this.list = sortByName(this.list, name, this.state.value);
        }
    }

    changePage(item) {
        this.setState({pagination: item});
    }
    
    render() {
        let countTd = 50; // maximum number of lines
        let first = this.state.pagination * countTd - countTd;
        let second = first + countTd;
        this.array = [];
        for (let i = 0; i < this.list.length / countTd; i++) {
            this.array[i] = i + 1;
        }
        this.trimList = this.list.filter((item, index)=> {
            if (index >= first && index < second) {
                return true;
            }
            return false;
        })
        return (
            <>
                <h1>Table</h1>
                <div>
                    <div class="form-group col-sm-10">
                        <label for="exampleInputEmail1">Filter by value</label>
                        <input type="value" class="form-control" placeholder="Enter value" onKeyPress={this.handleKeyPress} />
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" onClick={(e) => this.handleClick('id', e)}>ID</th>
                                <th scope="col" onClick={(e) => this.handleClick('name', e)}>Name</th>
                                <th scope="col" onClick={(e) => this.handleClick('value', e)}>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.trimList.map((item, index) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.value}</td>
                                </tr>
                            ))
                        }
                        </tbody >
                    </table>
                </div>
                <ul class="pagination pagination-lg">
                    {
                        this.array.map(item => (
                            <li key={item.toString()} class={"page-item" + (item === this.state.pagination ? ' disabled' : '')} onClick={(e) => this.changePage(item, e)}><a class="page-link" href="#">{item}</a></li>
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default Table;
