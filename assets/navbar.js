// 使用JavaScript加载导航栏内容并插入到容器中
document.addEventListener("DOMContentLoaded", function () {
    var navbarContainer = document.getElementById("navbarContainer");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "navbar.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navbarContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
