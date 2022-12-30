let header = document.getElementsByTagName("header")[0].childNodes[1]
const btnCreate = document.getElementById("createGlobalItemIconButton")
const btnTheme = document.createElement("button")

btnTheme.textContent = "☀"
btnTheme.style.borderRadius = "50%"
btnTheme.style.border = "none"
btnTheme.style.height = "36px"
btnTheme.style.width = "36px"
btnTheme.style.fontSize = "20px"
btnTheme.style.backgroundColor = "#CCC"

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
        btnTheme.style.backgroundColor = "#FFF"
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

const sheet = document.styleSheets[0]

// Styles Sheets
const darkTheme = () => {
    sheet.insertRule(`
    :root {
        --ds-background-default: #333;
        --ds-background-disabled: #444;
        --ds-background-input: #333;
        --ds-background-neutral: #222;
        --ds-background-neutral-hovered: #333;
        --ds-background-neutral-subtle: #444;
        --ds-background-neutral-subtle-hovered: #555;
        --ds-background-selected: #353a44;
        --ds-background-selected-hovered: #484f5d;
        --ds-border: #222;
        --ds-link: #429eff;
        --ds-menu-seperator-color: #444;
        --ds-shadow-raised: 0 1px 1px rgba(150, 150, 150, 0.25), 0 0 1px 1px rgba(150, 150, 150, 0.13);
        --ds-surface: #333;
        --ds-surface-overlay: #444;
        --ds-surface-raised: #333;
        --ds-text: #FFF;
        --ds-text-disabled: #aaa;
        --ds-text-highEmphasis: #fff;
        --ds-text-link-resting: #429eff;
        --ds-text-selected: #9494ff;
        --ds-text-subtle: #d2d2d2;
        --logo-color: #0052CC;
        --logo-fill: #0052CC;
    }
    `,0)
    
    sheet.insertRule(`header {background: #222 !important;}`,0)
    sheet.insertRule(`header button,input {background-color: #444 !important; color: #FFF !important}`,0)
    sheet.insertRule(`#createGlobalItemIconButton,#createGlobalItem {background-color: #0052CC !important;}`,0)
}

const restoreTheme = () => {for (let i = 0; i < 4; i++) sheet.deleteRule(0)}

if(theme == 'dark') {
    btnTheme.style.backgroundColor = "#FFF"
    localStorage.setItem('theme','dark')
    darkTheme()
}