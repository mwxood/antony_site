const tabs = ({tabsNav, tabsContent, activeNavClass, activeTabClass}) => {
    const tabNav = document.querySelectorAll(tabsNav);
    const tabContent = document.querySelectorAll(tabsContent);


    if(!tabNav) {return;}

    const hideTabs = () => {
        tabContent.forEach(item => {
           item.classList.remove(activeTabClass);
        });

        tabNav.forEach(item => {
           item.classList.remove(activeNavClass);
        });
    }

    const showTab = (i) => {
        tabContent[i].classList.add(activeTabClass);
        tabNav[i].classList.add(activeNavClass);
    }

    tabNav.forEach((item, i) => {
       item.addEventListener('click', (e) => {
           e.preventDefault();
           hideTabs();

           showTab(i);
       }) ;
    });

}

export default tabs;