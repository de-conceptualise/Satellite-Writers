document.addEventListener('DOMContentLoaded', function() {
    const arenaChannelSlug = 'satellite-writers'; // Replace with your channel slug
    const arenaApiUrl = `https://api.are.na/v2/channels/pedro-gil-farias/satellite-writers/contents?per=50&sort=position&direction=asc`;

    fetch(arenaApiUrl)
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('content-grid');
            data.contents.forEach(block => {
                const item = document.createElement('div');
                item.className = 'grid-item';
                item.textContent = block.title || block.content; // Adjust based on the type of content
                grid.appendChild(item);
            });
        })
        .catch(error => console.error('Error fetching channel data:', error));
});
