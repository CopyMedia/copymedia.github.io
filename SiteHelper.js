/**
 * (c) Copy05 2023 - 2024. All Rights Reserved.
 * 
 * Yes i've used this on all sites i've ever developed.
 */

const Footer = document.getElementsByTagName("footer")[0]
const Header = document.getElementsByTagName("header")[0]
const MobileNavBar = document.getElementById("mobilenavbar")
const Hamburger = document.getElementById("mnb-hamburger")

const HeaderHTML = `
<a href="https://copymedia.github.io/index.html" class="logohref"><img src="https://copymedia.github.io/img/Icon.png" alt="CME Logo" class="logo cme-icon"></a>
        <ul class="nav_links">
            <li class="dktl"><a href="https://copymedia.github.io/about.html" class="header-link dktl">About</a></li>
            <li class="dktl"><a href="#" class="header-link dktl">Industries</a></li>
            <li class="dktl"><a href="#" class="header-link dktl">Company</a></li>
            <li id="mnb-hamburger"><a href="#" id="mnb-hamburger-btn">≡</a></li>
        </ul>
`

const MobileNavBarHTML = `
<div class="mnb_links">
    <a class="mnb-link" href="https://copymedia.github.io/about.html">About</a>
    <a class="mnb-link" href="#">Industries</a>
    <a class="mnb-link" href="#">Company</a>
</div>
`

const FooterHTML = `
<img src="https://copymedia.github.io/img/Icon.png" alt="CME Logo" class="cme-icon footer-logo">

        <div class="centre">
            <div class="footer-sections">
                <div class="footersection">
                    <p class="fs-head">Legal</p>
                    <ul class="feet-nav_links">
                        <li><a href="https://copymedia.github.io/imprint.html" class="feet-link">Imprint</a></li>
                        <li><a href="https://copymedia.github.io/privacy.html" class="feet-link">Privacy Policy</a></li>
                    </ul>
                </div>
    
                <div class="footersection">
                    <p class="fs-head">Company</p>
                    <ul class="feet-nav_links">
                        <li><a href="https://copymedia.github.io/about.html" class="feet-link">About</a></li>
                        <li><a href="https://copymedia.github.io/corporate-news.html" class="feet-link">Corporate News</a></li>
                    </ul>
                </div>

                <div class="footersection">
                    <p class="fs-head">Industries</p>
                    <ul class="feet-nav_links">
                        <li><a href="#" class="feet-link">Entertainment</a></li>
                        <li><a href="#" class="feet-link">Infomationtechnology (IT)</a></li>
                    </ul>
                </div>

                <div class="footersection">
                    <p class="fs-head">Information</p>
                    <ul class="feet-nav_links">
                        <li><a href="https://copymedia.github.io/sitemap.html" class="feet-link">Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="copyright">&copy; ${new Date().getFullYear().toString()}, CopyMedia. All Rights Reserved.</p>
`

document.addEventListener('DOMContentLoaded', (e) => {

    Footer.innerHTML = FooterHTML;
    Header.innerHTML = HeaderHTML;
    MobileNavBar.innerHTML = MobileNavBarHTML;

    const Hamburger = document.getElementById("mnb-hamburger-btn")

    Hamburger.addEventListener("click", (e) => {

        if(MobileNavBar.style.display === "none"){
            MobileNavBar.style.display = "block"
            Hamburger.innerText = "X"
            return;
        }
        if(MobileNavBar.style.display === "block"){
            MobileNavBar.style.display = "none"
            Hamburger.innerText = "≡"
            return;
        }

    })

})