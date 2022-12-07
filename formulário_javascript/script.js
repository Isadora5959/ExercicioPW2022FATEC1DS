const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}
  
var phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}


function is_cpf (c) {

	if((c = c.replace(/[^\d]/g,"")).length != 11)
	  return false
  
	if (c == "00000000000" || 
	c == "11111111111" ||
	c == "22222222222" ||
	c == "33333333333" ||
	c == "44444444444" ||
	c == "55555555555" ||
	c == "66666666666" ||
	c == "77777777777" ||
	c == "88888888888" ||
	c == "99999999999")
	  return false;
  
	var r;
	var s = 0;
  
	for (i=1; i<=9; i++)
	  s = s + parseInt(c[i-1]) * (11 - i);
  
	r = (s * 10) % 11;
  
	if ((r == 10) || (r == 11))
	  r = 0;
  
	if (r != parseInt(c[9]))
	  return false;
  
	s = 0;
  
	for (i = 1; i <= 10; i++)
	  s = s + parseInt(c[i-1]) * (12 - i);
  
	r = (s * 10) % 11;
  
	if ((r == 10) || (r == 11))
	  r = 0;
  
	if (r != parseInt(c[10]))
	  return false;
  
	return true;
  }
  
  
  function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
  }
  
	function fMascEx() {
  obj.value=masc(obj.value)
  }
  
  function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
  }
  
  cpfCheck = function (el) {
	  document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)? 
	  '<span style="color:green"></span>' : '<span style="color:red">*</span>';
	  if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
  }
