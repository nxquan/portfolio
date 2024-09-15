function showProjects(company, event) {
  const tabs = document.querySelectorAll('.project-tab');

  const buttons = document.querySelectorAll('button');

  tabs.forEach(tab => tab.classList.add('hidden'));

  buttons.forEach(btn => btn.classList.remove('border-b-2', 'border-secondary'));

  document.getElementById(`${company}-projects`).classList.remove('hidden');

  event.target.classList.add('border-b-2', 'border-secondary');
}

const downloadCV = () => {
  window.open('https://portfolio-nxquan.s3.amazonaws.com/CV+-+Nguyen+Xuan+Quan.pdf', '_blank');
}