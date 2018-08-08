function initiateApp(configuration) {
    let node = document.getElementById('code');
    node.textContent = configuration["code"];
    KotlinPlayground('code');
}

courseraApi.callMethod({
    type: "GET_SESSION_CONFIGURATION",
    onSuccess: initiateApp,
    onError: console.log
});
