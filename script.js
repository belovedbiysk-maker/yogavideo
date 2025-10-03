{\rtf1\ansi\ansicpg1251\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u1055 \u1088 \u1080 \u1084 \u1077 \u1088  \u1076 \u1072 \u1085 \u1085 \u1099 \u1093  \u1087 \u1083 \u1077 \u1081 \u1083 \u1080 \u1089 \u1090 \u1086 \u1074 \
const playlists = [\
  \{\
    title: "\uc0\u1059 \u1090 \u1088 \u1077 \u1085 \u1085 \u1080 \u1077  \u1087 \u1088 \u1072 \u1082 \u1090 \u1080 \u1082 \u1080 ",\
    videos: [\
      \{ title: "\uc0\u1049 \u1086 \u1075 \u1072  \u1076 \u1083 \u1103  \u1087 \u1088 \u1086 \u1073 \u1091 \u1078 \u1076 \u1077 \u1085 \u1080 \u1103 ", cover: "covers/video1.jpg", duration: "15:32", url: "videos/video1.mp4" \},\
      \{ title: "\uc0\u1044 \u1099 \u1093 \u1072 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 \u1077  \u1087 \u1088 \u1072 \u1082 \u1090 \u1080 \u1082 \u1080 ", cover: "covers/video2.jpg", duration: "10:20", url: "videos/video2.mp4" \}\
    ]\
  \},\
  \{\
    title: "\uc0\u1042 \u1077 \u1095 \u1077 \u1088 \u1085 \u1080 \u1077  \u1087 \u1088 \u1072 \u1082 \u1090 \u1080 \u1082 \u1080 ",\
    videos: [\
      \{ title: "\uc0\u1056 \u1072 \u1089 \u1089 \u1083 \u1072 \u1073 \u1083 \u1103 \u1102 \u1097 \u1072 \u1103  \u1081 \u1086 \u1075 \u1072 ", cover: "covers/video3.jpg", duration: "20:15", url: "videos/video3.mp4" \},\
      \{ title: "\uc0\u1049 \u1086 \u1075 \u1072  \u1087 \u1077 \u1088 \u1077 \u1076  \u1089 \u1085 \u1086 \u1084 ", cover: "covers/video4.jpg", duration: "12:45", url: "videos/video4.mp4" \}\
    ]\
  \}\
];\
\
const playlistsContainer = document.getElementById('playlists');\
\
// \uc0\u1057 \u1086 \u1079 \u1076 \u1072 \u1077 \u1084  \u1087 \u1083 \u1077 \u1081 \u1083 \u1080 \u1089 \u1090 \u1099 \
playlists.forEach(playlist => \{\
  const playlistDiv = document.createElement('div');\
  playlistDiv.className = 'playlist';\
\
  const title = document.createElement('h2');\
  title.textContent = playlist.title;\
  playlistDiv.appendChild(title);\
\
  const carousel = document.createElement('div');\
  carousel.className = 'video-carousel';\
\
  playlist.videos.forEach(video => \{\
    const videoItem = document.createElement('div');\
    videoItem.className = 'video-item';\
\
    const img = document.createElement('img');\
    img.src = video.cover;\
    videoItem.appendChild(img);\
\
    const info = document.createElement('div');\
    info.className = 'video-info';\
\
    const videoTitle = document.createElement('div');\
    videoTitle.className = 'video-title';\
    videoTitle.textContent = video.title;\
    info.appendChild(videoTitle);\
\
    const videoDuration = document.createElement('div');\
    videoDuration.className = 'video-duration';\
    videoDuration.textContent = video.duration;\
    info.appendChild(videoDuration);\
\
    videoItem.appendChild(info);\
\
    videoItem.addEventListener('click', () => \{\
      openModal(video.url);\
    \});\
\
    carousel.appendChild(videoItem);\
  \});\
\
  playlistDiv.appendChild(carousel);\
  playlistsContainer.appendChild(playlistDiv);\
\});\
\
// \uc0\u1052 \u1086 \u1076 \u1072 \u1083 \u1100 \u1085 \u1086 \u1077  \u1086 \u1082 \u1085 \u1086 \
const modal = document.getElementById("videoModal");\
const videoPlayer = document.getElementById("videoPlayer");\
const closeBtn = document.getElementsByClassName("close")[0];\
\
function openModal(videoUrl) \{\
  videoPlayer.src = videoUrl;\
  modal.style.display = "block";\
\}\
\
closeBtn.onclick = function() \{\
  modal.style.display = "none";\
  videoPlayer.pause();\
  videoPlayer.src = "";\
\}\
\
window.onclick = function(event) \{\
  if (event.target == modal) \{\
    modal.style.display = "none";\
    videoPlayer.pause();\
    videoPlayer.src = "";\
  \}\
\}}