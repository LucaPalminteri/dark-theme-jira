let header = document.getElementsByTagName("header")[0].childNodes[1]
const btnCreate = document.getElementById("createGlobalItemIconButton")
const btnTheme = document.createElement("button")

// Colors
const MAIN_DARK = '#333'
const SECOND_DARK = '#222'
const THIRD_DARK = '#444'
const WHITE = '#FFF'

btnTheme.textContent = "☀"
btnTheme.style.borderRadius = "50%"
btnTheme.style.border = "none"
btnTheme.style.height = "36px"
btnTheme.style.width = "36px"
btnTheme.style.fontSize = "20px"
btnTheme.style.backgroundColor = "#CCC"
btnTheme.classList.add('.hover')

let theme = localStorage.getItem('theme')
if (theme == null) theme = 'default'

// Events
document.addEventListener('DOMContentLoaded',() => {
    let theme = localStorage.getItem('theme')
    if (theme == null) theme = 'default'
    header.appendChild(btnTheme)
})

btnTheme.addEventListener('click', () => {
    if(theme != 'dark') {
        theme = 'dark'
        btnTheme.style.backgroundColor = `${WHITE}`
        localStorage.setItem('theme','dark')
        darkTheme()
    }
    else if (theme === 'dark') {
        theme = 'default'
        localStorage.setItem('theme','default')
        restoreTheme()
    }
})

header.appendChild(btnTheme)

// Styles Sheets
const sheet = document.styleSheets[0]

const darkTheme = () => {
    sheet.insertRule(`
    :root {
        --ds-background-default: ${MAIN_DARK};
        --ds-background-disabled: ${THIRD_DARK};
        --ds-background-input: ${MAIN_DARK};
        --ds-background-neutral: ${SECOND_DARK};
        --ds-background-neutral-hovered: ${MAIN_DARK};
        --ds-background-neutral-subtle: ${THIRD_DARK};
        --ds-background-neutral-subtle-hovered: #555;
        --ds-background-selected: #353a44;
        --ds-background-selected-hovered: #484f5d;
        --ds-border: ${SECOND_DARK};
        --ds-link: #429eff;
        --ds-menu-seperator-color: ${THIRD_DARK};
        --ds-shadow-raised: 0 1px 1px rgba(150, 150, 150, 0.25), 0 0 1px 1px rgba(150, 150, 150, 0.13);
        --ds-surface: ${MAIN_DARK};
        --ds-surface-overlay: ${THIRD_DARK};
        --ds-surface-raised: ${MAIN_DARK};
        --ds-text: ${WHITE};
        --ds-text-disabled: #aaa;
        --ds-text-highEmphasis: ${WHITE};
        --ds-text-link-resting: #429eff;
        --ds-text-selected: #9494ff;
        --ds-text-subtle: #d2d2d2;
        --logo-color: #0052CC;
        --logo-fill: #0052CC;
    }
    `,0)
    
    sheet.insertRule(`header {background: ${SECOND_DARK} !important;}`,0)
    sheet.insertRule(`header button,input {background-color: ${THIRD_DARK} !important; color: ${WHITE} !important}`,0)
    sheet.insertRule(`#createGlobalItemIconButton,#createGlobalItem {background-color: #0052CC !important;}`,0)
    sheet.insertRule(`.sc-1k8t1g3-3.cPpMlq {background-color: ${SECOND_DARK}}`,0)
    sheet.insertRule(`.__board-test-hook__card-list-container.riwk2x-0 fcvIhD {background-color: ${SECOND_DARK}}`,0)
    sheet.insertRule(`.ReactVirtualized__Grid__innerScrollContainer {background-color: ${SECOND_DARK}}`,0)
}

const restoreTheme = () => {for (let i = 0; i < 7; i++) sheet.deleteRule(0)}

if(theme == 'dark') {
    btnTheme.style.backgroundColor = `${WHITE}`
    localStorage.setItem('theme','dark')
    darkTheme()
}



// Testing

// let headerColumn = document.getElementsByClassName("sc-1k8t1g3-3 cPpMlq")
// let mainColumn = document.getElementsByClassName("__board-test-hook__card-list-container riwk2x-0 fcvIhD")
// let containerColumn = document.getElementsByClassName("ReactVirtualized__Grid__innerScrollContainer")

// for (let i = 0; i < containerColumn.length; i++) {
//     headerColumn[i].style.backgroundColor = `${SECOND_DARK}`
//     mainColumn[i].style.backgroundColor = `${SECOND_DARK}`
//     containerColumn[i].style.backgroundColor = `${SECOND_DARK}`
// }

