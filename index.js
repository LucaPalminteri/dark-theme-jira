let header = document.getElementsByTagName("header")[0].childNodes[1]
const btnTheme = document.createElement("button")

const MAIN_DARK = '#333'
const SECOND_DARK = '#222'
const THIRD_DARK = '#444'

btnTheme.textContent = "🌙"
btnTheme.style.borderRadius = "50%"
btnTheme.style.border = "none"
btnTheme.style.height = "36px"
btnTheme.style.width = "36px"
btnTheme.style.fontSize = "20px"
btnTheme.style.backgroundColor = "#CCC"

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
        btnTheme.style.color = "#FFF"
        btnTheme.style.backgroundColor = '#FFF'
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
        --ds-text: #FFF;
        --ds-text-disabled: #aaa;
        --ds-text-highEmphasis: #FFF;
        --ds-text-link-resting: #429eff;
        --ds-text-selected: #9494ff;
        --ds-text-subtle: #d2d2d2;
        --logo-color: #0052CC;
        --logo-fill: #0052CC;
    }
    `,0); sheetLength++
    
    sheet.insertRule(`header {background: ${SECOND_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`header button,input {background-color: ${THIRD_DARK} !important; color: '#FFF !important}`,0); sheetLength++
    sheet.insertRule(`#createGlobalItemIconButton,#createGlobalItem {background-color: #0052CC !important;}`,0); sheetLength++
    sheet.insertRule(`.sc-1k8t1g3-3.cPpMlq {background-color: ${SECOND_DARK}}`,0); sheetLength++
    sheet.insertRule(`.__board-test-hook__card-list-container.riwk2x-0.fcvIhD {background-color: ${SECOND_DARK}}`,0); sheetLength++
    sheet.insertRule(`.sc-85vw0r-2.omUzj {background-color: transparent}`,0); sheetLength++
    sheet.insertRule(`.eXHdwZ {background: ${MAIN_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`.hrWzRr {background: ${SECOND_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-board-kit.ui.column.draggable-column.styled-wrapper"] div div {background: ${SECOND_DARK};}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-card.ui.card.focus-container"] div {background: ${THIRD_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-onboarding-observer-id="backlog-wrapper"] div div {background:  ${THIRD_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id*="roadmap.timeline-table.components.chart-item.container-"] {background:  ${THIRD_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id*="roadmap.timeline-table.components.list-item.container-"] {background:  ${SECOND_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`.ghx-column.ui-sortable {background: ${SECOND_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`.ghx-column {background: ${SECOND_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-board-kit.ui.board.scroll.board-scroll"] {overflow-x: overlay !important; overflow-y: overlay !important;}`,0); sheetLength++
    sheet.insertRule(`[role="menuitem"] {background: ${THIRD_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`[for*="toggle-buttons-"] {filter: invert(1) !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="global-pages.home.ui.home"] div div div div section {background: ${SECOND_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`[data-testid="software-board.board-container.board.virtual-board.fast-virtual-list.fast-virtual-list-wrapper"] {background: ${SECOND_DARK} !important;}`,0); sheetLength++
    sheet.insertRule(`.ghx-info {filter: invert(0.5) !important;}`,0); sheetLength++
    sheet.insertRule(`[data-test-id="software-backlog.card-list.card.card-contents.context-menu"] {background-color: red !important; z-index: 100}`,0); sheetLength++

}

const restoreTheme = () => {
    for (let i = 0; i < sheetLength; i++) sheet.deleteRule(0)
}

if(theme == 'dark') {
    btnTheme.style.backgroundColor = '#FFF'
    localStorage.setItem('theme','dark')
    darkTheme()
}