
            // html element objects for dom manipulation
            // cart manipulation elements
            let cartIcon = document.querySelector('.shoppingCart');
            let cartIconMobile = document.querySelector('.shoppingCartMobile');
            let emptyCart = document.querySelector('.cartItems');
            let fullCart = document.querySelector('.cartItemsFull');
            let addToCartBtn = document.querySelector('#addToCartBtn');
            let shoppingCartItemNumbers = document.querySelectorAll('.shoppingCartItemNumbers');
            let deleteBtn = document.querySelector('#deleteBtn');
            // mobile menu/nav manipulation elements
            let openBtn = document.querySelector('#openMenuBtn');
            let nav = document.querySelector('.mobileNav');
            let closeBtn = document.querySelector('.closeBtn');
            // lightbox manipulation elements
            let shadowContainer = document.querySelector('.shadowContainer');
            let thumbnails = document.querySelector('.thumbnailsection')
            let lightBox = document.querySelector('.lightBox');
            let closeLightBox = document.querySelector('#closeLightBox');
            // slideshow manipulation elements
            let leftBtn = document.querySelectorAll('.nextBtnLeft');
            let rightBtn = document.querySelectorAll('.nextBtnRight');  
            let showimage = document.querySelectorAll('.productImg');
            let imageThumbnails = document.querySelectorAll('.imgThumbnail')
            let imageSources = 
            ["./images/image-product-1.jpg",
            './images/image-product-2.jpg',
            './images/image-product-3.jpg',
            './images/image-product-4.jpg'
            ] 
            // cart items manipulation elements
            let plusBtn = document.querySelector('#plusBtn');
            let minusBtn = document.querySelector('#minusBtn');
            let cartItemsCounter = document.querySelector('.cartItemsCounter');

            // add items to cart functionality
            addToCartBtn.addEventListener('click', function() {
                for (let y = 0; y < shoppingCartItemNumbers.length; y++) {
                    if (cartItemsCounter.innerText == 0) {
                        shoppingCartItemNumbers[y].style.display = 'none'
                    }
                    else{
                        shoppingCartItemNumbers[y].innerText = cartItemsCounter.innerText;
                        shoppingCartItemNumbers[y].style.display = 'inline'
                        fullCart.style.display = 'block'
                    }
                }
            })

            // clicking in and off the cart
            cartIcon.addEventListener('click', function() {
                for (let z = 0; z < shoppingCartItemNumbers.length; z++) {
                    if (shoppingCartItemNumbers[z].style.display == 'none') {
                        emptyCart.style.display = 'block'
                        fullCart.style.display = 'none'
                    } 
                    else if (shoppingCartItemNumbers[z].style.display == 'inline') {
                        fullCart.style.display = 'block'
                        emptyCart.style.display = 'none'
                    }
                    else {
                        emptyCart.style.display = 'block'
                    }
                }
            })
            // for mobile
            cartIconMobile.addEventListener('click', function() {
                if (emptyCart.style.display == 'block') {
                    emptyCart.style.display = 'none'
                } 
                else {
                    emptyCart.style.display = 'block'
                }
            })

            // delete items by clicking the delete button
            deleteBtn.addEventListener('click', function() {
                emptyCart.style.display = 'block'
                fullCart.style.display = 'none'
                for (let z = 0; z < shoppingCartItemNumbers.length; z++) {
                    shoppingCartItemNumbers[z].style.display = 'none'
                }
            })

            // opening and closing nav menu
            openBtn.addEventListener('click', function() {
                nav.style.display = 'block'
                shadowContainer.style.display = 'block'
            })
            closeBtn.addEventListener('click', function() {
                nav.style.display = 'none'
                shadowContainer.style.display = 'none'
            })

            // opening and closing lightbox
            thumbnails.addEventListener('click', function() {
                shadowContainer.style.display = 'block'
                lightBox.style.display = 'block'
            })
            closeLightBox.addEventListener('click', function() {
                shadowContainer.style.display = 'none'
                lightBox.style.display = 'none'
            })

            // image slidshow on click
            // increase or decrease anytime you click to increase the array index thus chasnging the style accordingly
            let incrementDecrement = 0;
            for (let i = 0; i < rightBtn.length; i++) {
                rightBtn[i].addEventListener('click', function() {
                incrementDecrement++
                if (incrementDecrement > 3) {
                    incrementDecrement = -1
                }
                else{
                    showimage[i].src = imageSources[incrementDecrement]
                    for (let x = 4; x < imageThumbnails.length; x++) {
                        imageThumbnails[x].classList.toggle('active')
                    }
                }
            })   
            }   
            for (let i = 0; i < rightBtn.length; i++){
                leftBtn[i].addEventListener('click', function(){
                incrementDecrement--
                if (incrementDecrement < 0 ) {
                    incrementDecrement = 1
                }
                else{
                    showimage[i].src = imageSources[incrementDecrement]
                }
            }) 
            }

            // plus and minus buttons
            let cartCounterNumber = 1
            plusBtn.addEventListener('click', function() {
                cartItemsCounter.innerText = cartCounterNumber++
            })
            minusBtn.addEventListener('click', function() {
                if (cartCounterNumber < 0) {
                    cartCounterNumber = 1
                } 
                else {
                    cartItemsCounter.innerText = cartCounterNumber--
                }
            })