var reposList = document.getElementById('repos-list'),
	load = function(data) {
		if(!data || !data.data || !data.data.length) return;
		var repositories = data.data,
			html = '';
		repositories.sort(function(a, b) {
			var aFork = a.fork,
				bFork = b.fork;
			if(aFork && !bFork) return 1;
			if(!aFork && bFork) return -1;
			return new Date(b.pushed_at) - new Date(a.pushed_at);
		});
		var l = repositories.length,
			lp = 0,
			lf = 0;
		for(var i = 0; i < l; i++) {
			var r = repositories[i],
				fork = r.fork ? ' class="fork"' : '',
				watchers = r.watchers,
				forks = r.forks;
			fork ? lf++ : lp++;
			html += '<li' + fork + '>' + '<a href="' + r.homepage + '">' + '<span class="info"><b class="language">' + (r.language || '') + '</b> <b class="stars">' + watchers + '</b> <b class="forks">' + forks + '</b></span>' + '<b>' + r.name + '</b> ' + '<span class="desc">' + r.description + '</span>' + '</a>';
		}
		reposList.innerHTML = html;
	};
setTimeout(function() {
	window.scrollTo(0, 1);
}, 100);