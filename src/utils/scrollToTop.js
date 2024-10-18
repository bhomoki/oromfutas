import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function h1Checker() {
    let timesRun = 0;
    const interval = setInterval(() => {
        timesRun += 1;
        if (timesRun === 20) {
            clearInterval(interval);
        }
        let h1Element = document.getElementsByTagName('h1')[0]?.cloneNode(true);
        if (h1Element && h1Element.hasChildNodes) {
            let foundSpan = false;
            h1Element.childNodes.forEach((element) => {
                if (element.nodeName === 'DIV' && !foundSpan) {
                    foundSpan = true;
                    h1Element = element;
                }
            });
        }
        if (h1Element && h1Element.childNodes) {
            h1Element.childNodes.forEach((element) => {
                if (element.nodeName !== 'DIV' && element.nodeName !== '#text') {
                    h1Element.removeChild(element);
                }
            });
        }
        if (h1Element && h1Element.textContent) {
            // clearInterval(interval);
            document.title = h1Element.textContent;
        }
        addHtmlClass(window.location.pathname);
    }, 300);
}

function addHtmlClass(currentUrl) {
    let htmlClass = currentUrl.split('?')[0].replace(/\//g, '').replace(/\./g, '').replace(/[0-9]/g, '');
    if (htmlClass === '') {
        htmlClass = 'recordings';
    }
    document.documentElement.className = htmlClass;
}

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        h1Checker();
    }, [pathname]);

    return null;
}
