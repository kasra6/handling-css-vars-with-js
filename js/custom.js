const controls = document.querySelectorAll('.controls input');

function update(){
  const suffix = this.dataset.sizing || '';
  console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(function(control){
  control.addEventListener('change', update)});
