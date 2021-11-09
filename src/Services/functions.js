function showMenuCart(opacity, setOpacity) {
    if (opacity) {
      return setOpacity(false)
    } else {
      return setOpacity(true)
    }
}

export {
    showMenuCart,
}