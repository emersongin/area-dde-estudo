window.onload = function() {
    function getData(url, callback) {
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

    function getTitle(data) {
        let title = document.getElementById('subject-title');
        let course = document.getElementById('subject-course');
        let teacher = document.getElementById('subject-teacher');

        data = data.shift();

        title.innerHTML = data.title;
        course.innerHTML = `<b>Curso:</b> ${data.course}`;
        teacher.innerHTML = `<b>Prof.:</b> ${data.teacher}`;
    } 

    function loadTitle() {
        getData("data/subjects.json", getTitle);
    }

    function getCourses(data) {
        let content = document.getElementById('main-content');
        
        data.forEach(item => {
            let child = document.getElementById('template-course').content.cloneNode(true);
            child.querySelector('.card-header').innerHTML = item.title;
            child.querySelector('.card-body').id = item.tag;
            content.appendChild(child);
        });

        getData("data/links.json", getLinks);
    }

    function getLinks(data) {
        data.forEach(link => {
            let parent = document.querySelector(`#${link.tag}`);
            let row = document.createElement('p');
            row.innerHTML = link.description;

            parent.appendChild(row);
        });
        
    }

    function loadContent() {
        getData("data/courses.json", getCourses);
    }

    loadTitle();
    loadContent();
};