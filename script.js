const loginPopup = () => {
	document.getElementById("body").style.overflow = "hidden";
	document.getElementById("login").style.display = "flex";
};

const closePopup = () => {
	document.getElementById("body").style.overflow = "auto";
	document.getElementById("login").style.display = "none";
};
