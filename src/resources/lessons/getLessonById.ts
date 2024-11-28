//! CURRENTLY THERE IS NO API OR DATABASE.
//! TYPICALLY A FETCH REQUEST WOULD BE CALLED.
//! BUT UNTIL A BACKEND HAS BEEN CREATED, THIS FUNCTION WILL JUST FILTER AN ARRAY.


import { exampleLesson, LessonSlideType } from "../../data/lessons/example.lesson";

export type getLessonByIdResponse = LessonSlideType[];

export function getLessonsById(): getLessonByIdResponse {
	// return api call;
    return exampleLesson;
}
