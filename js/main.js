const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


function dashboard()
{
	window.open("pages/dashboard.html");
	//window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	window.close();
	
}

function logOut()
{
	window.open ("file:///C:/Users/soham/OneDrive/Desktop/New folder/Responsive-Login-Form-master/login.html");
}

const showMenu = (toggleId,navId) =>
{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId);

	if(toggle && nav)
	{
		toggle.addEventListener('click' , ()=>{
			nav.classList.toggle('show');
		})
	}
}
