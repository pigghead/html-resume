if ('fonts' in document) {
    Promise.all([
        document.fonts.load('1em "Raleway"'),
        document.fonts.load('1em "RobotoMono"')
    ]).then(() => {
        document.documentElement.classList.add('fonts-loaded')
    })
}