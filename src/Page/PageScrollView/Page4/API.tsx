import GrammarPro from "./GrammarPro/GrammarProAPI";
import VocaPro from "./VocaPro/VocaProAPI";
import ModelAnswer from './ModelAnswer'

const API = ({ target } : { target : number}) => {
    console.log('[API] target :', target)
  return (
    <>
      { target === 0 && <VocaPro />}
      { target === 1 && <GrammarPro />}
      { target === 2 && <ModelAnswer />}
    </>
  );
};

export default API;
