import React from 'react';

const Ths = ({ item }) => {
    var thArr = new Array();

    for (const key in item) {
        thArr.push(key);
    }

    var ths = thArr.map((item, index) => {
        return <th key={index}>{item.toUpperCase()}</th>;
    })

    return (
        <tr>
            {ths}
        </tr>
    );
};

const Tr = ({ item }) => {
    var tdArr = new Array();

    for (const key in item) {
        var d = item[key];
        tdArr.push(<td key={d + key}>{d}</td>);
    }

    return (
        <tr>
            {tdArr}
        </tr>
    );
};

const TBody = ({ items }) => {
    var trs = items.map((item, index) => {
        return <Tr key={index} item={item} />;
    })

    return (
        <tbody>
            {trs}
        </tbody>
    );
};

const DataTable = ({ children, items }) => {
    if (items) {
        var item = items[0];
        var ths = <Ths item={item} />;
        var tBody = <TBody items={items} />;
    }
    return (
        <div className="row">
            {children ? children : null}
            <table className="table table-hover">
                <thead>
                    {ths}
                </thead>
                {tBody}
            </table>
        </div>
    );
};

export default DataTable;