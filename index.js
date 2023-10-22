const percentAPI = {
	pa(p,a) {
		return (p*a)/100;
	},
	ap(a,p) {
		return percentAPI.pa(p,a);
	},
	pb(p,b) {
		return (100*b)/p;
	},
	bp(b,p) {
		return percentAPI.pb(p,b);
	},
	ab(a,b) {
		return (100*b)/a;
	},
	ba(b,a) {
		return percentAPI.ab(a,b);
	}
};

Math.percent = percentAPI;
