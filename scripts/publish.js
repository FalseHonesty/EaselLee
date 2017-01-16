function publish () {
	var canvas = $("#c").get(0);
	var data= canvas.toDataURL();
	var el = $(".post").last();
	var insertion = "<div class='post'><div class='post-profile'><img class='post-prof-photo' src='images/profile-picture-holder.svg' style='width:100px;'/><h4>Your Username</h4></div><img class='post-sketch' src=" + data + " /><hr/></div>"
	el.after(insertion);
	$("#submit").addClass("sent");
	setTimeout(function () {
		$("#submit").removeClass("sent");
	},2000)
}