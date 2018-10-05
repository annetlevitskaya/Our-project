var isInitialized = !!localStorage.getItem('users');

if (!isInitialized) {
    initializeApp();
}


function ready() {
    var button = document.querySelector('.menu');
    var links = document.querySelector('.sidebar');
    
    button.addEventListener('mouseover', function() {
        links.classList.add('sidebar--hovered');
    });
    button.addEventListener('mouseout', function() {
        links.classList.remove('sidebar--hovered');
    });

    button.addEventListener('click', handleMenuButtonClick);

    initializeExperianceForm();
    fillUserInfo();
}

function handleMenuButtonClick(e) {
    e.preventDefault();

    var button = document.querySelector('.menu');
    var links = document.querySelector('.sidebar');

    links.classList.toggle('sidebar--opened');
    button.classList.toggle('menu--active');
};

function initializeExperianceForm() {
    var form = document.getElementById('experianceForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formElements = e.target.elements;

        var user = formElements['user'].value;
        var xp = formElements['xp'].value;
        addUserXp(user, xp);
    })
}

function addUserXp(user, xp) {
    var users = JSON.parse(localStorage.getItem('users')) || {};
    var prevUser = users[user] || {};
    var prevXp = prevUser.xp || 0;

    localStorage.setItem('users', JSON.stringify({
        ...users,
        [user]: {
            ...prevUser,
            xp: prevXp + parseInt(xp, 10),
        },
    }));
    fillUserInfo();
}

function fillUserInfo() {
    var userInfoBlock = document.getElementById('userInfo');
    var userId = JSON.parse(localStorage.getItem('profile'));

    if (userInfoBlock && userId) {
        var user = JSON.parse(localStorage.getItem('users'))[userId];
        var name = user && user.name;
        var xp = user && user.xp;

        document.getElementById('userInfoName').innerText = name;
        document.getElementById('userInfoXp').innerText = xp;
    }
}

function initializeApp() {
    var DIMA_ID = 0;
    var ANNET_ID = 1;

    var USERS = {
        [DIMA_ID]: {
            name: 'Dima',
            id: DIMA_ID,
            xp: 0,
        },
        DIMA_ID: '',
        [ANNET_ID]: {
            name: 'Annet',
            id: ANNET_ID,
            xp: 0,
        },
    };

    localStorage.setItem('users', JSON.stringify(USERS));

    if (!localStorage.getItem('profile')) {
        localStorage.setItem('profile', ANNET_ID);
    }
}

document.addEventListener("DOMContentLoaded", ready);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpc0luaXRpYWxpemVkID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcnMnKTtcclxuXHJcbmlmICghaXNJbml0aWFsaXplZCkge1xyXG4gICAgaW5pdGlhbGl6ZUFwcCgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVhZHkoKSB7XHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICBcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLS1ob3ZlcmVkJyk7XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItLWhvdmVyZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1lbnVCdXR0b25DbGljayk7XHJcblxyXG4gICAgaW5pdGlhbGl6ZUV4cGVyaWFuY2VGb3JtKCk7XHJcbiAgICBmaWxsVXNlckluZm8oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudUJ1dHRvbkNsaWNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgbGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci0tb3BlbmVkJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS0tYWN0aXZlJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplRXhwZXJpYW5jZUZvcm0oKSB7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBlcmlhbmNlRm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBlLnRhcmdldC5lbGVtZW50cztcclxuXHJcbiAgICAgICAgdmFyIHVzZXIgPSBmb3JtRWxlbWVudHNbJ3VzZXInXS52YWx1ZTtcclxuICAgICAgICB2YXIgeHAgPSBmb3JtRWxlbWVudHNbJ3hwJ10udmFsdWU7XHJcbiAgICAgICAgYWRkVXNlclhwKHVzZXIsIHhwKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFVzZXJYcCh1c2VyLCB4cCkge1xyXG4gICAgdmFyIHVzZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcnMnKSkgfHwge307XHJcbiAgICB2YXIgcHJldlVzZXIgPSB1c2Vyc1t1c2VyXSB8fCB7fTtcclxuICAgIHZhciBwcmV2WHAgPSBwcmV2VXNlci54cCB8fCAwO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VycycsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAuLi51c2VycyxcclxuICAgICAgICBbdXNlcl06IHtcclxuICAgICAgICAgICAgLi4ucHJldlVzZXIsXHJcbiAgICAgICAgICAgIHhwOiBwcmV2WHAgKyBwYXJzZUludCh4cCwgMTApLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgICBmaWxsVXNlckluZm8oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFVzZXJJbmZvKCkge1xyXG4gICAgdmFyIHVzZXJJbmZvQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckluZm8nKTtcclxuICAgIHZhciB1c2VySWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJykpO1xyXG5cclxuICAgIGlmICh1c2VySW5mb0Jsb2NrICYmIHVzZXJJZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcnMnKSlbdXNlcklkXTtcclxuICAgICAgICB2YXIgbmFtZSA9IHVzZXIgJiYgdXNlci5uYW1lO1xyXG4gICAgICAgIHZhciB4cCA9IHVzZXIgJiYgdXNlci54cDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJbmZvTmFtZScpLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJbmZvWHAnKS5pbm5lclRleHQgPSB4cDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCgpIHtcclxuICAgIHZhciBESU1BX0lEID0gMDtcclxuICAgIHZhciBBTk5FVF9JRCA9IDE7XHJcblxyXG4gICAgdmFyIFVTRVJTID0ge1xyXG4gICAgICAgIFtESU1BX0lEXToge1xyXG4gICAgICAgICAgICBuYW1lOiAnRGltYScsXHJcbiAgICAgICAgICAgIGlkOiBESU1BX0lELFxyXG4gICAgICAgICAgICB4cDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIERJTUFfSUQ6ICcnLFxyXG4gICAgICAgIFtBTk5FVF9JRF06IHtcclxuICAgICAgICAgICAgbmFtZTogJ0FubmV0JyxcclxuICAgICAgICAgICAgaWQ6IEFOTkVUX0lELFxyXG4gICAgICAgICAgICB4cDogMCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcnMnLCBKU09OLnN0cmluZ2lmeShVU0VSUykpO1xyXG5cclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgQU5ORVRfSUQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZWFkeSk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
