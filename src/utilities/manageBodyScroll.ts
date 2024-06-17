export function preventBodyScroll() {
	document.body.style.marginRight = window.innerWidth - document.body.clientWidth + "px";
	document.body.style.overflow = "hidden";
}

export function restoreBodyScroll() {
	document.body.style.marginRight = "";
	document.body.style.overflow = "";
}
