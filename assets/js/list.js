const gridButton = document.getElementById('grid');
const blockButton = document.getElementById('block');
const productList = document.getElementById('list-product');

gridButton.addEventListener('click', function() {
    // Mengubah class names untuk tampilan "grid"
    productList.classList.remove('wrapper-list-products');
    productList.classList.add('wrapper-list-products-block');

    const childProductBlocks = document.querySelectorAll('.child-product');
    const childLeftBlocks = document.querySelectorAll('.child-product-left');
    const childRightBlocks = document.querySelectorAll('.child-product-right');

    childProductBlocks.forEach(function(element) {
        element.classList.remove('child-product');
        element.classList.add('child-product-block');
    });

    childLeftBlocks.forEach(function(element) {
        element.classList.remove('child-product-left');
        element.classList.add('child-product-left-block');
    });

    childRightBlocks.forEach(function(element) {
        element.classList.remove('child-product-right');
        element.classList.add('child-product-right-block');
    });
});

blockButton.addEventListener('click', function() {
    // Mengubah class names untuk tampilan "block"
    productList.classList.remove('wrapper-list-products-block');
    productList.classList.add('wrapper-list-products');

    const childProductBlock = document.querySelectorAll('.child-product-block');
    const childProductLeftBlock = document.querySelectorAll('.child-product-left-block');
    const childProductRightBlock = document.querySelectorAll('.child-product-right-block');

    childProductBlock.forEach(function(element) {
        element.classList.remove('child-product-block');
        element.classList.add('child-product');
    });

    childProductLeftBlock.forEach(function(element) {
        element.classList.remove('child-product-left-block');
        element.classList.add('child-product-left');
    });

    childProductRightBlock.forEach(function(element) {
        element.classList.remove('child-product-right-block');
        element.classList.add('child-product-right');
    });
});
