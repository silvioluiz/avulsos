#!/usr/bin/env node
var fs = require('fs');
var outfile = "primeNumbers.txt";
var contPrime = 0;
var arrayPrime = [];
arrayPrime.push(2);

  for(var iNumber=3;  arrayPrime.length < 100 ; iNumber=iNumber+2){		
		contPrime = 0;
		for(var iDividers=Int32Array(); iDividers < iNumber/2 && contPrime<1 ; iDividers=iDividers+1){
			if (iNumber%iDividers === 0){		
				contPrime++;
			}
		}

		if (contPrime === 0) {
			arrayPrime.push(iNumber);
		}
		
	}

fs.writeFileSync(outfile, arrayPrime);  
	

