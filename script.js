const firebaseConfig = {
    apiKey: "AIzaSyDMq1Zw9cGEH3zhPCAJDRqCm-x28STl-ME",
    authDomain: "movieaccountdatabase.firebaseapp.com",
    databaseURL: "https://movieaccountdatabase-default-rtdb.asia-southeast1.firebasedatabase.app", // Thêm dòng này
    projectId: "movieaccountdatabase",
    storageBucket: "movieaccountdatabase.firebasestorage.app",
    messagingSenderId: "586729188590",
    appId: "1:586729188590:web:94bbe31b1a2250156b97ff",
    measurementId: "G-RWY3P7ZT7W"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            lazyLoadObserver.unobserve(img);
        }
    });
}, {
    rootMargin: '100px',
    threshold: 0.1
});


const apiKey = 'e9c81b7504c84416d31eb71a97491826';
const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

//ngon ngu 
const translations = {
    vi: {
        // Navbar
        logo: "ROTTEN POTATOES",
        menu: "Menu",
        popularMovies: "Phim Phổ Biến",
        topRatedMovies: "Phim Đánh Giá Cao",
        upcomingMovies: "Phim Sắp Chiếu",
        actors: "Diễn viên",
        directors: "Đạo diễn",
        favorites: "Yêu thích",
        searchPlaceholder: "Tìm kiếm phim...",
        login: "Đăng nhập",
        logout: "(Đăng xuất)",

        // Auth Modal
        loginTitle: "Đăng nhập",
        registerTitle: "Đăng ký",
        resetTitle: "Reset mật khẩu",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Mật khẩu",
        namePlaceholder: "Họ tên",
        confirmPasswordPlaceholder: "Nhập lại mật khẩu",
        loginBtn: "Đăng nhập",
        registerBtn: "Đăng ký",
        resetBtn: "Gửi liên kết reset",
        noAccount: "Chưa có tài khoản?",
        haveAccount: "Đã có tài khoản?",
        forgotPassword: "Quên mật khẩu?",
        backToLogin: "Quay lại Đăng nhập",
        loginError: "Email hoặc mật khẩu không đúng",
        registerError: "Đăng ký không thành công",
        resetError: "Có lỗi khi gửi email reset",

        // Main Section
        popularSection: "Phim Phổ Biến",
        topRatedSection: "Phim Đánh Giá Cao",
        upcomingSection: "Phim Sắp Chiếu",
        favoritesSection: "Phim Yêu Thích",
        actorsSection: "Diễn viên nổi bật",
        directorsSection: "Đạo diễn nổi bật",
        searchResults: "Kết quả tìm kiếm: ",
        noMovies: "Không tìm thấy phim nào.",
        loadingError: "Lỗi khi tải phim. Vui lòng thử lại sau.",
        previous: "Trang trước",
        next: "Trang sau",

        // Movie Modal
        releaseDate: "Ngày phát hành:",
        rating: "Đánh giá:",
        runtime: "Thời lượng:",
        genres: "Thể loại:",
        genreSection: "Thể loại:",
        allGenres: "Tất cả thể loại",
        overview: "Nội dung:",
        noTrailer: "Không có trailer",
        rateMovie: "Đánh giá phim",
        comments: "Bình luận",
        commentPlaceholder: "Viết bình luận của bạn...",
        submitComment: "Gửi",
        averageRating: "Điểm trung bình:",
        yourRating: "Bạn đã đánh giá:",
        noComments: "Chưa có bình luận nào.",

        // Toast Messages
        loginSuccess: "Đăng nhập thành công!",
        registerSuccess: "Đăng ký thành công!",
        logoutSuccess: "Đã đăng xuất",
        commentSuccess: "Bình luận đã được đăng!",
        ratingSuccess: "Cảm ơn bạn đã đánh giá!",
        resetSuccess: "Đã gửi liên kết reset mật khẩu đến email của bạn!",
        commentDeleted: "Bình luận đã được xóa!",
        confirmDelete: "Bạn có chắc chắn muốn xóa bình luận này?",
        of: "của"
    },
    en: {
        // Navbar
        logo: "ROTTEN POTATOES",
        menu: "Menu",
        popularMovies: "Popular Movies",
        topRatedMovies: "Top Rated Movies",
        upcomingMovies: "Upcoming Movies",
        actors: "Actors",
        directors: "Directors",
        favorites: "Favorites",
        searchPlaceholder: "Search movies...",
        login: "Login",
        logout: "(Logout)",

        // Auth Modal
        loginTitle: "Login",
        registerTitle: "Register",
        resetTitle: "Reset Password",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        namePlaceholder: "Full Name",
        confirmPasswordPlaceholder: "Confirm Password",
        loginBtn: "Login",
        registerBtn: "Register",
        resetBtn: "Send Reset Link",
        noAccount: "Don't have an account?",
        haveAccount: "Already have an account?",
        forgotPassword: "Forgot password?",
        backToLogin: "Back to Login",
        loginError: "Incorrect email or password",
        registerError: "Registration failed",
        resetError: "Error sending reset email",

        // Main Section
        popularSection: "Popular Movies",
        topRatedSection: "Top Rated Movies",
        upcomingSection: "Upcoming Movies",
        favoritesSection: "Favorite Movies",
        actorsSection: "Popular Actors",
        directorsSection: "Popular Directors",
        searchResults: "Search Results: ",
        noMovies: "No movies found.",
        loadingError: "Error loading movies. Please try again later.",
        previous: "Previous",
        next: "Next",

        // Movie Modal
        releaseDate: "Release Date:",
        rating: "Rating:",
        runtime: "Runtime:",
        genres: "Genres:",
        genreSection: "Genre:",
        allGenres: "All Genres",
        overview: "Overview:",
        noTrailer: "No trailer available",
        rateMovie: "Rate Movie",
        comments: "Comments",
        commentPlaceholder: "Write your comment...",
        submitComment: "Submit",
        averageRating: "Average Rating:",
        yourRating: "You rated:",
        noComments: "No comments yet.",

        // Toast Messages
        loginSuccess: "Login successful!",
        registerSuccess: "Registration successful!",
        logoutSuccess: "Logged out",
        commentSuccess: "Comment posted!",
        ratingSuccess: "Thank you for rating!",
        resetSuccess: "Password reset link sent to your email!",
        commentDeleted: "Comment deleted!",
        confirmDelete: "Are you sure you want to delete this comment?",
        of: "of"
    }
};
let currentLanguage = 'vi'; // Ngôn ngữ mặc định
let currentPage = 1;
let currentFilter = 'popular';
let totalPages = 1;
let currentDisplayMode = 'movies'; // 'movies' or 'people'
let currentUser = null;
let currentMovieId = null;
let currentGenreId = null; // Lưu ID thể loại hiện tại
let currentGenreName = null; // Thêm biến toàn cục để lưu tên thể loại

// DOM Elements
const searchBar = document.getElementById('search-bar');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageNumber = document.getElementById('page-number');
const modal = document.getElementById('movie-modal');
const closeModal = document.querySelector('.close');
const loadingSpinner = document.getElementById('loading-spinner');
const errorMessage = document.getElementById('error-message');
const movieGrid = document.getElementById('movie-grid');
const sectionTitle = document.getElementById('section-title');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    firebase.initializeApp(firebaseConfig);

    checkAuth();

    fetchMovies(currentPage, currentFilter, currentLanguage); // Khởi tạo với currentLanguage
    loadFavorites();
    loadGenres();

    // Navigation
    document.querySelectorAll('.submenu a[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentFilter = link.dataset.filter;
            currentPage = 1;
            currentDisplayMode = 'movies';
            fetchMovies(currentPage, currentFilter, currentLanguage);
            updateLanguage(currentLanguage); // Cập nhật giao diện sau khi tải dữ liệu
        });
    });

    const commentForm = document.getElementById('comment-form');

    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!currentUser) {
            showAuthModal('login'); // Hiển thị modal đăng nhập
            // Lưu movieId để quay lại sau khi đăng nhập
            sessionStorage.setItem('pendingCommentMovieId', currentMovieId);
            return;
        }

        if (!currentMovieId) {
            showError('Vui lòng chọn một phim để bình luận');
            return;
        }

        const commentText = document.getElementById('comment-text').value.trim();
        if (!commentText) return;

        try {
            const newCommentRef = database.ref(`movies/${currentMovieId}/comments`).push();
            await newCommentRef.set({
                userId: currentUser.id,
                userName: currentUser.name,
                text: commentText,
                timestamp: Date.now()
            });

            document.getElementById('comment-text').value = '';
            showToast('Bình luận đã được đăng!');
            loadComments(currentMovieId);
        } catch (error) {
            showError('Có lỗi khi đăng bình luận');
            console.error(error);
        }
    });
    //dien vien
    document.getElementById('actors').addEventListener('click', async (e) => {
        e.preventDefault();
        currentDisplayMode = 'people';
        showLoading();
        try {
            const response = await fetch(`${baseUrl}/person/popular?api_key=${apiKey}&language=${currentLanguage}`);
            const data = await response.json();
            displayPeople(data.results, translations[currentLanguage].actorsSection);
            updateLanguage(currentLanguage);
        } catch (error) {
            showError(translations[currentLanguage].loadingError);
        } finally {
            hideLoading();
        }
    });
    //dao dien
    document.getElementById('directors').addEventListener('click', async (e) => {
        e.preventDefault();
        currentDisplayMode = 'people';
        showLoading();
        try {
            const response = await fetch(`${baseUrl}/person/popular?api_key=${apiKey}&language=${currentLanguage}`);
            const data = await response.json();
            const directors = data.results.filter(person => person.known_for_department === 'Directing');
            displayPeople(directors, translations[currentLanguage].directorsSection);
            updateLanguage(currentLanguage);
        } catch (error) {
            showError(translations[currentLanguage].loadingError);
        } finally {
            hideLoading();
        }
    });
    //yeu thich
    document.getElementById('favorites').addEventListener('click', async (e) => {
        e.preventDefault();
        showLoading();
        try {
            await displayFavoriteMovies();
            updateLanguage(currentLanguage);
        } catch (error) {
            showError(translations[currentLanguage].loadingError);
        } finally {
            hideLoading();
        }
    });

    // Search
    searchBar.addEventListener('input', debounce(searchMovies, 500));

    // Pagination
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            if (currentDisplayMode === 'movies') {
                if (currentGenreId) {
                    fetchMoviesByGenre(currentPage, currentGenreId, currentGenreName);
                } else {
                    fetchMovies(currentPage, currentFilter, currentLanguage);
                }
            } else {
                fetchPeople(currentPage, currentLanguage);
            }
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            if (currentDisplayMode === 'movies') {
                if (currentGenreId) {
                    fetchMoviesByGenre(currentPage, currentGenreId, currentGenreName);
                } else {
                    fetchMovies(currentPage, currentFilter, currentLanguage);
                }
            } else {
                fetchPeople(currentPage, currentLanguage);
            }
        }
    });

    // Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Language selector
    document.querySelector('.language-selector select').addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        currentPage = 1;
        currentLanguage = selectedLanguage;
        if (currentDisplayMode === 'movies') {
            if (currentGenreId) {
                // Nếu đang lọc theo thể loại, tải lại phim theo thể loại với ngôn ngữ mới
                fetchMoviesByGenre(currentPage, currentGenreId, sectionTitle.textContent.split(': ')[1]);
            } else {
                fetchMovies(currentPage, currentFilter, currentLanguage);
            }
        } else if (currentDisplayMode === 'people') {
            fetchPeople(currentPage, currentLanguage);
        } else if (currentDisplayMode === 'favorites') {
            displayFavoriteMovies();
        }
        loadGenres(); // Tải lại danh sách thể loại với ngôn ngữ mới
        updateLanguage(currentLanguage);
    });

    // Toggle menu visibility
    // Thay thế phần xử lý menu toggle bằng code này
    document.getElementById('menu-toggle').addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = document.querySelector('.submenu');
        const hasSubmenu = document.querySelector('.has-submenu');

        // Đóng tất cả submenu trước khi mở menu chính
        document.querySelectorAll('.submenu').forEach(menu => {
            menu.style.display = 'none';
        });

        // Toggle menu chính
        document.querySelector('.main-menu').classList.toggle('mobile-visible');

        // Toggle class active cho has-submenu
        hasSubmenu.classList.toggle('active');

        // Nếu menu đang hiển thị, hiển thị submenu
        if (hasSubmenu.classList.contains('active')) {
            submenu.style.display = 'block';
        } else {
            submenu.style.display = 'none';
        }
    });
    // ResetPassword
    document.getElementById('show-reset').addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal('reset');
    });

    document.getElementById('show-login-from-reset').addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal('login');
    });
    document.getElementById('reset-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('reset-email').value;

        showLoading();
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            showToast('Đã gửi liên kết reset mật khẩu đến email của bạn!');
            document.getElementById('auth-modal').style.display = 'none';
        } catch (error) {
            let errorMessage = 'Có lỗi khi gửi email reset';
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'Email chưa được đăng ký';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Email không hợp lệ';
                    break;
            }
            showFormError('reset', errorMessage);
        } finally {
            hideLoading();
        }
    });

    // Đóng menu khi click ra ngoài
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            document.querySelector('.main-menu').classList.remove('mobile-visible');
            document.querySelector('.has-submenu').classList.remove('active');
            document.querySelector('.submenu').style.display = 'none';
        }
    });
    document.getElementById('auth-link').addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal('login');
    });

    document.getElementById('show-register').addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal('register');
    });

    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal('login');
    });

    document.querySelector('.close-auth').addEventListener('click', () => {
        document.getElementById('auth-modal').style.display = 'none';
    });

    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    document.getElementById('genres-toggle').addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = document.getElementById('genres-submenu');
        const hasSubmenu = document.getElementById('genres-toggle').parentElement;

        // Đóng tất cả submenu khác
        document.querySelectorAll('.submenu').forEach(menu => {
            if (menu !== submenu) {
                menu.style.display = 'none';
                menu.parentElement.classList.remove('active');
            }
        });

        // Toggle submenu thể loại
        hasSubmenu.classList.toggle('active');
        submenu.style.display = hasSubmenu.classList.contains('active') ? 'block' : 'none';
    });
    //Page selector
    const pageSelector = document.getElementById('page-selector');
    pageSelector.addEventListener('change', (e) => {
        let selectedPage = parseInt(e.target.value);

        // Kiểm tra giá trị hợp lệ
        if (isNaN(selectedPage) || selectedPage < 1) {
            selectedPage = 1;
        } else if (selectedPage > totalPages) {
            selectedPage = totalPages;
        }

        currentPage = selectedPage;
        if (currentDisplayMode === 'movies') {
            if (currentGenreId) {
                fetchMoviesByGenre(currentPage, currentGenreId, currentGenreName);
            } else {
                fetchMovies(currentPage, currentFilter, currentLanguage);
            }
        } else {
            fetchPeople(currentPage, currentLanguage);
        }
    });

    // Ngăn nhập ký tự không phải số
    pageSelector.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
});

// Fetch movies from API
async function fetchMovies(page = 1, filter = 'popular', language = currentLanguage) {
    showLoading();
    hideError();
    currentDisplayMode = 'movies';

    try {
        const response = await fetch(`${baseUrl}/movie/${filter}?api_key=${apiKey}&language=${language}&region=VN&page=${page}`);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        totalPages = data.total_pages;
        displayMovies(data.results);
        updatePagination(page, totalPages);

        sectionTitle.textContent =
            filter === 'popular' ? translations[language].popularSection :
                filter === 'top_rated' ? translations[language].topRatedSection :
                    translations[language].upcomingSection;
    } catch (error) {
        showError(translations[language].loadingError);
        console.error('Error fetching movies:', error);
    } finally {
        hideLoading();
    }
}

// Fetch people from API
async function fetchPeople(page = 1, language = currentLanguage) {
    showLoading();
    hideError();

    try {
        const response = await fetch(`${baseUrl}/person/popular?api_key=${apiKey}&language=${language}&page=${page}`);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        totalPages = data.total_pages;
        displayPeople(data.results, translations[language].actorsSection);
        updatePagination(page, totalPages);
    } catch (error) {
        showError(translations[language].loadingError);
        console.error('Error fetching people:', error);
    } finally {
        hideLoading();
    }
}

// Display movies in grid
function displayMovies(movies) {
    movieGrid.innerHTML = '';

    if (!movies || movies.length === 0) {
        showError('Không tìm thấy phim nào.');
        return;
    }

    const favorites = currentUser
        ? currentUser.favorites || []
        : JSON.parse(localStorage.getItem('favorites')) || [];

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // Sửa lại phần img để sử dụng data-src thay vì src
        movieCard.innerHTML = `
            <img data-src="${movie.poster_path ? imageBaseUrl + movie.poster_path : 'https://via.placeholder.com/300x450?text=No+Image'}" 
                 alt="${movie.title}" 
                 class="lazy-load" 
                 loading="lazy">
            <button class="favorite-btn ${favorites.includes(movie.id) ? 'active' : ''}" 
                    data-movie-id="${movie.id}">
                ♥
            </button>
            <div class="rating">${movie.vote_average?.toFixed(1) || 'N/A'}</div>
            <div class="info">
                <h3>${movie.title}</h3>
                <div class="year">${movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</div>
            </div>
        `;

        movieCard.addEventListener('click', () => showMovieDetails(movie.id, movie.title, movie.overview));

        // Thêm observer cho ảnh
        const img = movieCard.querySelector('img');
        lazyLoadObserver.observe(img);

        // Thêm sự kiện cho nút yêu thích
        const favBtn = movieCard.querySelector('.favorite-btn');
        favBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            const movieId = parseInt(this.dataset.movieId);
            const isFavorite = toggleFavorite(movieId);
            this.classList.toggle('active', isFavorite);
        });

        movieGrid.appendChild(movieCard);
    });
}

// Display people in grid
function displayPeople(people, title) {
    movieGrid.innerHTML = '';
    sectionTitle.textContent = title;

    if (!people || people.length === 0) {
        showError('Không tìm thấy thông tin.');
        return;
    }

    people.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('person-card');
        personCard.innerHTML = `
            <img src="${person.profile_path ? imageBaseUrl + person.profile_path : 'https://via.placeholder.com/300x450?text=No+Image'}" 
                 alt="${person.name}" loading="lazy">
            <div class="info">
                <h3>${person.name}</h3>
                <div class="known-for">${person.known_for_department}</div>
            </div>
        `;

        // Thêm sự kiện click để hiển thị chi tiết diễn viên
        personCard.addEventListener('click', () => showPersonDetails(person.id, person.name));

        movieGrid.appendChild(personCard);
    });
}

// Trong file script.js
// Trong file script.js
async function showPersonDetails(personId, name) {
    showLoading();

    try {
        const personResponse = await fetch(`${baseUrl}/person/${personId}?api_key=${apiKey}&language=${currentLanguage}`);
        if (!personResponse.ok) throw new Error('Failed to fetch person details');
        const personDetails = await personResponse.json();

        const creditsResponse = await fetch(`${baseUrl}/person/${personId}/movie_credits?api_key=${apiKey}&language=${currentLanguage}`);
        if (!creditsResponse.ok) throw new Error('Failed to fetch movie credits');
        const creditsData = await creditsResponse.json();

        document.getElementById('modal-title').textContent = name;
        const videoPlayer = document.getElementById('video-player');
        videoPlayer.innerHTML = personDetails.profile_path
            ? `<img src="${imageBaseUrl}${personDetails.profile_path}" alt="${name}" class="person-profile-img">`
            : '<p>No image</p>';

        document.getElementById('modal-overview').innerHTML = `
            <p><strong>Birthday:</strong> ${personDetails.birthday || 'N/A'}</p>
            <p><strong>Place of Birth:</strong> ${personDetails.place_of_birth || 'N/A'}</p>
            <p><strong>Gender:</strong> ${personDetails.gender === 2 ? 'Male' : personDetails.gender === 1 ? 'Female' : 'Unknown'}</p>
            <p><strong>Known For:</strong> ${personDetails.known_for_department || 'N/A'}</p>
            <p><strong>Biography:</strong> ${personDetails.biography || 'No biography'}</p>
            <p><strong>Notable Movies:</strong> ${creditsData.cast
                .slice(0, 5)
                .map(movie => movie.title)
                .join(', ') || 'N/A'
            }</p>
        `;

        document.querySelector('.rating-section').style.display = 'none';
        document.querySelector('.comments-section').style.display = 'none';

        modal.style.display = 'flex';
    } catch (error) {
        showError(translations[currentLanguage].loadingError);
        console.error('Error fetching person details:', error);
    } finally {
        hideLoading();
    }
}

// Display favorite movies
async function displayFavoriteMovies() {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }

    const userRef = database.ref('users/' + currentUser.id + '/favorites');
    const snapshot = await userRef.once('value');
    const favorites = snapshot.val() || [];

    if (favorites.length === 0) {
        movieGrid.innerHTML = '';
        showError(translations[currentLanguage].noMovies);
        sectionTitle.textContent = translations[currentLanguage].favoritesSection;
        return;
    }

    showLoading();
    currentDisplayMode = 'favorites';
    sectionTitle.textContent = translations[currentLanguage].favoritesSection;

    try {
        const moviePromises = favorites.map(movieId =>
            fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=${currentLanguage}`)
                .then(response => response.json())
        );

        const movies = await Promise.all(moviePromises);
        displayMovies(movies);
    } catch (error) {
        showError(translations[currentLanguage].loadingError);
        console.error('Error fetching favorites:', error);
    } finally {
        hideLoading();
    }
}

// Toggle favorite status
async function toggleFavorite(movieId) {
    if (!currentUser || !currentUser.id) {  // Thêm kiểm tra currentUser.id
        showAuthModal('login');
        return false;
    }

    const userRef = database.ref('users/' + currentUser.id + '/favorites');
    const snapshot = await userRef.once('value');
    const favorites = snapshot.val() || [];
    const index = favorites.indexOf(movieId);

    if (index === -1) {
        favorites.push(movieId);
    } else {
        favorites.splice(index, 1);
    }

    await userRef.set(favorites);
    currentUser.favorites = favorites;

    return index === -1;
}
// Load favorites from localStorage
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites;
}

// Show movie details in modal
// Trong file script.js
async function showMovieDetails(movieId, title, overview) {
    showLoading();

    try {
        const movieResponse = await fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=${currentLanguage}`);
        if (!movieResponse.ok) throw new Error('Failed to fetch movie details');
        const movieDetails = await movieResponse.json();

        const videoResponse = await fetch(`${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}`);
        if (!videoResponse.ok) throw new Error('Failed to fetch videos');
        const videoData = await videoResponse.json();
        const trailer = videoData.results.find(video => video.type === 'Trailer');

        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-overview').innerHTML = `
            <p><strong>${translations[currentLanguage].releaseDate}</strong> ${movieDetails.release_date || 'N/A'}</p>
            <p><strong>${translations[currentLanguage].rating}</strong> ${movieDetails.vote_average.toFixed(1)}/10 (${movieDetails.vote_count} votes)</p>
            <p><strong>${translations[currentLanguage].runtime}</strong> ${movieDetails.runtime ? movieDetails.runtime + ' minutes' : 'N/A'}</p>
            <p><strong>${translations[currentLanguage].genres}</strong> ${movieDetails.genres.map(genre => genre.name).join(', ') || 'N/A'}</p>
            <p><strong>${translations[currentLanguage].overview}</strong> ${overview || 'No description.'}</p>
        `;

        const videoPlayer = document.getElementById('video-player');
        if (trailer) {
            videoPlayer.innerHTML = `
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.key}" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            `;
        } else {
            videoPlayer.innerHTML = `<p>${translations[currentLanguage].noTrailer}</p>`;
        }

        document.querySelector('.rating-section').style.display = 'block';
        document.querySelector('.comments-section').style.display = 'flex';

        modal.style.display = 'flex';
    } catch (error) {
        showError(translations[currentLanguage].loadingError);
        console.error('Error fetching movie details:', error);
    } finally {
        hideLoading();
    }

    loadRatings(movieId);
    loadComments(movieId);
    setupRatingSystem(movieId);
    setupCommentSystem(movieId);
}

// Search movies
async function searchMovies() {
    const query = searchBar.value.trim().toLowerCase();
    if (query.length <= 2) {
        if (query.length === 0) {
            currentPage = 1;
            if (currentDisplayMode === 'movies') {
                if (currentGenreId) {
                    fetchMoviesByGenre(currentPage, currentGenreId, currentGenreName);
                } else {
                    fetchMovies(currentPage, currentFilter, currentLanguage);
                }
            } else if (currentDisplayMode === 'favorites') {
                displayFavoriteMovies();
            }
        }
        return;
    }

    showLoading();
    hideError();

    try {
        let response = await fetch(
            `${baseUrl}/search/movie?api_key=${apiKey}&language=${currentLanguage}®ion=VN&query=${encodeURIComponent(query)}&page=${currentPage}`
        );
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        totalPages = data.total_pages;

        let filteredResults = data.results;
        if (currentDisplayMode === 'movies' && currentGenreId) {
            // Lọc phim theo thể loại đã chọn
            filteredResults = data.results.filter(movie =>
                movie.genre_ids && movie.genre_ids.includes(parseInt(currentGenreId))
            );
            sectionTitle.textContent = `${translations[currentLanguage].searchResults}"${query}" (${translations[currentLanguage].genreSection} ${currentGenreName})`;
        } else {
            sectionTitle.textContent = `${translations[currentLanguage].searchResults}"${query}"`;
        }

        displayMovies(filteredResults);
        updatePagination(currentPage, totalPages);

        if (filteredResults.length === 0 && currentGenreId) {
            showError(`Không tìm thấy phim "${query}" trong thể loại ${currentGenreName}`);
        }
    } catch (error) {
        showError(translations[currentLanguage].loadingError);
        console.error('Error searching movies:', error);
    } finally {
        hideLoading();
    }
}

// Update pagination controls
function updatePagination(page, total) {
    pageNumber.textContent = page;
    document.getElementById('total-pages').textContent = total;
    prevPageBtn.disabled = page <= 1;
    nextPageBtn.disabled = page >= total;

    const pageSelector = document.getElementById('page-selector');
    pageSelector.max = total; // Giới hạn tối đa là tổng số trang
    pageSelector.value = page; // Hiển thị trang hiện tại trong input

    if (total === 1) {
        prevPageBtn.style.display = 'none';
        nextPageBtn.style.display = 'none';
        pageNumber.style.display = 'none';
        document.getElementById('total-pages').style.display = 'none';
        pageSelector.style.display = 'none';
    } else {
        prevPageBtn.style.display = 'inline-block';
        nextPageBtn.style.display = 'inline-block';
        pageNumber.style.display = 'inline-block';
        document.getElementById('total-pages').style.display = 'inline-block';
        pageSelector.style.display = 'inline-block';
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Loading state functions
function showLoading() {
    loadingSpinner.style.display = 'block';
    movieGrid.style.opacity = '0.5';
}

function hideLoading() {
    loadingSpinner.style.display = 'none';
    movieGrid.style.opacity = '1';
}

// Error handling functions
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function hideError() {
    errorMessage.style.display = 'none';
}

// Cập nhật các hàm khác
function showAuthModal(formType) {
    document.querySelectorAll('.auth-form .error-message').forEach(el => {
        el.classList.remove('show');
    });

    const authModal = document.getElementById('auth-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const resetForm = document.getElementById('reset-form');

    authModal.style.display = 'flex';

    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    resetForm.style.display = 'none';

    if (formType === 'login') {
        document.getElementById('auth-title').textContent = translations[currentLanguage].loginTitle;
        loginForm.style.display = 'flex';
    } else if (formType === 'register') {
        document.getElementById('auth-title').textContent = translations[currentLanguage].registerTitle;
        registerForm.style.display = 'flex';
    } else if (formType === 'reset') {
        document.getElementById('auth-title').textContent = translations[currentLanguage].resetTitle;
        resetForm.style.display = 'flex';
    }
}
async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    document.getElementById('login-error').classList.remove('show');

    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        const userRef = database.ref('users/' + user.uid);
        const snapshot = await userRef.once('value');
        const userData = snapshot.val();

        if (!userData) {
            throw new Error('User data not found');
        }

        currentUser = {
            id: user.uid,
            email: user.email,
            name: userData.name || email.split('@')[0],
            favorites: userData.favorites || []
        };

        updateAuthUI();
        document.getElementById('auth-modal').style.display = 'none';
        showToast(translations[currentLanguage].loginSuccess);
    } catch (error) {
        let errorMessage = translations[currentLanguage].loginError;
        switch (error.code) {
            case 'auth/user-not-found':
                errorMessage = currentLanguage === 'vi' ? 'Email chưa được đăng ký' : 'Email not registered';
                break;
            case 'auth/wrong-password':
                errorMessage = currentLanguage === 'vi' ? 'Mật khẩu không đúng' : 'Incorrect password';
                break;
            case 'auth/invalid-email':
                errorMessage = currentLanguage === 'vi' ? 'Email không hợp lệ' : 'Invalid email';
                break;
        }
        showFormError('login', errorMessage);
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;

    if (password !== confirm) {
        showError(currentLanguage === 'vi' ? 'Mật khẩu không khớp' : 'Passwords do not match');
        return;
    }

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        await database.ref('users/' + user.uid).set({
            name: name,
            email: email,
            favorites: [],
            createdAt: firebase.database.ServerValue.TIMESTAMP
        });

        currentUser = {
            id: user.uid,
            email: email,
            name: name,
            favorites: []
        };

        updateAuthUI();
        document.getElementById('auth-modal').style.display = 'none';
        showToast(translations[currentLanguage].registerSuccess);
    } catch (error) {
        let errorMessage = translations[currentLanguage].registerError;
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = currentLanguage === 'vi' ? 'Email đã được sử dụng' : 'Email already in use';
                break;
            case 'auth/weak-password':
                errorMessage = currentLanguage === 'vi' ? 'Mật khẩu quá yếu (tối thiểu 6 ký tự)' : 'Password too weak (minimum 6 characters)';
                break;
            case 'auth/invalid-email':
                errorMessage = currentLanguage === 'vi' ? 'Email không hợp lệ' : 'Invalid email';
                break;
        }
        showFormError('register', errorMessage);
    }
}

function updateAuthUI() {
    const authButton = document.getElementById('auth-button');

    if (currentUser) {
        authButton.innerHTML = `
            <div class="user-info">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=f5c518&color=121212" 
                     alt="${currentUser.name}" class="user-avatar">
                <span class="user-name">${currentUser.name}</span>
                <button class="logout-btn" id="logout-btn">${translations[currentLanguage].logout}</button>
            </div>
        `;
        document.getElementById('logout-btn').addEventListener('click', handleLogout);
    } else {
        authButton.innerHTML = `
            <a href="#" id="auth-link"><i class="fas fa-user"></i> <span data-i18n="login">${translations[currentLanguage].login}</span></a>
        `;
        document.getElementById('auth-link').addEventListener('click', (e) => {
            e.preventDefault();
            showAuthModal('login');
        });
    }
}

function handleLogout() {
    firebase.auth().signOut().then(() => {
        currentUser = null;
        updateAuthUI();
        showToast(translations[currentLanguage].logoutSuccess);
    }).catch((error) => {
        console.error('Logout error:', error);
    });
}
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function checkAuth() {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            try {
                const userRef = database.ref('users/' + user.uid);
                const snapshot = await userRef.once('value');
                let userData = snapshot.val();

                if (!userData) {
                    userData = {
                        name: user.email.split('@')[0],
                        email: user.email,
                        favorites: [],
                        createdAt: Date.now()
                    };
                    await userRef.set(userData);
                }

                currentUser = {
                    id: user.uid,
                    email: user.email,
                    name: userData.name || user.email.split('@')[0],
                    favorites: userData.favorites || []
                };

                updateAuthUI();

                // Kiểm tra nếu có hành động đang chờ
                const pendingRatingMovieId = sessionStorage.getItem('pendingRatingMovieId');
                const pendingCommentMovieId = sessionStorage.getItem('pendingCommentMovieId');

                if (pendingRatingMovieId) {
                    // Mở lại modal chi tiết phim và cho phép đánh giá
                    const movieId = pendingRatingMovieId;
                    sessionStorage.removeItem('pendingRatingMovieId');
                    const movieResponse = await fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=${currentLanguage}`);
                    const movieDetails = await movieResponse.json();
                    showMovieDetails(movieId, movieDetails.title, movieDetails.overview);
                } else if (pendingCommentMovieId) {
                    // Mở lại modal chi tiết phim và cho phép bình luận
                    const movieId = pendingCommentMovieId;
                    sessionStorage.removeItem('pendingCommentMovieId');
                    const movieResponse = await fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=${currentLanguage}`);
                    const movieDetails = await movieResponse.json();
                    showMovieDetails(movieId, movieDetails.title, movieDetails.overview);
                }
            } catch (error) {
                console.error('Lỗi khi lấy thông tin người dùng:', error);
            }
        } else {
            currentUser = null;
            updateAuthUI();
        }
    });
}
async function fetchWithLoading() {
    showLoading();
    const startTime = Date.now();
    try {
        await fetchData();
    } finally {
        const elapsed = Date.now() - startTime;
        if (elapsed < 500) {
            setTimeout(hideLoading, 500 - elapsed);
        } else {
            hideLoading();
        }
    }
}
// Ví dụ sử dụng (nếu có sự kiện scroll/resize)
window.addEventListener('scroll', debounce(() => {
    console.log('Xử lý scroll tối ưu');
}, 200));
// Gọi hàm checkAuth khi tải trang
document.addEventListener('DOMContentLoaded', checkAuth);

// Hàm tải đánh giá
async function loadRatings(movieId) {
    const ratingsRef = database.ref(`movies/${movieId}/ratings`);
    const snapshot = await ratingsRef.once('value');
    const ratings = snapshot.val() || {};

    const ratingsArray = Object.values(ratings);
    const average = ratingsArray.length > 0 ? (ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length) : 0;

    document.getElementById('user-rating').innerHTML = `
        <p>${translations[currentLanguage].averageRating} ${average.toFixed(1)}/5 (${ratingsArray.length} ${currentLanguage === 'vi' ? 'lượt' : 'votes'})</p>
        ${currentUser && ratings[currentUser.id]
            ? `<p>${translations[currentLanguage].yourRating} ${ratings[currentUser.id]} ${currentLanguage === 'vi' ? 'sao' : 'stars'}</p>`
            : ''}
    `;
}

// Hàm tải bình luận
async function loadComments(movieId) {
    const commentsRef = database.ref(`movies/${movieId}/comments`);
    const snapshot = await commentsRef.once('value');
    const comments = snapshot.val() || {};

    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    // Chuyển đổi object thành array và sắp xếp
    const commentsArray = Object.entries(comments).map(([id, comment]) => ({
        id,
        ...comment
    }));

    // Sắp xếp từ mới nhất đến cũ nhất
    commentsArray.sort((a, b) => b.timestamp - a.timestamp);

    // Hiển thị các bình luận đã sắp xếp
    commentsArray.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.dataset.commentId = comment.id; // Lưu ID bình luận để sử dụng sau
        commentElement.innerHTML = `
            <div class="comment-header">
                <span class="comment-user">${comment.userName}</span>
                <span class="comment-time">${formatTime(comment.timestamp)}</span>
            </div>
            <div class="comment-text">${comment.text}</div>
            ${currentUser && currentUser.id === comment.userId
                ? `<button class="delete-comment-btn" data-comment-id="${comment.id}">Xóa</button>`
                : ''
            }
        `;
        commentsList.appendChild(commentElement);
    });

    // Thêm sự kiện cho các nút xóa
    document.querySelectorAll('.delete-comment-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
            const commentId = e.target.dataset.commentId;
            await deleteComment(movieId, commentId);
        });
    });
}

async function deleteComment(movieId, commentId) {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }

    if (!confirm(translations[currentLanguage].confirmDelete || 'Bạn có chắc chắn muốn xóa bình luận này?')) {
        return;
    }

    try {
        const commentRef = database.ref(`movies/${movieId}/comments/${commentId}`);
        const snapshot = await commentRef.once('value');
        const comment = snapshot.val();

        if (comment.userId !== currentUser.id) {
            showError('Bạn chỉ có thể xóa bình luận của chính mình');
            return;
        }

        await commentRef.remove();
        showToast(translations[currentLanguage].commentDeleted || 'Bình luận đã được xóa!');
        loadComments(movieId);
    } catch (error) {
        showError('Có lỗi khi xóa bình luận');
        console.error('Error deleting comment:', error);
    }
}

// Hàm định dạng thời gian
function formatTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;

    if (diff < minute) return 'Vừa xong';
    if (diff < hour) return `${Math.floor(diff / minute)} phút trước`;
    if (diff < day) return `${Math.floor(diff / hour)} giờ trước`;
    if (diff < week) return `${Math.floor(diff / day)} ngày trước`;

    return new Date(timestamp).toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Hệ thống đánh giá sao
function setupRatingSystem(movieId) {
    const stars = document.querySelectorAll('.star-rating span');
    let userRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', async () => {
            if (!currentUser) {
                showAuthModal('login'); // Hiển thị modal đăng nhập
                // Lưu movieId để quay lại sau khi đăng nhập
                sessionStorage.setItem('pendingRatingMovieId', movieId);
                return;
            }

            userRating = parseInt(star.dataset.value);

            // Highlight các sao đã chọn
            stars.forEach((s, i) => {
                s.classList.toggle('active', i < userRating);
            });

            // Lưu đánh giá vào database
            try {
                await database.ref(`movies/${movieId}/ratings/${currentUser.id}`).set(userRating);
                showToast('Cảm ơn bạn đã đánh giá!');
                loadRatings(movieId);
            } catch (error) {
                showError('Có lỗi khi lưu đánh giá');
            }
        });
    });
}

// Hệ thống bình luận
function setupCommentSystem(movieId) {
    currentMovieId = movieId; // Cập nhật movieId hiện tại
}
// Thêm vào file script.js
window.addEventListener('click', (e) => {
    const modal = document.getElementById('movie-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Ngăn sự kiện click lan ra ngoài
document.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});

function showFormError(formId, message) {
    const errorElement = document.getElementById(`${formId}-error`);
    errorElement.textContent = message;
    errorElement.classList.add('show');

    // Tự động ẩn thông báo sau 5 giây
    setTimeout(() => {
        errorElement.classList.remove('show');
    }, 5000);
}



// Hàm cập nhật giao diện ngôn ngữ
function updateLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    // Cập nhật văn bản tĩnh
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[language][key];
    });

    // Cập nhật placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translations[language][key];
    });

    // Chỉ cập nhật UI đăng nhập/đăng xuất
    updateAuthUI();
}

async function loadGenres() {
    try {
        const response = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=${currentLanguage}`);
        if (!response.ok) throw new Error('Failed to fetch genres');
        const data = await response.json();
        displayGenres(data.genres);
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
}

function displayGenres(genres) {
    const genresSubmenu = document.getElementById('genres-submenu');
    genresSubmenu.innerHTML = '';

    // Thêm mục "Tất cả thể loại" (nếu có)
    const allGenresLi = document.createElement('li');
    allGenresLi.className = 'menu-item';
    allGenresLi.innerHTML = `<a href="#" data-genre-id="all"><i class="fas fa-film"></i> ${translations[currentLanguage].allGenres || 'Tất cả thể loại'
        }</a>`;
    genresSubmenu.appendChild(allGenresLi);

    allGenresLi.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        currentGenreId = null;
        currentGenreName = null;
        currentPage = 1;
        currentDisplayMode = 'movies';
        fetchMovies(currentPage, 'popular', currentLanguage);
        updateLanguage(currentLanguage);
    });

    genres.forEach(genre => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.innerHTML = `<a href="#" data-genre-id="${genre.id}"><i class="fas fa-film"></i> ${genre.name}</a>`;
        genresSubmenu.appendChild(li);

        li.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            currentGenreId = genre.id;
            currentGenreName = genre.name; // Lưu tên thể loại
            currentPage = 1;
            currentDisplayMode = 'movies';
            fetchMoviesByGenre(currentPage, currentGenreId, genre.name);
            updateLanguage(currentLanguage);
        });
    });
}

async function fetchMoviesByGenre(page, genreId, genreName) {
    showLoading();
    hideError();
    currentDisplayMode = 'movies';
    currentGenreId = genreId;
    currentGenreName = genreName; // Lưu tên thể loại

    try {
        const response = await fetch(
            `${baseUrl}/discover/movie?api_key=${apiKey}&language=${currentLanguage}®ion=VN&with_genres=${genreId}&page=${page}`
        );
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        totalPages = data.total_pages;
        displayMovies(data.results);
        updatePagination(page, totalPages);

        sectionTitle.textContent = translations[currentLanguage].genreSection
            ? `${translations[currentLanguage].genreSection} ${genreName}`
            : `Thể loại: ${genreName}`;
    } catch (error) {
        showError(translations[currentLanguage].loadingError);
        console.error('Error fetching movies by genre:', error);
    } finally {
        hideLoading();
    }
}