const questions = document.querySelectorAll('.question');

questions.forEach(question => {

    const plusIcon =question.querySelector('.imgSize img');
    const answer = question.nextElementSibling;

    plusIcon.addEventListener('click',  () =>{

        if(answer.classList.contains('active')){
            answer.classList.remove('active');
            plusIcon.src = './assets/images/icon-plus.svg'
        }else{
            questions.forEach(q =>{
                q.nextElementSibling.classList.remove('active');
                q.querySelector('.imgSize img').src = './assets/images/icon-plus.svg'
            })
    
            answer.classList.toggle('active');
    
    
            plusIcon.src = plusIcon.src.includes('icon-plus.png') 
                ? './assets/images/icon-plus.svg'
                : './assets/images/icon-minus.svg'
        }
    })
})