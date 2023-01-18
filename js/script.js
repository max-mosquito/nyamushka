
const card = document.querySelectorAll('.card');
const startText = 'Чего сидишь? Порадуй котэ, <span class="underline">купи</span><span>.</span>';
const cardText = document.querySelectorAll('.card_text p');
const arrTexts = [
	'Печень утки разварная с артишоками.',
	'Головы щучьи с чесноком да свежайшая сёмгушка.',
	'Филе из цыплят с трюфелями в бульоне.',
	];
const disabledText = [
	'Печалька, с фуа-гра закончился.',
	'Печалька, с рыбой закончился.',
	'Печалька, с курой закончился.',
	];
cardText.forEach(item=>{
	item.innerHTML = startText
})

card.forEach((item, i)=>{
	item.addEventListener('click', (e)=>{
		console.log(e.target);
		if(e.target.className == 'item' || e.target.className == 'underline'){
			item.classList.toggle('selected');
			if(item.classList.contains('selected')){
				cardText[i].innerHTML = arrTexts[i];
			}else{
				cardText[i].innerHTML = startText;
			}
		}
	})
})


card.forEach(item =>{
	item.addEventListener('mouseout', ()=>{
		if (item.classList.contains ('selected') !== true){
			item.classList.toggle('hoverNormal');
			item.classList.remove('hoverSelected');
		}else{
			item.classList.remove('hoverNormal');
			item.classList.toggle('hoverSelected');
		}
	})
})

card.forEach((item, i)=>{
	item.addEventListener('dblclick', ()=>{
		item.classList.add('disabled');
		cardText[i].innerHTML = disabledText[i];
	})
})