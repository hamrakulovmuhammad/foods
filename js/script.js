// modal
let modal = document.querySelector('.modal')
let openBtns = document.querySelectorAll('[data-modal]')
let closeBtns = document.querySelectorAll('[data-close]')


openBtns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})

closeBtns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})

// slider

let slides = document.querySelectorAll('.offer__slide')
let next = document.querySelector('.offer__slider-next')
let prev = document.querySelector('.offer__slider-prev')
let current = document.getElementById('current')
let total = document.getElementById('total')
let slideIndex = 0
function showSlides(n) {
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }
    slides.forEach(slide => slide.classList.add('hide'))
    let curr = (slideIndex + 1).toString()
    let totl = (slides.length).toString()

    total.innerHTML = totl.padStart(2, 0)

    current.innerHTML = curr.padStart(2, 0)

    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')
}


next.onclick = () => {
    slideIndex += 1

    showSlides()
}
prev.onclick = () => {
    slideIndex -= 1

    showSlides()
}

showSlides()

let one = document.querySelectorAll('.tabheader__item')
let two = document.querySelectorAll('.tabcontent')
let content = document.querySelector('.tabheader__item')
let num = 0
function show() {
    two.forEach(sect => {
        sect.classList.add('hide', 'fade')
    })
    two[num].classList.remove('hide')
    two[num].classList.add('show',)
}

show()

one.forEach((item) => {
    item.onclick = () => {
        two.forEach(bon => {
            bon.classList.add('hide')
        })
        num = item.getAttribute('data-schet')
        one.forEach(i => i.classList.remove('tabheader__item_active'))
        item.classList.add('tabheader__item_active')
        two[num].classList.remove('hide')
        two[num].classList.add('show')
    }
})



// calc
let genBtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman"
}
console.log(actBtns);
genBtns.forEach(btn => {
    btn.onclick = () => {
        genBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        let gen = btn.getAttribute('data-gen')
        userData.gender = gen
    }
})


actBtns.forEach((btn => {
    btn.onclick = () => {


        inputs.forEach(inp => {

            userData[inp.name] = inp.value
            if (inp.value === '') {
                inp.style.border = '1px solid red'
            } else {
                inp.style.borderColor = 'green'
            }

        })

        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        let act = +btn.getAttribute('data-act')


        if (userData.gender === 'woman') {
            let BMR = 447.6 + (9.2 * userData.weight) + (3.1 * userData.height) - (4.3 * userData.age)

            resultView.innerHTML = Math.round(BMR * act)
        } else {
            let BMR = 88.36 + (13.4 * userData.weight) + (4.8 * userData.height) - (5.7 * userData.age)

            resultView.innerHTML = Math.round(BMR * act)
        }
    }
}))



let deadline = "2023-05-20"
const remainingTime = (endTime) => {
    const t = Date.parse(endTime) - Date.now()
    days = Math.round((t / 1000) / 60 / 60 / 24),
        hours = Math.round((t / 1000) / 60 / 60 % 24),
        minutes = Math.round((t / 1000) / 60 % 60),
        seconds = Math.round((t / 1000) % 60)

    return { t, days, hours, minutes, seconds }
}

const showTimer = (endTime, selector) => {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timerInterval = setInterval(updataTime, 1000)

    function updataTime() {
        const t = remainingTime(endTime)
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if (t.t === 0 || t.t < 0) {
            clearInterval(timerInterval)
            timer.innerHTML = 'Не усрел лох'
        }
    }
}
showTimer(deadline, '.timer')