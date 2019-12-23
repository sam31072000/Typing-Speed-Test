window.onload = () => {
		
		const setofwords=["Computer programmers write and test code that allows computer applications and software programs to function properly"," They turn the program designs created by software developers","Engineers into instructions that a computer can follow","In addition, programmers test newly created applications and programs to ensure that they produce the expected results","If they do not work correctly"," computer programmers check the code for mistakes and fix them"];
		const msg=document.getElementById('msg');
		const typeWords=document.getElementById('typebox');
		const btn=document.getElementById('btn');
		let startTime,endTime;
		
		const playGame = ()=>{
			let randomnumber=Math.floor(Math.random()*setofwords.length);
			//console.log(randomnumber); 
			msg.innerText = setofwords[randomnumber];
			let date=new Date();
			startTime=date.getTime();
			btn.innerText="Done";
			btn.className="btn btn-primary";
		};
		
		const endPlay = ()=>{
			let date=new Date();
			endTime=date.getTime();
			let totalTime = ((endTime-startTime)/1000);
			//console.log(totalTime);
			let totalStr=typeWords.value;
			typeWords.value="";
			let wordCount=wordCounter(totalStr);
			let speed= Math.round((wordCount/totalTime)*60);
			let finalMsg="You typed words at the speed of "+ speed +" words per minute in which ";
			finalMsg+=compareWords(msg.innerText,totalStr);
			msg.innerHTML=finalMsg;
		}
		
		const compareWords = (str1,str2) =>{
			let words1=str1.split(" ");
			let words2=str2.split(" ");
			let count=0;
			words1.forEach(function(item,index){
				if(item == words2[index])
					{count++;}
			})

			let errorWords=(words1.length-count);
			return ( count + " words are correct out of  " + words1.length + " words and total error is " + errorWords + " .");
		}
		
		const wordCounter = (str)=>{
			let response = str.split(" ").length;
			return response;
		}

		btn.addEventListener('click',function(){
			//console.log(this);
			if(this.innerText == 'Start'){
				typeWords.disabled = false;
				playGame();
			}
			else if(this.innerText == "Done")
			{
				typeWords.disabled= true;
				btn.innerText = "Start";
				btn.className="btn btn-success";
				endPlay();
			}
		})

}