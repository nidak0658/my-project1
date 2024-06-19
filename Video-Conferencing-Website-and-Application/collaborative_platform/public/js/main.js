// public/js/main.js

const socket = io();

const peer = new Peer(undefined, {
    host: '/',
    port: '3001',
});

peer.on('open', id => {
    socket.emit('join-room', roomId, id);
});

socket.on('user-connected', userId => {
    // Handle user connection
});

socket.on('user-disconnected', userId => {
    // Handle user disconnection
});

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        const video = document.createElement('video');
        video.muted = true;
        addVideoStream(video, stream);

        peer.on('call', call => {
            call.answer(stream);
            const video = document.createElement('video');
            call.on('stream', userVideoStream => {
                addVideoStream(video, userVideoStream);
            });
        });

        socket.on('user-connected', userId => {
            connectToNewUser(userId, stream);
        });
    })
    .catch(err => {
        console.error('Error accessing media devices:', err);
    });

function connectToNewUser(userId, stream) {
    const call = peer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream);
    });
    call.on('close', () => {
        video.remove();
    });
}

function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    document.getElementById('video-grid').append(video);
}
