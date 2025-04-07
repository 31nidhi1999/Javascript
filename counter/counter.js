let counter = 0
let value=document.querySelector('#counter')
let btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            counter--
        }else if(styles.contains('increase')){
            counter++
        }else if(styles.contains('reset')){
            counter = 0
        }
        value.textContent = counter
        if(counter>0){
            value.style.color = 'green'
        }else if(counter < 0){
            value.style.color = 'red'
        }else{
            value.style.color ='black'
        }
    })
})
