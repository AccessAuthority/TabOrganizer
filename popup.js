document.getElementById('groupTabs').addEventListener('click', async () => {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const groupedTabs = {};

    tabs.forEach(tab => {
        const domain = new URL(tab.url).hostname;

        if (!groupedTabs[domain]) {
            groupedTabs[domain] = [];
        }
        groupedTabs[domain].push(tab);
    });

    displayTabs(groupedTabs);
});

function displayTabs(groupedTabs) {
    const tabList = document.getElementById('tabList');
    tabList.innerHTML = '';

    for (const domain in groupedTabs) {
        const domainDiv = document.createElement('div');
        domainDiv.classList.add('domain-group');

        const title = document.createElement('h5');
        title.textContent = domain;
        domainDiv.appendChild(title);

        groupedTabs[domain].forEach(tab => {
            const tabLink = document.createElement('a');
            tabLink.href = tab.url;
            tabLink.target = '_blank';
            tabLink.textContent = tab.title;
            tabLink.classList.add('d-block');
            domainDiv.appendChild(tabLink);
        });

        tabList.appendChild(domainDiv);
    }
}
