// console.log("-------------Question 1---------------")
function createCourse(options = {}) {
	let course = {
                courseName: "default name",
                courseDuration: "default duration",
                courseOwner: "default owner",
           
	};
	Object.assign(course, options);
	console.log(`courseName = ${course.courseName}
    courseDuration = ${course.courseDuration}
    courseOwner = ${course.courseOwner}
    `);
}
createCourse({ courseName: "JavaScript", courseDuration: "2 Weeks", courseOwner: "Ahmed" });



// console.log("-------------Question 2---------------")

 // Fetch users and create tabs 
 function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        		return response.json();
        	})
        .then((users) => {
            displayUserTabs(users);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Display user tabs
function displayUserTabs(users) {
    let userTabs = document.getElementById('userTabs');
    users.forEach(user => {
        let tab = document.createElement('button');
        tab.classList.add('tab');
        tab.textContent = user.username;
        tab.addEventListener('click', () => {
            fetchUserPosts(user.id);
        });
        userTabs.appendChild(tab);
    });
}

// Fetch user posts on tab click (Using async/await)
async function fetchUserPosts(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        let posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Display posts in a list
function displayPosts(posts) {
    let postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';  // Clear previous posts

    let list = document.createElement('ul');
    posts.forEach(post => {
        let listItem = document.createElement('li');
        listItem.textContent = post.title;
        list.appendChild(listItem);
    });

    postsContainer.appendChild(list);
}

fetchUsers();