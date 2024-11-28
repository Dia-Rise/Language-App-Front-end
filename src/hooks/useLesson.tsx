import { createContext, ReactNode, useContext, useState } from "react";
import { getLessonsById } from "../resources";
import { LessonSlideType } from "../data/lessons/example.lesson";

// CONTEXT
type LessonContextProps = {
	lesson: LessonSlideType[] | null;
	// currentSlideTitle: string;
	currentSlideIndex: number;
	nextSlide: () => void;
	getLesson: () => void;
};

export const LessonContext = createContext<LessonContextProps>({
	lesson: null,
	// currentSlideTitle: "",
	currentSlideIndex: 0,
	nextSlide: () => {},
	getLesson: () => {},
});

type LessonProviderProps = {
	children: ReactNode;
};

export function LessonProvider({ children }: LessonProviderProps) {
	const [lesson, setLesson] = useState<LessonSlideType[] | null>(null);
	// const [currentSlideTitle, setCurrentSlideTitle] = useState<string>("Lorem ipsum");
	const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

	function getLesson() {
		setLesson(getLessonsById());
	}

	function nextSlide() {
		if (!lesson) return;
		const newIndex = currentSlideIndex + 1;
		// setCurrentSlideTitle(lesson[newIndex].title || "");
		setCurrentSlideIndex(newIndex);
	}

	return (
		<LessonContext.Provider value={{ lesson, getLesson, currentSlideIndex, nextSlide }}>
			{children}
		</LessonContext.Provider>
	);
}

export function useLessons() {
	return useContext(LessonContext);
}
