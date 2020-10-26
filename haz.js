class term{
	constructor(str){
		this.n = str.length;
		this.content = str.toString().valueOf();

	}
}

class Kmap{

	constructor(l1){
		this.terms = [];
		for(let i in l1){
			this.terms[i] = l1[i];
		}
		this.t_n = this.terms.length;
		this.hz_solution = [];
	}

	hzsolve(){
		for(let i = 0; i < this.t_n; i++){
			var term1 = this.terms[i];
			for(let j = i+1; j < this.t_n; j++){
				var term2 = this.terms[j];

				this.generate(term1, term2);
				
			}
		}
	}

	is_adjacent(t1, t2){
		var n = t1.n;
		var sum = 0;
		for(let i = 0; i < n; i++){
			// check each character of both term contents
			let c1 = t1.content[i];
			let c2 = t2.content[i];

			if(c1 == '_' || c2 == '_')
				sum = sum + 0;
			else if(c1 != c2){
				sum = sum + 1;
			}
			else ;
		}
		var val = "";
		if(sum == 1){

			for(let i = 0; i < n; i++){
			// check each character of both term contents
			let c1 = t1.content[i];
			let c2 = t2.content[i];

			if(c1 == '_' || c2 == '_'){
				if(c1 == c2)
					val = val + '_';
				else {
					if(c1 == '_')
						val =val + c2;
					else 
						val = val + c1;
				}
			}
			else{
				if(c1 == c2)
					val = val + c1;
				else val = val + '_';
			}
			}

			return([1, val]);
		}
		else {
			return([0, 0]);
		}
	}

	generate(t1, t2){
		let ret, value;
		[ret, value] = this.is_adjacent(t1, t2);
		if(ret == 1){
			this.hz_solution.push(this.val2altval(value));
			console.log(value);
		}
		else {
			this.hz_solution.push("0");
			console.log(0);
		}
		
	}

	val2altval(val){
		var vars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var ans = "";
		for(let i in val){
			if(val[i] == 1){
				ans = ans + vars[i];
			}
			else if(val[i] == 0){
				ans = ans + vars[i];
				ans = ans + "'";
			}
			else{
				;
			}
		}
		return ans;
	}
}
/*

running
ter1 = new term("11_");
ter2 = new term("0_1");
k = new Kmap([ter1, ter2]);
k.hzsolve()
*/
