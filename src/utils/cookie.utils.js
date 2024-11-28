export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function setCookie(name, value, time) {
    let expires = "";
    if (time) {
        const date = new Date();
        date.setTime(date.getTime() + (time * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}


export function checkAuth() {
    return getCookie('token') != undefined;
}