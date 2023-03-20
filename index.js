let header = document.getElementsByTagName("header")[0].childNodes[1]
const btnTheme = document.createElement("button")

// Color palette
const BLACK_MAIN = '#333'
const BLACK_SECOND = '#222'
const BLACK_THIRD = '#444'
const GRAY_BACKGROUND = '#CCC'
const WHITE = '#FFF'
const BLUE = '#0052CC'

btnTheme.textContent = "🌙"
btnTheme.style.borderRadius = "50%"
btnTheme.style.border = "none"
btnTheme.style.height = "36px"
btnTheme.style.width = "36px"
btnTheme.style.fontSize = "20px"
btnTheme.style.backgroundColor = GRAY_BACKGROUND

let theme = localStorage.getItem('theme')
if (theme == null) theme = 'default'
header.appendChild(btnTheme)

document.addEventListener('DOMContentLoaded',() => {
    let theme = localStorage.getItem('theme')
    if (theme == null) theme = 'default'
    header.appendChild(btnTheme)
})

btnTheme.addEventListener('click', () => {
    if(theme != 'dark') {
        theme = 'dark'
        btnTheme.textContent = "☀"
        btnTheme.style.backgroundColor = WHITE
        localStorage.setItem('theme','dark')
        darkTheme()
    }
    else if (theme === 'dark') {
        theme = 'default'
        btnTheme.textContent = "🌙"
        localStorage.setItem('theme','default')
        restoreTheme()
    }
})

header.appendChild(btnTheme)

const sheet = document.styleSheets[0]
let sheetLength = 0;

const darkTheme = () => {
    sheet.insertRule(`
    :root {
        --ds-background-default: ${BLACK_MAIN};
        --ds-background-disabled: ${BLACK_THIRD};
        --ds-background-input: ${BLACK_MAIN};
        --ds-background-neutral: ${BLACK_SECOND};
        --ds-background-neutral-hovered: ${BLACK_MAIN};
        --ds-background-neutral-subtle: ${BLACK_THIRD};
        --ds-background-neutral-subtle-hovered: #555;
        --ds-background-selected: #353a44;
        --ds-background-selected-hovered: #484f5d;
        --ds-border: ${BLACK_SECOND};
        --ds-link: #429eff;
        --ds-menu-seperator-color: ${BLACK_THIRD};
        --ds-shadow-raised: 0 1px 1px rgba(150, 150, 150, 0.25), 0 0 1px 1px rgba(150, 150, 150, 0.13);
        --ds-surface: ${BLACK_MAIN};
        --ds-surface-overlay: ${BLACK_THIRD};
        --ds-surface-raised: ${BLACK_MAIN};
        --ds-text: ${WHITE};
        --ds-text-disabled: #aaa;
        --ds-text-highEmphasis: ${WHITE};
        --ds-text-link-resting: #429eff;
        --ds-text-selected: #9494ff;
        --ds-text-subtle: #d2d2d2;
        --logo-color: ${BLUE};
        --logo-fill: ${BLUE};
    }
    `,0); sheetLength++
    
    sheet.insertRule(`header {background: ${BLACK_SECOND} !important;}`,0); sheetLength++
    sheet.insertRule(`header button,input {background-color: ${BLACK_THIRD} !important; color: '${WHITE} !important}`,0); sheetLength++
    sheet.insertRule(`#createGlobalItemIconButton,#createGlobalItem {background-color: ${BLUE} !important;}`,0); sheetLength++
    sheet.insertRule(`.sc-1k8t1g3-3.cPpMlq {background-color: ${BLACK_SECOND}}`,0); sheetLength++
    sheet.insertRule(`.__board-test-hook__card-list-container.riwk2x-0.fcvIhD {background-color: ${BLACK_SECOND}}`,0); sheetLength++
    sheet.insertRule(`.sc-85vw0r-2.omUzj {background-color: transparent}`,0); sheetLength++
    sheet.insertRule(`.eXHdwZ {background: ${BLACK_MAIN} !important;}`,0); sheetLength++
    sheet.insertRule(`.hrWzRr {background: ${BLACK_SECOND} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-board-kit.ui.column.draggable-column.styled-wrapper"] div div {background: ${BLACK_SECOND};}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-card.ui.card.focus-container"] div {background: ${BLACK_THIRD} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-onboarding-observer-id="backlog-wrapper"] div div {background:  ${BLACK_THIRD} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id*="roadmap.timeline-table.components.chart-item.container-"] {background:  ${BLACK_THIRD} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id*="roadmap.timeline-table.components.list-item.container-"] {background:  ${BLACK_SECOND} !important;}`,0); sheetLength++
    sheet.insertRule(`.ghx-column.ui-sortable {background: ${BLACK_SECOND} !important;}`,0); sheetLength++
    sheet.insertRule(`.ghx-column {background: ${BLACK_SECOND} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-board-kit.ui.board.scroll.board-scroll"] {overflow-x: overlay !important; overflow-y: overlay !important;}`,0); sheetLength++
    sheet.insertRule(`[role="menuitem"] {background: ${BLACK_THIRD} !important;}`,0); sheetLength++
    sheet.insertRule(`[for*="toggle-buttons-"] {filter: invert(1) !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="global-pages.home.ui.home"] div div div div section {background: ${BLACK_SECOND} !important;}`,0); sheetLength++
}

const restoreTheme = () => {
    for (let i = 0; i < sheetLength; i++) sheet.deleteRule(0)
}

if(theme == 'dark') {
    btnTheme.style.backgroundColor = WHITE
    localStorage.setItem('theme','dark')
    darkTheme()
}
