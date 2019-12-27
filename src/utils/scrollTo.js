const scrollTo = (id, addHeight = 0, behavior = 'smooth') => {
  if (window) {
    const top = document.getElementById(id).offsetTop;
    window.scrollTo({ top: top - addHeight, behavior });
  }
}

export default scrollTo;
