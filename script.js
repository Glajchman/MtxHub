const videos = [
    {
        id: '2xs80pzfiEY',
        title: 'Trabalho De E. Religioso',
        description: 'Por Nicolas Glajchman, João e thiago.'
    },
    {
        id: '9QEqzQLN6uI',
        title: 'Bluezão chorando sem dinheiro pro aluguel',
        description: '#bluezao #ogro #javali'
    },
    {
        id: 'CmBvGHnp9Ww',
        title: 'feminista Mbappe',
        description: 'ela que subi ela vai desze ela vai zenta pu imbape.'
    },
    {
        id: 'mp4GKmmjjtU',
        title: ' VÍDEOS + ENGRAÇADOS DE 2021 🤣 TOP Tente Não Rir',
        description: '.'
    },
    // Adicione mais vídeos conforme necessário
    {
        id: 'Ks-_Mh1QhMc',
        title: 'Frozen 2 - Official Trailer',
        description: 'The official trailer for Frozen 2.'
    },
    {
        id: 'hHW1oY26kxQ',
        title: 'Keanu Reeves shows off his most prized motorcycles | Collected | GQ Sports',
        description: 'Keanu Reeves shows off his most prized motorcycles.'
    }
];

// Novos vídeos para a noite
const nightVideos = [
    {
        id: '92Sv8BnA0YY',
        title: '12 jogadores que MUDARAM de seleção 🔄',
        description: 'Mix de lo-fi hip hop ideal para relaxar e estudar.'
    },
    {
        id: 'QyO0zOfSgKo',
        title: 'Ambiente relaxante de jazz para dormir',
        description: 'Jazz suave para criar um ambiente relaxante.'
    }
];

function createVideoItem(video) {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.addEventListener('click', () => {
        window.location.href = `https://www.youtube.com/watch?v=${video.id}`;
    });

    const thumbnail = document.createElement('img');
    thumbnail.className = 'video-thumbnail';
    thumbnail.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

    const details = document.createElement('div');
    details.className = 'video-details';

    const title = document.createElement('h3');
    title.className = 'video-title';
    title.textContent = video.title;

    const description = document.createElement('p');
    description.className = 'video-description';
    description.textContent = video.description;

    details.appendChild(title);
    details.appendChild(description);
    videoItem.appendChild(thumbnail);
    videoItem.appendChild(details);

    return videoItem;
}

function loadVideos() {
    const videoGallery = document.getElementById('videoGallery');
    videos.forEach(video => {
        const videoItem = createVideoItem(video);
        videoGallery.appendChild(videoItem);
    });

    const nightVideosGallery = document.getElementById('nightVideos');
    nightVideos.forEach(video => {
        const videoItem = createVideoItem(video);
        nightVideosGallery.appendChild(videoItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadVideos();
});
function createNewsItem(news) {
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';

    const img = document.createElement('img');
    img.src = news.image;
    img.alt = news.title;
    img.style.width = '100%';
    img.style.borderRadius = '8px';
    img.style.marginBottom = '10px';

    const title = document.createElement('h3');
    title.className = 'news-title';
    const newsLink = document.createElement('a');
    newsLink.textContent = news.title;
    newsLink.href = news.link;
    newsLink.target = '_blank';
    title.appendChild(newsLink);

    newsItem.appendChild(img);
    newsItem.appendChild(title);

    return newsItem;
}
