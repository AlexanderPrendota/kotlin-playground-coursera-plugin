const CONFIGURATION_PROPS = {
    PLATFORM: 'platform',
    HEAD: 'head',
    RAW_HTML_BEFORE: 'raw-html-before',
    RAW_HTML_AFTER: 'raw-html-after',
    TASK: 'task',
    LINK: 'link',
    CODE: 'code'
};

const SELECTORS = {
    HEAD: 'head',
    TASK: 'task',
    SOLUTION: 'solution-link',
    CODE: 'code'
};

const KOTLIN_PLAYGROUND_ATTRIBUTES = {
    PLATFORM: 'data-target-platform',
    THEME: 'theme'
};

const DEFAULT_THEME = 'idea';
const DEFAULT_LINK_TEXT = '[Solution]';

function initiateApp(configuration) {

    if (configuration[CONFIGURATION_PROPS.HEAD]) buildHeader(configuration[CONFIGURATION_PROPS.HEAD]);
    if (configuration[CONFIGURATION_PROPS.TASK]) buildTask(configuration[CONFIGURATION_PROPS.TASK]);
    if (configuration[CONFIGURATION_PROPS.RAW_HTML_BEFORE]) appendRawHtml(configuration[CONFIGURATION_PROPS.RAW_HTML_BEFORE]);

    const platform = configuration[CONFIGURATION_PROPS.PLATFORM];
    const code = configuration[CONFIGURATION_PROPS.CODE];
    if (platform && code) buildPlayground(code, platform);

    if (configuration[CONFIGURATION_PROPS.LINK]) addLink(configuration[CONFIGURATION_PROPS.LINK]);
    if (configuration[CONFIGURATION_PROPS.RAW_HTML_AFTER]) appendRawHtml(configuration[CONFIGURATION_PROPS.RAW_HTML_AFTER]);

    KotlinPlayground(SELECTORS.CODE);
}

function buildHeader(name) {
    return buildNode(name, SELECTORS.HEAD)
}

function addLink(link) {
    const node = document.createElement('a');
    node.href = link;
    node.className = SELECTORS.SOLUTION;
    node.target = '_blank';
    node.textContent = DEFAULT_LINK_TEXT;
    document.body.appendChild(node)
}

function buildTask(text) {
    return buildNode(text, SELECTORS.TASK)
}

function appendRawHtml(stringHtml) {
    const node = document.createElement('div');
    node.innerHTML = stringHtml.trim();
    document.body.appendChild(node)
}

function buildPlayground(code, platform) {
    const node = document.createElement(SELECTORS.CODE);
    node.setAttribute(KOTLIN_PLAYGROUND_ATTRIBUTES.THEME, DEFAULT_THEME);
    node.setAttribute(KOTLIN_PLAYGROUND_ATTRIBUTES.PLATFORM, platform);
    node.textContent = code;
    document.body.appendChild(node);
}

function buildNode(text, selector) {
    const node = document.createElement('div');
    node.className = selector;
    node.textContent = text;
    document.body.appendChild(node);
}

courseraApi.callMethod({
    type: "GET_SESSION_CONFIGURATION",
    onSuccess: initiateApp,
    onError: console.log
});
