const Item = () => <li>Texto do item</li>

function ComponentesFilhos() {
    return (
        <div>
            <ol>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </ol>
        </div>
    );
}

export default ComponentesFilhos;