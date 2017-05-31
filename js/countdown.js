var countdowns = new Array();

$('.countdown').each(function() {

	var startTime = $(this).attr('data-start-time');
	if (!startTime)
		startTime = "0";

	var step = $(this).attr('data-step');
	if (!step)
		step = "1";

	var countdown = $(this);
	countdown.time = parseInt(startTime);
	countdown.step = parseInt(step);
	countdown.item = $(this);

	countdowns.push(countdown);
});

setInterval(function() {

	for (var i = 0; i < countdowns.length; ++i) {

		var countdown = countdowns[i];
		countdown.time += countdown.step;
		countdown.item.html(countdown.time);
	}

}, 50);