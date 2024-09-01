    const toggle = document.getElementById('toggle');
    const html = document.querySelector("html");

    toggle.addEventListener('click', function()
    {

        toggle.checked ? html.classList.add("dark"): html.classList.remove("dark");
    });