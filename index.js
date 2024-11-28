document.addEventListener('DOMContentLoaded', () =>{
  const faqContainer = document.querySelector('.faq-accordion');


  faqContainer.addEventListener('click', (e)=>{
    const groupHeader = e.target.closest('.faq-dropdown-header');

    if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupbody = group.querySelector('.faq-dropdown-body');
    const icon = groupHeader.querySelector('.faq-icon');

    icon.classList.toggle('open');
    groupbody.classList.toggle('open');

    const otherGroups = faqContainer.querySelectorAll('.faq-dropdown');

    otherGroups.forEach((otherGroup)=>{
      if(otherGroup!== group){
        const otherGroupBody = otherGroup.querySelector('.faq-dropdown-body');
        const otherIcon = otherGroup.querySelector('.faq-icon');


        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('open');

      }


    });



  });
});
  
  