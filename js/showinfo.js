/* var boton1 = document.querySelector('.toggleClass1');
var info1 = document.querySelector('#info1');

var boton2 = document.querySelector('.toggleClass2');
var info2 = document.querySelector('#info2');

var boton3 = document.querySelector('.toggleClass3');
var info3 = document.querySelector('#info3');

var boton4 = document.querySelector('.toggleClass4');
var info4 = document.querySelector('#info4');

boton1.addEventListener('click', () => {
  if (info1.classList.contains('hidden-info')) {
    info1.classList.remove('hidden-info');
  } else {
    info1.classList.add('hidden-info');
  }
});

boton2.addEventListener('click', () => {
  if (info2.classList.contains('hidden-info')) {
    info2.classList.remove('hidden-info');
  } else {
    info2.classList.add('hidden-info');
  }
});

boton3.addEventListener('click', () => {
  if (info3.classList.contains('hidden-info')) {
    info3.classList.remove('hidden-info');
  } else {
    info3.classList.add('hidden-info');
  }
});

boton4.addEventListener('click', () => {
  if (info4.classList.contains('hidden-info')) {
    info4.classList.remove('hidden-info');
  } else {
    info4.classList.add('hidden-info');
  }
});
 */

var jobs = document.querySelectorAll('.job');

for (i = 0; i <= jobs.length; i++) {
  const job = jobs[i];

  if (job.children) {
    job.children.item(0).addEventListener('click', () => {
      const jobInfo = job.querySelector('.hidden-info');

      if (jobInfo.classList.contains('visible-info')) {
        jobInfo.classList.remove('visible-info');
      } else {
        jobInfo.classList.add('visible-info');
      }
    });
  }
}
