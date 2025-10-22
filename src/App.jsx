import React, { useState, useEffect } from 'react';

// Add animation keyframes to the style tag
const style = document.createElement('style');
// Add Latin style font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

style.textContent = `
  @keyframes fade-slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scale-fade-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-in-right {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes blur-fade-in {
    from {
      opacity: 0;
      backdrop-filter: blur(0);
      background-opacity: 0;
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
      background-opacity: 1;
    }
  }

  .animate-fade-slide-up {
    animation: fade-slide-up 0.5s ease-out forwards;
    opacity: 0;
  }

  .animate-scale-fade-in {
    animation: scale-fade-in 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-slide-in-left {
    animation: slide-in-left 0.5s ease-out forwards;
    opacity: 0;
  }

  .animate-slide-in-right {
    animation: slide-in-right 0.5s ease-out forwards;
    opacity: 0;
  }

  .animate-blur-fade-in {
    animation: blur-fade-in 0.8s ease-out forwards;
    opacity: 0;
  }

  .animation-delay-100 {
    animation-delay: 100ms;
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  .animation-delay-300 {
    animation-delay: 300ms;
  }

  .animation-delay-400 {
    animation-delay: 400ms;
  }

  .animation-delay-500 {
    animation-delay: 500ms;
  }
`;
document.head.appendChild(style);

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const musicLibrary = [
  { 
    id: 1, 
    name: "Manasha", 
    artist: "Ashreveal",
    fileName: "Ashreveal_-_Manasha__OFFICIAL_AUDIO_(256k).mp3",
    image: "https://img.youtube.com/vi/placeholder1/0.jpg"
  },
  { 
    id: 2, 
    name: "DJ MELODY UNITY JEDAG JEDUG", 
    artist: "DJ DANVATA",
    fileName: "DJ_MELODY_UNITY_JEDAG_JEDUG_REVERB_BY_DJ_DANVATA_VIRAL_TIKTOK_TERBARU_2025_YANG_KALIAN_CARI!!(256k).mp3",
    image: "https://img.youtube.com/vi/placeholder2/0.jpg"
  },
  { 
    id: 3, 
    name: "Bring Me Back", 
    artist: "Miles Away ft. Claire Ridgely",
    fileName: "Miles_Away_-_Bring_Me_Back__Official_Lyric_Video__ft._Claire_Ridgely(256k).mp3",
    image: "https://img.youtube.com/vi/placeholder3/0.jpg"
  },
  { 
    id: 4, 
    name: "Top 10 Viral AURA Phonk Songs", 
    artist: "Various Artists",
    fileName: "Top_10_Viral_AURA_Phonk_Songs(256k).mp3",
    image: "https://img.youtube.com/vi/placeholder4/0.jpg"
  }
];

function Header({ onSearchClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md z-50 shadow-lg border-b border-purple-100/50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-['Cinzel_Decorative'] drop-shadow-sm animate-gradient-x tracking-wider">
              MelodyByte
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 text-indigo-500 hover:text-violet-600 transition-all hover:scale-110 active:scale-95 group"
              onClick={onSearchClick}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Search
              </span>
            </button>
            <button className="p-2 text-indigo-500 hover:text-violet-600 transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <div className="bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-indigo-100/50 text-gray-800 p-6 space-y-6 h-full border-r border-purple-100/50 backdrop-blur-sm">
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-3 text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text hover:from-purple-600 hover:to-indigo-600 transition-all hover:translate-x-1">
          <span className="font-medium">Home</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-indigo-600 hover:text-violet-600 transition-all hover:translate-x-1">
          <span className="font-medium">Search</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-indigo-600 hover:text-violet-600 transition-all hover:translate-x-1">
          <span className="font-medium">Library</span>
        </a>
      </nav>
    </div>
  );
}

const LazyLoad = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when out of view for re-animation
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

function MainContent({ musicLibrary, onPlayTrack, currentTrack, isPlaying, onSelectArtist }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  // Function to shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Handle search
  React.useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
      const timeoutId = setTimeout(() => {
        const results = musicLibrary.filter(song => 
          song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
        setIsSearching(false);
      }, 300); // Delay for smooth transition

      return () => clearTimeout(timeoutId);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchTerm, musicLibrary]);

  // Get random songs for "For You" section
  const forYouSongs = shuffleArray(musicLibrary).slice(0, 4);

  return (
    <div className="bg-gradient-to-br from-purple-200/70 via-pink-100 to-indigo-200/70 text-gray-800 pt-20 px-4">
      <div className="flex flex-col space-y-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full p-2 hover:shadow-lg hover:scale-110 transition-all active:scale-95">
              <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full p-2 hover:shadow-lg hover:scale-110 transition-all active:scale-95">
              <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-2 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all active:scale-95">
              Upgrade
            </button>
            <button className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full p-2 hover:shadow-lg hover:scale-110 transition-all active:scale-95">
              <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-2xl mx-auto animate-fade-slide-up animation-delay-200">
          <input
            type="text"
            placeholder="Search for songs or artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-white/70 backdrop-blur-sm border border-purple-200 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all hover:bg-white/90"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400">
            {isSearching ? (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Search Results Section */}
      <div className={`transition-all duration-300 ease-in-out ${searchTerm ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <h2 className="text-xl font-bold mb-4 text-purple-800">Search Results</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 md:gap-6 md:px-6">
          {searchResults.map((song, idx) => (
            <div key={`search-${song.id}`} className="bg-gradient-to-br from-white/80 via-purple-50/30 to-pink-50/40 p-3 md:p-4 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group hover:scale-[1.02] backdrop-blur-sm border border-white/50 animate-scale-fade-in" style={{animationDelay: `${idx * 150}ms`}}>
              <div className="relative">
                <div className="bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 w-full aspect-square rounded-md mb-2 md:mb-4 flex items-center justify-center shadow-inner">
                  <svg className="h-12 w-12 md:h-16 md:w-16 text-white/90 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <button 
                  onClick={() => onPlayTrack(song)}
                  className="absolute bottom-2 right-2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all shadow-lg translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 hover:scale-110 active:scale-95"
                >
                  {currentTrack?.id === song.id && isPlaying ? (
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
              <h3 className="font-bold mb-1 text-purple-900 truncate">{song.name}</h3>
              <p className="text-gray-600 text-sm truncate">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-['Cinzel_Decorative'] tracking-wide animate-scale-fade-in animation-delay-300">Welcome to MelodyByte</h1>

      {/* For You Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-purple-800">For You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 px-2 md:gap-6 md:px-6">
          {forYouSongs.map((song, idx) => (
            <div key={`foryou-${song.id}`} className="bg-gradient-to-br from-white/80 via-purple-50/30 to-pink-50/40 p-3 md:p-4 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group hover:scale-[1.02] backdrop-blur-sm border border-white/50 hover:border-purple-200/70 animate-scale-fade-in" style={{animationDelay: `${idx * 150}ms`}}>
              <div className="relative">
                <div className="bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 w-full aspect-square rounded-md mb-2 md:mb-4 flex items-center justify-center shadow-inner">
                  <svg className="h-12 w-12 md:h-16 md:w-16 text-white/90 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <button 
                  onClick={() => onPlayTrack(song)}
                  className="absolute bottom-2 right-2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all shadow-lg translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 hover:scale-110 active:scale-95"
                >
                  {currentTrack?.id === song.id && isPlaying ? (
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
              <h3 className="font-bold mb-1 text-purple-900 truncate">{song.name}</h3>
              <p className="text-gray-600 text-sm truncate">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Artists */}
      <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Featured Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {Array.from(new Set(musicLibrary.map(song => song.artist))).map(artist => {
          const artistSongs = musicLibrary.filter(song => song.artist === artist);
          return (
            <LazyLoad key={artist}>
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectArtist(artist);
                }}
                className="bg-white/30 backdrop-blur-md rounded-2xl p-4 hover:bg-white/40 transition-all duration-300 group hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 relative rounded-xl overflow-hidden group-hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-white/90 transform group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{artist}</h3>
                  <p className="text-sm text-gray-600 mb-3">{artistSongs.length} {artistSongs.length === 1 ? 'track' : 'tracks'}</p>
                  <div className="space-y-2">
                    {artistSongs.map(song => (
                      <div
                        key={song.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayTrack(song);
                        }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 cursor-pointer transition-colors group/song"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover/song:scale-110 transition-transform">
                          {currentTrack?.id === song.id && isPlaying ? (
                            <div className="w-4 h-4 relative">
                              <span className="absolute w-1 h-4 bg-white rounded-full transform -translate-x-1.5 animate-music-bar-1"></span>
                              <span className="absolute w-1 h-4 bg-white rounded-full animate-music-bar-2"></span>
                              <span className="absolute w-1 h-4 bg-white rounded-full transform translate-x-1.5 animate-music-bar-3"></span>
                            </div>
                          ) : (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium truncate text-gray-800">{song.name}</p>
                        </div>
                        <div className="flex-shrink-0 opacity-0 group-hover/song:opacity-100 transition-opacity">
                          <button className="p-1 text-gray-500 hover:text-purple-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
}

function Player({ currentTrack, isPlaying, onTogglePlay, onNextTrack, onPreviousTrack, audioRef }) {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(1);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audioRef]);

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white border-t border-purple-100 p-2 md:p-4 text-gray-800">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-100 rounded flex items-center justify-center">
            <svg className="h-6 w-6 md:h-8 md:w-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <div className="max-w-[120px] sm:max-w-none">
            <h4 className="text-xs md:text-sm font-semibold text-purple-900 truncate">
              {currentTrack ? currentTrack.name : 'No track selected'}
            </h4>
            <p className="text-xs text-gray-600 truncate">
              {currentTrack ? currentTrack.artist : 'Select a track to play'}
            </p>
          </div>
          <button className="text-purple-400 hover:text-purple-600">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              onClick={onPreviousTrack}
              className="text-purple-400 hover:text-purple-600"
              disabled={!currentTrack}
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            <button 
              onClick={onTogglePlay}
              className="bg-purple-600 text-white rounded-full p-1.5 md:p-2 hover:bg-purple-700"
              disabled={!currentTrack}
            >
              {isPlaying ? (
                <svg className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            <button 
              onClick={onNextTrack}
              className="text-purple-400 hover:text-purple-600"
              disabled={!currentTrack}
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>
          <div className="w-full max-w-xl flex items-center space-x-2 md:space-x-4 mt-1 md:mt-2">
            <span className="text-[10px] md:text-xs text-gray-600">{formatTime(currentTime)}</span>
            <div className="flex-1 h-1 bg-purple-100 rounded-full">
              <div 
                className="h-1 bg-purple-600 rounded-full"
                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
              ></div>
            </div>
            <span className="text-[10px] md:text-xs text-gray-600">{formatTime(duration)}</span>
          </div>
        </div>
        
        <div 
          className="flex items-center space-x-4 relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button 
            className="text-purple-400 hover:text-purple-600 transition-colors duration-200"
            onClick={() => {
              const newVolume = volume === 0 ? 1 : 0;
              setVolume(newVolume);
              audioRef.current.volume = newVolume;
            }}
          >
            {volume === 0 ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : volume < 0.5 ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>

          {/* Volume Slider Popup */}
          <div 
            className={`absolute bottom-full mb-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-2 transform transition-all duration-300 ease-out origin-bottom
              ${isHovering ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1 pointer-events-none'}
            `}
            style={{ left: '-50px' }}
          >
            <div className="relative h-24 w-3 rotate-180 group hover:cursor-grab active:cursor-grabbing">
              <div className="w-full h-full bg-purple-100/50 rounded-full overflow-hidden backdrop-blur-sm transition-colors duration-200">
                <div 
                  className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-full transition-all duration-150 ease-out relative"
                  style={{ height: `${volume * 100}%` }}
                >
                  <div className="absolute w-4 h-4 bg-white rounded-full shadow-lg -right-[6px] top-[calc(100%-8px)] transition-transform duration-150 transform scale-0 group-hover:scale-100" />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={volume * 100}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value) / 100;
                    if (!isNaN(newVolume) && isFinite(newVolume) && newVolume >= 0 && newVolume <= 1) {
                      setVolume(newVolume);
                      audioRef.current.volume = newVolume;
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer -rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtistPage({ artist, onBack, musicLibrary, currentTrack, isPlaying, onPlayTrack }) {
  const artistSongs = musicLibrary.filter(song => song.artist === artist);
  
  return (
    <div className="fixed inset-0 bg-white/95 z-50 transition-all duration-500 ease-out backdrop-blur-xl">
      <div className="h-full overflow-auto">
        <div className="relative min-h-full">
          {/* Hero Section */}
          <div className="relative h-[40vh] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
            <button 
              onClick={onBack}
              className="absolute top-6 left-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center mb-4">
                  <svg className="w-20 h-20 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">{artist}</h1>
                <p className="text-white/80">{artistSongs.length} {artistSongs.length === 1 ? 'track' : 'tracks'}</p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/95 to-transparent"></div>
          </div>

          {/* Songs List */}
          <div className="max-w-3xl mx-auto px-6 py-8 -mt-12 relative">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="space-y-2">
                {artistSongs.map(song => (
                  <div
                    key={song.id}
                    onClick={() => onPlayTrack(song)}
                    className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-white/80 cursor-pointer transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {currentTrack?.id === song.id && isPlaying ? (
                        <div className="w-6 h-6 relative">
                          <span className="absolute w-1 h-6 bg-white rounded-full transform -translate-x-2 animate-music-bar-1"></span>
                          <span className="absolute w-1 h-6 bg-white rounded-full animate-music-bar-2"></span>
                          <span className="absolute w-1 h-6 bg-white rounded-full transform translate-x-2 animate-music-bar-3"></span>
                        </div>
                      ) : (
                        <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{song.name}</h3>
                      <p className="text-sm text-gray-500">{formatDuration(240)}</p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const audioRef = React.useRef(new Audio());

  const playTrack = (track) => {
    if (currentTrack && currentTrack.id === track.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = audioRef.current;
      audio.src = `${process.env.PUBLIC_URL}/music/${track.fileName}`;
      audio.play();
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (currentTrack) {
      playTrack(currentTrack);
    }
  };

  const nextTrack = () => {
    if (currentTrack) {
      const currentIndex = musicLibrary.findIndex(track => track.id === currentTrack.id);
      const nextIndex = (currentIndex + 1) % musicLibrary.length;
      playTrack(musicLibrary[nextIndex]);
    }
  };

  const previousTrack = () => {
    if (currentTrack) {
      const currentIndex = musicLibrary.findIndex(track => track.id === currentTrack.id);
      const previousIndex = (currentIndex - 1 + musicLibrary.length) % musicLibrary.length;
      playTrack(musicLibrary[previousIndex]);
    }
  };

  // Add event listener for when a song ends
  React.useEffect(() => {
    const audio = audioRef.current;
    
    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]); // Re-run when currentTrack changes

  const filteredSongs = React.useMemo(() => {
    if (!searchTerm) return musicLibrary;
    return musicLibrary.filter(song => 
      song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
    <div className="h-screen flex flex-col bg-gradient-to-br from-purple-200 via-pink-100 to-indigo-200 relative overflow-hidden animate-blur-fade-in">
      <Header onSearchClick={() => setIsSearchModalOpen(true)} />
      <div className="flex-1 flex overflow-hidden pt-16">
        <div className="w-64 flex-shrink-0 hidden md:block">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto">
          <MainContent musicLibrary={musicLibrary} onPlayTrack={playTrack} currentTrack={currentTrack} isPlaying={isPlaying} onSelectArtist={setSelectedArtist} />
        </main>
      </div>
      <div className="h-24 flex-shrink-0">
        <Player 
          currentTrack={currentTrack} 
          isPlaying={isPlaying} 
          onTogglePlay={togglePlay}
          onNextTrack={nextTrack}
          onPreviousTrack={previousTrack}
          audioRef={audioRef}
        />
      </div>

      {/* Artist Page */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-lg z-50
          transition-all duration-700 ease-in-out
          ${selectedArtist 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-full pointer-events-none'
          }`}
      >
        <div 
          className={`w-full h-full overflow-y-auto transition-all duration-700 delay-100
            ${selectedArtist ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {selectedArtist && (
            <div className="max-w-7xl mx-auto px-4 py-8">
              <button 
                onClick={() => setSelectedArtist(null)}
                className="text-white/80 hover:text-white mb-6 flex items-center space-x-2 group transition-all
                  hover:-translate-x-2 duration-300"
              >
                <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to All Artists</span>
              </button>

              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md
                transform transition-all duration-700 delay-200
                ${selectedArtist ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}"
              >
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500 via-pink-500 to-violet-500 
                    rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-700 delay-300
                    hover:scale-105 hover:rotate-3"
                  >
                    <svg className="w-16 h-16 md:w-20 md:h-20 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                  <div className="transform transition-all duration-700 delay-400">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedArtist}</h1>
                    <p className="text-white/60">{musicLibrary.filter(song => song.artist === selectedArtist).length} songs</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {musicLibrary
                    .filter(song => song.artist === selectedArtist)
                    .map((song, index) => (
                      <div 
                        key={song.id}
                        className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 flex items-center space-x-4 
                          transition-all duration-300 cursor-pointer transform hover:scale-[1.02]
                          animate-fade-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => playTrack(song)}
                      >
                        <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500/50 to-pink-500/50 
                          rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden 
                          group-hover:scale-105 transition-all duration-300"
                        >
                          {currentTrack?.id === song.id && isPlaying ? (
                            <div className="flex items-center space-x-1">
                              <span className="w-1 h-8 bg-white/90 rounded-full animate-music-bar-1"></span>
                              <span className="w-1 h-8 bg-white/90 rounded-full animate-music-bar-2"></span>
                              <span className="w-1 h-8 bg-white/90 rounded-full animate-music-bar-3"></span>
                            </div>
                          ) : (
                            <svg className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform duration-300" 
                              fill="currentColor" viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-white font-medium truncate">{song.name}</h3>
                          <p className="text-white/60 text-sm truncate">{formatDuration(song.duration)}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Modal */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50 ${isSearchModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-20 left-4 right-4 max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-4 transition-all duration-300 transform origin-top ${isSearchModalOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'}`}>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search songs or artists..."
              className="w-full px-4 py-3 rounded-lg bg-purple-50/50 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-gray-800 placeholder-gray-400"
              autoFocus
            />
            <button
              onClick={() => {
                setSearchTerm('');
                setIsSearchModalOpen(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            {filteredSongs.length > 0 ? (
              <div className="grid gap-2">
                {filteredSongs.map((song) => (
                  <div
                    key={song.id}
                    onClick={() => {
                      playTrack(song);
                      setIsSearchModalOpen(false);
                      setSearchTerm('');
                    }}
                    className="flex items-center space-x-4 p-3 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-medium text-gray-800 truncate">{song.name}</h3>
                      <p className="text-sm text-gray-500 truncate">{song.artist}</p>
                    </div>
                    {currentTrack?.id === song.id && isPlaying && (
                      <div className="flex-shrink-0 ml-auto">
                        <div className="w-4 h-4 relative">
                          <span className="absolute w-1 h-4 bg-purple-600 rounded-full transform -translate-x-2 animate-music-bar-1"></span>
                          <span className="absolute w-1 h-4 bg-purple-600 rounded-full animate-music-bar-2"></span>
                          <span className="absolute w-1 h-4 bg-purple-600 rounded-full transform translate-x-2 animate-music-bar-3"></span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : searchTerm ? (
              <div className="text-center py-8 text-gray-500">
                No songs found for "{searchTerm}"
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
