let header = document.getElementsByTagName("header")[0].childNodes[1];
const btnCreate = document.getElementById("createGlobalItemIconButton") 
const btnTheme = document.createElement("button")


btnTheme.textContent = "☀"
btnTheme.style.borderRadius = "50%"
btnTheme.style.border = "none"
btnTheme.style.height = "36px"
btnTheme.style.width = "36px"
btnTheme.style.fontSize = "20px"
btnTheme.style.backgroundColor = "#CCC"

let theme = 'default';

btnTheme.addEventListener('click', () => {
    if(theme != 'dark') {
        theme = 'dark'
        btnTheme.style.backgroundColor = "#FFF"
        darkTheme()
    }
    else if (theme === 'dark') {
        theme = 'default'
        restoreTheme()
    }
})

document.addEventListener('DOMContentLoaded',() => header.appendChild(btnTheme))

header.appendChild(btnTheme)

const sheet = document.styleSheets[0];

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
    }
    `,0);
    
    sheet.insertRule(`header {background: #222 !important;}`,0);

    sheet.insertRule(" header button,input {background-color: #444 !important; color: #FFF !important}",0)
}

const restoreTheme = () => {
    for (let i = 0; i < 3; i++) sheet.deleteRule(0);
}


