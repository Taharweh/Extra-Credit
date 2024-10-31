function changeSize(action) {
    const header = document.getElementById('myHeader');
    let currentSize = parseFloat(window.getComputedStyle(header, null).getPropertyValue('font-size'));
    
    if (action === 'increase') {
        header.style.fontSize = (currentSize + 2) + 'px'; 
    } else if (action === 'decrease') {
        header.style.fontSize = (currentSize - 2) + 'px'; 
    }
}
