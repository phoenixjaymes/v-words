import { MeatWords, DoctorWords, GermanWords } from './data/words';

export const store = {
  state: {
    meatWords: MeatWords,
    doctorWords: DoctorWords,
    germanWords: GermanWords,
    section: 'home',
    wordsType: '',
  },
  changeSection(sectionObject) {
    this.state.section = sectionObject.section;
    this.state.wordsType = sectionObject.wordsType;
  },
}