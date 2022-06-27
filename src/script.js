let cards = document.getElementsByClassName('download-card')
const class_init = 'card pt-3 pb-3 download-card'

selectPlan = (e) => {
    resetClass()
    e.setAttribute('class', `${class_init} active`)
}

resetClass = () => {
    for (let i = 0; i < cards.length; i++)
    cards[i].setAttribute('class', class_init)
}