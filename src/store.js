import { MeatWords, DoctorWords, GermanWords, DutchWords } from './data/words';

export const store = {
  state: {
    meatWords: MeatWords,
    doctorWords: DoctorWords,
    germanWords: GermanWords,
    dutchWords: DutchWords,
    section: 'home',
    wordsType: '',
  },
  changeSection(sectionObject) {
    this.state.section = sectionObject.section;
    this.state.wordsType = sectionObject.wordsType;
  },
}