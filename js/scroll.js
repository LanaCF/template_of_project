export const scrollToTop = () => {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export const handleScroll = () => {
    if (window.pageYOffset > 910) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}



//EXAMPLE =====================================================================================================

// export { cart, quantity, updateCartQuantity, saveLocalStorage, getLocalStorage, addToCartHandler };