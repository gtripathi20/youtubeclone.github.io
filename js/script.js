//Toggle fixed Sidebar
let sidebar = document.querySelector(".fixedSidebar");
let sidebarBtn = document.querySelector(".icon-menu");

//console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


//user profile dropdown
let dropdownBtn = document.querySelector(".userProfileBtn");
let dropdownMenu = document.querySelector(".profileDropdown");

dropdownBtn.addEventListener("click", ()=>{
  dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (e.target !== dropdownMenu && e.target !== dropdownBtn) {
  	 dropdownMenu.classList.remove("show");
  }
});


//Notification Dropdown With Another Way
const toggleButton = document.getElementById('toggleButton');
const toggleBox = document.getElementById('toggleBox');

document.onclick  = function(e){
	if(e.target.id !== 'toggleBox' && e.target.id !== 'toggleButton')
	{
		toggleBox.classList.remove('show')
	}
}

toggleButton.onclick = function(){
	toggleBox.classList.toggle('show');
}


//show more && show less
let showMoreBtn = document.querySelector(".showMoreBtn");
let subscribedChannel = document.querySelector(".subscribedCh");

showMoreBtn.addEventListener('click',(e)=> {
	subscribedChannel.classList.toggle("showMore");
	if(showMoreBtn.innerText === 'Show More'){
		showMoreBtn.innerText = 'Show Less';
	}
	else{
		showMoreBtn.innerText = 'Show More';
	}
})




