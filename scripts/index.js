let carotenoid = document.querySelector('#carotenoid')
let anthocyanins = document.querySelector('#anthocyanins')
let chlorophyll = document.querySelector('#chlorophyll')
let errorCarotenoid = 'error'
let titleAnthocyanins = 'error'
let errorChlorophyll = 'error'
let title = 'title-2'
let butterfly1 = document.querySelector('#butterfly-1')
let butterfly2 = document.querySelector('#butterfly-2')

document.body.addEventListener('click', e => {
    if (e.target.tagName === 'circle') {
        if (e.target.id === 'carotenoid-done') {
            errorCarotenoid = title
            e.target.className.baseVal = 'circle red mailto'
        } else if (e.target.id === 'carotenoid-error') {
            carotenoid.className = errorCarotenoid + ' title-2'
            setTimeout(() => {
                carotenoid.classList.remove(errorCarotenoid)
                carotenoid.className = title
            }, 300)
        }
    }
})

document.body.addEventListener('click', e => {
    if (e.target.tagName === 'circle') {
        if (e.target.id === 'anthocyanins-done') {
            titleAnthocyanins = title
            e.target.className.baseVal = 'circle blue mailto'
        } else if (e.target.id === 'anthocyanins-error') {
            anthocyanins.className = titleAnthocyanins + ' title-2'
            setTimeout(() => {
                anthocyanins.classList.remove(titleAnthocyanins)
                anthocyanins.className = title
            }, 300)
        }
    }
})

document.body.addEventListener('click', e => {
    if (e.target.tagName === 'circle') {
        if (e.target.id === 'chlorophyll-done') {
            errorChlorophyll = title
            e.target.className.baseVal = 'circle green mailto'
        } else if (e.target.id === 'chlorophyll-error') {
            chlorophyll.className = errorChlorophyll + ' title-2'
            setTimeout(() => {
                chlorophyll.classList.remove(errorChlorophyll)
                chlorophyll.className = title
            }, 300)
        }
    }
})

document.body.addEventListener('click', e => {
    if (e.target.className === 'yellow-flowers') {
        butterfly1.className = 'butterfly-1-active'
        butterfly2.className = 'butterfly-2-active'
    }
})
