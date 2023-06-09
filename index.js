// Set a color palette for the dark theme
const Colors = {
    // Main
    BlackMain: '#333',
    BlackSecond: '#222',
    BlackThird: '#444',
    Blue: '#0052CC',
    Cyan: '#429eff',
    GrayBackground: '#CCC',
    GrayDisabled: '#aaa',
    GrayHover: '#555',
    White: '#FFF',

    // Shadows
    Shadow13: rgba(150, 150, 150, 0.13),
    Shadow25: rgba(150, 150, 150, 0.25),

    // Others
    BackgroundSelected: '#353a44',
    BackgroundSelectedHover: '#484f5d',
    TextSelected: '#9494ff',
    TextSubtle: '#d2d2d2',
}

// Detect Jira website's header and add the new button
let header = document.getElementsByTagName("header")[0].childNodes[1]
const btnTheme = document.createElement("button")

// Customize button
btnTheme.textContent = "🌙"
btnTheme.style.borderRadius = "50%"
btnTheme.style.border = "none"
btnTheme.style.height = "36px"
btnTheme.style.width = "36px"
btnTheme.style.fontSize = "20px"
btnTheme.style.paddingTop = "0px";
btnTheme.style.backgroundColor = Colors.GrayBackground

// Check if the theme already exists in the user's local storage
let theme = localStorage?.getItem('theme') ?? 'default'
header.appendChild(btnTheme)

document.addEventListener('DOMContentLoaded', () => {
    theme = localStorage?.getItem('theme') ?? 'default'
    header.appendChild(btnTheme)
})

// Button click event
btnTheme.addEventListener('click', () => {
    // Change button from white to dark
    if (theme != 'dark') {
        theme = 'dark'
        btnTheme.textContent = "☀"
        btnTheme.style.backgroundColor = Colors.White
        localStorage.setItem('theme', 'dark')
        darkTheme()
        return
    }

    // Change button from dark to white (default)
    theme = 'default'
    btnTheme.textContent = "🌙"
    localStorage.setItem('theme', 'default')
    restoreTheme()
})

header.appendChild(btnTheme)

// Webpage's default stylesheet
const sheet = document.styleSheets[0]
let sheetLength = 0;

// Dark theme definition - Inject style rules into the site's stylesheet
const darkTheme = () => {
    sheet.insertRule(`
    :root {
        --ds-background-default: ${Colors.BlackMain};
        --ds-background-disabled: ${Colors.BlackThird};
        --ds-background-input: ${Colors.BlackMain};
        --ds-background-neutral: ${Colors.BlackSecond};
        --ds-background-neutral-hovered: ${Colors.BlackMain};
        --ds-background-neutral-subtle: ${Colors.BlackThird};
        --ds-background-neutral-subtle-hovered: ${Colors.GrayHover}
        --ds-background-selected: ${Colors.BackgroundSelected};
        --ds-background-selected-hovered: ${Colors.BackgroundSelectedHover};
        --ds-border: ${Colors.BlackSecond};
        --ds-input: ${Colors.BlackThird} 
        --ds-link: ${Colors.Cyan};
        --ds-menu-separator-color: ${Colors.BlackThird};
        --ds-shadow-raised: 0 1px 1px ${Colors.Shadow25}, 0 0 1px 1px ${Colors.Shadow13};
        --ds-surface: ${Colors.BlackMain};
        --ds-surface-overlay: ${Colors.BlackThird};
        --ds-surface-raised: ${Colors.BlackMain};
        --ds-text: ${Colors.White};
        --ds-text-brand: ${Colors.White};
        --ds-text-disabled: ${Colors.GrayDisabled};
        --ds-text-highEmphasis: ${Colors.White};
        --ds-text-link-resting: ${Colors.Cyan};
        --ds-text-selected: ${Colors.TextSelected};
        --ds-text-subtle: ${Colors.TextSubtle};
        --logo-color: ${Colors.Blue};
        --logo-fill: ${Colors.Blue};
    }`, 0); sheetLength++
    
    sheet.insertRule(`header { background: ${Colors.BlackSecond} !important; }`, 0); sheetLength++
    sheet.insertRule(`header button,input { background-color: ${Colors.BlackThird} !important; color: '${Colors.White} !important}`, 0); sheetLength++
    sheet.insertRule(`#createGlobalItemIconButton, #createGlobalItem { background-color: ${Colors.Blue} !important; }`, 0); sheetLength++
    sheet.insertRule(`.sc-1k8t1g3-3.cPpMlq { background-color: ${Colors.BlackSecond}}`, 0); sheetLength++
    sheet.insertRule(`.__board-test-hook__card-list-container.riwk2x-0.fcvIhD { background-color: ${Colors.BlackSecond}}`, 0); sheetLength++
    sheet.insertRule(`.sc-85vw0r-2.omUzj { background-color: transparent}`, 0); sheetLength++
    sheet.insertRule(`.eXHdwZ { background: ${Colors.BlackMain} !important; }`, 0); sheetLength++
    sheet.insertRule(`.hrWzRr { background: ${Colors.BlackSecond} !important; }`, 0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-board-kit.ui.column.draggable-column.styled-wrapper"] div div { background: ${Colors.BlackSecond}; }`, 0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-card.ui.card.focus-container"] div { background: ${Colors.BlackThird} !important; }`, 0); sheetLength++
    sheet.insertRule(`[data-onboarding-observer-id="backlog-wrapper"] div div { background:  ${Colors.BlackThird} !important; }`, 0); sheetLength++
    sheet.insertRule(`[data-test-id*="roadmap.timeline-table.components.chart-item.container-"] { background: ${Colors.BlackThird} !important; }`, 0); sheetLength++
    sheet.insertRule(`[data-test-id*="roadmap.timeline-table.components.list-item.container-"] { background: ${Colors.BlackSecond} !important; }`, 0); sheetLength++
    sheet.insertRule(`.ghx-column.ui-sortable { background: ${Colors.BlackSecond} !important; }`, 0); sheetLength++
    sheet.insertRule(`.ghx-column { background: ${Colors.BlackSecond} !important; }`, 0); sheetLength++
    sheet.insertRule(`[data-test-id="platform-board-kit.ui.board.scroll.board-scroll"] { overflow-x: overlay !important; overflow-y: overlay !important; }`, 0); sheetLength++
    sheet.insertRule(`[role="menuitem"] { background: ${Colors.BlackThird} !important; }`, 0); sheetLength++
    sheet.insertRule(`[for*="toggle-buttons-"] { filter: invert(1) !important; }`, 0); sheetLength++
    sheet.insertRule(`[data-test-id="global-pages.home.ui.home"] div div div div section { background: ${Colors.BlackSecond} !important; }`, 0); sheetLength++
}

// White theme restoration
const restoreTheme = () => {
    for (let i = 0; i < sheetLength; i++) sheet.deleteRule(0)
}

// Toggle to dark theme (and save it)
if (theme == 'dark') {
    btnTheme.style.backgroundColor = Colors.White
    localStorage.setItem('theme', 'dark')
    darkTheme()
}
