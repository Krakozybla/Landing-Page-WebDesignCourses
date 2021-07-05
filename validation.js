window.addEventListener('load', function(){
    let CallMdWindow = document.querySelector('.menu__sign');
    let ModalWindow = document.querySelector('.modal');
    let btnCloseMdWindow = document.querySelector('.modal-form__close');
    let form = document.querySelector('.modal-form');
    let inputs = document.querySelectorAll('.modal-form__input');
    console.log(inputs);

    btnCloseMdWindow.addEventListener('click', function(){
        ModalWindow.classList.remove('modal-window__open');
    })
    CallMdWindow.addEventListener('click', function(){
        ModalWindow.classList.add('modal-window__open');
    })
    let patterns = {
        name: /.+/,
        phone: /\d{7,15}/,
        email: /.+@.+\..+/
    }
    let validationRules = {
        name: {
            rule: 'name',
            msg: 'Please, write a correct name!'
        },
        phone: {
            rule: 'phone',
            msg: 'Please, writte a correct phone number!'
        },
        email: {
            rule: 'email',
            msg: 'Please, writte a correct email adress'
        }
    }
    form.addEventListener('submit', function(e){
        //let isErr = false;
        e.preventDefault();
        inputs.forEach(item=>{
            let validRuleType = validationRules[item.name];
            let vType = validRuleType.rule;
            let pattern = patterns[vType];
            let val = item.value.trim();
            let errMsg = item.nextElementSibling;
            if(!pattern.test(val)){
                item.classList.add('err');
                errMsg.innerHTML = validRuleType.msg
                isErr = true
                /*if(isErr){
                    e.preventDefault();
                    console.log('False')
                } */
            }
            /*if(isErr === false){
                item.classList.remove('err');
                errMsg.innerHTML = ''
                console.log('true');
            } */
        })
    })
})