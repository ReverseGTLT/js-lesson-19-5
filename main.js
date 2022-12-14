function generateList(array){
    const list = document.createElement('ul');
    array.forEach((item) => {
        if (!Array.isArray(item)) {
            const listItem = document.createElement('li');
            listItem.innerText = `${item}`;
            list.append(listItem);
        } else {
            const listItem = document.createElement('li');
            const sublist = document.createElement('ul');
            list.append(listItem);
            listItem.append(sublist);
            item.forEach((value) => {
                const sublistItem = document.createElement('li');
                sublistItem.innerText = `${value}`;
                sublist.append(sublistItem)
            })
        }
    })
    document.body.append(list)
}

const arrHeader = [1, 2, 3];
const arrFooter = [1, 2, [1.1, 1.2, 1.3], 3];

generateList(arrHeader);
generateList(arrFooter);