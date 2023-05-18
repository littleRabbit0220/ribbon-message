export const MISSED_ASSIGNMENTS = "MISSED ASSIGNMENTS";
export const BEEN_ABSENT_FROM_CLASS = "BEEN ABSENT FROM CLASS";
export const BEEN_LATE_TO_CLASS = "BEEN LATE TO CLASS";
export const A_CONCERNING_GRADE = "A CONCERNING GRADE";
//-----------tones----------------------------------------------
export const PROFESSIONAL = 'Professional';
export const SUPPORTIVE = 'Supportive';
export const UPBEAT = 'Upbeat';
//----------selection---------------------------------------------
export const HOLD_A_JOB = 'Also holds a job';
export const CARETAKER = 'Also is a caretaker';
export const RECENT_ILLNESS = 'Had an illness recently';
export const RECENT_TRAVEL = 'Was travelling recently'
export const TOOK_TIME_OFF = 'Recently took time off';
//-----------Prompt 1------------------------------------------------------
export const PROMPT_ONE_MISSED_ASSIGNMENTS = (question) => 
`Write an email to a learner who is not turning in their assignments. 
Include the following instructions to the student: ${question}. 
Keep it under 3 paragraphs. Do not use the phrase 
"I hope this email finds you well."` 
export const PROMPT_ONE_BEEN_ABSENT_FROM_CLASS = (question) => 
`Write an email to an adult learner who has been absent from class. 
Include the following instructions to the student: ${question}.  
Write as the student's advisor. Keep it under 3 paragraphs. 
Do not use the phrase "I hope this email finds you well."`
export const PROMPT_ONE_BEEN_LATE_TO_CLASS = (question) => 
`Write an email to an adult learner who has been late to class. 
Include the following instructions to the student: ${question}.  
Write as the student's advisor. Keep it under 3 paragraphs. 
Do not use the phrase "I hope this email finds you well."`
export const PROMPT_ONE_A_CONCERNING_GRADE = (question) => 
`Write an email to an adult learner who has been a concerning grade. 
Include the following instructions to the student: ${question}.  
Write as the student's advisor. Keep it under 3 paragraphs. 
Do not use the phrase "I hope this email finds you well."` 
//----------------------------------------------------------------------------
export const PROMPT_ONE = (question1, question2) => {
    if(question1.toUpperCase() === MISSED_ASSIGNMENTS) return PROMPT_ONE_MISSED_ASSIGNMENTS(question2);
    else if(question1.toUpperCase() === BEEN_ABSENT_FROM_CLASS) return PROMPT_ONE_BEEN_ABSENT_FROM_CLASS(question2);
    else if(question1.toUpperCase() ===BEEN_LATE_TO_CLASS) return PROMPT_ONE_BEEN_LATE_TO_CLASS(question2);
    else if(question1.toUpperCase() ===A_CONCERNING_GRADE) return PROMPT_ONE_A_CONCERNING_GRADE(question2);
}
//------------------------------------------------------------------------------
export const PROMPT_TWO = (tone) => {
    return  `Rewrite answer about  in a more ${tone} tone `
}
//--------------------------------------------------------------------------------
export const PROMPT_THREE = (selection) => {
    let prompt = "";
    selection.forEach( item => prompt += `Update the email knowing that the learner ${item}.`);
    return prompt;
}
//--------------------------------------------------------------------------------
export const PROMPT_FOUR = "Now give me 3 versions of the above email varying by tone, length and level of detail";