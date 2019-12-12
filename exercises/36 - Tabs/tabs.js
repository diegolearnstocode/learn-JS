const tabs = document.querySelectorAll('[role="tab"]');
const tabButtons = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleTabClick() {
        const tabID = this.id;
        toggleButtons(tabID);
}

function showPanel(id) {
        const selectedPanel = document.querySelector(`[aria-labelledby="${id}"]`);
        selectedPanel.hidden = false;
}

function removePanel(id) {
        const unselectedPanel = document.querySelector(`[aria-labelledby="${id}"]`);
        unselectedPanel.hidden = true;
}

function toggleButtons(id) {
        tabs.forEach(tab => {
                if (tab.id === id) {
                        tab.setAttribute('aria-selected', true);
                        showPanel(id);
                } else {
                        tab.setAttribute('aria-selected', false);
                        removePanel(tab.id);
                }
        });
}

tabPanels.forEach(panel => {
        panel.hidden = true;
});

tabs.forEach(tab => {
        tab.setAttribute('aria-selected', true);
});

tabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
});
