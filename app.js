
const White = 'hsl(0, 0%, 100%)';

const equil = document.getElementById('intro'); 
const jules = document.getElementById('name');

equil.addEventListener('mouseover',function(){
	equil.style.color = 'hsla(178, 100%, 50%,0.7)';
	equil.style.cursor = 'pointer';
	
});

jules.addEventListener('mouseover',function(){
	jules.style.color = 'hsla(178, 100%, 50%,0.7)';
	jules.style.cursor = 'pointer';
});

equil.addEventListener('mouseleave',function(){
	equil.style.color = White;
});

jules.addEventListener('mouseleave',function(){
	jules.style.color = White;
});

