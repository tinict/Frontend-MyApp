const CountData = (NameItem) => {
    let key = JSON.parse(window.localStorage.getItem(NameItem));
    if (key === null) return 0;
    else return key.length;
};

export default CountData;