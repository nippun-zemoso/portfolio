document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const resultsContainer = document.getElementById('results');

    function debounce(func, delay) {
        let debounceTimer;
        return function(...args) {
            const context = this;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        }
    }

    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }
    }

    function performSearch(query) {
        resultsContainer.innerHTML = '';
        if (query.length > 0) {
            fetch(`https://demo.dataverse.org/api/search?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    data.results.forEach(result => {
                        const div = document.createElement('div');
                        div.textContent = result.title;
                        resultsContainer.appendChild(div);
                    });
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                });
        }
    }

    const debouncedSearch = debounce(performSearch, 300);
    const throttledSearch = throttle(performSearch, 1000);

    searchBar.addEventListener('input', (event) => {
        const query = event.target.value;
        debouncedSearch(query);
        throttledSearch(query);
    });
});
