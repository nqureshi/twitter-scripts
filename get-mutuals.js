// navigate to https://twitter.com/YOURUSERNAME/following, open console, run this
// returns a JSON file with bio, username, handle and mutuals

let finalData = [];

const USER_DIV_SELECTOR = 'div.css-175oi2r.r-1adg3ll.r-1ny4l3l';
const BIO_SELECTOR = 'div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-1h8ys4a.r-1jeg54m';
const USERNAME_SELECTOR = 'div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-b88u0q.r-1awozwy.r-6koalj.r-1udh08x.r-3s2u2q';
const HANDLE_SELECTOR = 'div.css-1rynq56.r-dnmrzs.r-1udh08x.r-3s2u2q.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-1wvb978';
const MUTUALS_SELECTOR = 'div[data-testid="userFollowIndicator"]';

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function isBottomOfPage() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function captureData() {
    Array.from(document.querySelectorAll(USER_DIV_SELECTOR)).forEach(userDiv => {
        let bio = userDiv.querySelector(BIO_SELECTOR)?.textContent.trim() || '';
        let username = userDiv.querySelector(USERNAME_SELECTOR)?.textContent.trim() || '';
        let handle = userDiv.querySelector(HANDLE_SELECTOR)?.textContent.trim() || '';
        let mutuals = !!userDiv.querySelector(MUTUALS_SELECTOR);

        finalData.push({ bio, username, handle, mutuals });
    });
}

function processScrolling() {
    scrollToBottom();
    captureData();
}

captureData();
let interval = setInterval(processScrolling, 2000);
setTimeout(() => {
    clearInterval(interval);
    console.log(finalData);
}, 60000);