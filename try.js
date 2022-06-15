function add() {
   const ul = document.getElementById('ul');
   const li = document.createElement('li');
   li.style =
      'height : 80px;color :aqua; width:;font-weight : bold ; padding-left:100px; position : relative';
   const writeText = document.getElementById('writeText').value;
   const ad = document.createTextNode(writeText);
   li.appendChild(ad);
   if (writeText === '') {
      alert('Please add something');
   } else {
      document.getElementById('ul').appendChild(li);
   }
   var span = document.createElement('SPAN');
   var code = document.createTextNode('\u00d7');
   span.className[0] = 'close';
   span.appendChild(code);
   li.appendChild(span);
   span.style =
      ' font-size:large; color : red; padding-left : 250px;margin-left: 40px; cursor : pointer ; width : 80%; height : 80px; position :relative';
   const close = document.getElementsByClassName('close');
   for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
         var div = this.parentElement;
         div.style.display = 'none';
         ul.style.display = 'none';
      };
   }
}
