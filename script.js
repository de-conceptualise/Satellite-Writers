// Example code to fetch and display channel content
arena.channel("your-channel-slug").contents()
    .then(contents => {
        document.getElementById('channel-title').innerText = "Your Channel Title"; // Replace with actual channel title
        const channelContent = document.getElementById('channel-content');
        
        contents.forEach(content => {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.innerText = content.title; // Modify as needed for content display
            channelContent.appendChild(div);
        });
    })
    .catch(err => console.error(err));
