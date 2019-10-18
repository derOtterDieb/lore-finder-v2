import React from 'react'

const Item = ({ item }) => {
    return (
        <div>
            {item.Name}
        </div>
    );
}

const FfxivApiResults = ({ ffxivApiResults }) => {
    console.log(ffxivApiResults);
    return (
        <div>
            {ffxivApiResults.map((item) => (
                <Item key={item.ID} item={item} />
            ))}
        </div>
    );
}

export default FfxivApiResults;