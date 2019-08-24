(function(){
    window.onload = ready;

    function ready() {
        loadHeader();
        loadMain();
    };

    function loadHeader() {
        loadData("data/subjects.json", createHeader);
    }

    function loadMain() {
        loadData("data/courses.json", createMain);
    }

    function loadData(url, callback) {
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(JSON.parse(this.responseText));
            }
        };
        xhttp.open("GET", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

    function createHeader(data) {
        let header = document.getElementById('header-content');
        let subject = document.getElementById('template-header').content.cloneNode(true);

        data = data.shift();

        subject.querySelector('#subject-title').innerHTML = data.title;
        subject.querySelector('#subject-course').innerHTML = `Curso: ${data.course}`;
        subject.querySelector('#subject-teacher').innerHTML = `Prof.: ${data.teacher}`;

        header.appendChild(subject);
    } 

    function createMain(data) {
        let main = document.getElementById('main-content');
        
        data.forEach(course => {
            let square = document.getElementById('template-course').content.cloneNode(true);
            let accordion = document.getElementById('template-accordion').content.cloneNode(true);

            square.querySelector('.card-header').innerHTML = course.title;
            square.querySelector('.card-body').id = course.tag;

            accordion.querySelector('#template-accordion-id').id = `accordion-${course.tag}`;

            square.querySelector(`#${course.tag}`).appendChild(accordion);
            main.appendChild(square);
        });

        loadData("data/links.json", createLinks);
    }

    function createLinks(data) {
        
        data.forEach(link => {
            let idAccordion = `accordion-${link.tag}`;
            let idTab = `tab-${link.tag}-${link.slug}`;
            let idButton = `${idTab}-button`;
            let idCollapse = `${idTab}-collaps`;
            let idList = `${idTab}-list`;

            let accordion = document.querySelector(`#${idAccordion}`);
            let tab = accordion.querySelector(`#${idTab}`);
            
            if (tab === null) { addTab(); }
            addLink();

            function addLink(){
                let list = document.getElementById(`${idList}`);
                let row = document.createElement('a');

                row.innerHTML = link.name;
                row.href = link.href;
                row.target = "blank";
                row.classList.add('list-group-item', 'list-group-item-action');

                list.appendChild(row);
            }

            function addTab() {
                let templateTab = document.getElementById('template-tab').content.cloneNode(true);

                templateTab.querySelector('#template-tab-id').id = idTab;
                templateTab.querySelector('#template-tab-button-id').id = idButton;
                templateTab.querySelector('#template-tab-collapse-id').id = idCollapse;
                templateTab.querySelector('#template-tab-list-id').id = idList;

                templateTab.querySelector(`#${idButton}`).innerHTML = link.slug;
                templateTab.querySelector(`#${idButton}`).setAttribute('data-target', `#${idCollapse}`);
                templateTab.querySelector(`#${idButton}`).setAttribute('aria-controls', idCollapse);
                                
                templateTab.querySelector(`#${idCollapse}`).setAttribute('aria-labelledby', idTab);
                templateTab.querySelector(`#${idCollapse}`).setAttribute('data-parent', `#${idAccordion}`);

                accordion.appendChild(templateTab);
            }
        });
        
    }
})()