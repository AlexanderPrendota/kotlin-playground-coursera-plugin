const CONFIGURATION_PROPS = {
    PLATFORM: 'platform',
    HEAD: 'head',
    TASK: 'task',
    CODE: 'code'
};

const SELECTORS = {
    HEAD: 'head',
    TASK: 'task',
    CODE: 'code'
};

const KOTLIN_PLAYGROUND_ATTRIBUTES = {
    PLATFORM: 'data-target-platform',
    THEME: 'theme'
};

const DEFAULT_THEME = 'idea';

function initiateApp(configuration) {

    if (configuration[CONFIGURATION_PROPS.HEAD]) buildHeader(configuration[CONFIGURATION_PROPS.HEAD]);
    if (configuration[CONFIGURATION_PROPS.TASK]) buildTask(configuration[CONFIGURATION_PROPS.TASK]);

    const platform = configuration[CONFIGURATION_PROPS.PLATFORM];
    const code = configuration[CONFIGURATION_PROPS.CODE];
    if (platform && code) buildPlayground(code, platform);

    KotlinPlayground(SELECTORS.CODE);
}

function buildHeader(name) {
    return buildNode(name, SELECTORS.HEAD)
}

function buildTask(text) {
    return buildNode(text, SELECTORS.TASK)
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
