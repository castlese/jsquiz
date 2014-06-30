var quiz = {
	score: 0,
	questions: [
		{question: "Anemophobia is the fear of what?", choices: ["Spiders", "The Dark", "Fire", "Wind"], correctAnswer: 3},
		{question: "Hypermetropic people are what?", choices: ["obese", "underfed", "moody", "far sighted"], correctAnswer: 3},
		{question: "What is the more usual name for Roentgen Rays?", choices: ["X Rays", "Gamma Rays", "Ultraviolet Rays", "Magnetic Resonance"], correctAnswer: 0},
		{question: "Fredrick Sanger invented which life saver?", choices: ["Insulin", "Safety Pin", "Inflatable Life Raft", "Aspirin"], correctAnswer: 0},
		{question: "What are Lanthanides?", choices: ["Elements in the periodic table", "Mountains on Earth", "Mountains on the Moon", "Bacterium"], correctAnswer: 0}
	],
	populateQuestion: function(questionNumber){
		$("#question-text").text(quiz.questions[questionNumber].question);
		$("#quiz-form").attr("name", questionNumber);
		for(i=0; i<4; i++){
			var choice = "choice" + i.toString();
			var choiceText = quiz.questions[questionNumber].choices[i]; 	
			$("label[for='" + choice + "'").text(choiceText);
			$("#" + choice).val(i).removeAttr("checked");
		}
	},
	submitQuestion: function(){
		var questionNumber = parseInt($("#quiz-form").attr("name"));
		var chosenAnswer = $('input[name=radQuestion]:checked', '#quiz-form').val();
		this.checkAnswer(questionNumber, chosenAnswer);
	},
	checkAnswer: function(questionNumber, chosenAnswer){
		//WHY is === not used here, is it becasue of reference variable stuff???
		if(this.questions[questionNumber].correctAnswer == chosenAnswer){
			this.addScore();
		} 
		if(questionNumber < this.questions.length-1){
			this.populateQuestion(questionNumber+1);		
		} else {
			this.showScore();
		}
	},
	addScore: function(){
		this.score += 1;
	},
	showScore: function(){
		$("#next").attr("disabled", "disabled")
		$("#question").html("Your Score: " + this.score.toString());
	}
}



$(document).ready(function(){
	quiz.populateQuestion(0);
	$("#next").on("click", function(){
		quiz.submitQuestion();
	});
});