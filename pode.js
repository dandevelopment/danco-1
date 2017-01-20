<!doctype HTML>
<html>
<head>
<title>pod</title>
<style>
	.button {
	  background-color: cornflowerblue;
	  /* Green */
	  //border: solid;
    border-color:black;
	  color: white;
	  padding: 5px 10px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 16px;
	  transition-duration: 1s;
	  margin: 5px;
    margin-top:0px;
    border-radius: 5px;
    border-top-right-radius:0px;
    border-top-left-radius:0px;
	  border:none;
	  /*box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);*/
	}
	
	.button1 {
	  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	
	.button:hover {
	  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
	  color: dodgerblue;
	  background-color: white;
	  padding: 15px;
	}
	
	.one {
	  text-decoration: none;
	  color: grey;
	  border-radius: 40px;
	  border: solid;
	  background-color: #efefef;
	  padding: 10px;
	  transition-duration: 1s;
	  // margin:40px;
	}
	
	.one:hover {
	  border-radius: 0px
	}
	
	.sg {
	  border: solid;
	  margin: 10px;
	}
	
	.part {
	  width: 40%;
	  border: solid;
	  padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color:#efefef;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
	}
.oth{

}

</style>
</head>
<script>
	pass();

	function pass() {
	  var res = window.prompt('Enter passcode to continue:')
	  if (res != '1248') {
	    pass();
	  }
	}
	var encrypt = '';
	var decrypt = '';
	var encrypted = '';
	var decrypted = '';
	console.log('started');
	setInterval(function() {
	  if ('' != document.getElementById('encrypt').value) {
	    encryptf();
	  }
	}, 1000);

	function encryptf() {
	  console.log('encrypt starting...');
	  encrypt = document.getElementById('encrypt').value;
	  var therand = Math.floor(Math.random() * 1000);
	  var en = therand + 'I';
	  var i = 0;
	  var est = '';
	
	  while (i != encrypt.length) {
	    est = Math.floor(Math.random() * 10000);
	    en = en.concat('|' + '`' + est * 3);
	    en = en.concat('|' + Math.floor(Math.floor(Math.floor(encrypt.charCodeAt(i) * 76754) + therand) * est));
	    if (Math.floor(Math.random() * 10) < 5) {
	      en = en.concat('|' + '^' + Math.floor(Math.random() * 10000));
	    }
	    i++;
	  }
	  console.log(en)
	  document.getElementById('encrypted').innerHTML = en;
	  console.log('encrypt finished');
	  console.log(' ');
	}
	setInterval(function() {
	  if ('' != document.getElementById('decrypt').value) {
	    decryptf();
	  }
	}, 1000);

	function decryptf() {
	  console.log('decrypt starting...');
	  decrypt = document.getElementById('decrypt').value;
	  var enc = '';
	  var theotherrand = decrypt.split("I");
	  var leet = theotherrand[0];
	  console.log('INTEGER: ' + leet);
	  var ic = 0;
	  var charachterssplit = theotherrand[1].split("|");
	  var ezo = '';
	  while (ic != charachterssplit.length) {
	    if (charachterssplit[ic].charAt(0) == '`') {
	      ezo = charachterssplit[ic].split('`')[1];
	    }
	    if (charachterssplit[ic].charAt(0) != '`') {
	      if (charachterssplit[ic].charAt(0) != '^') {
	        enc = enc.concat(String.fromCharCode(Math.floor(Math.floor(Math.floor(charachterssplit[ic] / Math.floor(ezo / 3)) - leet)) / 76754));
	      }
	    }
	    ic++;
	  }
	  console.log(enc);
	  document.getElementById('decrypted').innerHTML = enc;
	  console.log('decrypt finished');
	  console.log(' ');
	}

	function getEN() {
	  window.prompt("Copy to clipboard: Ctrl+C, Enter", document.getElementById('encrypted').value);
	}

	function getDE() {
	  window.prompt("Copy to clipboard: Ctrl+C, Enter", document.getElementById('decrypted').value);
	}
	var rrrt = 0;
       setInterval(function(){
		if(100 > rrrt){
			rrrt++;
	document.getElementById('ghf').style.width = rrrt + '%';
	} else {
		rrrt = 0;
		}
	},10);
</script>
<body style="font-family:Verdana;padding:20px;background-color:white">
	<div style="height:3px;background-color:#efefef;margin-bottom:10px;width:100%"><div id="ghf" style="height:100%;background-color:blue;width:9px"></div></div>
  <span class="part" style="float:left">
<span href="#" style="" class="one" onclick="encryptf()">
    <input placeholder="Encrypt" style="border:none;border-bottom:solid;background-color:#efefef;" id="encrypt">
		</span>
    <br><br>
  <textarea id="encrypted" readonly cols="20" rows="3" style="float:right"class="oth">encrypted</textarea>
  <p style="float:right" onclick="getEN()" class="button">COPY</p>
  </span>

  <span class="part" style="float:right">
<span href="#" style="" class="one">
<input placeholder="Decrypt" style="border:none;border-bottom:solid;background-color:#efefef;" id="decrypt"></span>
    <br><br>
    <textarea id="decrypted" readonly cols="20" rows="3" style="float:right"class="oth">decrypted</textarea>
<p style="float:right" onclick="getDE()" class="button">COPY</p>
</span>
  <!--
  <div>
    <span href="#" style="" class="one" onclick="encryptf()">
    <input placeholder="Encrypt" style="border:none;border-bottom:solid;background-color:#efefef;" id="encrypt">
		</span>
    <span>
      <span class="sg">
    <p style="float:right" onclick="getEN()" class="button">COPY</p>
    <textarea id="encrypted" readonly cols="20" rows="3" style="float:right">encrypted</textarea></span>
      <span class="sg">
    <p style="float:right" onclick="getDE()" class="button">COPY</p>
    <textarea id="decrypted" readonly cols="20" rows="3" style="float:right">decrypted</textarea></span>
    </span>
  </div>

  <div>
    <span href="#" style="" class="one">
    <input placeholder="Decrypt" style="border:none;border-bottom:solid;background-color:#efefef;" id="decrypt">
  </span>
  </div>-->
</body>

</html>