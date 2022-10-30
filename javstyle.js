let btn=document.querySelector('button'); 

let grades=document.querySelector('#success');



function success(){

	let turn=Math.floor(Math.random()*2);
	let picset;

	if (turn==0){

		picset='college-board-books.jpg 900w, college-board-books-400w.jpg 400w';

	}

	else{

		picset='good-grades.jpg 1024w, good-grades-400w.jpg 400w';

	}

	grades.srcset=picset;


}

btn.addEventListener('click', success);